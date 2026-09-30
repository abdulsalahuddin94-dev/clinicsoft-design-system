---
name: clinicsoft-navigation
description: Use when building, auditing or coding actions and navigation with the ClinicSoft Design System (Web, Dark only) - Button, Icon Button, Tabs / Item, Tabs / Bar, Pagination / Item, Pagination, Breadcrumb / Item, Breadcrumb, Sidebar / Item, Sidebar, Top Bar, Menu / Item, Menu. Tells the agent which component and variant to use, how it is tokenized, and when each is appropriate.
---

# ClinicSoft DS - Navigation

> **Find by name.** Every set is found by its exact name on its page. No node IDs are stored here.

> **Data files (source of truth for values):** `../../data/tokens.json`, `../../data/component-registry.json` (variants, properties, nests, slots), `../../data/rules.json`, `../../data/screen-templates.json`, `../../docs/decisions.md`. When a number here and the JSON differ, the JSON wins.

**Load `../../Foundation_Skill/SKILL.md` first** (tokens, styles, icons, file structure, build order and atomic rules live there).

Scope: the **⭐Navigation** page group only: ➜ Buttons & Links, ➜ Pagination, Tabs & Breadcrumb, ➜ Navigation Bars, ➜ Menus. Platform: Web (Tailwind). Theme: **Dark only** (one Semantic mode; there are no Light screenshots by design).

Reference files:
- `references/components.md` - full entry per component: tier, variants, properties and defaults, Figma description, use / do not use, nests, tokens, accessibility.
- `references/gaps.md` - open items and accepted limits.
- `references/screens/<name>-dark.png` - one Dark screenshot per component showing every variant.

---

## 1. Inventory

| Component | Tier | Page | Variants | Axes / properties |
|---|---|---|---|---|
| Button | Atom | ➜ Buttons & Links | 150 | Type (Filled, Pill, Outline, Link, Danger) x Size (xs, sm, base, lg, xl) x State (Default, Hover, Pressed, Focus, Disabled, Loading) · Label, Show Leading/Trailing Icon, Leading/Trailing Icon |
| Icon Button | Atom | ➜ Buttons & Links | 100 | Type (Filled, Outline, Ghost, Danger) x Size x State (Default, Hover, Pressed, Focus, Disabled) · Icon |
| Tabs / Item | Atom | ➜ Pagination, Tabs & Breadcrumb | 10 | Type (Underline, Segmented) x State (Default, Hover, Selected, Focus, Disabled) · Label, Show Icon, Icon |
| Pagination / Item | Atom | ➜ Pagination, Tabs & Breadcrumb | 5 | State (Default, Hover, Current, Focus, Disabled) · Page |
| Breadcrumb / Item | Atom | ➜ Pagination, Tabs & Breadcrumb | 5 | State (Default, Hover, Current, Focus, Disabled) · Label, Show Separator |
| Menu / Item | Atom | ➜ Menus | 10 | Type (Default, Danger) x State (Default, Hover, Selected, Focus, Disabled) · Label, Show Leading Icon, Leading Icon |
| Tabs / Bar | Molecule | ➜ Pagination, Tabs & Breadcrumb | 2 | Type (Underline, Segmented) · 4 exposed Tabs / Item |
| Pagination | Molecule | ➜ Pagination, Tabs & Breadcrumb | 1 | Show Summary, Summary · exposed items |
| Breadcrumb | Molecule | ➜ Pagination, Tabs & Breadcrumb | 1 | 3 exposed Breadcrumb / Item |
| Sidebar / Item | Molecule | ➜ Navigation Bars | 5 | State (Default, Hover, Selected, Focus, Disabled) · Label, Icon, Show Count (nests Badge) |
| Menu | Molecule | ➜ Menus | 1 | 4 exposed Menu / Item |
| Sidebar | Organism | ➜ Navigation Bars | 1 | 8 exposed Sidebar / Item |
| Top Bar | Organism | ➜ Navigation Bars | 1 | Page Title, Show Primary Action, Show Search · nests Search, Icon Button, Button, Avatar |

Atomic structure:
```
Icon/* ─┬─> Button, Icon Button, Tabs / Item, Pagination / Item, Breadcrumb / Item, Menu / Item   (Atoms)
        ├─> Tabs / Bar, Pagination (+ Icon Button), Breadcrumb, Menu, Sidebar / Item (+ Badge)     (Molecules)
        └─> Sidebar (Sidebar / Item), Top Bar (Search, Icon Button, Button, Avatar)                 (Organisms)
```

## 2. Which component

