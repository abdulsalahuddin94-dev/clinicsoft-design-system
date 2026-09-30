# ClinicSoft - Decisions

## 2026-09-30 Foundation
- **Dark only.** One Semantic mode named `Dark` (intake 0.4). No Light variants, no dark preview duplicates; every contrast check is against the dark surfaces.
- **Brand ramp.** `#299B48` sits at step 600 (its OKLCH lightness is closest to Tailwind green-600). The ramp is generated from the Tailwind green curve around it (`data/source/generate_foundation.py`), so `tools/recolor.py ClinicSoft --ramp brand --base <hex>` regenerates every step. `data/source/config.json > ramp.base_steps.brand = 600`.
- **Filled brand buttons use near-black text.** White on `#299B48` is 3.57:1 (fails 4.5:1); `gray/950` on it is 5.64:1. `color/action/primary/text` and `color/text/on-brand` alias `gray/950`.
- **Pressed brand state is lighter, not darker.** `bg-active` = `brand/400` because `gray/950` text on `brand/700` is only 3.76:1. Hover = `brand/500`.
- **Success has its own ramp** (`green` = Tailwind emerald) so success badges never read as a brand action.
- **Neutrals** = Tailwind slate (cool gray). Surfaces: page `gray/950`, cards `gray/900`, raised `gray/800`.
- **Body text stays 16px on every breakpoint.** The Trianglz Typography values shrink `base` to 14 on iPad and Mobile; ClinicSoft keeps xs/sm/base/lg at 12/14/16/18 on all modes (healthcare readability, 16px minimum body on mobile). Larger sizes compress like Trianglz.
- **Radius** per the healthcare direction: buttons `radius/md` 6, inputs and cards `radius/lg` 8, panels 12, modals 16.
- **Shadows** are Tailwind names with higher black alpha for dark surfaces; depth mostly comes from surface steps and borders.
- **Icons**: 40 Lucide icons (UI basics plus clinic icons: Stethoscope, Heart Pulse, Pill, Calendar, Clock, Users, File Text).
- **No component-specific tokens.** `color/action/*` is shared across Button, Icon Button and Link-as-button; no `color/btn/*`.

## Fix on create
- 2026-09-30: `tools/fix_tokens.py ClinicSoft` plan is empty (0 values, 0 aliases, 0 renames, 0 need a person). `recolor_readiness.ready` = true.
- Recolor test (`--ramp brand --base #2E8B57`, not applied): 63 contrast pairs pass, 0 fail.
