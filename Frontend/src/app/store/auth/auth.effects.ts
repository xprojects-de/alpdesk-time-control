import {inject, Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {extractErrorMessage} from "../../utils/http-error.util";
import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {of} from "rxjs";
import {catchError, map, mergeMap, tap} from "rxjs/operators";
import {AuthService} from "../../services/auth.service";
import * as AuthActions from "./auth.actions";

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
                        if (!this.authService.extractToken(enhancedResponse)) {
                            // A 2xx response with no token would otherwise still be treated as a
                            // successful login (isAuthenticated: true with a null token), leaving
                            // every subsequent request unauthenticated with no explanation.
                            throw new Error("Login response did not include an authentication token");
                        }
                        return AuthActions.loginSuccess({response: enhancedResponse});
                    }),
                    catchError(error =>
                        of(
                            AuthActions.loginFailure({
                                // The backend answers a rejected login with an English message (backend
                                // texts are English by convention), but this one is shown to the operator
                                // on the login screen, so it gets its own German wording here.
                                error:
                                    error instanceof HttpErrorResponse && error.status === 401
                                        ? "Benutzername oder Passwort falsch"
                                        : extractErrorMessage(error, "Login fehlgeschlagen"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    // No loginSuccess$ navigation effect: LoginComponent already redirects to /dashboard whenever
    // selectIsAuthenticated becomes true (which a successful login causes), and a second navigate
    // call here duplicated that on every login.

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.logout),
            tap(() => {
                this.authService.logout();
            }),
            map(() => AuthActions.logoutSuccess()),
        ),
    );

    logoutSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(AuthActions.logoutSuccess),
                tap(() => {
                    this.router.navigate(["/login"]).then();
                }),
            ),
        {dispatch: false},
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
            }),
        ),
    );
}
