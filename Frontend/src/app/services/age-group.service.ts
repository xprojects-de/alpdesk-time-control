import {Injectable, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AgeGroup, AgeGroupRequest, AgeGroupSeasons, CopySeasonRequest} from "../models/age-group.model";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: "root",
})
export class AgeGroupService {
    private http = inject(HttpClient);
    private readonly apiUrl = `${environment.apiUrl}/age-groups`;

    /**
     * Without a season, every season's age groups - only the configuration UI wants that. Anything
     * showing a participant's class reads it off the participant, already resolved against that
     * participant's own race season by the backend.
     */
    getAll(season?: number): Observable<AgeGroup[]> {
        const params = season != null ? {params: {season}} : {};
        return this.http.get<AgeGroup[]>(this.apiUrl, params);
    }

    getSeasons(): Observable<AgeGroupSeasons> {
        return this.http.get<AgeGroupSeasons>(`${this.apiUrl}/seasons`);
    }

    /**
     * Rolls a season's configuration over to another one, shifting every birth-year range by the
     * difference between the two.
     */
    copySeason(request: CopySeasonRequest): Observable<AgeGroup[]> {
        return this.http.post<AgeGroup[]>(`${this.apiUrl}/copy-season`, request);
    }

    getById(id: number): Observable<AgeGroup> {
        return this.http.get<AgeGroup>(`${this.apiUrl}/${id}`);
    }

    create(ageGroup: AgeGroupRequest): Observable<AgeGroup> {
        return this.http.post<AgeGroup>(this.apiUrl, ageGroup);
    }

    update(id: number, ageGroup: AgeGroupRequest): Observable<AgeGroup> {
        return this.http.put<AgeGroup>(`${this.apiUrl}/${id}`, ageGroup);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
