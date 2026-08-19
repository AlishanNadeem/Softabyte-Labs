# Design System

**Project:** Softabyte Labs  
**Phase:** 1 — Technical foundation  
**Status:** Active foundation (Phase 0 strategy remains frozen)

This document describes the implemented design system. Phase 0 SEO and architecture docs remain the source of truth for page strategy.

---

## 1. Typography

**Status:** ACTIVE (Phase 4.1A rollback — typography retained)

Production typography uses **Space Grotesk + Manrope** loaded via `next/font/google` in `app/layout.js`:

| Role | Font | CSS variable | Usage |
|---|---|---|---|
| Display / headings | **Space Grotesk** | `--font-space-grotesk` → `--font-family-heading` | Display, H1–H4, major editorial statements, hero H1 |
| Body / UI | **Manrope** | `--font-manrope` → `--font-family-body` | Body copy, navigation, buttons, labels, eyebrows, forms, footer supporting text |

**Space Grotesk** = confident editorial / display voice  
**Manrope** = readable interface / body voice

**Inter and Montserrat are not active.** Do not add external stylesheets or additional font families.

### Weight guidance

| Token | Class | Font | Weight |
|---|---|---|---|
| display | `.text-display` | Space Grotesk | 700 |
| h1 | `.text-h1` | Space Grotesk | 700 |
| h2 | `.text-h2` | Space Grotesk | 700 |
| h3 | `.text-h3` | Space Grotesk | 600 |
| h4 | `.text-h4` | Space Grotesk | 600 |
| body_large | `.text-body-large` | Manrope | 400 |
| body | `.text-body` | Manrope | 400 |
| body_small | `.text-body-small` | Manrope | 400 |
| eyebrow | `.text-eyebrow` | Manrope | 600, uppercase |
| label | `.text-label` | Manrope | 500 |
| button | `.text-button` | Manrope | 600 |

Use the `Heading` component for semantic heading levels. Do not scatter `font-family` declarations in components — assignments live in `styles/typography.css`.

### Line height & tracking

Tuned for Space Grotesk / Manrope metrics:

- Display/H1–H2: `--leading-display` 1.02, `--leading-heading` 1.06, `--tracking-tight` −0.025em
- Body: `--leading-body` 1.65 (comfortable for long-form blog content)
- Eyebrows: `--tracking-eyebrow` 0.12em
- Hero H1 scale: `--text-hero-h1` (HomeHero only)

---

## 2. Color tokens

**Status:** ACTIVE — Deep Navy + Electric Blue professional theme

> **REJECTED experimental directions:** Acid Lime (`#C7FF3D`), Burnt Orange (`#F05A28`), Deep Teal + Amber (`#0D2B2E` / `#FFB020`). These are not part of the active visual system.

Defined in `styles/tokens.css`. Mapped to Tailwind via `@theme` in `app/globals.css`.

### Core palette

| Role | CSS variable | HEX | Tailwind |
|---|---|---|---|
| Deep Navy (primary dark) | `--color-navy` / `--brand-ink` | `#0B1A2E` | `brand-ink` |
| Electric Blue (accent) | `--color-blue` / `--brand-accent` | `#0077ED` | `brand-accent` |
| Accent hover | `--brand-accent-hover` | `#0066D4` | `brand-accent-hover` |
| White (canvas) | `--color-white` | `#FFFFFF` | `background-primary` |
| Light cool neutral | `--color-neutral-light` | `#F5F7FA` | `background-secondary` |
| Soft gray (secondary text) | `--color-gray` | `#64748B` | `text-secondary` |
| Text on light | `--text-primary` | `#0B1A2E` | `text-primary` |
| Text on dark / on blue | `--text-inverse` | `#FFFFFF` | `text-inverse` |
| Dark surface | `--surface-dark` | `#0B1A2E` | `surface-dark` |

### Color roles

