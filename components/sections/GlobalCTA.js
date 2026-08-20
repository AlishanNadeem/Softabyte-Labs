import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AmbientGlow } from "@/components/ui/AmbientGlow";

const theme_styles = {
  dark: {
    section: "ds-cta-section bg-background-secondary border-y border-border",
    headline: "text-text-primary",
    description: "text-text-secondary",
    secondary_variant: "secondary",
  },
  /* Legacy alias — kept dark; flat Electric Blue fills removed */
  blue: {
    section:
      "ds-cta-section bg-background-deep border-y border-border",
    headline: "text-text-primary",
    description: "text-text-secondary",
    secondary_variant: "secondary",
  },
};

export function GlobalCTA({
  eyebrow = "Ready to start",
  headline = "Let's build something that works for your business",
  description = "Tell us about your product, platform, or software initiative. We'll help you understand the right next step.",
  primary_action = { label: "Start a Project", href: "/contact/" },
  secondary_action = { label: "View our process", href: "/process/" },
  theme = "dark",
  ambient_glow = false,
}) {
  const styles = theme_styles[theme] || theme_styles.dark;

  return (
    <section
      className={`relative ds-section-tight overflow-hidden ${styles.section}`}
    >
      {ambient_glow && theme === "dark" && <AmbientGlow variant="cta" />}
      <div className="ds-container relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center">
          <div className="lg:col-span-7 space-y-4">
            {eyebrow && (
              <p className="ds-eyebrow text-brand-primary">{eyebrow}</p>
            )}
            <h2 className={`ds-h2 ${styles.headline} max-w-2xl`}>{headline}</h2>
          </div>
          <div className="lg:col-span-5 space-y-6">
            {description && (
              <p className={`ds-body-large ${styles.description}`}>{description}</p>
            )}
            <div className="flex flex-wrap gap-3">
              <Button href={primary_action.href} variant="primary">
                {primary_action.label}
                <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </Button>
              {secondary_action && (
                <Button
                  href={secondary_action.href}
                  variant={styles.secondary_variant}
                >
                  {secondary_action.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
