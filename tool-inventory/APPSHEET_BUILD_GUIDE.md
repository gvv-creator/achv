# ACHV Tool Inventory: AppSheet build guide

Tag-in / tag-out for ACHV tools using QR labels, Google Sheets and AppSheet.

**Data sheet (already created):** ACHV Tool Inventory - AppSheet data
https://docs.google.com/spreadsheets/d/1yagycmBMefosdBnAzmWe_GSuNc3pFgN6uQ4CG3bmYVE/edit

Delete the `SAMPLE` rows in `Tools` and `Sites` before go-live.

## 1. Design decisions (the improvements)

1. **One scan, the app decides.** Users press a single *Scan* button. A tool in storage opens the *Take out* form. A tool that is out opens *Return / transfer*. Nobody picks "in" or "out" by hand.
2. **Every physical item gets its own tag.** The purchase list has lines like "10 x step ladder" and "4 x impact driver". Each unit gets its own ID (`T-0001`, `T-0002`, ...), so you know which one is missing or damaged.
3. **Consumables are not tagged.** Screws, tape, bags, discs and gloves are quantity-based. Tagging them makes the system painful to use. Track them separately later if needed.
4. **The log is the source of truth.** `Movements` is append-only (who, what, where, when). The `Tools` status columns are only a cache of the latest move.
5. **Return date is optional.** Left blank, the tool is treated as long-term and never flagged overdue. If a date is set, the tool goes on the admin's overdue list.
6. **Admin "recall" request.** An admin presses *Request return* or *Deliver to site* on a tool that is out. The holder gets an email and a push notification. It is logged in `Requests`.
7. **Remember the last site.** The site field defaults to that user's last site, so taking out ten tools to the same site takes ten scans and one dropdown.
8. **Condition on return.** A *Needs repair* return sets the tool to *Maintenance* and alerts admins.
9. **Photo field** on each tool. It helps when the label is damaged and someone has to identify the item.
10. **Scan fallback.** The camera scans the QR code. A Bluetooth scanner also works, because it types the ID. Users can type the ID too, so a scuffed label never blocks work.

## 2. Tables

Add the spreadsheet as an AppSheet data source (*Create > App > Start with existing data*), then add each tab as a table.

| Table | Key | Notes |
|---|---|---|
| Tools | `ToolID` | Label = `Name`. Set `Photo` to type *Image*. |
| Sites | `SiteID` | Label = `SiteName`. |
| Staff | `Email` | `Role` is Admin or User. |
| Movements | `MoveID` | Allow *Adds* only. Turn off *Updates* and *Deletes* so the log stays clean. |
| Requests | `ReqID` | Allow *Adds* only for admins. |
| Lists | none | Reference only. Do not add it as a table. Use it as enum values. |

### Column types and settings

**Tools**

- `ToolID`: Text, Key. Initial value is not needed, because IDs are typed in the sheet and printed on labels.
- `Category`: Enum, values from the Lists tab (A2:A9).
- `Condition`: Enum (Good, Fair, Needs repair).
- `Active`: Yes/No-style Text (Y/N). Set the table's `Security filter` to `[Active]="Y"` so retired tools disappear from the app.
- `Status`: Enum (In storage, Out, Maintenance). Not editable by users.
- `CurrentSite`: Ref to Sites. `HeldBy`: Ref to Staff. `OutSince`: DateTime. `DueBack`: Date.
- Virtual column `IsOverdue`: `AND([Status]="Out", ISNOTBLANK([DueBack]), [DueBack] < TODAY())`.

**Movements**

- `MoveID`: Text, initial value `UNIQUEID()`.
- `Timestamp`: DateTime, initial value `NOW()`.
- `ToolID`: Ref to Tools. Set *Scan* on for this column.
- `Action`: Enum (Take out, Return to storage, Transfer to site).
- `Site`: Ref to Sites. It is required when Action is Take out or Transfer to site.
- `By`: Ref to Staff, initial value `USEREMAIL()`.
- `ExpectedReturn`: Date, optional. Never mark it required.
- `ConditionOnReturn`: Enum (Good, Fair, Needs repair). Shown only on return (see below).

**Requests**

