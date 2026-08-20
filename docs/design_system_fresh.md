# Softabyte Labs — Design System (Phase 1)

**Status:** APPROVED — visual direction pending final sign-off on preview composition  
**Route:** `/design-preview/` (development review only, noindex)

---

## Approved foundation

| Element | Value | Status |
|---------|-------|--------|
| Theme | Black / Dark | APPROVED |
| Primary accent | Electric Blue `#0077ED` | APPROVED |
| Heading font | Montserrat | APPROVED |
| Body / UI font | Poppins | APPROVED |

---

## Design direction

Premium black technology theme with Electric Blue accent, clean white typography, and subtle charcoal surfaces.

**Character:**
- Black dominant background
- Dark charcoal panels
- Electric Blue highlights
- Strong white headings
- Muted gray supporting copy
- Thin borders
- Professional technology visuals
- Selective line icons
- Clean grid/layout
- Subtle animation
- Strong project imagery

**Must NOT feel like:** gaming, crypto, cyberpunk, neon dashboard, hacker website.

**Must NOT use:** lime, neon green, chartreuse, acid green, or any second bright accent.

---

## Color hierarchy

Visual balance target:
- **70–80%** black / dark neutrals
- **15–20%** white / gray typography
- **5–10%** Electric Blue accent

Electric Blue guides attention — it does not dominate every component.

---

## Color tokens

| Role | CSS variable | Hex / value |
|------|--------------|-------------|
| Primary black | `--background-primary` | `#0A0A0A` |
| Deep black | `--background-deep` | `#050505` |
| Secondary black | `--background-secondary` | `#111111` |
| Surface | `--surface` | `#171717` |
| Elevated surface | `--surface-elevated` | `#1C1C1C` |
| Primary text | `--text-primary` | `#F5F5F5` |
| Secondary text | `--text-secondary` | `#A3A3A3` |
| Muted text | `--text-muted` | `#737373` |
| Primary border | `--border` | `#262626` |
| Strong border | `--border-strong` | `#333333` |
| Electric Blue | `--brand-primary` | `#0077ED` |
| Electric Blue hover | `--brand-primary-hover` | `#0066D6` |
| Electric Blue soft | `--brand-primary-soft` | `rgba(0, 119, 237, 0.10)` |
| Electric Blue border | `--brand-primary-border` | `rgba(0, 119, 237, 0.35)` |

### Section rhythm

Alternate deep black, primary black, secondary black, and surface tones:

| Section type | Suggested background |
|--------------|---------------------|
| Hero | `#050505` |
| Standard | `#0A0A0A` |
| Features / services | `#111111` or `#171717` |
| Project | `#050505` |
| CTA | `#111111` |

---

## Electric Blue usage

Use strategically for:
- Primary buttons
- Important links
- Active navigation
- Section labels / eyebrows
- Selected icons
- Arrows
- Focus states
- Small borders and dividers
- Decorative lines
- Image frame accents
- Selected tags
- Hover states

Do NOT:
- Add blue glow or neon shadows
- Use blue gradients everywhere
- Put blue borders on every card
- Create full blue sections (except one strong CTA block later if needed)

---

## Typography — APPROVED

| Role | Font | CSS variable |
|------|------|--------------|
| Headings / Display | Montserrat | `--font-heading` |
| Body / UI | Poppins | `--font-body` |

Loaded via `next/font/google`. Semantic stacks: `--font-family-heading`, `--font-family-body`.

### Montserrat weights loaded

500, 600, 700, 800 (800 only where required)

### Poppins weights loaded

400, 500, 600

### Type roles

| Role | Class | Font | Weight |
|------|-------|------|--------|
| Display | `.ds-display` | Montserrat | 600 |
| H1 | `.ds-h1` | Montserrat | 600 |
| H2 | `.ds-h2` | Montserrat | 600 |
| H3 | `.ds-h3` | Montserrat | 600 |
| H4 | `.ds-h4` | Montserrat | 600 |
| Editorial | `.ds-editorial` | Montserrat | 500 |
| Body large | `.ds-body-large` | Poppins | 400 |
| Body | `.ds-body` | Poppins | 400 |
| Body small | `.ds-body-small` | Poppins | 400 |
| Eyebrow | `.ds-eyebrow` | Poppins | 600 |
| Label | `.ds-label` | Poppins | 500 |

