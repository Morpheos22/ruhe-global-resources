"""
Strip EXIF/IPTC/XMP metadata from all images in /public.
Preserves the correct image format per file extension so the Next.js
image optimizer doesn't reject mismatched-extension files.

Run once before each deploy to guarantee no GPS / camera / author
metadata leaks through the optimizer.
"""
from pathlib import Path
from PIL import Image

PUBLIC_DIR = Path("/home/z/my-project/public")

EXT_TO_FORMAT = {
    ".png": "PNG",
    ".jpg": "JPEG",
    ".jpeg": "JPEG",
    ".webp": "WEBP",
}

count = 0
skipped = 0
for img_path in PUBLIC_DIR.rglob("*"):
    if img_path.suffix.lower() not in EXT_TO_FORMAT:
        continue
    target_format = EXT_TO_FORMAT[img_path.suffix.lower()]
    try:
        img = Image.open(img_path)
        # Convert to RGB if saving as JPEG (no alpha channel allowed)
        if target_format in ("JPEG", "WEBP") and img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
        # Save without any metadata
        img.save(
            img_path,
            format=target_format,
            optimize=True,
        )
        count += 1
        print(f"stripped ({target_format}): {img_path.relative_to(PUBLIC_DIR)}")
    except Exception as e:
        skipped += 1
        print(f"skip ({e}): {img_path.relative_to(PUBLIC_DIR)}")

print(f"\nDone. Stripped {count}, skipped {skipped}.")
