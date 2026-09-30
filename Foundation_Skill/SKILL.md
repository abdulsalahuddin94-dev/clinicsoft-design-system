---
name: clinicsoft-foundation
description: Use before building, extending, auditing or coding anything with the ClinicSoft Design System (Web, Dark only; Figma file "NEW PROJECT Design system", to be renamed "ClinicSoft Design System"). Defines the foundations from the ⭐Setup page group - variable collections and modes (Primitives, Semantic Dark, Spacing and Typography Desktop/iPad/Mobile, Radius, Opacity), text, effect and grid styles, the 40 Lucide icons - plus file structure, build rules and the direction decisions. Load it together with any ClinicSoft Component_Skills.
---

# ClinicSoft DS - Foundation

> **Find by name.** Components, styles and variables are found by **name** (for example `getLocalVariablesAsync()` then match `color/text/primary`; `figma.root.findAll(n => n.name === 'Button')`). This skill stores no node IDs. Node IDs in the Trianglz skills belong to the Trianglz files only.

> **Data files (source of truth for values):** `../data/tokens.json` (every variable, mode, alias and ramp curve), `../data/component-registry.json`, `../data/rules.json` (contrast pairs, off-limits list, recolor procedure), `../data/screen-templates.json`, `../docs/decisions.md`. When a number here and the JSON differ, the JSON wins (it is exported from Figma). To change a color, follow the Recolor procedure in `../../Web_Design_System_Skill/SKILL.md` section 3b.

- Figma file: "NEW PROJECT Design system" (file key m0G6wKSbVhgqWutfmt7vFU), to be renamed "ClinicSoft Design System" by the user.
- Platform: **Web, Tailwind conventions**, breakpoints 1440 / 768 / 375, Lucide icons.
- Industry: healthcare (clinic staff read tables and forms all day).
- Theme: **Dark only.** The Semantic collection has one mode, `Dark`. There is no Light mode and no Light screenshot by design (intake answer 0.4). Do not ask for Light screenshots; do not add Light variants.
- Font: Poppins (Latin only). No Arabic / RTL.

Reference files:
- `references/variables.md` - every variable with its value per mode, alias and scope.
- `references/gaps.md` - open foundation items and accepted limits.
- `references/screens/*.png` - the ⭐Setup documentation pages (Dark): `colors-primitives.png`, `colors-semantic-dark.png`, `typography-styles-dark.png`, `typography-responsive-dark.png`, `spacing-dark.png`, `radius-dark.png`, `shadows-dark.png`, `layout-grid-dark.png`, `icons-dark.png`.

Component skills that build on this: `../Component_Skills/Form_Elements_Skill`, `../Component_Skills/Navigation_Skill`, `../Component_Skills/Data_Display_Skill`.

---

## 1. Direction (decided 2026-09-30, see `../docs/decisions.md`)

| Topic | Decision |
|---|---|
| Style | Calm, clinical, accessible (WCAG AA minimum). No neon, no purple gradients, restrained motion. |
| Surfaces | Dark cool neutrals (Tailwind slate). Page `gray/950`, cards `gray/900`, raised `gray/800`. Depth comes from surface steps and 1px borders; shadows only on overlays. |
| Brand | `#299B48` (green) sits at step `brand/600`. The ramp is generated from the Tailwind green curve around it. No secondary brand color. |
| Text on brand | Filled brand buttons use **near-black text** (`gray/950`, 5.64:1). White on `#299B48` is 3.57:1 and fails. |
| Pressed brand | Lighter, not darker: `bg-active` = `brand/400`, because `gray/950` on `brand/700` is only 3.76:1. Hover = `brand/500`. |
| Status | Separate ramps: `green` (Tailwind emerald) for success, `red`, `yellow`, `blue`. Success never reads as a brand action. |
| Body text | 16px on every breakpoint. `xs/sm/base/lg` stay 12/14/16/18 on Desktop, iPad and Mobile. Larger sizes compress. |
| Corners | Buttons `radius/md` 6, inputs and cards `radius/lg` 8, panels `radius/xl` 12, modals `radius/2xl` 16, pills and avatars `radius/full`, checkboxes `radius/base` 4. |
| Density | Comfortable. Inputs 40px high, base buttons 40px. |
| Shadows | Tailwind names with higher black alpha for dark surfaces. |
| Tokens | No component-specific tokens. `color/action/*` is shared by Button, Icon Button and link-styled buttons. No `color/btn/*`. |

## 2. File structure (page order in Figma)

`⭐` pages are empty group headers. `➜` pages hold one topic each.

