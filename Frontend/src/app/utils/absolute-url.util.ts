import {environment} from "../../environments/environment";

/**
 * Resolves a backend-relative path (e.g. from RaceLiveLink.path) to an absolute, shareable URL
 * using this frontend's own known origin, rather than having the backend guess its own
 * externally-reachable address - correct even behind a reverse proxy that changes host/scheme,
 * since this is the same origin the browser itself used to load/call this app.
 * environment.apiUrl is already absolute in dev (http://localhost:18000); in prod it's '' since
 * the SPA and API share one origin, so window.location.origin fills in the same host there.
 */
export function toAbsoluteUrl(path: string): string {
    const base = environment.apiUrl || window.location.origin;
    return `${base}${path}`;
}
