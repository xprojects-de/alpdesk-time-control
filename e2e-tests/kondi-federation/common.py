import json
import mimetypes
import os
import re
import urllib.parse
import urllib.request
import urllib.error
import uuid

def results_path(name):
    """Path for a generated e2e artifact (state files, PDFs, CSV exports) - kept out of the
    suite's own directory (and out of git) under results/, instead of littering it on every run."""
    os.makedirs("results", exist_ok=True)
    return os.path.join("results", name)

_PDF_ROW = re.compile(r"^\s*(\d+)\s+(\S.*)$")
_ID_CANDIDATE = re.compile(r"\b(\d{4,6})\b")
_BIRTH_YEAR = re.compile(r"(19|20)\d{2}")


def pdf_row_place_and_id(line):
    """(place, externalId) of one table row of a Time Control result PDF (pdftotext -layout), or
    None for any other line.

    Reads both layouts the exports have had: without and with the optional "StNr." (right after the
    place) and "Jg." (right after the name) columns, so a reference PDF exported before those
    columns existed still compares against a fresh one. A race number never has 4 digits here, and a
    birth year is told apart from the ID by position: a year-looking number that is followed by a
    further ID candidate is the "Jg." column, not the ID.
    """
    m = _PDF_ROW.match(line)
    if not m:
        return None
    candidates = _ID_CANDIDATE.findall(m.group(2))
    if not candidates:
        return None
    if len(candidates) >= 2 and _BIRTH_YEAR.fullmatch(candidates[0]):
        return int(m.group(1)), candidates[1]
    return int(m.group(1)), candidates[0]


# "Wertung <Altersklasse> <weiblich|männlich>" - any age-group name ("U14-m", "Jg. 2012/13"), not
# just word characters, so no section's rows are silently merged into the one above it.
_AGE_GROUP_SECTION = re.compile(r"\nWertung ([^\n]+?) (weiblich|männlich)\n")

# How a PDF titles the catch-all section of participants who match no age group
# (RankingViewService#ageGroupSectionLabel).
UNKNOWN_AGE_GROUP_SECTION = "ohne Altersklasse"


def age_group_sections(text):
    """(age group label, gender, body) for every age group x gender section of a pdftotext text."""
    parts = _AGE_GROUP_SECTION.split("\n" + text)
    sections = []
    for i in range(1, len(parts) - 2, 3):
        gender = "FEMALE" if parts[i + 1] == "weiblich" else "MALE"
        sections.append((parts[i].strip(), gender, parts[i + 2]))
    return sections


def age_groups_of_race(base, token, race):
    """The age groups a race is scored against: its own season and variant, not every season's."""
    path = f"/age-groups?season={race['seasonYear']}"
    if race.get("ageGroupVariant"):
        path += "&variant=" + urllib.parse.quote(race["ageGroupVariant"])
    status, groups = get(base, token, path)
    assert status == 200, (status, groups)
    return groups


def age_group_of(person, age_groups):
    """Name of the age group a person falls into (birth year and gender, BOTH matching either), or
    None - the same rule as AgeGroupService#calculateAgeGroupName, recomputed independently."""
    if not person.get("birthDate"):
        return None
    year = int(person["birthDate"][:4])
    for group in age_groups:
        if group["gender"] in ("BOTH", person["gender"]) and group["birthYearFrom"] <= year <= group["birthYearTo"]:
            return group["name"]
    return None


def in_age_group_section(person, section_label, section_gender, age_groups):
    """Whether a person belongs to the PDF section titled with this age group label and gender."""
    if person["gender"] != section_gender:
        return False
    group = age_group_of(person, age_groups)
    if section_label == UNKNOWN_AGE_GROUP_SECTION:
        return group is None
    return group is not None and group.lower() == section_label.lower()


def login(base, username="e2e_admin", password="e2eTestPass123"):
    body = json.dumps({"username": username, "password": password}).encode()
    req = urllib.request.Request(base + "/login", data=body, headers={"Content-Type": "application/json"}, method="POST")
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read())["access_token"]

def _request(method, base, token, path, body=None, content_type="application/json", extra_headers=None, raw=False):
    url = base + path
    headers = {}
    if token:
        headers["Authorization"] = f"Bearer {token}"
    if body is not None and content_type:
        headers["Content-Type"] = content_type
    if extra_headers:
        headers.update(extra_headers)
    data = body
    if body is not None and content_type == "application/json" and not isinstance(body, (bytes, bytearray)):
        data = json.dumps(body).encode()
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            raw_bytes = resp.read()
            status = resp.status
    except urllib.error.HTTPError as e:
        raw_bytes = e.read()
        status = e.code
    if raw:
        return status, raw_bytes
    try:
        return status, json.loads(raw_bytes) if raw_bytes else None
    except json.JSONDecodeError:
        return status, raw_bytes.decode(errors="replace")

def get(base, token, path):
    return _request("GET", base, token, path)

def post(base, token, path, body):
    return _request("POST", base, token, path, body)

def put(base, token, path, body):
    return _request("PUT", base, token, path, body)

def delete(base, token, path):
    return _request("DELETE", base, token, path)

def get_raw(base, token, path):
    return _request("GET", base, token, path, raw=True)

def multipart(fields, files):
    """fields: dict[str,str]; files: dict[str, (filename, bytes, content_type)]"""
    boundary = uuid.uuid4().hex
    parts = []
    for name, value in fields.items():
        parts.append(f"--{boundary}\r\nContent-Disposition: form-data; name=\"{name}\"\r\n\r\n{value}\r\n".encode())
    for name, (filename, content, ctype) in files.items():
        parts.append(
            f"--{boundary}\r\nContent-Disposition: form-data; name=\"{name}\"; filename=\"{filename}\"\r\nContent-Type: {ctype}\r\n\r\n".encode()
            + content + b"\r\n"
        )
    parts.append(f"--{boundary}--\r\n".encode())
    body = b"".join(parts)
    content_type = f"multipart/form-data; boundary={boundary}"
    return body, content_type

def post_multipart(base, token, path, fields, files):
    body, ctype = multipart(fields, files)
    return _request("POST", base, token, path, body=body, content_type=ctype)
