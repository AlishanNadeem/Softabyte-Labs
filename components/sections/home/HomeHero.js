import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { BackgroundBlur } from "@/components/ui/BackgroundBlur";
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
      <BackgroundBlur
        variant="primary"
        position="hero-visual"
        size="hero"
        opacity={0.48}
        mobile="reduce"
      />
      <BackgroundBlur
        variant="secondary"
        position="hero-secondary"
        size="md"
        opacity={0.2}
        mobile="hide"
      />
      <div className="ds-container relative z-[1] py-14 md:py-16 lg:py-[4.75rem] xl:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,51fr)_minmax(0,45fr)] gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="order-1 max-w-xl lg:max-w-none">
            <p
              className="ds-eyebrow text-brand-primary ds-hero-entrance mb-5 md:mb-6"
              style={{ "--hero-delay": "0ms" }}
            >
              {hero.eyebrow}
            </p>
            <h1
              className="ds-home-hero-h1 text-text-primary ds-hero-entrance mb-5 md:mb-6"
              style={{ "--hero-delay": "60ms" }}
            >
              {hero.h1}
            </h1>
            <p
              className="ds-home-hero-desc text-text-secondary ds-hero-entrance mb-7 md:mb-8"
              style={{ "--hero-delay": "120ms" }}
            >
              {hero.description}
            </p>
            <div
              className="flex flex-col items-start gap-4 sm:gap-5 ds-hero-entrance"
              style={{ "--hero-delay": "180ms" }}
            >
              <Button
                href={hero.primary_cta.href}
                variant="primary"
                className="min-h-[3.125rem] h-[3.25rem] px-6 text-[0.9375rem]"
              >
                {hero.primary_cta.label}
                <ArrowUpRight size={17} strokeWidth={1.75} aria-hidden="true" />
              </Button>
              <TextLink
                href={hero.secondary_cta.href}
                className="min-h-11 text-[0.9375rem]"
              >
                {hero.secondary_cta.label}
              </TextLink>
            </div>
          </div>

          <figure
            className="ds-home-hero-visual m-0 order-2 w-full max-w-[36rem] lg:max-w-[38.75rem] mx-auto lg:mx-0 lg:justify-self-end ds-hero-entrance ds-hero-entrance--scale"
            style={{ "--hero-delay": "200ms" }}
          >
            <div className="ds-home-hero-visual__surface">
              <span
                className="ds-home-hero-visual__accent"
                aria-hidden="true"
              />
              <Image
                src="/images/home/hero-visual.webp"
                alt={hero.image.alt}
                width={hero_image_width}
                height={hero_image_height}
                sizes="(max-width: 1024px) min(100vw, 36rem), 38.75rem"
                priority
                className="w-full h-auto ds-home-hero-visual__image"
              />
            </div>
            <div className="ds-home-hero-visual__float" aria-hidden="true">
              <span className="ds-home-hero-visual__float-label">
                Product interface
              </span>
              <div className="ds-home-hero-visual__float-bars">
                <span />
                <span />
                <span />
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
