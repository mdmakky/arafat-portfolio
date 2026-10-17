---
name: Arafat
description: A developer's desk at home in Jashore, drawn once at the top, then a calm, content-first page.
colors:
  accent-pink: "#d6336c"
  accent-pink-night: "#ff5c93"
  link-blue: "#2f6fde"
  link-blue-night: "#7fb0ff"
  paper-bg: "#fbfaf7"
  paper-bg-night: "#0e1015"
  ink: "#1d2433"
  ink-night: "#eef0f5"
  ink-soft: "#4a5468"
  ink-soft-night: "#c3c8d4"
  ink-mute: "#6b7487"
  ink-mute-night: "#8d94a5"
  pill-fill: "#f0eee8"
  pill-fill-night: "#181b22"
  pill-edge: "#e2dfd6"
  pill-edge-night: "#2a2f3a"
  wall-top: "#e4ecf4"
  wall-top-night: "#141b28"
  wall-bottom: "#d3dfeb"
  wall-bottom-night: "#0f1520"
  desk-wood: "#c48a57"
  desk-wood-night: "#5a3c26"
  desk-wood-edge: "#a8703f"
  desk-wood-edge-night: "#3f2a1b"
  object-dark: "#2d3a4a"
  object-dark-night: "#05080d"
  window-frame: "#ffffff"
  window-frame-night: "#2a3446"
  nav-ink: "#13213a"
  nav-ink-night: "#e9eef8"
typography:
  display:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "clamp(36px, 5.4vw, 56px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "clamp(24px, 2.4vw, 28px)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 700
  pill:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.85em"
    fontWeight: 500
  bangla:
    fontFamily: "Hind Siliguri, Figtree, sans-serif"
    fontWeight: 600
rounded:
  cell: "3px"
  code: "5px"
  pill: "8px"
  button: "10px"
  card: "14px"
  full: "999px"
spacing:
  pill-gap: "8px"
  gutter: "20px"
  item: "48px"
  section: "56px"
  columns: "clamp(32px, 6vw, 90px)"
  content-max: "1080px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-bg}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "10px 18px"
  button-ghost:
    backgroundColor: "{colors.pill-fill}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "10px 18px"
  pill-tag:
    backgroundColor: "{colors.pill-fill}"
    textColor: "{colors.ink}"
    typography: "{typography.pill}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  status-card:
    backgroundColor: "{colors.pill-fill}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.card}"
    padding: "18px 20px"
  inline-code:
    backgroundColor: "{colors.pill-fill}"
    typography: "{typography.mono}"
    rounded: "{rounded.code}"
    padding: "1px 6px"
---

# Design System: Arafat

## Overview

**Creative North Star: "The Desk at Home"**

The identity is one illustration: a developer's desk in a Bangladeshi home, with a laptop typing its own code, a glass of cha that steams and can be sipped, a red khata and pen, a lamp, plants, a bookshelf, and a window onto a coconut palm under sun or moon. The desk sits full width at the top of the home page on a band of soft wall blue. Everything below it is quiet: warm paper background, deep ink text, pink section headings, blue for subtitles and hover. The page reads like a person's notebook, not a product launch.

Density is relaxed. Content sits in one centred column up to 1080px, split into a wide project column and a narrower sidebar on desktop. Playfulness lives in two places only: the desk scene, and the small spring overshoot when you hover a link arrow, a pill, a button, or the theme toggle. Night mode is part of the world, not a filter: the lamp beam comes on, stars appear in the window, the sun turns into a moon, and the wood and wall go dark.

The user rejected 3D, a terminal look, and anything that resembles a mobile-app landing page. The friendly tone takes after joshwcomeau.com without copying it.

**Key Characteristics:**
- One illustrated desk scene as the identity; the rest of the page stays plain and readable.
- Two full palettes (day and night), both set as custom properties and switched by `data-theme` on the root.
- A single sans family (Figtree) used at heavy weights for headings, with Hind Siliguri for বাংলা.
- Pink headings, blue secondary text and hover states, ink body copy.
- Flat surfaces. Depth comes from soft tinted fills and hairline edges.
- Spring-eased hover feedback; all ambient motion stays inside the desk.

## Colors

Warm paper and deep blue-grey ink, with one pink and one blue accent, plus a set of scene colors that belong only to the illustration.

### Primary
- **Lamp-Shade Pink** (`accent-pink`, night `accent-pink-night`): every section heading (h2), the dot in the "arafat." wordmark, the inline বাংলা word in the intro, list markers on project pages, text selection, and the lamp shade in the scene. It marks structure and personality; it is never used for body text.

