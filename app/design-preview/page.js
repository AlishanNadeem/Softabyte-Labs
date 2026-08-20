import {
  ArrowRight,
  Code2,
  Layers,
  MonitorSmartphone,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Panel } from "@/components/ui/Panel";
import { Tag } from "@/components/ui/Tag";
import { TextLink } from "@/components/ui/TextLink";

const typography_sample = {
  display: "Premium software, built with clarity",
  h1: "Technology partner for ambitious products",
  h2: "Engineering with precision and intent",
  h3: "Focused delivery across the stack",
  body_large:
    "We help companies design, build, and scale software that feels polished, reliable, and ready for real users.",
  body: "Clear supporting copy for product pages, service descriptions, and content sections across the site.",
  body_small: "Secondary details, metadata, captions, and compact UI supporting text.",
};

const color_swatches = [
  { name: "Deep", token: "background-deep", hex: "#050607" },
  { name: "Primary BG", token: "background-primary", hex: "#080A0B" },
  { name: "Secondary BG", token: "background-secondary", hex: "#0D1012" },
  { name: "Surface", token: "surface", hex: "#111518" },
  { name: "Elevated Surface", token: "surface-elevated", hex: "#161B1E" },
  { name: "Primary Text", token: "text-primary", hex: "#F5F7F7", text: true },
  { name: "Secondary Text", token: "text-secondary", hex: "#A6ADB0", text: true },
  { name: "Muted Text", token: "text-muted", hex: "#717A7E", text: true },
  { name: "Border", token: "border", hex: "#242B2E" },
  { name: "Strong Border", token: "border-strong", hex: "#343D41" },
  { name: "Cyan", token: "brand-cyan", hex: "#0CC0DF", brand: true },
  { name: "Yellow", token: "brand-yellow", hex: "#FFDE59", brand: true },
];

function PreviewLabel({ children }) {
  return (
    <p className="ds-eyebrow text-brand-primary mb-3">{children}</p>
  );
}

function SectionHeading({ title, description }) {
  return (
    <div className="mb-8 md:mb-10 max-w-2xl">
      <span className="ds-accent-line mb-4" aria-hidden="true" />
      <h2 className="ds-h2 text-text-primary mb-3 mt-4">{title}</h2>
      {description && (
        <p className="ds-body-large text-text-secondary">{description}</p>
      )}
    </div>
  );
}

function TypographySpecimen({ label, font_note, children }) {
  return (
    <div className="py-5 border-b border-border last:border-0">
      <p className="ds-eyebrow text-text-muted mb-3">
        {label} — {font_note}
      </p>
      {children}
    </div>
  );
}

