"""Step 1: create the race + 2 categories + N participants (mixed gender, 16+, split across the
2 categories plus a few with no category), and generate the start list as a pre-race checkpoint."""
import sys, json, random
sys.path.insert(0, '.')
import common as c
import config

random.seed(42)
token = c.login(config.BASE)

print("=== Race + Categories ===")
status, race = c.post(config.BASE, token, "/races", {
    "name": config.RACE_NAME, "date": "2026-08-15", "resultUnit": "TIME", "sortDirection": "ASC",
})
assert status == 201, race
race_id = race["id"]
print("race_id =", race_id)

status, cat1 = c.post(config.BASE, token, "/categories", {"name": config.CATEGORY_1_NAME})
status2, cat2 = c.post(config.BASE, token, "/categories", {"name": config.CATEGORY_2_NAME})
assert status == 201 and status2 == 201
cat1_id, cat2_id = cat1["id"], cat2["id"]
print(f"{config.CATEGORY_1_NAME} =", cat1_id, f"{config.CATEGORY_2_NAME} =", cat2_id)

FIRST_M = ["Anton","Bernd","Carl","David","Erik","Felix","Georg","Hannes","Ivo","Jakob",
           "Klaus","Lars","Manuel","Niko","Otto","Paul","Quirin","Rico","Stefan","Tobias",
           "Uwe","Viktor","Walter","Xaver","Yannik","Zeno"]
FIRST_F = ["Anna","Bea","Clara","Doris","Erika","Franzi","Greta","Hanna","Ines","Julia",
           "Karin","Lena","Maria","Nina","Olga","Petra","Quirina","Rita","Sabine","Tina",
           "Ulla","Vera","Wanda","Xenia","Yvonne"]
LASTNAMES = ["Berger","Huber","Maier","Wolf","Fischer","Schuster","Bauer","Steiner","Klein",
             "Wagner","Schmid","Weber","Meyer","Krause","Braun","Vogel","Sturm","Winter",
             "Sommer","Frost","Stein","Wald","Berg","Tal","Fels","Moos","Reiter","Jaeger",
             "Muller","Schwarz","Weiss","Gruen","Blau","Rot","Silber","Gold","Ost","West",
             "Nord","Sued","Kern","Ring","Turm","Burg","Insel","Strand","Fluss","See","Baum","Wiese","Feld"]

print(f"=== {config.NUM_PARTICIPANTS} Teilnehmer (16+, gemischt) ===")
persons = []
for i in range(config.NUM_PARTICIPANTS):
    rn = i + 1
    gender = "MALE" if i % 2 == 0 else "FEMALE"
    fn = FIRST_M[i % len(FIRST_M)] if gender == "MALE" else FIRST_F[i % len(FIRST_F)]
    ln = LASTNAMES[i % len(LASTNAMES)] + str(rn)
    birth_year = random.randint(1965, 2009)  # >=16 as of 2025/2026
    status, p = c.post(config.BASE, token, "/persons", {
        "firstName": fn, "lastName": ln, "birthDate": f"{birth_year}-06-15", "gender": gender,
    })
    assert status == 201, p
    persons.append({"raceNumber": rn, "gender": gender, "personId": p["id"], "firstName": fn, "lastName": ln})

for p in persons:
    rn = p["raceNumber"]
    category_id = cat1_id if rn <= config.CATEGORY_1_CUTOFF else (cat2_id if rn <= config.CATEGORY_2_CUTOFF else None)
    body = {"raceId": race_id, "personId": p["personId"], "raceNumber": rn}
    if category_id:
        body["categoryId"] = category_id
    status, part = c.post(config.BASE, token, "/participants", body)
    assert status == 201, part
    p["participantId"] = part["id"]

print(f"{config.NUM_PARTICIPANTS} Teilnehmer angelegt. "
      f"{config.CATEGORY_1_NAME}: raceNumbers 1-{config.CATEGORY_1_CUTOFF}, "
      f"{config.CATEGORY_2_NAME}: {config.CATEGORY_1_CUTOFF + 1}-{config.CATEGORY_2_CUTOFF}, "
      f"ohne Kategorie: {config.CATEGORY_2_CUTOFF + 1}-{config.NUM_PARTICIPANTS}")

print("=== Startliste (Checkpoint vor der Zeitmessung) ===")
status, pdf = c.get_raw(config.BASE, token, f"/participants/export/pdf/startlist/{race_id}")
assert status == 200
with open("startliste.pdf", "wb") as f:
    f.write(pdf)
print(f"Startliste generiert ({len(pdf)} bytes)")

with open("state.json", "w") as f:
    json.dump({"race_id": race_id, "cat1_id": cat1_id, "cat2_id": cat2_id, "persons": persons}, f, indent=2)
print("Setup fertig, state.json gespeichert.")
