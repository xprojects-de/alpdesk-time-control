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
    id                    INTEGER PRIMARY KEY AUTOINCREMENT,
    name                  TEXT NOT NULL UNIQUE,
    date                  DATE NOT NULL,
    organisation          TEXT,
    referee               TEXT,
    race_director         TEXT,
    time_control          TEXT,
    route_name            TEXT,
    elevation_difference  TEXT,
    route_length          TEXT,
    course_setter         TEXT,
    weather               TEXT
);

CREATE TABLE team
(
    id   INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE participant
(
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    race_id     INTEGER NOT NULL,
    first_name  TEXT    NOT NULL,
    last_name   TEXT    NOT NULL,
    birth_date  DATE    NOT NULL,
    gender      TEXT    NOT NULL,
    race_number INTEGER NOT NULL,
    team_id     INTEGER REFERENCES team (id) ON DELETE SET NULL,
    duration_ms INTEGER,
    measured_at TIMESTAMP,

    FOREIGN KEY (race_id)
        REFERENCES race (id)
        ON DELETE CASCADE

);

CREATE INDEX idx_participant_race_id ON participant(race_id);
CREATE INDEX idx_participant_team_id ON participant (team_id);

CREATE TABLE measurement
(
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    participant_id INTEGER,
    duration_ms    INTEGER   NOT NULL,
    measured_at    TIMESTAMP NOT NULL,

    FOREIGN KEY (participant_id)
        REFERENCES participant (id)
);

CREATE TABLE gaudi_mode
(
    id         INTEGER   PRIMARY KEY AUTOINCREMENT,
    race_id    INTEGER   NOT NULL,
    type       TEXT      NOT NULL CHECK (type IN ('LOS', 'TEAM')),
    name       TEXT      NOT NULL,
    team_size  INTEGER,
    created_at TIMESTAMP NOT NULL,

    FOREIGN KEY (race_id)
        REFERENCES race (id)
        ON DELETE CASCADE
);

CREATE INDEX idx_gaudi_mode_race_id ON gaudi_mode (race_id);

CREATE TABLE gaudi_los_pairing
(
    id               INTEGER PRIMARY KEY AUTOINCREMENT,
    gaudi_mode_id    INTEGER NOT NULL,
    participant1_id  INTEGER NOT NULL,
    participant2_id  INTEGER,

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
