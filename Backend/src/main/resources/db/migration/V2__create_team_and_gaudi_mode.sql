CREATE TABLE team
(
    id   INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

ALTER TABLE participant
    DROP COLUMN association;

ALTER TABLE participant
    ADD COLUMN team_id INTEGER REFERENCES team (id) ON DELETE SET NULL;

CREATE INDEX idx_participant_team_id ON participant (team_id);

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
