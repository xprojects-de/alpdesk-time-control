#!/bin/bash
# Starts 1 isolated backend instance for the Rundung E2E test. NEVER points at the real production
# database. No fake timing device needed - every result is entered directly via PUT /participants.
#
# Usage: ./start_instances.sh /path/to/time-control.jar [/path/to/work-dir]
set -euo pipefail

JAR="${1:?Usage: $0 /path/to/time-control.jar [work-dir]}"
WORK_DIR="${2:-$(mktemp -d)}"
APP_PORT=18400
# Requires Java 25+ (the app is built with sourceCompatibility 25). Set JAVA_HOME if `java` on
# your PATH is older - e.g. JAVA_HOME=/path/to/jdk-25 ./start_instances.sh ...
JAVA_BIN="${JAVA_HOME:+$JAVA_HOME/bin/}java"

echo "Work dir: $WORK_DIR"
mkdir -p "$WORK_DIR/app"

(
  cd "$WORK_DIR/app"
  APP_USERNAME=e2e_admin APP_PASSWORD=e2eTestPass123 \
    JWT_GENERATOR_SIGNATURE_SECRET="e2e-rundung-secret-needs-at-least-32-bytes-xyz" \
    OPEN_BROWSER=false \
    "$JAVA_BIN" -Dmicronaut.server.port="$APP_PORT" -jar "$JAR" > backend.log 2>&1 &
  echo "app: PID=$! port=$APP_PORT dir=$WORK_DIR/app"
)

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
sleep 6
echo ""
echo "Health check:"
curl -s -o /dev/null -w "  app port $APP_PORT: HTTP %{http_code}\n" "http://localhost:$APP_PORT/watchdog" || true
echo ""
echo "To stop: pkill -f 'time-control.jar'"
echo "Now run: cd $SCRIPT_DIR && ./run_all.sh"
