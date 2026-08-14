import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {LoginRequest, LoginResponse} from '../models/auth.model';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private http = inject(HttpClient);
    private readonly apiUrl = `${environment.apiUrl}/login`;
    private readonly TOKEN_KEY = 'auth_token';
    private readonly USERNAME_KEY = 'auth_username';


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
        const token = this.getToken();
        if (!token) {
            return false;
        }
        return !this.isTokenExpired(token);
    }

    isTokenExpired(token: string): boolean {
        try {
            const payload = this.decodeToken(token);
            if (!payload.exp) {
                return false;
            }

            const expirationDate = payload.exp * 1000;
            return Date.now() >= expirationDate;

        } catch (error) {
            return true;
        }
    }

    private decodeToken(token: string): any {
        try {
            const payload = token.split('.')[1];
            const decodedPayload = atob(payload);
            return JSON.parse(decodedPayload);
        } catch (error) {
            throw new Error('Invalid token format');
        }
    }

    private setToken(token: string): void {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    private setUsername(username: string): void {
        localStorage.setItem(this.USERNAME_KEY, username);
    }
}

