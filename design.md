# Videoactivism Academy — Design

A website for the Videoactivism Academy: a non-formal education program for young people aged 18–30 from Slovenia and Croatia. It teaches digital active citizenship, media literacy and how to make video counter-narratives against hate speech, polarisation and disinformation. Run by **Danes je nov dan** (SI) and **Udruga Delta** (HR), co-funded by the EU.

**How the program runs** (from `CIA_Curiculum`):
- **Phase 1: Boot Camp.** 4 days, 20 participants (10 SI + 10 HR), with workshops, guest influencers and first ideas for counter-narratives.
- **Phase 2: Mentoring.** 6 months online: a monthly meeting, Discord, guest lectures (e.g. "Online Workshops #1: CapCut"), and making and publishing your own videos.
- **Phase 3: Closing event.** 1 day in person: closing remarks, evaluation and reflection, plus motivational talks by guest lecturers (experienced videoactivists).
- **The end:** a **Youthpass** certificate.

**Two audiences:**
1. **Young people.** They want to know what it is, whether it's for them, what they'll learn and how to join.
2. **Facilitators** (youth workers, teachers, NGOs). The curriculum is meant to be reused, and the lesson plans are written for whoever runs the session.

The site has three jobs:
1. **Present the program.** Show the two phases, the 8 learning outcomes, who it's for and who runs it.
2. **Make the lesson plans easy to read.** Each module gets a page you can skim in 30 seconds or run step by step as a facilitator.
3. **Get people to join.** Put an apply/contact call to action on every page.

---

## 1. Art direction

The source is the "Online Workshops #1 — Video-editing in CapCut" key visual.

**Mood:** loud, friendly, handmade, and a bit cheeky. It feels like a zine or a protest poster, not a corporate course platform. The tone is "you can do this", not "enroll in our curriculum".

**What makes it work:**
- **One saturated background:** a flat, acid-green field (`#54E86D`) with a thin, barely visible square grid, like a cutting mat or a video editor's timeline.
- **A chunky display wordmark:** "VIDEOACTIVISM ACADEMY" in heavy deep blue with a bright blue offset/extruded shadow, which gives it a 3D poster look.
- **Organic speech-bubble blobs:** the content sits in a lopsided ellipse with a yellow-to-green gradient. A coral (red) shape peeks out behind it like a second layer or a shadow.
- **Hand-drawn underlines:** the key info (date, time) gets a wobbly coral underline.
- **Characters:** flat, bold-outlined illustrated figures in primary colors (yellow skin, blue, coral). They carry things, point and gesture, framing the content from the edges.
- **Plain, confident body text:** a clean grotesk (Switzer) in black, centered on the posters and generous in size.

The sister poster (CIA flyer, HR) shows the same system **inverted**: a black background with a dark grid, lime/yellow headlines, the same hand-drawn arrows (`arrow.png`), ellipse outlines and highlighter-marker emphasis. We use this "night mode" for contrast sections and dark theme.

---

## 2. Design tokens

### Color

| Token | Hex | Use |
|---|---|---|
| `--green` | `#54E86D` | Primary page background, the brand field |
| `--green-grid` | `#3CCB55` (≈ 35% opacity lines) | Background grid lines |
| `--blue-deep` | `#0249B3` | Display headings, wordmark face, links |
| `--blue` | `#0067FF` | Wordmark extrusion, buttons, illustration fill, focus ring |
| `--yellow` | `#FECE00` | Highlights, badges, illustration skin |
| `--lime` | `#EAF665` | Top of blob gradient, highlighter marks, dark-mode headings |
| `--coral` | `#FF5556` | Hand-drawn underlines, "back layer" shapes, alerts/deadlines |
| `--peach` | `#FFA990` | Secondary cards, illustration props |
| `--ink` | `#000000` / `#0A0A0F` | Body text, outlines; dark-mode background |
| `--paper` | `#FFFFFF` | Reading surfaces (lesson content cards) |

**Gradients**
- `--blob`: `linear-gradient(180deg, #EAF665 0%, #94EE69 100%)`, the speech-bubble fill.
- `--blob-warm` (from the CIA flyer CTA): `linear-gradient(180deg, #EAF665 0%, #FF8A6A 100%)`, used for registration CTAs.

**Contrast rules (accessibility)**
- Body text is always **ink on green, ink on paper, ink on lime/yellow**, or **white/lime on ink**.
- Never set body text in blue or coral on green. Blue-deep on green is fine for **large display text only** (≥ 32px bold).
- `--blue` buttons use **white** text.

### Typography

