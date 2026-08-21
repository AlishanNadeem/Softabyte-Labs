# Website Information Architecture

**Project:** Softabyte Labs  
**Phase:** 0 — Planning only  
**Market:** United States  
**Date:** August 19, 2026  
**Status:** **FROZEN** — Phase 0 corrections applied.

This document defines the public website hierarchy. It is the source of truth for sitemap tiers, navigation, and which pages should exist at launch versus later.

Related documents:

- `service_architecture.md`
- `industry_strategy.md`
- `url_strategy.md`
- `keyword_map.md`
- `dynamic_vs_static_architecture.md`

---

## 1. Positioning constraint

Softabyte Labs is a **US-focused technology partner for US businesses** — premium, modern, and credible — not an offshore body shop and not a generic IT vendor.

Use approved positioning language (see `seo_strategy.md`). **Do not** describe team location or US-based delivery unless that claim is explicitly verified and approved. US market targeting is not the same as a US-based team claim.

The information architecture must communicate:

- Technical capability
- Design quality
- Business understanding
- Reliability after launch

It must **not** communicate:

- A menu of 30+ interchangeable services
- A directory of thin industry pages
- Ecommerce as a seventh core service

---

## 2. Architecture principles

1. **One primary intent per URL.**
2. **Services and industries are separate trees.**
3. **Quality over page count.** A new US agency should not launch with a large, thin sitemap.
4. **Launch pages must be completable with real content.** Do not publish empty Work or fake case studies.
5. **Navigation should stay short.** Buyers should reach a relevant service or Contact in two clicks.
6. **Blog supports commercial pages.** It is not the homepage of the business.

---

## 3. Recommended public hierarchy

```txt
/
├── about/
├── services/
│   ├── custom-software-development/
│   ├── web-development/
│   ├── mobile-app-development/
│   ├── ai-automation/
│   ├── ui-ux-design/
│   └── hosting-infrastructure/
├── industries/
│   └── ecommerce/
├── process/
├── work/                      [Tier 2 — code-managed when real projects exist]
│   └── [project-slug]/
├── blog/                      [Tier 2 — MongoDB + Admin Panel; not MDX]
│   └── [article-slug]/
├── contact/
├── privacy-policy/
└── terms/
```

### Intentionally omitted from launch

| Candidate | Decision | Reason |
|---|---|---|
| `/services/ecommerce-development/` | Do not create | Ecommerce is an industry, not a core service |
| `/industries/startups/` | Do not create as generic audience page | Use `/industries/startups-saas/` when content-ready — product/SaaS vertical only |
| `/services/ai-chatbots/` and similar AI children | Do not create | Same commercial intent as AI & Automation |
| `/services/cloud-hosting/` vs `/services/maintenance/` | Do not split | Overlapping “keep it running” intent |
| `/capabilities/` or `/technology/` | Do not create at launch | Would dilute service pages |
| `/industries/healthcare/` | Future — publish when content-ready | High commercial value; compliance-aware copy required |
| `/careers/` | Future | Only if hiring |
| Location microsites (`/new-york/`, `/texas/`) | Do not create | Doorway-page risk for a nationally positioned new agency |

---

## 4. Navigation model

### Primary navigation

- Work (show only when `/work/` is live)
- Services
- Industries
- Process
- About
- Insights (points to `/blog/` once live)
- Contact (button)

### Footer

- Services (all six)
- Industries (six approved verticals — pages published when content-ready)
- Company: About, Process, Work, Contact
- Insights
- Legal: Privacy Policy, Terms
- Primary CTA: Start a project

### Mobile

Same items. Contact remains persistent. Do not hide services behind extra nested drawers that require more than one tap from the Services parent.

---

## 5. Page roles

| URL | Role | Funnel | Index |
|---|---|---|---|
| `/` | Brand + proof + path to services/industries/contact | Awareness → consideration | Yes |
| `/about/` | Trust, US positioning, who we work with | Consideration | Yes |
| `/services/` | Commercial hub and comparison | Consideration | Yes |
| `/services/[service]/` | Primary money pages | Consideration → conversion | Yes |
| `/industries/` | Hub explaining vertical approach | Consideration | Yes |
| `/industries/ecommerce/` | Primary niche page | Consideration → conversion | Yes |
| `/process/` | Risk reduction and buying process | Consideration | Yes |
| `/work/` | Proof (code-managed) | Consideration | Yes, when real |
| `/work/[project]/` | Proof in depth (code-managed) | Consideration | Yes, when real |
| `/blog/` | Topical authority index (MongoDB + admin) | Awareness | Yes when posts exist |
| `/blog/[slug]/` | Supporting content (MongoDB + admin) | Awareness / mid-funnel | Yes if published |
| `/contact/` | Conversion | Conversion | Yes |
| `/privacy-policy/` | Legal | None | Yes |
| `/terms/` | Legal | None | Yes |
| `/admin/*` | Operations | None | No |

---

## 6. Final sitemap by launch tier

### Tier 1 — essential launch pages

These pages should exist before public SEO promotion.

1. `/`
2. `/about/`
3. `/services/`
4. `/services/custom-software-development/`
5. `/services/web-development/`
6. `/services/mobile-app-development/`
7. `/services/ai-automation/`
8. `/services/ui-ux-design/`
9. `/services/hosting-infrastructure/`
10. `/industries/`
11. `/industries/ecommerce/`
12. `/process/`
13. `/contact/`
14. `/privacy-policy/`
15. `/terms/`

### Tier 2 — high-value SEO pages

Build as soon as real assets exist. Do not fabricate them.

1. `/work/` (code-managed static pages)
2. `/work/[project-slug]/` for genuine projects only
3. `/blog/` (MongoDB + Admin Panel)
4. First cluster of supporting articles published via admin (see `content_strategy.md`)

### Tier 3 — future industry pages

Publish only when each page meets uniqueness requirements in `industry_strategy.md`.

1. `/industries/healthcare/`
2. `/industries/real-estate/`
3. `/industries/transportation-logistics/`
4. `/industries/professional-services/`
5. `/industries/startups-saas/`
6. Additional Work case studies
7. Additional blog clusters
8. `/careers/` if needed

(Ecommerce industry page remains Tier 1 when industry pages are built.)

---

## 7. Why this IA is realistic for a new US agency

A new premium agency cannot out-publish ScienceSoft, Appinventiv, or Netguru on page volume.

It can win by:

- Six deep service pages instead of 40 thin ones
- Focused industry pages with distinct intent — not a fake industry directory
- Process and About pages that reduce buyer risk
- Blog posts that support the money pages rather than chasing every keyword

---

## 8. Frozen decisions (Phase 0)

1. `/process/` is a Tier 1 launch page.
2. `/work/` stays Tier 2 until real projects can be published as **code-managed** case studies.
3. `/blog/` uses **MongoDB + Admin Panel** — not MDX as production CMS.
4. No location pages at launch.
5. Six approved industry verticals (see `industry_strategy.md`); pages published when content-ready — not all at once.
6. Six core services only; no `/services/ecommerce-development/`.
7. Do not claim US-based team/delivery unless verified and approved.

---

## 9. Implementation note — Phase 9 Blog (August 22, 2026)

Live routes:

- `/blog/`
- `/blog/[slug]/` (3 published informational articles)

Phase 9 uses a **local JavaScript repository** for public frontend + SEO.  
Phase 10 remains the planned MongoDB + Admin CMS migration path.

**Phase 8 / Work remains deferred.** Do not publish `/work/` or fake case studies.
