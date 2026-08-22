# SEO Keyword Ownership — Implementation Reference

**Project:** Softabyte Labs
**Phase:** 11 — SEO Content System + Content Growth Architecture
**Date:** August 22, 2026
**Status:** Canonical implementation-level ownership map. Supersedes `keyword_map.md` / `keyword_strategy.md` for "what is actually live" questions — those documents remain the historical Phase 0 strategy record. See §7 for how the two relate.

This document reflects the **actual current codebase**, verified directly against `config/services_content.js`, `config/industries_content.js`, `config/homepage_content.js`, `config/process_content.js`, `config/about_content.js`, `config/contact_content.js`, `config/blog_content.js`, `lib/blog/posts/*.js`, and `lib/seo/structured_data.js`.

**Data policy:** No search volume, keyword difficulty, CPC, or ranking data is included anywhere in this document. Priority is qualitative (High / Medium / Low Business Priority) per project rules.

---

## 1. Search intent classification (used throughout Phase 11 docs)

| Code | Class | Meaning |
|---|---|---|
| **Informational** | Learning, scoping, de-risking | Blog, parts of FAQs |
| **Commercial Investigation** | Comparing providers / evaluating a capability | Service, industry, hub pages; most blog articles secondarily |
| **Transactional / Commercial** | Ready to contact, hire, or start | Contact, CTAs on money pages |
| **Navigational / Brand** | Looking for Softabyte Labs by name | Homepage |

A page may carry a secondary intent, but every row below states one **primary** intent.

---

## 2. Money pages — commercial owners (verified live)

| Page | Page Type | Primary Topic | Primary Keyword / Theme | Search Intent | Secondary Themes | Status |
|---|---|---|---|---|---|---|
| `/` | Homepage | Brand + broad technology partner relevance | Softabyte Labs (brand) | Navigational / Brand | Software, product, AI, hosting (supporting, not stuffed) | Live |
| `/about/` | Company | Who Softabyte Labs is | Softabyte Labs — about / who we are | Navigational / Brand | US technology partner, trust | Live |
| `/services/` | Hub | Service routing | software development services (hub-level) | Commercial Investigation | Routes to 6 children | Live |
| `/services/custom-software-development/` | Service | Custom software builds | custom software development company | Commercial Investigation → Transactional | Legacy replacement, integrations, internal tools | Live |
| `/services/web-development/` | Service | Websites and web applications | web development company | Commercial Investigation → Transactional | Marketing sites vs web apps, performance | Live |
| `/services/mobile-app-development/` | Service | Mobile products | mobile app development company | Commercial Investigation → Transactional | iOS/Android/cross-platform | Live |
| `/services/ai-automation/` | Service | AI + workflow automation | AI automation for business | Commercial Investigation → Transactional | Workflow automation, AI integration | Live |
| `/services/ui-ux-design/` | Service | Product/UX design | UI UX design agency | Commercial Investigation | Design systems, conversion UX | Live |
| `/services/hosting-infrastructure/` | Service | Managed hosting/ops | managed application hosting | Commercial Investigation → Transactional | Deployment, monitoring, maintenance | Live |
| `/industries/` | Hub | Industry routing | industries we serve (supporting) | Commercial Investigation | Routes to 6 verticals | Live |
| `/industries/ecommerce/` | Industry | Ecommerce operator technology | ecommerce software development | Commercial Investigation → Transactional | Storefront vs ops systems, automation | Live |
| `/industries/healthcare/` | Industry | Healthcare org technology | healthcare software development | Commercial Investigation | Portals, workflow — no compliance claims | **Live, caution — see §5** |
| `/industries/real-estate/` | Industry | Property/PropTech technology | real estate software development | Commercial Investigation | PropTech, portals, ops | Live |
| `/industries/transportation-logistics/` | Industry | Logistics/carrier technology | logistics software development | Commercial Investigation | Dispatch, fleet, visibility | Live |
| `/industries/professional-services/` | Industry | Service-firm technology | software for professional services firms | Commercial Investigation | Client portals, PSA vs custom | Live |
| `/industries/startups-saas/` | Industry | SaaS/product technology | SaaS development company | Commercial Investigation → Transactional | MVP, product architecture | Live |
| `/process/` | Company | Delivery methodology | software development process (branded) | Commercial Investigation | Discovery-to-launch | Live |
| `/contact/` | Conversion | Start a project | contact Softabyte Labs | Transactional | — | Live |
| `/privacy-policy/`, `/terms/` | Legal | Compliance | none (not keyword-targeted) | — | — | Live |

