import {Injectable, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Team, TeamRequest} from "../models/team.model";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: "root",
})
export class TeamService {
    private http = inject(HttpClient);
    private readonly apiUrl = `${environment.apiUrl}/teams`;

    getAll(): Observable<Team[]> {
        return this.http.get<Team[]>(this.apiUrl);
    }

    getById(id: number): Observable<Team> {
        return this.http.get<Team>(`${this.apiUrl}/${id}`);
    }

    create(team: TeamRequest): Observable<Team> {
        return this.http.post<Team>(this.apiUrl, team);
    }

    update(id: number, team: TeamRequest): Observable<Team> {
        return this.http.put<Team>(`${this.apiUrl}/${id}`, team);
    }

    delete(id: number, force = false): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`, {params: {force}});
    }
}
