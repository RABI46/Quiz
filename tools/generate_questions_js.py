#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Génère questions.js à partir de data/questions.json.

Source de vérité : data/questions.json (lisible par n'importe quel outil).
Utilisation :
    python3 tools/generate_questions_js.py           # écrit questions.js
    python3 tools/generate_questions_js.py --check   # vérifie la synchronisation
"""
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(ROOT, "data", "questions.json")
JS_PATH = os.path.join(ROOT, "questions.js")

HEADER = """/* Banque de questions — Quiz PSE · Protection Civile du Lot
 *
 * Format d'un item :
 *   { id: "xxx-01", cat: "<thématique>", level: "PSE1" | "PSE2",
 *     q: "Question ?",
 *     opts: ["…", "…", "…", "…"],   // 4 propositions
 *     c: 2,                          // index de la bonne réponse dans opts
 *     e: "explication pédagogique" }
 *
 * Règles : identifiants uniques, 4 options par question, options de
 * longueur comparable, positions des bonnes réponses équilibrées.
 * Contrôle automatique : tools/validate_bank.mjs, exécuté par GitHub Actions.
 *
 * Fichier généré depuis data/questions.json — ne pas modifier à la main.
 *
 * Banque : %d questions.
 */
"""


def render(items):
    lines = [HEADER % len(items), "globalThis.QUESTION_BANK = ["]
    for item in items:
        lines.append("  {")
        lines.append('    id: %s, cat: %s, level: %s,'
                     % (json.dumps(item["id"], ensure_ascii=False),
                        json.dumps(item["cat"], ensure_ascii=False),
                        json.dumps(item["level"], ensure_ascii=False)))
        lines.append("    q: %s," % json.dumps(item["q"], ensure_ascii=False))
        lines.append("    opts: [%s]," % ", ".join(json.dumps(o, ensure_ascii=False) for o in item["opts"]))
        lines.append("    c: %d," % item["c"])
        lines.append("    e: %s," % json.dumps(item["e"], ensure_ascii=False))
        lines.append("  },")
    lines.append("];")
    lines.append('if (typeof window !== "undefined") { window.QUESTION_BANK = QUESTION_BANK; }')
    return "\n".join(lines) + "\n"


def main():
    with open(JSON_PATH, encoding="utf-8") as handle:
        items = json.load(handle)
    content = render(items)

    if "--check" in sys.argv:
        with open(JS_PATH, encoding="utf-8") as handle:
            current = handle.read()
        if current == content:
            print("✅ questions.js est synchronisé avec data/questions.json (%d questions)" % len(items))
            return 0
        print("❌ questions.js n'est pas à jour : exécutez python3 tools/generate_questions_js.py", file=sys.stderr)
        return 1

    with open(JS_PATH, "w", encoding="utf-8") as handle:
        handle.write(content)
    print("questions.js écrit (%d questions, %.0f Ko)" % (len(items), len(content.encode()) / 1024))
    return 0


if __name__ == "__main__":
    sys.exit(main())