### Secondary
- **Link Blue** (`link-blue`, night `link-blue-night`): project subtitles and taglines, hover color on links and project titles, the keyboard focus ring, and the four-step GitHub contribution ramp (mixed 30/55/80/100% into the background).

### Neutral
- **Warm Paper** (`paper-bg`, night `paper-bg-night`): the page background and the strip where the scene meets the page.
- **Desk Ink** (`ink`, night `ink-night`): headings, bold callouts, primary button fill.
- **Soft Ink** (`ink-soft`, night `ink-soft-night`): paragraph text in projects, the intro, and project-page sections.
- **Muted Ink** (`ink-mute`, night `ink-mute-night`): footer, timestamps, legend counts, non-link list arrows.
- **Pill Fill / Pill Edge** (`pill-fill`, `pill-edge`, plus night variants): the shared fill and 1px edge for pills, the status card, inline code, ghost buttons, empty contribution cells; the edge color also draws the section and footer divider lines.

### Scene
- **Wall Blue** (`wall-top` to `wall-bottom`): the vertical gradient behind the desk and nav. The light `wall-top` value is also the browser `theme-color`.
- **Desk Wood** (`desk-wood`, `desk-wood-edge`): the desk top, its front edge, and the shelf.
- **Object Dark** (`object-dark`): laptop body, lamp arm and base, pen.
- **Window Frame** (`window-frame`) and **Nav Ink** (`nav-ink`): the window frame, and the text color of the nav that sits on the wall.
- Sky, distant palm, steam, sun, bulb and glass-outline tokens exist as custom properties so the scene repaints for night. They are used once each, inside the illustration only.

### Named Rules
**The Two Palettes Rule.** Every color a surface uses must be a custom property with both a day value on `:root` and a night value on `:root[data-theme="dark"]`. Hard-coded colors are allowed only for fixed objects inside the illustration (books, plants, khata, laptop screen code).

**The Pink Is For Headings Rule.** Pink marks section headings and small identity details (wordmark dot, বাংলা, list markers). Blue handles interaction. Don't swap them.

## Typography

**Display Font:** Figtree (with system-ui, sans-serif)
**Body Font:** Figtree
**Label/Mono Font:** JetBrains Mono for inline code only; Hind Siliguri (600) for Bangla text

**Character:** One rounded, friendly sans that runs from 800-weight tight headlines down to relaxed 17px body. The heavy weights and negative tracking carry the voice, so there is no second display face.

### Hierarchy
- **Display** (800, clamp(36px, 5.4vw, 56px), 1.08, -0.03em, balanced wrap): the home intro line. Project pages use a slightly larger clamp(40px, 6vw, 64px) at 1.05.
- **Headline** (800, clamp(24px, 2.4vw, 28px), 1.2, -0.02em, pink): every section heading, written in a friendly voice ("Things I've built", "Right now", "Say hello").
- **Title** (700, 22px, 1.3, -0.01em): project names; also the wordmark size.
- **Lead** (400, 19px): the intro paragraph, max 58ch, soft ink. Project taglines use 19 to 22px at 500 in link blue.
- **Body** (400, 17px, 1.65): all prose, soft ink, held to 62 to 64ch.
- **Label** (700, 15px): action links ("How I built it", "Live site"), buttons, the GitHub handle. Navigation uses 600 at 16px.
- **Pill** (500, 14px): stack tags.

### Named Rules
**The One Family Rule.** Hierarchy comes from Figtree's weight (400 to 800) and size alone. No uppercase labels, no letter-spaced eyebrows, no second display face.

**The Bangla Gets Its Own Face Rule.** Any বাংলা text is marked `lang="bn"` and set in Hind Siliguri at 600.

## Layout

A single centred container (max 1080px, 20px side padding that respects safe-area insets). The home page runs: desk scene (height clamp(140px, 22.2vw, 420px) plus a 72px wall band for the nav), the intro (max 640px), then a two-column grid at 1.6fr / 1fr with a gap of clamp(32px, 6vw, 90px), then the GitHub section across the full width. Project pages use the same container and a 1.8fr / 1fr grid with the same gap. Both grids collapse to one column at 800px or narrower; at 480px or narrower the nav drops its "Stack" link.

Vertical rhythm is generous and roughly regular: 8px between pills, 10 to 14px between list items, 44 to 52px between sidebar and project-page sections, 48px between projects, 56px of padding above the GitHub section, 64px under the intro, 80px at the bottom of main. The footer sits on a 1px top rule.

## Elevation & Depth

The system is flat. Containers get a tinted fill (`pill-fill`) and a 1px edge (`pill-edge`); sections are separated by 1px rules in the same edge color. Depth on the page comes from the illustration itself.

