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
    id   INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    date DATE NOT NULL
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
    association TEXT,
    duration_ms INTEGER,
    measured_at TIMESTAMP,

    FOREIGN KEY (race_id)
        REFERENCES race (id)
        ON DELETE CASCADE

);

CREATE INDEX idx_participant_race_id ON participant(race_id);

CREATE TABLE measurement
(
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    participant_id INTEGER,
    duration_ms    INTEGER   NOT NULL,
    measured_at    TIMESTAMP NOT NULL,

    FOREIGN KEY (participant_id)
        REFERENCES participant (id)
);