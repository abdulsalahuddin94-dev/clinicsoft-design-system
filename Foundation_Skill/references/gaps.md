# ClinicSoft Foundation - gaps and open items (2026-09-30)

Sources: `../../audits/2026-09-30-build.md` (Foundation audit and follow-up), `../../audits/2026-09-30-components.md`, `../../docs/decisions.md`. Figma file: "NEW PROJECT Design system".

## Status
- Foundation audit: 0 blocking defects. F1 (font-normal wording), F2 (radius/base description) and F3 (grid preview frame names) are fixed. U1 (text style bindings, 40/40), U2 (icon strokes bound, 40/40) and U3 (doc frames, 274 frames, 0 unbound) are verified.
- Fix on create: `tools/fix_tokens.py ClinicSoft` plan is empty (0 operations). `recolor_readiness.ready` = true.
- Contrast: 67 of 67 pairs in `../../data/rules.json` pass in Dark.

## By design (not defects)
1. **Dark only.** The Semantic collection has one mode, `Dark`. There is no Light mode, no Light documentation frame and no Light screenshot. Contrast is checked in Dark only. Adding a Light theme later means adding a `Light` mode to Semantic and re-checking every pair; components do not change.
2. **Effect styles use raw colors.** Binding effect colors to variables made plugin exports hang (Web skill section 4). A recolor does not change shadows or the focus ring color (#59D77F = brand/400). If the brand color changes, update `focus-ring` and `focus-ring-offset` by hand.
3. **Grid style names end in a number** (`Grid/Desktop 1440`, `Grid/iPad 768`, `Grid/Mobile 375`). They match the ` \d+$` default-name pattern in `rules.json` but are required names; accepted.
4. **Negative letter spacing** on large text comes from the Typography variables; lint hints about it are expected.
5. **Icons have no auto layout** inside (icon geometry); lint "no auto layout" on multi-path icons is a false positive.

## Out of scope for v1
6. **➜ Favicon page** is not built (Web skill lists it under ⭐Data Display).

## Open (low)
7. **Effect style on Menu, Select list and Tooltip is not recorded.** The component descriptions name Toast = `shadow-lg` and Modal = `shadow-xl`; the other overlays are not named. Read them from Figma and add them to the component skills.
8. **Page separators.** The Web skill puts separator pages (`-----`) between groups. This skill lists the ⭐ and ➜ pages only; confirm the separator pages in Figma.
9. **Tool limits in the 2026-09-30 sessions.** The Figma REST token was expired (403), so styles were read through the Desktop Bridge only. Effect style values (offset, blur, alpha) are not copied into `../../data/tokens.json`; add them the next time variables and styles are exported.
