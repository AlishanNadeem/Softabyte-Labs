/**
 * Lightweight form-completion timing heuristic.
 * Secondary bot signal only — not authentication.
 * Bots can fake timestamps; primary protections remain rate limit, honeypot, validation.
 */

/** Minimum elapsed ms between form mount and submit (server clock). */
export const CONTACT_MIN_FORM_MS = 1800;

/** Reject timestamps older than this (ms). */
export const CONTACT_MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;

/** Allow small client/server clock skew into the future (ms). */
export const CONTACT_FUTURE_SKEW_MS = 60_000;

/**
 * @returns {{ ok: true } | { ok: false, spam: true, reason: string }}
 */
export function evaluate_form_timing(form_started_at, now = Date.now()) {
  if (
    form_started_at === undefined ||
    form_started_at === null ||
    form_started_at === ""
  ) {
    return { ok: false, spam: true, reason: "timing_missing" };
  }

  const started =
    typeof form_started_at === "number"
      ? form_started_at
      : Number(form_started_at);

  if (!Number.isFinite(started) || started <= 0) {
    return { ok: false, spam: true, reason: "timing_malformed" };
  }

  if (started > now + CONTACT_FUTURE_SKEW_MS) {
    return { ok: false, spam: true, reason: "timing_future" };
  }

  const elapsed = now - started;

  if (elapsed > CONTACT_MAX_FORM_AGE_MS) {
    return { ok: false, spam: true, reason: "timing_too_old" };
  }

  if (elapsed < CONTACT_MIN_FORM_MS) {
    return { ok: false, spam: true, reason: "timing_too_fast" };
  }

  return { ok: true };
}
