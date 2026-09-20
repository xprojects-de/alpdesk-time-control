import {createReducer, on} from "@ngrx/store";
import {Category} from "../../models/category.model";
import * as CategoryActions from "./category.actions";

export interface CategoryState {
    categories: Category[];
    loading: boolean;
    error: string | null;
}

export const initialState: CategoryState = {
    categories: [],
    loading: false,
    error: null,
};

export const categoryReducer = createReducer(
    initialState,

    on(CategoryActions.loadCategories, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(CategoryActions.loadCategoriesSuccess, (state, {categories}) => ({
        ...state,
        categories,
        loading: false,
    })),
    on(CategoryActions.loadCategoriesFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),

    on(CategoryActions.createCategory, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(CategoryActions.createCategorySuccess, (state, {category}) => ({
        ...state,
        categories: [...state.categories, category],
        loading: false,
    })),
    on(CategoryActions.createCategoryFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),

    on(CategoryActions.updateCategory, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(CategoryActions.updateCategorySuccess, (state, {category}) => ({
        ...state,
        categories: state.categories.map(c => (c.id === category.id ? category : c)),
        loading: false,
    })),
    on(CategoryActions.updateCategoryFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),

    on(CategoryActions.deleteCategory, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(CategoryActions.deleteCategorySuccess, (state, {id}) => ({
        ...state,
        categories: state.categories.filter(c => c.id !== id),
        loading: false,
    })),
    on(CategoryActions.deleteCategoryFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),
    on(CategoryActions.deleteCategoryConflict, state => ({
        ...state,
        loading: false,
    })),
);
