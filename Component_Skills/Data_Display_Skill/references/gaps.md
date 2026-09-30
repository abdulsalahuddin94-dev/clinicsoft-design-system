# Data Display - gaps and open items (2026-09-30)

Sources: `../../../audits/2026-09-30-components.md`, `../../../CHANGELOG.md`, `../../../Project_Brief.md`. Figma file: "NEW PROJECT Design system".

## Open (low)
1. **Some per-layer tokens are observed, not read.** Descriptions and properties come from the live read (`../../../data/source/components-live.json`). Named tokens are exact (Toast `bg/subtle` + `shadow-lg`, Modal `radius/2xl` + `shadow-xl` + 480px, Tooltip `bg/inverse`). Avatar status dot color, Tooltip radius and the Neutral Badge colors are observed from screenshots.
2. **Modal content and action buttons** are nested instances (Input / Date, Select / Dropdown, two Buttons); they have no top-level TEXT properties. Set their labels on the nested instances.

## Accepted (by design)
4. **Dark only.** Every screenshot is Dark; there is no Light mode to capture.
5. **Avatar has no Photo type.** There is no image asset; Initials and Icon only. Add `Type=Photo` when a photo asset exists.
6. **Shared defaults show on every variant.** Badge shows "Confirmed" on every Status; Tooltip Large shows "Edit appointment" as its body; Modal Danger shows the Default title "Reschedule appointment". The ➜ Popups page shows a correctly overridden Danger example ("Cancel this appointment?"). Always override text on the instance.
7. **Toast title uses `text/primary`** while the Alert title uses `text/{status}`. Both pass contrast; in the Toast the status is carried by the icon.

## Out of scope for v1
8. **Avatar Upload** (Web skill inventory, ➜ Avatars & Upload Image) is not built.
9. **➜ Favicon** page is not built.
10. Not built: Card, Table, List item, Empty state, Progress / Skeleton. Screens that need them must build them first (lower tiers first).
