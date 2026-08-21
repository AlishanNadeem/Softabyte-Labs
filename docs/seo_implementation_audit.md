# Technical SEO Implementation Audit

**Project:** Softabyte Labs  
**Phase:** 3.1 — Technical SEO Foundation  
**Date:** August 20, 2026  
**Status:** Implementation record (does not replace Phase 0 strategy documents)

Related strategy documents: `seo_strategy.md`, `technical_seo_requirements.md`, `keyword_map.md`, `url_strategy.md`, `internal_linking_strategy.md`, `website_architecture.md`

---

## 1. Audit matrix

| Requirement | Status | Evidence / file | Action taken |
|---|---|---|---|
| Single site config source | **PASS** | `lib/site.js` | Extended with `site_description`, `site_locale` |
| Canonical host (apex) | **PASS** | `lib/site.js`, `next.config.mjs` | www → apex 308 redirect added |
| Trailing slash policy | **PASS** | `next.config.mjs` `trailingSlash: true` | Verified; nav/canonicals use trailing slashes |
| Canonical URL helper | **PASS** | `lib/seo/canonical.js` | Created `create_canonical_url()` |
| Metadata helper | **PASS** | `lib/seo/metadata.js` | Created `create_page_metadata()` |
| Root `metadataBase` | **PASS** | `app/layout.js` | Set to `https://softabytelabs.com` |
| Title template strategy | **PASS** | `app/layout.js` | Template `%s \| Softabyte Labs`; homepage uses absolute title |
| Homepage title | **PASS** | `config/homepage_content.js`, `app/page.js` | Matches frozen `keyword_map.md` |
| Homepage meta description | **PASS** | `config/homepage_content.js` | Matches frozen `keyword_map.md` |
| Homepage canonical | **PASS** | `lib/seo/metadata.js` | `https://softabytelabs.com/` |
| Homepage Open Graph | **PASS** | `create_page_metadata()` | title, description, url, siteName, locale, type |
| OG image | **MISSING** | — | Architecture ready; file not referenced until asset exists |
| Twitter/X cards | **NOT APPLICABLE YET** | — | Enabled only when OG image path provided |
| robots.txt | **PASS** | `app/robots.js` | Allows public crawl; disallows admin, api, design-preview |
| sitemap.xml | **PASS** | `app/sitemap.js` | Homepage + services + industries + about/process/contact (Phase 6) |
| design-preview noindex | **PASS** | `app/design-preview/layout.js` | `index: false, follow: false` |
| design-preview excluded from sitemap | **PASS** | `app/sitemap.js` | Not listed |
| Unfinished routes in sitemap | **PASS** | `lib/seo/structured_data.js` | Only indexable static routes helper |
| Organization JSON-LD | **PASS** | `lib/seo/structured_data.js`, `components/seo/JsonLd.js` | name + url only |
| WebSite JSON-LD | **PASS** | Same | name + url only; no SearchAction |
| Service/FAQ/Review schema | **NOT APPLICABLE YET** | — | Deferred per `technical_seo_requirements.md` |
| Homepage single H1 | **PASS** | `components/sections/home/HomeHero.js` | One H1 only |
| Homepage H1 vs keyword map | **ALIGNED** | `keyword_map.md` line 34 | No change required |
| Semantic HTML shell | **PASS** | `app/layout.js`, sections | header, nav, main, section, footer |
| Internal linking (header/footer/home) | **PASS** | `config/navigation.js`, homepage sections | Crawlable links with trailing slashes |
| Future nav URLs (404 today) | **NEEDS IMPROVEMENT** | Header/footer | Intentional architecture links; excluded from sitemap |
| Image SEO rules documented | **PASS** | Section 8 below | Documented |
| Reveal crawlability | **PASS** | `components/ui/Reveal.js`, `globals.css` | Content visible in SSR HTML; animation is progressive enhancement |
| next/font loading | **PASS** | `lib/fonts.js` | Montserrat + Poppins via `next/font/google` |
| Font weight optimization | **PASS** | `lib/fonts.js` | Removed unused Montserrat 800 |
| 404 page | **PASS** | `app/not-found.js` | Professional not-found with noindex |
| HTTP → HTTPS | **NOT APPLICABLE YET** | Deployment | Documented as hosting/platform responsibility |
| hreflang | **NOT APPLICABLE YET** | — | Single-language US site |
| PWA manifest | **NOT APPLICABLE YET** | — | Not required |
| Favicon / app icons | **MISSING** | — | Asset requirement documented |
| Production logo in schema | **MISSING** | — | Omitted until verified production logo URL |
| Blog backend / Article schema | **NOT APPLICABLE YET** | — | Foundation documented for future |
| Contact page | **NOT APPLICABLE YET** | — | Will be indexable when built |
| Core Web Vitals safeguards | **PASS** | Architecture review | Static homepage, minimal client JS |

---

## 2. Canonical policy

