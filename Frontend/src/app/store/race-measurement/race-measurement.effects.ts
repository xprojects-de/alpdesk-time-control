import {inject, Injectable} from "@angular/core";
import {extractErrorMessage} from "../../utils/http-error.util";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {of} from "rxjs";
import {catchError, filter, map, mergeMap, switchMap, tap, withLatestFrom} from "rxjs/operators";
import {RaceMeasurementService} from "../../services/race-measurement.service";
import * as RaceMeasurementActions from "./race-measurement.actions";
import * as RaceSelectors from "../race/race.selectors";

@Injectable()
export class RaceMeasurementEffects {
    private actions$ = inject(Actions);
    private store = inject(Store);
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

    deleteAllRaceMeasurements$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceMeasurementActions.deleteAllRaceMeasurements),
            mergeMap(({raceId}) =>
                this.raceMeasurementService.deleteAllOfRace(raceId).pipe(
                    map(response => RaceMeasurementActions.deleteAllRaceMeasurementsSuccess({raceId, response})),
                    catchError(error =>
                        of(
                            RaceMeasurementActions.deleteAllRaceMeasurementsFailure({
                                error: extractErrorMessage(
                                    error,
                                    "Archivierte Messungen konnten nicht gelöscht werden",
                                ),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    exportRaceMeasurementsCsv$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceMeasurementActions.exportRaceMeasurementsCsv),
            mergeMap(({raceId}) =>
                this.raceMeasurementService.exportCsv(raceId).pipe(
                    map(blob =>
                        RaceMeasurementActions.exportRaceMeasurementsCsvSuccess({
                            blob,
                            filename: `renn-messungen_${raceId}.csv`,
                        }),
                    ),
                    catchError(error =>
                        of(
                            RaceMeasurementActions.exportRaceMeasurementsCsvFailure({
                                error: extractErrorMessage(error, "Export fehlgeschlagen"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    downloadExportedCsv$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(RaceMeasurementActions.exportRaceMeasurementsCsvSuccess),
                tap(({blob, filename}) => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = filename;
                    a.click();
                    URL.revokeObjectURL(url);
                }),
            ),
        {dispatch: false},
    );

    importRaceMeasurementsCsv$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceMeasurementActions.importRaceMeasurementsCsv),
            mergeMap(({raceId, file, delimiter, mapping}) =>
                this.raceMeasurementService.importMapped(raceId, file, delimiter, mapping).pipe(
                    map(response => RaceMeasurementActions.importRaceMeasurementsCsvSuccess({raceId, response})),
                    catchError(error =>
                        of(
                            RaceMeasurementActions.importRaceMeasurementsCsvFailure({
                                error: extractErrorMessage(error, "Import fehlgeschlagen"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    // Both replace the race's whole table on the server, so the list is reloaded rather than patched -
    // but only while that race is still the selected one: loading it after the operator switched to
    // another race would put its rows under the other race's heading.
    reloadAfterBulkChange$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                RaceMeasurementActions.deleteAllRaceMeasurementsSuccess,
                RaceMeasurementActions.importRaceMeasurementsCsvSuccess,
            ),
            withLatestFrom(this.store.select(RaceSelectors.selectSelectedRaceId)),
            filter(([{raceId}, selectedRaceId]) => raceId === selectedRaceId),
            map(([{raceId}]) => RaceMeasurementActions.loadRaceMeasurements({raceId})),
        ),
    );
}
