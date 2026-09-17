import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StartGroupTemplate, StartGroupTemplateRequest} from '../models/start-group.model';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StartGroupTemplateService {
    private http = inject(HttpClient);
    private readonly apiUrl = `${environment.apiUrl}/start-group-templates`;

    getAll(): Observable<StartGroupTemplate[]> {
        return this.http.get<StartGroupTemplate[]>(this.apiUrl);
    }

    getById(id: number): Observable<StartGroupTemplate> {
        return this.http.get<StartGroupTemplate>(`${this.apiUrl}/${id}`);
    }

    create(template: StartGroupTemplateRequest): Observable<StartGroupTemplate> {
        return this.http.post<StartGroupTemplate>(this.apiUrl, template);
    }

    update(id: number, template: StartGroupTemplateRequest): Observable<StartGroupTemplate> {
        return this.http.put<StartGroupTemplate>(`${this.apiUrl}/${id}`, template);
    }

    delete(id: number, force = false): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`, {params: {force}});
    }
}
