import {inject, Injectable} from '@angular/core';
import {extractErrorMessage} from '../../utils/http-error.util';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {AuthService} from '../../services/auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
    private actions$ = inject(Actions);
    private authService = inject(AuthService);
    private router = inject(Router);

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            mergeMap(({credentials}) =>
                this.authService.login(credentials).pipe(
                    map(response => {
                        // Store username in response
                        const enhancedResponse = {...response, username: credentials.username};
                        return AuthActions.loginSuccess({response: enhancedResponse});
                    }),
                    catchError(error => of(AuthActions.loginFailure({
                        error: extractErrorMessage(error, 'Login fehlgeschlagen')
                    })))
                )
            )
        )
    );

    loginSuccess$ = createEffect(() =>
            this.actions$.pipe(
                ofType(AuthActions.loginSuccess),
                tap(() => {
                    this.router.navigate(['/dashboard']).then();
                })
            ),
        {dispatch: false}
    );

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.logout),
            tap(() => {
                this.authService.logout();
            }),
            map(() => AuthActions.logoutSuccess())
        )
    );

    logoutSuccess$ = createEffect(() =>
            this.actions$.pipe(
                ofType(AuthActions.logoutSuccess),
                tap(() => {
                    this.router.navigate(['/login']).then();
                })
            ),
        {dispatch: false}
    );

    checkAuth$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.checkAuth),
            map(() => {
                const token = this.authService.getToken();
                const username = this.authService.getUsername();

                if (token && username) {

                    if (this.authService.isTokenExpired(token)) {
                        this.authService.logout();
                        return AuthActions.checkAuthFailure();
                    }
                    return AuthActions.checkAuthSuccess({token, username});
                } else {
                    return AuthActions.checkAuthFailure();
                }
            })
        )
    );
}

