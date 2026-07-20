---
version: alpha
name: scottmccracken.net
description: Terminal-inspired personal-site design system — warm cream paper in light mode, a true terminal in dark mode, deep green interactive accents, and a monospace UI voice.

colors:
  background: "#F2EDE3"
  surface: "#FBF8EF"
  surface-muted: "#EDE8DC"
  ink: "#16191F"
  ink-muted: "#63676D"
  primary: "#1E7B33"
  on-primary: "#FBF8EF"
  primary-tint: "#E2F0DA"
  terminal: "#131720"
  on-terminal: "#C9CDD5"
  terminal-green: "#4EA85C"
  border-strong: "#16191F"
  border-soft: "#DDD7C9"
  success: "#57A64E"
  warning: "#E8B93E"
  error: "#E5564D"
  dark-background: "#0C1117"
  dark-surface: "#161C24"
  dark-surface-muted: "#1D242E"
  dark-ink: "#E6E9ED"
  dark-ink-muted: "#97A0AB"
  dark-primary: "#4EBB5C"
  dark-primary-button: "#1F8636"
  dark-on-primary: "#FFFFFF"
  dark-primary-tint: "#15271B"
  dark-border-soft: "#242C36"

typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.02em
  heading-2:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.01em
  heading-3:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
  body-mono:
    fontFamily: IBM Plex Mono
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
  meta-mono:
    fontFamily: IBM Plex Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-mono:
    fontFamily: IBM Plex Mono
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.01em

rounded:
  none: 0px
  sm: 6px
  md: 10px
  lg: 14px
  full: 999px

spacing:
  2xs: 4px
  xs: 8px
  s: 12px
  m: 16px
  l: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  5xl: 128px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.sm}"
    padding: 14px 20px
    height: 44px
  button-primary-hover:
    backgroundColor: "#186329"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.sm}"
    padding: 14px 20px
    height: 44px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.sm}"
    padding: 14px 20px
    height: 44px
  status-pill:
    backgroundColor: "{colors.primary-tint}"
    textColor: "{colors.primary}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.sm}"
    padding: 6px 12px
  chip:
    backgroundColor: "{colors.primary-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.meta-mono}"
    rounded: "{rounded.sm}"
    padding: 6px 14px
  chip-neutral:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.meta-mono}"
    rounded: "{rounded.sm}"
    padding: 6px 14px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.meta-mono}"
    rounded: "{rounded.md}"
    padding: 24px
  card-header:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.meta-mono}"
    rounded: "{rounded.md} {rounded.md} 0 0"
    padding: 10px 16px
  terminal-panel:
    backgroundColor: "{colors.terminal}"
    textColor: "{colors.on-terminal}"
    typography: "{typography.meta-mono}"
    rounded: "{rounded.md}"
    padding: 24px
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.meta-mono}"
    padding: 8px 4px
---

# scottmccracken.net Design System

## Overview

Personal site for Scott McCracken, a front-end developer with twenty-three years of experience. The whole page is built on a terminal metaphor — `$` prompts as section eyebrows, cards styled as files (`~/about.md`), a `git log` employment timeline — rendered warmly rather than coldly. Light mode is cream paper with a garden-green accent; dark mode drops the paper conceit and *becomes* the terminal: near-black screen, brighter greens, flat panels. The intended feel is *playful, tactile, and credible* — a developer's desk, not a startup landing page. Anti-patterns to guard against: sliding into generic SaaS minimalism (pure white, soft gray shadows, blue links), or overplaying the hacker theme into neon-on-black Matrix cliché — even dark mode keeps its greens muted-natural, not fluorescent.

## Colors

Two full modes, one accent hue. **Light** is warm paper: `background` (`#F2EDE3`), `surface` (`#FBF8EF`) lifting cards, `surface-muted` (`#EDE8DC`) receding for title-bars — with `ink` for text and structure, `primary` (`#1E7B33`) as the only hue, and `terminal` as an inverted island for the whoami window and footer. **Dark** (the `dark-` tokens) inverts the metaphor — the page *is* the screen: `dark-background` (`#0C1117`), cards on `dark-surface` (`#161C24`), and the terminal island simply merges into the page. Green splits into two roles in dark mode: `dark-primary` (`#4EBB5C`) for links, prompts, and pill text, and `dark-primary-button` (`#1F8636`) as the filled button that carries `dark-on-primary` white. Every text/background pair in both modes is verified at **≥ 4.5:1** (WCAG AA for normal text — exceeding the 3:1 floor, since nearly all UI text here is small mono): the tightest pairs are `primary` on `primary-tint` (4.50), `ink-muted` on `surface-muted` (4.65), and white on `dark-primary-button` (4.64); everything else clears 5:1. When adjusting any color, re-verify its pairs before shipping. The traffic-light trio doubles as the semantic set (`success` / `warning` / `error`) and is shared across modes. Never introduce a second accent hue.

## Typography

