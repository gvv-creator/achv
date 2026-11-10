# Pricing update after the account panel (Hevadex Malta, Protected Handover)

*Added 10 Nov 2026 after the 100-buyer panel. The earlier rate card is kept below, unchanged, under "Rate card (earlier version)". Panel answers are from simulated buyers: use them to choose what to test, not as proof. All prices ex VAT.*

## 1. What the buyers said (price curve, per m² all-in)

Buyers were shown the all-in price of about **€19/m²** (ACHV €12.26 plus applicator labour about €6.70). Detail in `pricing-curve.md`.

| point | €/m² all-in |
| --- | ---: |
| PMC (below this, doubted as too cheap) | 4.04 |
| OPP (least resistance) | 7.01 |
| IPP (bargain = expensive) | 8.02 |
| PME (above this, too many refuse) | **13.98** |

Median answers: too cheap €3, bargain €6, getting expensive €10.50, too expensive €15. The offered €18.96 is **above the acceptable range**. Share of buyers who do not call a price "too expensive": 71% at €12, 54% at €14, 41% at €16, 30% at €18.96. Only 2% would call €18.96 merely "getting expensive".

Two cautions. (1) A few buyers said they set price points themselves because the brief gave no basis (P016, P090, P096), and P074's answers look like totals, so the range is soft. (2) **Price is not the only blocker.** 30% of buyers did not call €18.96 too expensive, yet none of the 100 would buy. Budget ownership (the subcontract package), liability for removal damage, ACHV being a contractor, and no local reference blocked them as much as price. Cutting price alone would not have produced orders.

## 2. The finding that matters: the acceptable range is below ACHV's cost

All-in = ACHV price + applicator labour (about €6.70/m²). At the top of the acceptable range (€13.98) ACHV's share is **€7.28/m²**. ACHV's variable cost is about €6.74/m² (material €5.94, QA €0.80) plus 2% claims and 2% bad debt on revenue.

| ACHV price /m² | all-in /m² | contribution per 300 m² job | break-even jobs/month | year-1 result (CFO tool) |
| ---: | ---: | ---: | ---: | ---: |
| €7.28 | €13.98 | **€45 (2%)** | 285 | –€150,809 |
| €12.26 (current) | €18.96 | €1,509 (41%) | 9 | –€79,155 |

So the price buyers will tolerate leaves ACHV no margin at the plan's €9/kg landed cost. **The range cannot be reached by pricing. It can only be reached by cost, by a different cost-bearer, or by a different offer.**

- **Cost lever (the number for Hevadex).** For 40% gross margin at €7.28/m², OMNIGUARD must land at about **€5/kg** (0.66 kg/m², with QA €0.80), roughly €4.30/kg ex works at the 1.15 landing factor. Plan is €9/kg landed. Even BLOWERPROOF's real quote is €5.80/kg ex works. This is a negotiating target, not a forecast.
- **Cost-bearer lever.** The buyers who would move said the developer or main contractor must specify and pay for it. A line item paid by the party who bears the damage is not tested against the subcontractor's film budget.
- **Labour lever.** Applicator labour of €6.70/m² is more than a third of the all-in price. It is an unquoted assumption; a lower labour cost moves ACHV's share more than any discount would.

## 3. Against what the buyer pays today (B2B)

- Buyers who buy protection today put it at about €12/m² all-in with their own labour (film, sheet, tape), which is the plan's assumption and still unverified. Offer €18.96 is about 58% above it. Many said they would reconsider at **€12–14 all-in**, with no deposit and 60-day terms.
- Many stated their annual damage cost directly; across the panel it ran from a few hundred euro to about €10k a year per account, against €19,000 for a 1,000 m² year of the offer. Most small accounts therefore cannot justify it on avoided damage alone. This agrees with the board's ≥€6.96/m² hurdle, which no account has yet shown.
- The **Supply rung** (OMNIGUARD at €15.50/kg, about €10.24/m²) plus the buyer's own labour is about €17/m² all-in, also above the acceptable range, and it has the same removal-liability problem. It only helps buyers whose objection is "no ACHV people on my site" (several said so: P007, P014, P016, P037, P039, P080, P091). Do not expect it to fix price.
- Minimum job size: several small contractors use under about 150 m² a year, so the 150 m² minimum excludes them (P064, P065).

## 4. Payment terms as part of the price