- **Production origin:** `https://softabytelabs.com`
- **Host:** Apex is canonical
- **www redirect:** `https://www.softabytelabs.com/*` → `https://softabytelabs.com/*` (permanent / 308)
- **Trailing slashes:** Required (`trailingSlash: true`)
- **Helper:** `create_canonical_url(path)` in `lib/seo/canonical.js`
- **Query parameters:** Stripped from canonical URLs

---

## 3. Metadata architecture

### Root defaults (`app/layout.js`)

- `metadataBase`
- Title default + template
- Default description
- Default robots: index, follow
- Open Graph site defaults

### Page metadata (`create_page_metadata()`)

- `title`, `description`, `path`, `title_absolute`, `robots`, `open_graph_type`, `open_graph_image`

### Title strategy

| Page type | Pattern |
|---|---|
| Homepage | Absolute full title from keyword_map |
| Future inner pages | Short title + template, OR absolute if keyword_map includes brand |

---

## 4. Robots policy

**File:** `app/robots.js`

- Allow: `/`
- Disallow: `/admin/`, `/api/`, `/design-preview/`
- Sitemap: `https://softabytelabs.com/sitemap.xml`

---

## 5. Sitemap policy

**Currently included:** `https://softabytelabs.com/`

**Extension point:** `get_blog_sitemap_entries()` for future published blog posts.

**lastModified:** Omitted until meaningful dates exist.

---

## 6. Structured data implemented

**Organization:** name, url  
**WebSite:** name, url  

No SearchAction, logo, sameAs, address, telephone, or ratings.

---

## 7. Image SEO rules

1. Descriptive filenames
2. Width/height or stable aspect ratio
3. `next/image` when assets exist
4. Responsive `sizes`
5. Meaningful alt when informative; empty when decorative
6. No alt keyword stuffing
7. Hero priority only when measured as LCP

---

## 8. Future requirements

See sections 11–13 in this document for blog, service, and industry page SEO requirements when those phases are built.

---

## 9. Deployment checks still required

- HTTPS enforcement (hosting)
- Production www redirect QA
- OG image, favicon, logo assets
- Search Console sitemap submission post-launch

---

## 10. SEO assets still required

| Asset | Path | Dimensions |
|---|---|---|
| Default OG image | `/public/images/seo/og-default.jpg` | 1200 × 630 |
| Production logo | `/public/images/brand/logo.svg` | — |
| Favicon | `/app/favicon.ico` | — |
| Apple touch icon | `/public/apple-touch-icon.png` | 180 × 180 |

Do not reference in metadata until files exist.

---

## 11. SEO conflicts

**None.** Navigation links to future 404 routes are intentional architecture links, separate from sitemap indexation.

---

## 12. Phase 4 — Services hub and service pages (August 20, 2026)

| Requirement | Status | Evidence |
|---|---|---|
| Services hub + 6 service routes | **PASS** | `app/services/**/page.js`, static build |
| Sitemap includes 8 indexable URLs | **PASS** | `get_indexable_static_routes()` in `lib/seo/structured_data.js` |
| Frozen keyword_map alignment | **PASS** | `config/services_content.js` — H1, title, description |
| One H1 per route | **PASS** | `ServiceHero.js` only |
| Canonical apex + trailing slash | **PASS** | `create_page_metadata()` per route |
| title_absolute on service pages | **PASS** | All service `page.js` files |
| No FAQ/BreadcrumbList/Service schema | **PASS** | Organization + WebSite only |
| design-preview noindex | **PASS** | Unchanged |
| Hub cannibalization guard | **PASS** | Hub uses overview/routing copy, not service H1s |
| Image placeholders (CSS, no files) | **PASS** | `ImagePlaceholder.js`, `services_visuals.js` |
| Code-managed content (no CMS) | **PASS** | `config/services_content.js` |
| Static prerender | **PASS** | All 7 service routes `○` static in build output |

---

## 13. Phase 5 — Industries hub and industry pages (August 20, 2026)

| Requirement | Status | Evidence |
|---|---|---|
| Industries hub + 6 industry routes | **PASS** | `app/industries/**/page.js` |
| Sitemap includes 15 indexable URLs | **PASS** | Homepage + 7 services + 7 industries |
| Frozen keyword_map alignment | **PASS** | `config/industries_content.js` |
| Industry vs service intent separation | **PASS** | Industry pages own vertical keywords; services own capability keywords |
| Healthcare compliance restraint | **PASS** | No HIPAA/SOC 2 certification claims |
| No FAQ/BreadcrumbList/Industry schema | **PASS** | Organization + WebSite only |
| Image placeholders (CSS, no files) | **PASS** | `config/industries_visuals.js` |
| Static prerender | **PASS** | All 7 industry routes static |

---

## 14. Phase 6 — About, Process, Contact + contact_submissions (August 20, 2026)

