import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {AgeGroupService} from '../../services/age-group.service';
import * as AgeGroupActions from './age-group.actions';

@Injectable()
export class AgeGroupEffects {
    private actions$ = inject(Actions);
    private ageGroupService = inject(AgeGroupService);

    loadAgeGroups$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AgeGroupActions.loadAgeGroups),
            mergeMap(() =>
                this.ageGroupService.getAll().pipe(
                    map(ageGroups => AgeGroupActions.loadAgeGroupsSuccess({ageGroups})),
                    catchError(error => of(AgeGroupActions.loadAgeGroupsFailure({
                        error: error.message || 'Failed to load age groups'
                    })))
                )
            )
        )
    );

    loadAgeGroup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AgeGroupActions.loadAgeGroup),
            mergeMap(({id}) =>
                this.ageGroupService.getById(id).pipe(
                    map(ageGroup => AgeGroupActions.loadAgeGroupSuccess({ageGroup})),
                    catchError(error => of(AgeGroupActions.loadAgeGroupFailure({
                        error: error.message || 'Failed to load age group'
                    })))
                )
            )
        )
    );

    createAgeGroup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AgeGroupActions.createAgeGroup),
            mergeMap(({ageGroup}) =>
                this.ageGroupService.create(ageGroup).pipe(
                    map(created => AgeGroupActions.createAgeGroupSuccess({ageGroup: created})),
                    catchError(error => of(AgeGroupActions.createAgeGroupFailure({
                        error: error.message || 'Failed to create age group'
                    })))
                )
            )
        )
    );

    updateAgeGroup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AgeGroupActions.updateAgeGroup),
            mergeMap(({id, ageGroup}) =>
                this.ageGroupService.update(id, ageGroup).pipe(
                    map(updated => AgeGroupActions.updateAgeGroupSuccess({ageGroup: updated})),
                    catchError(error => of(AgeGroupActions.updateAgeGroupFailure({
                        error: error.message || 'Failed to update age group'
                    })))
                )
            )
        )
    );

    deleteAgeGroup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AgeGroupActions.deleteAgeGroup),
            mergeMap(({id}) =>
                this.ageGroupService.delete(id).pipe(
                    map(() => AgeGroupActions.deleteAgeGroupSuccess({id})),
                    catchError(error => of(AgeGroupActions.deleteAgeGroupFailure({
                        error: error.message || 'Failed to delete age group'
                    })))
                )
            )
        )
    );
}

