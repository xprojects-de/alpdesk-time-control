"""Step 1 (manual-assign variant): race + the two categories (Bio-Bike / E-Bike) + the roster,
plus the start list PDF as a pre-race checkpoint."""
import sys, json
sys.path.insert(0, '.')
import common as c
import manual_config as cfg

token = c.login(cfg.BASE)

print("=== Rennen + Kategorien ===")
status, race = c.post(cfg.BASE, token, "/races", {
    "name": cfg.RACE_NAME, "date": cfg.RACE_DATE, "resultUnit": "TIME", "sortDirection": "ASC",
})
assert status == 201, race
race_id = race["id"]
print(f"race_id = {race_id} ({cfg.RACE_NAME}, {cfg.RACE_DATE}, TIME/ASC)")

cat_ids = {}
for name in (cfg.CAT_BIO, cfg.CAT_EBIKE):
    status, cat = c.post(cfg.BASE, token, "/categories", {"name": name})
    assert status == 201, cat
    cat_ids[name] = cat["id"]
    print(f"  Kategorie {name} = {cat['id']}")

print(f"=== {len(cfg.ROSTER)} Teilnehmer ===")
roster = []
for rn, fn, ln, gender, cat, duration_ms, status_code, comment in cfg.ROSTER:
    st, person = c.post(cfg.BASE, token, "/persons", {
        "firstName": fn, "lastName": ln, "birthDate": f"{cfg.BIRTH_YEARS[rn]}-06-15", "gender": gender,
    })
    assert st == 201, person
    st, part = c.post(cfg.BASE, token, "/participants", {
        "raceId": race_id, "personId": person["id"], "raceNumber": rn, "categoryId": cat_ids[cat],
    })
    assert st == 201, part
    roster.append({
        "raceNumber": rn, "firstName": fn, "lastName": ln, "gender": gender, "category": cat,
        "personId": person["id"], "participantId": part["id"],
        "durationMs": duration_ms, "status": status_code, "comment": comment,
    })

for cat in (cfg.CAT_BIO, cfg.CAT_EBIKE):
    for g in ("MALE", "FEMALE"):
        n = len([r for r in roster if r["category"] == cat and r["gender"] == g])
        print(f"  {cat} / {g}: {n}")

print("=== Startliste (Checkpoint vor der Zeitmessung) ===")
status, pdf = c.get_raw(cfg.BASE, token, f"/participants/export/pdf/startlist/{race_id}")
assert status == 200
with open(c.results_path("manual_startliste.pdf"), "wb") as f:
    f.write(pdf)
print(f"Startliste generiert ({len(pdf)} bytes)")

with open(c.results_path(cfg.STATE_FILE), "w") as f:
    json.dump({"race_id": race_id, "categories": cat_ids, "roster": roster}, f, indent=2)
print(f"Setup fertig -> results/{cfg.STATE_FILE}")
