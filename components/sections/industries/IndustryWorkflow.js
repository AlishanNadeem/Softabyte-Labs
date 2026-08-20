import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/home/SectionHeader";

export function IndustryWorkflow({
  eyebrow,
  headline,
  description,
  steps = [],
}) {
  if (!steps.length) return null;

  return (
    <Reveal>
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        description={description}
        className="mb-8 md:mb-10"
      />
      <ol className="ds-industry-workflow" aria-label={headline || "Workflow"}>
        {steps.map((step, index) => (
          <li key={step.label} className="ds-industry-workflow__step">
            <span className="ds-industry-workflow__number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="ds-industry-workflow__label">{step.label}</span>
            {index < steps.length - 1 && (
              <span
                className="ds-industry-workflow__connector"
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
