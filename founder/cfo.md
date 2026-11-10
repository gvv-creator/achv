# CFO: Hevadex Malta (ACHV Performance Systems), re-run on the account panel

*10 Nov 2026. Inputs: `founder/numbers.json` (now the **panel case**), `founder/numbers-plan.json` (the CFO pack's own plan, kept unchanged for comparison), `founder/panel/results.md` and `founder/pricing.md`. Revenue is ex VAT. All costs are still the pack's unquoted planning illustrations (its item CFO05). Not financial, tax or legal advice: an accountant should check the structure, payroll, VAT and tax before money moves.*

## What changed since the last run

The earlier run used the pack's ramp (€180k in year 1). That ramp had no market evidence behind it (source row A01, "not market-validated"). The account panel is the first evidence, and it says:

- **Realistic close rate 0%**: 0 of 100 simulated buyers would buy; two said "might".
- **Year-1 revenue the panel supports: about €33** (0.02 deals), from 139 accounts approached (15% of 924 licensed contractors).
- Buyers expect **60-day payment terms** and pushed back on the 50% deposit (44 of 100 answers). Malta's all-sector average is about 80 days (M8).
- Buyers' acceptable all-in price tops out at about **€14/m²**, against the €18.96 on offer (`pricing.md`).

I therefore set the ramp in `numbers.json` from the panel: €32.92 / €3,678 per job = **0.009 job-equivalents in year 1**, back-loaded because outreach is spread over the year and deals pay when they close. The plan's ramp (10.06 jobs a month by month 12) is above the panel's realistic demand, so **the plan's verdict fails on demand**, by the rule for this step. The tool's per-job and "at plan" lines below still use the plan's 10 jobs a month, so read those as "what the plan needs", not "what the market gives".

## The CFO's note

**The margin.** Unchanged per job: **€1,509 (41%)** after material, QA, claims and bad debt at €12.26/m². Year-1 fixed costs are €12,750 a month, so break-even is still **8.45 jobs a month (about €31k a month)**. The problem is not the margin per job; it is that no jobs arrive.

**Year 1 on the panel's demand: –€152,987 on €33 of revenue, against –€79,155 on €180,001 in the plan.** Cash needed in year 1 is €172,999, which looks lower than the plan's €187,856 only because almost nothing is tied up in receivables and stock. The cash is simply gone as running costs. At year-1 fixed costs and the €20k capex, the €250k equity covers about **18 months** with zero revenue, and the €200k facility (still unsigned) would not be drawn on a business with no income to service it.

**Ceiling, even if every "might" converted.** Taking the two "might" buyers at their own stated annual value (€6,500 and €12,000) and scaling to the 139 accounts approached gives at most **about €25,600 of year-1 revenue**, 14% of the plan: year-1 loss –€142,481, break-even still 9 jobs a month. This is an upper bound from two simulated buyers, not a forecast.

**Does a better price and cost fix it?** I ran the case buyers' range implies: ACHV price €7.28/m² (all-in €13.98) with OMNIGUARD at **€5/kg** landed, plan volume. Contribution €867 per job (40%); break-even **15 jobs a month against capacity of 7.05**; year-1 profit –€110,587 even at the plan's volume. So even if Hevadex gave a price of €5/kg landed and buyers paid the top of their range, one supervisor's capacity cannot reach break-even. The business would need either a different cost structure or a different customer (a payer who buys at scale).

**The line to watch.** Demand, not cost. The earlier note named landed €/kg as the biggest sensitivity (+€1/kg cuts the month-12 margin from 6.6% to 1.2%). That still holds at plan volume, but with a realistic ramp every what-if in the tool table below moves year-1 profit by under €5, because revenue is about €33. Cost matters only if there is volume.

**Cash and working capital.** On the panel's demand almost nothing is tied up (€12 at year-end). If the plan's volume did arrive, working capital would be €88,701 at 60-day collection, and 90-day collection adds about €26k of year-1 cash (from the earlier run). The deposit buyers rejected is the lever that cut €31k of year-1 cash; on this panel it is unlikely to be accepted without a payer who specifies it.

**Capacity.** Unchanged from the earlier run: at the plan's volume one supervisor allocation (7.05 jobs a month) is short in 9 of 36 months and short of break-even. At the panel's demand capacity is irrelevant.

## Three ways to improve the result (each run through the tool)

1. **Start the payroll clock at G0, not at approval** (the board's own condition). Running admin only until the supplier signs, the product scope includes OMNIGUARD and an insurer confirms cover: fixed costs €7,000 a month instead of €12,750 in the test case; year-1 profit **–€83,987** instead of –€152,987 (+€69,000) and cash needed **€103,999** instead of €172,999. This beats every pricing lever on this panel's demand.
2. **Landed OMNIGUARD at €5/kg at the current price.** Contribution per job rises from €1,509 to **€2,301 (63%)** and break-even falls from 9 to **6 jobs a month**, inside one supervisor's capacity. But with no demand it changes year-1 profit by only €8; it is worth doing only alongside route 3.
3. **Change who pays.** Every price lever above assumes the same buyers. The panel says the developer or main contractor, not the subcontractor, has to carry the line (`pricing.md`). That is a demand change, not a margin change, and it can only be measured in the 15 discovery interviews. Until then no price, cost or capacity change closes the gap.

## The board's money conditions (from `founder/board.md`)

| condition | status |
| --- | --- |
| Model arithmetic | **Met** (1,516 of 1,516 pack checks; the tool matches the pack to rounding) |
| Group cash forecast for the €250k equity | Not met (CFO04) |
| Indicative facility term sheet | Not met |
| Five-year equity case, or recorded acceptance of none | Not met; on the panel's demand there is no return case, so a recorded acceptance is the honest choice |
| Non-exclusive fallback case | Not in the pack |
| Operating clock starts at G0 | **Now the largest lever** (route 1 above, +€69k) |
| Capped Phase 1a budget | Not set; Phase 1 gross outflow in the pack is €69,840 |
| Damage measured on three Maltese jobs against the ≥€6.96/m² hurdle | Not met; buyers' own stated damage costs mostly sit far below the offer's cost (`pricing.md`) |
| Demand evidence | **New: the account panel does not support the plan's ramp** |

## What would have to be true for the plan's ramp

The plan needs about 49 job-equivalents in year 1. At the pack's average active account (€12,000 a year) that is about 15 active accounts by month 12. The panel puts 0 of 139 approached accounts in that position. To keep the plan's ramp, the first 15 discovery interviews and pilots have to show something the panel did not: a payer who will specify the line, written liability cover, and a price near the top of the buyers' range with margin. Until then, the ramp in `numbers.json` should stay at the panel's value.

---

# Tool output: panel case (`founder/numbers.json`)

# Unit economics: ACHV Performance Systems / Hevadex Malta (year 1)

Every number below comes from the input file. Nothing is looked up or guessed.

## One job

| line | per job |
| --- | ---: |
| Price | €3,678.00 |
| OMNIGUARD material: 0.60 kg/m2 x 1.10 waste x EUR 9.00/kg landed x 300 m2 (assumption, no quote) | -€1,782.00 |
| Incremental QA/testing/service: EUR 0.80/m2 x 300 m2 (assumption) | -€240.00 |
| Claims allowance: 2% of revenue (assumption) | -€73.56 |
| Bad debt (invoices never paid) | -€73.56 |
| **Contribution** (what each job leaves to pay the fixed costs) | **€1,508.88** (41%) |

## The margin that matters

Fixed costs: €12,750 a month (Payroll: lead EUR 45k + supervisor allocation EUR 24k + admin EUR 15k, /12 €7,000, Marketing EUR 27k /12 €2,250, Warehouse / fixed logistics EUR 12k /12 €1,000, Central QA, insurance, travel, IT, fees EUR 30k /12 €2,500).

- **Break-even: 9 jobs a month.** Below that you lose money every month.
- **Profit margin at your plan** (10 a month): **7%** of every sale, after every cost.
- Capacity: 7.05 a month.

## Year 1, month by month

| month | jobs a month | revenue | profit | cumulative (after €20,000 startup) | cash in minus out | cash cumulative |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 0.0 | €0 | -€12,750 | -€32,750 | -€12,750 | -€32,750 |
| 2 | 0.0 | €1 | -€12,750 | -€45,499 | -€12,751 | -€45,501 |
| 3 | 0.0 | €1 | -€12,749 | -€58,249 | -€12,751 | -€58,252 |
| 4 | 0.0 | €2 | -€12,749 | -€70,998 | -€12,750 | -€71,002 |
| 5 | 0.0 | €2 | -€12,749 | -€83,747 | -€12,750 | -€83,752 |
| 6 | 0.0 | €3 | -€12,749 | -€96,496 | -€12,750 | -€96,502 |
| 7 | 0.0 | €3 | -€12,749 | -€109,245 | -€12,750 | -€109,252 |
| 8 | 0.0 | €3 | -€12,749 | -€121,994 | -€12,750 | -€122,002 |
| 9 | 0.0 | €4 | -€12,748 | -€134,742 | -€12,750 | -€134,751 |
| 10 | 0.0 | €4 | -€12,748 | -€147,490 | -€12,749 | -€147,501 |
| 11 | 0.0 | €5 | -€12,748 | -€160,239 | -€12,749 | -€160,250 |
| 12 | 0.0 | €5 | -€12,748 | -€172,987 | -€12,749 | -€172,999 |

- **Year 1 operating profit: -€152,987** on €33 of revenue.
- After the €20,000 startup spend: -€172,987.
- Startup money earned back: not within year 1.
- Cash you need before it pays for itself: **€172,999**.
- Working capital: customers pay in 60 days, suppliers are paid in 0 days, 30 days of stock. At the end of year 1 that ties up **€12** (unpaid invoices plus stock, less unpaid supplier bills). Cash is back: not within year 1.
- Largest customer: 25% of revenue.

## What if

| scenario | margin at plan | break-even a month | year 1 profit | cash needed |
| --- | ---: | ---: | ---: | ---: |
| Base plan | 7% | 9 | -€152,987 | €172,999 |
| Price -10% | -4% | 12 | -€152,990 | €173,001 |
| Volume -20% | -2% | 9 | -€152,989 | €172,999 |
| Customers pay 30 days later | 7% | 9 | -€152,987 | €173,003 |
| Unit costs +15% | -2% | 11 | -€152,989 | €173,002 |

## Red flags

- Break-even needs 8 jobs a month but capacity is 7.05.
- The plan (10 a month) is above capacity (7.05).
- Year 1 loses money on operations (-€152,987).
- The startup spend is not earned back within year 1.

---

# Earlier version (before the panel, CFO pack plan case)

# CFO: Hevadex Malta (ACHV Performance Systems), re-run on the full CFO pack

Inputs: ACHV's CFO pack `Hevadex_Numbers.json` (9 Nov 2026), read in full, and `founder/numbers.json` built from it. One unit = one **job**, a 300 m² Protected Handover job-equivalent of ACHV revenue (€3,678 at €12.26/m²); support orders are carried at the same margin, as the pack does. All costs are the pack's own unquoted illustrations (its review item CFO05). Figures exclude 18% Maltese VAT except where the pack's cash model includes it. Not financial, tax or legal advice: an accountant should check the structure, payroll, VAT and tax before money moves.

## What the full pack changes

The pack is sound. It runs 1,516 reconciliation checks and all 1,516 pass; it reproduces every plan table; and it lists ten review items honestly instead of hiding them. Nothing in the full file contradicts the earlier run built from its summary: the tool's year-1 loss (–€79,155) matches the pack (–€79,200) to rounding. What the full file adds is five scenarios month by month, a capped-facility path, and the monthly detail that shows where capacity, not cash, runs out first.

## The CFO's note

**The margin.** Each job leaves **€1,509 (41%)** after material, QA, claims and bad debt. Year-1 fixed costs are €12,750 a month, so break-even is **8.45 jobs a month, about €31k of revenue (€373k a year)**, matching the pack's €373,171. At the month-12 rate (10.1 jobs, €37k) the profit margin is **6.6%**; at the year-3 run-rate it is **9.7%**. Year 1 loses **€79,155** on €180k.

**The line to watch: landed €/kg.** It is €9/kg with no quote behind it (CFO05). +€1/kg cuts the margin at the month-12 rate from 6.6% to **1.2%**; a 10% price cut takes it to **–4%**; 20% less volume to –2%. The supplier price moves the result more than volume does.

**Capacity is the first wall, and it is cheap to move.** The pack checks supervisor field days by year (69 of 120 in year 1) and passes. By month it does not. At 10 field days a month per allocation and the pack's own days per job, the base case needs more supervision than it has in **9 of 36 months**:

| month | revenue | field days needed | days available | short |
|---:|---:|---:|---:|---:|
| 10 | €27,000 | 10.4 | 10 | 0.4 |
| 11 | €32,000 | 12.3 | 10 | 2.3 |
| 12 | €37,000 | 14.3 | 10 | 4.3 |
| 24 | €56,000 | 21.2 | 20 | 1.2 |
| 32–36 | €82–91k | 30.4–33.7 | 30 | 0.4–3.7 |

Break-even itself (€31.1k a month) needs about 12 days against 10. The shortfall is small, about 7 days in year 1, roughly **€1,400 at the pack's €200 a day**. The problem is availability, not money: the backup supervisor trained by month 6 must be contracted for paid field days from month 10, or the plan cannot deliver its own month-10 to 12 revenue.

**Cash.** The tool puts the year-1 cash need at **€187,856**; the pack's fuller model (VAT, €15k stock floor) uses €180,470 of the €250k equity, closing year 1 at €69,530. Over 36 months the base case needs all €250k plus **€143,136 of facility at its peak (month 31)**, holding €50k cash throughout, with €43,360 of VAT payable and a €27,160 tax reserve still outstanding at month 36. Three-year cumulative EBITDA is –€6,600 and nothing is repaid.

**The scenarios, from the pack:**

| case | 36-month EBITDA | peak facility needed | with the €200k limit enforced |
|---|---:|---:|---|
| Base | –€6,600 | €143,136 (M31) | holds €50k floor |
| Interest 12% | –€6,600 | €147,365 | holds |
| Three-month delay, no action | –€119,750 | **€227,104** | floor fails M31; cash falls to €23,387 |
| Downside (half volume, lower margin, 3-month collection), no action | –€408,000 | **€491,648** | floor fails M24; cash reaches **–€230,255** |
| Upside (1.67× volume, 1-month collection) | +€416,000 | none | never below €96,129 |

The facility protects the base case only. The delay case, the most likely failure, breaks it in month 31, and the downside is unfundable without stopping, which is what the plan's month-12 stop rule is for.

**Working capital and how to fund it.** At the end of year 1, **€88,701** is tied up (tool, ex VAT); the pack shows €79,792 of receivables including VAT plus €15,680 of stock. Funded today by equity only. The levers, run through the tool:

| lever | year-1 cash needed | change |
|---|---:|---:|
| Base (60-day collection, stock prepaid) | €187,856 | — |
| Customers pay in 30 days (deposits on first jobs) | €156,497 | **–€31,359** |
| HEVADEX gives 30 days after the two prepaid orders | €166,775 | **–€21,081** |
| Customers pay in 90 days | €214,313 | +€26,457 |
| Largest customer (25% cap) pays 30 days late | about €194,500 | about +€6,600 |

Invoice finance is the other option once there are creditworthy debtors; the pack's facility is assumed, not offered (CFO04).

## Three ways to improve the margin (each run through the tool)

1. **Landed price to €8/kg.** Contribution €1,707 (+€198); margin at month-12 rate **11.9%**; break-even **7.47 jobs**, close to one supervisor's capacity; year 1 –€69,465.
2. **Price +5% (€12.87/m²).** Contribution €1,685; margin **10.8%**; break-even **7.57 jobs**; year 1 –€70,558. Defensible only once measured damage savings clear the customer's hurdle (+€0.61/m² on top of the €6.96 already needed).
3. **Waste from 10% to 5%.** Contribution €1,590; margin **8.8%**; break-even **8.02 jobs**; year 1 –€75,191.

Deposits are not a margin lever, but at –€31k of year-1 cash they beat all three.

## The pack's ten review items: CFO view

| item | what it is | view |
|---|---|---|
| CFO01 | Stock pool includes QA and claims | Fix in Phase 1: split physical stock from QA cash and claims provisions before the first order. |
| CFO02 | VAT lost on bad debts (€648 / €1,728 / €3,240) | Small; confirm bad-debt relief with the tax adviser. |
| CFO03 | Tax reserve is not tax | Agreed; replace with an adviser's schedule before M13. |
| CFO04 | Facility and equity uncommitted | **Blocking.** The base case breaches the €50k floor at M13 without it. |
| CFO05 | Unquoted unit economics | **Blocking.** The single largest sensitivity (landed €/kg). |
| CFO06 | Timing simplifications | Acceptable for a board decision; replace with actual dates in Phase 1. |
| CFO07 | No statutory balance sheet | Needed before any lender relies on it. |
| CFO08 | No payback or exit value | **Board decision**, not a modelling fix; the five-year IRR field is still empty. |
| CFO09 | Delay and downside exceed the facility | The month-12 stop and the "clock starts at G0" condition are the mitigations. |
| CFO10 | Marketing calendar vs flat cash | Back-loaded calendar (€1k/month early) slightly improves early cash; rephase. |

New from this run: **monthly supervisor capacity** (above) should be added as CFO11.

## The board's money conditions (from `founder/board.md`)

| condition | status |
|---|---|
| Model arithmetic | **Met.** 1,516 of 1,516 checks pass; independently rebuilt and matched. |
| Group cash forecast for the €250k equity | Not met (CFO04). |
| Indicative facility term sheet | Not met (`financing_signed: false`). |
| Five-year equity case, or recorded acceptance of none | Not met (`five_year_irr_calculated: null`). |
| Non-exclusive fallback case | Not in the pack. |
| Operating clock starts at G0 | Not modelled; the delay scenario shows what it is worth: 36-month EBITDA falls from –€6,600 to –€119,750 (–€113,150) and the facility is breached. |
| Capped Phase 1a budget | Not set; Phase 1 gross outflow is €69,840 and illustrative exposure €96,840, closure costs unverified. |

---

# Unit economics: ACHV Performance Systems / Hevadex Malta (year 1)

Every number below comes from the input file. Nothing is looked up or guessed.

## One job

| line | per job |
| --- | ---: |
| Price | €3,678.00 |
| OMNIGUARD material: 0.60 kg/m2 x 1.10 waste x EUR 9.00/kg landed x 300 m2 (assumption, no quote) | -€1,782.00 |
| Incremental QA/testing/service: EUR 0.80/m2 x 300 m2 (assumption) | -€240.00 |
| Claims allowance: 2% of revenue (assumption) | -€73.56 |
| Bad debt (invoices never paid) | -€73.56 |
| **Contribution** (what each job leaves to pay the fixed costs) | **€1,508.88** (41%) |

## The margin that matters

Fixed costs: €12,750 a month (Payroll: lead EUR 45k + supervisor allocation EUR 24k + admin EUR 15k, /12 €7,000, Marketing EUR 27k /12 €2,250, Warehouse / fixed logistics EUR 12k /12 €1,000, Central QA, insurance, travel, IT, fees EUR 30k /12 €2,500).

- **Break-even: 9 jobs a month.** Below that you lose money every month.
- **Profit margin at your plan** (10 a month): **7%** of every sale, after every cost.
- Capacity: 7.05 a month.

## Year 1, month by month

| month | jobs a month | revenue | profit | cumulative (after €20,000 startup) | cash in minus out | cash cumulative |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 0.0 | €0 | -€12,750 | -€32,750 | -€12,750 | -€32,750 |
| 2 | 0.0 | €0 | -€12,750 | -€45,500 | -€12,750 | -€45,500 |
| 3 | 0.0 | €0 | -€12,750 | -€58,250 | -€12,750 | -€58,250 |
| 4 | 1.4 | €5,002 | -€10,698 | -€68,948 | -€18,450 | -€76,700 |
| 5 | 2.2 | €8,018 | -€9,461 | -€78,409 | -€19,037 | -€95,737 |
| 6 | 3.3 | €11,990 | -€7,831 | -€86,240 | -€16,943 | -€112,679 |
| 7 | 4.3 | €15,999 | -€6,186 | -€92,426 | -€16,292 | -€128,971 |
| 8 | 5.4 | €20,008 | -€4,542 | -€96,968 | -€14,684 | -€143,655 |
| 9 | 6.2 | €22,988 | -€3,320 | -€100,287 | -€11,865 | -€155,520 |
| 10 | 7.3 | €26,997 | -€1,675 | -€101,962 | -€10,807 | -€166,328 |
| 11 | 8.7 | €31,999 | €377 | -€101,585 | -€11,304 | -€177,631 |
| 12 | 10.1 | €37,001 | €2,429 | -€99,155 | -€10,225 | -€187,856 |

- **Year 1 operating profit: -€79,155** on €180,001 of revenue.
- After the €20,000 startup spend: -€99,155.
- Startup money earned back: not within year 1.
- Cash you need before it pays for itself: **€187,856**.
- Working capital: customers pay in 60 days, suppliers are paid in 0 days, 30 days of stock. At the end of year 1 that ties up **€88,701** (unpaid invoices plus stock, less unpaid supplier bills). Cash is back: not within year 1.
- Largest customer: 25% of revenue.

## What if

| scenario | margin at plan | break-even a month | year 1 profit | cash needed |
| --- | ---: | ---: | ---: | ---: |
| Base plan | 7% | 9 | -€79,155 | €187,856 |
| Price -10% | -4% | 12 | -€96,796 | €198,734 |
| Volume -20% | -2% | 9 | -€93,924 | €184,885 |
| Customers pay 30 days later | 7% | 9 | -€79,155 | €214,313 |
| Unit costs +15% | -2% | 11 | -€94,539 | €206,402 |

## Red flags

- Break-even needs 8 jobs a month but capacity is 7.05.
- The plan (10 a month) is above capacity (7.05).
- Year 1 loses money on operations (-€79,155).
- The startup spend is not earned back within year 1.
