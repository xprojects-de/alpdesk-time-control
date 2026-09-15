import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AutoAssignEnableRequest, AutoAssignStatus, Measurement, MeasurementRequest} from '../models/measurement.model';
import {MeasurementImportPreviewResponse, MeasurementImportResponse} from '../models/measurement-import.model';
import {environment} from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class MeasurementService {
    private http = inject(HttpClient);
    private readonly apiUrl = `${environment.apiUrl}/measurements`;


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


    reset(resetDevice: boolean): Observable<string> {
        return this.http.delete(`${this.apiUrl}/reset`, {
            params: { resetDevice: resetDevice.toString() },
            responseType: 'text'
        });
    }

    archive(raceId: number, resetDevice: boolean, clearAfterArchive: boolean): Observable<string> {
        return this.http.post(`${environment.apiUrl}/races/${raceId}/archive-measurements`, null, {
            params: { resetDevice: resetDevice.toString(), clearAfterArchive: clearAfterArchive.toString() },
            responseType: 'text'
        });
    }

    setContinuousMode(enable: boolean): Observable<string> {
        return this.http.put(`${this.apiUrl}/continuous-mode`, null, {
            params: { enable: enable.toString() },
            responseType: 'text'
        });
    }

    setScheduledImport(enable: boolean): Observable<string> {
        return this.http.put(`${this.apiUrl}/scheduled-import`, null, {
            params: { enable: enable.toString() },
            responseType: 'text'
        });
    }

    getScheduledImportStatus(): Observable<boolean> {
        return this.http.get<boolean>(`${this.apiUrl}/scheduled-import/status`);
    }

    getDeviceStatus(): Observable<string> {
        return this.http.get(`${this.apiUrl}/device-status`, {
            responseType: 'text'
        });
    }

    discardOldestStart(): Observable<string> {
        return this.http.post(`${this.apiUrl}/discard`, null, {
            responseType: 'text'
        });
    }

    exportCsv(): Observable<Blob> {
        return this.http.get(`${this.apiUrl}/export/csv`, {responseType: 'blob'});
    }

    previewImport(file: File, delimiter?: string): Observable<MeasurementImportPreviewResponse> {
        const formData = new FormData();
        formData.append('file', file);
        if (delimiter) {
            formData.append('delimiter', delimiter);
        }
        return this.http.post<MeasurementImportPreviewResponse>(`${this.apiUrl}/import-preview`, formData);
    }

    importMapped(file: File, delimiter: string | undefined, mapping: Record<string, string>): Observable<MeasurementImportResponse> {
        const formData = new FormData();
        formData.append('file', file);
        if (delimiter) {
            formData.append('delimiter', delimiter);
        }
        if (mapping && Object.keys(mapping).length > 0) {
            formData.append('mapping', JSON.stringify(mapping));
        }
        return this.http.post<MeasurementImportResponse>(`${this.apiUrl}/import-mapped`, formData);
    }

    getAutoAssignStatus(): Observable<AutoAssignStatus> {
        return this.http.get<AutoAssignStatus>(`${this.apiUrl}/auto-assign/status`);
    }

    enableAutoAssign(request: AutoAssignEnableRequest): Observable<AutoAssignStatus> {
        return this.http.post<AutoAssignStatus>(`${this.apiUrl}/auto-assign/enable`, request);
    }

    disableAutoAssign(): Observable<AutoAssignStatus> {
        return this.http.post<AutoAssignStatus>(`${this.apiUrl}/auto-assign/disable`, null);
    }

    skipAutoAssign(): Observable<AutoAssignStatus> {
        return this.http.post<AutoAssignStatus>(`${this.apiUrl}/auto-assign/skip`, null);
    }

    setNextAutoAssignRaceNumber(raceNumber: number | null): Observable<AutoAssignStatus> {
        return this.http.post<AutoAssignStatus>(`${this.apiUrl}/auto-assign/set-next`, {raceNumber});
    }

    checkDeviceConnection(): Observable<boolean> {
        return new Observable<boolean>(observer => {
            this.http.get(`${this.apiUrl}/device-connection`, {
                observe: 'response'
            }).subscribe({
                next: (response) => {
                    observer.next(response.status === 200);
                    observer.complete();
                },
                error: () => {
                    // 503 = device not connected, treat as false
                    // Any other error also means not connected
                    observer.next(false);
                    observer.complete();
                }
            });
        });
    }
}

