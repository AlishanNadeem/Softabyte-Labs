import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/home/SectionHeader";
import { FaqAccordion } from "@/components/sections/services/FaqAccordion";

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
      <FaqAccordion items={items} />
    </Reveal>
  );
}
