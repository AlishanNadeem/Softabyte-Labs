# SEO Content Publishing Workflow

**Project:** Softabyte Labs
**Phase:** 11 — SEO Content System + Content Growth Architecture
**Date:** August 22, 2026

This document defines the repeatable process for turning a backlog topic into a published article through the existing Admin Blog CMS (Phase 10). It introduces **no automation, scheduling, or new systems** — every step is a manual editorial decision.

---

## 1. Workflow stages

```
Backlog topic (seo_content_backlog.md)
        │
        ▼
Brief (seo_content_brief_template.md) — keyword-ownership + cannibalization + claims checks
        │
        ▼
Admin draft created (/admin/blog/new/) — status: draft
        │
        ▼
Content written in structured blocks (BlogBlockEditor)
        │
        ▼
Internal editorial review (checklist in §3)
        │
        ▼
Publish validation (existing lib/blog/validation.js publish rules)
        │
        ▼
Published (/blog/[slug]/) — sitemap + Blog Hub + Homepage Insights update on next request
        │
        ▼
Post-publish internal linking pass (§5)
        │
        ▼
Periodic review (§6)
```

## 2. Pre-draft gate

Before creating an Admin draft:

1. The topic must exist in `seo_content_backlog.md`.
2. A completed brief must exist per `seo_content_brief_template.md`, including the keyword-ownership check and the factual/claims review.
3. Any `RESEARCH REQUIRED` item must be resolved (verified or removed) before writing begins — not after.

## 3. Drafting and internal editorial review

While writing in the Admin block editor:

- Keep the article title as the only H1; use `heading_level: h2` / `h3` for in-article structure.
- Use `rich_paragraph` blocks for any sentence that should carry an internal link — do not add raw HTML.
- Add related services/industries in the Admin form using the centralized service/industry configuration only (no free-typed paths).
- Before requesting review, self-check against the brief's guardrails checklist (§8 of the brief template).

Reviewer checklist (a second person, or the same author after a break, reviewing with fresh eyes):

- [ ] Matches the approved brief's angle and differentiation
- [ ] No claim without a `VERIFIED` source in the brief
- [ ] No keyword overlap with a live money page's primary (re-check against `seo_keyword_ownership.md` if the angle shifted during writing)
- [ ] Meta title/description present and accurate (character-count guidance, not hard limits)
- [ ] Excerpt reads well on the Blog hub card
- [ ] Related services/industries selected are genuinely relevant, not added by default
- [ ] Hero image alt text present if a hero image is set

## 4. Publish validation (existing system — unchanged in Phase 11)

Publishing continues to enforce the Phase 10 rules in `lib/blog/validation.js` and `lib/blog/admin_repository.js`:

- Title, valid/unique slug, excerpt, meta title, meta description, non-empty category, at least one content block, and author are required.
- Once first published, the slug is locked — never edit a published slug.
- `published_at` is set once, on first publish, and never reset by later edits.
- `updated_at` changes on every meaningful edit; `published_at` does not.
- Revalidation (`revalidatePath`/tags) refreshes `/blog/`, `/blog/[slug]/`, homepage Insights, and the sitemap automatically — no manual cache-busting step is needed.

## 5. Post-publish internal linking pass

After publishing:

1. Confirm the article appears correctly on `/blog/` and, if featured, on the homepage Insights section.
2. If the brief identified a supporting service/industry page that should link to this article (via `RelatedInsights`), add that link only if the page's existing `RelatedInsights` config has room and the link is genuinely relevant (see `internal_linking_strategy.md` §11). Do not add a link just because an article exists.
3. Do not retroactively edit unrelated published articles' bodies to insert links — `RelatedInsights` sections are the intended mechanism, not ad hoc body edits.

## 6. Periodic content review (no automation)

- Review published articles for continued accuracy **every 6-12 months**, or immediately after any event that could make a claim stale (e.g., a named tool/service changing behavior, a referenced internal page moving or being redesigned).
- A "meaningful update" (one that justifies changing `updated_at` and, per Phase 9/10 logic, showing an "Updated" date publicly) means a substantive content or accuracy change — not a typo fix or a metadata tweak.
- If an article's angle becomes obsolete or duplicated by a newer, better article, prefer editing/consolidating over publishing a near-duplicate. Do not unpublish an indexed article without considering the loss of any accrued authority; when in doubt, update rather than remove.

## 7. Roles (small team — no complex permissions)

Per Phase 10, all Admin accounts share `role: "admin"`. This workflow assigns responsibilities by convention, not by system-enforced roles:

- **Drafter:** completes the brief, writes the article.
- **Reviewer:** checks against the brief and this workflow before publish. Can be a second team member, or the same person doing a deliberate second pass.

## 8. What this workflow explicitly does not add

- No scheduled/automatic publishing.
- No AI-generated drafting pipeline.
- No SEO scoring gimmick in the Admin UI.
- No new roles/permissions system.
- No email notifications.
- No public-facing changes to how articles are authored or displayed.
