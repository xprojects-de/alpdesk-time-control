#!/bin/bash
# Runs all steps of the Saison test in order. Requires the app already running (see
# start_instances.sh). Fast - no device polling/scheduler ticks to wait out.
#
# The steps build on each other and are NOT individually re-runnable against a used instance:
# setup.py creates races/persons that later steps look up by id, and verify_rollover.py fills in
# season 2025, which verify_boundary.py and the Gaudi step then rely on.
set -euo pipefail
cd "$(dirname "$0")"

echo "=== 1: Rennen, Altersgruppen (nur Saison 2026), Teilnehmer ==="
python3 setup.py

echo ""
echo "=== 2: Saison folgt dem Renndatum - unkonfigurierte Saison wertet ohne Altersklasse ==="
python3 verify_scoping.py

echo ""
echo "=== 3: Saison-Uebernahme (rueckwaerts) - gleiche Person, zwei Klassen ==="
python3 verify_rollover.py

echo ""
echo "=== 4: Saisongrenze verschieben und zuruecknehmen ==="
python3 verify_boundary.py

echo ""
echo "=== 5: Gaudi-Wertung ueber zwei Saisons ==="
python3 verify_gaudi_cross_season.py

echo ""
echo "All steps complete."
