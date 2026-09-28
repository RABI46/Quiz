#!/bin/sh
# Génère les icônes PNG du quiz à partir du dessin de icon.svg.
# Dépendance : ImageMagick (commande « convert »).
# Utilisation : sh tools/make_icons.sh
set -e
cd "$(dirname "$0")/.."
mkdir -p icons

NAVY="#0A192F"
ORANGE="#E85D04"

# Icône principale (fond transparent), 512 px
convert -size 512x512 xc:none \
  -fill "$NAVY" -draw "roundrectangle 0,0 511,511 96,96" \
  -fill "$ORANGE" -draw "roundrectangle 52,52 459,459 76,76" \
  -fill white -draw "rectangle 216,104 296,424" \
  -fill white -draw "rectangle 104,224 408,304" \
  icons/icon-512.png
convert icons/icon-512.png -resize 192x192 icons/icon-192.png

# Icône « maskable » : fond plein, contenu dans la zone de sécurité (80 % centrés)
convert -size 512x512 xc:"$NAVY" \
  -fill "$ORANGE" -draw "roundrectangle 128,128 383,383 48,48" \
  -fill white -draw "rectangle 236,180 276,332" \
  -fill white -draw "rectangle 180,236 332,276" \
  icons/maskable-512.png

# Icône iOS (fond plein, pas de transparence)
convert -size 180x180 xc:"$NAVY" \
  -fill "$ORANGE" -draw "roundrectangle 18,18 161,161 26,26" \
  -fill white -draw "rectangle 76,36 104,144" \
  -fill white -draw "rectangle 36,76 144,104" \
  icons/apple-touch-icon.png

# Logo de la Protection Civile utilisé en filigrane (fourni dans attached_assets)
if [ -f attached_assets/images_1790503838156.jpeg ]; then
  convert attached_assets/images_1790503838156.jpeg -resize 512x512 -strip assets/logo-protection-civile.jpg
fi

echo "Icônes générées dans icons/ et assets/."
