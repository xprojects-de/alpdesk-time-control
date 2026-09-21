import {inject, Injectable} from "@angular/core";
import {extractErrorMessage} from "../../utils/http-error.util";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {of} from "rxjs";
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";
import {RaceMeasurementService} from "../../services/race-measurement.service";
import * as RaceMeasurementActions from "./race-measurement.actions";

@Injectable()
export class RaceMeasurementEffects {
    private actions$ = inject(Actions);
    private raceMeasurementService = inject(RaceMeasurementService);

    // switchMap, not mergeMap: dispatched again on every race-selection change. With mergeMap, quickly
    // switching from race A to race B can let A's (now stale) response arrive after B's and overwrite
    // the correct table contents with the wrong race's measurements.
    loadRaceMeasurements$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceMeasurementActions.loadRaceMeasurements),
            switchMap(({raceId}) =>
                this.raceMeasurementService.getByRace(raceId).pipe(
                    map(raceMeasurements => RaceMeasurementActions.loadRaceMeasurementsSuccess({raceMeasurements})),
                    catchError(error =>
                        of(
                            RaceMeasurementActions.loadRaceMeasurementsFailure({
                                error: extractErrorMessage(error, "Renn-Messungen konnten nicht geladen werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    updateRaceMeasurement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceMeasurementActions.updateRaceMeasurement),
            mergeMap(({id, raceMeasurement}) =>
                this.raceMeasurementService.update(id, raceMeasurement).pipe(
                    map(updated => RaceMeasurementActions.updateRaceMeasurementSuccess({raceMeasurement: updated})),
                    catchError(error =>
                        of(
                            RaceMeasurementActions.updateRaceMeasurementFailure({
                                error: extractErrorMessage(error, "Renn-Messung konnte nicht aktualisiert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    deleteRaceMeasurement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceMeasurementActions.deleteRaceMeasurement),
            mergeMap(({id}) =>
                this.raceMeasurementService.delete(id).pipe(
                    map(() => RaceMeasurementActions.deleteRaceMeasurementSuccess({id})),
                    catchError(error =>
                        of(
                            RaceMeasurementActions.deleteRaceMeasurementFailure({
                                error: extractErrorMessage(error, "Renn-Messung konnte nicht gelöscht werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    syncRaceMeasurementsToParticipants$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceMeasurementActions.syncRaceMeasurementsToParticipants),
            mergeMap(({raceId}) =>
                this.raceMeasurementService.syncToParticipants(raceId).pipe(
                    map(response => RaceMeasurementActions.syncRaceMeasurementsToParticipantsSuccess({response})),
                    catchError(error =>
                        of(
                            RaceMeasurementActions.syncRaceMeasurementsToParticipantsFailure({
                                error: extractErrorMessage(
                                    error,
                                    "Renn-Messungen konnten nicht mit Teilnehmern synchronisiert werden",
                                ),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );
}
