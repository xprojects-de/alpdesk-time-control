"""Minimal fake "Alpdesk TimeControl" timing device, mimicking the HTTP protocol expected by
AlpdeskTimeControlDataImportService: plain GET endpoints, /data returns 'id,timeMs' lines.
An admin endpoint lets the test driver control what /data serves next, simulating times
trickling in over the course of a race."""
import sys
import json
import threading
from http.server import BaseHTTPRequestHandler, HTTPServer

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 19100

state = {"lines": [], "reset_count": 0, "discard_count": 0, "continuous": False}
lock = threading.Lock()

class Handler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        pass  # keep stdout quiet

    def _send(self, code, body=b"", content_type="text/plain"):
        self.send_response(code)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path == "/data":
            with lock:
                body = ("\n".join(state["lines"]) + "\n" if state["lines"] else "").encode()
            self._send(200, body)
        elif self.path == "/ping":
            self._send(200, b"pong")
        elif self.path == "/status":
            with lock:
                status = "continuous" if state["continuous"] else "normal"
            self._send(200, status.encode())
        elif self.path == "/reset":
            with lock:
                state["lines"] = []
                state["reset_count"] += 1
            self._send(200, b"reset ok")
        elif self.path == "/discard":
            with lock:
                if state["lines"]:
                    state["lines"].pop(0)
                state["discard_count"] += 1
            self._send(200, b"discard ok")
        elif self.path == "/enableContinuousMode":
            with lock:
                state["continuous"] = True
            self._send(200, b"ok")
        elif self.path == "/disableContinuousMode":
            with lock:
                state["continuous"] = False
            self._send(200, b"ok")
        elif self.path == "/admin/state":
            with lock:
                self._send(200, json.dumps(state).encode(), "application/json")
        else:
            self._send(404, b"not found")

    def do_POST(self):
        if self.path == "/admin/set_lines":
            length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(length)
            payload = json.loads(body)
            with lock:
                state["lines"] = payload["lines"]
            self._send(200, b"ok")
        else:
            self._send(404, b"not found")

if __name__ == "__main__":
    server = HTTPServer(("127.0.0.1", PORT), Handler)
    print(f"fake device listening on {PORT}", flush=True)
    server.serve_forever()
