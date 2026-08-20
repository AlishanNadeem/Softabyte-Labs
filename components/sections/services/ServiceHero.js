import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { Breadcrumbs } from "@/components/sections/services/Breadcrumbs";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { service_icon_map } from "@/lib/service_icons";

export function ServiceHero({
  breadcrumbs,
  eyebrow,
  h1,
  description,
  service_slug,
  ambient_variant,
  align = "left",
  layout = "default",
  hero_visual,
}) {
  const Icon = service_slug ? service_icon_map[service_slug] : null;
  const is_centered = align === "center";
  const is_split = layout === "split" && hero_visual;

  return (
    <section className="relative border-b border-border bg-background-deep overflow-hidden">
      {ambient_variant && <AmbientGlow variant={ambient_variant} />}
      <div className="ds-container relative z-[1] py-12 md:py-16 lg:py-20">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div
          className={
            is_split
              ? "grid grid-cols-1 lg:grid-cols-[minmax(0,52fr)_minmax(0,48fr)] gap-10 lg:gap-12 items-center"
              : ""
          }
        >
          <div
            className={`${!is_split && is_centered ? "max-w-3xl mx-auto text-center" : !is_split ? "max-w-3xl" : ""}`}
          >
            <div
              className={`flex items-center gap-3 mb-4 ds-hero-entrance ${is_centered && !is_split ? "justify-center" : ""}`}
              style={{ "--hero-delay": "0ms" }}
            >
              {Icon && (
                <span
                  className="inline-flex items-center justify-center w-9 h-9 shrink-0 rounded-[10px] bg-background-secondary border border-border"
                  aria-hidden="true"
                >
                  <Icon
                    size={17}
                    strokeWidth={1.75}
                    className="text-brand-primary"
                    aria-hidden="true"
                  />
                </span>
              )}
              {eyebrow && (
                <p className="ds-eyebrow text-brand-primary mb-0">{eyebrow}</p>
              )}
            </div>
            <span
              className={`ds-accent-line mb-5 block ds-hero-entrance ${is_centered && !is_split ? "mx-auto" : ""}`}
              style={{ "--hero-delay": "40ms" }}
              aria-hidden="true"
            />
            <h1
              className="ds-h1 text-text-primary mb-5 ds-hero-entrance"
              style={{ "--hero-delay": "60ms" }}
            >
              {h1}
            </h1>
            {description && (
              <p
                className="ds-body-large text-text-secondary ds-hero-entrance"
                style={{ "--hero-delay": "120ms" }}
              >
                {description}
              </p>
            )}
          </div>
          {is_split && (
            <div
              className="ds-hero-entrance ds-hero-entrance--scale"
              style={{ "--hero-delay": "180ms" }}
            >
              <ImagePlaceholder
                {...hero_visual}
                aspect_class={hero_visual.aspect_class}
                reveal
                className="w-full"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
