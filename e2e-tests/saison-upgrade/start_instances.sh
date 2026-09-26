#!/bin/bash
# Starts 1 isolated backend instance for the Saison-Upgrade E2E test, against a database that is
# still at migration V2 - the state a 1.4 installation in the field is in - so starting it applies
# V3 to V7 - including both age_group table rebuilds (V4, V6) - exactly as a real upgrade does.
# NEVER points at the real production database.
#
# Usage: ./start_instances.sh /path/to/time-control.jar [/path/to/work-dir]
set -euo pipefail

JAR="${1:?Usage: $0 /path/to/time-control.jar [work-dir]}"
WORK_DIR="${2:-$(mktemp -d)}"
APP_PORT=18600
# Requires Java 25+ (the app is built with sourceCompatibility 25). Set JAVA_HOME if `java` on
# your PATH is older - e.g. JAVA_HOME=/path/to/jdk-25 ./start_instances.sh ...
JAVA_BIN="${JAVA_HOME:+$JAVA_HOME/bin/}java"

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Work dir: $WORK_DIR"
mkdir -p "$WORK_DIR/app"
python3 "$SCRIPT_DIR/make_fixture.py" "$WORK_DIR/app/database/time-control.db"

(
  cd "$WORK_DIR/app"
  # validate-on-migrate=false only because the fixture's flyway_schema_history is written by hand
  # with NULL checksums (see make_fixture.py). V4 itself is applied exactly as it would be in the
  # field - this flag does not skip or alter a single migration.
  APP_USERNAME=e2e_admin APP_PASSWORD=e2eTestPass123 \
    JWT_GENERATOR_SIGNATURE_SECRET="e2e-saison-upgrade-secret-needs-32-bytes-xyz" \
    OPEN_BROWSER=false \
    "$JAVA_BIN" -Dflyway.datasources.default.validate-on-migrate=false \
      -Dmicronaut.server.port="$APP_PORT" -jar "$JAR" > backend.log 2>&1 &
  echo "app: PID=$! port=$APP_PORT dir=$WORK_DIR/app"
)

sleep 6
echo ""
echo "Migration applied on startup:"
grep -E "Migrating schema|Successfully applied|Current version" "$WORK_DIR/app/backend.log" || \
  echo "  (nothing found - check $WORK_DIR/app/backend.log)"
echo ""
echo "Health check:"
curl -s -o /dev/null -w "  app port $APP_PORT: HTTP %{http_code}\n" "http://localhost:$APP_PORT/watchdog" || true
echo ""
echo "DB (for the verification step): $WORK_DIR/app/database/time-control.db"
echo "To stop: pkill -f 'time-control.jar'"
echo "Now run: cd $SCRIPT_DIR && ./run_all.sh $WORK_DIR/app/database/time-control.db"
