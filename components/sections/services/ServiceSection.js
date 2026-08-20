const theme_classes = {
  deep: "bg-background-deep",
  primary: "bg-background-primary",
  secondary: "bg-background-secondary",
  surface: "bg-surface",
};

export function ServiceSection({
  theme = "primary",
  border = true,
  className = "",
  children,
}) {
  return (
    <section
      className={`ds-section ${theme_classes[theme] || theme_classes.primary} ${border ? "border-b border-border" : ""} ${className}`.trim()}
    >
      <div className="ds-container">{children}</div>
    </section>
  );
}
