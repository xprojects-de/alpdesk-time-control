import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CategoryState} from './category.reducer';

export const selectCategoryState = createFeatureSelector<CategoryState>('category');

export const selectAllCategories = createSelector(
    selectCategoryState,
    state => state.categories
);

export const selectCategoryLoading = createSelector(
    selectCategoryState,
    state => state.loading
);

export const selectCategoryError = createSelector(
    selectCategoryState,
    state => state.error
);

export const selectCategoryById = (id: number) => createSelector(
    selectAllCategories,
    categories => categories.find(c => c.id === id)
);