| Color | Role |
|---|---|
| **Deep Navy** | Primary dark brand surface, typography, dark sections, secondary button borders |
| **Electric Blue** | Primary accent — CTAs, links, hover states, eyebrow index, decorative geometry |
| **White** | Primary website canvas, header, hero background |
| **Light cool neutral** | Secondary surfaces, hover backgrounds, panels |
| **Soft gray** | Secondary text, quiet UI |

### Electric Blue restraint

Blue is an **accent**, not a base fill. Do **not** make the entire hero or header blue. Premium feeling comes from White + Deep Navy + typography. Blue creates emphasis in selective doses.

### Logo

Official asset: `public/logo.png`. **Do not modify the image file.**

The logo's navy/electric-blue colorway aligns with the restored professional theme.

---

## 3. Spacing

| Token | Value |
|---|---|
| xs | 0.25rem |
| sm | 0.5rem |
| md | 1rem |
| lg | 1.5rem |
| xl | 2rem |
| 2xl | 3rem |
| section | `clamp(3rem, 7vw, 5.5rem)` |
| section_compact | `clamp(2rem, 5vw, 3.5rem)` |
| section_large | `clamp(4rem, 9vw, 7rem)` |

Use the `Section` component spacing prop: `default`, `compact`, `large`.

---

## 4. Container

Component: `components/layout/Container.js`

- Max width: `--container-max` (72rem)
- Horizontal padding: `--container-padding` (`clamp(1rem, 4vw, 2rem)`)
- Optional `full_width` prop to break out of max-width constraint

---

## 5. Grid

Utility classes in `styles/grid.css`:

- `.grid-base` — base grid with gap
- `.grid-cols-1`, `.grid-cols-2-md`, `.grid-cols-3-md`, `.grid-cols-4-lg`
- `.grid-editorial` — asymmetrical two-column at lg+

Do not force every section into identical card grids.

---

## 6. Radius, borders, shadows

**Phase 4.1 philosophy:** Sharp or small controlled radii — avoid generic SaaS pill shapes.

| Token | Value |
|---|---|
| radius_sm | 0.125rem (2px) — buttons, badges |
| radius_md | 0.25rem (4px) |
| radius_lg | 0.375rem (6px) — rare |

Large 20–32px radii are **not** part of this system.

---

## 7. Buttons

Component: `components/ui/Button.js`

| Variant | Style |
|---|---|
| primary | Electric blue background, white text |
| ink | Deep navy background, white text |
| secondary | Transparent, deep navy border/text |
| ghost | Transparent, hover light neutral background |
| inverse | White background on dark contexts |

Minimum touch height: 44px on `sm`+ sizes. Sharp `radius-sm`.

---

## 8. Links

Component: `components/ui/TextLink.js` + `ArrowIcon`

| Variant | Use |
|---|---|
| inline | Body copy links with underline |
| nav | Navigation-style |
| action | Editorial CTA with ArrowUpRight + hover shift |

Do not add arrows to every link.

---

## 9. Section themes

`Section` component themes:

| Theme | Background | Use |
|---|---|---|
| light | White | Default |
| neutral | Light cool neutral | Alternating editorial sections |
| dark | Deep navy | Selective emphasis (services, footer-adjacent) |
| accent | Electric blue | Major CTA moments only |

Default experience is white + deep navy typography. Dark is strategic, not sitewide.

---

## 10. UI primitives

| Component | Path |
|---|---|
| Container | `components/layout/Container.js` |
| Section | `components/layout/Section.js` |
| Button | `components/ui/Button.js` |
| Heading | `components/ui/Heading.js` |
| Eyebrow | `components/ui/Eyebrow.js` |
| TextLink | `components/ui/TextLink.js` |
| Divider | `components/ui/Divider.js` |
| Badge | `components/ui/Badge.js` |

Not yet built (future phases): ServiceCard, CaseStudyCard, BlogCard, Header, Footer.

---

## 11. Responsive approach

Mobile-first. Container padding and typography scale with `clamp()`. Section spacing scales responsively.

Test breakpoints: 320, 375, 390, 414, 768, 1024, 1280, 1440, 1920px.

---

## 12. Accessibility

