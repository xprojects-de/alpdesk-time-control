import {createReducer, on} from '@ngrx/store';
import {StartGroupTemplate} from '../../models/start-group.model';
import * as StartGroupTemplateActions from './start-group-template.actions';

export interface StartGroupTemplateState {
    templates: StartGroupTemplate[];
    loading: boolean;
    error: string | null;
}

export const initialState: StartGroupTemplateState = {
    templates: [],
    loading: false,
    error: null
};

export const startGroupTemplateReducer = createReducer(
    initialState,

    on(StartGroupTemplateActions.loadStartGroupTemplates, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(StartGroupTemplateActions.loadStartGroupTemplatesSuccess, (state, {templates}) => ({
        ...state,
        templates,
        loading: false
    })),
    on(StartGroupTemplateActions.loadStartGroupTemplatesFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    on(StartGroupTemplateActions.createStartGroupTemplate, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(StartGroupTemplateActions.createStartGroupTemplateSuccess, (state, {template}) => ({
        ...state,
        templates: [...state.templates, template],
        loading: false
    })),
    on(StartGroupTemplateActions.createStartGroupTemplateFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    on(StartGroupTemplateActions.updateStartGroupTemplate, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(StartGroupTemplateActions.updateStartGroupTemplateSuccess, (state, {template}) => ({
        ...state,
        templates: state.templates.map(t => t.id === template.id ? template : t),
        loading: false
    })),
    on(StartGroupTemplateActions.updateStartGroupTemplateFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    on(StartGroupTemplateActions.deleteStartGroupTemplate, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(StartGroupTemplateActions.deleteStartGroupTemplateSuccess, (state, {id}) => ({
        ...state,
        templates: state.templates.filter(t => t.id !== id),
        loading: false
    })),
    on(StartGroupTemplateActions.deleteStartGroupTemplateFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),
    on(StartGroupTemplateActions.deleteStartGroupTemplateConflict, state => ({
        ...state,
        loading: false
    }))
);
