import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PointsScaleState} from "./points-scale.reducer";

export const selectPointsScaleState = createFeatureSelector<PointsScaleState>("pointsScale");

export const selectAllPointsScales = createSelector(selectPointsScaleState, state => state.pointsScales);

export const selectPointsScaleLoading = createSelector(selectPointsScaleState, state => state.loading);

export const selectPointsScaleError = createSelector(selectPointsScaleState, state => state.error);