All titles/H1s above were verified directly against `config/services_content.js` and `config/industries_content.js` and match `docs/keyword_map.md`. **No changes were made or are recommended to any money-page metadata, H1, or canonical in Phase 11.**

---

## 3. Blog — informational owners (3 published articles, verified against `lib/blog/posts/*.js`)

| Article | Path | Primary Topic | Search Intent | Supports (Service) | Supports (Industry) | Status |
|---|---|---|---|---|---|---|
| Custom Software vs. Off-the-Shelf | `/blog/custom-software-vs-off-the-shelf/` | Buy-vs-build decision framework | Commercial Investigation (informational lean) | Custom Software Development | — | Published 2026-08-22, Featured |
| When Does a Business Need a Client Portal? | `/blog/when-business-needs-client-portal/` | Client portal timing/triggers | Commercial Investigation (informational lean) | Custom Software, Web Development | Professional Services | Published 2026-08-22 |
| How to Identify Business Processes Worth Automating | `/blog/business-processes-worth-automating/` | Automation candidate selection | Commercial Investigation (informational lean) | AI & Automation, Custom Software | — | Published 2026-08-22 |

Each article explicitly supports, and does not duplicate, its pillar's commercial primary. None target a service/industry primary keyword directly.

---

## 4. Cannibalization notes (summary — full audit in `seo_cannibalization_audit.md`)

| Owner | Must not be echoed as primary by | Differentiation |
|---|---|---|
| Web Development ("web development company") | Ecommerce industry page | Web = build capability; Ecommerce = operator vertical |
| Custom Software Development | Startups & SaaS industry page | Custom Software = build capability; Startups/SaaS = product-company vertical |
| AI & Automation | Any future automation blog article | Service = commercial capability; blog = informational education |
| `/process/` (branded delivery) | Any "custom software development process" blog article | Process = our delivery; blog = general education |
| Professional Services (client portals) | `when-business-needs-client-portal` article | Article is cross-industry/informational; industry page owns the vertical commercial primary |

---

## 5. Healthcare — trust/indexation status (no change made in Phase 11)

`docs/keyword_strategy.md` (Phase 0, frozen) states Healthcare should be **"HIGH priority — defer publish until trust assets"** due to YMYL sensitivity. The current codebase shows `/industries/healthcare/` is **live and included in the sitemap** (`lib/seo/structured_data.js` → `get_indexable_static_routes()`).

**Phase 11 decision:** This is a policy question (whether to noindex until trust assets exist), not a keyword-ownership or cannibalization problem. Per the Phase 11 objectives, **no metadata, sitemap, or robots change was made** to Healthcare in this phase. This is recorded here as an open item for a future, explicitly-scoped decision — not resolved unilaterally.

The existing page already avoids the specific unverified claims called out in `industry_strategy.md` (no HIPAA/SOC 2/HITRUST claims found in `config/industries_content.js`).

---

## 6. Content gaps identified (addressed via internal linking, not new pages)

| Page | Gap | Resolution in Phase 11 |
|---|---|---|
| All 6 service pages | No outbound links to supporting Blog articles | Selective `RelatedInsights` links added — see `internal_linking_strategy.md` §11 |
| Professional Services industry page | No outbound link to `when-business-needs-client-portal` | Added |
| `/services/` hub copy | States Process/Industries pages "will cover... when published" — both are already live | Corrected wording (factual accuracy, not keyword change) |

No new pages, new URLs, or new commercial primaries were introduced to close these gaps.

---

## 7. Relationship to Phase 0 documents

`keyword_map.md` and `keyword_strategy.md` remain the **historical Phase 0 strategic record** and are not rewritten. Where this document and those differ only in implementation detail (e.g., confirming what is actually live today, or documenting a field-naming difference such as `meta_title` vs the Phase 0 `seo_title` label), **this document (`seo_keyword_ownership.md`) is the canonical implementation-level owner map going forward.** Any future keyword assignment must check this file first.
