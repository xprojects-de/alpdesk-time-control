#!/bin/bash
# Starts 5 isolated backend instances (1 main + 4 stations) for the federation test, each with
# its own throwaway SQLite database under a fresh temp directory. NEVER points at the real
# production database.
#
# Usage: ./start_instances.sh /path/to/time-control.jar [/path/to/work-dir]
set -euo pipefail

JAR="${1:?Usage: $0 /path/to/time-control.jar [work-dir]}"
WORK_DIR="${2:-$(mktemp -d)}"
PORTS=(18100 18101 18102 18103 18104)
NAMES=(main station1 station2 station3 station4)
# Requires Java 25+ (the app is built with sourceCompatibility 25). Set JAVA_HOME if `java` on
# your PATH is older - e.g. JAVA_HOME=/path/to/jdk-25 ./start_instances.sh ...
JAVA_BIN="${JAVA_HOME:+$JAVA_HOME/bin/}java"

echo "Work dir: $WORK_DIR"
mkdir -p "$WORK_DIR"

for i in "${!NAMES[@]}"; do
  name="${NAMES[$i]}"
  port="${PORTS[$i]}"
  mkdir -p "$WORK_DIR/$name"
  (
    cd "$WORK_DIR/$name"
    APP_USERNAME=e2e_admin APP_PASSWORD=e2eTestPass123 \
      JWT_GENERATOR_SIGNATURE_SECRET="e2e-$name-secret-needs-at-least-32-bytes-xyz" \
      OPEN_BROWSER=false \
      "$JAVA_BIN" -Dmicronaut.server.port="$port" -jar "$JAR" > backend.log 2>&1 &
    echo "$name: PID=$! port=$port dir=$WORK_DIR/$name"
  )
done

sleep 8
echo ""
echo "Health check:"
for port in "${PORTS[@]}"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:$port/watchdog" || echo "000")
  echo "  port $port: HTTP $code"
done
echo ""
echo "To stop: pkill -f 'time-control.jar' (or kill the individual PIDs printed above)"
echo "Now run: cd $(dirname "$0") && python3 phase1_main.py"
