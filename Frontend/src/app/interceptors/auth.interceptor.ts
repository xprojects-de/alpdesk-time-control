import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {catchError, throwError} from 'rxjs';
import {AuthService} from '../services/auth.service';
import * as AuthActions from '../store/auth/auth.actions';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    const store = inject(Store);
    const token = authService.getToken();

    if (req.url.includes('/login')) {
        return next(req);
    }

    // Dispatching through the store (rather than calling authService.logout() + router.navigate()
    // directly, as this used to) keeps NgRx state and localStorage in sync. Calling them directly
    // left the store thinking isAuthenticated was still true after a forced logout, which made
    // /login's own redirect-if-already-authenticated check bounce the user straight back to a
    // page that would immediately log them out again. logout$/logoutSuccess$ in auth.effects.ts
    // already clear storage and navigate to /login, so nothing else is needed here.
    const forceLogout = () => store.dispatch(AuthActions.logout());

    // Regardless of what local state says, a 401/403 from the backend itself (secret rotated,
    // clock skew making a token look valid locally, server restart) means the session is no
    // longer good - without this, the app would stay "authenticated" while every request quietly
    // fails, with no logout and no redirect to explain why.
    const handleAuthResponse = (request: typeof req) => next(request).pipe(
        catchError(error => {
            if (error instanceof HttpErrorResponse && (error.status === 401 || error.status === 403)) {
                forceLogout();
            }
            return throwError(() => error);
        })
    );

    if (token) {

        if (authService.isTokenExpired(token)) {

            forceLogout();

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

