# active-memory handoff: Always Broke Ltd founder pack

**Handoff #1** · 2026-11-10 · Lineage: #1 (2026-11-10): ran /founder-board, /founder-competitors, /founder-cfo, /founder-consumer and /founder-offer for Always Broke Ltd; founder confirmed the offer terms.

## 0. Instructions for Claude (read first)

You are continuing work from a previous chat. That chat is gone; this file is the complete context and the source of truth.

1. Read this whole file before replying.
2. Follow sections 3 (Style), 4 (Hard rules) and 5 (Corrections) in every reply, for the rest of this chat. They override your defaults.
3. Use the values in section 8 exactly. Never round, re-estimate, or "correct" them.
4. Do not suggest anything listed in section 7 (Changed / rejected) again unless the user brings it up.
5. Code word: None active. If the user types /amcodeword, start every reply with the phrase they choose (default "Yes Boss!").
6. Your first reply: at most 5 lines covering the goal, the current state, and the next step (section 11). Mention any files from section 13 that were not attached. Ask the questions in section 12 if there are any. End with "Ready to continue with <next step>?" Then wait for the user's go.

## 1. Mission
- **Goal:** Run the founder pack (`/founder-skill:*` skills) for Always Broke Ltd, a newly incorporated Belize investment holding company that acquires and holds profitable small and micro niche businesses across the EU, long term, in the Swedish investment-company style. Pack order: board -> competitors -> consumer -> pricing -> offer -> cfo -> marketing -> brand -> ops -> launch -> plan.
- **Done looks like:** The pack is complete through `/founder-plan`, with every number traceable and every claim sourced or labelled as an estimate.
- **Why it matters / context:** Startup stage. Governance, initial funding and a qualified acquisition pipeline are all still to be built. The first investment is an independently sourced third-party business.

## 2. About the user (as relevant to this work)
- Founder of Always Broke Ltd (Belize-incorporated, targets the EU). Works in the repo `gvv-creator/achv` on branch `claude/intelligent-lamport-8cua7m`; pack files live in `founder/`.
- Answers briefly ("Confirmed"). Delegates work to the skills and expects Claude to run them end to end.

## 3. Style & communication
- **Language:** English.
- **Tone:** Plain, direct, evidence-first; state failures and gaps plainly.
- **Reply length:** Short summary up front, then the key numbers; details live in the files.
- **Formatting:** Markdown, tables for results, one bash block per command when giving commands.
- **Working style:** Act autonomously; ask only when a decision is the user's to make (the founder skill allows at most 3 questions).
- **Avoid:** Invented facts, markets, prices, competitors or budgets. Presenting estimates as facts. Putting any model name in repo files, commits or PRs.

## 4. Hard rules (word for word)
1. "Do not invent a budget, a market size or a competitor." (founder-board)
2. "Public sources only, every fact linked... Never invent a competitor, a price, a rating or a review." (founder-competitors)
3. "Every number in your note comes from the tool's output or an input you can name." (founder-cfo)
4. "Never write an answer for a buyer yourself." (founder-consumer)
5. Never raise panel calibration weights to make a result look better.
6. "No fake reviews, testimonials, scarcity, discounts or 'as seen on'." (founder-offer)
7. Not financial, tax or legal advice: an accountant and lawyers must check the structure, payroll, tax and the Belize/EU position before money moves.
8. The stop hook requires: commit and push after changes to branch `claude/intelligent-lamport-8cua7m` (always `git push -u origin claude/intelligent-lamport-8cua7m`). Do NOT open a pull request unless asked.
9. Commit messages end with: `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>` and `Claude-Session: https://claude.ai/code/session_01BwBAT44gWgiQBjnxtPrAae`. No model names anywhere else in the repo.
10. The v2 pitch describes things that do not exist yet; never present it as true, and do not send it to a real seller until each claim is real.

## 5. Corrections log
| # | Claude did | The user wanted |
|---|---|---|
| 1 | Left new files untracked or uncommitted at the end of a turn | Commit and push to the branch (stop hook, repeated several times) |
| 2 | Offered unconfirmed offer terms as proposals | The user replied "Confirmed" to the multiple, the 90/10 split and the EUR 5,000 adviser cap |

## 6. Decisions
| Decision | Why |
|---|---|
| Model is B2B (M&A / investment holding); sellers and funders are the "accounts" | No product sale; board used four members (Offers, Monopoly, Product, Account) |
| Seller panel region is Germany, as a proxy for the EU27 | Best sourced data (KfW, nexxt-change); skill requires one named place |
| Quick panels of 20 buyers (seed 357363) | Skill suggests --quick before a 100-buyer run |
| Offer name: "The Permanent Home Agreement" (working name) | Chosen in /founder-offer |
| Offer terms: 3.5x to 4.5x EBITDA, 90% cash at close, 10% within 12 months bank-guaranteed, EUR 5,000 adviser contribution cap | Confirmed by the founder, 2026-11-10 |

## 7. Changed / rejected
- Pitch v1 (30% deferred over three years, Belize shell) → pitch v2 (90/10, EU entity, bank letter of funds, written staff/site/name guarantee, buy-back right). v1 saved as `founder/pitch-v1.md`.
- Competitors scope "[EU27]" → panel run for Germany only (proxy), market sizing from KfW.
- ❌ Fake references or testimonials (none exist; rules forbid them).
- ❌ Performance guarantee or earn-out (cost and risk too high for an unfunded company).
- ❌ Fake urgency or scarcity.
- ❌ Using the search-fund 7.0x EBITDA multiple as a European benchmark (it is US/Canada data).

