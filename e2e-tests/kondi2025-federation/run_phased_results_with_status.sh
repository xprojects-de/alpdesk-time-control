#!/bin/bash
# Runs the SAME federation setup + results backup/restore roundtrip as run_phased_results.sh
# (phases 1-10, unchanged), then adds Gaudi-Modus DNS/DNF/DSQ "keep in ranking" scenario coverage
# on top (phases 11-13): deliberately sets DNS/DNF/DSQ on a handful of hand-picked participants,
# then plays through every keepDnsInRanking/keepDnfInRanking/keepDsqInRanking flag combination on a
# POINTS_COMBINATION Gaudi-Modus and independently verifies the resulting ranking (JSON + PDF), plus
# a guardrail that these flags have zero effect on a non-POINTS_COMBINATION type. See phase11/12/13's
# docstrings for the exact scenario matrix and what's checked.
#
# Requires 5 FRESH instances (same as run_all.sh/run_phased.sh/run_phased_results.sh - creates races
# with the same names, so don't run this against instances that already ran one of the others - see
# README.md).
#
# Usage: ./run_phased_results_with_status.sh
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
echo "=== Phase 11: Gaudi-Modus Status-Szenarien vorbereiten (DNS/DNF/DSQ gezielt setzen) ==="
python3 phase11_prepare_status_scenarios.py

echo ""
echo "=== Phase 12: Gaudi-Modus keep-in-ranking Szenarien durchspielen ==="
python3 phase12_gaudi_status_scenarios.py

echo ""
echo "=== Phase 13: Kontrolle - keep-in-ranking hat bei anderen Gaudi-Modus-Typen keinen Effekt ==="
python3 phase13_status_flags_no_effect_on_other_types.py

echo ""
echo "All phases complete (results backup/restore roundtrip + Gaudi status scenarios verified)."
