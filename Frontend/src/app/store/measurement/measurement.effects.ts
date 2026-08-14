import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
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
                        error: error.message || 'Failed to load measurements'
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
                        error: error.message || 'Failed to load measurements by participant'
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
                        error: error.message || 'Failed to load measurement'
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
                        error: error.message || 'Failed to create measurement'
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
                        error: error.message || 'Failed to update measurement'
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
                        error: error.message || 'Failed to delete measurement'
                    })))
                )
            )
        )
    );

    // PDF Export Effects
    exportAllPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.exportAllPdf),
            mergeMap(() =>
                this.measurementService.exportAllToPdf().pipe(
                    map(blob => MeasurementActions.exportAllPdfSuccess({
                        blob,
                        filename: 'gesamtwertung.pdf'
                    })),
                    catchError(error => of(MeasurementActions.exportAllPdfFailure({
                        error: error.message || 'Failed to export PDF'
                    })))
                )
            )
        )
    );

    exportByGenderPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.exportByGenderPdf),
            mergeMap(({gender}) =>
                this.measurementService.exportByGenderToPdf(gender).pipe(
                    map(blob => MeasurementActions.exportByGenderPdfSuccess({
                        blob,
                        filename: `wertung_${gender.toLowerCase()}.pdf`
                    })),
                    catchError(error => of(MeasurementActions.exportByGenderPdfFailure({
                        error: error.message || 'Failed to export PDF'
                    })))
                )
            )
        )
    );

    exportByAgeGroupAndGenderPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MeasurementActions.exportByAgeGroupAndGenderPdf),
            mergeMap(({ageGroupName, gender}) =>
                this.measurementService.exportByAgeGroupAndGenderToPdf(ageGroupName, gender).pipe(
                    map(blob => MeasurementActions.exportByAgeGroupAndGenderPdfSuccess({
                        blob,
                        filename: `wertung_${ageGroupName.toLowerCase()}_${gender.toLowerCase()}.pdf`
                    })),
                    catchError(error => of(MeasurementActions.exportByAgeGroupAndGenderPdfFailure({
                        error: error.message || 'Failed to export PDF'
                    })))
                )
            )
        )
    );

    // Auto-download PDF when export is successful
    downloadPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                MeasurementActions.exportAllPdfSuccess,
                MeasurementActions.exportByGenderPdfSuccess,
                MeasurementActions.exportByAgeGroupAndGenderPdfSuccess
            ),
            tap(({blob, filename}) => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = filename;
                link.click();
                window.URL.revokeObjectURL(url);
            })
        ),
        {dispatch: false}
    );
}