- Semantic HTML in layout and components
- Visible `:focus-visible` outlines (brand blue)
- Color contrast via navy/blue/white system
- Native button and link semantics preserved
- `prefers-reduced-motion` disables animations and smooth scroll
- Divider uses `role="separator"`

No unnecessary ARIA.

---

## 13. Motion principles

CSS-only transitions. Preferred properties: `opacity`, `transform`, `background-color`, `color`.

- Duration: `--duration-fast` (150ms), `--duration-normal` (250ms)
- No animation libraries in Phase 1
- No scroll hijacking, Lenis, or heavy parallax
- No animations that hide SEO content before JS

`prefers-reduced-motion: reduce` greatly simplifies or removes motion.

---

## 14. Performance rules

- Server Components by default
- No `"use client"` on foundation components
- Manrope + Space Grotesk via `next/font` (no render-blocking external stylesheet)
- Minimal global CSS; tokens centralized
- No unnecessary dependencies
- Core Web Vitals conscious: avoid layout shift from fonts, minimal JS

---

## 15. SEO infrastructure

| File | Purpose |
|---|---|
| `config/site_config.js` | Central site name, URL, description, locale |
| `lib/seo/metadata.js` | `createPageMetadata()`, `getCanonicalUrl()` |

Canonical production URL: `https://softabytelabs.com` (apex).

`next.config.mjs` — permanent www → apex redirect (308 in Next.js via `permanent: true`).

`trailingSlash: true` — non-slash paths permanently redirect to trailing-slash canonical form (e.g. `/about` → `/about/`).

Sitemap, robots, and structured data are future phases.

---

## 16. Code organization

```txt
app/           — routes and root layout
components/
  layout/      — Container, Section
  ui/          — Button, Heading, links, etc.
  sections/    — temporary preview only (Phase 1)
config/        — site_config.js
lib/
  seo/         — metadata helpers
  utils/       — cn()
styles/        — tokens, base, typography, grid
docs/          — planning + this file
```

---

## 17. Homepage (Phase 3)

`app/page.js` renders the production homepage. Content is code-managed in `config/homepage_content.js`. Section components live in `components/sections/home/`.

### Homepage patterns

| Pattern | Usage |
|---|---|
| Editorial numbered lists | Services (dark navy) and Industries sections |
| Sticky sidebar + list | Approach section on desktop (light) |
| Contained dark band | Industries section — multi-industry editorial index |
| Capability grid | Work section — honest pre-case-study presentation |
| Dark final CTA | `GlobalCTA` with `theme="dark"` + blue top border before footer |

### Homepage section rhythm (Phase 3.2)

Hero (light/mixed) → Intro (light) → Services (navy) → Approach (light) → Industries (navy) → Work (light) → Process (blue-tinted) → Insights (light) → CTA (navy) → Footer (navy)

### Homepage SEO

- One H1 per page (hero)
- Metadata via `createPageMetadata()` with keyword-map title/description
- Homepage owns brand/broad partner relevance; service keywords stay on service pages

---

## 19. Service pages (Phase 4)

`config/services_content.js` — code-managed content for hub + six services.

| Route | Component pattern |
|---|---|
| `/services/` | `ServicesHubPage` — editorial index, capability connections |
| `/services/[slug]/` | Composed per-service — shared primitives, distinct section order |

Shared primitives in `components/sections/services/`: `ServiceHero`, `ContentSplit`, `ProblemList`, `NumberedList`, `ComparisonSplit`, `IndustryCallout`, `FAQSection`, `RelatedServices`.

Each service page composes sections differently to avoid doorway-page repetition. Industry links are contextual (Ecommerce where relevant only). No MongoDB/CMS.

---

## 18. Global site shell (Phase 2)

### Configuration

| File | Purpose |
|---|---|
| `config/navigation.js` | Centralized nav links, services, industries, footer columns, primary CTA |
| `components/layout/Header.js` | Sticky global header (Server Component) |
| `components/layout/Footer.js` | Dark global footer (Server Component) |
| `components/layout/Logo.js` | Official `/public/logo.png` via `next/image` |
| `components/layout/DesktopNavigation.js` | Desktop nav with native `<details>` dropdowns (Server) |
| `components/layout/MobileNavigation.js` | Mobile slide panel (Client Component) |
| `components/sections/GlobalCTA.js` | Reusable CTA section — props-driven, not placed globally yet |

