import {inject, Injectable} from '@angular/core';
import {extractErrorMessage} from '../../utils/http-error.util';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {interval, of} from 'rxjs';
import {catchError, map, mergeMap, switchMap, takeUntil, tap} from 'rxjs/operators';
import {MeasurementService} from '../../services/measurement.service';
import * as MeasurementActions from './measurement.actions';

@Injectable()
export class MeasurementEffects {
    private actions$ = inject(Actions);
    private measurementService = inject(MeasurementService);

    // switchMap, not mergeMap: this is re-dispatched every 2s by the live auto-refresh poll, and only
    // the most recently requested snapshot should ever be applied. With mergeMap, a slow response to
    // an earlier tick can arrive after a faster later one and overwrite newer data with stale data.
    loadMeasurements$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.loadMeasurements),
            switchMap(() =>
                this.measurementService.getAll().pipe(
                    map(measurements => MeasurementActions.loadMeasurementsSuccess({measurements})),
                    catchError(error => of(MeasurementActions.loadMeasurementsFailure({
                        error: extractErrorMessage(error, 'Failed to load measurements')
                    })))
                )
            )
        )
    );

    loadMeasurementsByParticipant$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.loadMeasurementsByParticipant),
            mergeMap(({participantId}) =>
                this.measurementService.getByParticipant(participantId).pipe(
                    map(measurements => MeasurementActions.loadMeasurementsByParticipantSuccess({measurements})),
                    catchError(error => of(MeasurementActions.loadMeasurementsByParticipantFailure({
                        error: extractErrorMessage(error, 'Failed to load measurements by participant')
                    })))
                )
            )
        )
    );

    loadMeasurement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.loadMeasurement),
            mergeMap(({id}) =>
                this.measurementService.getById(id).pipe(
                    map(measurement => MeasurementActions.loadMeasurementSuccess({measurement})),
                    catchError(error => of(MeasurementActions.loadMeasurementFailure({
                        error: extractErrorMessage(error, 'Failed to load measurement')
                    })))
                )
            )
        )
    );

    createMeasurement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.createMeasurement),
            mergeMap(({measurement}) =>
                this.measurementService.create(measurement).pipe(
                    map(created => MeasurementActions.createMeasurementSuccess({measurement: created})),
                    catchError(error => of(MeasurementActions.createMeasurementFailure({
                        error: extractErrorMessage(error, 'Failed to create measurement')
                    })))
                )
            )
        )
    );

    updateMeasurement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.updateMeasurement),
            mergeMap(({id, measurement}) =>
                this.measurementService.update(id, measurement).pipe(
                    map(updated => MeasurementActions.updateMeasurementSuccess({measurement: updated})),
                    catchError(error => of(MeasurementActions.updateMeasurementFailure({
                        error: extractErrorMessage(error, 'Failed to update measurement')
                    })))
                )
            )
        )
    );

    deleteMeasurement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.deleteMeasurement),
            mergeMap(({id}) =>
                this.measurementService.delete(id).pipe(
                    map(() => MeasurementActions.deleteMeasurementSuccess({id})),
                    catchError(error => of(MeasurementActions.deleteMeasurementFailure({
                        error: extractErrorMessage(error, 'Failed to delete measurement')
                    })))
                )
            )
        )
    );


    resetMeasurements$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.resetMeasurements),
            mergeMap(({resetDevice}) =>
                this.measurementService.reset(resetDevice).pipe(
                    map(message => MeasurementActions.resetMeasurementsSuccess({message})),
                    catchError(error => of(MeasurementActions.resetMeasurementsFailure({
                        error: extractErrorMessage(error, 'Failed to reset measurements')
                    })))
                )
            )
        )
    );

    // Reload measurements after successful reset
    reloadAfterReset$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.resetMeasurementsSuccess),
            map(() => MeasurementActions.loadMeasurements())
        )
    );

    setContinuousMode$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.setContinuousMode),
            mergeMap(({enable}) =>
                this.measurementService.setContinuousMode(enable).pipe(
                    map(() => MeasurementActions.setContinuousModeSuccess({enabled: enable})),
                    catchError(error => of(MeasurementActions.setContinuousModeFailure({
                        error: extractErrorMessage(error, 'Failed to set continuous mode')
                    })))
                )
            )
        )
    );

    setScheduledImport$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.setScheduledImport),
            mergeMap(({enable}) =>
                this.measurementService.setScheduledImport(enable).pipe(
                    map(() => MeasurementActions.setScheduledImportSuccess({enabled: enable})),
                    catchError(error => of(MeasurementActions.setScheduledImportFailure({
                        error: extractErrorMessage(error, 'Failed to set scheduled import')
                    })))
                )
            )
        )
    );

    loadScheduledImportStatus$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.loadScheduledImportStatus),
            mergeMap(() =>
                this.measurementService.getScheduledImportStatus().pipe(
                    map(enabled => MeasurementActions.loadScheduledImportStatusSuccess({enabled})),
                    catchError(error => of(MeasurementActions.loadScheduledImportStatusFailure({
                        error: extractErrorMessage(error, 'Failed to load scheduled import status')
                    })))
                )
            )
        )
    );

    archiveMeasurements$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.archiveMeasurements),
            mergeMap(({raceId, resetDevice, clearAfterArchive}) =>
                this.measurementService.archive(raceId, resetDevice, clearAfterArchive).pipe(
                    map(message => MeasurementActions.archiveMeasurementsSuccess({clearAfterArchive, message})),
                    catchError(error => of(MeasurementActions.archiveMeasurementsFailure({
                        error: extractErrorMessage(error, 'Failed to archive measurements')
                    })))
                )
            )
        )
    );

    // Reload measurements after successful archive
    reloadAfterArchive$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.archiveMeasurementsSuccess),
            map(() => MeasurementActions.loadMeasurements())
        )
    );

    loadDeviceStatus$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.loadDeviceStatus),
            mergeMap(() =>
                this.measurementService.getDeviceStatus().pipe(
                    map(status => MeasurementActions.loadDeviceStatusSuccess({status})),
                    catchError(error => of(MeasurementActions.loadDeviceStatusFailure({
                        error: extractErrorMessage(error, 'Failed to load device status')
                    })))
                )
            )
        )
    );

    discardOldestStart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.discardOldestStart),
            mergeMap(() =>
                this.measurementService.discardOldestStart().pipe(
                    map(message => MeasurementActions.discardOldestStartSuccess({message})),
                    catchError(error => of(MeasurementActions.discardOldestStartFailure({
                        error: extractErrorMessage(error, 'Failed to discard oldest start')
                    })))
                )
            )
        )
    );

    exportMeasurementsCsv$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.exportMeasurementsCsv),
            mergeMap(() =>
                this.measurementService.exportCsv().pipe(
                    map(blob => MeasurementActions.exportMeasurementsCsvSuccess({blob, filename: 'measurements.csv'})),
                    catchError(error => of(MeasurementActions.exportMeasurementsCsvFailure({
                        error: extractErrorMessage(error, 'Export fehlgeschlagen')
                    })))
                )
            )
        )
    );

    importMeasurementsMapped$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.importMeasurementsMapped),
            mergeMap(({file, delimiter, mapping}) =>
                this.measurementService.importMapped(file, delimiter, mapping).pipe(
                    map(result => MeasurementActions.importMeasurementsMappedSuccess({result})),
                    catchError(error => of(MeasurementActions.importMeasurementsMappedFailure({
                        error: extractErrorMessage(error, 'Import fehlgeschlagen')
                    })))
                )
            )
        )
    );

    // Auto-download the exported CSV once the export succeeds
    downloadExportedFile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.exportMeasurementsCsvSuccess),
            tap(({blob, filename}) => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                a.click();
                URL.revokeObjectURL(url);
            })
        ),
        {dispatch: false}
    );

    // Device connection polling
    startDeviceConnectionPolling$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.startDeviceConnectionPolling),
            switchMap(() =>
                interval(10000).pipe(
                    map(() => MeasurementActions.checkDeviceConnection()),
                    takeUntil(this.actions$.pipe(ofType(MeasurementActions.stopDeviceConnectionPolling)))
                )
            )
        )
    );

    checkDeviceConnection$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.checkDeviceConnection),
            mergeMap(() =>
                this.measurementService.checkDeviceConnection().pipe(
                    map(connected => MeasurementActions.checkDeviceConnectionSuccess({connected})),
                    catchError(error => of(MeasurementActions.checkDeviceConnectionFailure({
                        error: extractErrorMessage(error, 'Failed to check device connection')
                    })))
                )
            )
        )
    );

    loadAutoAssignStatus$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.loadAutoAssignStatus),
            switchMap(() =>
                this.measurementService.getAutoAssignStatus().pipe(
                    map(status => MeasurementActions.loadAutoAssignStatusSuccess({status})),
                    catchError(error => of(MeasurementActions.loadAutoAssignStatusFailure({
                        error: extractErrorMessage(error, 'Failed to load auto-assign status')
                    })))
                )
            )
        )
    );

    enableAutoAssign$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.enableAutoAssign),
            mergeMap(({request}) =>
                this.measurementService.enableAutoAssign(request).pipe(
                    map(status => MeasurementActions.enableAutoAssignSuccess({status})),
                    catchError(error => of(MeasurementActions.enableAutoAssignFailure({
                        error: extractErrorMessage(error, 'Failed to enable auto-assign mode')
                    })))
                )
            )
        )
    );

    disableAutoAssign$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.disableAutoAssign),
            mergeMap(() =>
                this.measurementService.disableAutoAssign().pipe(
                    map(status => MeasurementActions.disableAutoAssignSuccess({status})),
                    catchError(error => of(MeasurementActions.disableAutoAssignFailure({
                        error: extractErrorMessage(error, 'Failed to disable auto-assign mode')
                    })))
                )
            )
        )
    );

    skipAutoAssign$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.skipAutoAssign),
            mergeMap(() =>
                this.measurementService.skipAutoAssign().pipe(
                    map(status => MeasurementActions.skipAutoAssignSuccess({status})),
                    catchError(error => of(MeasurementActions.skipAutoAssignFailure({
                        error: extractErrorMessage(error, 'Failed to skip race number')
                    })))
                )
            )
        )
    );

    setNextAutoAssignRaceNumber$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.setNextAutoAssignRaceNumber),
            mergeMap(({raceNumber}) =>
                this.measurementService.setNextAutoAssignRaceNumber(raceNumber).pipe(
                    map(status => MeasurementActions.setNextAutoAssignRaceNumberSuccess({status})),
                    catchError(error => of(MeasurementActions.setNextAutoAssignRaceNumberFailure({
                        error: extractErrorMessage(error, 'Failed to set next race number')
                    })))
                )
            )
        )
    );
}

