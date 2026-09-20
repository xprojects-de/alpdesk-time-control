import {Injectable, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AgeGroup, AgeGroupRequest} from "../models/age-group.model";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: "root",
})
export class AgeGroupService {
    private http = inject(HttpClient);
    private readonly apiUrl = `${environment.apiUrl}/age-groups`;

    getAll(): Observable<AgeGroup[]> {
        return this.http.get<AgeGroup[]>(this.apiUrl);
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