## 8. Data & facts (exact)
**Board (4 members):** Offers 3, Monopoly 3, Product 3, Account 4. All FUND IF. Average 3.25/10.

**Competitor and market facts (all linked in `founder/competitors.md` and `founder/market.json`):**
- Lifco: 275 operating companies in 37 countries (end 2025). Indutrade: B2B only, annual sales SEK 50-500 million. Lagercrantz: "evolution rather than a revolution". Aethris GmbH: "A permanent home for companies built to endure." Newport & Co: EUR 30m, carve-outs of revenue EUR 10-100m. Search funds outside US/Canada: 320 funds, 40 countries, median price USD 11.7m, revenue USD 7.8m, margin 24%.
- DealSuite European M&A Monitor: average EBITDA multiple about 3.9 at EUR 200k EBITDA, about 7.2 at EUR 10m (undated; 848 advisory firms).
- KfW (Jan 2026): 545,000 German SMEs want a successor by end 2029; 57% of owners are 55+; about one in four considering closure; 114,000 could close each year. Median asking price EUR 375,000, average EUR 499,000 (secondary report). Sales phase roughly 6 to 18 months.
- nexxt-change: free, anonymous; 22,300 matches started since 2006 (site claim).

**CFO scenario (one micro business, equity only; `founder/numbers.json`):**
- EBITDA EUR 200,000 (illustrative); multiple 3.9x -> purchase EUR 780,000; deal costs 8% = EUR 62,400; search EUR 20,000; holding costs EUR 5,000/month; cash conversion 75% -> EUR 12,500/month; first deal in month 4.
- v1: cash needed EUR 877,400; payback about 9.6 years; return about 10.4%/year before debt and tax; year 1 operating profit EUR 52,500.
- v2 (90/10): cash needed EUR 806,400 plus EUR 78,000 deferred = about EUR 884,400; guarantee/letter set-up EUR 2,000 (estimate).
- Levers: 3.0x -> cash EUR 683,000, payback about 7.2 years; seller note for half the price -> cash EUR 487,400 (note repayments not modelled); three businesses -> cash EUR 2,562,200, year 1 profit EUR 165,000.

**Panels (Germany, 20 buyers, seed 357363):**
| | v1 | v2 |
|---|---:|---:|
| Meeting, stated / realistic | 5% / 1% | 95% / 24% |
| Signs within 12 months, realistic | 0% | 1% |
| Might / probably not / definitely not | 0 / 2 / 18 | 12 / 7 / 1 |
| Realistic meetings from 272 owners approached | 3 | 65 |
| Reason for not signing | trust 20 | trust 17, price 3 |
- Population 545,000; reach 0.0005 (272 accounts) is an assumption; benchmark 5% is a placeholder; segments, buying process, roles shares are assumptions.

## 9. People, terms & names
- **Terms & nicknames:** FUND IF = board vote with conditions; panel P001-P020 = simulated sellers; v1/v2 = old and new pitch.
- **Names in use:** `founder/idea.md`, `board.md`, `board/` (brief and four memos), `competitors.md`, `competitors.csv`, `numbers.json`, `cfo.md`, `cfo-sources.md`, `market.json`, `customer.json`, `pitch.md` (v2), `pitch-v1.md`, `offer.md`, `panel/` (v1), `panel-v2/`, `results-v1.md`.
- **Commands:** `python3 <plugins>/founder-skill/skills/founder-consumer/panel.py --dir founder/panel-v2 <init|prompts|check|tally>`; CFO tool `unit_economics.py founder/numbers.json --out founder/cfo.md`.

## 10. Work state
| Item | Status | Version / location | Notes |
|---|---|---|---|
| /founder-board | Final | `founder/board.md` | 4x FUND IF |
| /founder-competitors | Final | `founder/competitors.md/.csv` | Gap in micro end possible, not proven |
| /founder-cfo | v1 final, needs re-run for v2 | `founder/cfo.md`, `numbers.json` | numbers.json still holds the v1 scenario |
| /founder-consumer | Final (two quick panels) | `founder/panel/`, `panel-v2/` | |
| /founder-offer | Done, terms confirmed | `founder/offer.md`, `pitch.md` | |
| Handoff file | This file | `handoff-always-broke.md` | Commit it |

## 11. Next steps
1. **Next action:** Run `/founder-skill:founder-cfo` again using the v2 offer (90% cash at close, 10% deferred within 12 months, EUR 5,000 adviser cap, EUR 2,000 guarantee set-up) and update `founder/numbers.json`, `cfo.md`, `cfo-sources.md`; commit and push.
2. Run `/founder-skill:founder-marketing`: how to reach owners and get a bank or adviser to vouch.
3. Continue `/founder-brand`, `/founder-ops`, `/founder-launch`, `/founder-plan`. Run `/founder-pricing` only if useful (the "price" is the purchase multiple).

## 12. Open questions ⚠️
- Founder to provide: budget, funders and their terms, target size band, whether an EU entity and bank letter will actually be put in place (the v2 pitch assumes yes).
- Remaining estimates to replace with quotes: EUR 5,000/month holding costs, 8% deal costs, EUR 20,000 search, EUR 2,000 guarantee set-up, 75% cash conversion.
- Would the founder like a 100-buyer panel or an EU27 (not just Germany) re-run?

## 13. Re-attach checklist
- [ ] Nothing to attach: the repo `gvv-creator/achv`, branch `claude/intelligent-lamport-8cua7m`, holds all files in `founder/`.

---
<sub>Audit: 13/13 sections · 10 rules · 2 corrections · 40 data points · secrets removed: none found · generated by active-memory</sub>
