import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TimingProviderSettings, TimingProviderSettingsRequest} from '../models/timing-provider.model';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
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
}
