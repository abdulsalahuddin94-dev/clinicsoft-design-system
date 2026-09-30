"""Generate the ClinicSoft foundation spec (ramps, Semantic Dark mapping, contrast check).

Run from the Root: python "My Projects/ClinicSoft/data/source/generate_foundation.py"
Writes My Projects/ClinicSoft/data/source/foundation-spec.json, used by the Figma build scripts.
"""
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))))
sys.path.insert(0, os.path.join(ROOT, 'tools'))
import ds_color as d  # noqa: E402

STEPS = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']

# Tailwind v3 reference ramps (their OKLCH curves are the shape every ramp keeps).
TW = {
    'slate': '#F8FAFC #F1F5F9 #E2E8F0 #CBD5E1 #94A3B8 #64748B #475569 #334155 #1E293B #0F172A #020617',
    'green': '#F0FDF4 #DCFCE7 #BBF7D0 #86EFAC #4ADE80 #22C55E #16A34A #15803D #166534 #14532D #052E16',
    'emerald': '#ECFDF5 #D1FAE5 #A7F3D0 #6EE7B7 #34D399 #10B981 #059669 #047857 #065F46 #064E3B #022C22',
    'red': '#FEF2F2 #FEE2E2 #FECACA #FCA5A5 #F87171 #EF4444 #DC2626 #B91C1C #991B1B #7F1D1D #450A0A',
    'amber': '#FFFBEB #FEF3C7 #FDE68A #FCD34D #FBBF24 #F59E0B #D97706 #B45309 #92400E #78350F #451A03',
    'blue': '#EFF6FF #DBEAFE #BFDBFE #93C5FD #60A5FA #3B82F6 #2563EB #1D4ED8 #1E40AF #1E3A8A #172554',
}
TW = {k: dict(zip(STEPS, v.split())) for k, v in TW.items()}

BRAND = '#299B48'


def nearest_step(ref, hex_):
    L = d.hex_to_oklch(hex_)[0]
    return min(STEPS, key=lambda s: abs(d.hex_to_oklch(ref[s])[0] - L))


def ramp_from(ref_name, base_hex=None, base_step='500'):
    ref = TW[ref_name]
    if base_hex is None:
        values = dict(ref)
        curve = d.capture_curve(ref, base_step)
    else:
        base_step = nearest_step(ref, base_hex)
        curve = d.capture_curve(ref, base_step)
        values = d.regenerate_ramp(curve, base_hex, STEPS)
    return {'values': values, 'base_step': base_step, 'base_hex': values[base_step], 'reference': 'tailwind-' + ref_name,
            'curve': curve}


RAMPS = {
    'gray': ramp_from('slate'),
    'brand': ramp_from('green', BRAND),
    'green': ramp_from('emerald'),
    'red': ramp_from('red'),
    'yellow': ramp_from('amber'),
    'blue': ramp_from('blue'),
}

SINGLES = {'white': '#FFFFFF', 'black': '#000000'}
ALPHAS = {'alpha/black-50': ('#000000', 0.5), 'alpha/black-70': ('#000000', 0.7), 'alpha/white-10': ('#FFFFFF', 0.1)}

# Semantic, mode "Dark" only. Values are Primitive names.
SEMANTIC = {
    'text': {
        'primary': 'gray/50', 'secondary': 'gray/300', 'muted': 'gray/400', 'placeholder': 'gray/400',
        'disabled': 'gray/500', 'inverse': 'gray/950', 'link': 'brand/400', 'link-hover': 'brand/300',
        'error': 'red/400', 'warning': 'yellow/400', 'success': 'green/400', 'info': 'blue/400', 'on-brand': 'gray/950',
    },
    'bg': {
        'primary': 'gray/950', 'secondary': 'gray/900', 'subtle': 'gray/800', 'muted': 'gray/700',
        'inverse': 'gray/50', 'overlay': 'alpha/black-70', 'error': 'red/950', 'warning': 'yellow/950',
        'success': 'green/950', 'info': 'blue/950', 'brand': 'brand/600', 'brand-hover': 'brand/500',
        'brand-active': 'brand/400',
    },
    'border': {
        'default': 'gray/700', 'muted': 'gray/800', 'strong': 'gray/400', 'input': 'gray/500', 'inverse': 'gray/50',
        'focus': 'brand/400', 'error': 'red/500', 'warning': 'yellow/500', 'success': 'green/500', 'brand': 'brand/500',
    },
    'icon': {
        'default': 'gray/300', 'strong': 'gray/50', 'muted': 'gray/400', 'brand': 'brand/400', 'inverse': 'gray/950',
        'error': 'red/400', 'warning': 'yellow/400', 'success': 'green/400', 'info': 'blue/400',
    },
    'action': {
        'primary/bg': 'brand/600', 'primary/bg-hover': 'brand/500', 'primary/bg-active': 'brand/400',
        'primary/text': 'gray/950', 'primary/border': 'brand/600',
        'secondary/bg': 'gray/800', 'secondary/bg-hover': 'gray/700', 'secondary/bg-active': 'gray/900',
        'secondary/text': 'gray/50', 'secondary/border': 'gray/500',
        'danger/bg': 'red/600', 'danger/bg-hover': 'red/700', 'danger/bg-active': 'red/800',
        'danger/text': 'white', 'danger/border': 'red/600',
    },
}