export default function DesignPreviewPage() {
  return (
    <div className="bg-background-primary text-text-primary min-h-screen overflow-x-hidden">
      {/* Review banner */}
      <div className="border-b border-border bg-background-secondary">
        <div className="ds-container py-3">
          <p className="ds-eyebrow text-brand-primary text-center">
            Design Preview Only — Not for production or SEO
          </p>
        </div>
      </div>

      {/* Header preview */}
      <header className="border-b border-border bg-background-primary/95">
        <div className="ds-container flex items-center justify-between gap-4 py-4 md:py-5">
          <span className="text-sm font-semibold tracking-tight text-text-primary">
            Softabyte Labs
          </span>
          <nav
            className="hidden sm:flex items-center gap-6 text-sm text-text-secondary"
            aria-label="Preview navigation"
          >
            <span className="text-text-primary">Services</span>
            <span>Work</span>
            <span>About</span>
            <span>Contact</span>
          </nav>
          <Button variant="primary" className="!min-h-9 !px-4 !text-xs md:!text-sm">
            Start a project
          </Button>
        </div>
      </header>

      <main>
        {/* 05 — Hero preview */}
        <section className="ds-section bg-background-deep border-b border-border">
          <div className="ds-container">
            <PreviewLabel>Hero Preview — Sample Only</PreviewLabel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="space-y-6 ds-animate-fade-up">
                <p className="ds-eyebrow text-brand-primary">
                  Software development partner
                </p>
                <span className="ds-accent-line" aria-hidden="true" />
                <h1 className="ds-h1 text-text-primary max-w-xl">
                  Premium software experiences for modern businesses
                </h1>
                <p className="ds-body-large text-text-secondary max-w-lg">
                  Sample supporting copy for visual review. Strong Montserrat
                  headline with readable Poppins body text on a dark graphite canvas
                  with cyan and yellow accents.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button variant="primary">Discuss your project</Button>
                  <Button variant="secondary">View sample work</Button>
                </div>
              </div>
              <div className="ds-animate-fade-up ds-animate-delay-2 group">
                <ImagePlaceholder
                  size="hero"
                  filename="/public/images/home/hero-visual.webp"
                  dimensions="1600 × 1200"
                  aspect_ratio="4:3"
                  purpose="Premium digital product/interface composition, application UI, or professionally art-directed software visual."
                  reveal
                  framed
                />
              </div>
            </div>
          </div>
        </section>

        {/* 01 — Color palette */}
        <section className="ds-section bg-background-primary border-b border-border">
          <div className="ds-container">
            <SectionHeading
              title="Color palette"
              description="Dark graphite foundation with cyan as the primary technology accent and yellow as a controlled finishing highlight. ~70% neutrals, ~20% cyan, ~10% yellow."
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {color_swatches.map((swatch) => (
                <div
                  key={swatch.token}
                  className="rounded-md border border-border overflow-hidden"
                >
                  <div
                    className="h-20 md:h-24"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <div className="p-3 bg-surface">
                    <p className="text-sm font-medium text-text-primary">
                      {swatch.name}
                    </p>
                    <p className="text-xs text-text-muted mt-1">{swatch.hex}</p>
                    <p className="text-xs text-text-muted mt-1">
                      --{swatch.token}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02 — Typography */}
        <section className="ds-section bg-background-secondary border-b border-border">
          <div className="ds-container">
            <SectionHeading
              title="Typography system"
              description="Approved Montserrat headings with Poppins body/UI. Final type pairing — verifies hierarchy and sizing."
            />
            <div className="rounded-md border border-border bg-surface p-6 md:p-8">
              <TypographySpecimen label="Display" font_note="Montserrat">
                <p className="ds-display text-text-primary">
                  {typography_sample.display}
                </p>
              </TypographySpecimen>
              <TypographySpecimen label="H1" font_note="Montserrat">
                <h1 className="ds-h1 text-text-primary">{typography_sample.h1}</h1>
              </TypographySpecimen>
              <TypographySpecimen label="H2" font_note="Montserrat">
                <h2 className="ds-h2 text-text-primary">{typography_sample.h2}</h2>
              </TypographySpecimen>
              <TypographySpecimen label="H3" font_note="Montserrat">
                <h3 className="ds-h3 text-text-primary">{typography_sample.h3}</h3>
              </TypographySpecimen>
              <TypographySpecimen label="Body large" font_note="Poppins">
                <p className="ds-body-large text-text-secondary">
                  {typography_sample.body_large}
                </p>
              </TypographySpecimen>
              <TypographySpecimen label="Body" font_note="Poppins">
                <p className="ds-body text-text-secondary">
                  {typography_sample.body}
                </p>
              </TypographySpecimen>
              <TypographySpecimen label="Body small" font_note="Poppins">
                <p className="ds-body-small text-text-muted">
                  {typography_sample.body_small}
                </p>
              </TypographySpecimen>
              <TypographySpecimen label="Eyebrow / label" font_note="Poppins">
                <p className="ds-eyebrow text-brand-primary">Section label</p>
                <p className="ds-label text-text-secondary mt-2">
                  Form label example
                </p>
              </TypographySpecimen>
              <TypographySpecimen label="Button" font_note="Poppins">
                <Button variant="primary">Sample button label</Button>
              </TypographySpecimen>
            </div>
          </div>
        </section>

        {/* 03 — Buttons */}
        <section className="ds-section-tight bg-background-primary border-b border-border">
          <div className="ds-container">
            <SectionHeading
              title="Buttons & text links"
              description="Gradient primary actions with restrained secondary controls. No glow effects."
            />
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button variant="primary">Primary action</Button>
              <Button variant="secondary">Secondary action</Button>
            </div>
            <div className="flex flex-wrap gap-6">
              <TextLink href="#">Default text link</TextLink>
              <TextLink href="#" accent>
                Accent text link
              </TextLink>
            </div>
          </div>
        </section>

        {/* 04 — Icons */}
        <section className="ds-section-tight bg-background-secondary border-b border-border">
          <div className="ds-container">
            <SectionHeading
              title="Selective icon usage"
              description="Lucide outline icons — white, muted gray, and cyan used sparingly."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex gap-3 items-start">
                <Code2
                  size={20}
                  strokeWidth={1.75}
                  className="text-brand-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-text-primary">Service</p>
                  <p className="text-xs text-text-muted mt-1">Custom development</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Layers
                  size={20}
                  strokeWidth={1.75}
                  className="text-text-secondary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-text-primary">Process step</p>
                  <p className="text-xs text-text-muted mt-1">Discovery & scope</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MonitorSmartphone
                  size={20}
                  strokeWidth={1.75}
                  className="text-text-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-text-primary">Feature</p>
                  <p className="text-xs text-text-muted mt-1">Cross-platform delivery</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <ArrowRight
                  size={20}
                  strokeWidth={1.75}
                  className="text-brand-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-text-primary">Action</p>
                  <p className="text-xs text-text-muted mt-1">Link affordance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06 — Service treatments */}
        <section className="ds-section bg-surface border-b border-border">
          <div className="ds-container">
            <SectionHeading
              title="Service presentation"
              description="Professional editorial rows and restrained panels — not six identical generic cards."
            />

            <PreviewLabel>Editorial row</PreviewLabel>
            <div className="mb-12">
              {[
                {
                  num: "01",
                  title: "Web development",
                  desc: "Placeholder editorial service row with strong typographic hierarchy and minimal chrome.",
                },
                {
                  num: "02",
                  title: "Mobile app development",
                  desc: "Second placeholder row demonstrating list rhythm, spacing, and scanability.",
                },
              ].map((service) => (
                <div
                  key={service.num}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-6 border-b border-border last:border-0 group"
                >
                  <div className="md:col-span-2">
                    <p className="ds-eyebrow text-brand-primary">{service.num}</p>
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="ds-h3 text-text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="ds-body-small text-text-secondary">
                      {service.desc}
                    </p>
                  </div>
                  <div className="md:col-span-4 md:text-right">
                    <TextLink href="#">Explore service</TextLink>
                  </div>
                </div>
              ))}
            </div>

            <PreviewLabel>Restrained panel</PreviewLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Panel variant="service">
                <div className="flex gap-3 items-start mb-3">
                  <Search
                    size={20}
                    strokeWidth={1.75}
                    className="text-brand-primary shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className="ds-h3 text-text-primary">
                    Custom software development
                  </h3>
                </div>
                <p className="ds-body-small text-text-secondary mb-4">
                  Panel-based service treatment with selective icon, title, and
                  action link.
                </p>
                <TextLink href="#">Learn more</TextLink>
              </Panel>
              <Panel variant="service">
                <div className="flex gap-3 items-start mb-3">
                  <Code2
                    size={20}
                    strokeWidth={1.75}
                    className="text-brand-primary shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className="ds-h3 text-text-primary">Product engineering</h3>
                </div>
                <p className="ds-body-small text-text-secondary mb-4">
                  Second panel placeholder for comparing density and structure
                  within the black theme.
                </p>
                <TextLink href="#">Learn more</TextLink>
              </Panel>
            </div>
          </div>
        </section>

        {/* 07 — Project preview */}
        <section className="ds-section bg-background-deep border-b border-border">
          <div className="ds-container">
            <PreviewLabel>Project Preview — Placeholder Content</PreviewLabel>
            <SectionHeading
              title="Case study treatment"
              description="Large project imagery with category, title, description, technology tags, and action."
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-8 group">
                <ImagePlaceholder
                  size="project"
                  filename="/public/images/work/project-01.webp"
                  dimensions="1600 × 1000"
                  aspect_ratio="8:5"
                  purpose="Real software/application project screenshot presented professionally with dark frame."
                  reveal
                  framed
                />
              </div>
              <div className="lg:col-span-4 space-y-5">
                <p className="ds-eyebrow text-brand-primary">Web application</p>
                <h2 className="ds-h2 text-text-primary">
                  Sample client platform
                </h2>
                <p className="ds-body text-text-secondary">
                  Placeholder description for a case study layout. The image
                  receives more visual importance than decorative graphics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Tag active>Next.js</Tag>
                  <Tag>Product design</Tag>
                  <Tag>Placeholder</Tag>
                </div>
                <TextLink href="#">View placeholder project</TextLink>
              </div>
            </div>
          </div>
        </section>

        {/* 08 — Panels / cards */}
        <section className="ds-section bg-background-secondary border-b border-border">
          <div className="ds-container">
            <SectionHeading
              title="Panels & cards"
              description="Charcoal surfaces with thin borders. Used selectively — not site-wide card grids."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <Panel variant="feature">
                <p className="ds-eyebrow text-text-muted mb-2">Feature panel</p>
                <h3 className="ds-h3 text-text-primary mb-2">
                  Performance-first delivery
                </h3>
                <p className="ds-body-small text-text-secondary mb-4">
                  Compact panel for feature highlights with subtle hover border
                  transition toward cyan.
                </p>
                <TextLink href="#">See approach</TextLink>
              </Panel>
              <Panel variant="project">
                <p className="ds-eyebrow text-text-muted mb-2">Project panel</p>
                <h3 className="ds-h3 text-text-primary mb-2">
                  Sample product platform
                </h3>
                <p className="ds-body-small text-text-secondary mb-4">
                  Restrained card density for supporting project summaries or
                  related work links.
                </p>
                <TextLink href="#">View project</TextLink>
              </Panel>
            </div>
          </div>
        </section>

        {/* 09 — Animation samples */}
        <section className="ds-section bg-background-primary border-b border-border">
          <div className="ds-container">
            <SectionHeading
              title="Animation samples"
              description="Subtle CSS transitions — 4px–16px movement, 180ms–600ms duration. Respects prefers-reduced-motion."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              <Panel variant="default" className="ds-animate-fade-up">
                <p className="text-sm font-medium text-text-primary mb-2">
                  Fade + translate reveal
                </p>
                <p className="text-xs text-text-muted">
                  Entry animation on load for section content.
                </p>
              </Panel>
              <Panel variant="default" hover>
                <p className="text-sm font-medium text-text-primary mb-2">
                  Hover lift (2–4px)
                </p>
                <p className="text-xs text-text-muted">
                  Hover this panel to preview elevation shift.
                </p>
              </Panel>
              <Panel variant="default">
                <p className="text-sm font-medium text-text-primary mb-2">
                  Arrow movement
                </p>
                <TextLink href="#">Hover to preview arrow shift</TextLink>
              </Panel>
              <Panel variant="default" className="p-0 overflow-hidden group">
                <ImagePlaceholder
                  size="supporting"
                  filename="/public/images/shared/supporting-visual.webp"
                  dimensions="900 × 600"
                  aspect_ratio="3:2"
                  purpose="Image overlay reveal and slight zoom on hover."
                  reveal
                  className="!max-w-none rounded-none border-0"
                />
              </Panel>
              <Panel
                variant="default"
                className="ds-border-transition hover:border-brand-primary-border"
              >
                <p className="text-sm font-medium text-text-primary mb-2">
                  Border transition
                </p>
                <p className="text-xs text-text-muted">
                  Border shifts toward cyan on hover.
                </p>
              </Panel>
              <div className="rounded-md border border-border bg-surface p-6 group">
                <p className="text-sm font-medium text-text-primary mb-2">
                  Line expansion
                </p>
                <span className="ds-accent-line mb-3" aria-hidden="true" />
                <p className="text-xs text-text-muted">
                  Hover to preview accent line width transition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10 — Spacing / layout rhythm */}
        <section className="ds-section bg-background-secondary">
          <div className="ds-container">
            <SectionHeading
              title="Section rhythm & spacing"
              description="Depth through tonal variation — not identical black on every section."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                {[
                  { name: "Deep Black", hex: "#050505", use: "Hero, project sections" },
                  { name: "Primary Black", hex: "#0A0A0A", use: "Main canvas" },
                  { name: "Secondary Black", hex: "#111111", use: "Alternating sections" },
                  { name: "Surface", hex: "#171717", use: "Panels, features" },
                ].map((tone) => (
                  <div
                    key={tone.name}
                    className="flex items-center gap-4 p-4 rounded-md border border-border"
                    style={{ backgroundColor: tone.hex }}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-primary">
                        {tone.name}
                      </p>
                      <p className="text-xs text-text-muted">{tone.use}</p>
                    </div>
                    <p className="text-xs text-text-muted shrink-0">{tone.hex}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-md border border-border bg-surface p-6 md:p-8">
                <p className="ds-eyebrow text-brand-primary mb-3">Layout</p>
                <h3 className="ds-h3 text-text-primary mb-4">
                  Container & section spacing
                </h3>
                <ul className="space-y-3 ds-body-small text-text-secondary">
                  <li>Max width: 72rem (76rem at 1440px+)</li>
                  <li>Mobile padding: 1rem → 1.5rem → 2rem</li>
                  <li>Section padding: 3.5rem → 5rem → 6rem</li>
                  <li>Mobile-first responsive breakpoints</li>
                  <li>Touch targets: minimum 44px height</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background-deep">
        <div className="ds-container py-6">
          <p className="text-xs text-text-muted text-center">
            Design preview route — development review only. Not indexed for SEO.
          </p>
        </div>
      </footer>
    </div>
  );
}
