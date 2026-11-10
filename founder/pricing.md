# Pricing: Always Broke Ltd (B2B; the "price" is what we pay for a business)

Here the price is the **purchase multiple and payment structure** we offer an owner, not a price we charge. Higher is better for the seller and worse for us. The founder **confirmed** the range on 2026-11-10: **3.5x to 4.5x EBITDA, 90% cash at closing, 10% within 12 months bank-guaranteed, adviser contribution capped at EUR 5,000.** Everything else below is a proposal for you to confirm. Not financial, legal or tax advice.

## 1. What sellers said (simulated, and weak)
`pricing-curve.md` (tool output, 20 simulated sellers, Germany as a proxy), turned into multiples of the EUR 200,000 EBITDA example:
| Point | Price | As a multiple |
|---|---:|---:|
| PMC (below this too many say it is too cheap) | EUR 451,420 | about 2.3x |
| OPP (least resistance) | EUR 503,125 | about 2.5x |
| IPP (bargain = expensive) | EUR 602,679 | about 3.0x |
| PME (above this too expensive) | EUR 950,000 | about 4.75x |

Our 3.9x (EUR 780,000) falls inside the range. **Do not lean on this:** the sellers read a buyer's price questions as sale prices, several centred their answers on the pitch's own EUR 700,000 to 900,000 example, and some assumed another EBITDA. The curve mostly echoes our range. Real price evidence has to come from real owners.

## 2. What the market pays
- **3.9x** average EBITDA multiple at EUR 200k EBITDA; **7.2x** at EUR 10m EBITDA ([DealSuite European M&A Monitor](https://www.dealsuite.com/en/blogs/european-m-a-valuation-gap-closes), undated; advisers' sample of 848 firms).
- **EUR 375,000 median, EUR 499,000 average** asking price for German successions 2025-2029 ([KfW as reported by mybusinessfuture.com](https://mybusinessfuture.com/nachfolge-kaeufer-brauchen-die-bankzusage-vor-dem-termin/)); these are sellers' expectations across all sizes, so they are not comparable to a EUR 200k-EBITDA business.
- **Price is a hurdle:** 43% of owners start with inflated price expectations (DIHK 2019 as cited), and price agreement is a major hurdle in about a third of cases ([IWW summary of KfW 2024](https://www.iww.de/pu/steuern-recht-aktuell/neue-zahlen-und-neue-tendenzen-bei-der-unternehmensnachfolge-herausforderungen-und-perspektiven-fuer-die-und-in-der-beratung-f166596)).
- Alternatives for the seller: a broker or nexxt-change sale (broker fees: quote only, not found), a family or management handover, or closure (`competitors.md`).

## 3. What the business needs (CFO tool, EUR 200k EBITDA, 75% cash conversion, equity only)
| Multiple | Cash needed (tool) + deferred 10% | Payback |
|---|---|---|
| 3.5x | EUR 728,000 + EUR 70,000 = EUR 798,000 | about 8.7 years |
| 3.9x | EUR 806,400 + EUR 78,000 = EUR 884,400 | about 9.7 years |
| 4.5x | EUR 924,000 + EUR 90,000 = EUR 1,014,000 | about 11.1 years |
Every step up in multiple costs about a year of payback and about EUR 100,000 of cash. The ceiling of 4.5x only makes sense for a target with strong, resilient earnings.

## 4. The price: open at 3.5x to 3.9x, with 4.5x as a ceiling
Why: sellers' main block is trust (17 of 20 in the second panel), not price (3 of 20). So we should **not buy trust with a higher multiple**; trust comes from the bank letter, the named directors, the guarantee and the adviser checks. Price-led sellers will go to the highest all-cash bid; chasing them destroys the return (section 3).

**Ladder by target quality (my proposal; you confirmed only the 3.5x to 4.5x range):**
| Tier | Multiple | When |
|---|---:|---|
| Standard | 3.5x | Owner-dependent firm, concentrated customers, or thin records |
| Typical | 3.9x | Stable earnings, management partly in place (the market average at this size) |
| Premium | up to 4.5x | Low customer concentration, manager ready to stay, recurring revenue, clean records |
Never above 4.5x without a new decision from you.

## 5. The structure is part of the price
- 90% at closing / 10% within 12 months, bank-guaranteed: the **guarantee fee is not modelled beyond a EUR 2,000 estimate** in `cfo.md`. The deferred 10% was the second most common objection after trust, and several sellers said they would sign for the full price in cash or in escrow.
- **A useful fact (my arithmetic):** 90% of 3.9x on EUR 200k EBITDA is EUR 702,000 in cash at closing. **100% cash at 3.5x is EUR 700,000**, the same cash at closing. For a price-led seller, the cash they receive is the same either way.

## 6. Test with real owners (two structures, same range)
| | Structure A | Structure B |
|---|---|---|
| Multiple | 3.9x | 3.5x |
| Payment | 90% at close, 10% in 12 months, bank-guaranteed | 100% at close |
| Seller receives at close (EUR 200k EBITDA) | EUR 702,000 | EUR 700,000 |
| Total price | EUR 780,000 | EUR 700,000 |
| Our cash needed (CFO tool) | EUR 806,400 + EUR 78,000 | **EUR 796,000** (no guarantee) |
| Payback | about 9.7 years | about 8.7 years |

How to test: show both to the first 10 owners who take a meeting (alternate the first offer), and record which one they and their advisers prefer and why. Success: one structure is preferred by clearly more owners; otherwise choose B for cost. Real owners beat the simulated sellers. If B is chosen, update `numbers.json` and re-run `/founder-cfo` (the CFO tool shows EUR 796,000 cash needed for B).

## 7. The opening offer
No discount and no "limited time" pressure (the offer rules forbid fake scarcity). What the seller gets at the start: the **adviser contribution (EUR 5,000 cap, confirmed)** and the written guarantees. The LOI's **exclusivity period** is the only date: its length is for your lawyer to set.

## 8. The sellers' price objections, verbatim (panel-v2, simulated; research only, not testimonials)
1. "A free first meeting costs me nothing and I want to look the person in the eye, so I'll come. But I'm selling to whoever pays the most cash, and 3.5 to 4.5 times is no better than what others might offer me." (P001)
2. "A free confidential first meeting costs me nothing and the bank letter and named directors sound serious, so I will listen. But my broker runs the process and I take the highest cash offer; 10% held back for a year and no references makes me think others will pay more at closing." (P013)
3. What would flip a no: "A higher headline price with all the money paid at closing, or a seller who will vouch for them."

## Output and next
Price per unit and per account per year: one-off per business; for a EUR 200,000-EBITDA target, EUR 700,000 (3.5x) to EUR 900,000 (4.5x). `numbers.json` is unchanged (it keeps 3.9x with 90/10). Next: `/founder-offer` already ran; test the structures with real owners, then re-run `/founder-cfo` and `/founder-plan`.
