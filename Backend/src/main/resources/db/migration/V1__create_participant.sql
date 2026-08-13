CREATE TABLE participant
(
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name  TEXT    NOT NULL,
    last_name   TEXT    NOT NULL,
    birth_date  DATE    NOT NULL,
    race_number INTEGER NOT NULL,
    association TEXT
);

CREATE TABLE measurement
(
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    participant_id INTEGER,
    duration_ms    INTEGER NOT NULL,
    measured_at    TEXT    NOT NULL,

    FOREIGN KEY (participant_id)
        REFERENCES participant (id)
);