| Requirement | Status | Evidence |
|---|---|---|
| `/about/`, `/process/`, `/contact/` | **PASS** | App Router pages, static marketing shell |
| Sitemap includes 18 indexable URLs | **PASS** | Added about/process/contact |
| Frozen keyword_map H1/title/meta | **PASS** | `config/about_content.js`, `process_content.js`, `contact_content.js` |
| Contact POST API only | **PASS** | `app/api/contact/route.js` — no GET |
| MongoDB only for contact_submissions | **PASS** | Official `mongodb` driver |
| Honeypot + server validation | **PASS** | `lib/contact/validate.js` |
| No Admin / Blog / email / uploads | **PASS** | Scope restrained |
| Build without DB connection | **PASS** | DB connects only on POST request |

---

## 15. Phase 7 — Privacy, Terms, Contact security hardening (August 22, 2026)

| Requirement | Status | Evidence |
|---|---|---|
| `/privacy-policy/` | **PASS** | `app/privacy-policy/page.js`, `config/privacy_content.js` |
| `/terms/` | **PASS** | `app/terms/page.js`, `config/terms_content.js` |
| Legal pages static + metadata/canonical | **PASS** | `create_page_metadata()`, index follow |
| Sitemap includes 20 indexable URLs | **PASS** | Added privacy-policy + terms in `get_indexable_static_routes()` |
| Footer legal links resolve | **PASS** | Existing `/privacy-policy/`, `/terms/` |
| Contact privacy notice + Privacy Policy link | **PASS** | `ContactForm.js`, `contact_content.js` |
| Shared Upstash rate limiting | **PASS** | `@upstash/ratelimit` + `@upstash/redis`, `lib/contact/rate_limit.js` |
| No in-memory production limiter | **PASS** | Upstash Redis only |
| Origin validation | **PASS** | `lib/contact/origin.js` |
| Form timing heuristic | **PASS** | `lib/contact/timing.js` (1800ms min) |
| Honeypot preserved | **PASS** | Silent success discard |
| No CAPTCHA / Turnstile by default | **PASS** | Documented for future |
| No cookie banner / analytics | **PASS** | Matches current site behavior |
| No email notifications | **PASS** | DB persistence only |
| Contact schema unchanged | **PASS** | No IP / timing fields in MongoDB |
| Build without MongoDB/Redis | **PASS** | Runtime-only connections |
| Security docs | **PASS** | `docs/contact_security.md` |

### Sitemap URL count (Phase 7)

20 production URLs: home, services hub + 6, industries hub + 6, about, process, contact, privacy-policy, terms.

### Legal content notes

- Operational website drafts — counsel review recommended before final production reliance
- Governing law: no invented US state jurisdiction
- Temporary footer phone/location excluded from legal contact authority
- Privacy contact: `info@softabytelabs.com` + `/contact/`

---

## 16. Phase 9 — Blog frontend + SEO architecture (August 22, 2026)

| Requirement | Status | Evidence |
|---|---|---|
| `/blog/` hub | **PASS** | `app/blog/page.js`, `BlogHubView` |
| `/blog/[slug]/` static articles | **PASS** | `generateStaticParams`, local repository |
| 3 published informational articles | **PASS** | `lib/blog/posts/*` |
| Local repository (no MongoDB blog) | **PASS** | `lib/blog/repository.js` |
| Draft/published gating | **PASS** | published-only public accessors |
| BlogPosting + BreadcrumbList | **PASS** | `lib/seo/blog_structured_data.js` |
| Sitemap includes hub + 3 posts (24 URLs) | **PASS** | `app/sitemap.js` + static routes |
| Blog in header + mobile + footer Resources | **PASS** | `config/navigation.js` |
| Homepage Insights uses live posts | **PASS** | `HomeInsights.js` |
| No Work / Admin / CMS / Phase 8 | **PASS** | Scope restrained |
| Docs | **PASS** | `docs/blog_architecture.md` |

### Informational keyword ownership

Articles target decision-stage queries. Commercial ownership remains on service/industry pages. Internal links support money pages without H1/title cannibalization.

---

## 17. Phase 10 — Admin + Blog CMS + Contact submissions (August 22, 2026)

| Requirement | Status | Evidence |
|---|---|---|
| Admin auth (bcrypt + hashed sessions) | **PASS** | `lib/admin/*`, cookie HttpOnly |
| Admin noindex + robots disallow | **PASS** | layouts, middleware, `robots.js` |
| `blog_posts` MongoDB source | **PASS** | public repository + admin CMS |
| Existing 3 URLs/dates preserved via migration | **PASS** | `npm run migrate-blog` |
| Structured block editor | **PASS** | `BlogBlockEditor` |
| Published slug lock | **PASS** | validation + form |
| Contact submissions viewer/status | **PASS** | `/admin/contact-submissions/` |
| Phase 7 contact security unchanged | **PASS** | public `/api/contact/` untouched |
| Build without live MongoDB requirement | **PASS** | dynamic Blog routes; empty fallback |
| No Phase 8 / newsletter / analytics | **PASS** | scope restrained |
| Docs | **PASS** | `docs/admin_cms_architecture.md` |