Two voices, strictly cast. Headings use Space Grotesk — a grotesque with just enough quirk in its letterforms to feel personal — in the 500–700 weight range: 700 for `display` and `heading-2`, 600 for `heading-3` job titles. Everything else — body copy, navigation, cards, labels, buttons — speaks in IBM Plex Mono, which *is* the brand: the monospace body makes the terminal metaphor land without a single illustration. `body-mono` runs a generous 1.7 line-height because monospace at 16px needs air to stay readable in paragraphs. Section headings may mix voices (`$ git log` in mono followed by bold Space Grotesk), always mono-first. If either font is unavailable, substitute within the same class (a characterful grotesque; a humanist monospace) — never fall back to a serif or a default UI sans for body text.

## Layout

A single centered column, max-width around 1040px, with generous vertical rhythm: sections separated by `4xl`–`5xl` (96–128px), card grids gapped at `l` (24px), and text blocks flowing at `m`. The spacing scale is a plain 4px-based ladder; when in doubt, pick the larger step — the design reads calm because it never crowds. Cards sit in simple 2–3 column grids that collapse to one column on small screens. In light mode the dark footer runs inside the content column (inset from the viewport edge), reinforcing the object-on-paper feel; in dark mode the footer is delimited by a `dark-border-soft` rule instead, since there is no paper to sit on.

## Elevation & Depth

Depth is mode-dependent but never blurred. **Light:** pressable controls carry a 2px `border-strong` outline plus a solid `3px 3px 0` shadow in the same ink — the neo-brutalist "physical key" look; on hover they translate 1–2px toward the shadow, on press they sit flush. Cards are flat: a 1px `border-soft` hairline on a `surface` fill. **Dark:** the hard shadows and ink outlines disappear — a screen has no physical keys — so buttons become flat fills, cards separate by surface contrast plus a 1px `dark-border-soft` hairline, and hover states communicate through background shifts and underlines instead of movement. In neither mode does a soft blurred drop-shadow ever appear.

## Shapes

Corners are consistently *slightly* rounded: `sm` (6px) for buttons, pills, and chips, `md` (10px) for cards and terminal panels — friendly but still crisp enough to feel drawn with a ruler. Nothing is fully circular except the traffic-light dots and timeline markers. Draft-state objects (like `skiing.draft.txt|`) may use a dashed outline on a transparent fill to read as "not shipped yet." The status pill in dark mode gains a 1px `dark-primary` outline on its `dark-primary-tint` wash, since the wash alone is too subtle against the dark page. Avoid both extremes: no sharp 0px corporate edges, no 20px+ blobby friendliness.

## Components

`button-primary` is the green key — mono label, and in light mode the ink border + hard shadow; in dark mode a flat `dark-primary-button` fill with white text — used at most once or twice per view. `button-secondary` is its cream sibling for supporting actions and *stays cream in both modes*, which makes it pop pleasingly on dark; both buttons may carry a trailing glyph (`↗`, an emoji). `status-pill` and `chip` are the same small mono capsule at two intents: green-tinted for live/current things, `chip-neutral` for todos and archives; in dark mode their tints swap to `dark-primary-tint` and `dark-surface-muted`. `card` always pairs with `card-header`: a muted title-bar showing a file path (`~/about.md`), then the flush body — the header sells the file metaphor, so don't ship a card without one. `terminal-panel` is the inverted window in light mode (traffic-light dots, `$`-prompted lines in `terminal-green`); in dark mode it renders on `dark-surface` like every other card, keeping its dots and prompts. `nav-link` renders as `./page` in mono — `ink` in light mode, `dark-primary` green in dark mode per the mockup — underlined only on hover. The employment timeline is composed from existing pieces: a `chip-neutral` commit tag, a `heading-3` title with a green employer link, `meta-mono` dates, and `body-mono` description down a 2px rail.

## Do's and Don'ts

**Do:**
- Keep all UI copy in the terminal voice — `$` prompts, file paths, flags (`cat --full`) — and keep it consistent.
- Use the green strictly for interactive or "live" things: buttons, links, prompts, current status.
- In light mode, give every pressable control the ink border + hard offset shadow with the hover-translate; in dark mode, keep controls flat and shift backgrounds instead.
- Verify every new text/background pair at ≥ 4.5:1 in both modes before shipping (3:1 is the absolute floor for large text and UI graphics only).
- Reserve `terminal` dark islands for at most two per page in light mode.
- Let monospace body text breathe: 1.7 line-height, ~60ch max measure.

**Don't:**
- No gradients, no blurred shadows, no glassmorphism — depth is borders, hard offsets (light), and surface contrast (dark).
- Never use pure `#FFFFFF` or `#000000` as a page or card surface; the only pure white permitted is `dark-on-primary` button text, which needs it for contrast.
- Don't add a second accent hue; the traffic-light colors stay decorative or semantic, never branding.
- Don't set body copy in Space Grotesk, or headings in mono at large sizes.
- Don't let dark mode go neon: `dark-primary` is a garden green, not a phosphor green.
- Don't ship a card without its title-bar header, or a light-mode button without its shadow — half-applied treatments break the illusion.
