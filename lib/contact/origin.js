import { site_url } from "@/lib/site";

/**
 * Allowed browser origins for contact form submissions.
 * Production: apex site_url only.
 * Development: also localhost / 127.0.0.1 for local testing.
 */
export function get_allowed_contact_origins() {
  const origins = [site_url];

  if (process.env.NODE_ENV !== "production") {
    origins.push(
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      "http://localhost:3001",
      "http://127.0.0.1:3001"
    );
  }

  return origins;
}

/**
 * Defense-in-depth origin check for browser-originated POSTs.
 * Not authentication — bots can omit or spoof headers when calling the API directly.
 *
 * Production: require Origin (or Referer host) to match the approved site origin.
 * Development: allow missing Origin for curl/local tooling convenience.
 */
export function validate_contact_origin(request) {
  const allowed = get_allowed_contact_origins();
  const origin = request.headers.get("origin");

  if (origin) {
    if (allowed.includes(origin)) {
      return { ok: true };
    }
    return { ok: false, reason: "origin_mismatch" };
  }

  const referer = request.headers.get("referer");
  if (referer) {
    try {
      const referer_origin = new URL(referer).origin;
      if (allowed.includes(referer_origin)) {
        return { ok: true };
      }
      return { ok: false, reason: "referer_mismatch" };
    } catch {
      return { ok: false, reason: "referer_invalid" };
    }
  }

  if (process.env.NODE_ENV !== "production") {
    return { ok: true, reason: "dev_missing_origin_allowed" };
  }

  return { ok: false, reason: "origin_missing" };
}
