#!/bin/bash
# Runs the SAME federation setup as run_all.sh (single-shot result entry per station, consolidated
# into MAIN), then adds one more check on top: MAIN's results, for every race, get exported via the
# RESULTS-ONLY CSV export, cleared via POST /participants/{id}/clear-result, and restored purely via
# the RESULTS-ONLY CSV import - see phase4b_results_backup_restore.py's docstring. This simulates an
# operator backing up and restoring a race's results by hand from a CSV, using only the results
# import/export feature - never the roster/participant-list import/export.
#
# Requires 5 FRESH instances (same as run_all.sh/run_phased.sh - creates races with the same names,
# so don't run this against instances that already ran one of the other two - see README.md).
#
# Usage: ./run_phased_results.sh
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
echo "=== Phase 4b: MAIN Ergebnis-Backup/Restore (Export -> clear-result -> Reimport) ==="
python3 phase4b_results_backup_restore.py

echo ""
echo "=== Phase 5 (erneut, nach dem Restore): reconcile MAIN vs. each station ==="
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
echo "All phases complete (results backup/restore roundtrip verified)."
