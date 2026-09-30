---
name: clinicsoft-data-display
description: Use when building, auditing or coding information display with the ClinicSoft Design System (Web, Dark only) - Badge, Avatar, Tooltip, Alert, Toast, Modal. Tells the agent which component and variant to use for status, people, hints, messages and dialogs, how each is tokenized, and when not to use it.
---

# ClinicSoft DS - Data Display

> **Find by name.** Every set is found by its exact name on its page. No node IDs are stored here.

> **Data files (source of truth for values):** `../../data/tokens.json`, `../../data/component-registry.json` (variants, properties, nests, slots), `../../data/rules.json`, `../../data/screen-templates.json`, `../../docs/decisions.md`. When a number here and the JSON differ, the JSON wins.

**Load `../../Foundation_Skill/SKILL.md` first** (tokens, styles, icons, file structure, build order and atomic rules live there).

Scope: the **⭐Data Display** page group only: ➜ Avatars & Upload Image, ➜ Tooltips, ➜ Banners, Badges & Toasts, ➜ Popups. Platform: Web (Tailwind). Theme: **Dark only** (one Semantic mode; there are no Light screenshots by design).

Reference files:
- `references/components.md` - full entry per component: tier, variants, properties and defaults, Figma description, use / do not use, nests, tokens, accessibility.
- `references/gaps.md` - open items and accepted limits.
- `references/screens/<name>-dark.png` - one Dark screenshot per component showing every variant.

---

## 1. Inventory

| Component | Tier | Page | Variants | Axes / properties |
|---|---|---|---|---|
| Badge | Atom | ➜ Banners, Badges & Toasts | 10 | Status (Info, Success, Warning, Error, Neutral) x Size (sm, md) · Label, Show Icon, Icon |
| Avatar | Atom | ➜ Avatars & Upload Image | 10 | Type (Initials, Icon) x Size (24, 32, 40, 60, 100) · Initials, Show Status |
| Tooltip | Atom | ➜ Tooltips | 8 | Arrow (Up, Down, Left, Right) x Size (Small, Large) · Text, Title |
| Alert | Molecule | ➜ Banners, Badges & Toasts | 4 | Status (Info, Success, Warning, Error) · Title, Message, Show Action, Show Close |
| Toast | Molecule | ➜ Banners, Badges & Toasts | 4 | Status (Info, Success, Warning, Error) · Title, Message, Show Action, Show Close |
| Modal | Organism | ➜ Popups | 2 | Type (Default, Danger) · Title, Body, Show Content, Show Close, exposed action Buttons |

Atomic structure:
```
Icon/* ─┬─> Badge, Avatar, Tooltip                                        (Atoms)
        ├─> Alert, Toast (status Icon, Button Link, Icon Button Close)    (Molecules)
        └─> Modal (Icon Button, Buttons, Input / Date, Select / Dropdown) (Organism)
```

## 2. Which component

| The user needs to... | Use | Not |
|---|---|---|
| Show a status word on a record (Confirmed, Pending, Cancelled, New, Draft) | Badge | colored text |
| Show a person | Avatar (Initials, or Icon when unknown) | a generic Icon |
| Name an icon-only action or explain a status | Tooltip Small | Alert |
| Add a short note with a title (lab test preparation) | Tooltip Large | Modal |
| Keep a message on the page until resolved | Alert | Toast |
| Confirm an action briefly | Toast | Alert, Modal |
| Ask for a decision or a short focused task | Modal Default | a new page |
| Confirm a destructive action | Modal Danger | Toast with Undo only |

Status mapping (Badge description, same in Alert and Toast): Success = confirmed / paid, Warning = pending / needs review, Error = cancelled / overdue, Info = new / informational, Neutral (Badge only) = draft / archived. Success uses the `green` (emerald) ramp, never the brand green.

## 3. Rules for AI agents

- Use instances of these sets; never draw a badge, alert or dialog from frames. Never detach.
- Status UI uses `bg/{status}`, `text/{status}`, `border/{status}`, `icon/{status}`; never button tokens.
- Always override the default text: Badge shows "Confirmed" on every Status, Tooltip Large shows the Small text as its body, and Modal Danger shows the Default title unless you set them.
- Modal Danger: title is a question ("Cancel this appointment?"), body says what happens and that it cannot be undone, buttons "Keep ..." (Outline) and the named action (Danger).
- Modal action row: right-aligned, primary on the right, gap `space/3`, `base` buttons.
- One Toast at a time, bottom-right on desktop and top on mobile; auto-hide after 5 s except Error; anything the user must act on goes to an Alert or Modal.
- Modal: 480px wide, `radius/2xl`, `shadow-xl`, over the `bg/overlay` scrim; forms longer than 5 fields go on a page.
- Avatar sizes: 24 dense tables, 32 lists, 40 headers, 60 profile cards, 100 profile page. Show Status only for online / available doctors.
- Tooltip uses the light inverse surface (`bg/inverse`) so it stands out on the dark UI.
- Every Icon Button gets a Tooltip with the same text as its `aria-label`.

## 4. Web / Tailwind map

| Figma | Code |
|---|---|
| Badge | `inline-flex rounded-full px-2 text-xs font-medium bg-[var(--color-bg-success)] text-[var(--color-text-success)]` (swap status) |
| Avatar | `rounded-full bg-[var(--color-bg-brand)] text-[var(--color-text-on-brand)] font-semibold` sizes `size-6/8/10/15/25` |
| Tooltip | `bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)] text-xs`, `role="tooltip"` |
| Alert | `rounded-lg border border-[var(--color-border-error)] bg-[var(--color-bg-error)]`, `role="alert"` or `role="status"` |
| Toast | `rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-subtle)]`, `aria-live="polite"` |
| Modal | `<dialog>` or `role="dialog" aria-modal="true"`, `bg-[var(--color-bg-secondary)] rounded-2xl`, scrim `bg-[var(--color-bg-overlay)]` |
