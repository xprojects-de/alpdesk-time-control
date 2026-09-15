import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Participant, ParticipantRequest} from '../models/participant.model';
import {
    ParticipantImportFileFormat,
    ParticipantImportPreviewResponse,
    ParticipantImportResponse
} from '../models/participant-import.model';
import {
    ParticipantResultImportPreviewResponse,
    ParticipantResultImportResponse,
    ResultTimeFormat
} from '../models/participant-result-import.model';
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

    /**
     * Parses the file (without saving anything) and returns the detected source fields, a
     * best-effort suggested mapping onto our fields, and a few sample rows - for building/pre-filling
     * the column-mapping UI.
     */
    previewImport(file: File, format: ParticipantImportFileFormat, delimiter?: string): Observable<ParticipantImportPreviewResponse> {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('format', format);
        if (delimiter) {
            formData.append('delimiter', delimiter);
        }
        return this.http.post<ParticipantImportPreviewResponse>(`${this.apiUrl}/import-preview`, formData);
    }

    /**
     * Imports a CSV (any delimiter) or DSV-Wettkampfdatei XML file using an explicit mapping from our
     * fields onto the file's source fields/columns (see PARTICIPANT_IMPORT_TARGET_FIELDS). A field
     * left out of mapping is simply not imported for any row.
     */
    importMapped(raceId: number, file: File, format: ParticipantImportFileFormat, delimiter: string | undefined, mapping: Record<string, string>): Observable<ParticipantImportResponse> {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('format', format);
        if (delimiter) {
            formData.append('delimiter', delimiter);
        }
        if (mapping && Object.keys(mapping).length > 0) {
            formData.append('mapping', JSON.stringify(mapping));
        }
        return this.http.post<ParticipantImportResponse>(`${this.apiUrl}/import-mapped/${raceId}`, formData);
    }

    /**
     * Parses a result-import file (without saving anything) and returns the detected source fields,
     * a best-effort suggested mapping onto our result fields, and a few sample rows - for
     * building/pre-filling the column-mapping UI.
     */
    previewResultsImport(file: File, delimiter?: string): Observable<ParticipantResultImportPreviewResponse> {
        const formData = new FormData();
        formData.append('file', file);
        if (delimiter) {
            formData.append('delimiter', delimiter);
        }
        return this.http.post<ParticipantResultImportPreviewResponse>(`${this.apiUrl}/import-results-preview`, formData);
    }

    /**
     * Imports results (time/status) for existing participants, matched by race number - never
     * creates a participant, never touches identity data. See
     * PARTICIPANT_RESULT_IMPORT_TARGET_FIELDS for the mappable fields and ResultTimeFormat for how
     * the "time" column is interpreted.
     */
    importResultsMapped(raceId: number, file: File, timeFormat: ResultTimeFormat, delimiter: string | undefined, mapping: Record<string, string>): Observable<ParticipantResultImportResponse> {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('timeFormat', timeFormat);
        if (delimiter) {
            formData.append('delimiter', delimiter);
        }
        if (mapping && Object.keys(mapping).length > 0) {
            formData.append('mapping', JSON.stringify(mapping));
        }
        return this.http.post<ParticipantResultImportResponse>(`${this.apiUrl}/import-results-mapped/${raceId}`, formData);
    }

    /**
     * Full race export (roster + results) as CSV, using our own field names as the header - re-import
     * it via importMapped/import-mapped with no manual mapping needed.
     */
    exportCsv(raceId: number): Observable<Blob> {
        return this.http.get(`${this.apiUrl}/export/csv/${raceId}`, {
            responseType: 'blob'
        });
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

