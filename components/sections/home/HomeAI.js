import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { Reveal } from "@/components/ui/Reveal";
import { ai_section } from "@/config/homepage_content";
import { SectionHeader } from "@/components/sections/home/SectionHeader";

function AIWorkflowVisual() {
  return (
    <div className="ds-ai-visual" aria-hidden="true">
      <div className="ds-ai-visual__panel">
        <div className="ds-ai-visual__panel-header">
          <span />
          <span />
          <span />
        </div>
        <div className="ds-ai-visual__panel-body">
          <div className="ds-ai-visual__module" />
          <div className="ds-ai-visual__module ds-ai-visual__module--accent" />
          <div className="ds-ai-visual__module" />
        </div>
      </div>
      <div className="ds-ai-visual__flow">
        <div className="ds-ai-visual__node" />
        <div className="ds-ai-visual__line" />
        <div className="ds-ai-visual__node ds-ai-visual__node--accent" />
        <div className="ds-ai-visual__line" />
        <div className="ds-ai-visual__node" />
      </div>
      <div className="ds-ai-visual__output">
        <span className="ds-ai-visual__output-line" />
        <span className="ds-ai-visual__output-line short" />
        <span className="ds-ai-visual__output-line medium" />
      </div>
    </div>
  );
}

export function HomeAI() {
  return (
    <section className="relative ds-section bg-background-secondary border-b border-border overflow-hidden">
      <AmbientGlow variant="ai" />
      <div className="ds-container relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow={ai_section.eyebrow}
              headline={ai_section.headline}
              description={ai_section.description}
              className="mb-8 md:mb-10"
            />
            <Reveal variant="slide_left">
              <ul className="space-y-3 mb-8">
                {ai_section.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 ds-body text-text-secondary"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Button href={ai_section.cta.href} variant="primary">
                {ai_section.cta.label}
                <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </Button>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-6" variant="slide_right" delay={80}>
            <div className="rounded-md border border-border bg-background-primary p-6 md:p-8 min-h-[16rem] flex items-center justify-center">
              <AIWorkflowVisual />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
