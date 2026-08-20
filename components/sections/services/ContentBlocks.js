import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/home/SectionHeader";

export function ContentIntro({ eyebrow, headline, description, paragraphs = [] }) {
  return (
    <Reveal>
      {(eyebrow || headline || description) && (
        <SectionHeader
          eyebrow={eyebrow}
          headline={headline}
          description={description}
          className="mb-6 md:mb-8"
        />
      )}
      {paragraphs.length > 0 && (
        <div className="max-w-3xl space-y-4">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="ds-body text-text-secondary">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </Reveal>
  );
}

export function ProblemList({ eyebrow, headline, description, items = [] }) {
  return (
    <Reveal>
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        description={description}
        className="mb-8 md:mb-10"
      />
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 list-none pl-0 m-0">
        {items.map((item) => (
          <li
            key={item.title}
            className="rounded-md border border-border bg-background-secondary p-5 md:p-6"
          >
            <h3 className="ds-h4 text-text-primary mb-2">{item.title}</h3>
            <p className="ds-body-small text-text-secondary">{item.description}</p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function DeliverablesList({ eyebrow, headline, description, items = [] }) {
  return (
    <Reveal>
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        description={description}
        className="mb-8 md:mb-10"
      />
      <ul className="divide-y divide-border border-y border-border list-none pl-0 m-0">
        {items.map((item, index) => (
          <li
            key={item.title}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-5 md:py-6"
          >
            <span className="md:col-span-1 text-[0.6875rem] font-semibold tabular-nums text-brand-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="md:col-span-11">
              <h3 className="ds-h4 text-text-primary mb-2">{item.title}</h3>
              <p className="ds-body text-text-secondary">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function AudienceSplit({ eyebrow, headline, for_items = [], not_for_items = [] }) {
  return (
    <Reveal>
      <SectionHeader eyebrow={eyebrow} headline={headline} className="mb-8 md:mb-10" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
        <div className="rounded-md border border-border bg-background-secondary p-5 md:p-6">
          <h3 className="ds-h4 text-text-primary mb-4">A strong fit when</h3>
          <ul className="space-y-3 list-none pl-0 m-0">
            {for_items.map((item) => (
              <li key={item} className="flex gap-3 ds-body text-text-secondary">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-md border border-border bg-background-primary p-5 md:p-6">
          <h3 className="ds-h4 text-text-primary mb-4">Usually not the right starting point if</h3>
          <ul className="space-y-3 list-none pl-0 m-0">
            {not_for_items.map((item) => (
              <li key={item} className="flex gap-3 ds-body text-text-secondary">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-text-muted"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

export function ComparisonSplit({
  eyebrow,
  headline,
  description,
  left_title,
  left_items = [],
  right_title,
  right_items = [],
}) {
  return (
    <Reveal>
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        description={description}
        className="mb-8 md:mb-10"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
        <div className="rounded-md border border-border bg-background-secondary p-5 md:p-6">
          <h3 className="ds-h4 text-text-primary mb-4">{left_title}</h3>
          <ul className="space-y-3 list-none pl-0 m-0">
            {left_items.map((item) => (
              <li key={item} className="ds-body text-text-secondary">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-md border border-brand-primary-border bg-background-primary p-5 md:p-6">
          <h3 className="ds-h4 text-text-primary mb-4">{right_title}</h3>
          <ul className="space-y-3 list-none pl-0 m-0">
            {right_items.map((item) => (
              <li key={item} className="flex gap-3 ds-body text-text-secondary">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

export function ProcessSteps({ eyebrow, headline, description, steps = [] }) {
  return (
    <Reveal>
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        description={description}
        className="mb-8 md:mb-10"
      />
      <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 list-none pl-0 m-0">
        {steps.map((step) => (
          <li
            key={step.title}
            className="rounded-md border border-border bg-background-secondary p-5 md:p-6"
          >
            <span className="ds-eyebrow text-brand-primary block mb-3">{step.step}</span>
            <h3 className="ds-h4 text-text-primary mb-2">{step.title}</h3>
            <p className="ds-body-small text-text-secondary">{step.description}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

export function TextWithLinks({ eyebrow, headline, description, paragraphs = [] }) {
  return (
    <Reveal>
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        description={description}
        className="mb-6 md:mb-8"
      />
      <div className="max-w-3xl space-y-4">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="ds-body text-text-secondary">
            {paragraph}
          </p>
        ))}
      </div>
    </Reveal>
  );
}
