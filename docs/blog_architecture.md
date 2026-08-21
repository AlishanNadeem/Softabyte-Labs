# Blog Architecture — Phase 9

**Project:** Softabyte Labs  
**Date:** August 22, 2026  
**Status:** Frontend + SEO architecture (local content source)

---

## Public routes

| Route | Purpose |
|---|---|
| `/blog/` | Insights hub |
| `/blog/[slug]/` | Published article pages |

Trailing-slash + apex canonical policy applies.

Phase 8 `/work/` remains **deferred** and is not built.

---

## Content source (Phase 9)

Local JavaScript only:

- `lib/blog/posts.js` — registry
- `lib/blog/posts/*.js` — article documents
- `lib/blog/repository.js` — public accessors
- `lib/blog/helpers.js` — reading time, dates, TOC helpers

No MongoDB blog collection.  
No CMS.  
No Admin.  
No blog API.

---

## Repository API

UI consumes:

- `get_published_blog_posts()`
- `get_blog_post_by_slug(slug)`
- `get_featured_blog_post()`
- `get_related_blog_posts(post, limit)`
- `get_latest_blog_posts(limit)`
- `get_published_blog_slugs()`

Phase 10 can replace repository internals with MongoDB without redesigning Blog UI.

---

## Post fields (snake_case)

`slug`, `status`, `featured`, `title`, `meta_title`, `meta_description`, `excerpt`, `category`, `tags`, `published_at`, `updated_at`, `author_name`, `hero_image`, `hero_image_alt`, `hero_placeholder`, `content`, `related_services`, `related_industries`, `related_slugs`

### Status

- `published` → public hub, static params, sitemap, schema
- `draft` → excluded from all public surfaces; unknown/draft slug → `notFound()`

---

## Content blocks

Rendered by `BlogArticleContent`:

- `paragraph`
- `rich_paragraph` (text + internal links)
- `heading` (level 2/3 + `id`)
- `unordered_list`
- `ordered_list`
- `callout`

No `dangerouslySetInnerHTML` for article bodies.

---

## SEO ownership

| Surface | Intent |
|---|---|
| Service pages | Commercial service queries |
| Industry pages | Commercial vertical queries |
| Blog articles | Informational / decision-stage queries |

Articles must support money pages via contextual internal links — not replace them.

---

## Structured data

- Hub: `CollectionPage` + `BreadcrumbList`
- Article: `BlogPosting` (Organization author/publisher) + `BreadcrumbList`
- No fake images in schema when assets are placeholders only
- No FAQ schema on initial articles

---

## Sitemap

Includes:

- `/blog/`
- each published article

Excludes drafts, categories, tags, RSS (if added later), admin.

---

## Categories / tags

- Categories are labels only in Phase 9
- No `/blog/category/...` routes
- Tags exist for relatedness; no public tag pages

---

## Intentionally not built

- Search
- Pagination UI
- Newsletter
- Comments
- RSS (deferred for simplicity)
- Fake popularity metrics
- Rich text editor packages

---

## Future image paths (assets not shipped yet)

- `/public/images/blog/custom-software-vs-off-the-shelf.webp`
- `/public/images/blog/client-portal.webp`
- `/public/images/blog/business-process-automation.webp`

Current UI uses professional placeholders.

---

## Phase 10 migration notes (document only)

Possible future `blog_posts` MongoDB mapping mirrors Phase 9 fields (`snake_case`).

Phase 10 may add:

- Admin authentication
- Create/edit/publish workflow
- Contact submissions viewer
- Optional preview for drafts

Do **not** implement Phase 10 in this phase.
