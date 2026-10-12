"""Generate optimized assets from the original portfolio files; requires Pillow."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
assets = root / 'public' / 'projects'
sources = root / 'scripts' / 'asset-sources'
for source, target, crop in [
    ('HarareSkateClub.png', 'skate.webp', (385, 185, 2510, 1370)),
    ('muwoni.png', 'muwoni.webp', (82, 185, 2536, 1370)),
    ('josh.jpeg', 'josh.webp', None),
]:
    image = Image.open(sources / source).convert('RGB')
    if crop:
        image = image.crop(crop)
    image.thumbnail((1200, 900))
    image.save(assets / target, 'WEBP', quality=84, method=6)
    print(f'{target}: {(assets / target).stat().st_size:,} bytes')

canvas = Image.new('RGB', (1200, 630), '#111310')
draw = ImageDraw.Draw(canvas)
for x in range(0, 1200, 60):
    draw.line((x, 0, x, 630), fill='#1b2016')
for y in range(0, 630, 60):
    draw.line((0, y, 1200, y), fill='#1b2016')
font_path = 'C:/Windows/Fonts/arial.ttf'
bold_path = 'C:/Windows/Fonts/arialbd.ttf'
small = ImageFont.truetype(font_path, 19)
large = ImageFont.truetype(bold_path, 78)
draw.rounded_rectangle((65, 55, 130, 120), radius=12, fill='#c2f471')
draw.text((75, 66), 'jm', font=ImageFont.truetype(bold_path, 39), fill='#172109')
draw.text((150, 68), 'JOSHUA MABHARANI', font=small, fill='#f0f0e9')
draw.text((150, 96), 'SOFTWARE DEVELOPER & PRODUCT DESIGNER', font=ImageFont.truetype(font_path, 12), fill='#9ba194')
draw.text((65, 193), 'Thoughtful code.', font=large, fill='#f0f0e9')
draw.text((65, 281), 'Remarkable', font=large, fill='#f0f0e9')
draw.text((65, 369), 'experiences.', font=large, fill='#c2f471')
draw.text((65, 536), 'HARARE, ZIMBABWE  /  BIG21JOSH', font=small, fill='#9ba194')
draw.line((65, 504, 1135, 504), fill='#30352a', width=1)
canvas.save(root / 'public' / 'og-image.png', optimize=True)
