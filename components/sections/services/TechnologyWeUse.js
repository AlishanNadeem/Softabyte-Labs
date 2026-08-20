import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/home/SectionHeader";

export function TechnologyWeUse({
  eyebrow,
  headline,
  description,
  technologies = [],
  variant = "marquee",
}) {
  if (!technologies.length) return null;

  const items = technologies.map((name) => (
    <span key={name} className="ds-tech-marquee__item">
      {name}
    </span>
  ));

  return (
    <Reveal variant={variant === "marquee" ? "fade_up" : "fade_in"}>
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        description={description}
        className="mb-8 md:mb-10"
      />
      {variant === "marquee" ? (
        <div className="ds-tech-marquee" aria-label="Technologies we use">
          <div className="ds-tech-marquee__track">
            {items}
            {items}
          </div>
        </div>
      ) : (
        <div className="ds-tech-row" role="list">
          {technologies.map((name) => (
            <span key={name} className="ds-tech-row__item" role="listitem">
              {name}
            </span>
          ))}
        </div>
      )}
    </Reveal>
  );
}
