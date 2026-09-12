import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person, PersonRequest} from '../models/person.model';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PersonService {
    private http = inject(HttpClient);
    private readonly apiUrl = `${environment.apiUrl}/persons`;

    getAll(): Observable<Person[]> {
        return this.http.get<Person[]>(this.apiUrl);
    }

    search(query: string): Observable<Person[]> {
        return this.http.get<Person[]>(`${this.apiUrl}/search`, {params: {q: query}});
    }

    getById(id: number): Observable<Person> {
        return this.http.get<Person>(`${this.apiUrl}/${id}`);
    }

    create(person: PersonRequest): Observable<Person> {
        return this.http.post<Person>(this.apiUrl, person);
    }

    update(id: number, person: PersonRequest): Observable<Person> {
        return this.http.put<Person>(`${this.apiUrl}/${id}`, person);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