| Group | Pages | Content |
|---|---|---|
| (top) | Cover | Dark cover, brand bar, title, subtitle |
| ⭐Setup | ➜ Layout Grid | 3 grid previews (Desktop, iPad, Mobile) |
| | ➜ Typography | 10 sizes x 4 weights + responsive table (Desktop / iPad / Mobile) |
| | ➜ Colors | Primitives (71 swatches) and Semantic · Dark (60 swatches), each bound to its variable |
| | ➜ Shadows | 12 effect-style cards |
| | ➜ Corner Radius & Spacing | 9 radius swatches, 24 spacing bars with 3-mode values |
| | ➜ Icons | 40 Lucide `Icon/*` components |
| ⭐Form Elements | ➜ Input Fields and Dropdown | OTP / Cell, Input / Text, Input / Password, Input / Date, Input / Phone, Search, Upload Field, OTP / Field, Stepper, Select / Dropdown |
| | ➜ Text Area | Text Area |
| | ➜ Checkboxes | Checkbox |
| | ➜ Toggles | Toggle |
| | ➜ Radio Buttons | Radio |
| ⭐Navigation | ➜ Buttons & Links | Button, Icon Button |
| | ➜ Pagination, Tabs & Breadcrumb | Tabs / Item, Tabs / Bar, Pagination / Item, Pagination, Breadcrumb / Item, Breadcrumb |
| | ➜ Navigation Bars | Sidebar / Item, Sidebar, Top Bar |
| | ➜ Menus | Menu / Item, Menu |
| ⭐Data Display | ➜ Avatars & Upload Image | Avatar |
| | ➜ Tooltips | Tooltip |
| | ➜ Banners, Badges & Toasts | Badge, Alert, Toast |
| | ➜ Popups | Modal |

Page conventions:
- Each component family has one dark documentation frame: title (`2xl/Semi Bold`), a one-line description that lists its properties and variants, then the component set.
- Foundation documentation lives only on ⭐Setup pages (rule `docs-in-setup`).
- There is no dark preview duplicate: the whole file renders in the one `Dark` mode.
- Not built in v1: ➜ Favicon page, Avatar Upload (see `references/gaps.md`).

## 3. Build order (always)

1. Primitives (raw values).
2. Semantic variables aliasing Primitives (one mode, Dark).
3. Spacing, Radius, Opacity and Typography variables.
4. Text, effect and grid styles built from those variables.
5. Icons (atoms, strokes bound to `color/icon/*`).
6. Components built only on those variables and styles: Atoms, then Molecules, then Organisms, then Patterns.
7. Linked documentation pages.
8. Audit (ds-auditor / audit-design-system), with numbers.
9. Project skills (this folder).

Before building any component: state its tier, list its dependencies, build the missing lower tier first as a separate main component, then assemble with nested instances and expose nested properties.

## 4. Architecture at a glance

```
Primitives (raw palette, 1 mode "Value", scopes [] = hidden from pickers)
   └─ aliased by ─> Semantic (color roles, 1 mode "Dark")
                        └─ bound by ─> components
Typography (Desktop / iPad / Mobile) ─> 40 text styles ─> components
Spacing    (Desktop / iPad / Mobile) ─> padding / gap / sizes
Radius     (1 mode "Value")          ─> corner radius
Opacity    (1 mode "Value")          ─> disabled states
Effect styles (12, Tailwind names, raw colors) ─> overlays and focus rings
Grid styles (3) ─> page frames
Icons: 40 Lucide Icon/* components, 24x24, stroke 2, bound to color/icon/default
```

| Collection | Vars | Modes | Scopes | Role |
|---|---|---|---|---|
| Primitives | 71 | Value | `[]` (hidden from pickers) | 6 ramps (gray, brand, green, red, yellow, blue) x 11 steps, `white`, `black`, `alpha/black-50`, `alpha/black-70`, `alpha/white-10` |
| Semantic | 60 | Dark | set per role (never ALL_SCOPES) | All UI color. Components bind here only |
| Spacing | 24 | Desktop, iPad, Mobile | WIDTH_HEIGHT, GAP | `space/0` ... `space/64` |
| Radius | 9 | Value | CORNER_RADIUS | `radius/none` ... `radius/full` |
| Opacity | 1 | Value | OPACITY | `opacity/disabled` = 50 |
| Typography | 35 | Desktop, iPad, Mobile | FONT_FAMILY, FONT_STYLE, FONT_SIZE, LINE_HEIGHT, LETTER_SPACING | family, 4 weights, 10 sizes, 10 line heights, 10 letter spacings |
| **Total** | **200** | | 200 scoped, 0 ALL_SCOPES | |

