# Blog Architecture

**Updated:** Phase 10 — August 22, 2026

---

## Public routes

| Route | Purpose |
|---|---|
| `/blog/` | Insights hub |
| `/blog/[slug]/` | Published articles |

---

## Content source

| Phase | Source |
|---|---|
| Phase 9 | Local JavaScript (`lib/blog/posts/*`) |
| Phase 10 | MongoDB `blog_posts` (production) |

Phase 9 local files remain as migration seed / reference only.

Public UI still consumes repository helpers:

- `get_published_blog_posts()`
- `get_blog_post_by_slug()`
- `get_featured_blog_post()`
- `get_related_blog_posts()`
- `get_latest_blog_posts()`

Admin uses `lib/blog/admin_repository.js`.

---

## Migration

```bash
npm run migrate-blog
```

Idempotent upsert by `slug`. Preserves titles, content, SEO fields, related links, featured flag, and `published_at` (`2026-08-22` for initial articles).

---

## Draft / published

- Public surfaces: **published only**
- Drafts: Admin list/edit/preview only — no sitemap, no BlogPosting, no hub/homepage

Published slug editing is locked.

---

## Caching / revalidation

Public Blog pages are runtime-dynamic (`force-dynamic`) so `npm run build` does not require MongoDB.

Admin mutations call `revalidatePath` for:

- `/`
- `/blog/`
- `/blog/{slug}/`
- `/sitemap.xml`

---

## Content blocks

Unchanged from Phase 9:

paragraph, rich_paragraph, heading (h2/h3), unordered_list, ordered_list, callout

Admin block editor writes the same structure.

---

## SEO ownership

Blog = informational intent.  
Services / Industries retain commercial ownership.

---

## Phase 8

Work / Portfolio remains deferred.

See also: `docs/admin_cms_architecture.md`
