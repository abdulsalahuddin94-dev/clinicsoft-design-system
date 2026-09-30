# Form Elements - component reference (2026-09-30)

> Figma file "NEW PROJECT Design system" (ClinicSoft). Find every set by **name** on its page. No node IDs are stored here.
> Source: `../../../data/source/components-live.json` (live read of the DS file: full descriptions, every property with type, default and options). Screenshots: `screens/<name>-dark.png`, one per component, Dark only by design (ClinicSoft has no Light mode, so there are no Light screenshots to take).
> "Figma description" blocks are copied verbatim from Figma (Purpose / Usage rules / Accessibility).
> Tokens: from the descriptions, the audits and the screenshots. Every layer is bound (builder scan: 0 unbound values); where a token is not named in the description it is marked as observed (see `gaps.md`).

Shared rules for every input in this group:
- Label above the field (`sm/Medium`, `text/primary`), Hint between label and field, message row below the field (`xs/Regular`): `text/muted` for Message, `text/error` for Error Message, `text/success` for Success Message.
- Field: 40px high, `radius/lg` (8), fill `bg/secondary`, 1px stroke `border/input` (3.7:1 on bg/secondary). Hover stroke `border/strong`. Focus 2px `border/focus` (brand/400). Error stroke `border/error` + `Icon/Alert Circle` in `icon/error`. Success stroke `border/success` + `Icon/Check Circle` in `icon/success`. Disabled = the Default look at `opacity/disabled`.
- Placeholder `text/placeholder` (7:1), value `text/primary`, icons `icon/default` or `icon/muted`.
- Error and Success message layers are bound to the Error Message and Success Message properties.

---

## Checkbox
- Tier: **Atom** · Page: ➜ Checkboxes · 15 variants · Screenshot: `screens/checkbox-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| Checked | VARIANT | Unchecked | Unchecked, Checked, Indeterminate |
| State | VARIANT | Default | Default, Hover, Focus, Error, Disabled |
| Label | TEXT | "Label" | |
| Show Label | BOOLEAN | true | |

- Figma description:
  > Atom. Purpose: select one or more independent options (consent, filters, "send reminder by SMS").
  > Usage rules: use for multi-select and single on/off choices that take effect on submit; use Indeterminate only on a parent whose children are partly selected; use Error when a required box (e.g. consent) is not checked, with the message shown by the form. For an immediate on/off setting use Toggle; for one choice out of several use Radio.
  > Accessibility: box 20px, whole row (box + label) is the click target (min 24px high); unchecked border color/border/input (3.7:1); Focus shows focus-ring-offset on the box; label is required unless the context labels it.
- Use: consent ("I agree to share records with the referring doctor"), table filters, "Send reminder by SMS" in a form saved with a button, "Remember me" on sign in.
- Do not use: for a setting that applies immediately (**Toggle**); for one choice out of several (**Radio**); for 5+ options where space is tight (**Select / Dropdown**).
- Nests: `Icon/Check` (Checked), `Icon/Minus` (Indeterminate).
- Tokens: box 20px, 1px `border/input`, `radius/base`; Hover `border/strong`; Focus `focus-ring-offset`; Error `border/error`; label `sm/Regular` `text/primary`; Disabled `opacity/disabled`. Observed: Checked/Indeterminate fill `bg/brand` with a dark glyph.
- Accessibility: see description. In code: native checkbox, `aria-checked="mixed"` for Indeterminate.

## Radio
- Tier: **Atom** · Page: ➜ Radio Buttons · 10 variants · Screenshot: `screens/radio-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| Selected | VARIANT | Off | Off, On |
| State | VARIANT | Default | Default, Hover, Focus, Error, Disabled |
| Label | TEXT | "Label" | |
| Show Label | BOOLEAN | true | |

- Figma description:
  > Atom. Purpose: choose exactly one option from a short list (visit type: In person / Video; payment method).
  > Usage rules: always in a group of 2 to 6 options with one pre-selected when a safe default exists; more than 6 options -> Select / Dropdown; independent choices -> Checkbox; instant on/off -> Toggle. Error marks a required group with no choice.
  > Accessibility: circle 20px, the whole row is the click target (min 24px high); unselected border color/border/input (3.7:1); arrow keys move within the group in code; Focus shows focus-ring-offset.
