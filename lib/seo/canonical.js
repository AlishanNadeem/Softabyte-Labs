import { site_url } from "@/lib/site";

/**
 * Build an absolute apex canonical URL with trailing-slash policy.
 * Strips query strings and hash fragments.
 */
export function create_canonical_url(path = "/") {
  if (!path || path === "/") {
    return `${site_url}/`;
  }

  let normalized = String(path).trim();

  if (!normalized.startsWith("/")) {
    normalized = `/${normalized}`;
  }

  normalized = normalized.split("?")[0].split("#")[0];
  normalized = normalized.replace(/\/{2,}/g, "/");

  if (!normalized.endsWith("/")) {
    normalized = `${normalized}/`;
  }

  return `${site_url}${normalized}`;
}
