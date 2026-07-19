---
name: Ashley.dev
description: A candid, human-centered portfolio for technical leadership, writing, and speaking.
colors:
  signal-rose: "#F43F5E"
  night-canvas: "#000000"
  code-charcoal: "#141414"
  interface-graphite: "#111827"
  rail-gray: "#6B7280"
  divider-gray: "#4B5563"
  strong-white: "#FFFFFF"
  soft-white: "#F3F4F6"
  body-gray: "#D1D5DB"
  muted-gray: "#9CA3AF"
typography:
  display:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
  title:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1rem
rounded:
  sm: "0.25rem"
  md: "0.375rem"
  lg: "0.5rem"
  xl: "0.75rem"
  shell: "1rem"
  full: "9999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "2.5rem"
components:
  button-outline:
    backgroundColor: "{colors.night-canvas}"
    textColor: "{colors.soft-white}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "0.625rem 1rem"
  button-outline-hover:
    backgroundColor: "{colors.night-canvas}"
    textColor: "{colors.signal-rose}"
  button-accent:
    backgroundColor: "{colors.signal-rose}"
    textColor: "{colors.night-canvas}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "0.625rem 1rem"
  filter-chip:
    backgroundColor: "{colors.night-canvas}"
    textColor: "{colors.soft-white}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "0.25rem 0.5rem"
  content-card:
    backgroundColor: "{colors.night-canvas}"
    textColor: "{colors.body-gray}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  text-field:
    backgroundColor: "{colors.interface-graphite}"
    textColor: "{colors.soft-white}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0.5rem 0.75rem"
  site-shell:
    backgroundColor: "{colors.night-canvas}"
    textColor: "{colors.soft-white}"
    rounded: "{rounded.shell}"
---

# Design System: Ashley.dev

## 1. Overview

**Creative North Star: "The Human-Readable Source"**

Ashley.dev is a high-contrast, content-first personal site that treats technical fluency as a language, not a costume. A true-black canvas, a single rose signal color, and structural gray borders create a precise frame for the real evidence: Ashley's work, writing, talks, and point of view.

The terminal window, file-oriented navigation, command prompt, and code-shaped biography are intentional brand devices. Future additions should strengthen that language through useful content and coherent interaction rather than replacing it or piling on unrelated technical decoration. The system should feel candid, humane, and technically credible because the metaphor helps visitors understand Ashley.

**Key Characteristics:**
- True-black, high-contrast surfaces with one unmistakable signal color.
- Structural borders and compact spacing instead of decorative layers.
- Direct, content-led hierarchy that makes evidence easy to scan.
- Monospace and terminal framing as deliberate identity, kept useful rather than ornamental.
- Restrained motion that clarifies state and respects reduced-motion preferences.

## 2. Colors

The palette is intentionally narrow: Signal Rose carries identity and interaction state while a near-black neutral ladder separates content without softening the site's directness.

### Primary
- **Signal Rose**: The sole brand accent, used for links, active navigation, article headings, progress, selected filters, focus, and concise emphasis.

### Neutral
- **Night Canvas**: The page and primary container background.
- **Code Charcoal**: The dedicated background for code blocks and inline code.
- **Interface Graphite**: The raised field and utility-control surface.
- **Rail Gray**: The standard border for shells, controls, and dividers.
- **Divider Gray**: A quieter border and nested-surface tone.
- **Strong White**: Reserved for the strongest headings and high-contrast neutral surfaces.
- **Soft White**: The default high-contrast interface text.
- **Body Gray**: Long-form and supporting copy that still needs strong contrast.
- **Muted Gray**: Dates, location, metadata, and other genuinely secondary information.

**The Signal, Not Wallpaper Rule.** Signal Rose marks identity, action, selection, and focus; it never becomes a decorative gradient or ambient glow.

## 3. Typography

**Display Font:** Tailwind's system monospace stack
**Body Font:** Tailwind's system monospace stack
**Label/Mono Font:** Tailwind's system monospace stack

**Character:** The single-family system is compact, direct, and code-literate. Monospace is a committed brand choice, supported by clear hierarchy and precise language rather than novelty alone. The bundled Inter files are not active in the current CSS and are not design tokens.

### Hierarchy
- **Display** (700, 2.25rem, 1.3): Article titles and the largest page-level statements; Signal Rose may identify long-form titles.
- **Headline** (700, 1.5rem, 1.3): Major content sections and primary page headings.
- **Title** (600, 1.25rem, 1.4): Project, talk, post, and card titles.
- **Body** (400, 1rem, 1.75): Default copy; long-form articles use 1.05rem with a 1.8 line height and should remain within a readable 65-75ch measure.
- **Label** (400, 0.75rem, 1rem): Tabs, tags, metadata, and compact utility controls; sentence case is the default.

