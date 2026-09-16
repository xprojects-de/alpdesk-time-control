import {inject, Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {extractErrorMessage} from '../../utils/http-error.util';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {CategoryService} from '../../services/category.service';
import * as CategoryActions from './category.actions';

@Injectable()
export class CategoryEffects {
    private actions$ = inject(Actions);
    private categoryService = inject(CategoryService);

    loadCategories$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CategoryActions.loadCategories),
            mergeMap(() =>
                this.categoryService.getAll().pipe(
                    map(categories => CategoryActions.loadCategoriesSuccess({categories})),
                    catchError(error => of(CategoryActions.loadCategoriesFailure({
                        error: extractErrorMessage(error, 'Kategorien konnten nicht geladen werden')
                    })))
                )
            )
        )
    );

    createCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CategoryActions.createCategory),
            mergeMap(({category}) =>
                this.categoryService.create(category).pipe(
                    map(created => CategoryActions.createCategorySuccess({category: created})),
                    catchError(error => of(CategoryActions.createCategoryFailure({
                        error: extractErrorMessage(error, 'Kategorie konnte nicht erstellt werden')
                    })))
                )
            )
        )
    );

    updateCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CategoryActions.updateCategory),
            mergeMap(({id, category}) =>
                this.categoryService.update(id, category).pipe(
                    map(updated => CategoryActions.updateCategorySuccess({category: updated})),
                    catchError(error => of(CategoryActions.updateCategoryFailure({
                        error: extractErrorMessage(error, 'Kategorie konnte nicht aktualisiert werden')
                    })))
                )
            )
        )
    );

    deleteCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CategoryActions.deleteCategory),
            mergeMap(({id, force}) =>
                this.categoryService.delete(id, force).pipe(
                    map(() => CategoryActions.deleteCategorySuccess({id})),
                    catchError(error => {
                        if (error instanceof HttpErrorResponse && error.status === 409) {
                            return of(CategoryActions.deleteCategoryConflict({
                                id,
                                message: extractErrorMessage(error, 'Kategorie konnte nicht gelöscht werden')
                            }));
                        }
                        return of(CategoryActions.deleteCategoryFailure({
                            error: extractErrorMessage(error, 'Kategorie konnte nicht gelöscht werden')
                        }));
                    })
                )
            )
        )
    );
}
