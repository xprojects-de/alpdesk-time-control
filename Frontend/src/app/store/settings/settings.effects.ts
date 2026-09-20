import {inject, Injectable} from "@angular/core";
import {extractErrorMessage} from "../../utils/http-error.util";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {of} from "rxjs";
import {catchError, map, mergeMap} from "rxjs/operators";
import {SettingsService} from "../../services/settings.service";
import * as RaceActions from "../race/race.actions";
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

    loadSeason$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SettingsActions.loadSeason),
            mergeMap(() =>
                this.settingsService.getSeason().pipe(
                    map(season => SettingsActions.loadSeasonSuccess({season})),
                    catchError(error =>
                        of(
                            SettingsActions.loadSeasonFailure({
                                error: extractErrorMessage(error, "Saison-Einstellungen konnten nicht geladen werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    updateSeason$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SettingsActions.updateSeason),
            mergeMap(({request}) =>
                this.settingsService.updateSeason(request).pipe(
                    map(season => SettingsActions.updateSeasonSuccess({season})),
                    catchError(error =>
                        of(
                            SettingsActions.updateSeasonFailure({
                                error: extractErrorMessage(error, "Saison-Grenze konnte nicht gespeichert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    /**
     * Race.seasonYear is computed by the backend alone - and it is exactly what the season boundary
     * changes, so every race in the store is stale afterwards. The race and participant pages do
     * reload on entry anyway, but relying on that means relying on the mount behaviour of every
     * future consumer; races are a handful of rows, so the store is simply made consistent again
     * here. Participants are left out: their age class depends on the season just as much, but
     * loading all of them for one setting would be out of proportion - the participant page reloads
     * them when it is opened.
     */
    reloadRacesAfterSeasonChange$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SettingsActions.updateSeasonSuccess),
            map(() => RaceActions.loadRaces()),
        ),
    );
}
