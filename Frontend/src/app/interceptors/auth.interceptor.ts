import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {catchError, throwError} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const token = authService.getToken();

    if (req.url.includes('/login')) {
        return next(req);
    }

    // Regardless of what local state says, a 401/403 from the backend itself (secret rotated,
    // clock skew making a token look valid locally, server restart) means the session is no
    // longer good - without this, the app would stay "authenticated" while every request quietly
    // fails, with no logout and no redirect to explain why.
    const handleAuthResponse = (request: typeof req) => next(request).pipe(
        catchError(error => {
            if (error instanceof HttpErrorResponse && (error.status === 401 || error.status === 403)) {
                authService.logout();
                router.navigate(['/login']).then();
            }
            return throwError(() => error);
        })
    );

    if (token) {

        if (authService.isTokenExpired(token)) {

            authService.logout();
            router.navigate(['/login']).then();

            // Don't forward the original request unauthenticated - it would only reach the
            // backend and fail anyway, racing the redirect above with a stray error.
            return throwError(() => new HttpErrorResponse({
                status: 401,
                statusText: 'Token expired',
                url: req.url
            }));

        }

        const clonedRequest = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return handleAuthResponse(clonedRequest);
    }

    return handleAuthResponse(req);
};

