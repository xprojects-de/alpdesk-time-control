import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {throwError} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const token = authService.getToken();

    if (req.url.includes('/login')) {
        return next(req);
    }

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
        return next(clonedRequest);
    }

    return next(req);
};

