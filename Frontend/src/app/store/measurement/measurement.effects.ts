import {HttpErrorResponse} from "@angular/common/http";
import {inject, Injectable} from "@angular/core";
import {extractErrorMessage} from "../../utils/http-error.util";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {interval, of} from "rxjs";
import {catchError, map, mergeMap, switchMap, takeUntil, tap, withLatestFrom} from "rxjs/operators";
import {MeasurementService} from "../../services/measurement.service";
import * as MeasurementActions from "./measurement.actions";
import * as MeasurementSelectors from "./measurement.selectors";

@Injectable()
export class MeasurementEffects {
    private actions$ = inject(Actions);
    private measurementService = inject(MeasurementService);
    private store = inject(Store);

    // switchMap, not mergeMap: this is re-dispatched every 2s by the live auto-refresh poll, and only
    // the most recently requested snapshot should ever be applied. With mergeMap, a slow response to
    // an earlier tick can arrive after a faster later one and overwrite newer data with stale data.
    loadMeasurements$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.loadMeasurements),
            // Reads the write counter BEFORE the request goes out, so the reducer can tell whether
            // a create/update/delete completed while this snapshot was travelling.
            withLatestFrom(this.store.select(MeasurementSelectors.selectWriteSeq)),
            switchMap(([, writeSeq]) =>
                this.measurementService.getAll().pipe(
                    map(measurements => MeasurementActions.loadMeasurementsSuccess({measurements, writeSeq})),
                    catchError(error =>
                        of(
                            MeasurementActions.loadMeasurementsFailure({
                                error: extractErrorMessage(error, "Messungen konnten nicht geladen werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    loadMeasurementsByParticipant$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.loadMeasurementsByParticipant),
            mergeMap(({participantId}) =>
                this.measurementService.getByParticipant(participantId).pipe(
                    map(measurements => MeasurementActions.loadMeasurementsByParticipantSuccess({measurements})),
                    catchError(error =>
                        of(
                            MeasurementActions.loadMeasurementsByParticipantFailure({
                                error: extractErrorMessage(
                                    error,
                                    "Messungen für Teilnehmer konnten nicht geladen werden",
                                ),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    loadMeasurement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.loadMeasurement),
            mergeMap(({id}) =>
                this.measurementService.getById(id).pipe(
                    map(measurement => MeasurementActions.loadMeasurementSuccess({measurement})),
                    catchError(error =>
                        of(
                            MeasurementActions.loadMeasurementFailure({
                                error: extractErrorMessage(error, "Messung konnte nicht geladen werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    createMeasurement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.createMeasurement),
            mergeMap(({measurement}) =>
                this.measurementService.create(measurement).pipe(
                    map(created => MeasurementActions.createMeasurementSuccess({measurement: created})),
                    catchError(error =>
                        of(
                            MeasurementActions.createMeasurementFailure({
                                error: extractErrorMessage(error, "Messung konnte nicht erstellt werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    updateMeasurement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.updateMeasurement),
            mergeMap(({id, measurement}) =>
                this.measurementService.update(id, measurement).pipe(
                    map(updated => MeasurementActions.updateMeasurementSuccess({measurement: updated})),
                    catchError(error =>
                        of(
                            MeasurementActions.updateMeasurementFailure({
                                error: extractErrorMessage(error, "Messung konnte nicht aktualisiert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    deleteMeasurement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.deleteMeasurement),
            mergeMap(({id}) =>
                this.measurementService.delete(id).pipe(
                    map(() => MeasurementActions.deleteMeasurementSuccess({id})),
                    catchError(error =>
                        of(
                            MeasurementActions.deleteMeasurementFailure({
                                error: extractErrorMessage(error, "Messung konnte nicht gelöscht werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    resetMeasurements$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.resetMeasurements),
            mergeMap(({resetDevice}) =>
                this.measurementService.reset(resetDevice).pipe(
                    map(message => MeasurementActions.resetMeasurementsSuccess({message})),
                    catchError(error =>
                        of(
                            MeasurementActions.resetMeasurementsFailure({
                                error: extractErrorMessage(error, "Messungen konnten nicht zurückgesetzt werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    // Reload measurements after successful reset
    // Re-syncs with the backend after every write, so the list is authoritative again even if a
    // poll response was dropped while the write was in flight (see the reducer's
    // loadMeasurementsSuccess handler).
    reloadAfterWrite$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                MeasurementActions.createMeasurementSuccess,
                MeasurementActions.updateMeasurementSuccess,
                MeasurementActions.deleteMeasurementSuccess,
            ),
            map(() => MeasurementActions.loadMeasurements()),
        ),
    );

    reloadAfterReset$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.resetMeasurementsSuccess),
            map(() => MeasurementActions.loadMeasurements()),
        ),
    );

    setContinuousMode$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.setContinuousMode),
            mergeMap(({enable}) =>
                this.measurementService.setContinuousMode(enable).pipe(
                    map(() => MeasurementActions.setContinuousModeSuccess({enabled: enable})),
                    catchError(error =>
                        of(
                            MeasurementActions.setContinuousModeFailure({
                                error: extractErrorMessage(error, "Kontinuierlicher Modus konnte nicht gesetzt werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    setScheduledImport$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.setScheduledImport),
            mergeMap(({enable}) =>
                this.measurementService.setScheduledImport(enable).pipe(
                    map(() => MeasurementActions.setScheduledImportSuccess({enabled: enable})),
                    catchError(error =>
                        of(
                            MeasurementActions.setScheduledImportFailure({
                                error: extractErrorMessage(error, "Geplanter Import konnte nicht gesetzt werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    loadScheduledImportStatus$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.loadScheduledImportStatus),
            mergeMap(() =>
                this.measurementService.getScheduledImportStatus().pipe(
                    map(enabled => MeasurementActions.loadScheduledImportStatusSuccess({enabled})),
                    catchError(error =>
                        of(
                            MeasurementActions.loadScheduledImportStatusFailure({
                                error: extractErrorMessage(
                                    error,
                                    "Status des geplanten Imports konnte nicht geladen werden",
                                ),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    archiveMeasurements$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.archiveMeasurements),
            mergeMap(({raceId, resetDevice, clearAfterArchive}) =>
                this.measurementService.archive(raceId, resetDevice, clearAfterArchive).pipe(
                    map(message => MeasurementActions.archiveMeasurementsSuccess({clearAfterArchive, message})),
                    catchError(error =>
                        of(
                            MeasurementActions.archiveMeasurementsFailure({
                                error: extractErrorMessage(error, "Messungen konnten nicht archiviert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    // Reload measurements after successful archive
    reloadAfterArchive$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.archiveMeasurementsSuccess),
            map(() => MeasurementActions.loadMeasurements()),
        ),
    );

    loadDeviceStatus$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.loadDeviceStatus),
            mergeMap(() =>
                this.measurementService.getDeviceStatus().pipe(
                    map(status => MeasurementActions.loadDeviceStatusSuccess({status})),
                    catchError(error =>
                        of(
                            MeasurementActions.loadDeviceStatusFailure({
                                error: extractErrorMessage(error, "Gerätestatus konnte nicht geladen werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    discardOldestStart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.discardOldestStart),
            mergeMap(() =>
                this.measurementService.discardOldestStart().pipe(
                    map(message => MeasurementActions.discardOldestStartSuccess({message})),
                    catchError(error =>
                        of(
                            MeasurementActions.discardOldestStartFailure({
                                error: extractErrorMessage(error, "Ältester Start konnte nicht verworfen werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    exportMeasurementsCsv$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.exportMeasurementsCsv),
            mergeMap(() =>
                this.measurementService.exportCsv().pipe(
                    map(blob => MeasurementActions.exportMeasurementsCsvSuccess({blob, filename: "measurements.csv"})),
                    catchError(error =>
                        of(
                            MeasurementActions.exportMeasurementsCsvFailure({
                                error: extractErrorMessage(error, "Export fehlgeschlagen"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    importMeasurementsMapped$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.importMeasurementsMapped),
            mergeMap(({file, delimiter, mapping}) =>
                this.measurementService.importMapped(file, delimiter, mapping).pipe(
                    map(result => MeasurementActions.importMeasurementsMappedSuccess({result})),
                    catchError(error =>
                        of(
                            MeasurementActions.importMeasurementsMappedFailure({
                                error: extractErrorMessage(error, "Import fehlgeschlagen"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    // Auto-download the exported CSV once the export succeeds
    downloadExportedFile$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(MeasurementActions.exportMeasurementsCsvSuccess),
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

    // Device connection polling
    startDeviceConnectionPolling$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.startDeviceConnectionPolling),
            switchMap(() =>
                interval(10000).pipe(
                    map(() => MeasurementActions.checkDeviceConnection()),
                    takeUntil(this.actions$.pipe(ofType(MeasurementActions.stopDeviceConnectionPolling))),
                ),
            ),
        ),
    );

    checkDeviceConnection$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.checkDeviceConnection),
            mergeMap(() =>
                this.measurementService.checkDeviceConnection().pipe(
                    map(connected => MeasurementActions.checkDeviceConnectionSuccess({connected})),
                    catchError(error =>
                        of(
                            MeasurementActions.checkDeviceConnectionFailure({
                                error: extractErrorMessage(error, "Geräteverbindung konnte nicht geprüft werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    loadAutoAssignStatus$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.loadAutoAssignStatus),
            switchMap(() =>
                this.measurementService.getAutoAssignStatus().pipe(
                    map(status => MeasurementActions.loadAutoAssignStatusSuccess({status})),
                    catchError(error =>
                        of(
                            MeasurementActions.loadAutoAssignStatusFailure({
                                error: extractErrorMessage(
                                    error,
                                    "Status der automatischen Zuordnung konnte nicht geladen werden",
                                ),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    enableAutoAssign$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.enableAutoAssign),
            mergeMap(({request}) =>
                this.measurementService.enableAutoAssign(request).pipe(
                    map(status => MeasurementActions.enableAutoAssignSuccess({status})),
                    catchError(error =>
                        of(
                            MeasurementActions.enableAutoAssignFailure({
                                error: extractErrorMessage(
                                    error,
                                    "Automatische Zuordnung konnte nicht aktiviert werden",
                                ),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    disableAutoAssign$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.disableAutoAssign),
            mergeMap(() =>
                this.measurementService.disableAutoAssign().pipe(
                    map(status => MeasurementActions.disableAutoAssignSuccess({status})),
                    catchError(error =>
                        of(
                            MeasurementActions.disableAutoAssignFailure({
                                error: extractErrorMessage(
                                    error,
                                    "Automatische Zuordnung konnte nicht deaktiviert werden",
                                ),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    skipAutoAssign$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.skipAutoAssign),
            mergeMap(() =>
                this.measurementService.skipAutoAssign().pipe(
                    map(status => MeasurementActions.skipAutoAssignSuccess({status})),
                    catchError(error =>
                        of(
                            MeasurementActions.skipAutoAssignFailure({
                                error: extractErrorMessage(error, "Startnummer konnte nicht übersprungen werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    setNextAutoAssignRaceNumber$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.setNextAutoAssignRaceNumber),
            mergeMap(({raceNumber, force}) =>
                this.measurementService.setNextAutoAssignRaceNumber(raceNumber, force ?? false).pipe(
                    map(status => MeasurementActions.setNextAutoAssignRaceNumberSuccess({status})),
                    catchError(error => {
                        // 409 is only ever "this race number already has a time" (see
                        // MeasurementController#setNextAutoAssignRaceNumber) - everything else it
                        // rejects is a 400.
                        if (error instanceof HttpErrorResponse && error.status === 409) {
                            return of(MeasurementActions.setNextAutoAssignRaceNumberConflict({raceNumber}));
                        }
                        return of(
                            MeasurementActions.setNextAutoAssignRaceNumberFailure({
                                error: extractErrorMessage(error, "Nächste Startnummer konnte nicht gesetzt werden"),
                            }),
                        );
                    }),
                ),
            ),
        ),
    );
}