---

## Button system

### Primary
- Background: `#0077ED`
- Text: white
- Hover: `#0066D6`
- No glow

### Secondary
- Background: transparent or `#111111`
- Border: `#333333`
- Text: `#F5F5F5`
- Hover: border toward Electric Blue

### Text link
- Default: white, hover Electric Blue
- Accent variant: Electric Blue

---

## Panel / card system

- Background: `#111111` or `#171717`
- Border: `1px solid #262626`
- Radius: controlled (6px)
- Shadow: minimal or none
- Hover: border transition, small translateY, optional blue detail

Used selectively — not as the default for every section.

---

## Image rules

### Required production assets

| Asset | Path | Dimensions | Ratio | Purpose |
|-------|------|------------|-------|---------|
| Production logo | `/public/logo.png` | 1774 × 290 | wide | Header and footer brand mark |
| Hero visual | `/public/images/home/hero-visual.webp` | 1448 × 1086 | ~4:3 | Homepage hero — product UI visual |

Project screenshots and case-study imagery are **not** required until real work is published. Do not use placeholder project images on the production homepage.

### Style
- High quality, professional, product-focused
- Dark frame, subtle border, blue micro-detail allowed
- Image scale on hover permitted
- Work remains the focus — no excessive overlay graphics

---

## Icon rules

**Library:** `lucide-react`

- Outline style, stroke 1.75
- Colors: white, muted gray, Electric Blue selectively
- No blue circles around every icon
- No icons beside every heading

---

## Animation rules

CSS only. No GSAP, Lenis, Framer Motion, Lottie, scroll hijacking.

| Pattern | Movement | Duration |
|---------|----------|----------|
| Fade + translate | 4–16px | 180–600ms |
| Hover lift | 2–4px | ~250ms |
| Arrow shift | 4px | ~200ms |
| Image reveal/zoom | subtle | ~300–400ms |
| Border transition | color | ~250ms |
| Line expansion | width | ~300ms |

Always respect `prefers-reduced-motion`.

---

## Responsive rules

Mobile-first. Verified at: 320, 375, 390, 414, 768, 1024, 1280, 1440, 1920.

- Hero headings wrap gracefully
- CTAs stack on mobile
- No horizontal overflow
- 44px minimum touch targets

---

## Accessibility

- Strong text contrast on dark backgrounds
- Visible focus states (Electric Blue outline)
- Semantic headings
- Keyboard-friendly controls
- Meaningful image placeholder labels
- Reduced-motion support

---

## Performance

- Server Components by default
- Fonts via `next/font/google`
- No heavy animation libraries
- No large image assets in preview

---

## Files

| Path | Purpose |
|------|---------|
| `app/globals.css` | Design tokens, typography, animations |
| `lib/fonts.js` | Montserrat, Poppins |
| `components/ui/*` | Button, TextLink, Panel, ImagePlaceholder, Tag |
| `components/layout/*` | Header, Footer, Logo, DesktopNavigation, MobileNavigation |
| `components/sections/GlobalCTA.js` | Reusable CTA section |
| `config/navigation.js` | Centralized navigation data |
| `app/design-preview/page.js` | Visual preview |
| `app/design-preview/layout.js` | noindex metadata |

---

## Pending approval

**Service layout direction:** editorial row vs restrained panel (both demonstrated on preview)

---

## Phase 2 — Global shell (APPROVED patterns)

### Header

- Sticky (`position: sticky; top: 0`) — no scroll-direction JS
- Background: `bg-background-deep/95` with subtle `backdrop-blur-sm`
- Height: 72px mobile / 80px desktop
- Border: `1px solid #262626`
- Structure: Logo (left) · Navigation (center-right) · Primary CTA (right)
- Server Component shell with isolated client navigation modules

### Logo

- Production asset: `/public/logo.png` via `next/image` (see Phase 3.2)
- Links to `/`

### Desktop navigation

- Centralized in `config/navigation.js`
- Crawlable Next.js `<Link>` elements in rendered HTML
- Services + Industries dropdowns via isolated Client Component
- Primary links: Work, Process, About, Blog
- CTA: Start a Project → `/contact/`

### Services dropdown

