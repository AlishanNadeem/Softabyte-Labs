import { GitMerge, Layers, Palette, Server } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { capabilities_section } from "@/config/homepage_content";
import { SectionHeader } from "@/components/sections/home/SectionHeader";

const capability_icons = [Layers, Palette, GitMerge, Server];

export function HomeCapabilities() {
  return (
    <section className="ds-section bg-background-primary border-b border-border">
      <div className="ds-container">
        <SectionHeader
          eyebrow={capabilities_section.eyebrow}
          headline={capabilities_section.headline}
          description={capabilities_section.description}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {capabilities_section.items.map((item, index) => {
            const Icon = capability_icons[index];
            return (
              <Reveal key={item.title} stagger_index={index}>
                <article className="rounded-md border border-border bg-background-secondary p-6 md:p-7 h-full">
                  {Icon && (
                    <Icon
                      size={22}
                      strokeWidth={1.75}
                      className="text-brand-primary mb-4"
                      aria-hidden="true"
                    />
                  )}
                  <h3 className="ds-h3 text-text-primary mb-3">{item.title}</h3>
                  <p className="ds-body text-text-secondary">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
