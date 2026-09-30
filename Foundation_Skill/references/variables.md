# ClinicSoft DS - all local variables (2026-09-30)

> Source: `../../data/tokens.json` (exported from the Figma file "NEW PROJECT Design system" with figma-console, Desktop Bridge, read-only). If this file and tokens.json differ, trust tokens.json. Find variables by name, never by ID.

200 variables in 6 collections. Every variable has explicit scopes (0 ALL_SCOPES), a description, and WEB code syntax `var(--<path with / replaced by ->)`, for example `color/text/primary` -> `var(--color-text-primary)`.

## Primitives (71, 1 mode "Value", scopes `[]` = hidden from pickers)

Ramps generated in OKLCH (`../../data/source/generate_foundation.py`, curves in `tokens.json > ramps`). Base step: 500, brand 600.

| Ramp | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 | Reference |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| gray | #F8FAFC | #F1F5F9 | #E2E8F0 | #CBD5E1 | #94A3B8 | #64748B | #475569 | #334155 | #1E293B | #0F172A | #020617 | Tailwind slate |
| brand | #F2FCF3 | #DDFAE6 | #BDF4CF | #8DEAAB | #59D77F | #39BD5D | **#299B48** | #227A3C | #1E6133 | #1B512D | #0A2D17 | Tailwind green curve, base at 600 |
| green | #ECFDF5 | #D1FAE5 | #A7F3D0 | #6EE7B7 | #34D399 | #10B981 | #059669 | #047857 | #065F46 | #064E3B | #022C22 | Tailwind emerald (success) |
| red | #FEF2F2 | #FEE2E2 | #FECACA | #FCA5A5 | #F87171 | #EF4444 | #DC2626 | #B91C1C | #991B1B | #7F1D1D | #450A0A | Tailwind red |
| yellow | #FFFBEB | #FEF3C7 | #FDE68A | #FCD34D | #FBBF24 | #F59E0B | #D97706 | #B45309 | #92400E | #78350F | #451A03 | Tailwind amber |
| blue | #EFF6FF | #DBEAFE | #BFDBFE | #93C5FD | #60A5FA | #3B82F6 | #2563EB | #1D4ED8 | #1E40AF | #1E3A8A | #172554 | Tailwind blue |

Singles: `white` #FFFFFF · `black` #000000 · `alpha/black-50` #00000080 · `alpha/black-70` #000000B2 · `alpha/white-10` #FFFFFF1A.

Recolor: `python tools/recolor.py ClinicSoft --ramp brand --base <hex>` regenerates all 11 brand steps (`data/source/config.json > ramp.base_steps.brand = 600`). A test with `#2E8B57` passed all contrast pairs (not applied).

## Semantic (60, 1 mode "Dark")

Every Semantic variable aliases a Primitive (60/60; `tokens.json > recolor_readiness.ready = true`).

### text (scope TEXT_FILL)
| Variable | Dark alias | Hex |
|---|---|---|
| color/text/primary | gray/50 | #F8FAFC |
| color/text/secondary | gray/300 | #CBD5E1 |
| color/text/muted | gray/400 | #94A3B8 |
| color/text/placeholder | gray/400 | #94A3B8 |
| color/text/disabled | gray/500 | #64748B |
| color/text/inverse | gray/950 | #020617 |
| color/text/link | brand/400 | #59D77F |
| color/text/link-hover | brand/300 | #8DEAAB |
| color/text/error | red/400 | #F87171 |
| color/text/warning | yellow/400 | #FBBF24 |
| color/text/success | green/400 | #34D399 |
| color/text/info | blue/400 | #60A5FA |
| color/text/on-brand | gray/950 | #020617 |

