# Dynamic vs Static Architecture

**Project:** Softabyte Labs  
**Phase:** 0 — Planning only  
**Date:** August 19, 2026  
**Status:** **FROZEN** — corrections applied; do not redesign without explicit approval.

MongoDB will exist later. That is **not** a reason to make the website fully dynamic.

Related project rule: marketing pages stay code-managed unless there is a strong operational reason.

---

## 1. Frozen decision summary

The website must **not** become a full CMS.

| Layer | Mode |
|---|---|
| Marketing pages, nav, footer, initial work | **Static / code-managed** (server-rendered from codebase) |
| Blog posts, categories, authors, drafts | **MongoDB** + **Admin Panel** |
| Contact submissions, admin users | **MongoDB** + **Admin Panel** |

**Do not use MDX as the production blog CMS.**

---

## 2. Static / code-managed (frozen)

These remain in the codebase and are deployed with the application:

- Homepage
- About
- Services hub
- Six service pages
- Industries hub
- Ecommerce industry page
- Process
- Contact page content (layout and copy)
- Privacy Policy
- Terms
- Navigation
- Footer
- Initial case studies / work

**Why:** SEO copy and IA should be reviewed in git; no Mongo on marketing routes; no accidental CMS drift; faster TTFB on money pages.

Work/case studies stay code-managed at launch. They may be added as static pages when real projects exist. They are **not** in the frozen database list.

---

## 3. Database / MongoDB (frozen)

These collections are required:

| Collection | Purpose |
|---|---|
| `admin_users` | Admin authentication and access control |
| `blog_posts` | Published and draft blog content, SEO fields, slugs |
| `blog_categories` | Blog grouping aligned to content clusters |
| `blog_authors` | Bylines and author metadata |
| `contact_submissions` | Inbound contact form data |

No other collections are approved in Phase 0.

---

## 4. Blog architecture (frozen)

| Concern | Decision |
|---|---|
| Blog posts | MongoDB (`blog_posts`) |
| Blog management | Admin Panel |
| Blog publishing | Admin Panel |
| Draft / published status | MongoDB (`status` field on `blog_posts`) |
| Production CMS | **MongoDB + Admin Panel — not MDX** |

Public blog routes server-render **published** posts from MongoDB. Drafts must never be publicly indexable.

The admin panel is required so non-developers can publish and manage SEO-optimized blog content (titles, metas, focus keywords, featured images, etc.) without editing the codebase.

Admin UI: dynamic app, `noindex`, not in sitemap, not in public navigation.

---

## 5. Separation table (reference)

| Feature / page | Mode | Why |
|---|---|---|
| Homepage | Static / SSR | Brand positioning; no editorial workflow |
| About | Static / SSR | Rarely changes; legal/trust alignment |
| Process | Static / SSR | Delivery narrative is a product decision |
| Services hub + six services | Static / SSR | Money pages; keyword map in git |
| Industries hub + industry pages | Static / SSR | Unique vertical copy per page |
| Navigation / footer | Static / SSR | IA stability |
| Contact page content | Static / SSR | Marketing layout and copy |
| Privacy Policy / Terms | Static / SSR | Legal; version in git |
| Work / case studies (initial) | Static / SSR | Real projects added as code when ready |
| Blog listing + posts | Database + Admin | Draft/publish workflow; ongoing SEO publishing |
| Blog categories / authors | Database + Admin | Editorial system |
| Contact form submissions | Database + Admin | Persist inbound leads |
| Admin users | Database + Admin | Authentication |

---

## 6. Why database features need a database

### `admin_users`

Need persisted credentials/roles. Cannot be static files in production.

### `blog_posts`

Need draft vs published, timestamps, slugs, SEO fields, and admin-managed publishing.

**Do not implement models in Phase 0.**

### `blog_categories`

Grouping posts without redeploying the site for every label. Keep categories few and service-aligned. Do not create thin SEO category archives — `noindex` or omit empty categories.

### `blog_authors`

Bylines and author pages if needed later.

### `contact_submissions`

Leads must be stored and reviewable in admin. Never expose raw submissions via a public API.

---

## 7. Blog field list (future — not implemented in Phase 0)

All fields and collections: `snake_case`.

`title`  
`slug`  
`excerpt`  
`content`  
`featured_image`  
`featured_image_alt`  
`author_id`  
`category_id`  
`tags`  
`seo_title`  
`seo_description`  
`focus_keyword`  
`secondary_keywords`  
`canonical_url`  
`status`  
`published_at`  
`created_at`  
`updated_at`

`status` must prevent drafts from being publicly indexable.

---

## 8. Naming conventions (frozen)

| Target | Convention |
|---|---|
| Database collections | `snake_case` |
| Database fields | `snake_case` |
| JavaScript variables | `snake_case` |
| Functions | **Not required** to use `snake_case`; camelCase is acceptable |
| React components | PascalCase |

---

## 9. Future admin scope (not built in Phase 0)

The admin panel will manage:

- Admin authentication
- Blog CRUD (create, edit, publish, unpublish)
- Blog categories and authors
- Draft/publish workflow
- SEO metadata and featured images for blog posts
- Contact submission inbox

The admin panel must **not** manage:

- Homepage
- About
- Services hub or service pages
- Industries hub or industry pages
- Process
- Contact page marketing copy
- Privacy Policy / Terms
- Navigation or footer IA

---

## 10. Rendering notes for later implementation

- App Router Server Components for marketing pages
- No Mongo queries on static marketing routes
- Blog pages: server-render published posts from MongoDB; ISR/revalidation is appropriate later
- Client Components only where interaction is required (contact form enhancement, admin UI)

---

## 11. Anti-patterns

- MDX or markdown files as the production blog CMS
- Putting service page body copy in MongoDB “for flexibility”
- Generating industry pages from a database of names
- Client-side fetching of marketing content
- Public API that returns all blog drafts
- Turning the admin panel into a full-site CMS
