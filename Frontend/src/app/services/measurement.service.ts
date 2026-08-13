import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Measurement, MeasurementRequest} from '../models/measurement.model';

@Injectable({
    providedIn: 'root'
})
export class MeasurementService {
    private http = inject(HttpClient);
    private readonly apiUrl = '/api/measurements';


    getAll(): Observable<Measurement[]> {
        return this.http.get<Measurement[]>(this.apiUrl);
    }

    getByParticipant(participantId: number): Observable<Measurement[]> {
        return this.http.get<Measurement[]>(`${this.apiUrl}/participant/${participantId}`);
    }

    getById(id: number): Observable<Measurement> {
        return this.http.get<Measurement>(`${this.apiUrl}/${id}`);
    }

    create(measurement: MeasurementRequest): Observable<Measurement> {
        return this.http.post<Measurement>(this.apiUrl, measurement);
    }

    update(id: number, measurement: MeasurementRequest): Observable<Measurement> {
        return this.http.put<Measurement>(`${this.apiUrl}/${id}`, measurement);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}

