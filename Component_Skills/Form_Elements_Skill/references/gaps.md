# Form Elements - gaps and open items (2026-09-30)

Sources: `../../../audits/2026-09-30-components.md` (Components audit and same-day fixes), `../../../CHANGELOG.md`. Figma file: "NEW PROJECT Design system".

## Fixed on 2026-09-30 (for the record)
- D1: Hover looked like Default on Checkbox, Radio, Input / *, Text Area, Select / Dropdown and Search. Fixed by re-aliasing `color/border/strong` to gray/400 (no component edits).
- D4: added Upload Field Focus + Disabled, Select / Dropdown Open=False Focus + Success, Text Area Success, OTP / Cell Hover + Success, OTP / Field Disabled + Success.
- D5: new TEXT properties on Input / * (Placeholder, Value, Error Message, Success Message), Text Area (Placeholder, Value, Message, Error Message, Success Message), Select / Dropdown (Placeholder, Value, Error Message), Upload Field (Format Hint, File Name, Error Message), OTP / Field (Message, Error Message, Success Message), Stepper (Value).
- D6: OTP / Cell Default and Focus hide the digit.
- D7: renamed OTP / Cell and OTP / Field; Toggle axis `On` renamed `Value`.
- N1: Error and Success message layers are bound to the Error Message and Success Message properties.

## Open (low)
1. **Some per-layer tokens are observed, not read.** Descriptions and properties come from the live read (`../../../data/source/components-live.json`). Tokens named in the descriptions are exact; the ones marked "observed" in `components.md` (Checkbox checked fill, Radio On, Toggle On track and knob, Upload Field drag-over stroke and progress bar, Phone prefix divider) come from screenshots. Every layer is bound (builder scan), so a per-layer variable read would confirm them.
2. **Radio vs Select threshold: decided 6 (Abdul, 2026-09-30).** Radio for 2 to 6 options, Select / Dropdown for 7 or more. Skills and registry updated; the Select / Dropdown description in the Figma DS file still says "use Radio for 2 to 5 visible options" and needs changing to 2 to 6, then a library publish.
3. **Hint default is copied across inputs.** Input / Password and Input / Phone keep the Hint default "As written on the ID card", which fits only Input / Text and Input / Date. Hidden by default (Show Hint = false); override it when shown.

## Accepted (by design)
4. **Dark only.** Every screenshot is Dark; there is no Light mode to capture.
5. **Shared defaults show on every variant.** Text and swap defaults apply to all variants of a set, for example the Hint default "As written on the ID card" is the same on Input / Password, Input / Date and Input / Phone (hidden by default). Override the text on the instance.
6. **Input heights are 40px**: below the 44px recommended target, above the 24px hard minimum (Web skill).
7. Lint "fill 1.1:1" on Checkbox, Radio, inputs and the Toggle track is a false positive: the boundary is the stroke (`border/input`, 4.24:1 on `bg/primary`, 3.75:1 on `bg/secondary`).

## Out of scope for v1
8. **Input / URL** and **Input / Card Number** (Web skill inventory) are not built.
9. No multi-select, date range, time input or combobox with typing. Use Select / Dropdown with time slots for times.
10. No Pressed state on Checkbox, Radio or Toggle (decision O3: Pressed only on Button and Icon Button).
