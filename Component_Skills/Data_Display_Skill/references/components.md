# Data Display - component reference (2026-09-30)

> Figma file "NEW PROJECT Design system" (ClinicSoft). Find every set by **name** on its page. No node IDs are stored here.
> Source: `../../../data/source/components-live.json` (live read of the DS file: full descriptions, every property with type, default and options). Screenshots: `screens/<name>-dark.png`, one per component, Dark only by design (ClinicSoft has no Light mode).
> "Figma description" blocks are copied verbatim from Figma (Purpose / Usage rules / Accessibility).
> Tokens: from the descriptions, the audits and the screenshots. Every layer is bound (0 unbound values); tokens not named in a description are marked as observed (see `gaps.md`).

---

## Badge
- Tier: **Atom** · Page: ➜ Banners, Badges & Toasts · 10 variants · Screenshot: `screens/badge-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| Status | VARIANT | Info | Info, Success, Warning, Error, Neutral |
| Size | VARIANT | sm | sm, md |
| Label | TEXT | "Confirmed" | |
| Show Icon | BOOLEAN | false | |
| Icon | INSTANCE_SWAP | Icon/Info | any `Icon/*` |

- Figma description:
  > Atom. Purpose: short status label on a record (appointment Confirmed / Pending / Cancelled, lab result New, invoice Draft).
  > Usage rules: one or two words; status color matches meaning (Success confirmed/paid, Warning pending/needs review, Error cancelled/overdue, Info new/informational, Neutral draft/archived); never use a Badge as a button; do not use brand/button tokens for status. Show Icon when the badge must be readable without color.
  > Accessibility: status text on its status background is at least 4.5:1 (e.g. text/success on bg/success); sm is 20px high, md 24px; meaning must also be in the text, never color alone.
- Use: appointment status (Confirmed, Pending, Cancelled), lab result New, invoice Draft or Overdue, counts in Sidebar / Item.
- Do not use: as a button or filter (**Button**, **Tabs / Bar** Segmented); for sentences (**Alert**); for a person (**Avatar**).
- Nests: optional `Icon/*` through Icon.
- Tokens: fill `bg/{status}`, text `text/{status}`, icon `icon/{status}`, `radius/full`; sm 20px, md 24px. Observed: Neutral `bg/subtle` + `text/secondary`; sm `xs/Medium`, md `sm/Medium`.
- Accessibility: see description.

## Avatar
- Tier: **Atom** · Page: ➜ Avatars & Upload Image · 10 variants · Screenshot: `screens/avatar-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| Type | VARIANT | Initials | Initials, Icon |
| Size | VARIANT | 24 | 24, 32, 40, 60, 100 |
| Initials | TEXT | "AS" | |
| Show Status | BOOLEAN | false | |

- Figma description:
  > Atom. Purpose: identify a person (patient, doctor, staff) in lists, headers, appointments and comments.
  > Usage rules: Initials (first + last name, 2 letters) when there is no photo; Icon for unknown or anonymous people; sizes 24 (dense tables), 32 (lists), 40 (headers), 60 (profile cards), 100 (profile page). Show Status for online / available doctors only. A Photo type (image fill) is still to add, see gaps.
  > Accessibility: initials text on bg/brand uses color/text/on-brand (5.6:1); in code the avatar needs the person's name as alt text; the status dot must also be described in text ("Available").
- Use: patient and doctor rows (32), dense tables (24), the signed-in user in the Top Bar (40), profile cards (60), profile page (100).
- Do not use: for things that are not people (an `Icon/*`); as a button by itself (wrap it in a labelled button when it opens a menu).
- Nests: `Icon/User` (Type=Icon); status dot when Show Status = true.
- Tokens: Initials `bg/brand` + `text/on-brand`, `radius/full`. Observed: Icon type `bg/subtle` + `icon/default`.
- Accessibility: see description.

## Tooltip
- Tier: **Atom** · Page: ➜ Tooltips · 8 variants · Screenshot: `screens/tooltip-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| Arrow | VARIANT | Up | Up, Down, Left, Right |
| Size | VARIANT | Small | Small, Large |
| Text | TEXT | "Edit appointment" | |
| Title | TEXT | "Fasting required" (visible on Large only) | |

- Figma description:
  > Atom. Purpose: a short hint on hover or focus (name of an Icon Button, meaning of a status, preparation note for a lab test).
  > Usage rules: Small = one line naming an action or value; Large = title + up to two sentences. Never put links, buttons or required information only in a tooltip; the arrow points at the trigger. Light surface (bg/inverse) so it stands out on the dark UI.
  > Accessibility: text/inverse on bg/inverse is above 15:1; shows on hover and keyboard focus, hides on Escape; trigger references it with aria-describedby in code.
- Use: the name of every Icon Button, the meaning of a Badge, a lab test preparation note (Large).
- Do not use: for required information, links or buttons (Hint, **Alert**, **Modal**); as the only explanation on touch screens.
- Nests: none.
- Tokens: `bg/inverse` + `text/inverse`. Observed: Small `xs/Medium`; Large title `sm/Semi Bold` + body `sm/Regular`.
- Accessibility: see description.

## Alert
- Tier: **Molecule** · Page: ➜ Banners, Badges & Toasts · 4 variants · Screenshot: `screens/alert-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| Status | VARIANT | Info | Info, Success, Warning, Error |
| Title | TEXT | "New lab results are available" | |
| Message | TEXT | "Two results were added to the patient record." | |
| Show Action | BOOLEAN | false | |
| Show Close | BOOLEAN | true | |

- Figma description:
  > Molecule (Icon, text, Button Link atom, Icon Button atom). Purpose: an inline message inside a page or form that stays until resolved (expiring insurance, missing consent, failed sync).
  > Usage rules: place above the content it refers to; Status matches meaning; Title states the fact, Message says what to do; Show Action for one follow-up link; Show Close only when the message can be dismissed. Status components use status tokens, never button tokens.
  > Accessibility: status text on its status background is at least 4.5:1; icon + title carry the meaning, not color; role="status" (or "alert" for Error) in code.
- Use: expiring insurance, missing consent, failed sync, error summary at the top of a form, server error on sign in.
- Do not use: short confirmation after an action (**Toast**); a decision that blocks the page (**Modal**); a status word on a record (**Badge**).
- Nests: status icon (`Icon/Info`, `Icon/Check Circle`, `Icon/Warning`, `Icon/Alert Circle`), **Button** Type=Link (Show Action), **Icon Button** Ghost with `Icon/Close` (Show Close).
- Tokens: `bg/{status}`, 1px `border/{status}`, title `text/{status}`, icon `icon/{status}`. Observed: message `sm/Regular` `text/primary`, `radius/lg`.
- Accessibility: see description.

## Toast
- Tier: **Molecule** · Page: ➜ Banners, Badges & Toasts · 4 variants · Screenshot: `screens/toast-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| Status | VARIANT | Info | Info, Success, Warning, Error |
| Title | TEXT | "Appointment confirmed" | |
| Message | TEXT | "A confirmation was sent to the patient by SMS." | |
| Show Action | BOOLEAN | false | |
| Show Close | BOOLEAN | true | |

- Figma description:
  > Molecule (Icon, text, Button Link atom, Icon Button atom). Purpose: a short, temporary confirmation or error after an action (appointment saved, message sent, upload failed).
  > Usage rules: bottom-right on desktop, top on mobile; auto-hide after 5 s except Error; one toast at a time; Show Action for Undo or View; never use a toast for information the user must act on (use Alert or a Modal).
  > Accessibility: raised surface bg/subtle with shadow-lg; text/primary 13:1; announced with role="status" (Error: role="alert") in code; Close Icon Button has aria-label.
- Use: appointment saved, message sent, upload failed, Undo after a delete (Show Action).
- Do not use: information the user must act on (**Alert** or **Modal**).
- Nests: status icon (`Icon/Info`, `Icon/Check Circle`, `Icon/Warning`, `Icon/Alert Circle`), **Button** Type=Link, **Icon Button** Ghost with `Icon/Close`.
- Tokens: `bg/subtle`, `shadow-lg`, title `text/primary`, icon `icon/{status}`. Observed: 1px `border/default`, message `text/secondary`, `radius/lg`.
- Accessibility: see description.

## Modal
- Tier: **Organism** · Page: ➜ Popups · 2 variants · Screenshot: `screens/modal-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| Type | VARIANT | Default | Default, Danger |
| Title | TEXT | "Reschedule appointment" | |
| Body | TEXT | "Choose a new date and time. The patient will get an SMS with the new details." | |
| Show Content | BOOLEAN | true | |
| Show Close | BOOLEAN | true | |
| (nested) content and action Buttons | nested | Input / Date "New date", Select / Dropdown "Time"; Cancel (Outline) and confirm (Filled or Danger) labels | |

- Figma description:
  > Organism (Icon Button, Button atoms, Input / Date and Select / Dropdown in the content slot, exposed actions). Purpose: a focused task or confirmation over the page (reschedule a visit, confirm cancelling an appointment, delete a record).
  > Usage rules: Default for short tasks with a few fields; Danger to confirm destructive actions, with the consequence in the body and a Danger primary button that names the action; buttons right-aligned, secondary first; put forms longer than 5 fields on a page instead; show over the scrim color/bg/overlay.
  > Accessibility: 480px wide, radius/2xl, shadow-xl; focus moves into the modal and is trapped, Escape and Close dismiss (not for Danger in progress); title is the accessible name (aria-labelledby); body text color/text/secondary 11:1.
- Use: reschedule a visit (Default with content), confirm a destructive action (Danger: "Cancel this appointment?" with "Keep appointment" and "Cancel appointment").
- Do not use: information without a decision (**Alert**, **Toast**); forms longer than 5 fields (a page); stacked on another Modal.
- Nests: **Icon Button** Ghost with `Icon/Close`; `Icon/Warning` (Danger); content area with **Input / Date** and **Select / Dropdown**; **Button** Outline + **Button** Filled or Danger.
- Tokens: 480px wide, `radius/2xl`, `shadow-xl`, scrim `bg/overlay`, body `text/secondary`. Observed: `bg/secondary`, 1px `border/default`, title `xl/Semi Bold`, actions gap `space/3`.
- Accessibility: see description.
