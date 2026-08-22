/**
 * Internal editorial SEO planning helpers.
 *
 * IMPORTANT: Everything in this file is for the authenticated Admin Blog
 * editor only. None of these values are ever rendered on a public page,
 * included in public metadata, or added to the public blog serializer in
 * `lib/blog/db.js`. See docs/admin_cms_architecture.md for the serialization
 * boundary this supports.
 */

export const SEARCH_INTENT_OPTIONS = [
  { value: "informational", label: "Informational" },
  { value: "commercial_investigation", label: "Commercial Investigation" },
  { value: "transactional", label: "Transactional" },
];

const SEARCH_INTENT_VALUES = new Set(
  SEARCH_INTENT_OPTIONS.map((item) => item.value)
);

export const CONTENT_CLUSTER_OPTIONS = [
  { value: "custom_software_development", label: "Custom Software Development" },
  { value: "ai_automation", label: "AI & Automation" },
  { value: "web_development", label: "Web Development" },
  { value: "mobile_app_development", label: "Mobile App Development" },
  { value: "ui_ux_design", label: "UI/UX Design" },
  { value: "hosting_infrastructure", label: "Hosting & Infrastructure" },
  { value: "transportation_logistics", label: "Transportation & Logistics" },
  { value: "professional_services", label: "Professional Services" },
  { value: "ecommerce_retail", label: "Ecommerce & Retail / B2B Commerce" },
  { value: "startups_saas", label: "Startups & SaaS" },
  { value: "real_estate", label: "Real Estate" },
  { value: "healthcare", label: "Healthcare" },
];

const CONTENT_CLUSTER_VALUES = new Set(
  CONTENT_CLUSTER_OPTIONS.map((item) => item.value)
);

export function is_valid_search_intent(value) {
  return SEARCH_INTENT_VALUES.has(String(value || ""));
}

export function is_valid_content_cluster(value) {
  return CONTENT_CLUSTER_VALUES.has(String(value || ""));
}

/**
 * Qualitative commercial-primary themes per live money page, used only to
 * surface a non-blocking editorial reminder in the Admin Blog editor. This
 * is intentionally small and manually curated from
 * docs/seo_keyword_ownership.md — it is not a ranking or search-volume
 * signal, and it never blocks draft/publish.
 */
export const COMMERCIAL_OWNER_THEMES = [
  {
    href: "/services/custom-software-development/",
    label: "Custom Software Development",
    themes: ["custom software development", "custom software"],
  },
  {
    href: "/services/web-development/",
    label: "Web Development",
    themes: ["web development company", "web development"],
  },
  {
    href: "/services/mobile-app-development/",
    label: "Mobile App Development",
    themes: ["mobile app development"],
  },
  {
    href: "/services/ai-automation/",
    label: "AI & Automation",
    themes: ["ai automation", "workflow automation for business"],
  },
  {
    href: "/services/ui-ux-design/",
    label: "UI/UX Design",
    themes: ["ui ux design", "ui/ux design"],
  },
  {
    href: "/services/hosting-infrastructure/",
    label: "Hosting & Infrastructure",
    themes: ["managed application hosting", "hosting infrastructure"],
  },
  {
    href: "/industries/ecommerce/",
    label: "Ecommerce & Retail",
    themes: ["ecommerce software development"],
  },
  {
    href: "/industries/healthcare/",
    label: "Healthcare",
    themes: ["healthcare software development"],
  },
  {
    href: "/industries/real-estate/",
    label: "Real Estate",
    themes: ["real estate software development"],
  },
  {
    href: "/industries/transportation-logistics/",
    label: "Transportation & Logistics",
    themes: ["logistics software development"],
  },
  {
    href: "/industries/professional-services/",
    label: "Professional Services",
    themes: ["software for professional services firms"],
  },
  {
    href: "/industries/startups-saas/",
    label: "Startups & SaaS",
    themes: ["saas development company"],
  },
];

export function normalize_keyword_theme(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

/**
 * Non-blocking check: does this primary keyword closely match a live
 * money-page's commercial primary theme? Returns the matching owner entries
 * (usually 0 or 1). Editorial-only — never blocks draft/publish.
 */
export function find_commercial_owner_overlap(primary_keyword) {
  const normalized = normalize_keyword_theme(primary_keyword);
  if (!normalized || normalized.length < 4) return [];

  return COMMERCIAL_OWNER_THEMES.filter((owner) =>
    owner.themes.some(
      (theme) => normalized.includes(theme) || theme.includes(normalized)
    )
  );
}