Fonts:
- **Barber** (the poster's wordmark face) for **headlines**. It is a *layered* font, caps only.
- **Switzer** for everything else.

Both are in `/public/fonts`, and web versions are in `/public/fonts/web`.

| Role | Style | Size (desktop / mobile) |
|---|---|---|
| Wordmark / hero | Barber, stacked layers | 148 / 42px |
| H1 (page title) | Barber, stacked layers | 80 / 34px |
| H2 (section) | Barber, stacked layers | 46 / 26px |
| Big numbers (01–04) | Barber | 54–64px |
| H3 (card/step title) | Switzer Extrabold | 26 / 21px |
| Lead | Switzer Regular | 24 / 19px, line-height 1.35 |
| Body | Switzer Regular | 18 / 17px, line-height 1.55, max 68ch |
| Label / meta | Switzer Bold, uppercase, +0.08em | 13px |

**How Barber is stacked.** The same text is drawn four times on top of each other, each layer in its own color (`src/components/Barber.astro`):

| Layer | What it draws | Variable | On green | On ink |
|---|---|---|---|---|
| Barber Shadow | bottom faces of the extrusion | `--b-ext` | `--blue` | `--blue` |
| Barber Right | side faces of the extrusion | `--b-ext` | `--blue` | `--blue` |
| Barber Outline | a halo around the letter | `--b-gap` | `--green` (background) | `--ink` |
| Barber Fill | the letter face | `--b-fill` | `--blue-deep` | `--lime` |

The halo is painted in the background color, which recreates the thin gap between the face and the extrusion seen on the poster. Modifier classes:
- `.on-paper`: the halo is white.
- `.no-gap`: the halo is transparent.
- `.flat`: no extrusion.

Use Barber only for short headlines. It is wide (about 0.8em per letter), so long text belongs in Switzer.

**Language note:** Slovenian and Croatian use č, š, ž, ć, đ. Switzer covers all of them. Barber has ć and đ but shipped **without č, š, ž**, so those were added to the web files in every layer: the caron is the font's own circumflex flipped upside down, with a matching extrusion. If the type foundry releases a version with these letters, regenerate `public/fonts/web/Barber-*.woff` (`python scripts/barber-caron.py public/fonts public/fonts/web`).

### Shape, line, texture

- **Grid background:** 120px squares, 1px lines in `--green-grid`. On ink backgrounds use `#1C2A1C`. Implement it as a CSS `background-image` with two linear gradients so it costs no image weight.
- **Blobs:** irregular ellipses made as SVG paths (not `border-radius`), slightly rotated (-3° to 4°). Each blob can carry a **back layer** in coral, offset 12–20px down and right, peeking out on one side.
- **Outlines:** illustrations use 3–4px black strokes. UI cards use **2px ink borders** and a **hard offset shadow** (`6px 6px 0 var(--ink)`), with no blur. This gives a sticker/poster feel that matches the characters.
- **Hand-drawn marks** (SVG, `stroke-linecap: round`, slightly wobbly path):
  - coral underline under dates, times and the key phrase in a heading
  - lime highlighter swipe behind emphasized words (`<mark>`)
  - arrows (`arrow.png`, and redrawn as SVG so they can be recolored) for list bullets and "next" links
- **Radius:** 0 on cards (poster feel) and 999px on pills/buttons. Nothing in between.

### Spacing & layout

- 8px base scale: 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- Content max width 1200px, reading column 720px.
- 12-column grid on desktop, 4 columns on mobile, 16px gutters on mobile.
- Characters sit **on the edges** (bleeding off the viewport where possible), never inside reading columns. Hide or shrink them below 768px so they don't push content.

### Motion

Keep it playful but small:
- Blobs gently "breathe": a 6s scale loop (0.98–1.02).
- Hand-drawn underlines **draw in** on scroll via `stroke-dashoffset`, over 600ms.
- Buttons press down on `:active`: the shadow drops from 6px to 2px and the button moves 4px.
- Respect `prefers-reduced-motion`: turn all of it off.

---

## 3. Components

| Component | Description |
|---|---|
| **Header** | Small wordmark at left, nav (Program · Workshops · About · Register) center/right, **language switcher** far right. Sticky, green with a 2px ink bottom border. |
| **Language switcher** | Pill group showing `SL · HR · EN`. The active language is filled ink with lime text. Each label is a real link to the same page in the other language (not a JS-only toggle), with `hreflang` and `lang` attributes. On mobile it collapses into the menu but stays visible as a single pill (`SL ▾`). |
| **Hero blob** | Large gradient speech-bubble with a coral back layer. Holds the workshop number, title, one-liner, date and time (time gets the coral underline). Flanked by `cia-graphic-1.png` (left) and `cia-graphic-2.png` (right). |
| **Workshop card** | White paper card with 2px ink border and hard shadow. Shows a big `#1` number, title, a 1-line promise, date/time chip, duration, level and tool tags (e.g. CapCut), and an arrow link. A colored top band rotates through yellow/coral/blue/peach per workshop. |
| **Date chip** | Yellow pill: `ČET 9. 4. · 18:00`. Past workshops show greyed out with a "recording" link if one exists. |
| **Program timeline** | Vertical on mobile, horizontal on desktop. Styled like a **video-editor timeline**: workshops are "clips" on a track with a playhead marking today. This ties the UI to the subject. |
| **Lesson plan** | See §5. |
| **"Who is it for" list** | Arrow-bulleted questions, as on the CIA flyer ("Under 30?", "Worried about where society is heading?"). |
| **CTA band** | Ink (black) section with lime display text, a warm-gradient blob and a big blue pill button. Shows the deadline with a coral underline. |
| **Footer** | Ink background. Partner logos (`djnd-logo.png`, `delta-logo.png`), `EU-logo.png` with the co-funding disclaimer, contact, socials. Logos are inverted to white where needed. |

---

## 4. Information architecture

```
/{lang}/                      Home: pitch, two phases, modules, who it's for, CTA
/{lang}/program/              The full curriculum: phases, objectives, 8 learning outcomes, methods, evaluation, Youthpass
/{lang}/modules/              All lesson plans (cards)
/{lang}/modules/{slug}/       One lesson plan, in the reading layout below
/{lang}/about/                Partners, mentors, guest lecturers, EU funding, "use this curriculum"
```

**Home** (a project report and a door to the open curriculum)
1. **Hero:** wordmark, kicker "Project report & open curriculum", a one-paragraph summary of what happened, key facts (20 participants, SI + HR, Boot Camp, mentoring, closing event), and two buttons: *How it happened* (→ #report) and *Use the curriculum* (→ #curriculum).
2. **Who took part:** the participants, in past tense.
3. **How it happened** (`#report`): three phase cards (Boot Camp → Mentoring → Closing event), then Youthpass, plus a link to the full programme report.
4. **What participants learned:** the 8 learning outcomes.
5. **Formats they tried:** sticker cloud.
6. **Open curriculum** (`#curriculum`): pitched at other organisations, with 3 selling points (ready to run, easy to adapt, tested) and the module cards.
7. **Interested in the programme?** (`#interested`, ink): two options.
   - **A. Use the curriculum yourself** → `/modules/`
   - **B. Let our team run it with you** → contact (`contactUrl` in `src/i18n/site.ts`)

   This block also closes the Programme and Curriculum pages. It replaces the old "Join the community" call to action, since the edition has already run.

**Program page**
- Description, then **Objectives** (6), **Target group**, then **Learning outcomes** as an accordion of 8 rows. Each row opens to show *Content · Methods · Evaluation*: the curriculum's 4-column table becomes cards, never a wide table on mobile.
- **Duration** timeline, **Specific features** (mentors 2+2, 2 influencer guests, Discord, inclusion and accessibility), **Materials**, **Evaluation** and **Youthpass**.

---

## 5. Lesson plan presentation

All four lesson plans share one structure, so they map onto one template:

> Description · Learning objectives · Target group · Duration (+ 60/120-min variants) · Outcomes table (outcome / content / methods / evaluation) · Lesson structure (numbered steps with minutes, prompts, key messages, numbered activity steps, output formats) · Materials table · Evaluation

| # | Module | Duration | Steps |
|---|---|---|---|
| 01 | Political Contexts and Digital Ecosystems | 90′ | 10 · 20 · 30 · 20 · 10 |
| 02 | From Hate to Change: Counter-Narratives in Action | 90′ | 10 · 20 · 25 · 25 · 10 |
| 03 | How and Why Satire Works | 90′ (60/120 variants) | 10 · 20 · 25 · 25 · 10 |
| 04 | Short-Form Vertical Video for Digital Activism | 90′ (60/120 variants) | 10 · 20 · 25 · 20 · 15 |

(Module 03's source numbers its last step "6". We renumber it to 5.)

The documents are dense and facilitator-facing, so a module page has **scannable layers**:

**Layer 1: The summary blob (top)**
- Big module number, title and a one-sentence description (the first sentence of the lesson description).
- Chips: `90 min`, `Workshop + group work`, variants (`60′ / 120′ version`) if present.
- **"By the end you can…":** the learning objectives, shortened to one line each.

**Layer 2: The session timeline (sticky)**
Steps shown as editor clips whose **width is proportional to their minutes**, colored by type: *intro* yellow, *input* blue, *case study* peach, *group activity* coral, *reflection* lime. Clicking a clip jumps to its step. On mobile it becomes a thin horizontal bar with a "Step 2/5 · 20′" label.

**Layer 3: Step sections** (white paper cards)
- Step number + type label + duration chip + title.
- Body text, with prompts drawn as **"Ask the group"** speech bubbles (questions styled as a list of chat bubbles).
- **Key message** callout: a lime highlighter card with the core takeaway.
- **Activity** callout: a yellow card with numbered steps (e.g. the 5 counter-narrative steps, the 5 script requirements) and an **output formats** chip row (comment, caption, script, poster, slogan, carousel).

**Layer 4: Toolkit** (collapsible by default, for facilitators)
- **Outcomes → content → methods → evaluation**, as stacked cards.
- **Materials** list with type icons (presentation, worksheet, case study, equipment).
- **Variants:** what changes in the 60′ and 120′ versions.
- **Evaluation:** how learning is checked.
- **Target group** text.

**Reading aids**
- A 720px reading column, body text at 18px with 1.55 line-height.
- Long reading always happens on white paper cards, never on saturated green.
- Print stylesheet ("Print for the session"): no background, no characters, timeline as a simple table.
- Previous/next module navigation.

---

## 6. Multilingual approach

**Languages:** Slovenian (`sl`), Croatian (`hr`), English (`en`). English is the source language of the curriculum.

**Stack: Astro** (static output, deployable anywhere):
- i18n routing with `/{lang}/` prefixes. `/` redirects to `/en/`, or to the language the visitor picked before (remembered in `localStorage`).
- **UI strings** (nav, labels, step types, buttons) live in `src/i18n/ui.ts`, typed so a missing key fails the build.
- **Program and home copy** live in `src/i18n/content/{lang}.ts`.
- **Lesson plans** are **structured data** (`src/content/modules/{lang}/{slug}.json`), not free Markdown, because the template needs typed steps, prompts, activities and materials. Translators edit the strings in those files.
- `slug` is shared across languages, so the switcher always lands on the same module. If a language has no file for a module, the page renders the English version with a "not yet translated" banner.
- SEO: `<html lang>`, `hreflang` alternates and translated `<title>`/description.

**Module schema (abridged)**
```ts
{
  slug, number, title, summary, description: string[],
  duration: 90, variants?: { minutes, text }[],
  objectives: string[], targetGroup: string[],
  outcomes: { outcome, content, methods, evaluation }[],
  steps: {
    type: 'intro' | 'input' | 'case' | 'activity' | 'reflection',
    title, minutes, body?: string[], bullets?: string[],
    prompts?: string[], keyMessage?: string,
    activity?: { intro?, steps: { title, text }[], formats?: string[], note? }
  }[],
  materials: { name, form }[], evaluation: string[]
}
```

---

## 7. Assets inventory (`/public`)

| File | Use |
|---|---|
| `fonts/Switzer-*.otf` | All typography (convert to WOFF2, subset to Latin + Latin Ext-A) |
| `cia-graphic-1.png` | Character carrying a box: hero left, "Register" page |
| `cia-graphic-2.png` | Pointing character: hero right, "Who is it for" |
| `arrow.png` | Lime hand-drawn arrow for bullets/links on dark backgrounds (redraw as SVG for recoloring) |
| `djnd-logo.png`, `delta-logo.png` | Partner logos, footer and About page |
| `EU-logo.png` | Co-funding disclaimer (the Slovenian text "Sofinancira Evropska unija" must be swapped per language; ask the EU for the HR/EN versions) |

**Nice to have:** the original wordmark as SVG, more characters (or the full illustration set) so each workshop can get its own figure, and higher-resolution PNGs (2× for retina).

---

## 8. Open questions

1. **Translations:** the lesson plans exist in English only. The site ships with the UI and the home/program copy in SL/HR/EN, and the lesson plans fall back to English until they are translated.
2. **Applying:** is there a public call or form to link to (e.g. `djnd.si/videoaktivizem`), and when is the next edition?
3. **Mentors and guest lecturers:** names and photos for the About page?
4. **Downloads:** should the presentations and worksheets be downloadable from module pages?
5. **Wordmark:** is the source file (SVG) of the wordmark and the illustration set available?