- Use: visit type (In person / Video), payment method, any single choice of 2-6 visible options.
- Do not use: 7+ options (**Select / Dropdown**); independent choices (**Checkbox**); on/off setting (**Toggle**); switching views (**Tabs / Bar** Segmented).
- Nests: none.
- Tokens: 20px circle, `radius/full`, 1px `border/input`; Hover `border/strong`; Focus `focus-ring-offset`; Error `border/error`; label `sm/Regular` `text/primary`; Disabled `opacity/disabled`. Observed: On = brand ring and dot.
- Accessibility: see description. In code: `<fieldset>` + `<legend>` or `role="radiogroup"`.

## Toggle
- Tier: **Atom** · Page: ➜ Toggles · 8 variants · Screenshot: `screens/toggle-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| Value | VARIANT | Off | Off, On |
| State | VARIANT | Default | Default, Hover, Focus, Disabled |
| Label | TEXT | "Label" | |
| Show Label | BOOLEAN | true | |

- Figma description:
  > Atom. Purpose: switch a setting on or off with immediate effect (appointment reminders, show cancelled visits).
  > Usage rules: the change applies at once, no Save button; the label names the setting ("Email reminders"), not the action; for choices submitted with a form use Checkbox.
  > Accessibility: track 44x24 with a 16px knob; the Off track has a color/border/input border (3.7:1) so it is visible on dark; state is shown by knob position and color, never color alone; Focus shows focus-ring-offset; role="switch" in code.
- Use: settings that apply at once (appointment reminders, email notifications, show cancelled visits).
- Do not use: inside a form saved with a button (**Checkbox**); to choose between two named options (**Radio** or **Tabs / Bar** Segmented).
- Nests: none.
- Tokens: track 44x24 `radius/full`, Off track border `border/input`, On track `bg/brand` (observed); 16px knob; Focus `focus-ring-offset`; Disabled `opacity/disabled`.
- Accessibility: see description.

## OTP / Cell
- Tier: **Atom** · Page: ➜ Input Fields and Dropdown · 7 variants · Screenshot: `screens/otp-cell-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| State | VARIANT | Default | Default, Focus, Filled, Error, Disabled, Hover, Success |
| Digit | TEXT | "4" (hidden in Default and Focus) | |

- Figma description:
  > Atom. Purpose: one digit box of a one-time code (patient login, prescription pickup verification).
  > Usage rules: used only inside OTP / Field (4 or 6 cells); Filled once a digit is typed; Error on the whole row when the code is wrong; Focus moves to the next cell automatically in code.
  > Accessibility: 48x56 cells; border color/border/input (3.7:1), Focus 2px color/border/focus; the field supports paste and one-time-code autofill in code.
- Use: only inside **OTP / Field**.
- Do not use: alone, or as a small number input (**Stepper** or **Input / Text**).
- Nests: none.
- Tokens: 48x56, `bg/secondary`, `border/input`, `radius/lg`; Hover `border/strong`; Focus 2px `border/focus`; Error `border/error`; Success `border/success`; digit `2xl/Semi Bold` `text/primary`; Disabled `opacity/disabled`.
- Accessibility: see description.

