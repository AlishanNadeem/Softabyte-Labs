# Internal Linking Strategy

**Project:** Softabyte Labs  
**Phase:** 0 — Planning only  
**Date:** August 19, 2026

Internal links exist to help people choose the next useful page. SEO value follows from that. Do not add links only to place a keyword.

Related documents: `website_architecture.md`, `service_architecture.md`, `content_strategy.md`, `keyword_map.md`

---

## 1. Linking principles

1. Link where a reader would reasonably want to go next.
2. Use descriptive anchors. Prefer “custom software development” over “click here.”
3. Do not force the same exact-match anchor into every paragraph.
4. Every important page should be reachable from navigation or from a parent hub within two clicks of Home.
5. Blog posts should send qualified readers to services/industries/contact, not only to other posts.
6. Do not build reciprocal link schemes between thin pages.

---

## 2. Global links

### Header

Home brand mark → `/`  
Services → `/services/`  
Industries → `/industries/`  
Process → `/process/`  
About → `/about/`  
Insights → `/blog/` when live  
Contact CTA → `/contact/`  
Work → `/work/` when live

### Footer

All six services, all six approved industries, About, Process, Work, Blog, Contact, legal.

### Breadcrumbs (implement in a later phase)

`Home > Services > Web Development`  
`Home > Industries > Ecommerce`  
`Home > Insights > Article title`  
`Home > Work > Project name`

---

## 3. Homepage

The homepage should naturally connect to:

| Destination | Why |
|---|---|
| `/services/` and 3–6 service pages | Commercial path |
| `/industries/` | Hub — routes to all approved industry verticals |
| `/industries/ecommerce/` | Ecommerce & Retail vertical |
| `/industries/healthcare/` | Healthcare vertical (when live) |
| `/industries/real-estate/` | Real Estate vertical (when live) |
| `/industries/transportation-logistics/` | Transportation & Logistics (when live) |
| `/industries/professional-services/` | Professional Services (when live) |
| `/industries/startups-saas/` | Startups & SaaS (when live) |
| `/process/` | Risk reduction |
| `/work/` when live | Proof |
| `/blog/` when live | Authority, not the hero |
| `/contact/` | Conversion |
| `/about/` | Trust |

Do not dump every URL in the hero. Feature a short set and rely on nav/footer for completeness.

---

## 4. Service pages

Each service page should link to:

| Type | Examples |
|---|---|
| Parent hub | `/services/` |
| Related services | See matrix in `service_architecture.md` |
| Relevant industry | Especially `/industries/ecommerce/` when the example is commercial |
| Process | `/process/` |
| Work | Relevant case studies when they exist |
| Supporting blog | 2–4 contextual articles, not a dump of the whole cluster |
| Contact | Primary CTA |

### Recommended anchor themes (not scripts)

| Page | Natural anchor themes |
|---|---|
| Custom Software | custom software, purpose-built systems, replace legacy tools |
| Web | web development, website and web app build, performance-minded web |
| Mobile | mobile app development, iOS and Android product |
| AI | AI automation, workflow automation, practical AI integration |
| UI/UX | UI/UX design, product design, conversion-focused interface design |
| Hosting | managed application hosting, deployment and maintenance |

---

## 5. Industry pages (Phase 5A)

Full per-industry link plans: `industry_seo_research.md` section 16.

### General rules

- Link to services in **problem-to-solution context** — not all six equally on every page
- Link to `/process/`, `/contact/`, relevant `/work/`, and 2–4 contextual blog posts when live
- Link back to `/industries/` hub
- **Do not** aggressively cross-link between industry pages
- **Do not** link to non-existent service URLs (e.g. ecommerce-development service)

### Service link weighting by industry

| Industry | Primary service links | Secondary |
|---|---|---|
| Ecommerce | Custom Software, Web, AI, Hosting | Mobile, UI/UX |
| Healthcare | Custom Software, Mobile, UI/UX | Web, AI, Hosting |
| Real Estate | Custom Software, Web, Mobile, UI/UX | AI, Hosting |
| Logistics | Custom Software, Mobile, AI, Hosting | Web, UI/UX |
| Professional Services | Custom Software, UI/UX, Web, AI | Mobile, Hosting |
| Startups & SaaS | Custom Software, Web, UI/UX, Hosting | AI, Mobile |

### Ecommerce (first industry page)

