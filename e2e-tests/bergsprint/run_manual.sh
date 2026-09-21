#!/bin/bash
# Bergsprint variant WITHOUT live auto-assign: poll the timing device, archive onto the race,
# assign every measurement to its participant by hand, then sync and evaluate.
# Requires the app + fake device already running (see start_instances.sh).
set -euo pipefail
cd "$(dirname "$0")"

echo "=== 1: Rennen, Kategorien (Bio-Bike/E-Bike), Teilnehmer, Startliste ==="
python3 manual_setup.py

echo ""
echo "=== 2: Zeitmessung per Polling einlesen - OHNE Auto-Zuordnung ==="
python3 manual_simulate_device.py

echo ""
echo "=== 3: Archivieren, manuell zuordnen, Ausfaelle, Sync ==="
python3 manual_assign_and_sync.py

echo ""
echo "=== 4: Wertung Damen/Herren je Kategorie ==="
python3 manual_verify_evaluations.py

echo ""
echo "=== 5: Gaudi-Modus Los ==="
python3 manual_verify_los.py

echo ""
echo "=== 6: 'Nicht gewertet' muss zur jeweiligen Wertung passen (PDF + Live) ==="
python3 manual_verify_dns_scope.py

echo ""
echo "Fertig."