Every variable has a description and WEB code syntax `var(--path-with-dashes)`, for example `var(--color-text-primary)`, `var(--space-4)`, `var(--radius-lg)`, `var(--font-size-base)`. 0 remote (library) variables or styles. 0 paint (color) styles.

## 5. Color (Semantic, mode Dark)

Naming: `color/{group}/{role}`, lowercase, no numeric suffixes.

| Group | Roles | Count | Scope |
|---|---|---|---|
| `text` | primary, secondary, muted, placeholder, disabled, inverse, link, link-hover, error, warning, success, info, on-brand | 13 | TEXT_FILL |
| `bg` | primary, secondary, subtle, muted, inverse, overlay, error, warning, success, info, brand, brand-hover, brand-active | 13 | FRAME_FILL, SHAPE_FILL |
| `border` | default, muted, strong, input, inverse, focus, error, warning, success, brand | 10 | STROKE_COLOR |
| `icon` | default, strong, muted, brand, inverse, error, warning, success, info | 9 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| `action` | `{primary, secondary, danger}/{bg, bg-hover, bg-active, text, border}` | 15 | per role |

Key values (full list in `references/variables.md`):

| Role | Alias | Hex |
|---|---|---|
| bg/primary (page) | gray/950 | #020617 |
| bg/secondary (cards) | gray/900 | #0F172A |
| bg/subtle (raised, hover) | gray/800 | #1E293B |
| bg/muted | gray/700 | #334155 |
| text/primary | gray/50 | #F8FAFC |
| text/secondary | gray/300 | #CBD5E1 |
| text/muted, text/placeholder | gray/400 | #94A3B8 |
| text/disabled | gray/500 | #64748B |
| text/link, border/focus, icon/brand | brand/400 | #59D77F |
| border/default | gray/700 | #334155 |
| border/input | gray/500 | #64748B |
| border/strong (hover) | gray/400 | #94A3B8 |
| action/primary/bg = bg/brand | brand/600 | #299B48 |
| action/primary/text = text/on-brand | gray/950 | #020617 |
| action/secondary/border | gray/500 | #64748B |
| action/danger/bg / text | red/600 / white | #DC2626 / #FFFFFF |
| status text / icon | red/400, yellow/400, green/400, blue/400 | |
| status bg | red/950, yellow/950, green/950, blue/950 | |
| bg/overlay (scrim) | alpha/black-70 | #000000B2 |

Rules:
- Components bind **Semantic only**. Primitives have no scopes, so they never show in pickers.
- Choose by role, not by look: body copy `text/primary`, supporting copy `text/secondary`, hints `text/muted`, page `bg/primary`, cards `bg/secondary`, raised and hover `bg/subtle`, dividers `border/default`, form-control boundary `border/input`.
- Status UI (Alert, Badge, Toast) uses `bg/{status}`, `text/{status}`, `border/{status}`, `icon/{status}`. Never button tokens.
- Buttons use `color/action/*`. Never add `color/btn/*` or other component tokens (rule `no-component-specific-tokens`).
- Contrast: 67 pairs in `../data/rules.json > contrast_pairs`, 0 failing in Dark. Lowest margins: `border/input` on `bg/secondary` 3.75:1, `action/danger/text` on `action/danger/bg` 4.83:1.

## 6. Typography

Font **Poppins**. Weights Regular 400, Medium 500, Semi Bold 600, Bold 700.
40 local text styles named `{size}/{weight}`: sizes `xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl` x weights `Regular, Medium, Semi Bold, Bold`. Every style binds fontFamily, fontStyle, fontSize, lineHeight and letterSpacing to Typography variables (40/40 verified).

| Size | Desktop | iPad | Mobile | Line height (D / iPad / M) | Tracking | Tailwind |
|---|---|---|---|---|---|---|
| xs | 12 | 12 | 12 | 16 / 16 / 16 | +0.2 | text-xs |
| sm | 14 | 14 | 14 | 20 / 20 / 20 | 0 | text-sm |
| base | 16 | 16 | 16 | 24 / 24 / 24 | 0 | text-base |
| lg | 18 | 18 | 18 | 28 / 28 / 28 | -0.2 | text-lg |
| xl | 20 | 20 | 18 | 28 / 28 / 26 | -0.2 | text-xl |
| 2xl | 24 | 22 | 20 | 32 / 30 / 28 | -0.4 | text-2xl |
| 3xl | 28 | 24 | 24 | 36 / 34 / 32 | -0.6 | custom (Tailwind 30) |
| 4xl | 32 | 28 | 28 | 40 / 38 / 36 | -0.8 | custom (Tailwind 36) |
| 5xl | 40 | 36 | 32 | 48 / 44 / 40 | -1 | custom (Tailwind 48) |
| 6xl | 48 | 44 | 40 | 60 / 56 / 48 | -1.2 | custom (Tailwind 60) |

