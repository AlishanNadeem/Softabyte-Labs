# Softabyte Labs — Design System

**Status:** ACTIVE — Theme migration (Dark Graphite + Cyan/Yellow)  
**Route:** `/design-preview/` (development review only, noindex)

---

## Theme migration summary

| Element | Previous | Current |
|---------|----------|---------|
| Foundation | Pure black / charcoal | Dark graphite layered surfaces |
| Primary accent | Electric Blue `#0077ED` | Cyan `#0CC0DF` |
| Secondary accent | *(none)* | Yellow `#FFDE59` (finishing highlight only) |
| Primary CTA | Flat `#0077ED` | Cyan → yellow brand gradient |
| Focus ring | Electric Blue | Cyan only (not gradient) |

**Deprecated from active brand styling:** `#0077ED`, `#0066D6`, and Electric Blue rgba values.

`--brand-primary` remains as an **alias** of `--brand-cyan` so existing Tailwind `brand-primary` classes map to cyan without scattering raw hex.

---

## Approved foundation

| Element | Value | Status |
|---------|-------|--------|
| Theme | Dark graphite / near black | ACTIVE |
| Primary accent | Cyan `#0CC0DF` | ACTIVE |
| Secondary accent | Yellow `#FFDE59` | ACTIVE |
| Primary gradient | Cyan → muted teal → yellow | ACTIVE |
| Heading font | Montserrat | APPROVED |
| Body / UI font | Poppins | APPROVED |

---

## Design direction

Premium dark technology theme with cyan as the main technology accent and yellow as a controlled finishing highlight. Gradients are strategic, not decorative wallpaper.

**Character:**
- Dark graphite layered backgrounds
- Cyan structural lighting and interactive accents
- Yellow as micro-highlight / endpoint / gradient finish
- Strong white/near-white headings
- Muted gray supporting copy
- Thin borders and technical line details
- Professional product-focused visuals
- Selective line icons
- Subtle motion (Phase 6.5)

**Must NOT feel like:** gaming, crypto, cyberpunk, neon dashboard, rainbow, cartoonish, overly colorful.

**Must NOT use:** Electric Blue (`#0077ED`), lime/acid greens, full-section rainbow fills, or animated large background gradients.

---

## Color hierarchy

Visual balance target (~70 / 20 / 10):
- **~70%** dark neutrals / graphite surfaces
- **~20%** cyan (eyebrows, active nav, icons on hover, focus, structural light)
- **~10%** yellow (gradient finish, final timeline nodes, tiny markers)

Cyan guides attention. Yellow finishes and differentiates — it must not dominate.

---

## Color tokens

### Dark foundation

| Role | CSS variable | Hex / value |
|------|--------------|-------------|
| Deep | `--background-deep` | `#050607` |
| Primary | `--background-primary` | `#080A0B` |
| Secondary | `--background-secondary` | `#0D1012` |
| Surface | `--surface` | `#111518` |
| Elevated surface | `--surface-elevated` | `#161B1E` |
| Soft surface | `--surface-soft` | `#0D1214` |
| Primary text | `--text-primary` | `#F5F7F7` |
| Secondary text | `--text-secondary` | `#A6ADB0` |
| Muted text | `--text-muted` | `#717A7E` |
| Border | `--border` | `#242B2E` |
| Strong border | `--border-strong` | `#343D41` |

### Brand

| Role | CSS variable | Hex / value |
|------|--------------|-------------|
| Cyan | `--brand-cyan` | `#0CC0DF` |
| Cyan hover | `--brand-cyan-hover` | `#0AADC9` |
| Cyan soft | `--brand-cyan-soft` | `rgba(12, 192, 223, 0.10)` |
| Cyan border | `--brand-cyan-border` | `rgba(12, 192, 223, 0.35)` |
| Yellow | `--brand-yellow` | `#FFDE59` |
| Yellow soft | `--brand-yellow-soft` | `rgba(255, 222, 89, 0.08)` |
| On-gradient text | `--brand-on-gradient` | `#071012` |
| Primary alias | `--brand-primary` | `var(--brand-cyan)` *(compat)* |

### Gradients

| Token | Value |
|-------|-------|
| `--brand-gradient` | `linear-gradient(120deg, #0CC0DF 0%, #2BC7D3 35%, #65D1B6 67%, #FFDE59 100%)` |
| `--brand-gradient-simple` | `linear-gradient(135deg, #0CC0DF 0%, #FFDE59 100%)` |
| `--brand-gradient-soft` | Soft translucent cyan→yellow wash for lighting only |

### Semantic (independent of brand)

| Role | CSS variable | Notes |
|------|--------------|-------|
| Error | `--color-error` | Keep semantic red — never brand yellow |
| Success | `--color-success` | Keep accessible green |

### Section rhythm

Alternate layered graphite tones so the site is not one endless black rectangle:

