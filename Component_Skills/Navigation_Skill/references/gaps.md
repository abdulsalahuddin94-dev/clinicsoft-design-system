# Navigation - gaps and open items (2026-09-30)

Sources: `../../../audits/2026-09-30-components.md` (Components audit and same-day fixes), `../../../CHANGELOG.md`. Figma file: "NEW PROJECT Design system".

## Fixed on 2026-09-30 (for the record)
- D2: Menu / Item `Type=Danger, State=Selected` failed contrast (3.74:1 on `bg/muted`). Now uses `bg/subtle` (5.3:1).
- D3: `color/action/secondary/border` re-aliased to gray/500 (Outline Button, Outline Icon Button, Stepper buttons now 4.24 / 3.75 / 3.07:1 on bg/primary / secondary / subtle).
- D4: added Breadcrumb / Item Disabled and Sidebar / Item Disabled.
- D7: renamed Menu / Item, Tabs / Item, Tabs / Bar, Pagination / Item, Breadcrumb / Item, Sidebar / Item (old names Menu Item, Tab, Tab Bar, Pagination Item, Breadcrumb Item, Nav Item).
- D8: Breadcrumb / Item is 28px high (was 20px, below the 24px minimum).
- O1: Menu and Menu / Item moved from ⭐Form Elements to the new page ➜ Menus under ⭐Navigation.

## Open (low)
1. **Some per-layer tokens are observed, not read.** Descriptions and properties come from the live read (`../../../data/source/components-live.json`). Tokens named in the descriptions are exact; the ones marked "observed" in `components.md` (Outline/Link hover fills, Tab default text and Segmented fill, Pagination / Item hover, Sidebar and Top Bar surfaces, Menu surface) come from screenshots.
2. **Nested content of single components is not listed as properties.** Pagination, Breadcrumb, Sidebar and Menu have no (or few) own properties; their items are set through exposed nested instances. The item defaults in `components.md` come from the component masters in the screenshots.
3. **Two focus styles.** Sidebar / Item and Menu / Item use the inset `focus-ring`; every other interactive Navigation atom uses `focus-ring-offset`. This is intended for list rows, but code must follow it per component.

## Accepted (by design)
5. **Dark only.** Every screenshot is Dark; there is no Light mode to capture.
6. **Shared defaults show on every variant.** Text and swap defaults apply to all variants: Menu / Item Type=Danger shows the default label "Edit appointment" with `Icon/Edit`. Override Label and Leading Icon on the instance (the ➜ Menus example shows "Cancel appointment" with `Icon/Delete`).
7. **Button has no Icon variant axis.** Icons are Show Leading / Trailing Icon booleans + swaps; icon-only actions use Icon Button. This replaces the Web skill's Icon=None/Left/Right/Only axis.
8. **Pressed only on Button and Icon Button** (decision O3). Tabs / Item, Pagination / Item, Breadcrumb / Item, Menu / Item and Sidebar / Item have no Pressed state.
9. **Button xs/sm/base and Icon Button xs-base are below 44px** (32-40px), above the 24px hard minimum.
10. **Link Focus fill.** Button Type=Link Focus keeps a `bg/primary` fill under the focus ring (build rule for Focus variants); lint "fill 1.0:1" is a false positive.
11. **Disabled with no reason.** Lint warns 25 times that a disabled Button has no context. The reason is given in code (aria-disabled + tooltip or text), not in the component.

## Not built
12. No stepper-wizard (progress steps), no mobile bottom navigation, no text link component separate from Button Type=Link.
