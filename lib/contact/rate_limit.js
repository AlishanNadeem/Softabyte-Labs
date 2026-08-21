import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * Shared contact-form rate limiting via Upstash Redis.
 *
 * Policy: 5 submissions / 10 minutes per IP-derived identifier.
 *
 * IP assumption: when deployed behind a trusted reverse proxy / platform
 * (e.g. Vercel), the leftmost X-Forwarded-For hop is the client IP.
 * Do not treat raw headers as authenticated identity.
 *
 * Failure mode: fail-open (allow request) if Redis is misconfigured or errors,
 * after logging a safe diagnostic. Existing honeypot, timing, validation, and
 * origin checks remain. Production MUST set Upstash credentials.
 */

export const CONTACT_RATE_LIMIT_MAX = 5;
export const CONTACT_RATE_LIMIT_WINDOW = "10 m";

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
      limiter: Ratelimit.slidingWindow(
        CONTACT_RATE_LIMIT_MAX,
        CONTACT_RATE_LIMIT_WINDOW
      ),
      prefix: "softabyte:contact",
      analytics: false,
    });
  }

  return ratelimit_instance;
}

/**
 * Derive a rate-limit identifier from request headers.
 * Does NOT persist the IP to MongoDB.
 */
export function get_contact_rate_limit_identifier(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return `ip:${first}`;
  }

  const real_ip = request.headers.get("x-real-ip")?.trim();
  if (real_ip) return `ip:${real_ip}`;

  return "ip:unknown";
}

/**
 * @returns {Promise<{
 *   allowed: boolean,
 *   limited: boolean,
 *   skipped: boolean,
 *   retry_after_seconds: number | null,
 * }>}
 */
export async function enforce_contact_rate_limit(request) {
  const limiter = get_ratelimit();

  if (!limiter) {
    if (process.env.NODE_ENV === "production") {
      console.error(
        "[contact] Upstash Redis is not configured; shared rate limiting skipped."
      );
    }
    return {
      allowed: true,
      limited: false,
      skipped: true,
      retry_after_seconds: null,
    };
  }

  try {
    const identifier = get_contact_rate_limit_identifier(request);
    const result = await limiter.limit(identifier);

    if (result.success) {
      return {
        allowed: true,
        limited: false,
        skipped: false,
        retry_after_seconds: null,
      };
    }

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
  } catch (error) {
    console.error(
      "[contact] rate limit service unavailable:",
      error?.name || "Error"
    );
    return {
      allowed: true,
      limited: false,
      skipped: true,
      retry_after_seconds: null,
    };
  }
}