- Numbered list (01–06) with short descriptions
- Electric Blue index numbers
- View All Services → `/services/`
- Dark surface, thin border, controlled width (~22–26rem)

### Industries dropdown

- Six approved industries with concise descriptions
- View All Industries → `/industries/`
- No stock imagery in navigation

### Dropdown interaction

- Click/toggle (not hover-only)
- Keyboard: Enter, Space, Tab, Escape
- Outside click closes
- Only one dropdown open at a time
- Visible focus states

### Mobile navigation

- Right-side panel (max-width 384px)
- Menu / Close icons (Lucide)
- Collapsible Services and Industries sections
- Body scroll lock while open
- Lightweight focus trap (Tab cycle, Escape closes, focus returns to trigger)
- `inert` + `aria-hidden` when closed
- Overlay opacity transition + panel translateX (250–350ms)
- Respects `prefers-reduced-motion`

### Footer

- Deep black background with Electric Blue top line (single branded detail)
- Brand area: logo, positioning statement, CTA
- Link columns: Services, Company, Industries, Resources
- Bottom row: copyright, Privacy Policy, Terms
- All six services and six industries linked for SEO internal linking

### Global CTA component

- Path: `components/sections/GlobalCTA.js`
- Server Component — not placed on homepage yet
- Props: `eyebrow`, `headline`, `description`, `primary_action`, `secondary_action`, `theme`
- Themes: `dark` (default), `blue` (use sparingly)

### Phase 2 icons (Lucide)

- Menu, X, ChevronDown, ArrowUpRight, ArrowRight
- Selective use only — not on every nav link

### Navigation config

- Path: `config/navigation.js`
- Exports: `service_navigation`, `industry_navigation`, `primary_navigation`, `footer_navigation`, `primary_cta`, hub links
- snake_case for object properties and variables

### Server vs Client breakdown

| Component | Type |
|-----------|------|
| Header | Server |
| Footer | Server |
| Logo | Server |
| GlobalCTA | Server |
| DesktopNavigation | Client |
| MobileNavigation | Client |

---

## Phase 3.2 — Homepage visual refinement (APPROVED patterns)

### Production logo

- Asset: `/public/logo.png` (1774 × 290 PNG)
- Implementation: `next/image` in `components/layout/Logo.js`
- Rendered height: ~28px mobile / ~32px tablet / ~36px desktop (`h-7 sm:h-8 md:h-9`), width auto
- Preserve aspect ratio — do not stretch or recolor
- **Note:** The PNG includes generous surrounding black padding; if the header logo feels small, trim the asset rather than distorting with CSS
- `priority` only on homepage hero image (single LCP candidate) — not on logo

### Homepage hero

- Background: `#050505` with subtle radial depth (`.ds-hero-bg`) — black dominant, faint blue illumination near visual
- Layout: ~54% content / ~46% visual on desktop (`lg:grid-cols-[54fr_46fr]`)
- Mobile order: eyebrow → H1 → copy → CTAs → image
- Hero image: `/public/images/home/hero-visual.webp` (1448 × 1086, ~4:3)
- `next/image` with `priority`, responsive `sizes`, accurate width/height for CLS
- Frame: subtle border, 6px radius, restrained shadow, `.ds-frame-accent` corner detail, optional `.ds-image-zoom` on hover
- No placeholder boxes, glow, floating labels, or fake statistics
- H1 is frozen per `keyword_map.md` — do not change without SEO approval

### Hero CTAs

- Primary: **Start a Project** → `/contact/` (Electric Blue)
- Secondary: **Explore Services** → `/services/` (truthful while `/work/` has no published case studies)

### Capability strip

- Compact horizontal strip between hero and services
- Thin border container, divided cells, optional muted Lucide icons
- Not large cards

### What We Build (replaces Featured Work)

- **Policy:** No fake projects, client names, or case-study implications on the homepage
- Section demonstrates capability types — not completed customer work
- Layout: one large featured panel + two supporting panels
- CSS-only conceptual interface visuals (`.ds-capability-visual*`) — lightweight, clearly abstract
- Each panel links to a relevant service page
- When genuine case studies are approved, this section can evolve into Featured Work
- `/work/` remains in site architecture but is not promoted via misleading CTAs

### Services & industries

