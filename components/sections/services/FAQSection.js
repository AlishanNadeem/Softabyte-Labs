import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/home/SectionHeader";

export function FAQSection({ eyebrow, headline, description, items = [] }) {
  if (!items.length) return null;

  return (
    <Reveal>
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        description={description}
        className="mb-8 md:mb-10"
      />
      <div className="max-w-3xl space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-md border border-border bg-background-secondary open:bg-surface transition-colors duration-200"
          >
            <summary className="ds-body font-medium text-text-primary cursor-pointer list-none px-5 py-4 md:px-6 md:py-5 ds-focus rounded-md [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                <span>{item.question}</span>
                <span
                  className="text-brand-primary text-lg leading-none shrink-0 mt-0.5 group-open:rotate-45 transition-transform duration-200"
                  aria-hidden="true"
                >
                  +
                </span>
              </span>
            </summary>
            <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0">
              <p className="ds-body text-text-secondary">{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </Reveal>
  );
}
