#!/bin/bash
# Runs all steps of the Bergsprint test in order. Requires the app + fake device already running
# (see start_instances.sh).
set -euo pipefail
cd "$(dirname "$0")"

echo "=== 1: Rennen, Kategorien, Teilnehmer, Startliste ==="
python3 run_bergsprint.py

echo ""
echo "=== 2: Zeitmessung ueber das (fake) Geraet simulieren ==="
python3 simulate_device.py

echo ""
echo "=== 3: Kontinuierlichen Import aktivieren, damit Auto-Assign zuordnet ==="
python3 enable_scheduled_and_wait.py

echo ""
echo "=== 4: Sicherung, Archivieren, DNF setzen, Live-Messungen loeschen, Sync ==="
python3 finish_workflow.py

echo ""
echo "=== 5: Damen/Herren je Kategorie verifizieren ==="
python3 verify_evaluations.py

echo ""
echo "=== 6: Los-Modus verifizieren ==="
python3 verify_los.py

echo ""
echo "Optional: python3 apply_additional_status.py (nach Eintragen in config.py) und Schritte 5+6 wiederholen."
echo "All steps complete."
