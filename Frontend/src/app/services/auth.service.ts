import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {LoginRequest, LoginResponse} from '../models/auth.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly apiUrl = '/login';
    private readonly TOKEN_KEY = 'auth_token';
    private readonly USERNAME_KEY = 'auth_username';

    constructor(private http: HttpClient) {
    }

    login(credentials: LoginRequest): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(this.apiUrl, credentials).pipe(
            tap(response => {
                const token = response.access_token || response.token;
                if (token) {
                    this.setToken(token);
                    this.setUsername(credentials.username);
                }
            })
        );
    }

    logout(): void {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.USERNAME_KEY);
    }

    getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    getUsername(): string | null {
        return localStorage.getItem(this.USERNAME_KEY);
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }

    private setToken(token: string): void {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    private setUsername(username: string): void {
        localStorage.setItem(this.USERNAME_KEY, username);
    }
}

