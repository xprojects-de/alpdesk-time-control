import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PointsScale, PointsScaleRequest} from '../models/points-scale.model';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PointsScaleService {
    private http = inject(HttpClient);
    private readonly apiUrl = `${environment.apiUrl}/points-scales`;

    getAll(): Observable<PointsScale[]> {
        return this.http.get<PointsScale[]>(this.apiUrl);
    }

    getById(id: number): Observable<PointsScale> {
        return this.http.get<PointsScale>(`${this.apiUrl}/${id}`);
    }

    create(pointsScale: PointsScaleRequest): Observable<PointsScale> {
        return this.http.post<PointsScale>(this.apiUrl, pointsScale);
    }

    update(id: number, pointsScale: PointsScaleRequest): Observable<PointsScale> {
        return this.http.put<PointsScale>(`${this.apiUrl}/${id}`, pointsScale);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