### Header (Phase 4.1A — active)

- Sticky, white background, neutral border
- Deep navy navigation text
- Electric blue hover underline on nav links
- Dropdowns: white surfaces, neutral borders, blue left-border on hover
- Primary CTA: electric blue background, white text, optional arrow
- Logo unchanged — aligns with navy/blue theme

### Homepage Hero (Phase 4.1A — active)

- Typography-first editorial composition — no dashboard/technical motifs
- White foundation, deep navy H1 (Space Grotesk), electric blue accent details
- Eyebrow: `01 / TECHNOLOGY PARTNER FOR US BUSINESSES` editorial index
- H1 spans substantial width (3–5 lines on desktop via `--text-hero-h1` + max-width)
- Supporting copy and CTAs in independent editorial column below H1
- Primary CTA: electric blue + white text; secondary: transparent + navy border
- Abstract decorative mark (`HeroEditorialMark`) — soft blue circle, navy lines, blue block
- Rejected concepts not restored: SystemCompositionVisual, capability dashboards, technical labels

### Desktop dropdown behavior

Services and Industries use native `<details>` / `<summary>` (Server Component, no JS):

- **Mouse:** Click summary to open/close; links inside navigate normally
- **Keyboard:** Enter/Space on summary toggles; Tab/Shift+Tab moves through links when open
- **Outside click / blur:** Does **not** close the menu (native `<details>` behavior). Close by toggling the summary again or opening the other dropdown (via shared `name="primary-nav"`)
- **Focus when closed:** Panel links are not in the tab order (browser hides closed `<details>` content)

### Mobile menu accessibility

- `role="dialog"` + `aria-modal="true"` while open
- `inert` when closed so panel links cannot receive focus off-screen
- Lightweight focus trap (`lib/utils/focus_trap.js`) while open — Tab cycles within the panel
- Escape, overlay click, and close button return focus to the menu trigger
- Body scroll lock is cleaned up on close and in effect cleanup

### Footer

- Deep navy background, white text, electric blue accents
- Columns: Brand, Services (6), Company, Industries, Resources
- Legal: Privacy Policy, Terms
- No fake address, phone, awards, or social links

### Active navigation

Deferred — no client-side route matching in Phase 2. Server Components prioritized.

### Internal linking

All nav/footer links are crawlable `<Link>` / `<a>` elements per Phase 0 architecture. Industry verticals are under Industries — not listed as services.

---

## 12. Visual language system

**Status:** FROZEN (Phase 4.1)

Full implementation reference: `config/icon_mappings.js`, `components/visuals/`, `styles/visual-motion.css`.

### Icon library

| Setting | Value |
|---|---|
| Library | **lucide-react** (single approved icon library) |
| Style | Outline / stroke, geometric, minimal |
| Default size | 20px (`default_icon_size`) |
| Compact size | 16px — industries, inline markers |
| Prominent size | 22px — homepage/services editorial rows |
| Default stroke | 1.75 (`default_icon_stroke`) |
| Color | Inherit via `currentColor`; Acid Lime used selectively |

**Do not install** Font Awesome, Material Icons, Heroicons, or additional icon libraries alongside Lucide.

### Service icon mapping

| Service | Lucide icon | Key |
|---|---|---|
| Custom Software Development | Blocks | `blocks` |
| Web Development | Monitor | `monitor` |
| Mobile App Development | Smartphone | `smartphone` |
| AI & Automation | Workflow | `workflow` |
| UI/UX Design | PenTool | `pen-tool` |
| Hosting & Infrastructure | CloudCog | `cloud-cog` |

Use `ServiceIcon` with `href` or `name`. Mapping lives in `config/icon_mappings.js`.

### Industry icon mapping (Phase 5B ready)