Buyers expect **60 days** and pushed back on the 50% deposit (it appears in 44 of the 100 answers). Malta's all-sector average is about 80 days (M8). The CFO tool shows 90-day collection adds about €26k of year-1 cash. The deposit/60-day clash is a price objection in itself: first-order deposits should be tested as a condition, not assumed.

## 5. Decision

1. **Do not cut the price to chase the curve.** At €7.28 ACHV earns nothing; at €12.26 it earns 41% but sells to nobody in this panel. Keep €12.26 ACHV (€18.96 all-in) as the list price for the test, and **do not move to the €13.49 "Plus" rung yet**: nothing in the panel supports a premium.
2. **Re-base the plan on cost and payer, not discount.** Ask Hevadex for an OMNIGUARD price consistent with about €5/kg landed. If it cannot be reached, the lead product is not viable at the range buyers will pay.
3. **Re-aim the offer at the payer.** Test a developer- or main-contractor-specified line item, with insured removal-damage cover, before testing price again.
4. **No numbers change yet.** `numbers.json` stays at €12.26/m². What changes is demand: re-run `/founder-cfo` with the panel's 0% realistic close rate and 60 to 80 day terms.

## 6. What to test with real buyers

- **Two all-in prices, both quoted per m² including labour:** €18.96 (current) and about €14 (the top of the acceptable range, which needs a cost or labour change to be viable). Record who chooses what, with deposit and no-deposit terms.
- **Who pays:** quote the same job to the glazing subcontractor and to the main contractor or developer, and record who accepts a priced line.
- **Insurance-backed damage cover versus none**, at the same price.
- **Add the four price questions to the 15 discovery interviews**, as real answers beat these simulated ones. Run `/founder-pricing` again on them.

## 7. Top price objections (verbatim, simulated buyers)

1. "I pay about 12 a square metre today with film and my own lads, and this is 19 plus a minimum job size and a deposit. The aluminium already comes with factory film, so I'd be paying 60% more to fix a problem I mostly manage with snagging." (P010)
2. "We spend about 9k a year on snagging damage from contingency, and 19 per m2 across a block would cost more than the damage it prevents." (P026)
3. "We pay suppliers at 60 to 90 days, not 50% up front, and a credit check on top is a non-starter." (P026)

## Effect on the CFO numbers

No change to `numbers.json`. A re-run of `/founder-cfo` is needed for demand and payment terms, not price. If cost per kg cannot reach about €5 landed, the unit economics fail at any price buyers will accept.

---

# Rate card (earlier version, before the panel)

# Pricing: Hevadex range in Malta (ACHV)

Market: **Malta only.** All prices are ex VAT unless marked; Malta's standard VAT of 18% is added on top. Not financial, tax or legal advice.

**What these prices are and are not.** The buyer panel has not run (see `pricing-curve.md`), so there is no measured acceptable price range. Only three supplier prices exist (October 2026 BLOWERPROOF proposal, not accepted). Everything else is built from (a) public Maltese and EU competitor prices, (b) Hevadex retail prices quoted in ACHV's first plan, which have not been re-verified, and (c) stated estimates. Treat this as a **rate card to test and a negotiating sheet for Hevadex**, not a final price list.

---

## 1. The bottom line

1. **"Liquid membrane" in Malta is a commodity roof product, and Hevadex cannot compete in it.** Maltese shops sell exposed-roof liquid membranes at **€3.60–5.00/kg ex VAT** retail. Every Hevadex membrane's estimated landed cost (€6.67–8.88/kg) is above that shelf price before ACHV adds any margin. Hevadex's AQUAPROOF LIQUID is also not that product: its data sheet limits it to surfaces not continuously exposed to water (foundations, under-screed wet areas, façades behind cladding).
2. **Three products can be priced at ACHV's 40% target today:** BLOWERPROOF (if specified), OMNIGUARD (as the Protected Handover service or product-only to approved installers) and Primer 43. They are the only ones with a supplier price or a planned cost that fits the market.
3. **Four products are margin-blocked at estimated costs:** SANIPROOF, AQUAPROOF LIQUID, AQUAPROOF REACTIVE and AQUACOOL. The market caps their price below what ACHV's estimated cost needs. Section 5 gives the **maximum transfer price** for each; that is the number to negotiate with Hevadex.
4. **Specialist products (FLAME-EX, AMISEAL, EZY-NET, AC100, ISOPROOF) are quoted per project,** never from a list, with a cost-plus floor of landed ÷ 0.6.
5. **Lead offer:** keep Protected Handover at **€12.26/m²** (ACHV share, 43% GM) as the base price and test **€13.49/m²** (48% GM) with the first pilot customers. Sell it per m² installed, never per kg.
6. **Do not offer a 2% prepayment discount.** It costs about €3,600 a year at year-1 volume; the cash it saves is worth about €2,500 a year at the plan's 8% facility rate. Ask for deposits instead.

