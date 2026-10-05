# ClinicSoft - Project Brief

Intake answers (Design_System_Intake_Skill). Paths are relative to the Root.

## Basics
| # | Question | Answer |
|---|---|---|
| 0.1 | Project name | ClinicSoft |
| 0.2 | Figma links | None yet. Figma Desktop has "NEW PROJECT Design system" open and connected (role to confirm). |
| 0.3 | Local folder | `My Projects/ClinicSoft/` |
| 0.4 | Color modes | Dark only |
| 0.5 | Arabic / RTL | No |
| 0.6 | Fonts | Poppins (Latin only) |
| 0.7 | Storybook | Yes (Abdul, 2026-09-30): `storybook/`, run `npm --prefix "My Projects/ClinicSoft/storybook" run storybook` (port 6007) or the `clinicsoft-web-storybook` preview; MCP at http://localhost:6007/mcp while it runs. Published (Abdul, 2026-10-05): public repo https://github.com/abdulsalahuddin94-dev/clinicsoft-design-system, live docs https://abdulsalahuddin94-dev.github.io/clinicsoft-design-system/ (rebuilt by `.github/workflows/storybook-pages.yml` on every push to master) |

## Platform
| # | Question | Answer |
|---|---|---|
| 1.1 | Platform | Web -> `Web_Design_System_Skill` (Tailwind conventions, breakpoints 1440 / 768 / 375, Lucide icons) |

## Path
| # | Question | Answer |
|---|---|---|
| 2.1 | Greenfield / Brownfield | Greenfield |
| 3.1 | Existing AI-ready DS | No, build a new one (path 3b-3d) |
| 3.3 | Brand color | Primary `#299B48` (green). No secondary. |
| 3.4 | Industry | Healthcare (no inspiration files) |

## Inputs
- Brand: `Inputs/Brand/` (empty)
- Inspiration: `Inputs/Inspiration/` (empty)
- Screens: `Inputs/Screens/` (empty)

## Design direction (proposed, from industry via ui-ux-pro-max + Impeccable)
- Style: calm, clinical, accessible (WCAG AA minimum), no neon, no purple gradients, restrained motion.
- Surfaces: dark cool neutrals (gray ramp with a slight blue tint), depth by surface steps and 1px borders, shadows only on overlays.
- Corners: soft (buttons 6, inputs and cards 8, panels 12, modals 16, pills full).
- Density: comfortable (clinic staff read tables and forms all day), body text 16px.
- Type: Poppins (geometric), Regular / Medium / Semi Bold / Bold.
- Icons: Lucide outline, 24px, stroke 2.
- Brand: `#299B48` ramp 50-950. Filled brand buttons use the brand green with near-black text (5.6:1); white on `#299B48` is only 3.6:1 and fails.
- Status: separate `green` (success), `red`, `yellow`, `blue` ramps, so success never reads as a brand action.

## Figma
- Build file: "NEW PROJECT Design system" (https://www.figma.com/design/m0G6wKSbVhgqWutfmt7vFU), to be renamed "ClinicSoft Design System" by the user.

- Design file (screens): "NEW PROJECT Design File" (https://www.figma.com/design/7ZCVrtHY1pw7yMeKPL6A7O), page Auth; library enabled 2026-09-30.

## Status
- 2026-09-30 Foundation built: 200 variables (Primitives 71, Semantic 60 in mode Dark, Spacing 24, Radius 9, Opacity 1, Typography 35), 40 text styles, 12 effect styles, 3 grid styles, 40 Lucide icons, Cover and ⭐Setup docs pages. Fix on create plan empty. Foundation approved (Figma version "Foundation approved").
- 2026-09-30 Components built and audited: 33 components, 434 variants; audit fixes applied. Components approved (Figma version "Components approved"). Storybook asked again after the checkpoint.
- 2026-09-30 Screens: Login / Desktop (1440) and Login / Mobile (375) built from the library; final audit My Projects/ClinicSoft/audits/2026-09-30-final.md (fixes applied). Screens approved (Figma version "Screens approved" in the Design file).
- 2026-09-30 Storybook built and synced: 33 components, foundations, App Shell pattern; parity 33/33 (see CHANGELOG.md and audits/storybook-2026-09-30/).
