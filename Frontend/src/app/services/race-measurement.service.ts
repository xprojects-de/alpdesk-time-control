import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RaceMeasurement, RaceMeasurementRequest} from '../models/race-measurement.model';
import {environment} from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class RaceMeasurementService {
    private http = inject(HttpClient);
    private readonly apiUrl = `${environment.apiUrl}/race-measurements`;


    getByRace(raceId: number): Observable<RaceMeasurement[]> {
        return this.http.get<RaceMeasurement[]>(`${this.apiUrl}/race/${raceId}`);
    }

    getById(id: number): Observable<RaceMeasurement> {
        return this.http.get<RaceMeasurement>(`${this.apiUrl}/${id}`);
    }

    update(id: number, raceMeasurement: RaceMeasurementRequest): Observable<RaceMeasurement> {
        return this.http.put<RaceMeasurement>(`${this.apiUrl}/${id}`, raceMeasurement);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    syncToParticipants(raceId: number): Observable<string> {
        return this.http.post(`${this.apiUrl}/race/${raceId}/sync-to-participants`, null, {
            responseType: 'text'
        });
    }
}
