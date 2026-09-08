import {inject, Injectable} from '@angular/core';
import {extractErrorMessage} from '../../utils/http-error.util';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {RaceMeasurementService} from '../../services/race-measurement.service';
import * as RaceMeasurementActions from './race-measurement.actions';

@Injectable()
export class RaceMeasurementEffects {
    private actions$ = inject(Actions);
    private raceMeasurementService = inject(RaceMeasurementService);

    loadRaceMeasurements$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceMeasurementActions.loadRaceMeasurements),
            mergeMap(({raceId}) =>
                this.raceMeasurementService.getByRace(raceId).pipe(
                    map(raceMeasurements => RaceMeasurementActions.loadRaceMeasurementsSuccess({raceMeasurements})),
                    catchError(error => of(RaceMeasurementActions.loadRaceMeasurementsFailure({
                        error: extractErrorMessage(error, 'Failed to load race measurements')
                    })))
                )
            )
        )
    );

    updateRaceMeasurement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceMeasurementActions.updateRaceMeasurement),
            mergeMap(({id, raceMeasurement}) =>
                this.raceMeasurementService.update(id, raceMeasurement).pipe(
                    map(updated => RaceMeasurementActions.updateRaceMeasurementSuccess({raceMeasurement: updated})),
                    catchError(error => of(RaceMeasurementActions.updateRaceMeasurementFailure({
                        error: extractErrorMessage(error, 'Failed to update race measurement')
                    })))
                )
            )
        )
    );

    deleteRaceMeasurement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceMeasurementActions.deleteRaceMeasurement),
            mergeMap(({id}) =>
                this.raceMeasurementService.delete(id).pipe(
                    map(() => RaceMeasurementActions.deleteRaceMeasurementSuccess({id})),
                    catchError(error => of(RaceMeasurementActions.deleteRaceMeasurementFailure({
                        error: extractErrorMessage(error, 'Failed to delete race measurement')
                    })))
                )
            )
        )
    );

    syncRaceMeasurementsToParticipants$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceMeasurementActions.syncRaceMeasurementsToParticipants),
            mergeMap(({raceId}) =>
                this.raceMeasurementService.syncToParticipants(raceId).pipe(
                    map(response => RaceMeasurementActions.syncRaceMeasurementsToParticipantsSuccess({response})),
                    catchError(error => of(RaceMeasurementActions.syncRaceMeasurementsToParticipantsFailure({
                        error: extractErrorMessage(error, 'Failed to sync race measurements to participants')
                    })))
                )
            )
        )
    );
}
