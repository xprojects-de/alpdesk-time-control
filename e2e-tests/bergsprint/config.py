"""Central port/config for the Bergsprint single-race + timing-device-import E2E test."""
import os

APP_PORT = int(os.environ.get("BERGSPRINT_APP_PORT", 18200))
DEVICE_PORT = int(os.environ.get("BERGSPRINT_DEVICE_PORT", 19200))

BASE = f"http://localhost:{APP_PORT}"
DEVICE = f"http://localhost:{DEVICE_PORT}"

APP_USERNAME = os.environ.get("BERGSPRINT_APP_USERNAME", "e2e_admin")
APP_PASSWORD = os.environ.get("BERGSPRINT_APP_PASSWORD", "e2eTestPass123")

RACE_NAME = "Bergsprint"
NUM_PARTICIPANTS = 51
# raceNumbers <= this many go in the first category, up to the second cutoff in the second
# category, and the rest have no category at all - adjust freely.
CATEGORY_1_NAME = "Bio-Bike"
CATEGORY_1_CUTOFF = 15
CATEGORY_2_NAME = "E-Bike"
CATEGORY_2_CUTOFF = 46
# NUM_PARTICIPANTS - CATEGORY_2_CUTOFF participants get no category at all.

# How many of the participants (raceNumber 1..N) actually get a device-reported finish time;
# the rest simulate no-shows/DNS (no device reading, no explicit status).
NUM_WITH_DEVICE_TIME = 40
MIN_MINUTES, MAX_MINUTES = 19, 50

# raceNumber of a participant to explicitly mark DNF partway through the workflow, simulating an
# operator noting a withdrawal (must be > NUM_WITH_DEVICE_TIME to have no device time already).
DNF_RACE_NUMBER = 45

# Additional raceNumbers to override with an explicit status AFTER the main results have already
# landed (useful for a second pass exercising "a previously-valid result gets excluded later").
# raceNumber -> (status, comment).
ADDITIONAL_STATUS_OVERRIDES = {
    # 3: ("DNF", "Sturz im Anstieg"),
    # 20: ("DNF", "Kettenriss"),
    # 9: ("DNS", "Krank am Start"),
}
