import {Injectable, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TimingProviderSettings, TimingProviderSettingsRequest} from "../models/timing-provider.model";
import {SeasonSettings, SeasonSettingsRequest} from "../models/season-settings.model";
import {PdfExportSettings} from "../models/pdf-export-settings.model";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: "root",
})
export class SettingsService {
    private http = inject(HttpClient);
    private readonly apiUrl = `${environment.apiUrl}/settings`;

    getTimingProvider(): Observable<TimingProviderSettings> {
        return this.http.get<TimingProviderSettings>(`${this.apiUrl}/timing-provider`);
    }

    updateTimingProvider(request: TimingProviderSettingsRequest): Observable<TimingProviderSettings> {
        return this.http.put<TimingProviderSettings>(`${this.apiUrl}/timing-provider`, request);
    }

    getSeason(): Observable<SeasonSettings> {
        return this.http.get<SeasonSettings>(`${this.apiUrl}/season`);
    }

    updateSeason(request: SeasonSettingsRequest): Observable<SeasonSettings> {
        return this.http.put<SeasonSettings>(`${this.apiUrl}/season`, request);
    }

    getPdfExport(): Observable<PdfExportSettings> {
        return this.http.get<PdfExportSettings>(`${this.apiUrl}/pdf-export`);
    }

    updatePdfExport(request: PdfExportSettings): Observable<PdfExportSettings> {
        return this.http.put<PdfExportSettings>(`${this.apiUrl}/pdf-export`, request);
    }
}
