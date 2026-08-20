import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { insights_section } from "@/config/homepage_content";
import { SectionHeader } from "@/components/sections/home/SectionHeader";

export function HomeInsights() {
  return (
    <section className="ds-section bg-background-deep border-b border-border">
      <div className="ds-container">
        <SectionHeader
          eyebrow={insights_section.eyebrow}
          headline={insights_section.headline}
          description={insights_section.description}
        />
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-4 rounded-md border border-border bg-background-secondary p-6 md:p-8 flex flex-col justify-center">
              <p className="ds-eyebrow text-brand-primary mb-3">
                {insights_section.status}
              </p>
              <p className="ds-body text-text-secondary">
                Practical articles on software decisions, delivery, and operations — published when ready.
              </p>
            </div>
            <div className="lg:col-span-8 rounded-md border border-border bg-background-secondary p-6 md:p-8">
              <p className="ds-label text-text-muted mb-4">Planned topics</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {insights_section.topics.map((topic) => (
                  <li
                    key={topic}
                    className="ds-body-small text-text-primary border border-border rounded-sm bg-background-primary px-4 py-3"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
              <TextLink href={insights_section.cta.href}>
                {insights_section.cta.label}
              </TextLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