| The user needs to... | Use | Not |
|---|---|---|
| Run the main action of a view (Save, Book) | Button Filled (one per view) | two Filled buttons |
| Run a secondary action (Cancel, Back, Export) | Button Outline | Filled |
| A light inline action (View all, Learn more) | Button Link | Outline |
| Delete or cancel something for good | Button Danger, behind a Modal Type=Danger | Filled |
| Marketing-style or chip-like CTA | Button Pill (never mixed with Filled on one surface) | |
| An action shown only as an icon (Edit, More, Close, Notifications) | Icon Button + Tooltip | Button with no label |
| Switch sections of one record (Overview / Visits / Files) | Tabs / Bar Underline | Buttons, Sidebar |
| Switch views (Day / Week / Month, List / Grid) | Tabs / Bar Segmented | Radio |
| Move through pages of a long list | Pagination | infinite scroll in tables |
| Show where a detail page sits | Breadcrumb | Sidebar |
| Main app navigation | Sidebar (Desktop, iPad) | Tabs |
| Page header with title, search, notifications, main action, user | Top Bar | custom header |
| Row or "More" actions | Menu (opened from Icon Button `Icon/More Horizontal`) | Select / Dropdown |

## 3. Button sizes

| Size | Height | Use |
|---|---|---|
| xs | 32 | dense tables, inline tags |
| sm | 36 | toolbars, cards |
| base | 40 | default; matches 40px inputs; Modal and form actions |
| lg | 48 | mobile primary action |
| xl | 56 | rare hero actions |

Radius `radius/md` (Pill `radius/full`). Keep one size per row of buttons.

## 4. Rules for AI agents

- Use instances of these sets; never draw a button, tab or nav item from frames. Never detach.
- One Filled (or Pill) button per view. Pair it with Outline for the secondary action; right-align action groups in forms and Modals (primary on the right), gap `space/3`.
- Verb-first labels ("Save changes", "Book appointment", "Cancel appointment"), never "OK" when a specific verb exists.
- Filled buttons use near-black text on green (`action/primary/text`); never change it to white (3.57:1 fails).
- Pressed brand state is lighter (`brand/400`) by design.
- Danger only for destructive actions, always confirmed with Modal Type=Danger.
- Icon Button always has an `aria-label` and a Tooltip with the same text.
- Set labels, icons and counts through properties and exposed nested instances; hide unused items (tabs, menu items, sidebar items) instead of detaching.
- Set `State` only to show a static mock; default everything to `Default` (Selected / Current for the active item).
- Tabs never trigger actions. 2 to 7 tabs per bar, exactly one Selected; more -> Select / Dropdown or Sidebar.
- Focus: most atoms use `focus-ring-offset`; list rows (Sidebar / Item, Menu / Item) use the inset `focus-ring`.
- Selected tab = 2px `border/brand` underline + Semi Bold (not color only).

## 5. Web / Tailwind map

| Figma | Code |
|---|---|
| Filled base | `h-10 px-5 rounded-md bg-[var(--color-action-primary-bg)] text-[var(--color-action-primary-text)] text-sm font-medium hover:bg-[var(--color-action-primary-bg-hover)] active:bg-[var(--color-action-primary-bg-active)]` |
| Outline | `border border-[var(--color-action-secondary-border)] text-[var(--color-action-secondary-text)] hover:bg-[var(--color-action-secondary-bg)]` |
| Link | `text-[var(--color-text-link)] hover:text-[var(--color-text-link-hover)]` |
| Danger | `bg-[var(--color-action-danger-bg)] text-[var(--color-action-danger-text)] hover:bg-[var(--color-action-danger-bg-hover)]` |
| Pill | Filled + `rounded-full` |
| Focus | `focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-border-focus)]` (effect `focus-ring-offset`) |
| Disabled | `disabled:opacity-50 disabled:cursor-not-allowed` on the type's own colors |
| Loading | `aria-busy="true"` + spinner (`Icon/Loader`), label kept |
| Sizes | xs `h-8` · sm `h-9` · base `h-10` · lg `h-12` · xl `h-14` |

Semantics: `<button type>` for actions, `<a href>` for navigation. Tabs: `role="tablist"` / `role="tab"` + `aria-selected` / `role="tabpanel"`. Pagination: `<nav aria-label="Pagination">`, `aria-current="page"`. Breadcrumb: `<nav aria-label="Breadcrumb">`. Sidebar: `<nav aria-label="Main">`. Top Bar: `<header>`. Menu: `role="menu"` / `role="menuitem"`, Escape closes and returns focus.
