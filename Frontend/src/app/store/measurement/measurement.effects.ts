import {inject, Injectable} from '@angular/core';
import {extractErrorMessage} from '../../utils/http-error.util';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {interval, of} from 'rxjs';
import {catchError, map, mergeMap, switchMap, takeUntil} from 'rxjs/operators';
import {MeasurementService} from '../../services/measurement.service';
import * as MeasurementActions from './measurement.actions';

@Injectable()
export class MeasurementEffects {
    private actions$ = inject(Actions);
    private measurementService = inject(MeasurementService);

    loadMeasurements$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.loadMeasurements),
            mergeMap(() =>
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
                    map(() => MeasurementActions.resetMeasurementsSuccess()),
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
                    map(() => MeasurementActions.archiveMeasurementsSuccess({clearAfterArchive})),
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

    exportMeasurements$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.exportMeasurements),
            mergeMap(() =>
                this.measurementService.exportMeasurements().pipe(
                    map(blob => {
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'measurements.json';
                        a.click();
                        URL.revokeObjectURL(url);
                        return MeasurementActions.exportMeasurementsSuccess();
                    }),
                    catchError(error => of(MeasurementActions.exportMeasurementsFailure({
                        error: extractErrorMessage(error, 'Export fehlgeschlagen')
                    })))
                )
            )
        )
    );

    importMeasurementsFromJson$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.importMeasurementsFromJson),
            mergeMap(({measurements}) =>
                this.measurementService.importMeasurementsFromJson(measurements).pipe(
                    map(created => MeasurementActions.importMeasurementsFromJsonSuccess({count: created.length})),
                    catchError(error => of(MeasurementActions.importMeasurementsFromJsonFailure({
                        error: extractErrorMessage(error, 'Import fehlgeschlagen')
                    })))
                )
            )
        )
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
}

