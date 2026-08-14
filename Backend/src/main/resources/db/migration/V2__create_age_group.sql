CREATE TABLE age_group
(
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    name            TEXT    NOT NULL UNIQUE,
    birth_year_from INTEGER NOT NULL,
    birth_year_to   INTEGER NOT NULL
);

