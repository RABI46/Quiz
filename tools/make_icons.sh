#!/bin/sh
# Génère les icônes PNG du quiz aux couleurs du thème (Noël).
# Aucune dépendance externe : le rendu et l'encodage PNG sont faits par
# tools/generate_icons.py avec la bibliothèque standard de Python 3.
# Utilisation : sh tools/make_icons.sh
set -e
cd "$(dirname "$0")/.."
python3 tools/generate_icons.py
