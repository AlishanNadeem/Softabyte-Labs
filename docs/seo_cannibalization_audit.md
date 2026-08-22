# SEO Cannibalization Audit

**Project:** Softabyte Labs
**Phase:** 11 — SEO Content System + Content Growth Architecture
**Date:** August 22, 2026

This audit reviews current live routes and the Phase 11 content backlog for overlapping search intent. No fabricated ranking or SERP data is used. Severity is qualitative: **None / Low / Medium / High**.

---

## 1. Live route pairs (verified against current code)

| Pages Compared | Potential Conflict | Severity | Reason | Recommended Action |
|---|---|---|---|---|
| Web Development vs. Ecommerce industry | Both could target "web development" language | **Low** | Ecommerce FAQ explicitly states it does not own "web development company"; Web page never mentions ecommerce as a vertical identity | Keep both; no action needed |
| Custom Software Development vs. Startups & SaaS industry | Both discuss MVPs/platforms | **Low** | Primaries are exclusive ("custom software development company" vs "SaaS development company"); body copy does not echo the other's primary phrase | Keep both; no action needed |
| AI & Automation vs. `business-processes-worth-automating` blog article | Automation topic overlap | **Low** | Service page = commercial capability page; article = informational candidate-selection education; article explicitly supports, does not replace, the service | Keep both; preserve existing outbound link from article to service |
| `/process/` vs. any future "custom software development process" article | Delivery methodology overlap | **Low** (preventive) | Process = Softabyte's branded delivery narrative; a future blog article on this theme must stay generic/educational | Enforce via `seo_content_brief_template.md` — mark as differentiation requirement before drafting |
| Professional Services industry vs. `when-business-needs-client-portal` blog article | Client portal topic overlap | **Low** | Industry page owns the vertical commercial primary; article is cross-industry and informational | Add contextual link from industry page to article (implemented — see §11 of `internal_linking_strategy.md`) |
| Services hub (`/services/`) vs. 6 service pages | Hub could compete with children | **None** | Hub H1 is "Services" (routing label); body text explicitly avoids restating child H1s or primaries | No action |
| Industries hub (`/industries/`) vs. 6 industry pages | Same pattern as above | **None** | Verified — hub content is routing/overview only | No action |
| Real Estate vs. Professional Services (both mention "client portals" in body) | Secondary theme overlap | **Low** | Different primary keywords; portals are a secondary theme on both, not the H1/title | Monitor; no action required |

**Conclusion:** No High or Medium-severity live conflicts were found. The Phase 0 differentiation matrices in `keyword_map.md` and `service_architecture.md` are being followed correctly in the current implementation.

---

## 2. Planned P1/P2/P3 backlog topics — cannibalization pre-check

Every backlog topic in `seo_content_backlog.md` was checked against existing money-page primaries and existing published articles before being added. Results:

| Check | Result |
|---|---|
| Does any P1 topic duplicate a service/industry primary keyword? | No |
| Does any P1 topic duplicate the intent of an existing published article? | No — see specific differentiation notes below |
| Does any topic imply a new URL outside `/blog/[slug]/`? | No |
| Does any topic require unverifiable claims (compliance, statistics, pricing)? | Flagged `RESEARCH REQUIRED` in the backlog, not fabricated |

### Specific differentiation notes carried into the backlog

| New topic | Existing article it is near | Differentiation enforced |
|---|---|---|
| "When Should a Business Build Custom Software?" | Custom Software vs. Off-the-Shelf | Existing article = framework for comparing options; new topic = timing/triggers (business stage signals), not a repeat comparison |
| "Workflow Automation for Business: Implementation Patterns" | How to Identify Business Processes Worth Automating | Existing article = candidate identification/prioritization; new topic = how automation is implemented once a candidate is chosen |
| "PSA vs. Custom Software for Service Firms" | When Does a Business Need a Client Portal? | Existing article = timing signal for portals specifically; new topic = tool-category decision (PSA product vs custom build), a different angle |
| "Custom Software Development Process" (P3, optional) | `/process/` | Must remain generic/educational; must not restate Softabyte's branded delivery steps verbatim |

---

## 3. Response policy

Per project rules, cannibalization findings are resolved by (in order of preference):

1. **Clarify intent** — differentiate scope in the brief before drafting (used above).
2. **Adjust internal anchors** — ensure the lower-priority page links to, rather than competes with, the primary owner.
3. **Adjust metadata** — only if a live conflict is found (none currently required).
4. **Consolidate content** — not required; no duplicate pages exist.
5. **Avoid publishing a planned duplicate** — enforced at brief stage, not after publication.

No pages were deleted, merged, or had metadata changed as a result of this audit. No conflict rose above Low severity.

---

## 4. Healthcare indexation (cross-reference)

See `docs/seo_keyword_ownership.md` §5. This is a **trust/YMYL indexation policy question**, not a keyword-ownership conflict between two pages, and is intentionally left unresolved pending a separate, explicitly-scoped decision.
