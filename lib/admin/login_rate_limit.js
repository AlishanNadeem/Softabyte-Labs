import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { createHash } from "crypto";

/**
 * Admin login rate limiting — separate Upstash prefix from contact limiter.
 * Policy: 5 attempts / 15 minutes per IP (and optional email hash).
 * Fail-open if Redis unavailable (with safe log).
 */

const LOGIN_LIMIT = 5;
const LOGIN_WINDOW = "15 m";

function is_upstash_configured() {
  return Boolean(
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  );
}

let ratelimit_instance = null;

function get_ratelimit() {
  if (!is_upstash_configured()) return null;
  if (!ratelimit_instance) {
    ratelimit_instance = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(LOGIN_LIMIT, LOGIN_WINDOW),
      prefix: "softabyte:admin-login",
      analytics: false,
    });
  }
  return ratelimit_instance;
}

export function get_admin_login_ip_identifier(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return `ip:${first}`;
  }
  const real_ip = request.headers.get("x-real-ip")?.trim();
  if (real_ip) return `ip:${real_ip}`;
  return "ip:unknown";
}

export function hash_login_email_identifier(email) {
  const normalized = String(email || "")
    .trim()
    .toLowerCase();
  if (!normalized) return null;
  return `email:${createHash("sha256").update(normalized).digest("hex").slice(0, 32)}`;
}

export async function enforce_admin_login_rate_limit(request, email) {
  const limiter = get_ratelimit();
  if (!limiter) {
    if (process.env.NODE_ENV === "production") {
      console.error(
        "[admin-login] Upstash Redis is not configured; login rate limiting skipped."
      );
    }
    return { allowed: true, limited: false, skipped: true };
  }

  try {
    const identifiers = [get_admin_login_ip_identifier(request)];
    const email_id = hash_login_email_identifier(email);
    if (email_id) identifiers.push(email_id);

    for (const identifier of identifiers) {
      const result = await limiter.limit(identifier);
      if (!result.success) {
        let retry_after_seconds = null;
        if (result.reset) {
          retry_after_seconds = Math.max(
            1,
            Math.ceil((result.reset - Date.now()) / 1000)
          );
        }
        return {
          allowed: false,
          limited: true,
          skipped: false,
          retry_after_seconds,
        };
      }
    }

    return { allowed: true, limited: false, skipped: false };
  } catch (error) {
    console.error(
      "[admin-login] rate limit service unavailable:",
      error?.name || "Error"
    );
    return { allowed: true, limited: false, skipped: true };
  }
}
