const glow_variants = {
  "hero-primary": "ds-ambient-glow--hero-primary",
  "hero-secondary": "ds-ambient-glow--hero-secondary",
  services: "ds-ambient-glow--services",
  ai: "ds-ambient-glow--ai",
  cta: "ds-ambient-glow--cta",
};

export function AmbientGlow({ variant, className = "" }) {
  const variant_class = glow_variants[variant];

  if (!variant_class) return null;

  return (
    <div
      className={`ds-ambient-glow ${variant_class} ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
