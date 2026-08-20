import Link from "next/link";
import { BackgroundBlur } from "@/components/ui/BackgroundBlur";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/sections/services/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { ServiceSection } from "@/components/sections/services/ServiceSection";
import { SectionHeader } from "@/components/sections/home/SectionHeader";
import { contact_page } from "@/config/contact_content";

export function ContactPageView() {
  const page = contact_page;

  return (
    <>
      <section className="relative border-b border-border bg-background-deep overflow-hidden">
        <BackgroundBlur
          variant="primary"
          position="top-right"
          size="md"
          opacity={0.28}
          mobile="reduce"
        />
        <div className="ds-container relative z-[1] py-12 md:py-16 lg:py-20">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          />
          <div className="max-w-3xl">
            <p
              className="ds-eyebrow text-brand-primary mb-4 ds-hero-entrance"
              style={{ "--hero-delay": "0ms" }}
            >
              {page.hero.eyebrow}
            </p>
            <span
              className="ds-accent-line mb-5 block ds-hero-entrance"
              style={{ "--hero-delay": "40ms" }}
              aria-hidden="true"
            />
            <h1
              className="ds-h1 text-text-primary mb-5 ds-hero-entrance"
              style={{ "--hero-delay": "60ms" }}
            >
              {page.hero.h1}
            </h1>
            <p
              className="ds-body-large text-text-secondary ds-hero-entrance"
              style={{ "--hero-delay": "120ms" }}
            >
              {page.hero.description}
            </p>
          </div>
        </div>
      </section>

      <ServiceSection
        theme="primary"
        blurs={[
          {
            variant: "primary",
            position: "right-center",
            size: "xl",
            opacity: 0.34,
            mobile: "reduce",
          },
          {
            variant: "secondary",
            position: "bottom-left",
            size: "sm",
            opacity: 0.14,
            mobile: "hide",
          },
        ]}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              <SectionHeader
                eyebrow={page.intro.eyebrow}
                headline={page.intro.headline}
                className="mb-4 md:mb-5"
              />
              <div className="space-y-4">
                {page.intro.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="ds-body text-text-secondary"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-md border border-border bg-background-secondary p-5 md:p-6">
                <p className="ds-eyebrow text-brand-primary mb-3">
                  {page.guidance.eyebrow}
                </p>
                <h2 className="ds-h4 text-text-primary mb-4">
                  {page.guidance.headline}
                </h2>
                <ol className="space-y-4 list-none pl-0 m-0">
                  {page.guidance.items.map((item, index) => (
                    <li key={item.title}>
                      <p className="text-[0.6875rem] font-semibold tabular-nums text-brand-primary mb-1">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="text-sm font-semibold text-text-primary mb-1">
                        {item.title}
                      </h3>
                      <p className="ds-body-small text-text-secondary">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal variant="scale_in" delay={80}>
              <div className="relative rounded-md border border-border bg-background-secondary p-5 md:p-7 overflow-hidden">
                <div className="relative z-[1]">
                  <ContactForm form_config={page.form} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection theme="secondary">
        <Reveal>
          <SectionHeader
            eyebrow={page.not_ready.eyebrow}
            headline={page.not_ready.headline}
            description={page.not_ready.description}
            className="mb-6 md:mb-8"
          />
          <div className="flex flex-wrap gap-3">
            {page.not_ready.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center min-h-11 px-4 rounded-md border border-border bg-background-primary text-sm font-medium text-text-primary hover:border-brand-primary-border hover:text-brand-primary transition-colors duration-200 ds-focus"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </ServiceSection>
    </>
  );
}