| Industry | Lucide icon | Key |
|---|---|---|
| Ecommerce & Retail | ShoppingBag | `shopping-bag` |
| Healthcare | HeartPulse | `heart-pulse` |
| Real Estate | Building2 | `building-2` |
| Transportation & Logistics | Truck | `truck` |
| Professional Services | BriefcaseBusiness | `briefcase-business` |
| Startups & SaaS | Rocket | `rocket` |

Use `IndustryIcon` with `href` or `name`. Do not implement industry pages until Phase 5B.

### Process stage icons

| Stage | Lucide icon | Key |
|---|---|---|
| Discover | Search | `search` |
| Plan | Map | `map` |
| Design | Layout | `layout` |
| Build | Code | `code` |
| Launch | Rocket | `rocket` |
| Improve | TrendingUp | `trending-up` |

Use `ProcessIcon` with `stage` prop matching stage title.

### Arrow usage

| Component | Usage |
|---|---|
| `ArrowIcon` | `ArrowUpRight` (default) or `ArrowRight` |
| `TextLink` variant `action` | Optional arrow via `show_arrow` (default true) |

Hover: 2–4px translate via CSS (`.group-action` + `.action-arrow`). No JavaScript.

**Do not** add arrows to every button — only action links and selective CTAs.

### Abstract visual system

Reusable inline SVG compositions in `components/visuals/abstract/`:

| Visual | Service / use |
|---|---|
| ModularSystemVisual | Custom Software |
| BrowserInterfaceVisual | Web Development |
| MobileLayersVisual | Mobile App Development |
| WorkflowNodesVisual | AI & Automation |
| WireframeLayoutVisual | UI/UX Design |
| InfrastructureTopologyVisual | Hosting & Infrastructure |
| CapabilitiesConnectionVisual | Services hub |
| HeroEditorialMark | Homepage hero (Phase 4.1A) |

Rendered via `ServiceVisual` with `slug` + `theme` (`light` | `dark`).

**Principles:**

- CSS + inline SVG only — no Canvas, WebGL, Three.js, Lottie, video
- One related visual family (grid, nodes, panels, frames, thin technical lines)
- Acid Lime accents on Ink or Warm White — not six unrelated styles
- Decorative visuals: `aria-hidden="true"`
- Server Components — no `"use client"` for decoration

### Micro-interactions (CSS only)

| Pattern | Implementation |
|---|---|
| Action arrow shift | `styles/visual-motion.css` — 3px translate on hover |
| Panel lift | `.interactive-panel` — 2px translateY on hover |
| Row hover | Subtle background tone on service/industry rows |
| Border accent | `hover:border-brand-accent/50` on panels |
| Transitions | 150–250ms via `--duration-fast` / `--duration-normal` |

### Motion accessibility

All decorative motion respects `prefers-reduced-motion: reduce`:

- Global transition suppression in `styles/base.css`
- Explicit `motion-reduce:transform-none` / `motion-reduce:transition-none` on icons and panels
- No scroll hijacking; native `scroll-behavior: smooth` on `html` only

### Visual signature (Phase 4.1A — active)

Recurring motifs in Header + Hero:

- White + Deep Navy base
- Electric Blue accents for numbers, eyebrows, CTAs, and interaction states
- Thin editorial lines and restrained geometric shapes
- Large Space Grotesk headings
- Asymmetric editorial layout (not 50/50 SaaS split)

Remaining homepage sections (Intro, Services, Approach, etc.) not yet visually redesigned — will follow after Header + Hero approval.

---

### When NOT to use icons

- Do not place an icon beside every paragraph or heading
- Do not use colorful icon circles (SaaS template cliché)
- Do not replace descriptive text with icons
- Do not add icons to primary CTA buttons by default
- Do not scatter Lucide imports across content config files — use centralized mappings

### Performance guardrails

- Lucide tree-shaken per icon import in wrapper components
- SVG/CSS only — no large image assets for decoration
- Visual components remain Server Components unless true interaction requires client JS
- FAQ keeps native `<details>` / `<summary>` — Plus/Minus icons are decorative indicators only

