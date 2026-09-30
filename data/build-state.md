# ClinicSoft build state (resume here)

DS file: NEW PROJECT Design system (m0G6wKSbVhgqWutfmt7vFU). Design file: NEW PROJECT Design File (7ZCVrtHY1pw7yMeKPL6A7O). Find nodes by name. With both files connected, pin the target with figma_navigate(lock: true).

## Done
- Foundation approved, Components approved (Figma versions saved), 33 components / 434 variants.
- Project skills, registry and screen templates written (data/source/components-live.json is the live read).
- Login / Desktop and Login / Mobile built in the Design file; final audit done and its fixes applied.

## Next
- Screens approved 2026-09-30 (Figma version saved). Build complete.
- Open items: Radio 2-6 vs Select "2-5" wording; Divider component (not built); loading / error Login states not drawn; rename the DS file to "ClinicSoft Design System".

## Build notes
- Bind paints with the resolved color as the base value.
- Focus variants: focus-ring-offset effect + clipsContent true + a fill.
- After cloning a variant, re-apply componentPropertyReferences.
- After each Figma session: CHANGELOG.md entry ("Storybook synced: no") and `python tools/project_status.py "My Projects/ClinicSoft"`.
