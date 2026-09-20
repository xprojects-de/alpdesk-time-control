#!/usr/bin/env python3
"""Builds a pre-V4 database: the schema as of migration V3, with age groups already in it.

Assembled from the repository's own V1-V3 migration files rather than from a checked-in binary, so
the fixture cannot drift away from what an older release actually produced - and so nothing
unreviewable ends up in git.

The flyway_schema_history rows are written by hand with NULL checksums, which is why the instance
is started with `-Dflyway.datasources.default.validate-on-migrate=false`: recomputing Flyway's own
checksums here would tie the fixture to an internal algorithm for no gain. Validation is off only
for this throwaway instance; nothing about how V4 itself is applied changes.

Usage: make_fixture.py <path/to/time-control.db>
"""
import pathlib
import sqlite3
import sys

import config

APPLIED = [
    (1, "1", "create participant", "V1__create_participant.sql"),
    (2, "2", "gaudi mode keep dns dnf dsq in ranking", "V2__gaudi_mode_keep_dns_dnf_dsq_in_ranking.sql"),
    (3, "3", "add start group", "V3__add_start_group.sql"),
]

target = pathlib.Path(sys.argv[1])
migrations = pathlib.Path(__file__).resolve().parents[2] / "Backend/src/main/resources/db/migration"

missing = [script for _, _, _, script in APPLIED if not (migrations / script).exists()]
if missing:
    sys.exit(f"FAIL migration file(s) not found in {migrations}: {', '.join(missing)}")
if not (migrations / "V4__age_group_season.sql").exists():
    sys.exit("FAIL V4 migration not found - this suite tests upgrading *to* it")

target.parent.mkdir(parents=True, exist_ok=True)
if target.exists():
    target.unlink()

conn = sqlite3.connect(target)
try:
    for _, _, _, script in APPLIED:
        conn.executescript((migrations / script).read_text())

    conn.executescript("""
        CREATE TABLE flyway_schema_history (
            installed_rank INTEGER NOT NULL PRIMARY KEY,
            version        VARCHAR(50),
            description    VARCHAR(200) NOT NULL,
            type           VARCHAR(20)  NOT NULL,
            script         VARCHAR(1000) NOT NULL,
            checksum       INTEGER,
            installed_by   VARCHAR(100) NOT NULL,
            installed_on   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            execution_time INTEGER NOT NULL,
            success        BOOLEAN NOT NULL
        );
    """)
    conn.executemany(
        "INSERT INTO flyway_schema_history (installed_rank, version, description, type, script,"
        " checksum, installed_by, execution_time, success)"
        " VALUES (?, ?, ?, 'SQL', ?, NULL, 'e2e-fixture', 1, 1)",
        [(rank, version, description, script) for rank, version, description, script in APPLIED],
    )

    conn.executemany(
        "INSERT INTO age_group (id, name, birth_year_from, birth_year_to, gender) VALUES (?, ?, ?, ?, ?)",
        [(ag["id"], ag["name"], ag["birthYearFrom"], ag["birthYearTo"], ag["gender"])
         for ag in config.PRE_V4_AGE_GROUPS],
    )
    conn.commit()

    columns = [row[1] for row in conn.execute("PRAGMA table_info(age_group)")]
    if "season_year" in columns:
        sys.exit("FAIL fixture already has season_year - V1-V3 are not the pre-V4 schema any more")
    seq = conn.execute("SELECT seq FROM sqlite_sequence WHERE name = 'age_group'").fetchone()
    if seq is None or seq[0] != config.HIGHEST_PRE_V4_ID:
        sys.exit(f"FAIL fixture AUTOINCREMENT high-water mark is {seq}, expected {config.HIGHEST_PRE_V4_ID}")
finally:
    conn.close()

print(f"pre-V4 fixture written to {target} "
      f"(schema v3, {len(config.PRE_V4_AGE_GROUPS)} age groups, ids "
      f"{', '.join(str(ag['id']) for ag in config.PRE_V4_AGE_GROUPS)})")
