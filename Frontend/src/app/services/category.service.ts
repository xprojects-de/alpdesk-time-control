import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category, CategoryRequest} from '../models/category.model';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private http = inject(HttpClient);
    private readonly apiUrl = `${environment.apiUrl}/categories`;

    getAll(): Observable<Category[]> {
        return this.http.get<Category[]>(this.apiUrl);
    }

    getById(id: number): Observable<Category> {
        return this.http.get<Category>(`${this.apiUrl}/${id}`);
    }

    create(category: CategoryRequest): Observable<Category> {
        return this.http.post<Category>(this.apiUrl, category);
    }

    update(id: number, category: CategoryRequest): Observable<Category> {
        return this.http.put<Category>(`${this.apiUrl}/${id}`, category);
    }

    delete(id: number, force = false): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`, {params: {force}});
    }
}
