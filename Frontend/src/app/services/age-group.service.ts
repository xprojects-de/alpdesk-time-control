import {Injectable, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {
    AgeGroup,
    AgeGroupRequest,
    AgeGroupSeasons,
    AgeGroupVariants,
    CopySeasonRequest,
} from "../models/age-group.model";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: "root",
})
export class AgeGroupService {
    private http = inject(HttpClient);
    private readonly apiUrl = `${environment.apiUrl}/age-groups`;

    /**
     * Without a season, every season's age groups - only the configuration UI wants that. With one,
     * the groups of that season's variant (the standard one if omitted). Anything showing a
     * participant's class reads it off the participant, already resolved against that participant's
     * own race season and variant by the backend.
     */
    getAll(season?: number, variant?: string): Observable<AgeGroup[]> {
        const params = season != null ? {params: {season, variant: variant ?? ""}} : {};
        return this.http.get<AgeGroup[]>(this.apiUrl, params);
    }

    getVariants(season: number): Observable<AgeGroupVariants> {
        return this.http.get<AgeGroupVariants>(`${this.apiUrl}/variants`, {params: {season}});
    }

    /**
     * The variants of the season a race date falls into - the season boundary is the backend's to
     * apply, so the race dialog asks by date rather than computing the season itself.
     */
    getVariantsForDate(date: string): Observable<AgeGroupVariants> {
        return this.http.get<AgeGroupVariants>(`${this.apiUrl}/variants`, {params: {date}});
    }

    deleteVariant(season: number, variant: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/variants`, {params: {season, variant}});
    }

    getSeasons(): Observable<AgeGroupSeasons> {
        return this.http.get<AgeGroupSeasons>(`${this.apiUrl}/seasons`);
    }

    /**
     * Copies one variant's age groups to another season and/or variant, shifting every birth-year
     * range by the difference between the two seasons - rolls a season over, or starts a new
     * variant from an existing one.
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