**The Syntax Is Content Rule.** Terminal prompts, filenames, and code-shaped content are welcome when they reveal real information, clarify navigation, or carry Ashley's voice; decorative noise that does none of those things is forbidden.

## 4. Elevation

The system is flat by default. A one-pixel Rail Gray border carries most separation; shadows are structural and sparse. The full site shell uses one deep ambient shadow, while article utilities use a low shadow only when a border alone would not preserve hierarchy.

### Shadow Vocabulary
- **Shell Ambient** (`0 25px 50px -12px rgb(0 0 0 / 0.25)`): The outer site and article frame only.
- **Utility Low** (`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`): Back links, table-of-contents panels, and comparable article utilities.

**The Frame Before Float Rule.** Use a one-pixel border before adding shadow; never stack cards or add decorative glass surfaces to manufacture depth.

## 5. Components

Components are framed and restrained. Night Canvas remains visible through most controls, Signal Rose carries state, and compact radii keep the interface approachable without turning it soft.

### Buttons
- **Shape:** Gently squared control corners (0.5rem) with a one-pixel Rail Gray border.
- **Primary:** Outline-first controls use Night Canvas, Soft White, and 0.625rem by 1rem padding; filled Signal Rose with Night Canvas text is reserved for selected or highest-priority states.
- **Hover / Focus:** Hover changes text and border to Signal Rose or fills the control for compact icon and filter actions. Focus must use a visible two-pixel Signal Rose outline with a two-pixel offset.
- **Secondary / Ghost:** Text links may remain unfilled, but their hover and focus states must stay visible without motion.

### Chips
- **Style:** Compact Night Canvas tags with Soft White text, a one-pixel Rail Gray border, and 0.5rem corners; article metadata may use the full-pill variant.
- **State:** Selected filters fill with Signal Rose and Night Canvas text. Hover may lift by no more than two pixels; reduced-motion mode removes the lift.

### Cards / Containers
- **Corner Style:** Gently curved (0.5rem); the outer site shell alone uses the larger 1rem radius.
- **Background:** Night Canvas for the main frame and bounded utility panels; Interface Graphite is limited to fields, comments, and compact utilities.
- **Shadow Strategy:** Flat by default, following the elevation rules above.
- **Border:** One-pixel Divider Gray for utility panels and Rail Gray for the primary shell. Projects, posts, and speaking engagements use border-separated lists rather than repeated cards.
- **Internal Padding:** 1.5rem for primary content cards, 1rem for compact utility surfaces.

### Inputs / Fields
- **Style:** Interface Graphite fill, Soft White text, one-pixel Divider Gray border, 0.375rem corners, and 0.5rem by 0.75rem padding.
- **Focus:** Signal Rose border plus an explicit two-pixel outline; placeholder and read-only text must maintain WCAG 2.2 AA contrast.
- **Error / Disabled:** Do not communicate state through color alone; pair color with concise text and an icon or state label.

### Navigation
- **Style:** The primary tab rail is sticky, horizontally scrollable on narrow screens, and separated with one-pixel Rail Gray dividers. Tabs use compact labels, Soft White at rest, and Signal Rose text plus a two-pixel bottom indicator for the active page.
- **Mobile Treatment:** Icons may hide below 640px, but every destination keeps a visible text label and usable focus target.

### Site Shell

The split shell is the signature layout: profile and contact context on the left, active content on the right, and a single structural frame around both. It stacks into one column below 768px and must never contain another shell-shaped card.

**The Border Carries State Rule.** Use Signal Rose on text, border, and focus to communicate interaction; never rely on lift, hover, or color alone.

## 6. Do's and Don'ts

### Do:
- **Do** use Signal Rose for active state, focus, meaningful links, and concise emphasis against Night Canvas.
- **Do** use the terminal frame, command language, filenames, and code-shaped content as recognizable navigation and storytelling devices.
- **Do** let concrete projects, talks, writing, and experience establish credibility before adding promotional copy.
- **Do** keep body copy at 65-75ch when a page becomes long-form, with at least a 1.75 line height on the dark canvas.
- **Do** preserve complete keyboard access, visible focus, semantic landmarks, and reduced-motion behavior in every component.
- **Do** use one-pixel borders and deliberate spacing before introducing additional surfaces or shadow.

### Don't:
- **Don't** dilute the intentional terminal structure with noisy boot sequences, meaningless command output, or technical decoration that obscures real content.
- **Don't** introduce generic SaaS landing-page patterns, inflated self-promotion, or corporate executive-bio language.
- **Don't** use Signal Rose as gradient text, decorative glow, or a colored side-stripe border on cards, callouts, or alerts.
- **Don't** nest cards, use glassmorphism as decoration, or repeat identical icon-heading-copy card grids.
- **Don't** hide content until an animation runs, and never ship motion without a `prefers-reduced-motion` alternative.
