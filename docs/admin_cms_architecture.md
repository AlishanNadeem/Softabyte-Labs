# Admin + Blog CMS Architecture — Phase 10

**Project:** Softabyte Labs  
**Date:** August 22, 2026

---

## Admin routes (internal)

| Route | Purpose |
|---|---|
| `/admin/login/` | Login |
| `/admin/` | Dashboard |
| `/admin/blog/` | Blog list |
| `/admin/blog/new/` | Create post |
| `/admin/blog/[id]/edit/` | Edit post |
| `/admin/blog/[id]/preview/` | Authenticated preview |
| `/admin/contact-submissions/` | Contact list |
| `/admin/contact-submissions/[id]/` | Contact detail |

All Admin routes: `noindex, nofollow`, excluded from sitemap, disallowed in robots, `X-Robots-Tag` via proxy, no public nav links.

---

## Authentication

- Collection: `admin_users` (unique normalized email, bcryptjs password_hash, role `admin`, `is_active`)
- Collection: `admin_sessions` (token_hash SHA-256 only, user_id, expires_at TTL)
- Cookie: `softabyte_admin_session` — HttpOnly, SameSite=Lax, Secure in production, 7-day expiry
- Fresh session on every successful login
- Logout deletes MongoDB session + clears cookie
- `require_admin()` on protected layouts and all mutations
- Middleware cookie presence gate (full validation server-side)
- Login rate limit: Upstash prefix `softabyte:admin-login`, 5 / 15 minutes (IP + email hash)

Create admin:

```bash
npm run create-admin
npm run create-admin -- --update
```

No public registration. No password-reset email flow.

---

## Blog CMS

- Collection: `blog_posts`
- Indexes: unique slug, status+published_at, featured+status, updated_at
- Public repository: `lib/blog/repository.js` (published only)
- Admin repository: `lib/blog/admin_repository.js`
- Structured blocks only (no heavy RTE, no unsafe HTML)
- Published slug locked after first publish
- `published_at` preserved on edit; `updated_at` refreshes
- Featured: at most one published featured post
- Migration: `npm run migrate-blog` (idempotent upsert by slug)

### SEO planning fields (Phase 11 — admin-only)

Five optional editorial fields support content governance without affecting public output:

| Field | Purpose |
|---|---|
| `primary_keyword` | Free-text planning theme, checked for exact-match conflicts against other posts |
| `search_intent` | One of `informational`, `commercial_investigation`, `transactional` (`lib/seo/content_planning.js`) |
| `content_cluster` | One of the 12 clusters in `docs/seo_content_clusters.md` |
| `target_service` | Optional link to a service nav href, for planning/reporting only |
| `target_industry` | Optional link to an industry nav href, for planning/reporting only |

**Serialization boundary (strict):**

- `lib/blog/db.js` → `serialize_blog_post()` is the single public/shared allowlist serializer. It never includes these 5 fields and never spreads the raw MongoDB document.
- `lib/blog/db.js` → `serialize_blog_admin_planning_fields()` returns only the 5 planning fields, with `null` defaults for existing posts that predate this feature.
- `lib/blog/admin_repository.js` → `admin_get_blog_post_by_id()` (used by the Admin edit page only) merges the two: `{ ...serialize_blog_post(doc), ...serialize_blog_admin_planning_fields(doc) }`. The admin list/dashboard reads still use `serialize_blog_post()` alone.
- The public repository (`lib/blog/repository.js`), sitemap, metadata helpers, and `BlogPosting` structured data never import or reference these fields.

**Non-blocking overlap warnings (editorial aid, never enforced):**

- `check_primary_keyword_conflict_action()` (`lib/admin/actions.js`, requires `require_admin()`) → `admin_find_primary_keyword_conflicts()` looks up other posts sharing the exact normalized `primary_keyword` and returns their title/slug/status.
- `find_commercial_owner_overlap()` (`lib/seo/content_planning.js`) runs client-side in `BlogPostForm` against a small curated list of live money-page themes and shows a reminder note if the typed keyword is close to an existing commercial primary.
- Neither check blocks draft save or publish, adds an SEO score, or writes `meta_keywords`.

### Public rendering

- `force-dynamic` Blog hub/article + sitemap (runtime MongoDB)
- Build does not require live MongoDB (empty published list if unavailable)
- `revalidatePath` after Admin mutations for `/`, `/blog/`, article path, sitemap

---

## Contact Admin

- Reads existing `contact_submissions`
- Statuses: `new`, `reviewed`, `contacted`, `closed`
- Admin can update status only (not inquiry fields)
- Optional delete with confirmation
- No public GET API; Phase 7 contact security unchanged

---

## Collections after Phase 10

1. `contact_submissions`
2. `blog_posts`
3. `admin_users`
4. `admin_sessions`

---

## Intentionally deferred

- Phase 8 Work/Portfolio
- Newsletter, analytics, live chat, CRM
- Media library / uploads
- Scheduled publishing
- Password reset email
- Complex RBAC
- Public category/tag pages
