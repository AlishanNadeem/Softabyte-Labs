import { BackgroundBlurLayer } from "@/components/ui/BackgroundBlur";

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
  blurs = [],
  children,
}) {
  const has_blurs = blurs?.length > 0;

  return (
    <section
      className={`relative ds-section ${theme_classes[theme] || theme_classes.primary} ${border ? "border-b border-border" : ""} ${has_blurs ? "overflow-hidden" : ""} ${className}`.trim()}
    >
      {has_blurs && <BackgroundBlurLayer items={blurs} />}
      <div className="ds-container relative z-[1]">{children}</div>
    </section>
  );
}
