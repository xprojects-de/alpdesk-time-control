CREATE TABLE age_group
(
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    name            TEXT    NOT NULL UNIQUE,
    birth_year_from INTEGER NOT NULL,
    birth_year_to   INTEGER NOT NULL,
    gender          TEXT    NOT NULL DEFAULT 'BOTH' CHECK (gender IN ('MALE', 'FEMALE', 'BOTH'))
);

CREATE TABLE race
(
    id                   INTEGER PRIMARY KEY AUTOINCREMENT,
    name                 TEXT NOT NULL UNIQUE,
    date                 DATE NOT NULL,
    organisation         TEXT,
    referee              TEXT,
    race_director        TEXT,
    time_control         TEXT,
    route_name           TEXT,
    elevation_difference TEXT,
    route_length         TEXT,
    course_setter        TEXT,
    weather              TEXT,
    result_unit          TEXT NOT NULL DEFAULT 'TIME' CHECK (result_unit IN ('TIME', 'POINTS')),
    result_unit_label    TEXT,
    sort_direction       TEXT NOT NULL DEFAULT 'ASC' CHECK (sort_direction IN ('ASC', 'DESC')),

    -- Optional cover page prepended to every ranking/results PDF generated for this race (not the
    -- start list) - see PdfExportService.renderDocument/generateStartList.
    cover_page_pdf       BLOB,

    -- Links this race to an earlier run/leg it derives its start order from (e.g. slalom run 2's
    -- start list depends on run 1's results) - see ParticipantService.applyStartOrderFromPreviousRace.
    -- ON DELETE SET NULL so deleting run 1 doesn't cascade-delete run 2, it just un-links it.
    previous_race_id     INTEGER REFERENCES race (id) ON DELETE SET NULL,
    start_order_mode     TEXT CHECK (start_order_mode IN ('REVERSE_TOP_N')),
    start_order_reverse_top_count INTEGER,

    -- Opaque, unguessable identifier for this race's public live-results URLs (RaceLiveController),
    -- deliberately unrelated to `id` so those URLs can't be walked by incrementing/guessing a
    -- number - see RaceService.generateLiveToken. Always set by the application on insert.
    live_token            TEXT NOT NULL UNIQUE
);

CREATE INDEX idx_race_previous_race_id ON race (previous_race_id);

CREATE TABLE team
(
    id   INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE category
(
    id   INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE person
(
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name  TEXT NOT NULL,
    last_name   TEXT NOT NULL,
    birth_date  DATE NOT NULL,
    gender      TEXT NOT NULL,
    external_id TEXT UNIQUE
);

CREATE TABLE participant
(
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    race_id     INTEGER NOT NULL,
    person_id   INTEGER NOT NULL REFERENCES person (id),
    race_number INTEGER,
    team_id     INTEGER REFERENCES team (id) ON DELETE SET NULL,
    category_id INTEGER REFERENCES category (id) ON DELETE SET NULL,
    duration_ms INTEGER,
    penalty     INTEGER,
    measured_at TIMESTAMP,
    comment     TEXT,
    status      TEXT    NOT NULL DEFAULT 'NONE' CHECK (status IN ('NONE', 'DNS', 'DNF', 'DSQ')),

    -- Position in this race's actual start order, when it differs from race_number (e.g. a
    -- slalom run 2 whose start order was derived from run 1's results, so bib 30 might start
    -- before bib 5). race_number is the athlete's fixed bib and is never touched by that
    -- derivation - see ParticipantService#applyStartOrderFromPreviousRace and AutoAssignService.
    -- Null means "this participant starts in race_number order", which is every participant of
    -- every race that never had a start order derived for it.
    start_sequence INTEGER,

    FOREIGN KEY (race_id)
        REFERENCES race (id)
        ON DELETE CASCADE

);

CREATE INDEX idx_participant_race_id ON participant (race_id);
CREATE INDEX idx_participant_person_id ON participant (person_id);
CREATE INDEX idx_participant_team_id ON participant (team_id);
CREATE INDEX idx_participant_category_id ON participant (category_id);
CREATE UNIQUE INDEX idx_participant_race_race_number_unique ON participant (race_id, race_number);
CREATE UNIQUE INDEX idx_participant_race_start_sequence_unique ON participant (race_id, start_sequence);
-- Enforces "one person per race" at the DB level (application code already checks this, but
-- without this index two concurrent requests could both pass that check and create duplicates).
CREATE UNIQUE INDEX idx_participant_race_person_unique ON participant (race_id, person_id);

CREATE TABLE measurement
(
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    participant_id INTEGER,
    duration_ms    INTEGER   NOT NULL,
    measured_at    TIMESTAMP NOT NULL,

    FOREIGN KEY (participant_id)
        REFERENCES participant (id)
        ON DELETE SET NULL
);

CREATE TABLE race_measurement
(
    id                    INTEGER PRIMARY KEY AUTOINCREMENT,
    race_id               INTEGER   NOT NULL,
    device_measurement_id INTEGER   NOT NULL,
    participant_id        INTEGER,
    duration_ms           INTEGER   NOT NULL,
    measured_at           TIMESTAMP NOT NULL,

    FOREIGN KEY (race_id)
        REFERENCES race (id)
        ON DELETE CASCADE,
    FOREIGN KEY (participant_id)
        REFERENCES participant (id)
        ON DELETE SET NULL
);

CREATE INDEX idx_race_measurement_race_id ON race_measurement (race_id);
CREATE INDEX idx_race_measurement_participant_id ON race_measurement (participant_id);
CREATE UNIQUE INDEX idx_race_measurement_race_device_unique ON race_measurement (race_id, device_measurement_id);

CREATE TABLE points_scale
(
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    name       TEXT NOT NULL UNIQUE,
    points_csv TEXT NOT NULL
);

INSERT INTO points_scale (name, points_csv)
VALUES ('FIS-Schema',
        '100,80,60,50,45,40,36,32,29,26,24,22,20,18,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0');

CREATE TABLE gaudi_mode
(
    id                  INTEGER PRIMARY KEY AUTOINCREMENT,
    type                TEXT      NOT NULL CHECK (type IN ('LOS', 'TEAM', 'TIME_COMBINATION', 'POINTS_COMBINATION')),
    name                TEXT      NOT NULL,
    team_size           INTEGER,
    points_scale_id     INTEGER   REFERENCES points_scale (id) ON DELETE SET NULL,
    created_at          TIMESTAMP NOT NULL,

    -- Optional cover page prepended to every PDF generated for this Gaudi-Modus instance - separate
    -- from any of its leg races' own cover page (see PdfExportService.renderDocument).
    cover_page_pdf      BLOB
);

CREATE TABLE gaudi_mode_race
(
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    gaudi_mode_id INTEGER NOT NULL,
    race_id       INTEGER NOT NULL,
    sort_order    INTEGER NOT NULL DEFAULT 0,
    weight        REAL    NOT NULL DEFAULT 1.0,

    FOREIGN KEY (gaudi_mode_id)
        REFERENCES gaudi_mode (id)
        ON DELETE CASCADE,
    FOREIGN KEY (race_id)
        REFERENCES race (id)
        ON DELETE CASCADE
);

CREATE INDEX idx_gaudi_mode_race_gaudi_mode_id ON gaudi_mode_race (gaudi_mode_id);
CREATE INDEX idx_gaudi_mode_race_race_id ON gaudi_mode_race (race_id);

CREATE TABLE gaudi_los_pairing
(
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    gaudi_mode_id   INTEGER NOT NULL,
    participant1_id INTEGER NOT NULL,
    participant2_id INTEGER,

    FOREIGN KEY (gaudi_mode_id)
        REFERENCES gaudi_mode (id)
        ON DELETE CASCADE,
    FOREIGN KEY (participant1_id)
        REFERENCES participant (id)
        ON DELETE CASCADE,
    FOREIGN KEY (participant2_id)
        REFERENCES participant (id)
        ON DELETE CASCADE
);

CREATE INDEX idx_gaudi_los_pairing_mode_id ON gaudi_los_pairing (gaudi_mode_id);

-- No CHECK constraint on timing_provider_type: the set of valid values grows every time a new
-- timing device is supported, and a DB-level allow-list would mean every new device needs a
-- migration just to be selectable. Valid values are enforced in code instead - see
-- TimingProviderType (the enum) and SettingsController (which only accepts values present in
-- TimingProviderRegistry.availableTypes() before writing this column).
CREATE TABLE app_settings
(
    id                     INTEGER PRIMARY KEY,
    timing_provider_type   TEXT NOT NULL DEFAULT 'NONE',
    timing_provider_config TEXT
);

-- Single settings row, always id=1. SettingsService reads/writes this row only; a fresh install
-- needs it seeded here rather than lazily created, since TimingProviderRegistry expects it to
-- always exist. Starts as NONE (no timing device configured) - the app is equally usable for
-- evaluation/results only; select a device under Settings to enable device import.
INSERT INTO app_settings (id, timing_provider_type, timing_provider_config)
VALUES (1, 'NONE', NULL);
