# ClinicSoft - Web Design System: Storybook

Living documentation of the Figma file "NEW PROJECT Design system" (link and node ids in `figma-links.json`). Documentation only, not production code: the components are working replicas on the design tokens, with Figma names kept exactly. Dark only (one Semantic mode).

## Run
```
npm install               # first time only
npm run storybook         # http://localhost:6007  (MCP: http://localhost:6007/mcp)
npm run build-storybook   # static site in storybook-static/
```
Port 6007 so it can run next to the Trianglz reference Storybook (6006).

## What is where
| Path | Content | Edit? |
|---|---|---|
| `src/tokens/` | CSS variables + token table from `../data/tokens.json` | generated (`npm run tokens`) |
| `src/stories/<Group>/` | one stories file per Figma component, from `../data/component-registry.json`, `../data/source/components-live.json` (descriptions, defaults) and `../Component_Skills/*/references/components.md` (use / do not use) | generated (`npm run stories`) |
| `src/stories/Patterns/` | pattern stories assembled from components | by hand |
| `src/components/` | React replicas grouped like the Figma ⭐ groups; props = Figma names and defaults | by hand |
| `src/styles/text-styles.css` | the 40 Figma text styles as classes (`sm/Semi Bold` -> `.ts-sm-semi-bold`) | by hand, from the Typography variables |
| `src/styles/effects.css` | the 12 Figma effect styles (read from Figma 2026-09-30) | by hand, from Figma |
| `src/foundations/` | Introduction, Colors, Typography, Spacing, Radius, Shadows, Icons (live from tokens) | by hand |
| `component-map.json` | Figma component name -> React export, All-variants axes, In use examples | by hand |
| `figma-links.json` | Figma node ids for "Open in Figma" (this file only) | re-export after duplicating |

## After Figma changes
From the Root: `python tools/tokens_to_css.py "My Projects/ClinicSoft"`, `python tools/storybook_stories.py "My Projects/ClinicSoft"`, `python tools/storybook_parity.py "My Projects/ClinicSoft"`, then update the replica in `src/components/` if the visuals changed, build, and run `python tools/project_status.py "My Projects/ClinicSoft" --mark-synced`.
