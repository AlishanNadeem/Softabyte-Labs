/**
 * Background blur asset paths and per-page lighting placements.
 * Assets (manual): /public/images/decorations/blur-primary.svg
 *                   /public/images/decorations/blur-secondary.svg
 */

export const blur_asset_paths = {
  primary: "/images/decorations/blur-primary.svg",
  secondary: "/images/decorations/blur-secondary.svg",
};

/** Default hero lighting when no page-specific map exists */
export const blur_preset_primary = [
  {
    variant: "primary",
    position: "right-center",
    size: "xl",
    opacity: 0.42,
    mobile: "reduce",
  },
];

export const service_hero_blurs = {
  "custom-software-development": [
    {
      variant: "primary",
      position: "right-center",
      size: "xl",
      opacity: 0.4,
      mobile: "reduce",
    },
    {
      variant: "secondary",
      position: "bottom-right",
      size: "sm",
      opacity: 0.14,
      mobile: "hide",
    },
  ],
  "web-development": [
    {
      variant: "primary",
      position: "top-right",
      size: "lg",
      opacity: 0.38,
      mobile: "reduce",
    },
  ],
  "mobile-app-development": [
    {
      variant: "primary",
      position: "right-center",
      size: "xl",
      opacity: 0.42,
      mobile: "reduce",
    },
    {
      variant: "secondary",
      position: "far-right",
      size: "md",
      opacity: 0.18,
      mobile: "hide",
    },
  ],
  "ai-automation": [
    {
      variant: "primary",
      position: "right-center",
      size: "hero",
      opacity: 0.48,
      mobile: "reduce",
    },
    {
      variant: "secondary",
      position: "bottom-right",
      size: "md",
      opacity: 0.22,
      mobile: "hide",
    },
  ],
  "ui-ux-design": [
    {
      variant: "primary",
      position: "top-right",
      size: "xl",
      opacity: 0.4,
      mobile: "reduce",
    },
    {
      variant: "secondary",
      position: "left-center",
      size: "md",
      opacity: 0.2,
      mobile: "hide",
    },
  ],
  "hosting-infrastructure": [
    {
      variant: "primary",
      position: "right-center",
      size: "lg",
      opacity: 0.36,
      mobile: "reduce",
    },
  ],
};

export const industry_hero_blurs = {
  ecommerce: [
    {
      variant: "primary",
      position: "right-center",
      size: "xl",
      opacity: 0.4,
      mobile: "reduce",
    },
    {
      variant: "secondary",
      position: "bottom-right",
      size: "md",
      opacity: 0.22,
      mobile: "hide",
    },
  ],
  healthcare: [
    {
      variant: "primary",
      position: "top-right",
      size: "lg",
      opacity: 0.32,
      mobile: "reduce",
    },
  ],
  "real-estate": [
    {
      variant: "primary",
      position: "right-center",
      size: "xl",
      opacity: 0.38,
      mobile: "reduce",
    },
  ],
  "transportation-logistics": [
    {
      variant: "primary",
      position: "right-center",
      size: "xl",
      opacity: 0.4,
      mobile: "reduce",
    },
    {
      variant: "secondary",
      position: "far-right",
      size: "sm",
      opacity: 0.16,
      mobile: "hide",
    },
  ],
  "professional-services": [
    {
      variant: "primary",
      position: "top-right",
      size: "md",
      opacity: 0.28,
      mobile: "reduce",
    },
  ],
  "startups-saas": [
    {
      variant: "primary",
      position: "right-center",
      size: "xl",
      opacity: 0.42,
      mobile: "reduce",
    },
    {
      variant: "secondary",
      position: "bottom-right",
      size: "md",
      opacity: 0.18,
      mobile: "hide",
    },
  ],
};
