#!/bin/bash
# Runs the SAME federation test as run_all.sh, but spreads result entry over 3 phases per station
# with a full export/import to MAIN after each one - simulating the operators securing standings
# at 3 breaks during the event instead of a single import at the very end. Requires 5 FRESH
# instances (this reuses the same races/rosters, so don't run this against instances that already
# ran run_all.sh - see README.md "Normal + Phasen-Test nacheinander laufen lassen").
set -euo pipefail
cd "$(dirname "$0")"

echo "=== Phase 1: MAIN setup (age groups, races, roster import, copy to other races) ==="
python3 phase1_main.py

echo ""
echo "=== Phase 2: station setup (each station imports the roster) ==="
for s in station1 station2 station3 station4; do python3 phase2_station_setup.py "$s"; done

for phase in 1 2 3; do
    echo ""
    echo "=== Wettkampf-Phase $phase/3: Ergebnisse an jeder Station eintragen (nur ein Drittel des Feldes) ==="
    for s in station1 station2 station3 station4; do python3 phase3_phased_results.py "$s" "$phase"; done

    # Station corrections across breaks: a penalty / DSQ+comment added before break 1's import is taken
    # back at the station before break 2's import - phase4_phased's cross-check then proves MAIN follows.
    if [ "$phase" = 1 ]; then
        echo ""
        echo "=== Korrektur an der Station: Strafzeit bzw. DSQ+Kommentar setzen (wird in Pause 1 importiert) ==="
        python3 phase3b_station_corrections.py add
    elif [ "$phase" = 2 ]; then
        echo ""
        echo "=== Korrektur an der Station: Strafzeit bzw. DSQ+Kommentar zuruecknehmen (muss in Pause 2 bei MAIN verschwinden) ==="
        python3 phase3b_station_corrections.py remove
    fi

    echo ""
    echo "=== Wettkampf-Phase $phase/3: Zwischenstand exportieren + in MAIN importieren (Pause/Sicherung) ==="
    python3 phase4_phased_export_import.py "$phase"
done

echo ""
echo "=== Phase 5: reconcile MAIN vs. each station (jetzt vollstaendig, wie beim Normal-Test) ==="
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
echo "All phases complete (phased result entry over 3 breaks)."
