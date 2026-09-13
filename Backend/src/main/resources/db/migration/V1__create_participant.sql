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
    sort_direction       TEXT NOT NULL DEFAULT 'ASC' CHECK (sort_direction IN ('ASC', 'DESC'))
);

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
    status      TEXT    NOT NULL DEFAULT 'NONE' CHECK (status IN ('NONE', 'DNS', 'DNF', 'DSQ'),

    FOREIGN KEY (race_id)
        REFERENCES race (id)
        ON DELETE CASCADE

);

CREATE INDEX idx_participant_race_id ON participant (race_id);
CREATE INDEX idx_participant_person_id ON participant (person_id);
CREATE INDEX idx_participant_team_id ON participant (team_id);
CREATE INDEX idx_participant_category_id ON participant (category_id);
CREATE UNIQUE INDEX idx_participant_race_race_number_unique ON participant (race_id, race_number);
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
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    type            TEXT      NOT NULL CHECK (type IN ('LOS', 'TEAM', 'TIME_COMBINATION', 'POINTS_COMBINATION')),
    name            TEXT      NOT NULL,
    team_size       INTEGER,
    points_scale_id INTEGER   REFERENCES points_scale (id) ON DELETE SET NULL,
    created_at      TIMESTAMP NOT NULL
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
