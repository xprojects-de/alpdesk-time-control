#!/bin/bash
# Runs all phases of the federation test in order. Requires 5 instances already running
# (see start_instances.sh) and race CSVs already present in this directory (see README.md).
set -euo pipefail
cd "$(dirname "$0")"

echo "=== Phase 1: MAIN setup (age groups, races, roster import, copy to other races) ==="
python3 phase1_main.py

echo ""
echo "=== Phase 2: station setup (each station imports the roster) ==="
for s in station1 station2 station3 station4; do python3 phase2_station_setup.py "$s"; done

echo ""
echo "=== Phase 3: enter results at each station (never via bulk import) ==="
for s in station1 station2 station3 station4; do python3 phase3_enter_results.py "$s"; done

echo ""
echo "=== Phase 4: export results from each station, import into MAIN ==="
python3 phase4_export_import.py

echo ""
echo "=== Phase 5: reconcile MAIN vs. each station ==="
python3 phase5_reconcile.py

echo ""
echo "=== Phase 6: verify overall rankings ==="
python3 phase6_verify_rankings.py

echo ""
echo "=== Phase 7: verify gender/age-group rankings ==="
python3 phase7_verify_gender_agegroup.py

echo ""
echo "=== Phase 8: Gaudi-Modus Punkte-Mischwertung over all races ==="
python3 phase8_gaudi_combo.py

echo ""
echo "=== Phase 9: Gaudi-Modus age-group breakdown ==="
python3 phase9_gaudi_agegroups.py

echo ""
echo "=== Phase 10: cross-check against real official result PDF (if present) ==="
if [ -f sample-data/official_result.pdf ]; then
    python3 verify_against_official.py
else
    echo "sample-data/official_result.pdf nicht vorhanden - Cross-Check uebersprungen (siehe README.md)."
fi

echo ""
echo "All phases complete."