SCOPES = {'text': ['TEXT_FILL'], 'bg': ['FRAME_FILL', 'SHAPE_FILL'], 'border': ['STROKE_COLOR'],
          'icon': ['FRAME_FILL', 'SHAPE_FILL', 'STROKE_COLOR']}


def action_scope(role):
    if role.endswith('/text'):
        return ['TEXT_FILL']
    if role.endswith('/border'):
        return ['STROKE_COLOR']
    return ['FRAME_FILL', 'SHAPE_FILL']


def prim_hex(name):
    if name in SINGLES:
        return SINGLES[name]
    if name in ALPHAS:
        return ALPHAS[name][0]
    ramp, step = name.split('/')
    return RAMPS[ramp]['values'][step]


def sem(path):
    group, role = path.split('/', 1)
    return prim_hex(SEMANTIC[group][role])


# text >= 4.5, UI >= 3.0; bg/secondary is the card surface, so text is checked there too.
PAIRS = []
for surf in ('bg/primary', 'bg/secondary'):
    for t in ('primary', 'secondary', 'muted', 'placeholder', 'link', 'error', 'warning', 'success', 'info'):
        PAIRS.append(('text/' + t, surf, 4.5))
    for b in ('input', 'strong', 'focus', 'error', 'success', 'brand'):
        PAIRS.append(('border/' + b, surf, 3.0))
    for i in ('default', 'muted', 'brand', 'error', 'warning', 'success', 'info'):
        PAIRS.append(('icon/' + i, surf, 3.0))
for s in ('error', 'warning', 'success', 'info'):
    PAIRS.append(('text/' + s, 'bg/' + s, 4.5))
for a in ('primary', 'secondary', 'danger'):
    for bgk in ('bg', 'bg-hover', 'bg-active'):
        PAIRS.append(('action/%s/text' % a, 'action/%s/%s' % (a, bgk), 4.5))
for surf in ('bg/primary', 'bg/secondary', 'bg/subtle'):
    PAIRS.append(('action/secondary/border', surf, 3.0))
PAIRS += [('text/error', 'bg/subtle', 4.5), ('text/on-brand', 'bg/brand', 4.5), ('text/on-brand', 'bg/brand-hover', 4.5),
          ('text/on-brand', 'bg/brand-active', 4.5), ('text/inverse', 'bg/inverse', 4.5),
          ('action/primary/bg', 'bg/primary', 3.0), ('action/primary/bg', 'bg/secondary', 3.0)]

results = []
for fg, bg, mn in PAIRS:
    c = d.contrast(sem(fg), sem(bg))
    results.append({'fg': 'Semantic::color/' + fg, 'bg': 'Semantic::color/' + bg, 'min': mn, 'ratio': round(c, 2),
                    'pass': c >= mn})

spec = {
    'project': 'ClinicSoft', 'mode': 'Dark', 'brand': BRAND,
    'ramps': {k: {kk: vv for kk, vv in v.items() if kk != 'curve'} | {'curve': v['curve']} for k, v in RAMPS.items()},
    'singles': SINGLES, 'alphas': {k: {'hex': v[0], 'alpha': v[1]} for k, v in ALPHAS.items()},
    'semantic': [{'name': 'color/%s/%s' % (g, r), 'alias': a,
                  'scopes': action_scope(r) if g == 'action' else SCOPES[g]}
                 for g, roles in SEMANTIC.items() for r, a in roles.items()],
    'contrast': results,
}
out = os.path.join(ROOT, 'My Projects', 'ClinicSoft', 'data', 'source', 'foundation-spec.json')
with open(out, 'w', encoding='utf-8') as f:
    json.dump(spec, f, indent=1)

fails = [r for r in results if not r['pass']]
print('brand ramp (base %s):' % RAMPS['brand']['base_step'], ' '.join(RAMPS['brand']['values'][s] for s in STEPS))
print('pairs %d, failing %d' % (len(results), len(fails)))
for r in fails:
    print('  FAIL', r['fg'], 'on', r['bg'], r['ratio'], '<', r['min'])
