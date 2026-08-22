# SEO Content Brief Template

**Project:** Softabyte Labs
**Phase:** 11 — SEO Content System + Content Growth Architecture
**Date:** August 22, 2026

Copy this template for every backlog topic before drafting. A completed brief is required before an article moves from `seo_content_backlog.md` into an actual Admin draft. Store completed briefs wherever the team keeps working documents (this repository does not require briefs to be committed).

---

## Brief: [Working Title]

### 1. Identity
- **Backlog #:** (reference `seo_content_backlog.md`)
- **Priority:** P1 / P2 / P3
- **Content cluster:** (one of the 12 clusters in `seo_content_clusters.md`)
- **Target URL slug:** `/blog/[slug]/` (must pass `is_valid_blog_slug` — lowercase, hyphenated, no duplicates)

### 2. Search intent and audience
- **Primary search intent:** Informational / Commercial Investigation / Transactional
- **Target reader:** (role, e.g., "Operations leader at a mid-size logistics company")
- **Reader's question this article answers:** (one sentence — if this cannot be stated plainly, the topic is not ready)

### 3. Keyword ownership check (required — do not skip)
- **Primary keyword/theme:** (qualitative theme, not a search-volume claim)
- **Secondary themes:** (2-4)
- Confirm against `seo_keyword_ownership.md`: does any live money page already own this primary theme? **Yes/No**
- Confirm against `seo_cannibalization_audit.md`: does any existing or planned article overlap this angle? **Yes/No** — if yes, state the differentiation in one sentence.
- If either check fails, stop and revise the angle before continuing.

### 4. Commercial support
- **Supports which service page(s):** (0-2, from `config/services_content.js` slugs)
- **Supports which industry page(s):** (0-1, from `config/industries_content.js` slugs)
- **Why a reader of this article would plausibly need that service/industry:** (one sentence)

### 5. Structure plan
- **Working H1:**
- **H2/H3 outline:** (list — remember only H2/H3 inside content; H1 is the article title only)
- **Estimated block count:** (rough number of paragraph/heading/list/callout blocks)
- **Planned internal links out:**
  - Primary supporting service/industry page (required)
  - Process page (only if genuinely relevant)
  - 1-2 related articles (if they exist)
- **Planned inbound link source(s):** which existing page(s) should link *to* this article once published (e.g., a specific service or industry page's `RelatedInsights` list)

### 6. Factual/claims review (required — do not skip)
List every factual, statistical, regulatory, pricing, or compliance-adjacent claim the draft will need. For each:
- Claim:
- Verification status: `VERIFIED (source)` / `RESEARCH REQUIRED` / `REMOVED — cannot verify`

An article may not move to publish-ready with any `RESEARCH REQUIRED` line remaining. Per project rules: no fabricated statistics, no fake case studies, no unverifiable claims, no invented certifications or compliance guarantees.

### 7. SEO metadata draft
- **Meta title (draft, ~50-60 chars guidance, not a hard limit):**
- **Meta description (draft, ~140-160 chars guidance, not a hard limit):**
- **Excerpt (1-2 sentences, used in Blog hub/cards):**
- **Category:** (existing category string — see `lib/blog/constants.js` or current categories in use)
- **Tags:** (comma-separated, normalized on save)
- **Hero image plan:** existing placeholder acceptable, or specify filename/directory/dimensions per the visual-assets reporting format in project rules.
- **Hero image alt text (draft):**

### 8. Editorial guardrails checklist
- [ ] No fake clients, testimonials, awards, or certifications
- [ ] No invented statistics or percentages
- [ ] No claims about US-based team/delivery unless separately verified and approved
- [ ] No content that reads as a doorway/duplicate page
- [ ] Healthcare-cluster topics only: explicit "what we are not claiming" note included
- [ ] Internal links use real, existing routes only
- [ ] Article does not restate any money-page primary keyword as its own H1

### 9. Sign-off
- **Drafted by:**
- **Reviewed by:**
- **Approved for Admin draft creation:** Yes/No, date
