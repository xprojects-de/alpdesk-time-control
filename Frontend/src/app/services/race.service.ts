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
     * own origin (RaceController#liveLinks); resolve with toAbsoluteUrl (utils/absolute-url.util)
     * before displaying/sharing.
     */
    getLiveLinks(id: number): Observable<RaceLiveLink[]> {
        return this.http.get<RaceLiveLink[]>(`${this.apiUrl}/${id}/live-links`);
    }
}
