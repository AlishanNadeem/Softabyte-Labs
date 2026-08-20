import { blur_asset_paths } from "@/config/background_blur";

const size_class_map = {
  sm: "ds-bg-blur--sm",
  md: "ds-bg-blur--md",
  lg: "ds-bg-blur--lg",
  xl: "ds-bg-blur--xl",
  hero: "ds-bg-blur--hero",
};

const position_class_map = {
  "top-right": "ds-bg-blur--top-right",
  "top-left": "ds-bg-blur--top-left",
  "bottom-right": "ds-bg-blur--bottom-right",
  "bottom-left": "ds-bg-blur--bottom-left",
  "right-center": "ds-bg-blur--right-center",
  "left-center": "ds-bg-blur--left-center",
  "far-right": "ds-bg-blur--far-right",
  "hero-visual": "ds-bg-blur--hero-visual",
  "hero-secondary": "ds-bg-blur--hero-secondary",
};

const mobile_class_map = {
  show: "",
  hide: "ds-bg-blur--hide-mobile",
  reduce: "ds-bg-blur--reduce-mobile",
};

const default_opacity = {
  primary: "var(--blur-primary-opacity)",
  secondary: "var(--blur-secondary-opacity)",
};

/**
 * Environmental lighting from prepared blur SVG assets.
 * Cyan (primary) dominates; yellow (secondary) is a counter-light only.
 */
export function BackgroundBlur({
  variant = "primary",
  position = "top-right",
  size = "lg",
  opacity,
  mobile = "reduce",
  className = "",
}) {
  const src = blur_asset_paths[variant];

  if (!src) return null;

  const resolved_opacity =
    opacity ?? default_opacity[variant] ?? default_opacity.primary;

  const classes = [
    "ds-bg-blur",
    variant === "secondary" ? "ds-bg-blur--secondary" : "ds-bg-blur--primary",
    size_class_map[size] || size_class_map.lg,
    position_class_map[position] || position_class_map["top-right"],
    mobile_class_map[mobile] || "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      style={{ "--blur-opacity": String(resolved_opacity) }}
      aria-hidden="true"
      role="presentation"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="ds-bg-blur__img"
      />
    </div>
  );
}

/** Render a list of blur placement configs */
export function BackgroundBlurLayer({ items = [] }) {
  if (!items?.length) return null;

  return items.map((item, index) => (
    <BackgroundBlur
      key={`${item.variant}-${item.position || "pos"}-${index}`}
      {...item}
    />
  ));
}
