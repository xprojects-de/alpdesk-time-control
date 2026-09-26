import {Injectable, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {
    RaceMeasurement,
    RaceMeasurementDeleteResponse,
    RaceMeasurementImportResponse,
    RaceMeasurementRequest,
    SyncMeasurementsResponse,
} from "../models/race-measurement.model";
import {MeasurementImportPreviewResponse} from "../models/measurement-import.model";
import {environment} from "../../environments/environment";
import {buildImportFormData} from "../utils/import-form-data.util";

@Injectable({
    providedIn: "root",
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

    syncToParticipants(raceId: number): Observable<SyncMeasurementsResponse> {
        return this.http.post<SyncMeasurementsResponse>(`${this.apiUrl}/race/${raceId}/sync-to-participants`, null);
    }

    deleteAllOfRace(raceId: number): Observable<RaceMeasurementDeleteResponse> {
        return this.http.delete<RaceMeasurementDeleteResponse>(`${this.apiUrl}/race/${raceId}`);
    }

    exportCsv(raceId: number): Observable<Blob> {
        return this.http.get(`${this.apiUrl}/race/${raceId}/export/csv`, {responseType: "blob"});
    }

    previewImport(raceId: number, file: File, delimiter?: string): Observable<MeasurementImportPreviewResponse> {
        return this.http.post<MeasurementImportPreviewResponse>(
            `${this.apiUrl}/race/${raceId}/import-preview`,
            buildImportFormData(file, {delimiter}),
        );
    }

    // `mapping` is always sent, even when empty - see MeasurementService#importMapped for why an
    // explicitly empty mapping must not be dropped.
    importMapped(
        raceId: number,
        file: File,
        delimiter: string | undefined,
        mapping: Record<string, string>,
    ): Observable<RaceMeasurementImportResponse> {
        const formData = buildImportFormData(file, {delimiter});
        formData.append("mapping", JSON.stringify(mapping ?? {}));
        return this.http.post<RaceMeasurementImportResponse>(`${this.apiUrl}/race/${raceId}/import-mapped`, formData);
    }
}