Ecommerce should link to:

- All six services, each in a problem-to-solution context
- `/process/`
- `/contact/`
- Relevant work
- Relevant blog (commerce operations, not generic “what is SEO”)
- `/industries/` hub

Do **not** link to a non-existent ecommerce service page.

---

## 6. Process, About, Contact

| Page | Links out to |
|---|---|
| `/process/` | Services hub, Contact, optionally Work |
| `/about/` | Services, Process, Contact, Work |
| `/contact/` | Services hub, Process. Keep the form primary. |

---

## 7. Blog

### Listing (`/blog/`)

- Featured posts
- Categories later if they help humans
- Contextual CTA to Services or Contact, not every post excerpt stuffed with links

### Articles

Each article should include:

- 1 primary commercial link (the pillar service or industry it supports)
- 1–2 related service or industry links where relevant
- 1–3 related articles
- A single closing CTA (Contact or a specific service)

Do not insert a service link in every H2.

---

## 8. Topical authority flow

For each major service:

```txt
Service page (pillar)
    ↓
Supporting blog content
    ↓
Related service
    ↓
Related industry (often Ecommerce)
    ↓
Work / case study when real
    ↓
Contact
```

### Cluster link map

| Pillar | Supporting content themes | Related service | Related industry |
|---|---|---|---|
| Custom Software | vs off-the-shelf, process, timeline, when to build | AI, Hosting | Ecommerce, Healthcare, SaaS |
| Web | website vs web app, performance, redesign signs | UI/UX, Hosting | Ecommerce, Real Estate, SaaS |
| Mobile | app vs mobile web, build choices | UI/UX, Custom Software | Healthcare, Logistics, Real Estate |
| AI | useful automation, integration, when not to use AI | Custom Software | Ecommerce, Logistics, Professional Services |
| UI/UX | hierarchy, design systems, conversion UX | Web, Mobile | Ecommerce, Professional Services, SaaS |
| Hosting | managed hosting vs DIY cloud, maintenance retainers | Web, Custom Software | Ecommerce, Logistics, SaaS |
| Ecommerce industry | storefront vs ops, automation, custom commerce | Custom Software, Web, AI | — |
| Healthcare industry | portals, workflow automation, buy vs build | Custom Software, Mobile | — |
| Real Estate industry | PropTech MVP, portals, property ops | Custom Software, Web | — |
| Logistics industry | TMS, fleet, visibility | Custom Software, Mobile, Hosting | — |
| Professional Services industry | client portals, PSA vs custom | Custom Software, UI/UX | — |
| Startups & SaaS industry | MVP scope, SaaS architecture | Custom Software, Web, UI/UX | — |

---

## 9. What not to do

- Sidebar of 50 keyword links
- Exact-match “custom software development company” on every page footer paragraph
- Linking two pages that target the same intent
- Orphan blog posts
- Linking to drafts, admin, or UTM’d URLs

---

## 10. Implementation note for later phases

When components are built, create a small set of reusable modules:

- Related services
- Related reading
- Project CTA
- Industry use case

Do not hardcode contradictory links in each page independently without a map. This document is that map.

---

## 11. Implementation note — Phase 11 selective inbound links (August 22, 2026)

By Phase 10, service/industry pages had no outbound links to the 3 published Blog articles — the gap this document's §4/§7 anticipated. Phase 11 closed it with a small reusable `RelatedInsights` Server Component (`components/sections/shared/RelatedInsights.js`) and a static, code-managed link config (`config/related_insights_links.js`), wired into:

| Page | Linked article(s) |
|---|---|
| `/services/custom-software-development/` | Custom Software vs. Off-the-Shelf; When Business Needs a Client Portal |
| `/services/web-development/` | When Business Needs a Client Portal |
| `/services/ai-automation/` | How to Identify Business Processes Worth Automating |
| `/industries/professional-services/` | When Business Needs a Client Portal |

This is intentionally selective (per §9, "what not to do" — no link dump). Only genuinely relevant pairings were added; the other 8 service/industry pages do not yet have a matching published article and were left unchanged. As the Phase 11 backlog (`seo_content_backlog.md`) is published over time, add entries to `related_insights_links.js` following the same relevance standard — do not add a link merely because an article exists.

The component queries only static configuration (no MongoDB call from service/industry pages), preserving their static/server-rendered build-safety.
