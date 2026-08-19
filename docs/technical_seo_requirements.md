# Technical SEO Requirements

**Project:** Softabyte Labs  
**Phase:** 0 — Planning only  
**Date:** August 19, 2026  
**Status:** **FROZEN** — Phase 0 corrections applied.

Do **not** implement sitemap, robots, schema, or metadata in this phase. This is the contract for later phases.

Related: `url_strategy.md`, `keyword_map.md`, `dynamic_vs_static_architecture.md`

---

## 1. On-page requirements by page type

Every **indexable** page must have:

| Element | Requirement |
|---|---|
| Title tag | Unique, accurate, includes primary theme, no keyword stuffing |
| Meta description | Unique, human, includes a reason to click, no fake claims |
| Single H1 | Matches page intent; not duplicated sitewide |
| H2/H3 | Logical outline; do not skip levels |
| Canonical | Absolute self-canonical (https + host + slash policy) |
| Open Graph | `og:title`, `og:description`, `og:url`, `og:image`, `og:type` |
| Social | Twitter/X tags optional but recommended once OG images exist |
| Internal links | Per `internal_linking_strategy.md` |
| Image alt | Descriptive; decorative images empty alt; no keyword stuffing |
| Breadcrumbs | Recommended on inner pages when UI exists |
| Indexability | `index,follow` unless listed as noindex |
| Language | `lang="en"` (US English content) |

### Homepage

- Organization-level positioning
- Paths to services and Ecommerce
- OG type `website`

### About / Process

- Trust copy; no invented bios or stats
- Still unique titles/metas

### Service pages

- Problem, capability, process, FAQs only if answers are real
- Service schema only if the page truly describes a service offered

### Industry pages

- Unique industry problems
- Links to services; not a copy of a service page

### Blog listing

- Indexable
- No thin empty state if zero posts — **do not launch listing until there is a small real set**, or show a honest empty state that is `noindex` until posts exist. **Recommendation:** launch `/blog/` with Month 1 posts, not as an empty shell.

### Blog articles

- Article title/H1 alignment
- `Article` schema only when there is a real author and publish date
- Canonical to the article URL
- Drafts never index

### Work / case studies

- Unique project content
- No `Review`/`AggregateRating` schema without real, policy-compliant reviews

### Contact

- NAP only if accurate
- Form labels; do not `noindex` Contact

---

## 2. Structured data policy

Add only what the page can support.

| Page type | Allowed JSON-LD | Do not add |
|---|---|---|
| Sitewide / Home | `Organization`, `WebSite` | `AggregateRating` without sourced reviews |
| Service | `Service` + `BreadcrumbList` | `FAQPage` unless visible FAQs exist |
| Industry | `BreadcrumbList`; optionally `Service` if framed as an offering to that industry — **prefer BreadcrumbList only** to avoid duplicating six Service entities | Fake `LocalBusiness` |
| Blog listing | `BreadcrumbList`, optionally `CollectionPage` | |
| Article | `Article` or `BlogPosting`, `BreadcrumbList` | Fake `speakable` |
| Work | `BreadcrumbList`; `CreativeWork` if accurate | Invented `Review` |
| Contact | `Organization` contact points if true | |
| Admin | none | |

`LocalBusiness` is appropriate only with a real public US address. **Approval required** before using local schema.

Do not mark up breadcrumb trails that are not visible.

---

## 3. Indexation strategy

### Indexable (when published and substantial)

- Home, About, Process
- Services hub + six services
- Industries hub + Ecommerce
- Work index + real case studies
- Blog index (when posts exist) + published posts
- Contact
- Privacy Policy, Terms

### Non-indexable

- `/admin/` and all admin children
- Login
- API routes
- Draft and preview blog URLs
- Thank-you pages if they are thin duplicates
- Internal search result URLs if added later
- Staging environments (HTTP auth + `noindex`)

### Other indexation risks

- Query-parameter duplicates
- Trailing-slash duplicates
- Pagination duplicates
- Placeholder Work pages
- Tag archives if added without unique value (`noindex` or do not create)

---

## 4. Sitemap strategy (future implementation)

One XML sitemap index is enough at launch.

Include:

- All indexable marketing URLs
- Published blog posts automatically once the blog is database-driven
- Published work URLs

Exclude:

- Admin, API, drafts, private pages, `noindex` URLs, parameter URLs

Do not submit sitemap until production HTTPS and canonical host are final.

**Do not implement in Phase 0.**

---

## 5. Robots strategy (future implementation)

Allow crawling of public content and of CSS, JS, and images required to render.

Disallow:

- `/admin`
- `/api` (unless a public API must be crawled — it should not)
- Preview/draft paths

Do **not** disallow `/_next/static` or other required assets.

Use `Sitemap:` once the sitemap exists.

**Do not implement in Phase 0.**

---

## 6. Technical SEO checklist

| Item | Standard |
|---|---|
| HTTPS | Required in production |
| Canonical URLs | Required on indexable pages |
| Sitemap | Later; public URLs only |
| Robots | Later; do not block rendering assets |
| Redirects | 301 for permanent; see `url_strategy.md` |
| 404 | Custom; no homepage soft-404 |
| Status codes | 200 canonicals; 301 duplicates; 404 unknown; 410 gone |
| Mobile rendering | Mobile-first; no hidden primary content |
| Structured data | Supported types only |
| Image SEO | Next.js Image; real alt; compressed assets |
| Font loading | Manrope + Inter via `next/font` variable fonts; no FOIT disasters; subset as needed |
| JavaScript | Prefer Server Components; Client Components only for interaction |
| Core Web Vitals | Design and motion must not tank LCP/CLS/INP |
| LCP | Hero must not be a huge unoptimized video by default |
| CLS | Reserve image/font space; no late-injected banners |
| INP | Light JS; respect `prefers-reduced-motion` |
| TTFB | Static/SSR; no Mongo on marketing pages |
| Internal linking | As specified |
| Breadcrumbs | Inner pages |
| Duplicate content | No service/industry clones; no www/non-www doubles |
| Query parameters | Canonicalize |
| Pagination | Only if blog needs it later |

---

## 7. Performance, motion, and design guardrail (frozen)

Preserve across all implementation phases:

**Font:** Manrope + Inter — loaded via `next/font` variable fonts (supersedes earlier Montserrat planning)

**Visual direction:** premium, sleek, elegant, modern, editorial, technical, creative/media-agency inspired.

**Motion:** Smooth scrolling and refined motion may be part of the experience, but must not harm SEO or Core Web Vitals.

Implementation requirements:

- Prioritize LCP, CLS, INP, and mobile performance
- Use semantic HTML and server-rendered SEO content
- Respect `prefers-reduced-motion`
- Keep JavaScript minimal; prefer Server Components
- No animation that delays content visibility
- No heavy scroll hijacking
- No unnecessary animation libraries
- Prefer `transform` and `opacity` for motion
- Do not lazy-load LCP images
- Reserve space for images and fonts to prevent CLS

Smooth scrolling must **never** come at the expense of SEO, crawlability, or performance.

---

## 8. International

US-only for now. No hreflang. Do not create translated doorway pages.