Weight classes: Regular = `font-normal`, Medium = `font-medium`, Semi Bold = `font-semibold`, Bold = `font-bold`.

Usage in the components: labels `sm/Medium`, body and values `sm/Regular` or `base/Regular`, hints, messages and captions `xs/Regular`, doc titles `2xl/Semi Bold`, page titles `2xl`-`4xl` Semi Bold.

## 7. Spacing, radius, opacity, grid

Spacing `space/{n}` = n x 4px on Desktop. `space/0`-`space/4` (0-16px) never change across modes; use them for component internals. `space/5` and up compress on iPad and Mobile (for example `space/6` 24/22/18, `space/8` 32/28/24, `space/16` 64/52/40); use them for layout rhythm. Tailwind: `p-{n}`, `gap-{n}`.

Radius: `none 0 · sm 2 · base 4 · md 6 · lg 8 · xl 12 · 2xl 16 · 3xl 24 · full 9999` (Tailwind `rounded-*`; `radius/base` = `rounded`).

| Radius | Used for |
|---|---|
| base 4 | checkboxes, small chips |
| md 6 | buttons, icon buttons |
| lg 8 | inputs, cards, menus, OTP cells |
| xl 12 | panels, popovers |
| 2xl 16 | modals |
| full | pills, avatars, toggles, search field, badges |

Opacity: `opacity/disabled` = 50. Every Disabled variant keeps its own type colors at this opacity.

Grid styles (apply to page frames; set Typography and Spacing modes to match the frame):

| Style | Frame | Columns | Margin | Gutter |
|---|---|---|---|---|
| `Grid/Desktop 1440` | 1440 | 12 | 80 | 24 |
| `Grid/iPad 768` | 768 | 8 | 32 | 16 |
| `Grid/Mobile 375` | 375 | 4 | 16 | 16 |

Tailwind: `px-4 md:px-8 xl:px-20`, `grid-cols-4 md:grid-cols-8 xl:grid-cols-12`, `gap-4 xl:gap-6`.

## 8. Effect styles (12)

`shadow-2xs, shadow-xs, shadow-sm, shadow-md, shadow-lg, shadow-xl, shadow-2xl, inset-shadow-2xs, inset-shadow-xs, inset-shadow-sm, focus-ring, focus-ring-offset`.