---

## 2. How the prices were set

| step | rule | source |
|---|---|---|
| Landed cost, quoted SKUs | EXW × 1.15 | EXW: October 2026 HEVADEX proposal (BLOWERPROOF Liquid €5.80/kg, Brush €6.00/kg, Primer 43 €6.44/kg). 1.15 = freight, insurance, handling and loss: **estimate**, replace with a pallet freight quote |
| Landed cost, unquoted SKUs | EU retail ex VAT × 0.585 × 1.15 | 0.585 = BLOWERPROOF EXW ÷ its Belgian retail ex VAT (€5.80 ÷ €9.91). Retail prices from ACHV's first plan (Belgium, Cyprus), **not re-verified**. Assumes Hevadex prices other SKUs at the same discount to retail: **estimate** |
| OMNIGUARD | €9.00/kg landed | CFO pack assumption. The ratio method gives about €8.60, consistent |
| Accredited trade price | landed ÷ (1 − 0.42) | 42% target gross margin; plan's release floor is 35% |
| List price | trade × 1.15 | occasional and walk-in buyers (49.6% GM) |
| Project price | trade × 0.92 | registered projects above a volume threshold (37.0% GM, above the 35% floor) |
| Market ceiling | highest trade price the Maltese comparator supports | section 3; where the ceiling is below the cost-plus trade price, the SKU is margin-blocked |

---

## 3. What Malta pays today

| application | incumbent in Malta | price found (ex VAT) | source |
|---|---|---|---|
| Exposed roof liquid membrane, DIY/trade shelf | HyperGum (MaltaDIY), generic 18 kg (Kenneth Hardware) | **€3.60–5.00/kg** (HyperGum 20 kg €85–89 and 10 kg €59 incl VAT; generic 18 kg €100 incl VAT) | maltadiy.com; khsmalta.com |
| Roof bitumen roll | Kenneth Hardware 4 kg/m² roll, 10 m | **€3.28/m²** material | khsmalta.com |
| Liquid membrane, installed | Maltese contractors | **€15–25/m²** typical installed (roofs); €45–55/m² for bathroom waterproofing | kibitec.com (two pages) |
| Roof systems, installed (Italian benchmark) | bitumen / liquid / polyurethane | €25–40 / €20–35 / €40–65 per m² | icobit.com |
| Thermal reflective roof membrane | Naici FIBROGUAINA S REFLEX, SRI 111.7 (Resin & Membrane Centre) | price not published | theresincentre.com |
| Elastomeric roof coatings sold online into Malta | Vivechrom Vive Roof 3 L (Greek) | €15.00–15.50 incl VAT, **about €4.24/L**, 0.8 L/m² | skroutz.mt |
| Cool-roof coating, EU trade | French reflective membrane | €6.00–10.00/kg by volume tier | batinfo.com |
| Under-tile waterproofing | Mapei Mapegum WPS 10 kg | **€5.44–7.55/kg** (EU online), about 1.2 kg/m² in two coats | guenstiger.de, sitypro.com, protilertools.co.uk |
| Liquid airtightness | Soudal Soudatight LQ 4.5 kg | **€7.54–8.88/kg** (EU online) | insulationmerchant.com |
| Temporary window protection | self-adhesive film 600 mm × 100 m (60 m²) | **about £0.31–0.90/m²** material (UK) | thesafetysupplycompany.co.uk, dortechdirect.co.uk, buymaterials.com, buildingmaterials.co.uk |
| Peelable protective coating | Finixa Powerpeel 5 L | €99 retail, about €19.80/L | nonpaints.com |
| Intumescent coatings | Firetex, Steelguard (UK) | about £12–18/L for 20 L thin-film waterborne | industrialcoatingsltd.com |
| Asbestos encapsulants | Foster Childers CP-211, Lag-Kote II | US$440–760 per 20 L | sylprotec.com and others |
| Efflorescence removers | Protect-It, LTP | €60–66 per 5 L (Ireland), £42 per 5 L (UK) | tjomahony.ie, protilertools.co.uk |
| Public works | Armed Forces of Malta liquid membrane framework | estimated €279,480 | etenders.gov.mt |