### bg (scopes FRAME_FILL, SHAPE_FILL)
| Variable | Dark alias | Hex |
|---|---|---|
| color/bg/primary | gray/950 | #020617 |
| color/bg/secondary | gray/900 | #0F172A |
| color/bg/subtle | gray/800 | #1E293B |
| color/bg/muted | gray/700 | #334155 |
| color/bg/inverse | gray/50 | #F8FAFC |
| color/bg/overlay | alpha/black-70 | #000000B2 |
| color/bg/error | red/950 | #450A0A |
| color/bg/warning | yellow/950 | #451A03 |
| color/bg/success | green/950 | #022C22 |
| color/bg/info | blue/950 | #172554 |
| color/bg/brand | brand/600 | #299B48 |
| color/bg/brand-hover | brand/500 | #39BD5D |
| color/bg/brand-active | brand/400 | #59D77F |

### border (scope STROKE_COLOR)
| Variable | Dark alias | Hex |
|---|---|---|
| color/border/default | gray/700 | #334155 |
| color/border/muted | gray/800 | #1E293B |
| color/border/strong | gray/400 | #94A3B8 |
| color/border/input | gray/500 | #64748B |
| color/border/inverse | gray/50 | #F8FAFC |
| color/border/focus | brand/400 | #59D77F |
| color/border/error | red/500 | #EF4444 |
| color/border/warning | yellow/500 | #F59E0B |
| color/border/success | green/500 | #10B981 |
| color/border/brand | brand/500 | #39BD5D |

`color/border/strong` was re-aliased from gray/500 to gray/400 on 2026-09-30 so Hover differs from Default on inputs, Checkbox, Radio, Select and Search.

### icon (scopes FRAME_FILL, SHAPE_FILL, STROKE_COLOR)
| Variable | Dark alias | Hex |
|---|---|---|
| color/icon/default | gray/300 | #CBD5E1 |
| color/icon/strong | gray/50 | #F8FAFC |
| color/icon/muted | gray/400 | #94A3B8 |
| color/icon/brand | brand/400 | #59D77F |
| color/icon/inverse | gray/950 | #020617 |
| color/icon/error | red/400 | #F87171 |
| color/icon/warning | yellow/400 | #FBBF24 |
| color/icon/success | green/400 | #34D399 |
| color/icon/info | blue/400 | #60A5FA |

### action (bg: FRAME_FILL, SHAPE_FILL · text: TEXT_FILL · border: STROKE_COLOR)
| Variable | Dark alias | Hex |
|---|---|---|
| color/action/primary/bg | brand/600 | #299B48 |
| color/action/primary/bg-hover | brand/500 | #39BD5D |
| color/action/primary/bg-active | brand/400 | #59D77F |
| color/action/primary/text | gray/950 | #020617 |
| color/action/primary/border | brand/600 | #299B48 |
| color/action/secondary/bg | gray/800 | #1E293B |
| color/action/secondary/bg-hover | gray/700 | #334155 |
| color/action/secondary/bg-active | gray/900 | #0F172A |
| color/action/secondary/text | gray/50 | #F8FAFC |
| color/action/secondary/border | gray/500 | #64748B |
| color/action/danger/bg | red/600 | #DC2626 |
| color/action/danger/bg-hover | red/700 | #B91C1C |
| color/action/danger/bg-active | red/800 | #991B1B |
| color/action/danger/text | white | #FFFFFF |
| color/action/danger/border | red/600 | #DC2626 |

`color/action/secondary/border` was re-aliased from gray/600 to gray/500 on 2026-09-30 (3:1 boundary rule).

## Spacing (24, modes Desktop / iPad / Mobile, scopes WIDTH_HEIGHT, GAP)

| Variable | Desktop | iPad | Mobile | Tailwind |
|---|---|---|---|---|
| space/0 | 0 | 0 | 0 | 0 |
| space/1 | 4 | 4 | 4 | 1 |
| space/2 | 8 | 8 | 8 | 2 |
| space/3 | 12 | 12 | 12 | 3 |
| space/4 | 16 | 16 | 16 | 4 |
| space/5 | 20 | 20 | 16 | 5 |
| space/6 | 24 | 22 | 18 | 6 |
| space/7 | 28 | 26 | 22 | 7 |
| space/8 | 32 | 28 | 24 | 8 |
| space/9 | 36 | 32 | 26 | 9 |
| space/10 | 40 | 36 | 28 | 10 |
| space/11 | 44 | 40 | 32 | 11 |
| space/12 | 48 | 44 | 32 | 12 |
| space/14 | 56 | 48 | 36 | 14 |
| space/16 | 64 | 52 | 40 | 16 |
| space/20 | 80 | 64 | 48 | 20 |
| space/24 | 96 | 76 | 56 | 24 |
| space/28 | 112 | 88 | 64 | 28 |
| space/32 | 128 | 96 | 72 | 32 |
| space/36 | 144 | 112 | 80 | 36 |
| space/40 | 160 | 120 | 88 | 40 |
| space/48 | 192 | 144 | 96 | 48 |
| space/56 | 224 | 168 | 104 | 56 |
| space/64 | 256 | 192 | 112 | 64 |

