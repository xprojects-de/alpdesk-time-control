import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Participant, ParticipantRequest} from '../models/participant.model';
import {ParticipantImportResponse} from '../models/participant-import.model';
import {ParticipantCopyRequest, ParticipantCopyResponse} from '../models/participant-copy.model';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ParticipantService {
    private http = inject(HttpClient);
    private readonly apiUrl = `${environment.apiUrl}/participants`;


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

    deleteByRaceId(raceId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/race/${raceId}`);
    }

    assignRaceNumbers(raceId: number): Observable<Participant[]> {
        return this.http.post<Participant[]>(`${this.apiUrl}/race/${raceId}/assign-race-numbers`, {});
    }

    importCsv(raceId: number, file: File): Observable<ParticipantImportResponse> {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post<ParticipantImportResponse>(`${this.apiUrl}/import/${raceId}`, formData);
    }

    copyParticipants(request: ParticipantCopyRequest): Observable<ParticipantCopyResponse> {
        return this.http.post<ParticipantCopyResponse>(`${this.apiUrl}/copy`, request);
    }

    exportStartListToPdf(raceId: number): Observable<Blob> {
        return this.http.get(`${this.apiUrl}/export/pdf/startlist/${raceId}`, {
            responseType: 'blob'
        });
    }

    // PDF Exports
    exportAllToPdf(raceId: number): Observable<Blob> {
        return this.http.get(`${this.apiUrl}/export/pdf/all/${raceId}`, {
            responseType: 'blob'
        });
    }

    exportByGenderToPdf(gender: string, raceId: number): Observable<Blob> {
        return this.http.get(`${this.apiUrl}/export/pdf/gender/${gender}/${raceId}`, {
            responseType: 'blob'
        });
    }

    exportAllAgeGroupsToPdf(raceId: number): Observable<Blob> {
        return this.http.get(`${this.apiUrl}/export/pdf/agegroups/all/${raceId}`, {
            responseType: 'blob'
        });
    }

    exportAllByCategoryToPdf(raceId: number): Observable<Blob> {
        return this.http.get(`${this.apiUrl}/export/pdf/all/categories/${raceId}`, {
            responseType: 'blob'
        });
    }

    exportByGenderByCategoryToPdf(gender: string, raceId: number): Observable<Blob> {
        return this.http.get(`${this.apiUrl}/export/pdf/gender/${gender}/categories/${raceId}`, {
            responseType: 'blob'
        });
    }

    exportAllAgeGroupsByCategoryToPdf(raceId: number): Observable<Blob> {
        return this.http.get(`${this.apiUrl}/export/pdf/agegroups/all/categories/${raceId}`, {
            responseType: 'blob'
        });
    }
}

