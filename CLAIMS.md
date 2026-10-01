# Claims register — confirm before launch

Every factual or operational promise on the public site must be **true today**
(FTC substantiation). Mark each one ✅ true / ✏️ reword / ❌ remove, then
update the site to match.

## Business identity (`src/lib/site.ts` — build is blocked until filled)
| Field | Value | Status |
|---|---|---|
| Legal entity name | _empty_ | ☐ |
| Mailing address | _empty_ | ☐ |
| Phone | _empty_ | ☐ |
| Email | _empty_ | ☐ |
| Attorney / law firm doing legal work | _empty_ | ☐ |
| Published fee range (optional) | _empty_ | ☐ |
| States served (`statesServed`) | AL, CA, FL, MI, NJ, NY, OH, PA, TX | ☐ confirm |

## Operational claims on the site
| Claim | Where | Status |
|---|---|---|
| No upfront fees; no fee unless recovery | Hero, FAQ, Covenant | ☐ |
| Fee disclosed in a written engagement agreement before work begins | FAQ, Process, About | ☐ |
| Fees are "capped by your engagement agreement" | Covenant | ☐ |
| Recovered funds go to a controlled trust or escrow account | Home, Process | ☐ |
| Plain-English closing statement showing every material number | Process | ☐ |
| "Complete audit trail": every investigation step, counsel decision, and financial movement logged | Covenant | ☐ |
| Licensed attorney in the client's state reviews each case | Home, Process | ☐ |
| Legal work is performed by licensed attorneys (YoursAgain is not a law firm) | Footer, FAQ, About | ☐ counsel |
| "We aim to contact you within two business days" (`responseTime`) | Contact confirmation | ☐ |
| Case manager sends updates by email or phone at each major step | FAQ, /portal | ☐ |
| No data sale, no advertising use, no mass surveillance | Covenant, FAQ, Privacy | ☐ |
| "We do not lobby for harsher tax laws or faster seizures" | Covenant | ☐ |

## Legal / compliance review (counsel)
- ☐ Self-filing disclosure wording ("you can file a claim yourself at no cost") —
  check state-specific requirements for surplus-recovery agents (e.g. Florida,
  California) on disclosures, fee caps, and contract terms.
- ☐ Privacy notice (`src/app/privacy/page.tsx`) — CalOPPA / CCPA sufficiency.
- ☐ Contact-form consent checkbox wording (email/phone contact).
- ☐ Whether outreach letters/emails need to link to this site's privacy notice.

## Statistics (verified 2026-10-01)
| Claim | Source |
|---|---|
| $780M+ home equity lost, states PLF studied, 2014–2021 | https://homeequitytheft.org/size-and-scope |
| 8,500+ homes foreclosed and sold, same scope | same |
| Tyler v. Hennepin County, 598 U.S. 631 (2023) | https://www.supremecourt.gov/opinions/22pdf/598us2r27_aplc.pdf |
