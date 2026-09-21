import {createFeatureSelector, createSelector} from "@ngrx/store";
import {StartGroupTemplateState} from "./start-group-template.reducer";

export const selectStartGroupTemplateState = createFeatureSelector<StartGroupTemplateState>("startGroupTemplate");

export const selectAllStartGroupTemplates = createSelector(selectStartGroupTemplateState, state => state.templates);

export const selectStartGroupTemplateLoading = createSelector(selectStartGroupTemplateState, state => state.loading);

export const selectStartGroupTemplateError = createSelector(selectStartGroupTemplateState, state => state.error);

export const selectStartGroupTemplateById = (id: number) =>
    createSelector(selectAllStartGroupTemplates, templates => templates.find(t => t.id === id));
