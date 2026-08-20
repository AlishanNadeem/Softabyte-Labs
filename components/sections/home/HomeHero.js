import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { hero } from "@/config/homepage_content";

const hero_image_width = 1448;
const hero_image_height = 1086;

export function HomeHero() {
  return (
    <section className="relative border-b border-border bg-background-deep overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 ds-hero-bg"
        aria-hidden="true"
      />
      <AmbientGlow variant="hero-primary" />
      <AmbientGlow variant="hero-secondary" />
      <div className="ds-container relative z-[1] py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,54fr)_minmax(0,46fr)] gap-10 lg:gap-12 xl:gap-14 items-center">
          <div className="space-y-5 md:space-y-6 order-1">
            <p
              className="ds-eyebrow text-brand-primary ds-hero-entrance"
              style={{ "--hero-delay": "0ms" }}
            >
              {hero.eyebrow}
            </p>
            <span
              className="ds-accent-line block ds-hero-entrance"
              style={{ "--hero-delay": "40ms" }}
              aria-hidden="true"
            />
            <h1
              className="ds-h1 text-text-primary max-w-xl ds-hero-entrance"
              style={{ "--hero-delay": "60ms" }}
            >
              {hero.h1}
            </h1>
            <p
              className="ds-body-large text-text-secondary max-w-lg ds-hero-entrance"
              style={{ "--hero-delay": "120ms" }}
            >
              {hero.description}
            </p>
            <div
              className="flex flex-wrap gap-3 pt-1 ds-hero-entrance"
              style={{ "--hero-delay": "180ms" }}
            >
              <Button href={hero.primary_cta.href} variant="primary">
                {hero.primary_cta.label}
                <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </Button>
              <Button href={hero.secondary_cta.href} variant="secondary">
                {hero.secondary_cta.label}
              </Button>
            </div>
          </div>
          <figure
            className="group ds-hero-image-frame ds-frame-accent m-0 order-2 ds-hero-entrance ds-hero-entrance--scale"
            style={{ "--hero-delay": "200ms" }}
          >
            <div className="relative overflow-hidden rounded-md border border-border bg-surface shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)]">
              <Image
                src="/images/home/hero-visual.webp"
                alt={hero.image.alt}
                width={hero_image_width}
                height={hero_image_height}
                sizes="(max-width: 1024px) 100vw, 46vw"
                priority
                className="w-full h-auto ds-image-zoom"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