- Services: editorial list rows with numbers, selective icons, arrow links
- Industries: editorial numbered grid (2 col tablet / 3 col desktop), no industry hero image on homepage

### Process

- Horizontal six-step sequence on desktop (`.ds-process-track`)
- Stacked on mobile
- Numbers + thin progression detail — not six generic cards

### AI & Automation

- Split layout with copy + CSS workflow visual (`.ds-ai-visual*`)
- No robot/brain imagery; separate image not required in Phase 3.2

### Insights

- Truthful “coming soon” with planned topic themes
- Intentional two-column layout — not an empty placeholder box

### Section rhythm

| Section | Background |
|---------|------------|
| Hero | `#050505` |
| Capability strip | `#0A0A0A` |
| Services | `#111111` |
| What We Build | `#050505` |
| Why Softabyte | `#0A0A0A` |
| Industries | `#111111` |
| Process | `#0A0A0A` |
| AI & Automation | `#111111` |
| Insights | `#050505` |
| Global CTA | `#111111` |

### Electric Blue usage (Phase 3.2)

Good: eyebrows, primary CTAs, step numbers, selective icons, links, frame accents, hover borders  
Bad: every icon, every heading, large glow, full blue backgrounds

### Icon policy (homepage)

- Lucide only, stroke 1.75
- Target ~6–12 meaningful icons across the full homepage
- Icons secondary to typography — not beside every heading

### Animation (Phase 3.2)

- Existing `Reveal` component — progressive enhancement only; content visible without JS
- CSS transitions: hover lift, arrow shift, image zoom, border color
- Durations 200–600ms; respect `prefers-reduced-motion`
- No new animation libraries

---

## Motion system (Phase 6.5)

**Decision:** Native CSS + shared IntersectionObserver. No animation library.

**Philosophy:** Better motion, not more motion. Premium, controlled, transform/opacity only. Native browser scrolling.

### Tokens

| Token | Value |
|-------|-------|
| `--motion-duration-fast` | 220ms |
| `--motion-duration-normal` | 680ms |
| `--motion-duration-slow` | 820ms |
| `--motion-ease-standard` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--motion-distance` | 20px |
| `--motion-distance-sm` | 14px |
| `--motion-scale-from` | 0.985 |

### Variants

| Variant | Use |
|---------|-----|
| `fade_up` | Default scroll reveal |
| `fade_in` | Images, tech rows, calm panels |
| `fade_down` | Optional / rare |
| `slide_left` / `slide_right` | Split sections (desktop); mobile falls back to fade_up |
| `scale_in` | Major visuals / form panel |

### API

```jsx
<Reveal>…</Reveal>
<Reveal variant="fade_in">…</Reveal>
<Reveal variant="slide_left" delay={80}>…</Reveal>
<Reveal stagger_index={index}>…</Reveal>
```

Stagger step: 70ms · Max delay: 350ms · Animate once.

### Hero entrance

CSS-only `.ds-hero-entrance` (no IntersectionObserver). Sequence ~0 / 40 / 60 / 120 / 180–200ms. H1 readable immediately.

### Progressive enhancement

1. Inline script adds `html.js` early
2. Without JS: content fully visible
3. With JS: pending reveals start hidden, then animate once into view
4. No flash-hide-reveal hydration pattern

### CSS still owns

Buttons, links, arrows, inputs, focus rings, marquee, ambient glows (static), nav hover.

### Reduced motion

`prefers-reduced-motion: reduce` → content immediate, no translate/stagger/scale, marquee stopped.

### Density

Animate heroes, major sections, visuals, structured lists, timelines, CTAs. Do not animate breadcrumbs, every paragraph, FAQ items, or every tech pill.

### Image requirements (Phase 3.2)

| Asset | Required | Path |
|-------|----------|------|
| Production logo | Yes | `/public/logo.png` |
| Hero visual | Yes | `/public/images/home/hero-visual.webp` |
| Project screenshots | No | Until real case studies exist |
| Industries visual | No | Not used on homepage |
| AI visual | No | CSS composition used |

### Optional future assets

- `/public/images/home/ai-automation.webp` (1200 × 900, 4:3) when a real visual is approved
- `/public/images/home/industries-visual.webp` only if composition genuinely improves a future layout
- Project images under `/public/images/work/` when case studies are published

