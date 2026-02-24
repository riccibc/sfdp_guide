#!/usr/bin/env python3
"""Generate simple PWA icons for Stanford FDP Pocket Guide."""
import struct, zlib, math

def png(w, h, pixels):
    def chunk(tag, data):
        c = zlib.crc32(tag + data) & 0xFFFFFFFF
        return struct.pack('>I', len(data)) + tag + data + struct.pack('>I', c)
    sig = b'\x89PNG\r\n\x1a\n'
    ihdr = chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 8, 2, 0, 0, 0))
    raw = b''.join(b'\x00' + bytes(row) for row in pixels)
    idat = chunk(b'IDAT', zlib.compress(raw, 9))
    iend = chunk(b'IEND', b'')
    return sig + ihdr + idat + iend

def make_icon(size, path):
    cardinal = (140, 21, 21)
    white    = (255, 255, 255)
    bg_dark  = (101, 16, 16)
    cx, cy   = size // 2, size // 2
    r_outer  = size // 2
    r_inner  = int(size * 0.38)
    pad      = size // 10

    pixels = []
    for y in range(size):
        row = []
        for x in range(size):
            dx, dy = x - cx, y - cy
            dist = math.sqrt(dx*dx + dy*dy)

            # gradient background circle
            t = min(dist / r_outer, 1.0)
            if dist <= r_outer:
                # cardinal gradient
                gr = int(bg_dark[0] + (cardinal[0] - bg_dark[0]) * (1 - t))
                gg = int(bg_dark[1] + (cardinal[1] - bg_dark[1]) * (1 - t))
                gb = int(bg_dark[2] + (cardinal[2] - bg_dark[2]) * (1 - t))
                color = (gr, gg, gb)
            else:
                color = (255, 255, 255)

            # Draw a stylised "S" as three horizontal bars
            bar_w = int(size * 0.38)
            bar_h = max(2, int(size * 0.07))
            bx = cx - bar_w // 2
            # Top bar
            if (bx <= x <= bx + bar_w and
                    cy - int(size*0.18) - bar_h//2 <= y <= cy - int(size*0.18) + bar_h//2):
                color = white
            # Middle bar
            if (bx <= x <= bx + bar_w and
                    cy - bar_h//2 <= y <= cy + bar_h//2):
                color = white
            # Bottom bar
            if (bx <= x <= bx + bar_w and
                    cy + int(size*0.18) - bar_h//2 <= y <= cy + int(size*0.18) + bar_h//2):
                color = white

            if dist > r_outer:
                row += [255, 255, 255]
            else:
                row += list(color)
        pixels.append(row)

    with open(path, 'wb') as f:
        f.write(png(size, size, pixels))
    print(f'Written {path}')

make_icon(192, '/home/user/sfdp_guide/icons/icon-192.png')
make_icon(512, '/home/user/sfdp_guide/icons/icon-512.png')
