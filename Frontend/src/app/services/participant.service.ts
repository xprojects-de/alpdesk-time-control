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
import {buildImportFormData} from '../utils/import-form-data.util';

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

    clearResult(id: number): Observable<Participant> {
        return this.http.post<Participant>(`${this.apiUrl}/${id}/clear-result`, {});
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

    /**
     * Derives a race's start order (startSequence, never raceNumber/the bib itself) from its
     * linked previousRaceId race's ranking (see Race.previousRaceId) - e.g. a slalom run 2 start
     * order built from run 1's results, where bib 30 can end up starting before bib 5.
     * includeUnranked controls whether previous-race participants with no result (DSQ/DNF/DNS) are
     * appended at the end of their category, or excluded from this race's start order and marked DNS.
     */
    applyStartOrderFromPreviousRace(raceId: number, includeUnranked: boolean): Observable<Participant[]> {
        return this.http.post<Participant[]>(
            `${this.apiUrl}/race/${raceId}/apply-start-order-from-previous-race`,
            {},
            {params: {includeUnranked}}
        );
    }

    importCsv(raceId: number, file: File): Observable<ParticipantImportResponse> {
        return this.http.post<ParticipantImportResponse>(`${this.apiUrl}/import/${raceId}`, buildImportFormData(file));
    }

    /**
     * Parses the file (without saving anything) and returns the detected source fields, a
     * best-effort suggested mapping onto our fields, and a few sample rows - for building/pre-filling
     * the column-mapping UI.
     */
    previewImport(file: File, format: ParticipantImportFileFormat, delimiter?: string): Observable<ParticipantImportPreviewResponse> {
        const formData = buildImportFormData(file, {format, delimiter});
        return this.http.post<ParticipantImportPreviewResponse>(`${this.apiUrl}/import-preview`, formData);
    }

    /**
     * Imports a CSV (any delimiter) or DSV-Wettkampfdatei XML file using an explicit mapping from our
     * fields onto the file's source fields/columns (see PARTICIPANT_IMPORT_TARGET_FIELDS). A field
     * left out of mapping is simply not imported for any row.
     */
    importMapped(raceId: number, file: File, format: ParticipantImportFileFormat, delimiter: string | undefined, mapping: Record<string, string>): Observable<ParticipantImportResponse> {
        const formData = buildImportFormData(file, {format, delimiter});
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
        const formData = buildImportFormData(file, {delimiter});
        return this.http.post<ParticipantResultImportPreviewResponse>(`${this.apiUrl}/import-results-preview`, formData);
    }

    /**
     * Imports results (time/value/penalty/status/comment) for existing participants, matched by race
     * number - never creates a participant, never touches identity data. See
     * PARTICIPANT_RESULT_IMPORT_TARGET_FIELDS for the mappable fields. `timeFormat` only matters for
     * a TIME race - the backend always reads a POINTS race's mapped columns as a plain decimal
     * number and ignores it. `mapping` is always sent, even when empty - the backend treats an
     * explicitly empty mapping as "map nothing" and only falls back to the auto-suggested mapping
     * when the part is omitted entirely, so a deliberately cleared mapping (every dropdown set to
     * "nicht importieren") must not be silently dropped here.
     */
    importResultsMapped(raceId: number, file: File, timeFormat: ResultTimeFormat, delimiter: string | undefined, mapping: Record<string, string>): Observable<ParticipantResultImportResponse> {
        const formData = buildImportFormData(file, {timeFormat, delimiter});
        formData.append('mapping', JSON.stringify(mapping ?? {}));
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

    /**
     * Results export (raceNumber + lastName/firstName/team/ageGroup/externalId for readability only
     * + time/value/penalty/comment/status), sorted ascending by raceNumber - the counterpart to
     * importResultsMapped. Meant to be opened in Excel, have result columns filled in or corrected,
     * and re-imported to update those same participants (matched purely by raceNumber). "time/value"
     * and "penalty" are written as "m:ss.SSS" (TIME race) or a plain decimal (POINTS race); no
     * "measuredAt" column - the backend stamps that with the import's own timestamp instead.
     */
    exportResultsCsv(raceId: number): Observable<Blob> {
        return this.http.get(`${this.apiUrl}/export/results-csv/${raceId}`, {
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

