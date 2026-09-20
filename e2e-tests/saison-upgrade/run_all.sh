#!/bin/bash
# Runs the Saison-Upgrade test. Requires the app already running against the pre-V4 fixture
# (see start_instances.sh), which is what applied migration V4 in the first place.
#
# Usage: ./run_all.sh [/path/to/the/instance/time-control.db]
# Without the path only the API-level checks run; the SQLite-level ones (AUTOINCREMENT high-water
# mark, dropped UNIQUE(name)) are skipped with a note.
set -euo pipefail
cd "$(dirname "$0")"

echo "=== 1: Bestand nach dem Rebuild der age_group-Tabelle ==="
python3 verify_upgrade.py "$@"

echo ""
echo "All steps complete."
