# Conversion Strategy

**Project:** Softabyte Labs  
**Phase:** 0 — Planning only  
**Date:** August 19, 2026

SEO traffic must be able to become a conversation without a gauntlet of form fields.

---

## 1. Conversion principle

Primary action sitewide: **start a project conversation**.

Secondary actions: learn how we work, or go to a more specific service.

Do not use fake urgency, countdown timers, or “limited slots this week” unless that is operationally true.

---

## 2. CTA language

Preferred primary labels:

- Start a project
- Request a discovery call
- Tell us what you need

Avoid:

- Get a free quote instantly
- Book now 50% off
- Chat with our AI receptionist as the only path

---

## 3. Lead form strategy

**One short form** on `/contact/`, reusable as a page-level module later if needed.

Recommended fields:

| Field | Required |
|---|---|
| name | Yes |
| work_email | Yes |
| company | No |
| phone | No |
| project_type (service select) | No |
| message | Yes |

Optional later: budget range with honest bands, not fake precision.

**Do not** require:

- Employee count
- Full spec document
- NDA before first reply
- Captcha that blocks real users without a fallback

Spam protection: server-side validation later; honeypot acceptable; never store secrets in the client.

Future database: `contact_submissions` (see `dynamic_vs_static_architecture.md`). Admin reviews submissions. Marketing pages stay static.

---

## 4. Contact flow

1. User submits Contact (or emails a published address).
2. Confirmation on a simple thank-you state. If the thank-you is thin, `noindex` it.
3. Human reply during US business hours (set expectations in copy only if true).
4. Short discovery call.
5. Fit / not-fit decision. Not-fit should still be respectful.

Do not force chat widgets at launch.

---

## 5. Page-level conversion

### Homepage

| | |
|---|---|
| Primary CTA | Start a project → `/contact/` |
| Secondary | View services |
| Placement | Header button; hero; end of page |
| Notes | Proof only if real. Do not fake logos. |

### Service pages

| | |
|---|---|
| Primary | Request a discovery call |
| Secondary | See related service or Process |
| Placement | Header; after value prop; after process; final band |
| Notes | AI page secondary can be Custom Software. Hosting secondary can be Web. |

### Industry — Ecommerce

| | |
|---|---|
| Primary | Talk about your ecommerce stack |
| Secondary | Jump to the matching service section/link |
| Placement | Hero and final band |
| Notes | Do not send people to a non-existent ecommerce service URL. |

### Work / case studies

| | |
|---|---|
| Primary | Start a similar project |
| Secondary | All work / relevant service |
| Placement | End of case study |
| Notes | CTA must match what was actually delivered. |

### Blog listing

| | |
|---|---|
| Primary | Soft: explore services |
| Secondary | Contact |
| Placement | Header CTA is enough; optional mid-list is fine if quiet |

### Blog articles

| | |
|---|---|
| Primary | One contextual service or Contact |
| Secondary | Related article |
| Placement | After the useful content, not before the answer |
| Notes | One closing CTA. Do not interject CTAs every H2. |

### Contact

| | |
|---|---|
| Primary | Submit form |
| Secondary | Email/phone if published |
| Placement | The page is the CTA |
| Notes | Restate what happens next. |

### Process / About

| | |
|---|---|
| Primary | Start a project |
| Secondary | Services |
| Placement | End |

---

## 6. Navigation conversion

Header: Contact as a button (Electric Blue per brand rules, implemented later).  
Footer: Contact plus services.

---

## 7. What not to optimize for

- Maximizing form fills from unqualified students
- Ranking Contact for “cheap developers”
- Popups on first visit
- Gated PDFs as the only way to read useful content

---

## 8. Success definition (later)

When analytics exist, judge:

- Contact submits from service/industry landing pages
- Time to first reply (ops)
- Fit rate of leads

Do not set invented conversion-rate targets in Phase 0.
