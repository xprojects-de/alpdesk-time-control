import {inject, Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {extractErrorMessage} from '../../utils/http-error.util';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {PointsScaleService} from '../../services/points-scale.service';
import * as PointsScaleActions from './points-scale.actions';

@Injectable()
export class PointsScaleEffects {
    private actions$ = inject(Actions);
    private pointsScaleService = inject(PointsScaleService);

    loadPointsScales$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PointsScaleActions.loadPointsScales),
            mergeMap(() =>
                this.pointsScaleService.getAll().pipe(
                    map(pointsScales => PointsScaleActions.loadPointsScalesSuccess({pointsScales})),
                    catchError(error => of(PointsScaleActions.loadPointsScalesFailure({
                        error: extractErrorMessage(error, 'Punkteschemata konnten nicht geladen werden')
                    })))
                )
            )
        )
    );

    createPointsScale$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PointsScaleActions.createPointsScale),
            mergeMap(({pointsScale}) =>
                this.pointsScaleService.create(pointsScale).pipe(
                    map(created => PointsScaleActions.createPointsScaleSuccess({pointsScale: created})),
                    catchError(error => of(PointsScaleActions.createPointsScaleFailure({
                        error: extractErrorMessage(error, 'Punkteschema konnte nicht erstellt werden')
                    })))
                )
            )
        )
    );

    updatePointsScale$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PointsScaleActions.updatePointsScale),
            mergeMap(({id, pointsScale}) =>
                this.pointsScaleService.update(id, pointsScale).pipe(
                    map(updated => PointsScaleActions.updatePointsScaleSuccess({pointsScale: updated})),
                    catchError(error => of(PointsScaleActions.updatePointsScaleFailure({
                        error: extractErrorMessage(error, 'Punkteschema konnte nicht aktualisiert werden')
                    })))
                )
            )
        )
    );

    deletePointsScale$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PointsScaleActions.deletePointsScale),
            mergeMap(({id, force}) =>
                this.pointsScaleService.delete(id, force).pipe(
                    map(() => PointsScaleActions.deletePointsScaleSuccess({id})),
                    catchError(error => {
                        // Backend rejects with 409 when a Gaudi-Modus still references this scale
                        // unless force=true - surface its message (which already asks "delete
                        // anyway?") as a conflict instead of a dead-end error.
                        if (error instanceof HttpErrorResponse && error.status === 409) {
                            return of(PointsScaleActions.deletePointsScaleConflict({
                                id,
                                message: extractErrorMessage(error, 'Punkteschema konnte nicht gelöscht werden')
                            }));
                        }
                        return of(PointsScaleActions.deletePointsScaleFailure({
                            error: extractErrorMessage(error, 'Punkteschema konnte nicht gelöscht werden')
                        }));
                    })
                )
            )
        )
    );
}
