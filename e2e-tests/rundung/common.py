import json
import mimetypes
import urllib.request
import urllib.error
import uuid

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