## Radius (9, 1 mode "Value", scope CORNER_RADIUS)

| Variable | Value | Tailwind | Use |
|---|---|---|---|
| radius/none | 0 | rounded-none | |
| radius/sm | 2 | rounded-sm | |
| radius/base | 4 | rounded | checkboxes, small chips |
| radius/md | 6 | rounded-md | buttons |
| radius/lg | 8 | rounded-lg | inputs, cards |
| radius/xl | 12 | rounded-xl | panels, popovers |
| radius/2xl | 16 | rounded-2xl | modals |
| radius/3xl | 24 | rounded-3xl | |
| radius/full | 9999 | rounded-full | pills, avatars, toggles |

## Opacity (1, 1 mode "Value", scope OPACITY)

| Variable | Value | Use |
|---|---|---|
| opacity/disabled | 50 | every Disabled variant (`opacity-50`) |

## Typography (35, modes Desktop / iPad / Mobile)

| Variable | Desktop | iPad | Mobile | Scope |
|---|---|---|---|---|
| font-family/base | Poppins | Poppins | Poppins | FONT_FAMILY |
| font-weight/regular | Regular | Regular | Regular | FONT_STYLE |
| font-weight/medium | Medium | Medium | Medium | FONT_STYLE |
| font-weight/semibold | SemiBold | SemiBold | SemiBold | FONT_STYLE |
| font-weight/bold | Bold | Bold | Bold | FONT_STYLE |

| Key | font-size D / iPad / M | line-height D / iPad / M | letter-spacing (all modes) |
|---|---|---|---|
| xs | 12 / 12 / 12 | 16 / 16 / 16 | +0.2 |
| sm | 14 / 14 / 14 | 20 / 20 / 20 | 0 |
| base | 16 / 16 / 16 | 24 / 24 / 24 | 0 |
| lg | 18 / 18 / 18 | 28 / 28 / 28 | -0.2 |
| xl | 20 / 20 / 18 | 28 / 28 / 26 | -0.2 |
| 2xl | 24 / 22 / 20 | 32 / 30 / 28 | -0.4 |
| 3xl | 28 / 24 / 24 | 36 / 34 / 32 | -0.6 |
| 4xl | 32 / 28 / 28 | 40 / 38 / 36 | -0.8 |
| 5xl | 40 / 36 / 32 | 48 / 44 / 40 | -1 |
| 6xl | 48 / 44 / 40 | 60 / 56 / 48 | -1.2 |

Variables: `font-size/{key}` (FONT_SIZE), `line-height/{key}` (LINE_HEIGHT), `letter-spacing/{key}` (LETTER_SPACING).

## Styles

- Text styles (40): `{size}/{weight}`, sizes xs-6xl x Regular, Medium, Semi Bold, Bold. All bind fontFamily, fontStyle, fontSize, lineHeight, letterSpacing.
- Effect styles (12): shadow-2xs, shadow-xs, shadow-sm, shadow-md, shadow-lg, shadow-xl, shadow-2xl, inset-shadow-2xs, inset-shadow-xs, inset-shadow-sm, focus-ring, focus-ring-offset. Raw colors (allowed).
- Grid styles (3): `Grid/Desktop 1440` (12 / 80 / 24), `Grid/iPad 768` (8 / 32 / 16), `Grid/Mobile 375` (4 / 16 / 16).
- Paint (color) styles: 0 (rule `no-color-styles`).
