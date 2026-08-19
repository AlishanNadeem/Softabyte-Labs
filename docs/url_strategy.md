# URL Strategy

**Project:** Softabyte Labs  
**Phase:** 0 — Planning only  
**Date:** August 19, 2026

This is the permanent public URL policy. Changing public URLs later is an SEO and trust cost. Get them right once.

Related documents: `website_architecture.md`, `technical_seo_requirements.md`

---

## 1. URL principles

URLs must be:

- Lowercase
- Short
- Descriptive
- Human-readable
- Stable
- Logical
- Free of IDs, dates, and tracking parameters as the canonical form

Preferred patterns:

```txt
/services/service-name/
/industries/industry-name/
/blog/article-name/
/work/project-name/
```

---

## 2. Trailing slash policy

**Use trailing slashes on all directory-style routes.**

Examples:

- `https://www.example.com/services/web-development/`
- `https://www.example.com/blog/`

**Canonical form includes the trailing slash.**

The application must 301 the non-slash version to the slash version (or the reverse, but pick slash and keep it). Recommended: **slash is canonical**, matching this documentation.

Do not serve both `/services/` and `/services` as 200s.

---

## 3. Lowercase policy

All public slugs are lowercase.

`/Services/Web-Development/` must 301 to `/services/web-development/`.

---

## 4. Slug rules

- Use kebab-case: `custom-software-development`
- Use US English spelling
- No stop-word stuffing (`the`, `best`, `top` in slugs)
- No keyword repetition (`/services/web-development-web-development/`)
- No file extensions in content URLs
- Maximum practical depth: one folder for type + one slug
- Do not nest `/services/web/ecommerce/shopify/` 

### Approved service slugs

| Service | Slug |
|---|---|
| Custom Software Development | `custom-software-development` |
| Web Development | `web-development` |
| Mobile App Development | `mobile-app-development` |
| AI & Automation | `ai-automation` |
| UI/UX Design | `ui-ux-design` |
| Hosting & Infrastructure | `hosting-infrastructure` |

### Approved industry slugs (Phase 3.2)

| Industry | Slug | URL |
|---|---|---|
| Ecommerce & Retail | `ecommerce` | `/industries/ecommerce/` |
| Healthcare | `healthcare` | `/industries/healthcare/` |
| Real Estate | `real-estate` | `/industries/real-estate/` |
| Transportation & Logistics | `transportation-logistics` | `/industries/transportation-logistics/` |
| Professional Services | `professional-services` | `/industries/professional-services/` |
| Startups & SaaS | `startups-saas` | `/industries/startups-saas/` |

Use `ecommerce`, not `e-commerce` or `ecom`. The slug `ecommerce` is retained for SEO continuity; display name is **Ecommerce & Retail**.

**Do not publish** industry pages until each meets uniqueness requirements in `industry_strategy.md`.

---

## 5. Blog and work slugs

- Blog: `/blog/custom-software-vs-off-the-shelf/`
- Work: `/work/project-short-name/`
- No `/blog/2026/08/article/`
- No `/blog?id=12`
- No auto-ID suffixes unless a collision cannot be resolved another way

If two articles would share a slug, make the newer slug more specific. Do not add random hashes.

---

## 6. Query parameters

Query parameters may be used for:

- Temporary campaign tracking (`utm_*`)
- Pagination on blog listing if needed later

They must **not** create indexable duplicate URLs.

Rules:

- Canonical tags point to the clean URL
- Internal links never include UTM parameters
- Search/filter parameters on future listings should be `noindex` or canonicalized to the main listing

---

## 7. Redirect rules

| Situation | Response |
|---|---|
| Non-www vs www | Choose one host and 301 the other. **Recommendation: www or apex — decide at domain setup. Approval needed.** |
| HTTP | 301 to HTTPS |
| Missing trailing slash | 301 to slash version |
| Wrong case | 301 to lowercase |
| Retired page with a successor | 301 to the closest equivalent |
| Retired page with no successor | 410 or 404; prefer a helpful 404, 410 if intentionally gone |
| Service renamed | 301 old slug to new slug; update internal links the same day |
| Duplicate ecommerce URLs if ever created by mistake | 301 to `/industries/ecommerce/` |

Never chain redirects. Never 302 a permanent move.

---

## 8. Slug-change handling

1. Treat slug changes as exceptional.
2. If a published blog slug must change, 301 the old slug indefinitely.
3. Update canonical, sitemap, and internal links.
4. Do not leave the old URL as 200.

Admin (future) should discourage slug edits after `status = published`.

---

## 9. 404 strategy

- Custom 404, indexable sitewide resources still load (CSS/JS not blocked)
- Offer links to Services, Industries, Blog, Contact
- Do not auto-redirect all unknown URLs to homepage (that hides mistakes and creates soft-404s)
- Log 404s after launch for cleanup

---

## 10. Canonical strategy

- Every indexable page has an absolute canonical to itself
- HTTPS + chosen host + lowercase + trailing slash
- Blog drafts: not publicly reachable, or `noindex` if preview URLs exist
- Paginated blog (if added): canonical to self or to page 1 per later technical decision; **do not implement now**. Recommendation if added: page 1 is canonical for duplicate intros; subsequent pages canonical to self if unique listings.

---

## 11. Forbidden URL patterns

- `/page?id=123`
- `/blog/2026/08/article-name/`
- `/services/ecommerce-development/`
- `/industries/ecommerce-solutions/`
- `/ai/ai/ai-chatbot-ai-assistant/`
- Location doorway URLs without a real office and unique local content
- Uppercase, spaces, underscores in public slugs

---

## 12. Host and HTTPS

To be set at go-live (not Phase 0 implementation):

- Force HTTPS
- Single canonical hostname
- HSTS considered at production hardening

**Approval needed:** production hostname (`www.softabytelabs.com` vs apex) when the domain is finalized.