| Section type | Suggested background |
|--------------|---------------------|
| Hero | `#050607` → `#081012` (directional) |
| Standard | `#080A0B` |
| Features / services | `#0D1012` or `#111518` |
| Visual feature | Subtle dark directional gradient |
| CTA | `#0D1012` + cyan/yellow ambient light |
| Footer | `#050607` + thin gradient rule |

---

## Gradient usage rules

**Use gradients strategically on:**
1. Primary CTA buttons
2. Sparse hero text emphasis (`.ds-text-gradient` — one short phrase max)
3. Important visual borders (`.ds-gradient-border`)
4. Timeline / workflow accents
5. Technology-section micro details (thin rules)
6. Selected icons / finishing markers
7. Final CTA separator lighting
8. Thin decorative lines (`.ds-accent-line`, `.ds-brand-rule`)

**Do NOT** put gradients on every card, heading, icon, border, button, or background.

Large background gradients must remain **static** — no continuous `background-position` / rotation animation.

---

## Cyan usage

Good for: eyebrows, active nav, hover accents, focus rings, icons on hover, system/data paths in diagrams, structural lighting.

Body copy stays neutral. Do not cyan-wash paragraphs.

---

## Yellow usage

Good for: gradient finish, final timeline nodes, decision/output markers, tiny labels, small finishing accents.

**Do NOT** use `#FFDE59` for normal paragraphs or long text runs.

---

## Electric Blue usage (DEPRECATED)

`#0077ED` / `#0066D6` are **removed from active brand styling**.

Historical references in older docs may mention Electric Blue; treat them as superseded by this document.

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

### Primary (`.ds-btn--primary`)
- Background: `--brand-gradient` (cyan dominant → yellow finish)
- Text: `--brand-on-gradient` (`#071012`) for contrast on yellow end
- Hover: subtle gradient position shift + `translateY(-1px)` + slight brightness (~200ms)
- No pulse, heavy glow, or dramatic scale

### Secondary (`.ds-btn--secondary`)
- Dark transparent / graphite background
- Neutral strong border
- Hover: border toward cyan; text brightens
- **Never** gradient-filled

### Text link
- Default: white / secondary text
- Hover: cyan
- Optional tiny yellow finishing accent on important arrows only

---

## Panel / card system

- Background: graphite surfaces (`--surface` / `--background-secondary`)
- Border: `1px solid var(--border)`
- Radius: controlled (6px)
- Hover: border may shift toward cyan soft border
- Selected/important panels only: `.ds-gradient-border`
- Do **not** fill cards with cyan/yellow gradients

---

## Image rules

### Required production assets

| Asset | Path | Dimensions | Ratio | Purpose |
|-------|------|------------|-------|---------|
| Production logo | `/public/logo.png` | 1774 × 290 | wide | Header and footer brand mark |
| Hero visual | `/public/images/home/hero-visual.webp` | 1448 × 1086 | ~4:3 | Homepage hero — product UI visual |

**Logo note:** Current `logo.png` still uses Electric Blue accents. It remains usable on dark graphite, but a revised cyan/yellow brand mark is **recommended** (do not auto-recolor the raster).

Project screenshots and case-study imagery are **not** required until real work is published.

### Style
- High quality, professional, product-focused
- Dark frame; important frames may use gradient border
- Placeholders: dark surface + cyan corner mark / subtle yellow finish — not gradient-heavy fills
- Images may remain neutral/dark; backgrounds must not require cyan/yellow in every photo

---

## Icon rules

**Library:** `lucide-react`

- Outline style, stroke 1.75
- Default: muted gray / white
- Important / hover: cyan
- Selected highlight: optional cyan→yellow where practical; tiny yellow detail for active states
- Do not make every icon yellow
- Services/industries share one brand system (no arbitrary per-item colors)

---

## Timeline / workflow treatment

- Nodes: cyan
- Final / selected node: yellow
- Connectors: neutral dark lines
- Optional short active segment: cyan→yellow gradient
- AI sections: strongest cyan; yellow for human review / decision / output
- Infrastructure: restrained cyan nodes; yellow only for status/deployment accents

---

## Background / ambient treatment

Formula:
Dark graphite base + subtle surface variation + cyan structural lighting + very faint yellow secondary light + technical grid/line details on selected heroes.

- Hero: structured radial lights + faint grid (grid reduced/removed on mobile)
- Ambient glows: purposeful, static, fewer, lower opacity on mobile
- No random Electric Blue blobs
- No left-cyan / right-yellow split compositions

Utility classes: `.ds-hero-bg`, `.ds-bg-blur`, `.ds-brand-rule`, `.ds-cta-section`

---

## Animation rules

Preserve Phase 6.5 motion architecture. CSS only. No GSAP, Lenis, Framer Motion, Lottie, scroll hijacking.