- `ReqID`: `UNIQUEID()`. `Timestamp`: `NOW()`. `RequestedBy`: `USEREMAIL()`.
- `ToolID`: Ref to Tools.
- `RequestType`: Enum (Return to storage, Deliver to site).
- `TargetSite`: Ref to Sites, shown only when RequestType is Deliver to site.
- `Status`: Enum (Open, Done). Default `Open`.

### Valid_If and Show_If expressions

- `Movements[Site]` Show_If: `OR([Action]="Take out", [Action]="Transfer to site")`. Required_If uses the same expression.
- `Movements[ExpectedReturn]` Show_If: `[Action]<>"Return to storage"`.
- `Movements[ConditionOnReturn]` Show_If: `[Action]="Return to storage"`.
- `Movements[Site]` initial value (last site used by this person):
  `ANY(TOP(ORDERBY(SELECT(Movements[Site], [By]=USEREMAIL()), [Timestamp], TRUE), 1))`
- `Movements[Site]` Valid_If: `SELECT(Sites[SiteID], [Active]="Y")`.

## 3. How a scan decides in or out

No separate scan action is needed. The Movements form does the work:

1. In the Movements form, `ToolID` has *Scan* on. After a scan, the form fills in the tool.
2. Make `Action` an app formula (not user-entered):
   `IF([ToolID].[Status]="Out", "Return to storage", "Take out")`
   Keep it editable so a user can change it to "Transfer to site" when a tool moves from one site to another.
3. Show the tool's name, photo and current holder at the top of the form with a virtual column `Summary`:
   `[ToolID].[Name] & " - " & [ToolID].[Status] & IF([ToolID].[Status]="Out", " (" & [ToolID].[CurrentSite].[SiteName] & ")", "")`
4. Make the *Add Movement* form the app's home action (a prominent `+ Scan` button at the bottom of the user view).

*Verify in the editor:* the Scan setting on Ref columns is available in the column's *Input mode*. If your version only offers Scan on Text columns, add a Text column `ScannedID` with Scan on, and set `ToolID` to `[ScannedID]`.

## 4. Keeping Tools in sync (action and bot)

Create a **Bot** called *Apply movement*:

- **Event:** Movements, *Adds only*.
- **Process, step 1:** Run a data action on **Tools** (for the row `[ToolID]`) that sets these values:

| Column | Value |
|---|---|
| Status | `SWITCH([Action], "Take out", "Out", "Transfer to site", "Out", "Return to storage", IF([ConditionOnReturn]="Needs repair", "Maintenance", "In storage"))` |
| CurrentSite | `IF([Action]="Return to storage", "", [Site])` |
| HeldBy | `IF([Action]="Return to storage", "", [By])` |
| OutSince | `IF([Action]="Take out", [Timestamp], IF([Action]="Return to storage", "", [_THISROW].[ToolID].[OutSince]))` |
| DueBack | `IF([Action]="Return to storage", "", [ExpectedReturn])` |
| Condition | `IF(ISNOTBLANK([ConditionOnReturn]), [ConditionOnReturn], [_THISROW].[ToolID].[Condition])` |

(In the data-action editor these expressions run against the Movements row, so adjust the `[_THISROW]` parts if your version shows a different reference style.)

## 5. Notifications (admin side)

All notifications are **Bots** with an *Email* step. Add a *Notification* step (push) as well if the admins have the AppSheet app installed.

1. **Tool taken out or moved**
   - Event: Movements, Adds, condition `[Action]<>"Return to storage"`.
   - To: `SELECT(Staff[Email], AND([Role]="Admin", [Active]="Y"))`
   - Subject: `ACHV tools: <<[ToolID].[Name]>> out to <<[Site].[SiteName]>>`
   - Body: tool, tag ID, site, who took it, time and return date (or "long-term").
2. **Tool returned**
   - Event: Movements, Adds, condition `[Action]="Return to storage"`.
   - Same recipients. Mention the condition if it is *Needs repair*.
3. **Recall or delivery request** (to the holder)
   - Event: Requests, Adds.
   - To: `[ToolID].[HeldBy]`
   - Subject: `ACHV: please <<[RequestType]>> - <<[ToolID].[Name]>>`
   - Body: the admin's message, and the target site if any.
