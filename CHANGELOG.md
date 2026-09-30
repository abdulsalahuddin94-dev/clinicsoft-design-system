# ClinicSoft - Changelog

What was built or changed in Figma, newest first. Every build or Figma change session adds one entry with `Storybook synced: no`; a Storybook update marks the entries `yes` (`python tools/project_status.py "My Projects/ClinicSoft" --mark-synced`). The daily check reads only this file and `status.json`, never Figma.

## 2026-09-30 - Storybook built (first sync)
- Storybook synced: yes
- Tool: Claude
- Changed: no Figma change. New `storybook/` (React + Vite + Storybook 10.6.1, addons docs, a11y, designs, mcp; port 6007): 200 tokens from data/tokens.json, 40 text styles, 12 effect styles and 33 component node ids read live from the DS file (read-only), 40 icons, 33 working components (Form Elements 14, Navigation 13, Data Display 6) + Patterns/App Shell, 33 generated story files (Figma description, when to use / not to use, every Figma property as a control with its Figma default, one story per variant value and per State, All variants grid, In use examples). Parity 33/33, 0 name problems; build passes; 274 stories and docs pages render with no errors; 20 interaction checks pass; axe: only disabled-state contrast (exempt) left. Screenshots: audits/storybook-2026-09-30/.
- Figma file: NEW PROJECT Design system (read only)

## 2026-09-30 - Login screen (Design file)
- Storybook synced: yes
- Changed: in "NEW PROJECT Design File" (7ZCVrtHY1pw7yMeKPL6A7O), page Auth: frames Login / Desktop (1440x900: Brand Panel + Sign In Form) and Login / Mobile (375x812, Typography and Spacing modes set to Mobile), built from library instances (Input / Text, Input / Password, Checkbox, Button Filled/Outline/Link, Icon/Heart Pulse, Icon/Mail, Icon/Lock, Icon/Phone). Final-audit fixes: hand-drawn "or" divider removed (no Divider component), invite help line uses a Link Button, footer text shortened; Mobile invite row stacked so the link fits 375. 0 local variables or styles, 0 unbound values, 0 detached instances. DS library published and enabled in the Design file.
- Figma file: NEW PROJECT Design File

## 2026-09-30 - Components audit fixes
- Storybook synced: yes
- Changed: color/border/strong -> gray/400, color/action/secondary/border -> gray/500; 11 new state variants (434 total); new text properties on Inputs, Text Area, Select, Upload Field, OTP / Field, Stepper; renamed Menu / Item, OTP / Cell, OTP / Field, Tabs / Item, Tabs / Bar, Pagination / Item, Breadcrumb / Item, Sidebar / Item; Toggle axis Value; Menu and Menu / Item moved to new page ➜ Menus (⭐Navigation). See audits/2026-09-30-components.md.
- Figma file: NEW PROJECT Design system (to be renamed ClinicSoft Design System)

## 2026-09-30 - Components built (Atoms, Molecules, Organisms)
- Storybook synced: yes
- Changed: 33 component sets / components, 423 variants. Atoms: Button (150), Icon Button (100), Checkbox (15), Radio (10), Toggle (8), Badge (10), Avatar (10), Tooltip (8), Tab (10), Pagination Item (5), Breadcrumb Item (4), Menu Item (10), OTP Cell (5). Molecules: Nav Item (4), Input / Text, Password, Date, Phone (7 each), Text Area (6), Search (5), Upload Field (5), OTP Field (3), Stepper (4), Alert (4), Toast (4), Menu, Tab Bar (2), Pagination, Breadcrumb. Organisms: Select / Dropdown (6), Modal (2), Sidebar, Top Bar. New page ➜ Navigation Bars under ⭐Navigation. Each has a documentation frame and a Figma description (Purpose, Usage rules, Accessibility). Binding scan: 0 unbound fills/strokes/spacing/radius, 0 dead properties, 0 detached instances.
- Figma file: NEW PROJECT Design system (to be renamed ClinicSoft Design System)

## 2026-09-30 - Foundation built
- Storybook synced: yes
- Changed: 200 variables (Primitives 71, Semantic 60 in mode Dark, Spacing 24, Radius 9, Opacity 1, Typography 35), 40 text styles, 12 effect styles, 3 grid styles, 40 Lucide icons, Cover and ⭐Setup docs pages. Audit findings F1-F3 fixed.
- Figma file: NEW PROJECT Design system (to be renamed ClinicSoft Design System)
