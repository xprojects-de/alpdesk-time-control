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
                const token = this.extractToken(response);
                if (token) {
                    this.setToken(token);
                    this.setUsername(credentials.username);
                }
            })
        );
    }

    /**
     * The single place that knows which response field carries the token, so a login response
     * missing both can be told apart from one that has it - see auth.effects.ts's login$.
     */
    extractToken(response: LoginResponse): string | null {
        return response.access_token || response.token || null;
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

    private decodeToken(token: string): { exp?: number; [key: string]: unknown } {
        try {
            const payload = token.split('.')[1];
            // JWT payloads are Base64URL (RFC 4648 §5): '-'/'_' instead of '+'/'/', no padding.
            // atob() only understands standard Base64 and throws on '-'/'_', so normalize first.
            const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
            const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4);
            const decodedPayload = decodeURIComponent(
                atob(padded)
                    .split('')
                    .map(c => '%' + c.charCodeAt(0).toString(16).padStart(2, '0'))
                    .join('')
            );
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

