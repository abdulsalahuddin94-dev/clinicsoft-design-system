# ClinicSoft build audit: Components step (2026-09-30)

- Auditor: ds-auditor (read-only; nothing in Figma was changed)
- Mode: build. Platform: Web (`My Projects/ClinicSoft/`).
- File: "NEW PROJECT Design system" (key m0G6wKSbVhgqWutfmt7vFU), Desktop Bridge connected (plugin 1.39.0). It is not a Trianglz original.
- Scope: 33 component sets and components (423 variants) on ⭐Form Elements, ⭐Navigation (including ➜ Navigation Bars) and ⭐Data Display. 40 Icon/* components were counted but not re-audited (Foundation report).
- References: `Web_Design_System_Skill/SKILL.md` section 6, `My Projects/ClinicSoft/data/rules.json`, `My Projects/ClinicSoft/data/tokens.json`, `My Projects/ClinicSoft/Project_Brief.md`, `My Projects/ClinicSoft/CHANGELOG.md`. `data/component-registry.json` does not exist yet, so the slot check uses what the screenshots show.
- Theme: Dark only (one Semantic mode, "Dark"). Contrast was checked in Dark only, as intended.
- Not repeated (the builder's figma_execute scan already covers these): unbound fills, strokes, padding, gap and radius; text without a style; default layer names; frames without auto layout; dead properties; detached instances; remote variables; descriptions.

## Tool limits in this session
- The Figma REST token is expired (403). `figma_get_file_data` and `figma_get_styles` failed. All results come from the Desktop Bridge: component search and analysis, lint, variables and screenshots.
- There is no `figma_execute`, so layer trees can't be read. Two things were inferred rather than read: that atoms nest only Icon instances, and that the error/success message layers are bound to properties. Both are marked "Needs check".
- Component sets have no fill, so exports of the sets alone show white behind them. Light label text looks invisible there. For that reason these pages were also captured with their dark documentation frames: ➜ Popups, ➜ Navigation Bars, ➜ Tooltips, ➜ Buttons & Links, ➜ Pagination, Tabs & Breadcrumb. In those captures every label is readable.

## Summary numbers

| # | Check | Result | Target |
|---|---|---|---|
| 1 | Remote variables / styles | **0**. 6 local collections, 200 variables, the same as the Foundation step | 0 |
| 2 | Raw values | **0** (builder scan; not re-run) | 0 |
| 3 | Semantic variables holding raw hex | **0 of 60**. No variables were added or changed since Foundation | 0 |
| 4 | Detached instances / local copies | **0** (builder scan). Lint shows real nested instances (for example the Modal content uses Input / Date) | 0 |
| 5 | Required states (Web skill section 6) | **7 sets with missing states** (D4). **9 Hover variants that look the same as Default** (D1) | 0 |
| 6 | Properties wired / exposed | 0 dead properties (builder). **6 families with visible strings that have no TEXT property** (D5) | 0 |
| 7 | Icons | 0 drawn glyphs or empty placeholders seen in 33 screenshots. All icons are Lucide style | 0 |
| 8 | Contrast (Dark) | Text: **1 variant fails** (D2, 3.74:1). UI boundary: **1 token fails** (D3, `action/secondary/border` 2.66:1), used by 55 atom variants and their nested uses | 0 |
| 9 | Touch targets (hard min 24) | **1 set below 24**: Breadcrumb Item is 20px high (D8). Everything else is 32 or more | 0 |
| 10 | Naming | **7 set names** don't use `Family / Variant` (D7). **1 variant axis** is awkward (Toggle `On=Off`). Properties are Title Case | 0 |
| 11 | Group placement | **31 of 33** follow the routing rule. Menu and Menu Item sit on ⭐Form Elements, and the two rules disagree (O1) | 33/33 |
| 12 | Docs pages | Every family has a dark documentation frame with title, description and the set. 6 pages were checked visually | linked |
| 13 | Off-limits | **0 violations** (table below) | 0 |
| 14 | Slots | **N/A**: no component-registry.json yet. Nested instances look right: Modal (Input / Date, Select, Buttons), Select (Menu, Menu Items), Stepper (Icon Buttons), Top Bar (Search, Icon Button, Button, Avatar), Sidebar (Nav Items, Badge) | 0 |

**Defects: 8 groups (D1 to D8).** 2 are High or Medium in impact (D1 and D3), and both are one-line token fixes. **Open decisions: 3 (O1 to O3).** **Needs check: 2 (N1, N2).** **Accepted gaps: 2 (listed, not counted).**

### Inventory and state matrix (33 sets, 423 variants)

| Component | Tier | Page | Axes | Required states present | Missing |
|---|---|---|---|---|---|
| Button (150) | Atom | ➜ Buttons & Links | Type Filled/Pill/Outline/Link/Danger x Size xs-xl x State Default/Hover/Pressed/Focus/Disabled/Loading | all | none. The Icon axis is replaced by Show Leading/Trailing Icon booleans, and Icon=Only is covered by Icon Button. This is acceptable |
| Icon Button (100) | Atom | ➜ Buttons & Links | Type Filled/Outline/Ghost/Danger x Size x State (5) | all | none |
| Checkbox (15) | Atom | ➜ Checkboxes | Checked Unchecked/Checked/Indeterminate x State Default/Hover/Focus/Error/Disabled | all | none (Unchecked Hover looks the same as Default, D1) |
| Radio (10) | Atom | ➜ Radio Buttons | Selected Off/On x State (5) | all | none (Off Hover looks the same as Default, D1) |
| Toggle (8) | Atom | ➜ Toggles | On Off/On x State Default/Hover/Focus/Disabled | all | none |
| Badge (10) | Atom | ➜ Banners, Badges & Toasts | Status (5) x Size sm/md, Show Icon + Icon swap | all | none |
| Avatar (10) | Atom | ➜ Avatars & Upload Image | Type Initials/Icon x Size 24/32/40/60/100, Show Status | Initials, Icon | Photo (accepted gap) |
| Tooltip (8) | Atom | ➜ Tooltips | Arrow Up/Down/Left/Right x Size Small/Large | all | none. The arrows are visible on the dark frame |
| Tab (10) | Atom | ➜ Pagination, Tabs & Breadcrumb | Type Underline/Segmented x State Default/Hover/Selected/Focus/Disabled | all | none |
| Pagination Item (5) | Atom | same | State Default/Hover/Current/Focus/Disabled | all | none |
| Breadcrumb Item (4) | Atom | same | State Default/Hover/Current/Focus | 4 of 5 | Disabled |
| Menu Item (10) | Atom | ➜ Input Fields and Dropdown | Type Default/Danger x State Default/Hover/Selected/Focus/Disabled | all | none |
| OTP Cell (5) | Atom | ➜ Input Fields and Dropdown | State Default/Focus/Filled/Error/Disabled | 5 of 6 | Hover |
| Nav Item (4) | Molecule | ➜ Navigation Bars | State Default/Hover/Selected/Focus | 4 of 5 | Disabled |
| Input / Text, Password, Date, Phone (7 each) | Molecule | ➜ Input Fields and Dropdown | State Default/Hover/Focus/Filled/Error/Success/Disabled | all | none (Hover looks the same as Default, D1) |
| Text Area (6) | Molecule | ➜ Text Area | State Default/Hover/Focus/Filled/Error/Disabled | 6 of 7 | Success |
| Search (5) | Molecule | ➜ Input Fields and Dropdown | State Default/Hover/Focus/Filled/Disabled | all that apply | none (Hover looks the same as Default, D1) |
| Upload Field (5) | Molecule | same | State Default/Hover/Uploading/Uploaded/Error | 5 | **Focus**, Disabled |
| OTP Field (3) | Molecule | same | State Default/Filled/Error | 3 | Disabled, Success |
| Stepper (4) | Molecule | same | State Default/Min/Max/Disabled | all | none. The Icon Buttons carry Hover/Focus |
| Alert (4), Toast (4) | Molecule | ➜ Banners, Badges & Toasts | Status Info/Success/Warning/Error | all | none |
| Menu (1) | Molecule | ➜ Input Fields and Dropdown | none | n/a | none |
| Tab Bar (2) | Molecule | ➜ Pagination, Tabs & Breadcrumb | Type Underline/Segmented | all | none |
| Pagination (1), Breadcrumb (1) | Molecule | same | none | n/a | none |
| Select / Dropdown (6) | Organism | ➜ Input Fields and Dropdown | Open False (Default/Hover/Filled/Error/Disabled) + Open True (Focus) | 6 of 7 | Success, and Focus while closed |
| Modal (2) | Organism | ➜ Popups | Type Default/Danger | all | none |
| Sidebar (1), Top Bar (1) | Organism | ➜ Navigation Bars | none | n/a | none |

Sum: 150+100+15+10+8+10+10+8+10+5+4+10+5+4+28+6+5+5+3+4+4+4+1+2+1+1+6+2+1+1 = **423 variants**. This matches the changelog.

### Contrast (Dark): component token pairs beyond `rules.json > contrast_pairs`

| Pair (where) | Ratio | Min | Result |
|---|---|---|---|
| `text/error` (red/400 #F87171) on `bg/muted` (gray/700 #334155): Menu Item Type=Danger, State=Selected | **3.74** | 4.5 | **Fail** (D2) |
| `text/error` on `bg/subtle` (gray/800): Menu Item Danger Hover/Focus | 5.29 | 4.5 | pass |
| `action/secondary/border` (gray/600 #475569) on `bg/primary`: Button Outline, Icon Button Outline, Stepper buttons | **2.66** | 3.0 | **Fail** (D3) |
| same on `bg/secondary` (Upload Field, Modal secondary buttons) | **2.4** | 3.0 | **Fail** (D3) |
| same on `bg/subtle` (Upload Field Hover) | **1.9** | 3.0 | **Fail** (D3) |
| Focus ring `focus-ring-offset` (#59D77F) on bg/primary | > 10 | 3.0 | pass |
| `border/focus` (brand/400) 2px on inputs | > 3 | 3.0 | pass |
| Badge, Alert, Toast, Tooltip, Tab, Pagination, Breadcrumb, Nav Item, Select, Sidebar, Top Bar text (lint over all nodes) | all >= 4.5 | 4.5 | pass |
| Checkbox/Radio/Input/Toggle boundary = stroke `border/input` gray/500 | 4.24 (bg/primary), 3.75 (bg/secondary) | 3.0 | pass |

Lint results rejected as false positives (checked against the screenshots): "fill 1.1:1" on the Checkbox, Radio, Input Field, Toggle track and Modal nested input. The boundary is the stroke, not the fill. "No visible focus indicator" on the Checkbox, Radio, Toggle and Input / Text Focus variants: the rings and borders are visible in the screenshots. Button Type=Link Focus "fill 1.0:1": the fill is `bg/primary` under the focus ring by design (build note). 25 `disabled-no-context` warnings on Button: this is handled in code with aria-disabled and a tooltip, not in the Figma component.

### Off-limits (`rules.json > off_limits.rules`)

| id | Violations | Note |
|---|---|---|
| no-component-specific-tokens | 0 | Still 200 variables. No btn/input/card tokens were added |
| no-hardcoded-values | 0 | Builder scan (fills, strokes, padding, gap, radius) |
| originals-untouched | 0 | The open file key is not a Trianglz original |
| no-detach | 0 | Builder scan. Nested instances were confirmed through lint instance IDs |
| no-default-names | 0 | Builder scan. The audit engine names "Input / Text" as an auto-generated layer name. This is a heuristic false positive (the "Text" word) |
| docs-in-setup | 0 | Component docs sit on ➜ pages in their ⭐ group. No foundation docs are outside ⭐Setup |
| no-remote-assets | 0 | 0 remote variables. Components are all local (73 local) |
| no-dark-duplicates | 0 | No `Mode` axis in any of the 33 sets |
| real-icons-only | 0 | Every icon seen is a Lucide glyph at icon sizes. The instance type can't be read without execute (builder: 0 detached) |
| no-color-styles | not re-checked | The styles API needs REST (token expired). Foundation: 0 paint styles, and no builder change reported |
| recolor-keeps-names, no-auto-install, no-push, relative-paths | n/a for Figma | Enforced by tools and hooks |

Known violations (template debt): none. `color/btn/*` doesn't exist in this file.

## Findings

| # | Node (set / variants) | Page | Issue | Fix | Severity |
|---|---|---|---|---|---|
| D1 | Checkbox `Checked=Unchecked, State=Hover`; Radio `Selected=Off, State=Hover`; Input / Text, Input / Password, Input / Date, Input / Phone `State=Hover`; Text Area `State=Hover`; Select / Dropdown `Open=False, State=Hover`; Search `State=Hover` (9 variants in 9 sets) | ➜ Checkboxes, ➜ Radio Buttons, ➜ Input Fields and Dropdown, ➜ Text Area | Hover changes the stroke from `border/input` to `border/strong`, but both alias `gray/500` in Dark. Hover looks exactly like Default (confirmed in the screenshots) | Token fix, no component edits: re-alias `color/border/strong` to `gray/400` (#94A3B8). Also check the other `border/strong` users. Or give Hover a fill change (`bg/subtle`) | High (a state can't be seen) |
| D2 | Menu Item `Type=Danger, State=Selected` label | ➜ Input Fields and Dropdown | `text/error` red/400 on `bg/muted` gray/700 = 3.74:1, below 4.5 | Use `bg/subtle` (5.29:1) for Selected like Hover/Focus, or remove the Danger x Selected combination (a destructive action is never "selected") | Medium |
| D3 | Token `color/action/secondary/border` (gray/600), used by Button Type=Outline (30 variants), Icon Button Type=Outline (25), Stepper Decrease/Increase buttons, Upload Field "Browse Button", Modal secondary buttons | ➜ Buttons & Links (and nested uses) | 2.66:1 on bg/primary, 2.4:1 on bg/secondary, 1.9:1 on bg/subtle. Below `rules.json` ui_boundary 3.0. The labels and icons themselves pass, so WCAG 1.4.11 is arguable, but the project rule is 3:1 | Re-alias to `gray/500` (4.24 / 3.75 / 3.07:1). Add the pair `action/secondary/border` on bg/primary and bg/secondary to `rules.json > contrast_pairs` | Medium |
| D4 | Upload Field (no **Focus**, no Disabled); Select / Dropdown (no Success, no closed Focus); Text Area (no Success); OTP Field (no Disabled, no Success); OTP Cell (no Hover); Breadcrumb Item (no Disabled); Nav Item (no Disabled) | ⭐Form Elements, ⭐Navigation | Missing states from Web skill section 6 and `rules.json > components.required_states_*`. Focus on Upload Field is required (`accessibility.focus.required_on` = every interactive component) | Add the variants. Breadcrumb Item and Nav Item Disabled can be declared N/A in the skill instead, if Abdul agrees | Medium (Upload Focus), Low (others) |
| D5 | Stepper (0 properties: value not exposed); Text Area (no Message, Hint or placeholder TEXT, only Show Message); Select / Dropdown (only Label: no Placeholder/Value, Hint, Message, Show Optional); Upload Field (only Label: format hint, error message and file name not exposed); OTP Field (only Label: helper/error message not exposed); Input / Text, Password, Date, Phone (no Placeholder/Value TEXT) | ⭐Form Elements | Visible strings with no TEXT property, and a different property API across the input family (Web skill section 6: "TEXT properties for every visible string"; "hint and error, same in every input") | Add TEXT properties (Value, Placeholder, Message, Hint) and match Show Hint/Show Message/Show Optional across Input/*, Text Area, Select, Upload Field and OTP Field | Medium |
| D6 | OTP Cell `State=Default` vs `State=Filled` | ➜ Input Fields and Dropdown | The two look identical: Default shows the digit "4" (the Digit property default), and the borders match | Show Default empty (hide the digit layer, or a variant-level empty value) and give Filled `border/strong` once D1 is fixed | Low |
| D7 | Set names: Menu Item, OTP Cell, OTP Field, Tab, Pagination Item, Breadcrumb Item, Nav Item. Axis: Toggle `On` (values On/Off, which reads `On=Off`) | ⭐Form Elements, ⭐Navigation | The Web skill section 6 says `Family / Variant` (examples: Menu / Item, OTP / Cell, OTP / Field, Tabs / Item). Input / * and Select / Dropdown follow it; these 7 don't | Rename now, before the registry and Storybook exist: Menu / Item, OTP / Cell, OTP / Field, Tabs / Item, Pagination / Item, Breadcrumb / Item, Sidebar / Item (or Nav / Item). Rename the Toggle axis to `Checked` or `Value` | Low |
| D8 | Breadcrumb Item (4 variants), 20px high | ➜ Pagination, Tabs & Breadcrumb | Below `rules.json` touch_target hard_min 24. It passes WCAG 2.5.8 only through the spacing exception | Min height 24 (padding `space/1` top and bottom) or note the exception in the component description | Low |
| N1 | Input / * Error and Success message text, and Text Area / Select error text | ⭐Form Elements | **Needs check**: these variants show their own texts ("Enter the name as it appears on the ID", "Looks good") while the Message property default is "Helper text". That suggests the error/success text layers are not bound to `Message`, so users would have to override text directly | Caller: read `componentPropertyReferences.characters` on those text layers with figma_execute. Bind them to Message if they are unbound | Open |
| N2 | All atoms | all | **Needs check**: "atoms contain only Icon instances" can't be read without execute. Visually, the separators, checks, spinners and chevrons match the Lucide geometry at 16/20/24 | Caller: list the child instance mainComponents of every atom and expect only `Icon/*` | Open |

### Open decisions (not counted as defects)
- **O1 Menu and Menu Item placement.** They sit on ⭐Form Elements ➜ Input Fields and Dropdown, which matches Web skill section 1 (it lists Menu on that page) and Select uses them. But `memory/decisions.md` and the skill's routing table put action menus under ⭐Navigation. Pick one and update the other rule.
- **O2 Inventory gaps against Web skill section 6:** Input / URL, Input / Card Number and Avatar Upload are not built, and ➜ Avatars & Upload Image holds only Avatar. There is also no ➜ Favicon page. Build them or record them as out of scope in `Project_Brief.md`.
- **O3 Pressed states.** `rules.json > required_states_interactive` lists Pressed for every interactive component. Only Button and Icon Button have it (Checkbox, Radio, Toggle, Tab, Pagination Item, Breadcrumb Item, Menu Item and Nav Item don't). Web skill section 6 doesn't require it for those atoms. Align the two sources.

### Accepted gaps (listed, not counted)
- Avatar has no Photo type (no image asset).
- Text and instance-swap defaults apply to every variant. Examples: Menu Item Danger shows "Edit appointment" with the edit icon; Tooltip Large shows the Small text "Edit appointment" as its body; Modal Danger shows the Default title "Reschedule appointment"; Badge shows "Confirmed" on every status; the Hint default "As written on the ID card" is repeated on Password, Date and Phone (hidden by default). The ➜ Popups page shows a correctly overridden Danger example instance.

### Info
- The Button Loading variants show the Loader icon in the leading slot. Filled Disabled uses `opacity/disabled` on each type's own colors (correct, unlike Trianglz).
- Inputs (40px) and Button xs/sm/base (32/36/40px) are below the 44px recommended target but above the 24px hard minimum, as the Web skill specifies.
- The Toast title uses `text/primary` and the Alert title uses `text/{status}`. Both pass contrast. The status meaning is also carried by the icon.

## Screenshots (captured this session with figma_capture_screenshot; Dark only by design; not saved to the repo)
- Every set was captured: Button, Icon Button, Checkbox, Radio, Toggle, Badge, Avatar, Tooltip, Tab, Pagination Item, Breadcrumb Item, Menu Item, OTP Cell, Nav Item, Input / Text, Password, Date, Phone, Text Area, Search, Upload Field, OTP Field, Stepper, Alert, Toast, Tab Bar, Menu, Pagination, Breadcrumb, Select / Dropdown, Modal, Sidebar, Top Bar.
- Pages with their dark documentation frames: ➜ Popups, ➜ Navigation Bars, ➜ Tooltips, ➜ Buttons & Links, ➜ Pagination, Tabs & Breadcrumb.
- Flagged visually: D1 (Hover the same as Default in 9 sets), D2 (Menu Item Danger Selected), D3 (faint Outline borders on ➜ Buttons & Links), D6 (OTP Cell Default = Filled).

## Changes since the previous report (`2026-09-30-build.md`, Foundation step)
- New: 33 component sets and components (423 variants) and the new page ➜ Navigation Bars. The Foundation report had only 40 Icon/* components.
- Variables unchanged: 200 in 6 collections, Semantic still has one mode "Dark", 0 remote.
- Checklist items that were N/A before now have numbers: states (7 sets with gaps, 9 Hover variants that look like Default), properties (6 families), touch targets (1 set), slots (still N/A, no registry).
- New contrast findings come from component-level pairs that aren't in `rules.json > contrast_pairs` (D2, D3). All 63 listed pairs still pass.

## Follow-up (same day, fixed by the builder)
- D1 fixed: `color/border/strong` now aliases `gray/400`, so Hover is visible on Checkbox, Radio, Inputs, Text Area, Select and Search (no component edits).
- D2 fixed: Menu / Item `Type=Danger, State=Selected` uses `bg/subtle` (text/error 5.3:1).
- D3 fixed: `color/action/secondary/border` now aliases `gray/500` (4.24 / 3.75 / 3.07:1 on bg/primary / secondary / subtle); pairs added to `rules.json > contrast_pairs` (67 pairs, 0 failing).
- D4 fixed: added Upload Field Focus + Disabled, Select Open=False Focus + Success, Text Area Success, OTP / Cell Hover + Success, OTP / Field Disabled + Success, Breadcrumb / Item Disabled, Sidebar / Item Disabled (434 variants now).
- D5 fixed: new TEXT properties: Input / * Placeholder, Value, Error Message, Success Message; Text Area Placeholder, Value, Message, Error Message, Success Message; Select Placeholder, Value, Error Message; Upload Field Format Hint, File Name, Error Message; OTP / Field Message, Error Message, Success Message; Stepper Value.
- D6 fixed: OTP / Cell Default and Focus hide the digit.
- D7 fixed: renamed Menu / Item, OTP / Cell, OTP / Field, Tabs / Item, Tabs / Bar, Pagination / Item, Breadcrumb / Item, Sidebar / Item; Toggle axis `On` renamed `Value` (Value=Off / On).
- D8 fixed: Breadcrumb / Item is 28px high (space/1 vertical padding).
- N1: Error/Success messages are now bound to Error Message / Success Message properties.
- N2: atoms nest only Icon instances, except Sidebar / Item (has a Badge) which is documented as a Molecule.
- O1 decided: Menu and Menu / Item moved to a new page `➜ Menus` under ⭐Navigation (Abdul's routing rule: actions go to ⭐Navigation).
- O2: Input / URL, Input / Card Number, Avatar Upload and ➜ Favicon are out of scope for v1 (listed in gaps).
- O3: Pressed is kept only where the Web skill requires it (Button, Icon Button).
- Found while fixing: cloned variants lost their property references; re-linked 21 layers. Re-scan: 33 sets, 434 variants, 0 unbound values, 0 dead properties, 0 detached, 0 default names.
