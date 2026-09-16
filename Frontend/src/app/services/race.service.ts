import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Race, RaceLiveLink, RaceRequest} from '../models/race.model';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RaceService {
    private http = inject(HttpClient);
    private readonly apiUrl = `${environment.apiUrl}/races`;

    getAll(): Observable<Race[]> {
        return this.http.get<Race[]>(this.apiUrl);
    }

    getById(id: number): Observable<Race> {
        return this.http.get<Race>(`${this.apiUrl}/${id}`);
    }

    getByName(name: string): Observable<Race> {
        return this.http.get<Race>(`${this.apiUrl}/by-name/${name}`);
    }

    create(race: RaceRequest): Observable<Race> {
        return this.http.post<Race>(this.apiUrl, race);
    }

    update(id: number, race: RaceRequest): Observable<Race> {
        return this.http.put<Race>(`${this.apiUrl}/${id}`, race);
    }

    delete(id: number, force = false): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`, {params: {force}});
    }

    /**
     * Every discoverable public live-results view for this race - paths relative to the backend's
     * own origin (RaceController#liveLinks); resolve with toAbsoluteUrl before displaying/sharing.
     */
    getLiveLinks(id: number): Observable<RaceLiveLink[]> {
        return this.http.get<RaceLiveLink[]>(`${this.apiUrl}/${id}/live-links`);
    }

    /**
     * Resolves a backend-relative path (e.g. from RaceLiveLink.path) to an absolute, shareable URL
     * using this frontend's own known origin, rather than having the backend guess its own
     * externally-reachable address - correct even behind a reverse proxy that changes host/scheme,
     * since this is the same origin the browser itself used to load/call this app.
     * environment.apiUrl is already absolute in dev (http://localhost:18000); in prod it's '' since
     * the SPA and API share one origin, so window.location.origin fills in the same host there.
     */
    toAbsoluteUrl(path: string): string {
        const base = environment.apiUrl || window.location.origin;
        return `${base}${path}`;
    }
}
