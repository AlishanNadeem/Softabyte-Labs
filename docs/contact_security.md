# Contact Security Architecture — Phase 7

**Project:** Softabyte Labs  
**Date:** August 22, 2026  
**Scope:** `POST /api/contact/` abuse protection

---

## Endpoint

- Public contact submission only
- No GET / read API
- Persists allowlisted fields to MongoDB `contact_submissions`

---

## Request flow

1. Content-Type must include `application/json`
2. Content-Length ≤ 32KB
3. Origin / Referer site check
4. Shared Upstash rate limit
5. Parse JSON body
6. Honeypot (`website_url`)
7. Form timing heuristic (`form_started_at`)
8. Field validation + sanitization
9. MongoDB insert
10. Safe JSON response (`Cache-Control: no-store`)

---

## Rate limiting

| Item | Value |
|---|---|
| Provider | Upstash Redis |
| Packages | `@upstash/ratelimit`, `@upstash/redis` |
| Env vars | `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` |
| Policy | 5 requests / 10 minutes / IP-derived identifier |
| Algorithm | Sliding window |
| Identifier | `ip:` + first `X-Forwarded-For` hop, else `X-Real-IP`, else `unknown` |
| IP storage | Transient for rate limit only — **not** stored in MongoDB |
| 429 body | `{ success: false, message: "Too many requests. Please try again later." }` |
| Retry-After | Set when Upstash returns a reset timestamp |
| Failure mode | **Fail-open**: log safe diagnostic; continue with honeypot/timing/validation/origin |
| Local without Upstash | Rate limiting skipped (not production protection) |
| Production | Upstash credentials **must** be configured |

### IP header assumption

When deployed behind a trusted platform proxy (e.g. Vercel), `X-Forwarded-For` is set by the platform. Softabyte Labs does not treat client-supplied headers as authenticated identity.

---

## Origin validation

- Allowed production origin: `https://softabytelabs.com` (`site_url`)
- Development also allows `localhost` / `127.0.0.1` on ports 3000–3001
- Production requires matching `Origin` or `Referer` origin
- Defense-in-depth only — not CSRF session auth and not authentication
- CSRF decision: anonymous public form; origin check + rate limit + honeypot + validation are sufficient without session CSRF tokens

---

## Timing heuristic

- Client sets `form_started_at = Date.now()` when the interactive form mounts
- Server minimum: **1800 ms**
- Rejects malformed, future (beyond 60s skew), too-old (>24h), or too-fast values
- Failures return **silent success** (same pattern as honeypot) — do not reveal rules

---

## Honeypot

- Field: `website_url`
- Filled → silent success, no MongoDB insert

---

## Turnstile / CAPTCHA

- **Not enabled** in Phase 7
- Architecture leaves room to add Cloudflare Turnstile later without redesigning the form contract
- No reCAPTCHA / hCaptcha

---

## Cookie banner / analytics

- No cookie consent banner (no non-essential analytics cookies currently)
- No Google Analytics / Meta Pixel / Hotjar / Clarity
- Privacy Policy must be updated if those are added later

---

## Email notifications

- Still DB persistence only — no Resend / SendGrid / SMTP

---

## Legal pages (related)

- `/privacy-policy/` and `/terms/` are static indexable pages
- Legal drafts should be reviewed by counsel before final production reliance
- Temporary footer phone/location must **not** be treated as authoritative legal contact data
