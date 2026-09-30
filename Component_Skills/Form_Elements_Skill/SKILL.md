---
name: clinicsoft-form-elements
description: Use when building, auditing or coding data entry with the ClinicSoft Design System (Web, Dark only) - Checkbox, Radio, Toggle, OTP / Cell, Input / Text, Input / Password, Input / Date, Input / Phone, Text Area, Search, Upload Field, OTP / Field, Stepper, Select / Dropdown. Tells the agent which component and variant to use for each clinic data-entry case, how it is tokenized, and when not to use it.
---

# ClinicSoft DS - Form Elements

> **Find by name.** Every set is found by its exact name on its page. No node IDs are stored here.

> **Data files (source of truth for values):** `../../data/tokens.json`, `../../data/component-registry.json` (variants, properties, nests, slots), `../../data/rules.json`, `../../data/screen-templates.json`, `../../docs/decisions.md`. When a number here and the JSON differ, the JSON wins.

**Load `../../Foundation_Skill/SKILL.md` first** (tokens, styles, icons, file structure, build order and atomic rules live there).

Scope: the **⭐Form Elements** page group only: ➜ Input Fields and Dropdown, ➜ Text Area, ➜ Checkboxes, ➜ Toggles, ➜ Radio Buttons. Platform: Web (Tailwind). Theme: **Dark only** (one Semantic mode; there are no Light screenshots by design).

Reference files:
- `references/components.md` - full entry per component: tier, variants, properties and defaults, Figma description, use / do not use, nests, tokens, accessibility.
- `references/gaps.md` - open items and accepted limits.
- `references/screens/<name>-dark.png` - one Dark screenshot per component showing every variant.

Menu and Menu / Item were moved to ⭐Navigation ➜ Menus on 2026-09-30 (actions go to Navigation). Select / Dropdown still nests them; see `../Navigation_Skill`.

---

## 1. Inventory

| Component | Tier | Page | Variants | Axes |
|---|---|---|---|---|
| Checkbox | Atom | ➜ Checkboxes | 15 | Checked (Unchecked, Checked, Indeterminate) x State (Default, Hover, Focus, Error, Disabled) |
| Radio | Atom | ➜ Radio Buttons | 10 | Selected (Off, On) x State (Default, Hover, Focus, Error, Disabled) |
| Toggle | Atom | ➜ Toggles | 8 | Value (Off, On) x State (Default, Hover, Focus, Disabled) |
| OTP / Cell | Atom | ➜ Input Fields and Dropdown | 7 | State (Default, Focus, Filled, Error, Disabled, Hover, Success) |
| Input / Text | Molecule | ➜ Input Fields and Dropdown | 7 | State (Default, Hover, Focus, Filled, Error, Success, Disabled) |
| Input / Password | Molecule | ➜ Input Fields and Dropdown | 7 | same State set |
| Input / Date | Molecule | ➜ Input Fields and Dropdown | 7 | same State set |
| Input / Phone | Molecule | ➜ Input Fields and Dropdown | 7 | same State set |
| Text Area | Molecule | ➜ Text Area | 7 | State (Default, Hover, Focus, Filled, Error, Disabled, Success) |
| Search | Molecule | ➜ Input Fields and Dropdown | 5 | State (Default, Hover, Focus, Filled, Disabled) |
| Upload Field | Molecule | ➜ Input Fields and Dropdown | 7 | State (Default, Hover, Uploading, Uploaded, Error, Focus, Disabled) |
| OTP / Field | Molecule | ➜ Input Fields and Dropdown | 5 | State (Default, Filled, Error, Disabled, Success) |
| Stepper | Molecule | ➜ Input Fields and Dropdown | 4 | State (Default, Min, Max, Disabled) |
| Select / Dropdown | Organism | ➜ Input Fields and Dropdown | 8 | Open (False, True) x State (Default, Hover, Filled, Error, Disabled, Focus, Success; Open=True: Focus) |

Atomic structure:
```
Icon/* ─┬─> Checkbox, Radio, Toggle, OTP / Cell                    (Atoms)
        ├─> Input / Text, Password, Date, Phone, Text Area, Search  (Molecules; Password and Search nest Icon Button)
        ├─> Upload Field (Button, Icon Button)                      (Molecule)
        ├─> OTP / Field (6 x OTP / Cell), Stepper (2 x Icon Button) (Molecules)
        └─> Select / Dropdown (field + Menu + Menu / Item, exposed) (Organism)
```

## 2. Which component

