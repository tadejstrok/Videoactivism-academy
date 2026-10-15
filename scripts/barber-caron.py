"""Add Ccaron/Scaron/Zcaron to the Barber layer fonts and export subset WOFFs.

The caron is the font's own circumflex accent (taken from Ecircumflex) flipped
vertically. Fill/Outline get the flipped accent; the Shadow layer gets an
extrusion swept from the flipped fill accent so the 3D effect stays consistent.
"""
import sys
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.reverseContourPen import ReverseContourPen
from fontTools.pens.t2CharStringPen import T2CharStringPen
from fontTools import subset

src = Path(sys.argv[1])  # public/fonts
out = Path(sys.argv[2])  # public/fonts/web
LAYERS = ['Fill', 'Outline', 'Shadow', 'Right']
TARGETS = {'C': ('Ccaron', 0x10C, 0x10D), 'S': ('Scaron', 0x160, 0x161), 'Z': ('Zcaron', 0x17D, 0x17E)}
EXTRUDE = (150, -120)  # Shadow offset measured from E vs fill
CAP = 1140
ASCENT, DESCENT = 1300, 200


def contours(rec):
    cur = []
    for op, args in rec.value:
        cur.append((op, args))
        if op in ('closePath', 'endPath'):
            yield cur
            cur = []


def bounds_of(ops, gs=None):
    p = BoundsPen(gs)
    for op, args in ops:
        getattr(p, op)(*args)
    return p.bounds


def accent_ops(font, min_y):
    gs = font.getGlyphSet()
    rec = RecordingPen()
    gs['Ecircumflex'].draw(rec)
    acc = []
    for c in contours(rec):
        if bounds_of(c)[1] >= min_y:
            acc.extend(c)
    return acc


def replay(ops, pen):
    for op, args in ops:
        getattr(pen, op)(*args)


fill = TTFont(src / 'Barber-Fill.otf')
fill_acc = accent_ops(fill, CAP)
ax0, ay0, ax1, ay1 = bounds_of(fill_acc)
flip_axis = ay0 + ay1  # y' = flip_axis - y
fill_gs = fill.getGlyphSet()


def base_center(name):
    p = BoundsPen(fill_gs)
    fill_gs[name].draw(p)
    return (p.bounds[0] + p.bounds[2]) / 2


acc_cx = (ax0 + ax1) / 2

for layer in LAYERS:
    font = TTFont(src / f'Barber-{layer}.otf')
    gs = font.getGlyphSet()
    cff = font['CFF '].cff
    top = cff.topDictIndex[0]
    cs = top.CharStrings
    private = top.Private
    order = font.getGlyphOrder()

    if layer == 'Fill':
        acc = fill_acc
    elif layer == 'Outline':
        acc = accent_ops(font, CAP + 40)
    else:
        acc = None  # built from the fill accent below

    for base, (name, up, low) in TARGETS.items():
        width = gs[base].width
        dx = base_center(base) - acc_cx
        # CFF stores advance widths relative to nominalWidthX (or omits them when equal to defaultWidthX).
        nominal = getattr(private, 'nominalWidthX', 0)
        default = getattr(private, 'defaultWidthX', 0)
        pen = T2CharStringPen(None if width == default else width - nominal, gs)
        gs[base].draw(pen)
        if layer in ('Fill', 'Outline'):
            # Flip vertically (reverse contours to keep winding), centre over base.
            replay(acc, TransformPen(ReverseContourPen(pen), (1, 0, 0, -1, dx, flip_axis)))
        elif layer == 'Shadow':
            steps = 12
            for i in range(1, steps + 1):
                t = i / steps
                tx, ty = dx + EXTRUDE[0] * t, flip_axis + EXTRUDE[1] * t
                replay(fill_acc, TransformPen(ReverseContourPen(pen), (1, 0, 0, -1, tx, ty)))
        charstring = pen.getCharString(private=private, globalSubrs=cff.GlobalSubrs)
        cs.charStringsIndex.append(charstring)
        cs.charStrings[name] = len(cs.charStringsIndex) - 1
        order.append(name)
        font['hmtx'].metrics[name] = font['hmtx'].metrics[base]
        for table in font['cmap'].tables:
            if table.isUnicode():
                table.cmap[up] = name
                table.cmap[low] = name

    # Tighten vertical metrics: caps are only 1140/2000 units tall, the stock
    # ascender (1900) leaves a big empty band above every line. Keep room for
    # the extrusion (-160) below and let accents overhang into the leading.
    hhea, os2 = font['hhea'], font['OS/2']
    hhea.ascent, hhea.descent, hhea.lineGap = ASCENT, -DESCENT, 0
    os2.sTypoAscender, os2.sTypoDescender, os2.sTypoLineGap = ASCENT, -DESCENT, 0
    os2.usWinAscent, os2.usWinDescent = ASCENT, DESCENT
    os2.version = max(os2.version, 4)
    os2.fsSelection |= 1 << 7  # USE_TYPO_METRICS

    top.charset = order
    font.setGlyphOrder(order)
    font['maxp'].numGlyphs = len(order)
    if 'post' in font:
        font['post'].formatType = 3.0
    patched = out / f'Barber-{layer}.otf'
    font.save(patched)

    opts = subset.Options()
    opts.flavor = 'woff'
    opts.layout_features = ['*']
    opts.name_IDs = ['*']
    opts.notdef_outline = True
    sub = TTFont(patched)
    s = subset.Subsetter(opts)
    s.populate(unicodes=list(range(0x20, 0x7F)) + list(range(0xA0, 0x180)) + [0x2013, 0x2014, 0x2018, 0x2019, 0x201C, 0x201D, 0x201E, 0x2026, 0x2022, 0x2192])
    s.subset(sub)
    sub.flavor = 'woff'
    sub.save(out / f'Barber-{layer}.woff')
    patched.unlink()
    print(layer, 'ok', len(order))
