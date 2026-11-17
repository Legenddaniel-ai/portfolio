---
name: Obsidian Kinetic
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#1bbd85'
  on-tertiary-container: '#00452e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
typography:
  display:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system positions software engineer Ayomide Daniel as a precise, modern, and forward-thinking technical craftsman. The aesthetic balances engineering discipline with digital kinetic energy—combining the pragmatic stability of enterprise-ready web architectures (PHP, JavaScript, Bootstrap) with forward-looking interface polish.

The style marries refined dark minimalism with delicate glassmorphism and ambient luminous accents. It avoids decorative clutter in favor of crisp technical hierarchy, code-aware presentation, high-contrast readability, and micro-interactions that communicate tactile responsiveness.

## Colors
The palette leverages a dark-first foundation rooted in deep obsidian tones, punctuated by high-energy accents:

- **Primary (`#06b6d4` - Electric Cyan):** Anchors primary actions, terminal links, interactive focus states, and tech badges.
- **Secondary (`#8b5cf6` - Electric Violet):** Powers secondary accents, subtle interactive gradients, feature highlights, and project category tags.
- **Tertiary (`#10b981` - Emerald Matrix):** Reserved for live status indicators, production deployment metrics, and successful build states.
- **Neutral (`#090d16` - Deep Obsidian):** Provides a dark, glare-reducing canvas for technical typography.

### Theme Adaptability
- **Dark Mode (Default):** Canvas uses `#090d16`. Card surfaces utilize obsidian glass layers (`rgba(17, 24, 39, 0.65)`) with subtle cyan/violet specular boarders. Text renders in optical crisp white (`#f8fafc`) and muted slate (`#94a3b8`).
- **Light Mode:** Canvas transitions to pure snow-slate (`#f8fafc`), surfaces map to crisp white (`#ffffff`) with 1px border definitions (`#e2e8f0`), text anchors to deep ink (`#0f172a`), and primary colors shift slightly deeper (`#0891b2` and `#7c3aed`) to preserve WCAG AAA contrast ratios.

## Typography
Typographic rhythm leverages **Inter** for human-centric readability and bold display statements, alongside **JetBrains Mono** for architectural metadata, stack tokens, git badges, and technical annotations.

- All section titles and interactive action labels in uppercase receive deliberate positive tracking (`+0.05em`) in `JetBrains Mono`.
- Body copy in `Inter` maintains open line-heights (1.6x) for effortless scanning through project case studies and code walkthroughs.

## Layout & Spacing
The layout adheres to a 12-column responsive fluid grid constrained to a `1200px` max outer container to avoid fatigue across ultrawide developer displays.

- **Desktop (>= 1024px):** 12 columns, 1.5rem gutters, 2rem section padding. Multi-column showcase cards (e.g., 6/6 split or 4/4/4 showcase).
- **Tablet (768px - 1023px):** 8 columns, 1.25rem gutters, 1.5rem margins. Reflows split content to balanced vertical modules.
- **Mobile (< 768px):** 4 columns, 1rem gutters, 1.25rem margins. Stack all asymmetric technical sidebars, case cards, and stat callouts into a single vertical sequence.

## Elevation & Depth
Depth is constructed through frosted glass luminescence rather than heavy opaque drop shadows:

- **Surface Layer 0 (Canvas):** Solid `#090d16`.
- **Surface Layer 1 (Card & Module Shells):** Translucent fill `rgba(15, 23, 42, 0.7)` with `backdrop-filter: blur(16px)` and a hairline border of `rgba(255, 255, 255, 0.08)`.
- **Surface Layer 2 (Hover & Modal Overlay):** Translucent fill `rgba(30, 41, 59, 0.85)` accompanied by an ambient colored halo: `box-shadow: 0 12px 32px -8px rgba(6, 182, 212, 0.15), 0 4px 16px -4px rgba(139, 92, 246, 0.1)`.
- **Light Theme Adaptation:** Background surfaces switch to `rgba(255, 255, 255, 0.85)` with `box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.06)` and sharp borders (`rgba(15, 23, 42, 0.08)`).

## Shapes
Roundedness level `2` sets structural components to `0.5rem` (8px), project cards and modals to `rounded-lg` (`1rem` / 16px), and high-level section shells to `rounded-xl` (`1.5rem` / 24px). 

Interactive pills (technology chips, status indicators, and micro-buttons) adopt full pill shapes (`rounded-full` / 9999px) to contrast against angular code panels.

## Components

### Buttons
- **Primary:** Solid electric cyan-to-violet subtle gradient fill (`linear-gradient(135deg, #06b6d4, #8b5cf6)`), dark obsidian text (`#090d16`), semi-bold `Inter`, with hover expansion and cyan glow.
- **Secondary / Glass:** Translucent backdrop (`rgba(255, 255, 255, 0.05)`), hairline border (`rgba(255, 255, 255, 0.15)`), white text (`#f8fafc`). On hover: border tints to `#06b6d4` with `color: #06b6d4`.
- **Icon / Action:** Square `40px` tap targets with `rounded-md` radius and central SVG alignment.

### Chips & Badges
- **Stack Badges (PHP, JS, CSS, Bootstrap):** Monospace `JetBrains Mono` at `label-sm`, inset padding (`4px 10px`), rounded pill silhouette, subtle tinted border (`rgba(6, 182, 212, 0.3)`), and background `rgba(6, 182, 212, 0.08)`.
- **Status Indicator:** Pill container with an animated emerald pulse dot communicating "Available for hire" or "System Online."

### Cards (Project & Experience)
- Constructed with Surface Layer 1 frosted styling.
- Headers integrate tech stack tags alongside project titles.
- Transition `0.25s cubic-bezier(0.16, 1, 0.3, 1)` on hover: `-translate-y-1` elevation lift with glowing border gradient shifting between cyan and violet.

### Input Fields & Contact Elements
- Dark slate fill `rgba(15, 23, 42, 0.6)` with inset borders (`1px solid rgba(255, 255, 255, 0.1)`).
- On focus: crisp border tint to `#06b6d4` with zero displacement outline (`box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.2)`).
- Typography switches to `JetBrains Mono` for inputs like email and message fields to reinforce technical precision.

### Code & Terminal Blocks
- Deep obsidian container (`#030712`) framing code snippets and stack architectures.
- Header toolbar features faux macOS status dots (red, yellow, green) paired with current file name label (`script.js`, `index.php`) set in `label-sm`.