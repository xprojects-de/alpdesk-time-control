import {Injectable, inject} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {extractErrorMessage} from '../../utils/http-error.util';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {map, catchError, mergeMap} from 'rxjs/operators';
import {RaceService} from '../../services/race.service';
import * as RaceActions from './race.actions';

@Injectable()
export class RaceEffects {
    private actions$ = inject(Actions);
    private raceService = inject(RaceService);

    loadRaces$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceActions.loadRaces),
            mergeMap(() =>
                this.raceService.getAll().pipe(
                    map(races => RaceActions.loadRacesSuccess({races})),
                    catchError(error => of(RaceActions.loadRacesFailure({
                        error: extractErrorMessage(error, 'Rennen konnten nicht geladen werden')
                    })))
                )
            )
        )
    );

    createRace$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceActions.createRace),
            mergeMap(({race}) =>
                this.raceService.create(race).pipe(
                    map(race => RaceActions.createRaceSuccess({race})),
                    catchError(error => of(RaceActions.createRaceFailure({
                        error: extractErrorMessage(error, 'Rennen konnte nicht erstellt werden')
                    })))
                )
            )
        )
    );

    createRaceForResultImport$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceActions.createRaceForResultImport),
            mergeMap(({race}) =>
                this.raceService.create(race).pipe(
                    map(race => RaceActions.createRaceForResultImportSuccess({race})),
                    catchError(error => of(RaceActions.createRaceForResultImportFailure({
                        error: extractErrorMessage(error, 'Rennen konnte nicht erstellt werden')
                    })))
                )
            )
        )
    );

    updateRace$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceActions.updateRace),
            mergeMap(({id, race}) =>
                this.raceService.update(id, race).pipe(
                    map(race => RaceActions.updateRaceSuccess({race})),
                    catchError(error => of(RaceActions.updateRaceFailure({
                        error: extractErrorMessage(error, 'Rennen konnte nicht aktualisiert werden')
                    })))
                )
            )
        )
    );

    deleteRace$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceActions.deleteRace),
            mergeMap(({id, force}) =>
                this.raceService.delete(id, force).pipe(
                    map(() => RaceActions.deleteRaceSuccess({id})),
                    catchError(error => {
                        if (error instanceof HttpErrorResponse && error.status === 409) {
                            return of(RaceActions.deleteRaceConflict({
                                id,
                                message: extractErrorMessage(error, 'Rennen konnte nicht gelöscht werden')
                            }));
                        }
                        return of(RaceActions.deleteRaceFailure({
                            error: extractErrorMessage(error, 'Rennen konnte nicht gelöscht werden')
                        }));
                    })
                )
            )
        )
    );
}

