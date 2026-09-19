import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
    GaudiCsvExportVariant,
    GaudiLosPairing,
    GaudiMode,
    GaudiModeRequest,
    GaudiNotRankedEntry,
    GaudiRankingEntry,
} from '../models/gaudi-mode.model';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GaudiModeService {
    private http = inject(HttpClient);
    private readonly apiUrl = `${environment.apiUrl}/gaudi-modes`;

    getAll(raceId?: number): Observable<GaudiMode[]> {
        const url = raceId ? `${this.apiUrl}?raceId=${raceId}` : this.apiUrl;
        return this.http.get<GaudiMode[]>(url);
    }

    getById(id: number): Observable<GaudiMode> {
        return this.http.get<GaudiMode>(`${this.apiUrl}/${id}`);
    }

    create(gaudiMode: GaudiModeRequest): Observable<GaudiMode> {
        return this.http.post<GaudiMode>(this.apiUrl, gaudiMode);
    }

    update(id: number, gaudiMode: GaudiModeRequest): Observable<GaudiMode> {
        return this.http.put<GaudiMode>(`${this.apiUrl}/${id}`, gaudiMode);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    draw(id: number): Observable<GaudiLosPairing[]> {
        return this.http.post<GaudiLosPairing[]>(`${this.apiUrl}/${id}/draw`, {});
    }

    getPairing(id: number): Observable<GaudiLosPairing[]> {
        return this.http.get<GaudiLosPairing[]>(`${this.apiUrl}/${id}/pairing`);
    }

    getRanking(id: number): Observable<GaudiRankingEntry[]> {
        return this.http.get<GaudiRankingEntry[]>(`${this.apiUrl}/${id}/ranking`);
    }

    getNotRanked(id: number): Observable<GaudiNotRankedEntry[]> {
        return this.http.get<GaudiNotRankedEntry[]>(`${this.apiUrl}/${id}/not-ranked`);
    }

    exportPdf(id: number): Observable<Blob> {
        return this.http.get(`${this.apiUrl}/${id}/export/pdf`, {
            responseType: 'blob'
        });
    }

    // Punkte-Mischwertung only
    exportPdfByGender(id: number, gender: string): Observable<Blob> {
        return this.http.get(`${this.apiUrl}/${id}/export/pdf/gender/${gender}`, {
            responseType: 'blob'
        });
    }

    // Punkte-Mischwertung only
    exportPdfAllAgeGroups(id: number): Observable<Blob> {
        return this.http.get(`${this.apiUrl}/${id}/export/pdf/agegroups/all`, {
            responseType: 'blob'
        });
    }

    // Zeit-Kombination / Punkte-Mischwertung - see GaudiCsvExportVariant
    exportCsv(id: number, variant: GaudiCsvExportVariant): Observable<Blob> {
        const path = variant === 'all' ? ''
            : variant === 'agegroups' ? '/agegroups/all'
                : `/gender/${variant}`;
        return this.http.get(`${this.apiUrl}/${id}/export/csv${path}`, {
            responseType: 'blob'
        });
    }
}
