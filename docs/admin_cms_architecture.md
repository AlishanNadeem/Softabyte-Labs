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

All Admin routes: `noindex, nofollow`, excluded from sitemap, disallowed in robots, `X-Robots-Tag` via middleware, no public nav links.

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