4. **Daily overdue digest**
   - Event: scheduled, 07:30 every day.
   - Condition: at least one tool where `[IsOverdue]`.
   - To: admins. Body: a table of `Name, HeldBy, CurrentSite, DueBack`.

## 6. Views and users

Use **role-based views** so each side shows only what it needs. Add this expression as a *Show if* on the admin views: `LOOKUP(USEREMAIL(), "Staff", "Email", "Role")="Admin"`.

**Everyone (user side)**

| View | Type | Content |
|---|---|---|
| Scan | Form (primary action) | New Movement. |
| My tools | Deck | Tools where `[HeldBy]=USEREMAIL()` with a *Return* action. |
| Find a tool | Deck | All tools, searchable, showing status and site. |

**Admin only**

| View | Type | Content |
|---|---|---|
| Out now | Table or deck, grouped by site | Tools where Status = Out. |
| Overdue | Deck | `IsOverdue` tools, with a *Request return* action. |
| Activity | Table | Latest Movements, newest first. |
| Manage tools | Table | Add tools, edit categories and conditions. |
| Requests | Table | Open recall requests. |

Create the **Request return** and **Deliver to site** buttons as actions on Tools. They run *Add a new row to another table* on Requests with `ToolID` and the request type pre-filled, and they are shown only when `[Status]="Out"` and the user is an admin.

**Access:** under *Security > Require sign-in*, use Google sign-in and turn on *Require user sign-in*. Add the ACHV team emails to the `Staff` tab. Everyone in `Staff` can use the app.

## 7. ACHV branding

Source: the ACHV design system in Claude (`ACHV`, Google Fonts Poppins, three-colour identity).

Set these under *Settings > Theme*:

| Item | Value |
|---|---|
| Primary colour | `#C4006F` (`accent-fill`: 5.9:1 against white text; the pure `#EC008C` is too light for buttons) |
| Theme | Light. The page ground is mist `#F1F2F2`. Text is ink `#231F20`. |
| Logo | `public/images/brand/achv-logo-full-colour.png` in this repo. Do not stretch or recolour it. |
| App name | `ACHV Tools` |
| App icon | The wordmark on mist. |
| Tone | Plain, short labels. Sentence case. No emoji. Errors say what to do. |

**Known limits to be honest about:** AppSheet allows a primary colour, a logo and a limited choice of fonts. Poppins is not guaranteed to be available, square corners and flat cards are not fully controllable, and some chrome stays AppSheet-styled. It will look clearly ACHV (colour, logo, wording) but not pixel-perfect. If strict brand fidelity matters more than no-code speed, a small custom web app (PWA) reading the same Google Sheet is the alternative. It can follow the design system exactly.

## 8. Printing the labels

1. Add a tool in the `Tools` tab (or in the app). It needs a `ToolID` and `Name`.
2. The `Labels` tab turns each ID into a QR code automatically (300 rows are prepared; copy the last row down for more).
3. Print from the sticker printer's own software. Use a 25 x 25 mm square QR sticker or a 50 x 25 mm label with the QR on the left and `T-0001` plus the tool name on the right.
4. Print the ID as text next to the QR. That is the fallback if a scan fails.
5. Choose a durable label: polyester or vinyl stock that survives dust, water and abrasion. Put the label on the tool body, not on removable parts, and add a second one on the case.
6. The QR code contains only the tool ID (for example `T-0001`). It carries no prices, names or other company data.
7. The QR image is generated by the public service `api.qrserver.com` from the ID alone. If that is not acceptable, replace the formula in `Labels!C2` with a QR generator that runs on your side.

## 9. Rollout checklist

- [ ] Replace the sample rows. Add real tools with sequential IDs and a shelf location.
- [ ] Add all staff to `Staff` with the right role.
- [ ] Add active sites to `Sites`.
- [ ] Build the app and set up the bots (sections 2 to 6).
- [ ] Apply the ACHV theme (section 7).
- [ ] Test with three people: take out, transfer, return, a recall request, an overdue tool.
- [ ] Print labels and tag the tools.
- [ ] Share the app link with the team and pin it to their home screens.
- [ ] Review overdue and missing tools once a week.
