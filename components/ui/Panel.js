const variant_styles = {
  default: "bg-surface border-border",
  service: "bg-background-secondary border-border",
  project: "bg-surface border-border",
  feature: "bg-background-secondary border-border",
};

export function Panel({
  variant = "default",
  hover = true,
  className = "",
  children,
  ...props
}) {
  const hover_class = hover
    ? "ds-hover-lift ds-border-transition hover:border-brand-primary-border"
    : "";

  return (
    <div
      className={`rounded-md border p-5 md:p-6 ${variant_styles[variant]} ${hover_class} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
