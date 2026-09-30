# Navigation - component reference (2026-09-30)

> Figma file "NEW PROJECT Design system" (ClinicSoft). Find every set by **name** on its page. No node IDs are stored here.
> Source: `../../../data/source/components-live.json` (live read of the DS file: full descriptions, every property with type, default and options). Screenshots: `screens/<name>-dark.png`, one per component, Dark only by design (ClinicSoft has no Light mode).
> "Figma description" blocks are copied verbatim from Figma (Purpose / Usage rules / Accessibility).
> Tokens: from the descriptions, the audits and the build notes. Every layer is bound (0 unbound values); tokens not named in a description are marked as observed (see `gaps.md`).
> Single components (Pagination, Breadcrumb, Sidebar, Top Bar, Menu) have no variants; their content is set through exposed nested instances.

---

## Button
- Tier: **Atom** · Page: ➜ Buttons & Links · 150 variants · Screenshot: `screens/button-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| Type | VARIANT | Filled | Filled, Pill, Outline, Link, Danger |
| Size | VARIANT | xs | xs, sm, base, lg, xl |
| State | VARIANT | Default | Default, Hover, Pressed, Focus, Disabled, Loading |
| Label | TEXT | "Button" | |
| Show Leading Icon | BOOLEAN | false | |
| Show Trailing Icon | BOOLEAN | false | |
| Leading Icon | INSTANCE_SWAP | Icon/Add | any `Icon/*` |
| Trailing Icon | INSTANCE_SWAP | Icon/Arrow Right | any `Icon/*` |

- Figma description:
  > Atom. Purpose: triggers an action (save, book, submit) or, as Type=Link, a light inline action.
  > Usage rules: one Filled (or Pill) button per view for the main action; Outline for secondary actions; Link for low-emphasis inline actions; Danger only for destructive actions (delete patient record, cancel appointment) and always behind a confirmation. Use Loading while the action runs and keep the label. Do not use a Button to navigate between pages (use Link text or navigation components) and never use Danger for non-destructive actions.
  > Accessibility: minimum size 32px (xs) and 40px (base) for primary actions; label text on filled green is color/action/primary/text (gray/950, 5.6:1); Focus shows the focus-ring-offset effect; Disabled uses opacity/disabled and must not be the only way to explain why an action is unavailable.
- Use: Save changes, Book appointment, New appointment (Top Bar), Sign in; Cancel (Outline); Forgot password, View all (Link); Delete record (Danger, behind a Modal).
- Do not use: to move between pages (**Sidebar / Item**, **Breadcrumb**, **Tabs / Item**, a link); icon-only actions (**Icon Button**); Danger on a non-destructive action.
- Nests: `Icon/*` through Leading Icon / Trailing Icon; Loading shows `Icon/Loader` in the leading slot.
- Sizes: xs 32 · sm 36 · base 40 · lg 48 · xl 56. Radius `radius/md` (Pill `radius/full`).
- Tokens:

| Type | Default | Hover | Pressed | Text |
|---|---|---|---|---|
| Filled / Pill | `action/primary/bg` (brand/600) | `action/primary/bg-hover` (brand/500) | `action/primary/bg-active` (brand/400, lighter by design) | `action/primary/text` (gray/950) |
| Outline | no fill, 1px `action/secondary/border` | `action/secondary/bg` | `action/secondary/bg-hover` | `action/secondary/text` |
| Link | no fill | `text/link-hover` | | `text/link` |
| Danger | `action/danger/bg` | `action/danger/bg-hover` | `action/danger/bg-active` | `action/danger/text` (white, 4.83:1) |

  Focus = `focus-ring-offset` on every Type (Link keeps a `bg/primary` fill under the ring). Disabled = the Type's own colors at `opacity/disabled`. Loading = Default colors + `Icon/Loader`, label kept. (Outline/Link Hover and Pressed fills observed.)
- Accessibility: see description. In code: `<button type>` for actions, `<a href>` when it navigates; Loading sets `aria-busy="true"`.

## Icon Button
- Tier: **Atom** · Page: ➜ Buttons & Links · 100 variants · Screenshot: `screens/icon-button-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| Type | VARIANT | Filled | Filled, Outline, Ghost, Danger |
| Size | VARIANT | xs | xs, sm, base, lg, xl |
| State | VARIANT | Default | Default, Hover, Pressed, Focus, Disabled |
| Icon | INSTANCE_SWAP | Icon/Settings | any `Icon/*` |

- Figma description:
  > Atom. Purpose: an action shown only as an icon (edit, delete, more, close, settings) where space is tight, e.g. table rows and toolbars.
  > Usage rules: use only for actions whose icon is universally understood; add a Tooltip with the action name; Filled for the main action in a toolbar, Outline or Ghost for the rest, Danger for destructive actions behind a confirmation. Do not use for primary page actions (use Button with a label).
  > Accessibility: minimum 32x32 (xs), 40x40 recommended; icon color on filled green is color/icon/inverse; needs an accessible name (aria-label) in code; Focus shows focus-ring-offset; Disabled uses opacity/disabled.
- Use: table row actions (Edit, Delete, More Horizontal), Close in Modal / Alert / Toast, Notifications in the Top Bar, show/hide password, Stepper, Pagination Previous/Next.
- Do not use: when the icon is not universally understood or for primary page actions (**Button** with a label).
- Nests: one `Icon/*` through Icon.
- Tokens: Filled `action/primary/*` + `icon/inverse`; Outline `action/secondary/border` + `icon/default`; Ghost no fill, Hover `action/secondary/bg` (observed); Danger `action/danger/*`; square, `radius/md`; Focus `focus-ring-offset`; Disabled `opacity/disabled`.
- Accessibility: see description.

## Tabs / Item
- Tier: **Atom** · Page: ➜ Pagination, Tabs & Breadcrumb · 10 variants · Screenshot: `screens/tabs-item-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| Type | VARIANT | Underline | Underline, Segmented |
| State | VARIANT | Default | Default, Hover, Selected, Focus, Disabled |
| Label | TEXT | "Appointments" | |
| Show Icon | BOOLEAN | false | |
| Icon | INSTANCE_SWAP | Icon/Calendar | any `Icon/*` |

- Figma description:
  > Atom. Purpose: one tab that switches between views of the same page (Patient: Overview / Visits / Prescriptions / Files).
  > Usage rules: use inside Tabs / Bar only; Underline for page-level sections, Segmented for compact view switches (Day / Week / Month); exactly one Selected per bar; 2 to 7 tabs; labels are one or two words. To move to another page use navigation (Sidebar, Breadcrumb), not tabs.
  > Accessibility: 40px high; selected tab has a 2px color/border/brand underline plus semibold text, so the state is not color only; role="tab" with arrow key navigation in code; Focus shows focus-ring-offset.
- Use: only inside **Tabs / Bar**.
- Do not use: alone; to trigger actions (**Button**); to move to another page (**Sidebar**, **Breadcrumb**).
- Nests: optional `Icon/*` through Icon.
- Tokens: 40px, `sm/Medium`; Selected 2px `border/brand` underline + Semi Bold `text/primary`; Focus `focus-ring-offset`; Disabled `opacity/disabled`. Observed: Default `text/secondary`, Segmented Hover/Selected fill `bg/subtle`.
- Accessibility: see description.

## Tabs / Bar
- Tier: **Molecule** · Page: ➜ Pagination, Tabs & Breadcrumb · 2 variants · Screenshot: `screens/tabs-bar-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| Type | VARIANT | Underline | Underline, Segmented |
| (exposed) 4 x Tabs / Item | nested | Underline "Overview, Visits, Prescriptions, Files"; Segmented "Day, Week, Month, List" | Label, State, Show Icon, Icon on each |

- Figma description:
  > Molecule (4 Tabs / Item atoms, exposed). Purpose: switch between sections of one page (patient Overview / Visits / Prescriptions / Files) or between views (Day / Week / Month).
  > Usage rules: Underline for page sections, Segmented for compact view switches; exactly one tab Selected; 2 to 7 tabs, hide extra Tab instances rather than detaching; set each tab through its exposed properties.
  > Accessibility: role="tablist" with arrow-key navigation in code; the selected tab is marked by weight + underline/fill, not color only.
- Use: Underline under a page title for sections of one record; Segmented for calendar Day / Week / Month or List / Grid.
- Do not use: more than 7 tabs or long labels (**Select / Dropdown** or **Sidebar**); actions.
- Nests: 4 x **Tabs / Item** (exposed).
- Tokens: Underline bottom line `border/default`; Segmented track `bg/secondary` + `border/default`, `radius/lg`, padding `space/1` (observed).
- Accessibility: see description.

## Pagination / Item
- Tier: **Atom** · Page: ➜ Pagination, Tabs & Breadcrumb · 5 variants · Screenshot: `screens/pagination-item-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| State | VARIANT | Default | Default, Hover, Current, Focus, Disabled |
| Page | TEXT | "1" | |

- Figma description:
  > Atom. Purpose: one page number in a Pagination bar (patient lists, invoices, lab results).
  > Usage rules: used only inside Pagination; Current marks the page shown; use "…" text in a Default item for skipped ranges; previous/next are Icon Buttons (Ghost) in the Pagination molecule.
  > Accessibility: 40x40 target; Current uses bg/brand with text/on-brand (5.6:1) and aria-current="page" in code; Focus shows focus-ring-offset.
- Use: only inside **Pagination**.
- Do not use: alone.
- Nests: none.
- Tokens: 40x40, `sm/Medium`, `radius/md`; Current `bg/brand` + `text/on-brand`; Focus `focus-ring-offset`; Disabled `opacity/disabled`. Observed: Default `text/secondary`, Hover `bg/subtle`.
- Accessibility: see description.

## Pagination
- Tier: **Molecule** · Page: ➜ Pagination, Tabs & Breadcrumb · single component · Screenshot: `screens/pagination-dark.png`

| Property | Type | Default |
|---|---|---|
| Show Summary | BOOLEAN | true |
| Summary | TEXT | "Showing 11-20 of 118 patients" |
| (nested) Pagination / Item, 2 x Icon Button | nested | Page and State of each item; State of Previous / Next |

- Figma description:
  > Molecule (Pagination / Item atoms, 2 Icon Button atoms). Purpose: move between pages of long lists (patients, invoices, lab results).
  > Usage rules: show first, last, current and neighbours with "…" for gaps; Previous/Next disable at the ends (swap to the Disabled Icon Button variant); keep the result summary so users know the list size; for feeds use "Load more" instead.
  > Accessibility: nav element with aria-label="Pagination"; current page aria-current="page"; 40px targets.
- Use: under tables and long lists (patients, invoices, lab results).
- Do not use: feeds or short lists ("Load more" **Button** Outline); wizard steps.
- Nests: **Icon Button** Ghost (`Icon/Chevron Left`, `Icon/Chevron Right`), **Pagination / Item** x N.
- Tokens: summary `sm/Regular` `text/muted` (observed).
- Accessibility: see description.

## Breadcrumb / Item
- Tier: **Atom** · Page: ➜ Pagination, Tabs & Breadcrumb · 5 variants · Screenshot: `screens/breadcrumb-item-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| State | VARIANT | Default | Default, Hover, Current, Focus, Disabled |
| Label | TEXT | "Patients" | |
| Show Separator | BOOLEAN | true | |

- Figma description:
  > Atom. Purpose: one level of the page path (Patients > Amira Saleh > Visit 12 Mar).
  > Usage rules: only inside Breadcrumb; every level except the last is a link; the last is Current with Show Separator off; keep labels short (truncate names in code).
  > Accessibility: links use color/text/link (brand/400, 9:1 on bg/primary); Current has aria-current="page"; separators are decorative (aria-hidden) in code.
- Use: only inside **Breadcrumb**.
- Do not use: alone.
- Nests: `Icon/Chevron Right` (separator).
- Tokens: `sm/Medium`; links `text/link`, Hover `text/link-hover` (observed); Current `text/primary` Semi Bold; Focus `focus-ring-offset`; Disabled `opacity/disabled`; 28px high (`space/1` vertical padding).
- Accessibility: see description.

## Breadcrumb
- Tier: **Molecule** · Page: ➜ Pagination, Tabs & Breadcrumb · single component · Screenshot: `screens/breadcrumb-dark.png`
- Properties: none of its own. 3 nested **Breadcrumb / Item** instances, exposed (Label, State, Show Separator). Defaults "Patients > Amira Saleh > Visit 12 Mar"; the last is Current with no separator.
- Figma description:
  > Molecule (Breadcrumb / Item atoms, exposed). Purpose: show where the page sits and link back to parent pages (Patients > Amira Saleh > Visit 12 Mar).
  > Usage rules: use on pages two or more levels deep; the last level is Current without a separator; hide middle levels on mobile; never use it as the main navigation.
  > Accessibility: nav with aria-label="Breadcrumb"; links 9:1 on bg/primary; last item aria-current="page".
- Use: detail pages two or more levels deep (patient record, visit, invoice).
- Do not use: as main navigation (**Sidebar**); on top-level pages.
- Nests: **Breadcrumb / Item** x 3 (exposed).
- Accessibility: see description.

## Sidebar / Item
- Tier: **Molecule** (nests the Badge atom) · Page: ➜ Navigation Bars · 5 variants · Screenshot: `screens/sidebar-item-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| State | VARIANT | Default | Default, Hover, Selected, Focus, Disabled |
| Label | TEXT | "Appointments" | |
| Icon | INSTANCE_SWAP | Icon/Calendar | any `Icon/*` |
| Show Count | BOOLEAN | false | |

- Figma description:
  > Molecule (Icon, label and Badge atom). Purpose: one destination in the Sidebar (Dashboard, Appointments, Patients, Billing, Settings).
  > Usage rules: used inside Sidebar only; exactly one Selected (the current section); Show Count for pending items (e.g. new lab results); labels are nouns.
  > Accessibility: 40px rows; Selected = bg/subtle + semibold + brand icon, not color only; aria-current="page" in code; Focus shows the inset focus-ring.
- Use: only inside **Sidebar**.
- Do not use: for actions (**Button**, **Menu / Item**); inside page content.
- Nests: `Icon/*` through Icon; **Badge** (count) when Show Count = true.
- Tokens: 40px rows, `sm/Medium`; Selected `bg/subtle` + Semi Bold + `icon/brand`; Focus `focus-ring` (inset); Disabled `opacity/disabled`. Observed: Default `text/secondary` + `icon/default`, Hover `bg/subtle`, `radius/lg`.
- Accessibility: see description.

## Sidebar
- Tier: **Organism** · Page: ➜ Navigation Bars · single component (264 x 800) · Screenshot: `screens/sidebar-dark.png`
- Properties: none of its own. Nested **Sidebar / Item** instances, exposed (Label, Icon, Show Count, State). Defaults: logo `Icon/Heart Pulse` + "ClinicSoft"; Dashboard (`Icon/Home`), Appointments (`Icon/Calendar`, Selected), Patients (`Icon/Users`), Prescriptions (`Icon/Pill`), Lab Results (`Icon/File Text`, count 12), Messages (`Icon/Mail`); pinned at the bottom Settings (`Icon/Settings`) and Log Out (`Icon/Log Out`).
- Figma description:
  > Organism (Sidebar / Item molecules, exposed). Purpose: main navigation of the ClinicSoft web app on desktop and iPad.
  > Usage rules: 264px wide, full screen height, left side; one Sidebar / Item Selected for the current section; up to 8 main items, Settings and Log Out pinned at the bottom; collapse to a menu Icon Button in the Top Bar on mobile. Set each item through its exposed properties.
  > Accessibility: nav landmark with aria-label="Main"; current item aria-current="page"; keyboard order top to bottom.
- Use: every app page on Desktop and iPad, left of the **Top Bar**.
- Do not use: on mobile (collapse into the Top Bar menu Icon Button); for in-page sections (**Tabs / Bar**).
- Nests: **Sidebar / Item** x 8 (exposed), **Badge**, `Icon/Heart Pulse`.
- Tokens (observed): `bg/secondary`, right border `border/default`.
- Accessibility: see description.

## Top Bar
- Tier: **Organism** · Page: ➜ Navigation Bars · single component (1176 x 64) · Screenshot: `screens/top-bar-dark.png`

| Property | Type | Default |
|---|---|---|
| Page Title | TEXT | "Appointments" |
| Show Primary Action | BOOLEAN | true |
| Show Search | BOOLEAN | true |
| (nested) Search, Icon Button, Button, Avatar | nested | Placeholder; Icon; Label and Leading Icon; Initials |

- Figma description:
  > Organism (Search molecule, Icon Button, Button and Avatar atoms). Purpose: the header of every app page next to the Sidebar: page title, search, notifications, the page's main action and the signed-in user.
  > Usage rules: 64px high, fills the content width (1440 - 264 sidebar = 1176 on desktop); one Primary Action at most (it is the page's Filled button); hide Search on pages without searchable content; on mobile the title shrinks and a menu Icon Button opens the Sidebar.
  > Accessibility: header landmark; Notifications Icon Button needs aria-label and an unread count in text; tab order: title, search, notifications, action, avatar menu.
- Use: top of every app page, right of the **Sidebar**.
- Do not use: inside Modals or cards; with more than one Filled action.
- Nests: **Search**, **Icon Button** Ghost (`Icon/Bell`), **Button** Filled with `Icon/Add` ("New appointment"), **Avatar** Initials ("DK").
- Tokens (observed): `bg/primary`, bottom border `border/default`, title `xl/Semi Bold` `text/primary`.
- Accessibility: see description.

## Menu / Item
- Tier: **Atom** · Page: ➜ Menus · 10 variants · Screenshot: `screens/menu-item-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| Type | VARIANT | Default | Default, Danger |
| State | VARIANT | Default | Default, Hover, Selected, Focus, Disabled |
| Label | TEXT | "Edit appointment" | |
| Show Leading Icon | BOOLEAN | true | |
| Leading Icon | INSTANCE_SWAP | Icon/Edit | any `Icon/*` |

- Figma description:
  > Atom. Purpose: one option in a Menu or Select dropdown (row actions: Edit, Reschedule, Delete; select options: doctor names, clinics).
  > Usage rules: used inside Menu or Select only; Selected shows a check for the current value in a Select; Danger for destructive actions, placed last and separated; labels start with a verb for actions.
  > Accessibility: 40px high rows; Selected is shown by a check icon and semibold text, not color only; Focus shows the inset focus-ring; role="menuitem"/"option" in code.
- Use: only inside **Menu** or **Select / Dropdown**.
- Do not use: alone; as a navigation link (**Sidebar / Item**).
- Nests: `Icon/*` through Leading Icon; `Icon/Check` on Selected.
- Tokens: 40px rows; Default `text/primary` + `icon/default`; Danger `text/error` + `icon/error`; Hover, Focus and Selected `bg/subtle` (Danger Selected 5.3:1); Selected Semi Bold; Focus `focus-ring` (inset); Disabled `opacity/disabled`.
- Accessibility: see description.

## Menu
- Tier: **Molecule** · Page: ➜ Menus · single component (250 x 171) · Screenshot: `screens/menu-dark.png`
- Properties: none of its own. Nested **Menu / Item** instances, exposed (Label, Show Leading Icon, Leading Icon, Type, State). Defaults: Edit appointment (`Icon/Edit`), Reschedule (`Icon/Calendar`), Send reminder (`Icon/Bell`), divider, Cancel appointment (Type=Danger, `Icon/Delete`).
- Figma description:
  > Molecule (Menu / Item atoms, exposed). Purpose: a short list of actions opened from a button or row (row actions in the appointments table, "More" menus).
  > Usage rules: 2 to 8 items; destructive items last, after a divider, as Type=Danger; hide unused items instead of detaching; for picking a value use Select / Dropdown.
  > Accessibility: role="menu" with arrow-key navigation in code; closes on Escape and returns focus to the trigger; 40px rows.
- Use: row actions (opened from Icon Button `Icon/More Horizontal`), "More" menus, the avatar menu in the Top Bar.
- Do not use: to pick a value (**Select / Dropdown**); for navigation (**Sidebar**).
- Nests: **Menu / Item** x 4 (exposed), divider.
- Tokens (observed): `bg/secondary`, 1px `border/default`, `radius/lg`, divider `border/default`.
- Accessibility: see description.