| Pattern | Movement | Duration |
|---------|----------|----------|
| Fade + translate | 4–16px | 180–600ms |
| Hover lift | 1–2px | ~200–250ms |
| Arrow shift | 2–4px | ~200ms |
| Primary button gradient shift | background-position | ~180–240ms |
| Image reveal/zoom | subtle | ~300–400ms |
| Border transition | color | ~250ms |
| Line expansion | width | ~300ms |

Always respect `prefers-reduced-motion`.

Do **not** animate large background gradients continuously.

---

## Responsive / mobile

Mobile-first. Verified at: 320, 375, 390, 414, 768, 1024, 1280, 1440, 1920.

- Reduce decorative cyan/yellow lighting on small screens
- Hero grid pattern omitted under 768px
- CTAs stack; 44px minimum touch targets
- No horizontal overflow

---

## Accessibility

- Strong text contrast on graphite backgrounds
- Focus outlines: **cyan only** (functional, not decorative gradient)
- Gradient buttons use dark on-gradient text (`#071012`)
- Yellow never used for long body text
- Semantic error/success colors preserved
- Keyboard-friendly controls; reduced-motion support

---

## Performance

- CSS gradients only — no raster gradient images
- No JS for theme/gradients; no theme library; no new dependencies
- Server Components by default
- Fonts via `next/font/google`
- Static ambient lighting (no animated blur movement)

---

## Files

| Path | Purpose |
|------|---------|
| `app/globals.css` | Design tokens, gradients, surfaces, motion, theme utilities |
| `lib/fonts.js` | Montserrat, Poppins |
| `components/ui/*` | Button, TextLink, Panel, ImagePlaceholder, Tag, Reveal |
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
- Border: `1px solid var(--border)`
- Structure: Logo (left) · Navigation (center-right) · Primary CTA (right)
- Server Component shell with isolated client navigation modules
- Active / hover: cyan text; underline indicator uses simple brand gradient

### Logo

- Production asset: `/public/logo.png` via `next/image` (see Phase 3.2)
- Links to `/`
- Asset still contains legacy Electric Blue — revision recommended

### Desktop navigation

- Centralized in `config/navigation.js`
- Crawlable Next.js `<Link>` elements in rendered HTML
- Services + Industries dropdowns via isolated Client Component
- Primary links: Work, Process, About, Blog
- CTA: Start a Project → `/contact/`

### Services dropdown

- Numbered list (01–06) with short descriptions
- Cyan index numbers
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

- Deep graphite background with thin cyan→yellow gradient top rule (`.ds-brand-rule`)
- Brand area: logo, positioning statement, CTA
- Link columns: Services, Company, Industries, Resources
- Bottom row: copyright, Privacy Policy, Terms
- All six services and six industries linked for SEO internal linking

### Global CTA component

- Path: `components/sections/GlobalCTA.js`
- Server Component
- Props: `eyebrow`, `headline`, `description`, `primary_action`, `secondary_action`, `theme`, `ambient_glow`
- Themes: `dark` (default); legacy `blue` maps to dark graphite (flat brand fills removed)
- Optional ambient cyan/yellow lighting + thin gradient rule (`.ds-cta-section`)

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

- Background: dark graphite with structured cyan primary light + faint yellow secondary (`.ds-hero-bg`); existing BackgroundBlur assets unchanged
- Layout: ~51% content / ~45% visual on desktop; gap 64–80px at large breakpoints
- Mobile order: eyebrow → H1 → copy → primary CTA → secondary text link → visual
- Hero image: `/public/images/home/hero-visual.webp` (1448 × 1086, ~4:3)
- `next/image` with `priority`, responsive `sizes`, accurate width/height for CLS
- Visual: integrated surface (`.ds-home-hero-visual__surface`) — subtle shadow, thin corner accent only; no full gradient border frame
- Optional decorative float card (abstract interface bars, no metrics) — hidden on very small mobile
- H1: `Custom software and digital products for US businesses` — brand in header/logo, not repeated in H1 (updated Phase 11 hero refinement)
- Eyebrow: `Software • Product • Automation`

### Hero CTAs

- Primary: **Start a Project** → `/contact/` (brand gradient button, ~52px height)
- Secondary: **Explore our services** → `/services/` (text link, not a second heavy button)

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
| Hero | `#050607` → `#081012` |
| Capability strip | `#080A0B` |
| Services | `#0D1012` |
| What We Build | `#050607` |
| Why Softabyte | `#080A0B` |
| Industries | `#0D1012` |
| Process | `#080A0B` |
| AI & Automation | `#0D1012` |
| Insights | `#050607` |
| Global CTA | `#0D1012` |

### Brand accent usage (homepage)

Good: eyebrows, primary gradient CTAs, step numbers, selective cyan icons, links, frame accents, cyan hover borders, yellow on final timeline nodes  
Bad: every icon yellow, every heading gradient, large animated glows, full cyan/yellow section fills

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

