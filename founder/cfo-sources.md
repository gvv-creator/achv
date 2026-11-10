# Sources for founder/numbers.json

Primary source: `Hevadex_Numbers.json`, ACHV Ltd / Hevadex Malta CFO financial model and review pack, as of 9 Nov 2026 (status: proposed, unaudited planning model). Field paths below refer to that file.

| input | value | pack field | status |
|---|---|---|---|
| Price per job | €3,678 (300 m² × €12.26) | commercial_drivers.unit_economics.bundle_revenue_eur_m2 | [A] unquoted illustration (CFO05) |
| Material | €1,782 (0.66 kg/m² × €9/kg × 300) | unit_economics.effective_kg_m2, landed_eur_kg | [A] no HEVADEX OMNIGUARD quote; 0.60 kg/m² from the 2019 110NP sheet |
| Incremental QA | €240 (€0.80/m²) | unit_economics.incremental_external_qa_eur_m2 | [A] |
| Claims allowance | 2% | unit_economics.claims_allowance_rate | [A] |
| Bad debt | 2% | parameters.loss_rate | [A] |
| Fixed costs Y1 | €12,750/month | parameters.payroll / marketing / warehouse / central_overhead (Y1) | [A] allowances, not offers |
| Capex | €20,000 | parameters.capex_by_month (M1 €12k, M4 €8k) | [A] |
| Payment terms | 60 days | parameters.collection_lag_months = 2 | [A] stress proxy |
| Supplier terms | 0 days | pack pays all stock on purchase | [A] |
| Inventory days | 30 | pack holds max(€15k, next month's COGS) | [A] approximation |
| Ramp | €0/0/0/5/8/12/16/20/23/27/32/37k ÷ €3,678 | assumptions_register A01 | [A] not market-validated (no account panel run) |
| Largest customer | 25% | y1_funnel.largest_customer_share_limit | [P] policy cap |
| Capacity | 7.05 jobs/month | staffing_bridge.field_days_per_allocation (120); annual_mix_and_capacity Y1 (69.39 days / 48.94 job-equivalents) | [A] derived |
| Scenarios, facility, VAT, tax reserve | see cfo.md | scenarios.*.summary, executive_summary | [A] model outputs; 1,516/1,516 checks pass |
| Review items | CFO01–CFO10 | cfo_review_items | pack's own |

Legend: [A] assumption or model output, [P] proposed policy.
| Ramp (panel case) | 0.009 job-equivalents in year 1 (€32.92 ÷ €3,678), back-loaded | founder/panel/results.json pipeline.revenue_year1 | [A] simulated-buyer estimate: realistic close rate 0%, 15% reach is an assumption. The pack's ramp is kept in numbers-plan.json |
| Payment terms | 60 days (buyers' median); Malta average about 80 days | panel payment_terms_median; market.json M8 | [A] |
| What-if cases | ACHV price €7.28/m² with landed €5/kg; landed €5/kg alone; payroll deferred to G0 (fixed €7,000/month) | founder/pricing.md section 2; board condition "clock starts at G0" | [A] illustrations run through the tool, not quotes |
