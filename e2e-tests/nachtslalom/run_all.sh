#!/bin/bash
# Runs all steps of the Nachtslalom test in order. Requires the app + fake device already running
# (see start_instances.sh). Takes a few minutes - several steps wait out real 5s scheduler ticks.
set -euo pipefail
cd "$(dirname "$0")"

echo "=== 1: Laeufe, Altersgruppen, Teilnehmer, Vorab-Fehlerfaelle ==="
python3 setup_race.py

echo ""
echo "=== 2: Lauf 1 - Auto-Assign (alle Kombinationen + Fehlerfaelle) ==="
python3 lauf1_autoassign.py

echo ""
echo "=== 3: Lauf 1 abschliessen - Reset-Regressionen (Fix #1 + Fix #6) ==="
python3 lauf1_reset_regression.py

echo ""
echo "=== 4: Lauf 2 - Startreihenfolge ableiten + Auto-Assign in Start-Reihenfolge ==="
python3 lauf2_start_order_autoassign.py

echo ""
echo "=== 5: Endergebnis verifizieren ==="
python3 verify_final.py

echo ""
echo "All steps complete."