### Shadow Vocabulary
- **Screenshot lift** (`box-shadow: 0 2px 4px #0000000d, 0 18px 40px -12px #00000040`): only on the product screenshot at the top of a project page, so a real app reads as an object placed on the page.

### Named Rules
**The Flat Paper Rule.** Cards, pills, buttons and code chips never cast shadows. The only shadow is the soft lift under a product screenshot.

## Shapes

Gently rounded throughout, with radius growing as the element grows: 3px for contribution cells, 5px for inline code, 8px for pills, 10px for buttons, 14px for the status card and screenshots, full rounding for dots, the theme toggle and the language bar. Borders are always 1px in `pill-edge`. Icons are drawn as SVG line art with round caps and joins (2 to 2.2 stroke): the right arrow and the sun and moon.

## Components

### Buttons
Solid and friendly. Used on project pages for the live link and source link.
- **Shape:** gently rounded (10px).
- **Primary:** ink fill, paper text, 700 at 15px, 10px by 18px padding, trailing arrow.
- **Ghost:** pill fill with 1px pill edge, ink text.
- **Hover / Focus:** lifts 2px on the spring curve, and the arrow slides 5px right. Focus is the global 2px link-blue ring at a 3px offset.

### Chips (Pills)
- **Style:** pill fill, 1px pill edge, 8px radius, 500 at 14px, 4px by 12px padding, wrapping with 8px gaps.
- **State:** on the home sidebar, hover nudges the pill up 3px and tilts it -2deg on the spring curve. Pills are display-only, never selectable.

### Cards / Containers
- **Corner Style:** 14px.
- **Background:** pill fill with 1px pill edge.
- **Shadow Strategy:** none (see Flat Paper Rule).
- **Internal Padding:** 18px by 20px.
- The status card ("Open to work") carries a small green dot and a bold ink lead-in over soft-ink text.

### Arrow Links
The signature interaction. Every outbound or onward link ends (or begins, mirrored, for "back") with a 16px SVG line arrow. Links are ink with no underline; on hover the text turns link blue and the arrow slides 5px right on the spring curve. In sidebar lists the arrow sits in a 20px leading column.

### Navigation
Sits on the wall band above the illustration in nav ink: wordmark "arafat." (800, 22px, pink dot) at left, links at 600/16px with 26px gaps and the theme toggle at right. Hover adds a 2px underline offset 6px. Project pages swap the scene for a plain bar with a back-arrow wordmark and the toggle.

### Theme Toggle
A 38px circular button holding a 22px line-drawn moon (day) or sun (night). Hover rotates it 25deg and scales it to 1.1 on the spring curve. The desk lamp is a second switch wired to the same handler, and the choice persists in localStorage.

### Desk Scene (signature)
A full-width inline SVG (1440 by 320 viewBox, sliced to the bottom) on the wall gradient. All colors come from scene tokens so it repaints for night: the lamp beam and window stars fade in on `--beam` / `--stars`. Ambient motion: code lines type in on a 7s loop with a blinking caret, and two steam wisps rise on a 2.4s loop. Interactive objects: the lamp switches the theme; the cha glass lowers its tea a step per click or Enter, with the spring curve, and refills after three sips. Both are keyboard reachable and show a link-blue focus outline. With reduced motion the code is shown fully drawn and all animation stops.

### Contribution Calendar
A grid of 3px-rounded cells: empty cells use pill fill and edge, and active days step through four link-blue mixes. Hovering a cell scales it to 1.6 on the spring curve. Below it sits a 12px fully rounded language bar with a dot legend.

## Do's and Don'ts

### Do:
- **Do** keep the desk scene as the one illustrated moment, and repaint any new scene element through day/night custom properties.
- **Do** define every new UI color as a token on both `:root` and `:root[data-theme="dark"]`.
- **Do** use the `--spring` linear() curve (0.4 to 0.6s) for hover feedback on arrows, pills, buttons and toggles.
- **Do** end onward links with the 16px line arrow that slides 5px on hover.
- **Do** set section headings in Figtree 800 in pink, with a plain, conversational phrase.
- **Do** mark Bangla with `lang="bn"` and set it in Hind Siliguri 600.
- **Do** keep prose in soft ink at 58 to 64ch.

### Don't:
- **Don't** add ambient motion outside the desk scene; page content never animates into view.
- **Don't** add shadows to cards, pills or buttons; the product screenshot is the only lifted object.
- **Don't** add 3D, terminal styling, or mobile-app-landing-page heroes (rejected by the user).
- **Don't** add uppercase eyebrows or kicker labels above headings.
- **Don't** use pink for link or hover states in page UI, or blue for headings.
- **Don't** let motion hide content; under reduced motion everything must render in its final state.
