import {Injectable, inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {map, catchError, switchMap} from 'rxjs/operators';
import {RaceService} from '../../services/race.service';
import * as RaceActions from './race.actions';

@Injectable()
export class RaceEffects {
    private actions$ = inject(Actions);
    private raceService = inject(RaceService);

    loadRaces$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceActions.loadRaces),
            switchMap(() =>
                this.raceService.getAll().pipe(
                    map(races => RaceActions.loadRacesSuccess({races})),
                    catchError(error => of(RaceActions.loadRacesFailure({error})))
                )
            )
        )
    );

    createRace$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceActions.createRace),
            switchMap(({race}) =>
                this.raceService.create(race).pipe(
                    map(race => RaceActions.createRaceSuccess({race})),
                    catchError(error => of(RaceActions.createRaceFailure({error})))
                )
            )
        )
    );

    updateRace$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceActions.updateRace),
            switchMap(({id, race}) =>
                this.raceService.update(id, race).pipe(
                    map(race => RaceActions.updateRaceSuccess({race})),
                    catchError(error => of(RaceActions.updateRaceFailure({error})))
                )
            )
        )
    );

    deleteRace$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RaceActions.deleteRace),
            switchMap(({id}) =>
                this.raceService.delete(id).pipe(
                    map(() => RaceActions.deleteRaceSuccess({id})),
                    catchError(error => of(RaceActions.deleteRaceFailure({error})))
                )
            )
        )
    );
}

