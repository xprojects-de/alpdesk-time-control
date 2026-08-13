import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Participant, ParticipantRequest} from '../models/participant.model';

@Injectable({
    providedIn: 'root'
})
export class ParticipantService {
    private readonly apiUrl = '/api/participants';

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Participant[]> {
        return this.http.get<Participant[]>(this.apiUrl);
    }

    getById(id: number): Observable<Participant> {
        return this.http.get<Participant>(`${this.apiUrl}/${id}`);
    }

    create(participant: ParticipantRequest): Observable<Participant> {
        return this.http.post<Participant>(this.apiUrl, participant);
    }

    update(id: number, participant: ParticipantRequest): Observable<Participant> {
        return this.http.put<Participant>(`${this.apiUrl}/${id}`, participant);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}

