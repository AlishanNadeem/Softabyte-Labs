import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { process_section } from "@/config/homepage_content";
import { SectionHeader } from "@/components/sections/home/SectionHeader";

export function HomeProcess() {
  const steps = process_section.steps;

  return (
    <section className="ds-section bg-background-primary border-b border-border">
      <div className="ds-container">
        <SectionHeader
          eyebrow={process_section.eyebrow}
          headline={process_section.headline}
          description={process_section.description}
        />

        {/* Desktop: horizontal timeline (lg+) */}
        <ol className="ds-process-timeline--desktop list-none pl-0 m-0">
          {steps.map((step, index) => (
            <li key={step.title} className="ds-process-timeline__stage">
              <Reveal stagger_index={index}>
                <span className="ds-process-timeline__number">{step.step}</span>
                <div className="ds-process-timeline__node-row" aria-hidden="true">
                  <span className="ds-process-timeline__dot" />
                  {index < steps.length - 1 && (
                    <span className="ds-process-timeline__connector" />
                  )}
                </div>
                <h3 className="ds-h4 text-text-primary mb-2 pr-2">{step.title}</h3>
                <p className="ds-body-small text-text-secondary pr-2">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Mobile / tablet: vertical timeline (below lg) */}
        <ol className="ds-process-timeline--mobile list-none pl-0 m-0">
          {steps.map((step, index) => (
            <li key={`${step.title}-mobile`} className="ds-process-timeline__mobile-item">
              <Reveal stagger_index={index}>
                <div className="ds-process-timeline__mobile-step">
                  <div
                    className="ds-process-timeline__mobile-rail"
                    aria-hidden="true"
                  >
                    <span className="ds-process-timeline__dot" />
                    {index < steps.length - 1 && (
                      <span className="ds-process-timeline__mobile-line" />
                    )}
                  </div>
                  <div className="ds-process-timeline__mobile-content">
                    <span className="ds-process-timeline__number mb-2 block">
                      {step.step}
                    </span>
                    <h3 className="ds-h4 text-text-primary mb-1.5">{step.title}</h3>
                    <p className="ds-body-small text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-8">
          <TextLink href={process_section.view_all.href}>
            {process_section.view_all.label}
          </TextLink>
        </div>
      </div>
    </section>
  );
}
