import {inject, Injectable} from "@angular/core";
import {extractErrorMessage} from "../../utils/http-error.util";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {of} from "rxjs";
import {catchError, map, mergeMap} from "rxjs/operators";
import {SettingsService} from "../../services/settings.service";
import * as SettingsActions from "./settings.actions";

@Injectable()
export class SettingsEffects {
    private actions$ = inject(Actions);
    private settingsService = inject(SettingsService);

    loadTimingProvider$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SettingsActions.loadTimingProvider),
            mergeMap(() =>
                this.settingsService.getTimingProvider().pipe(
                    map(settings => SettingsActions.loadTimingProviderSuccess({settings})),
                    catchError(error =>
                        of(
                            SettingsActions.loadTimingProviderFailure({
                                error: extractErrorMessage(
                                    error,
                                    "Zeitmessungs-Einstellungen konnten nicht geladen werden",
                                ),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    updateTimingProvider$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SettingsActions.updateTimingProvider),
            mergeMap(({request}) =>
                this.settingsService.updateTimingProvider(request).pipe(
                    map(settings => SettingsActions.updateTimingProviderSuccess({settings})),
                    catchError(error =>
                        of(
                            SettingsActions.updateTimingProviderFailure({
                                error: extractErrorMessage(
                                    error,
                                    "Zeitmessungs-Einstellungen konnten nicht gespeichert werden",
                                ),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );
}