## Input / Text
- Tier: **Molecule** · Page: ➜ Input Fields and Dropdown · 7 variants · Screenshot: `screens/input-text-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| State | VARIANT | Default | Default, Hover, Focus, Filled, Error, Success, Disabled |
| Label | TEXT | "Full name" | |
| Show Optional | BOOLEAN | false | |
| Show Info | BOOLEAN | false | |
| Hint | TEXT | "As written on the ID card" | |
| Show Hint | BOOLEAN | false | |
| Message | TEXT | "Helper text" | |
| Show Message | BOOLEAN | false | |
| Show Leading Icon | BOOLEAN | false | |
| Leading Icon | INSTANCE_SWAP | Icon/User | any `Icon/*` |
| Placeholder | TEXT | "Patient full name" | |
| Value | TEXT | "Amira Saleh" | |
| Error Message | TEXT | "Enter the name as it appears on the ID" | |
| Success Message | TEXT | "Looks good" | |

- Figma description:
  > Molecule (Label, Hint, field with Icon atoms, Message). Purpose: free text such as names, addresses and notes on one line.
  > Usage rules: always show a Label; Hint sits between the label and the field and explains the format; the Message row below the field shows helper text, or the error/success message in those states; use Show Optional instead of asterisks for optional fields; Filled shows a value, Default shows the placeholder (never use the placeholder as the label).
  > Accessibility: field 40px high, border color/border/input (3.7:1 on bg/secondary), Focus 2px color/border/focus; placeholder color/text/placeholder (7:1); errors use icon + text, never color alone; label is linked to the field (for/id) and the message with aria-describedby in code.
- Use: patient name, address line, insurance number, email (with Leading Icon `Icon/Mail`).
- Do not use: passwords (**Input / Password**), dates (**Input / Date**), phone numbers (**Input / Phone**), multi-line notes (**Text Area**), picking from a list (**Select / Dropdown**), searching (**Search**).
- Nests: Leading Icon (`Icon/*`), `Icon/Info` (Show Info), `Icon/Alert Circle` (Error), `Icon/Check Circle` (Success).
- Tokens: see "Shared rules".
- Accessibility: see description.

## Input / Password
- Tier: **Molecule** · Page: ➜ Input Fields and Dropdown · 7 variants · Screenshot: `screens/input-password-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| State | VARIANT | Default | Default, Hover, Focus, Filled, Error, Success, Disabled |
| Label | TEXT | "Password" | |
| Show Optional | BOOLEAN | false | |
| Show Info | BOOLEAN | false | |
| Hint | TEXT | "As written on the ID card" (shared default; override it) | |
| Show Hint | BOOLEAN | false | |
| Message | TEXT | "Helper text" | |
| Show Message | BOOLEAN | false | |
| Show Leading Icon | BOOLEAN | true | |
| Leading Icon | INSTANCE_SWAP | Icon/Lock | any `Icon/*` |
| Placeholder | TEXT | "Enter password" | |
| Value | TEXT | "••••••••" | |
| Error Message | TEXT | "Use at least 8 characters with a number" | |
| Success Message | TEXT | "Looks good" | |

- Figma description:
  > Molecule (Label, Hint, field with Icon atoms, Icon Button atom, Message). Purpose: passwords; the eye Icon Button shows or hides the value.
  > Usage rules: always show a Label; Hint sits between the label and the field and explains the format; the Message row below the field shows helper text, or the error/success message in those states; use Show Optional instead of asterisks for optional fields; Filled shows a value, Default shows the placeholder (never use the placeholder as the label).
  > Accessibility: field 40px high, border color/border/input (3.7:1 on bg/secondary), Focus 2px color/border/focus; placeholder color/text/placeholder (7:1); errors use icon + text, never color alone; label is linked to the field (for/id) and the message with aria-describedby in code.
- Use: sign in, set or change a password, confirm password.
- Do not use: PINs or one-time codes (**OTP / Field**); any value that should stay visible.
- Nests: Leading Icon (`Icon/Lock`), **Icon Button** with `Icon/Eye` (show/hide), `Icon/Alert Circle`, `Icon/Check Circle`.
- Tokens: see "Shared rules".
- Accessibility: see description. In code: `autocomplete="current-password"` / `"new-password"`; the eye Icon Button needs `aria-label="Show password"` and `aria-pressed`.

## Input / Date
- Tier: **Molecule** · Page: ➜ Input Fields and Dropdown · 7 variants · Screenshot: `screens/input-date-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| State | VARIANT | Default | Default, Hover, Focus, Filled, Error, Success, Disabled |
| Label | TEXT | "Date of birth" | |
| Show Optional | BOOLEAN | false | |
| Show Info | BOOLEAN | false | |
| Hint | TEXT | "As written on the ID card" | |
| Show Hint | BOOLEAN | false | |
| Message | TEXT | "Helper text" | |
| Show Message | BOOLEAN | false | |
| Placeholder | TEXT | "DD/MM/YYYY" | |
| Value | TEXT | "12/03/2026" | |
| Error Message | TEXT | "Enter a date in DD/MM/YYYY format" | |
| Success Message | TEXT | "Looks good" | |

- Figma description:
  > Molecule (Label, Hint, field with Icon atoms, Message). Purpose: dates such as date of birth or visit date; the calendar icon opens a date picker in code.
  > Usage rules: always show a Label; Hint sits between the label and the field and explains the format; the Message row below the field shows helper text, or the error/success message in those states; use Show Optional instead of asterisks for optional fields; Filled shows a value, Default shows the placeholder (never use the placeholder as the label).
  > Accessibility: field 40px high, border color/border/input (3.7:1 on bg/secondary), Focus 2px color/border/focus; placeholder color/text/placeholder (7:1); errors use icon + text, never color alone; label is linked to the field (for/id) and the message with aria-describedby in code.
- Use: date of birth, visit date, prescription start date.
- Do not use: a time only (no Time input; use **Select / Dropdown** with time slots, as in the Modal); a date range (not built).
- Nests: `Icon/Calendar` (trailing, no swap property), `Icon/Alert Circle`, `Icon/Check Circle`.
- Tokens: see "Shared rules".
- Accessibility: see description. The calendar trigger needs `aria-label="Choose date"`; typing must work as well as the picker.

## Input / Phone
- Tier: **Molecule** · Page: ➜ Input Fields and Dropdown · 7 variants · Screenshot: `screens/input-phone-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| State | VARIANT | Default | Default, Hover, Focus, Filled, Error, Success, Disabled |
| Label | TEXT | "Phone number" | |
| Show Optional | BOOLEAN | false | |
| Show Info | BOOLEAN | false | |
| Hint | TEXT | "As written on the ID card" (shared default; override it) | |
| Show Hint | BOOLEAN | false | |
| Message | TEXT | "Helper text" | |
| Show Message | BOOLEAN | false | |
| Show Leading Icon | BOOLEAN | true | |
| Leading Icon | INSTANCE_SWAP | Icon/Phone | any `Icon/*` |
| Placeholder | TEXT | "50 123 4567" | |
| Value | TEXT | "50 123 4567" | |
| Error Message | TEXT | "Enter a valid mobile number" | |
| Success Message | TEXT | "Looks good" | |

- Figma description:
  > Molecule (Label, Hint, field with Icon atoms, Message). Purpose: phone numbers with a country code prefix (default +971).
  > Usage rules: always show a Label; Hint sits between the label and the field and explains the format; the Message row below the field shows helper text, or the error/success message in those states; use Show Optional instead of asterisks for optional fields; Filled shows a value, Default shows the placeholder (never use the placeholder as the label).
  > Accessibility: field 40px high, border color/border/input (3.7:1 on bg/secondary), Focus 2px color/border/focus; placeholder color/text/placeholder (7:1); errors use icon + text, never color alone; label is linked to the field (for/id) and the message with aria-describedby in code.
- Use: patient and emergency-contact phone numbers, SMS reminder numbers.
- Do not use: other numbers (**Input / Text** or **Stepper**).
- Nests: country code "+971" with `Icon/Chevron Down`, Leading Icon (`Icon/Phone`), `Icon/Alert Circle`, `Icon/Check Circle`.
- Tokens: see "Shared rules"; prefix divider `border/default` (observed).
- Accessibility: see description. In code: `type="tel"`, `autocomplete="tel"`, the country code is its own labelled control.

## Text Area
- Tier: **Molecule** · Page: ➜ Text Area · 7 variants · Screenshot: `screens/text-area-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| State | VARIANT | Default | Default, Hover, Focus, Filled, Error, Disabled, Success |
| Label | TEXT | "Visit notes" | |
| Show Character Count | BOOLEAN | true | |
| Show Message | BOOLEAN | true | |
| Placeholder | TEXT | "Write clinical notes…" | |
| Value | TEXT | "Patient reports mild headache for three days. No fever." | |
| Message | TEXT | "Visible to the care team" | |
| Error Message | TEXT | "Notes are required for this visit" | |
| Success Message | TEXT | "Notes saved" | |

- Figma description:
  > Molecule (Label, field, Message and Character Count). Purpose: multi-line text such as visit notes, symptoms, referral reasons.
  > Usage rules: use when the answer can be longer than one line; show the character count when there is a limit; the message row shows helper text or the error; keep the label short.
  > Accessibility: border color/border/input (3.7:1), Focus 2px color/border/focus; min height 120px; errors use text, not color alone; the count is announced politely in code.
- Use: visit notes, symptoms, referral reasons, comments.
- Do not use: one-line answers (**Input / Text**).
- Nests: none.
- Tokens: see "Shared rules"; min height 120px; count `xs/Regular` `text/muted`.
- Accessibility: see description.

## Search
- Tier: **Molecule** · Page: ➜ Input Fields and Dropdown · 5 variants · Screenshot: `screens/search-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| State | VARIANT | Default | Default, Hover, Focus, Filled, Disabled |
| Placeholder | TEXT | "Search patients, doctors, files" | |

- Figma description:
  > Molecule (Search Icon, text, Clear Icon Button). Purpose: find records on the current screen or across the app (patients, appointments, files).
  > Usage rules: placeholder says what can be searched; Clear appears only when there is text (Filled); results update as the user types or on Enter; do not use Search as a data-entry field.
  > Accessibility: 40px high, pill shape; border color/border/input (3.7:1); Clear Icon Button needs aria-label "Clear search"; role="search" on the container in code.
- Use: table and list search, the Top Bar global search.
- Do not use: to pick one value for a form (**Select / Dropdown**); as a data-entry field.
- Nests: `Icon/Search`, **Icon Button** with `Icon/Close` (Clear, Filled only).
- Tokens: 40px, `radius/full`, `bg/secondary`, `border/input`; Hover `border/strong`; Focus `border/focus`; placeholder `text/placeholder`; Disabled `opacity/disabled`.
- Accessibility: see description.

## Upload Field
- Tier: **Molecule** · Page: ➜ Input Fields and Dropdown · 7 variants · Screenshot: `screens/upload-field-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| State | VARIANT | Default | Default, Hover, Uploading, Uploaded, Error, Focus, Disabled |
| Label | TEXT | "Lab report" | |
| Format Hint | TEXT | "PDF, JPG or PNG, up to 10 MB" | |
| Error Message | TEXT | "This file is larger than 10 MB" | |
| File Name | TEXT | "blood-test-march.pdf" | |

- Figma description:
  > Molecule (Upload Icon, Button atom, Icon Button atom, progress). Purpose: attach files to a record (lab reports, referral letters, ID scans).
  > Usage rules: say the allowed formats and size in the zone; Hover is the drag-over state; Uploading shows progress and a cancel Icon Button; Uploaded shows the file with a remove Icon Button; Error explains what to fix. One field per document type.
  > Accessibility: the Browse Button is the keyboard path (drag and drop is optional); dashed border color/border/input (3.7:1); progress is announced in code; remove/cancel Icon Buttons need aria-labels.
- Use: lab reports, referral letters, ID scans on a patient record; one field per document type.
- Do not use: profile photos (Avatar Upload is out of scope for v1); many files at once (not built).
- Nests: `Icon/Upload`, **Button** Type=Outline "Browse files", `Icon/File Text` (file row), **Icon Button** with `Icon/Close` (cancel) or `Icon/Delete` (remove).
- Tokens: dashed 1px `border/input` on `bg/secondary`, `radius/lg`; Error dashed `border/error` + `icon/error`; Focus solid `border/focus`; Uploaded meta `text/success`; Disabled `opacity/disabled`. Observed: Hover (drag-over) `bg/subtle` with a brand dashed stroke; progress bar `bg/brand` on `bg/muted`.
- Accessibility: see description.

## OTP / Field
- Tier: **Molecule** · Page: ➜ Input Fields and Dropdown · 5 variants · Screenshot: `screens/otp-field-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| State | VARIANT | Default | Default, Filled, Error, Disabled, Success |
| Label | TEXT | "Verification code" | |
| Message | TEXT | "Sent to +971 50 ••• 4567" | |
| Error Message | TEXT | "The code is incorrect. Try again." | |
| Success Message | TEXT | "Code verified" | |

- Figma description:
  > Molecule (6 OTP / Cell atoms, label, message). Purpose: enter a one-time code (patient login, prescription pickup).
  > Usage rules: 6 cells by default (hide cells 5-6 for 4-digit codes); Default has focus on the first empty cell; Error marks every cell and explains what to do; offer "Resend code" with a Link Button below in screens.
  > Accessibility: supports paste and autocomplete="one-time-code" in code; each cell 48x56; errors in text, not color alone.
- Use: patient login, prescription pickup verification, two-step sign in.
- Do not use: passwords (**Input / Password**) or other numbers.
- Nests: 6 x **OTP / Cell** (state follows the field state).
- Tokens: label `sm/Medium`, messages `xs/Regular` in `text/muted` / `text/error` / `text/success`; cells as OTP / Cell.
- Accessibility: see description.

## Stepper
- Tier: **Molecule** · Page: ➜ Input Fields and Dropdown · 4 variants · Screenshot: `screens/stepper-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| State | VARIANT | Default | Default, Min, Max, Disabled |
| Value | TEXT | "2" | |

- Figma description:
  > Molecule (2 Icon Button atoms + value box). Purpose: change a small whole number (tablets per dose, refills, number of guests).
  > Usage rules: use for ranges up to about 20; Min and Max disable the button that would leave the range; for larger or free numbers use Input / Text with a number keyboard.
  > Accessibility: 40x40 buttons with aria-labels ("Decrease", "Increase"); value is announced (role="spinbutton" with aria-valuemin/max in code).
- Use: tablets per dose, refills, number of companions.
- Do not use: large or free numbers (**Input / Text** with a number keyboard); named options (**Select / Dropdown**).
- Nests: 2 x **Icon Button** Type=Outline (`Icon/Minus`, `Icon/Add`), value box.
- Tokens: buttons `color/action/secondary/*` (border gray/500); value box `bg/secondary` + `border/input`, value `sm/Medium` `text/primary`; disabled button `opacity/disabled`.
- Accessibility: see description.

## Select / Dropdown
- Tier: **Organism** · Page: ➜ Input Fields and Dropdown · 8 variants · Screenshot: `screens/select-dropdown-dark.png`

| Property | Type | Default | Options |
|---|---|---|---|
| Open | VARIANT | False | False, True (True exists only with State=Focus) |
| State | VARIANT | Default | Default, Hover, Filled, Error, Disabled, Focus, Success |
| Label | TEXT | "Doctor" | |
| Placeholder | TEXT | "Choose a doctor" | |
| Value | TEXT | "Dr. Dana Khalil" | |
| Error Message | TEXT | "Choose a doctor to continue" | |

Option rows are set through the exposed Menu / Item instances (Label, Show Leading Icon, Leading Icon, State).

- Figma description:
  > Organism (field, Icon, Menu molecule with Menu / Item atoms, exposed). Purpose: pick one value from a list of 5 or more (doctor, clinic branch, insurance provider, specialty).
  > Usage rules: use Radio for 2 to 6 visible options (Figma still says 2 to 5 until the description is updated; see `gaps.md`); placeholder says what to choose; Open shows the Menu with the current value Selected (check icon); add Search at the top of the menu in code when the list is long; Error explains what is missing.
  > Accessibility: 40px field, border color/border/input (3.7:1), Focus 2px color/border/focus; role="combobox"/"listbox" with arrow keys, Enter and Escape in code; selected option marked with a check, not color only.
- Use: doctor, clinic branch, insurance provider, specialty, time slot.
- Do not use: 2-6 options (**Radio**); actions (**Menu**); multi-select (not built); free text (**Input / Text**).
- Nests: `Icon/Chevron Down` / `Icon/Chevron Up`, **Menu** with **Menu / Item** (Selected shows `Icon/Check`), `Icon/Alert Circle`, `Icon/Check Circle`.
- Tokens: field as "Shared rules"; list as Menu (`bg/secondary`, `border/default`, `radius/lg`); selected row `bg/subtle` + Semi Bold.
- Accessibility: see description.
