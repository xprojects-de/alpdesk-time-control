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
     * Race.seasonYear rechnet ausschließlich das Backend aus - und genau das ändert sich mit der
     * Saisongrenze, womit jedes Rennen im Store veraltet ist. Rennlisten- und Teilnehmerseite laden
     * zwar beim Betreten ohnehin neu, aber darauf zu bauen heißt, sich auf das Mount-Verhalten
     * jedes künftigen Consumers zu verlassen; die Rennen sind wenige Zeilen, also wird der Store
     * hier direkt wieder stimmig gemacht. Teilnehmer bleiben außen vor: deren Altersklasse hängt
     * genauso an der Saison, aber sie alle zu laden wäre für eine Einstellung unverhältnismäßig -
     * die Teilnehmerseite lädt sie beim Öffnen neu.
     */
    reloadRacesAfterSeasonChange$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SettingsActions.updateSeasonSuccess),
            map(() => RaceActions.loadRaces()),
        ),
    );
}