- Tailwind names and offsets, with a higher black alpha so they read on dark surfaces. Colors are raw (allowed: binding effect colors to variables made plugin exports hang).
- Use shadows only on overlays (direction decision). Toast uses `shadow-lg` and Modal `shadow-xl` (component descriptions); suggested `shadow-md` for menus, dropdowns and tooltips (not recorded yet, see `references/gaps.md`). Cards and inputs use surface steps and borders instead.
- `focus-ring` = inputs (inset 2px `border/focus` color). `focus-ring-offset` = buttons and controls (2px background gap + 4px ring, #59D77F).
- Focus variants: `focus-ring-offset` effect + clip content + a fill (`bg/primary` when the variant has none).

## 9. Icons

40 local components on ➜ Icons, named `Icon/<Title Case Name>`, Lucide outline, 24x24 frame, stroke 2. Each has a description.

| Group | Icons |
|---|---|
| Navigation and arrows | Chevron Down, Chevron Up, Chevron Left, Chevron Right, Arrow Left, Arrow Right, Home, Menu, Log Out |
| Actions | Add, Minus, Close, Check, Edit, Delete, Upload, Search, Filter, More Horizontal, Settings, Eye, Eye Off, Lock |
| Status | Info, Alert Circle, Warning, Check Circle, Loader, Bell |
| Content and people | File, File Text, User, Users, Calendar, Clock, Mail, Phone |
| Clinic | Stethoscope, Heart Pulse, Pill |

Rules:
- Every Glyph stroke is bound to `color/icon/default` (40/40 verified). Recolor an instance with another `color/icon/*` token (strong, muted, brand, inverse, error, warning, success, info). Never a raw color and never a `text/*` token.
- Sizes allowed: 16, 20, 24.
- Components use icons only as **instances** exposed through INSTANCE_SWAP properties (Leading Icon, Trailing Icon, Icon). No drawn vectors, no text glyphs such as `←` or `›`, no empty placeholders (rule `real-icons-only`).
- A new icon: add it as `Icon/<Name>` from Lucide at 24px, stroke 2, bound to `color/icon/default`, with the same description pattern, on ➜ Icons.

## 10. Rules for building in this file

1. **New color**: add a raw value to Primitives only if no ramp step fits (then regenerate the ramp, never hand-pick one step). Create a Semantic alias with a role name in the right group, set scopes, WEB code syntax and a description. Add its swatch card to ➜ Colors, bound to the variable. Add a contrast pair to `../data/rules.json` if it is text or a boundary.
2. **New component**: bind every fill and stroke to Semantic, every padding and gap to `space/*`, every radius to `radius/*`, every text to a text style, every shadow to an effect style. No raw values, no remote assets.
3. Names `Family / Variant` (Menu / Item, OTP / Cell). Variant properties `State`, `Type`, `Size`, `Status`, `Open`, `Value`, `Checked`, `Selected`, `Arrow` in Title Case; values in Title Case. No `Mode` axis (rule `no-dark-duplicates`).
4. TEXT property for every visible string, BOOLEAN for optional parts, INSTANCE_SWAP for icons. Every property wired to a layer.
5. States: interactive atoms need Default, Hover, Focus, Disabled (+ Pressed on Button and Icon Button); inputs need Default, Hover, Focus, Filled, Error, Success, Disabled.
6. Disabled = the component's own look at `opacity/disabled`.
7. Description on every set: tier, Purpose, Usage rules, Accessibility.
8. Touch targets: 24px hard minimum, 44px recommended. Inputs and base buttons are 40px.
9. Never detach an instance; if a needed swap is missing, fix the component (rule `no-detach`).
10. After each Figma session: add a `../CHANGELOG.md` entry ("Storybook synced: no"), run `python tools/project_status.py "My Projects/ClinicSoft"`, and run the audit.

The full list of prohibitions is `../data/rules.json > off_limits`.

## 11. Patterns (screens)

Screens are Patterns: responsive frames built from the components in the Design file "NEW PROJECT Design File" (it uses the DS library), never in the DS file. Recipes are in `../data/screen-templates.json` (sign_in, sign_up, otp_verification, list, detail, form, settings, empty_state).

| Pattern | Status | Components |
|---|---|---|
| Login / Desktop (1440x900) | Built 2026-09-30, Design file page Auth, screenshot `Screens/login-desktop-dark.png` | Input / Text (Work email, Icon/Mail), Input / Password (Icon/Lock), Checkbox, Button Filled lg (Sign in), Button Outline lg (phone code, Icon/Phone), Button Link sm (Forgot password?, invite), Icon/Heart Pulse |
| Login / Mobile (375x812) | Built 2026-09-30, Design file page Auth, Mobile modes, screenshot `Screens/login-mobile-dark.png` | Same as Desktop, single column |

Rules: Dark mode on every frame, grid style and Typography/Spacing modes matching the frame size, only DS instances (never detached), missing components built in the DS file first (lower tiers first). Screens checkpoint needs Dark screenshots only.

## 12. Web / Tailwind map

| Figma | Code |
|---|---|
| `color/bg/primary` | `bg-[var(--color-bg-primary)]` |
| `color/text/secondary` | `text-[var(--color-text-secondary)]` |
| `space/4` | `p-4` / `gap-4` (16px) |
| `radius/lg` | `rounded-lg` |
| `sm/Medium` | `text-sm font-medium` (14 / 20) |
| `opacity/disabled` | `disabled:opacity-50` |
| `focus-ring-offset` | `focus-visible:ring-4 focus-visible:ring-offset-2 ring-[var(--color-border-focus)]` |
| Dark only | the Dark values are the only values; define the CSS variables once on `:root`. There is no light theme to switch to |

## 13. Storybook

Live documentation of this DS: `../storybook/` (React + Storybook 10, Dark only, port 6007). Run `npm --prefix "My Projects/ClinicSoft/storybook" run storybook` from the Root (or the `clinicsoft-web-storybook` preview). While it runs, AI agents can read components, props and docs through the Storybook MCP at `http://localhost:6007/mcp`. Names, properties and defaults match Figma exactly; after any Figma change follow `Storybook_Design_System_Skill/SKILL.md` section 5 and check names with `python tools/storybook_parity.py "My Projects/ClinicSoft"`.