Two things stand out. Maltese buyers already have cheap liquid membranes on the shelf, and Greek and Italian coatings reach Malta online at similar prices. Anything Hevadex sells as a product per kg competes with those; anything it sells as a measured system per m² competes with installed prices of €15–65/m².

---

## 4. Rate card by product family

Prices per kg (or L) ex VAT. Status follows the board's one-lead / two-support rule from the plan.

| product | landed (basis) | list | **trade** | project | per m² at trade | market ceiling | GM at ceiling | status |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| **OMNIGUARD 110NP**, Protected Handover bundle | €5.94/m² material + €0.80 QA (plan) | — | **€12.26/m²** | — | €12.26 | see section 5 | 43.0% | **Lead.** Sell per m² |
| OMNIGUARD 110NP, product only to approved installers | €9.00 (plan) | €17.80 | **€15.50** | €14.30 | €10.24 (0.66 kg) | — | 42% | Fallback when a customer will not use ACHV's applicator |
| BETOSHIELD WB (pretreatment for OMNIGUARD on concrete) | no price | quote | quote | quote | — | — | — | Accessory; price with the job |
| **AQUAPROOF REACTIVE** roof kit (ETA-25/0246) | **unknown** | — | ceiling €9.50 | — | €19.00 (2.0 kg) | €9.50 | needs landed ≤ €5.70 | **Support A.** Price per detail (see below) |
| **AC100 WB-02** (EN 1504-2 protective) | unknown | quote | quote | quote | 0.7 kg/m² | no public comparator | floor = landed ÷ 0.6 | **Support B.** Per project |
| BLOWERPROOF Liquid | €6.67 (quote) | €13.20 | **€11.50** | €10.60 | €8.63 (0.75 kg) | Soudatight €7.54–8.88 | 42% | Request only; 30–50% above the nearest liquid airtight rival |
| BLOWERPROOF Liquid Brush | €6.90 (quote) | €13.70 | **€11.90** | €10.95 | €8.93 | as above | 42% | Request only |
| Primer 43 | €7.41 (quote) | €14.70 | **€12.75** | €11.75 | — | — | 42% | System accessory only, never discounted separately |
| SANIPROOF Liquid | €8.25 (ratio est.) | €16.35 | €14.20 | €13.10 | €17.05 (1.2 kg) | **€10.50** (Mapegum + 40–60%) | **21%** | **Margin-blocked** |
| AQUAPROOF LIQUID | €7.23 (ratio est.) | €14.35 | €12.45 | €11.45 | €18.70 (1.5 kg, est.) | **€9.50** | **24%** | **Margin-blocked**; not an exposed-roof product |
| AQUAPROOF DPM | €8.88 (ratio est.) | €17.60 | €15.30 | €14.10 | — | no comparator | — | Request only, cost-plus |
| AQUACOOL FAÇADE / cool roof | unknown | — | ceiling €7.00 | — | €7.00 (≥1 kg) | **€7.00** | needs landed ≤ €4.20 | Deferred; also 6-month shelf life |
| ISOPROOF Liquid / FR | unknown | quote | quote | quote | — | none found | — | Deferred |
| FLAME-EX (intumescent) | unknown | quote | quote | quote | per tested build-up | about £12–18/L (UK thin-film) | — | Specialist; only with valid fire classification for the exact substrate |
| AMISEAL COAT / FIX / PSO | unknown | quote | quote | quote | — | US$22–38/L | — | Specialist; deferred in plan |
| EZY-NET / post-fire | unknown | quote | quote | quote | — | none | — | Specialist; value-priced per job |
| Scale Remover | unknown | — | ceiling €9.50/L | — | — | €12–13/L pro, much cheaper retail | needs landed ≤ €5.70 | Ancillary |
| Glass Renew Super | unknown | quote | quote | quote | — | none found | — | Ancillary |
| HEVATEX reinforcement | unknown | system | system | system | — | fibreglass mesh €0.95/m² (not equivalent) | — | Only inside a priced system |

**AQUAPROOF REACTIVE should be priced per detail, not per m².** At 2.0 kg/m² nominal, even a €9.50/kg trade price is €19/m² of material, roughly the whole installed price of a generic Maltese liquid roof (€15–25/m²). It cannot win field areas. It can win the difficult bits the plan targets (podium edges, upstands, outlets, penetrations, junctions with old bitumen) where the buyer pays for a leak-free detail, not for square metres. Price it as a fixed sum per linear metre of upstand or per outlet/penetration, built from measured consumption on the first two jobs.

