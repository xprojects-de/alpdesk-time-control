import {inject, Injectable} from '@angular/core';
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
                        error: error.message || 'Failed to load categories'
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
                        error: error.message || 'Failed to create category'
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
                        error: error.message || 'Failed to update category'
                    })))
                )
            )
        )
    );

    deleteCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CategoryActions.deleteCategory),
            mergeMap(({id}) =>
                this.categoryService.delete(id).pipe(
                    map(() => CategoryActions.deleteCategorySuccess({id})),
                    catchError(error => of(CategoryActions.deleteCategoryFailure({
                        error: error.message || 'Failed to delete category'
                    })))
                )
            )
        )
    );
}