| The user needs to... | Use | Not |
|---|---|---|
| Type one line of free text (name, address, insurance no.) | Input / Text | Text Area |
| Type a password | Input / Password | Input / Text |
| Enter a date (birth, visit) | Input / Date | three Selects |
| Enter a phone number with country code | Input / Phone | Input / Text |
| Write notes longer than one line | Text Area | Input / Text |
| Pick one of 2-5 visible options (6 allowed by the Radio description) | Radio (group) | Select / Dropdown |
| Pick one of 6+ options (doctor, branch, insurer, time slot) | Select / Dropdown | Radio, Menu |
| Choose several independent options or give consent | Checkbox | Toggle |
| Switch a setting that applies at once | Toggle | Checkbox |
| Change a small whole number (tablets per dose, refills) | Stepper | Input / Text |
| Enter a one-time code | OTP / Field | Input / Text |
| Find records | Search | Select / Dropdown |
| Attach a file (lab report, referral, ID scan) | Upload Field | Button alone |
| Run an action from a list (Edit, Reschedule, Delete) | Menu (⭐Navigation) | Select / Dropdown |

## 3. Shared input anatomy (Input / *, Text Area, Select / Dropdown)

```
Label  (Optional)  (i)          sm/Medium · text/primary · Show Optional · Show Info
Hint                            xs/Regular · text/muted · Show Hint
[ (icon)  Placeholder / Value   (status icon) ]   40px · radius/lg · bg/secondary · border/input
Message / Error Message / Success Message         xs/Regular · text/muted / text/error / text/success
```

| State | Stroke | Extra |
|---|---|---|
| Default | `border/input` | placeholder `text/placeholder` |
| Hover | `border/strong` | |
| Focus | `border/focus` | `focus-ring` effect |
| Filled | `border/input` | value `text/primary` |
| Error | `border/error` | `Icon/Alert Circle` (`icon/error`), Error Message |
| Success | `border/success` | `Icon/Check Circle` (`icon/success`), Success Message |
| Disabled | Default look | `opacity/disabled` |

Set `State` only to show a static mock; default everything to `Default` (or `Filled` when a value is shown).

## 4. Rules for AI agents

- Use instances of these sets; never draw a field, checkbox or dropdown from frames. Never detach.
- Every field has a visible Label. The placeholder is an example, never the label.
- Hint goes between label and field; error and success text goes below the field. Same in every input.
- Write error messages that say how to fix the problem ("Choose a doctor to continue", "This file is larger than 10 MB").
- Set text through the TEXT properties (Label, Placeholder, Value, Hint, Message, Error Message, Success Message, Format Hint, File Name, Digit, Value). Do not edit text layers directly.
- Icons: swap through Leading Icon (INSTANCE_SWAP) with an `Icon/*` component only.
- In forms, set instances to Fill container width; one column on mobile; related fields grouped with a section title.
- Put 40px inputs next to `base` (40px) buttons.
- Radio groups: 2 to 6 options (Abdul, 2026-09-30), one pre-selected when a safe default exists. More options -> Select / Dropdown.
- Use Show Optional for optional fields instead of asterisks.
- Sizes from the descriptions: inputs and Search 40px, Text Area min 120px, OTP / Cell 48x56, Checkbox and Radio 20px (row min 24px), Toggle track 44x24.
- Toggle changes apply at once; Checkbox changes apply on Save.

## 5. Web / Tailwind map

| Figma | Code |
|---|---|
| Input field | `h-10 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border-input)] px-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-placeholder)] hover:border-[var(--color-border-strong)] focus:border-[var(--color-border-focus)]` |
| Error | `aria-invalid="true"` + `border-[var(--color-border-error)]`; message `text-xs text-[var(--color-text-error)]` |
| Success | `border-[var(--color-border-success)]`; message `text-xs text-[var(--color-text-success)]` |
| Disabled | `disabled:opacity-50 disabled:cursor-not-allowed` |
| Label / Hint | `<label class="text-sm font-medium">`, hint `text-xs text-[var(--color-text-muted)]` linked with `aria-describedby` |
| Checkbox / Radio | native inputs styled with `accent` or custom box; `rounded` (Checkbox) / `rounded-full` (Radio) |
| Toggle | `<button role="switch" aria-checked>`; `rounded-full` |
| Search | `<search>` or `role="search"` + `type="search"`, `rounded-full` |
| Select | native `<select>` or combobox + listbox |
| OTP / Field | one `<input autocomplete="one-time-code" inputmode="numeric">` styled as 6 cells |
