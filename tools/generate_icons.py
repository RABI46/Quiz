#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Génère les icônes PNG de la PWA aux couleurs de Noël.

Aucune dépendance : rasterisation et encodage PNG en Python standard.
Les formes reprennent celles de icon.svg (même géométrie, viewBox 512).

Utilisation : python3 tools/generate_icons.py
"""
import struct
import zlib

GREEN = (10, 31, 22)      # #0a1f16, fond nuit verte
RED = (224, 67, 58)       # #e0433a, rouge houx
GOLD = (243, 201, 105)    # #f3c969, or
CREAM = (247, 239, 224)   # #f7efe0, croix crème


def rounded_rect(x0, y0, x1, y1, radius):
    """Test d'appartenance à un rectangle arrondi (coordonnées incluses)."""
    def inside(x, y):
        if x < x0 or x > x1 or y < y0 or y > y1:
            return False
        if x < x0 + radius:
            cx = x0 + radius
        elif x > x1 - radius:
            cx = x1 - radius
        else:
            cx = x
        if y < y0 + radius:
            cy = y0 + radius
        elif y > y1 - radius:
            cy = y1 - radius
        else:
            cy = y
        return (x - cx) ** 2 + (y - cy) ** 2 <= radius * radius
    return inside


def rect(x0, y0, x1, y1):
    def inside(x, y):
        return x0 <= x <= x1 and y0 <= y <= y1
    return inside


def icon_layers():
    """Icône principale : fond vert arrondi, pastille rouge bordée d'or."""
    return None, [
        (rounded_rect(0, 0, 511, 511, 96), GREEN),
        (rounded_rect(52, 52, 459, 459, 76), GOLD),
        (rounded_rect(58, 58, 453, 453, 70), RED),
        (rect(216, 104, 296, 424), CREAM),
        (rect(104, 224, 408, 304), CREAM),
    ]


def maskable_layers():
    """Icône « maskable » : fond plein, contenu dans la zone de sécurité."""
    return GREEN, [
        (rounded_rect(128, 128, 383, 383, 48), GOLD),
        (rounded_rect(134, 134, 377, 377, 43), RED),
        (rect(236, 180, 276, 332), CREAM),
        (rect(180, 236, 332, 276), CREAM),
    ]


def apple_layers():
    """Icône iOS : fond plein, dessin adapté à 180 px (viewBox 180)."""
    return GREEN, [
        (rounded_rect(18, 18, 161, 161, 26), GOLD),
        (rounded_rect(22, 22, 157, 157, 23), RED),
        (rect(76, 36, 104, 144), CREAM),
        (rect(36, 76, 144, 104), CREAM),
    ]


def render(target, design_size, base, layers):
    """Rend l'icône avec suréchantillonnage, puis renvoie les lignes RGBA."""
    samples = 4 if target <= 256 else 3
    step = design_size / target
    inv = 1.0 / (samples * samples)
    rows = []
    for py in range(target):
        row = bytearray()
        for px in range(target):
            acc_r = acc_g = acc_b = acc_a = 0.0
            for sy in range(samples):
                y = (py + (sy + 0.5) / samples) * step
                for sx in range(samples):
                    x = (px + (sx + 0.5) / samples) * step
                    if base is None:
                        r = g = b = 0.0
                        a = 0.0
                    else:
                        r, g, b = base
                        a = 255.0
                    for inside, color in layers:
                        if inside(x, y):
                            r, g, b = color
                            a = 255.0
                    acc_r += r * a
                    acc_g += g * a
                    acc_b += b * a
                    acc_a += a
            if acc_a > 0:
                row += bytes((
                    round(acc_r / acc_a),
                    round(acc_g / acc_a),
                    round(acc_b / acc_a),
                    round(acc_a * inv),
                ))
            else:
                row += b"\x00\x00\x00\x00"
        rows.append(row)
    return rows


def png_bytes(width, height, rows):
    raw = b"".join(b"\x00" + bytes(row) for row in rows)

    def chunk(tag, data):
        body = tag + data
        return struct.pack(">I", len(data)) + body + struct.pack(">I", zlib.crc32(body) & 0xFFFFFFFF)

    return (
        b"\x89PNG\r\n\x1a\n"
        + chunk(b"IHDR", struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0))
        + chunk(b"IDAT", zlib.compress(raw, 9))
        + chunk(b"IEND", b"")
    )


def write_icon(path, target, design_size, base, layers):
    rows = render(target, design_size, base, layers)
    with open(path, "wb") as handle:
        handle.write(png_bytes(target, target, rows))
    print("écrit %s (%d×%d)" % (path, target, target))


def main():
    write_icon("icons/icon-512.png", 512, 512, *icon_layers())
    write_icon("icons/icon-192.png", 192, 512, *icon_layers())
    write_icon("icons/maskable-512.png", 512, 512, *maskable_layers())
    write_icon("icons/apple-touch-icon.png", 180, 180, *apple_layers())


if __name__ == "__main__":
    main()
