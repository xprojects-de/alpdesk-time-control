#!/bin/bash
# Runs all steps of the Rundung test in order. Requires the app already running (see
# start_instances.sh). Fast - no device polling/scheduler ticks to wait out, unlike
# bergsprint/nachtslalom.
set -euo pipefail
cd "$(dirname "$0")"

echo "=== 1: Laeufe, Altersgruppe, Teilnehmer, Race-1-Ergebnisse ==="
python3 setup_race.py

echo ""
echo "=== 2: Lauf 1 - Platz-Gleichstand + Rueckstand-Konsistenz ==="
python3 verify_lauf1.py

echo ""
echo "=== 3: Lauf 2 - abgeleitete Startreihenfolge (Gleichstand wandert gemeinsam) ==="
python3 lauf2_start_order.py

echo ""
echo "=== 4: Gaudi Zeit-Kombination - Rueckstand-Konsistenz + Vorzeichen bei DESC ==="
python3 gaudi_zeitkombination.py

echo ""
echo "=== 5: Gaudi Los-Modus - Abweichung-Konsistenz ==="
python3 gaudi_los.py

echo ""
echo "All steps complete."