---

## 5. Margin-blocked products: the transfer prices ACHV needs

The maximum landed cost that still gives 40% at the market ceiling, and the EXW price that implies (÷ 1.15):

| product | market ceiling (trade) | max landed for 40% | **max EXW to ask Hevadex for** | today's estimate |
|---|---:|---:|---:|---|
| SANIPROOF Liquid | €10.50/kg | €6.30 | **€5.48/kg** | ~€7.17 EXW (ratio est.) |
| AQUAPROOF LIQUID | €9.50/kg | €5.70 | **€4.96/kg** | ~€6.28 EXW (ratio est.) |
| AQUAPROOF REACTIVE (field area) | €9.50/kg | €5.70 | **€4.96/kg** | unknown |
| AQUACOOL / cool roof | €7.00/kg | €4.20 | **€3.65/kg** | unknown |
| Scale Remover | €9.50/L | €5.70 | **€4.96/L** | unknown |

For reference, the one real Hevadex price is BLOWERPROOF at €5.80/kg EXW. Every ceiling above is below that. Unless Hevadex prices these lines well under BLOWERPROOF, they stay request-only at cost-plus, which is consistent with the plan's decision to defer them.

---

## 6. The lead offer: Protected Handover

**What the customer pays** (ACHV share plus the applicator's labour and preparation, from the CFO pack):

| ACHV price /m² | ACHV GM | customer all-in /m² ex VAT | avoided damage needed vs €12/m² conventional | year-1 profit (CFO tool) |
|---:|---:|---:|---:|---:|
| €11.03 | 36.9% | €17.73 | €5.73 | –€96,492 |
| **€12.26 (base)** | **43.0%** | **€18.96** | **€6.96** | **–€79,155** |
| €12.87 | 45.6% | €19.57 | €7.57 | –€70,558 |
| **€13.49 (test)** | **48.0%** | **€20.19** | **€8.19** | **–€61,819** |
| €14.71 | 52.2% | €21.41 | €9.41 | –€44,623 |

**Against what it replaces.** Self-adhesive film costs well under €1/m² in material in the UK; OMNIGUARD's material alone is €5.94/m². The coating cannot win on material. It wins only where film fails or costs labour: long exposure (the 110NP sheet allows up to 18 months on windows, against six-month films), complex profiles and frames, wind-exposed high-rise elevations, and the cost of replacing damaged glazing. The interviews must measure that damage, because the price is only defensible above the "avoided damage needed" column.

**Ladder (good / better / best):**

| rung | what is included | price | why step up |
|---|---|---|---|
| **Supply** | OMNIGUARD product only, sold to the customer's own approved installer; method statement; substrate exclusion list | €15.50/kg trade (about €10.24/m²) | for a contractor who will not let ACHV's applicator on site |
| **Protected Handover** | survey, test panel, method, product, approved applicator, first-job supervision, removal test, signed QA pack | **€12.26/m²** ACHV + applicator labour | the buyer gets a documented, signed handover instead of a material |
| **Protected Handover Plus** | as above plus a scheduled removal visit fixed in the quote, a mid-programme inspection before the exposure limit, and a per-apartment photo record for the developer's own buyers | **€13.49/m²** ACHV + labour | removes the coordination and over-exposure risk; gives the developer something to hand to apartment buyers |

**Per account per year.** At the plan's average active account (€12,000 a year, three orders), Protected Handover is about 980 m² a year per account. The +€1.23/m² step to Plus is worth about €1,200 a year per account in ACHV revenue, nearly all margin.

**Channel check.** A 2018 OMNIGUARD NF data sheet is published by SPI Performance Coatings rather than Hevadex. Confirm who owns and sells the OMNIGUARD brand and whether any other channel can supply it into Malta; that channel's price would cap the Supply rung.

---

## 7. Price structure (B2B)

- **Three tiers:** list (occasional buyers), accredited trade (trained applicators and approved contractors), project (registered projects above a minimum volume, e.g. one full pallet equivalent). Project pricing is protected for the originating party for a defined period, as the plan proposes.
- **Pack and order rules:** sell full pails only (no decanting); minimum order one pail for trade, the Protected Handover minimum is 150 m² (the plan's ideal-customer threshold).
- **Volume tiers:** 2% off at 10 pails and 4% off at a full pallet (44 pails), on trade price only. At 42% trade margin a 4% discount leaves 39.6%.
- **Price review:** annual, plus a pass-through clause if Hevadex or freight changes more than 5%, with 30 days' notice. No price protection beyond the quote's validity (suggest 60 days, matching product shelf-life risk).
- **Payment terms as part of price:**
  - First orders: 50% deposit, balance before handover (the plan's credit policy).
  - Accredited accounts: 30 days net after a credit check and limit.
  - **No 2% prepayment discount.** At €180k it costs about €3,600 a year; the CFO tool shows faster collection saves about €31k of year-1 cash, worth about €2,500 a year at the 8% facility rate. If a discount is needed to win deposits, cap it at 1%.
  - Statutory late-payment interest applies in the terms of business (an accountant or lawyer should confirm the Maltese wording).
- **VAT:** all prices ex VAT; 18% added on invoices. Walk-in list prices should be displayed including VAT.

---

## 8. Opening offer

**Founding-site offer, first five independent customers, ending at month 6 or the fifth signed pilot, whichever comes first:**

- Paid pilot at the full €12.26/m² price (no discount), minimum 100 m².
- Included at no charge: the substrate test panel and the full QA handover pack (cost to ACHV about €0.80/m², already in the bundle).
- If the pilot passes its written acceptance criteria and the customer signs a next-building order within 90 days, ACHV credits **€1.00/m²** of the pilot against that order (about 8% of the pilot value; costed at €100–300 per pilot).
- Capped remedy if removal fails acceptance, insured and approved by counsel, as the plan requires.

This rewards the repeat order the business model depends on, without a discount that trains buyers to wait.

---

## 9. What to test with real buyers

1. **Protected Handover at €12.26 vs €13.49 (Plus).** Quote both rungs to every qualified site in the Phase-1 interviews and pilots; record which rung is chosen and why. Success: at least a third choose Plus.
2. **Supply rung at €15.50/kg** with the two or three contractors who object to ACHV as a competitor. Record whether they buy, and at what volume.
3. **AQUAPROOF REACTIVE per detail.** Price the first two jobs per linear metre of upstand and per outlet; record measured consumption and the buyer's reaction against a per-m² quote.
4. **Add the four price questions** (too cheap, bargain, expensive, too expensive) per application to the 15 discovery interviews, then run `/founder-pricing` again to plot the real curve.

---

## 10. Price objections

No buyer panel has run, so there are no verbatim objections yet. The objections to expect, from the comparators above, are: that liquid membrane costs €4–5/kg in the shop; that film protection costs almost nothing per m²; and that Mapei and Sika are already specified. Run `/founder-consumer` (or record the 15 interviews) before writing the answers.

---

## Effect on the CFO numbers

No change to `numbers.json`: the base Protected Handover price stays €12.26/m². If the €13.49 Plus rung is adopted as the base, re-run `/founder-cfo`: year-1 loss improves from –€79,155 to –€61,819 and break-even falls from 8.45 to 6.84 jobs a month, inside one supervisor's capacity.

## Sources

Malta: maltadiy.com (HyperGum); khsmalta.com (liquid membrane 18 kg, bitumen roll, mesh); kibitec.com (installed liquid membrane prices); theresincentre.com (Naici range, S Reflex SRI 111.7); skroutz.mt (Vivechrom Vive Roof delivered to Malta); etenders.gov.mt (AFM liquid membrane framework).
EU/UK comparators: guenstiger.de and sitypro.com (Mapegum WPS); insulationmerchant.com (Soudatight LQ); batinfo.com (cool-roof coating tiers); icobit.com (installed roof system costs, Italy); thesafetysupplycompany.co.uk, dortechdirect.co.uk, buymaterials.com, buildingmaterials.co.uk (window film); nonpaints.com (Finixa Powerpeel); performancecoatings.net (OmniGuard NF sheet, SPI Performance Coatings); industrialcoatingsltd.com (intumescents); sylprotec.com (asbestos encapsulants); tjomahony.ie, protilertools.co.uk (efflorescence removers).
Hevadex: October 2026 proposal (BLOWERPROOF, Primer 43); ACHV's first plan (Belgian and Cyprus retail prices, not re-verified); AQUAPROOF LIQUID product sheet (use limits); ETA-25/0246 (REACTIVE consumption); CFO pack (OMNIGUARD unit economics).
