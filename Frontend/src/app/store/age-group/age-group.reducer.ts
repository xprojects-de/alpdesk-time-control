import {createReducer, on} from "@ngrx/store";
import {AgeGroup} from "../../models/age-group.model";
import * as AgeGroupActions from "./age-group.actions";

export interface AgeGroupState {
    ageGroups: AgeGroup[];
    /** Seasons that have age groups configured, newest first. */
    seasons: number[];
    /** Seasons that have at least one race, newest first - selectable even without age groups. */
    seasonsWithRaces: number[];
    /** The season today falls into, per the configured season boundary. */
    currentSeason: number | null;
    /**
     * The season the configuration UI is showing. null until the season list has been loaded and a
     * sensible default picked (the current season, or the newest configured one).
     */
    selectedSeason: number | null;
    loading: boolean;
    error: string | null;
}

export const initialState: AgeGroupState = {
    ageGroups: [],
    seasons: [],
    seasonsWithRaces: [],
    currentSeason: null,
    selectedSeason: null,
    loading: false,
    error: null,
};

/** Adds a season to the list (newest first) unless it is already in it. */
const withSeason = (seasons: number[], season: number): number[] =>
    seasons.includes(season) ? seasons : [...seasons, season].sort((a, b) => b - a);

export const ageGroupReducer = createReducer(
    initialState,

    // Load all age groups
    on(AgeGroupActions.loadAgeGroups, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(AgeGroupActions.loadAgeGroupsSuccess, (state, {ageGroups}) => ({
        ...state,
        ageGroups,
        loading: false,
    })),
    on(AgeGroupActions.loadAgeGroupsFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),

    // Create age group
    on(AgeGroupActions.createAgeGroup, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(AgeGroupActions.createAgeGroupSuccess, (state, {ageGroup}) => ({
        ...state,
        // Only taken over when the new group belongs to the season currently on screen: the table
        // always shows exactly one season, and a row from another one would not be recognisable as
        // such there. The dialog only ever creates in the shown season anyway; this covers the case
        // where the season was switched while it was open.
        ageGroups:
            state.selectedSeason == null || ageGroup.seasonYear === state.selectedSeason
                ? [...state.ageGroups, ageGroup]
                : state.ageGroups,
        // A season that so far only had races becomes a configured one with its first group - and
        // is therefore also selectable as the source of a rollover.
        seasons: withSeason(state.seasons, ageGroup.seasonYear),
        loading: false,
    })),
    on(AgeGroupActions.createAgeGroupFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),

    // Update age group
    on(AgeGroupActions.updateAgeGroup, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(AgeGroupActions.updateAgeGroupSuccess, (state, {ageGroup}) => ({
        ...state,
        ageGroups: state.ageGroups.map(a => (a.id === ageGroup.id ? ageGroup : a)),
        loading: false,
    })),
    on(AgeGroupActions.updateAgeGroupFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),

    // Delete age group
    on(AgeGroupActions.deleteAgeGroup, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(AgeGroupActions.deleteAgeGroupSuccess, (state, {id}) => {
        const remaining = state.ageGroups.filter(a => a.id !== id);
        return {
            ...state,
            ageGroups: remaining,
            // If that was the season's last group it is no longer a configured one - otherwise it
            // would stay on offer as a rollover source and the server would reject it. It remains
            // selectable regardless (selectedSeason feeds into the options).
            seasons:
                remaining.length === 0 && state.selectedSeason != null
                    ? state.seasons.filter(s => s !== state.selectedSeason)
                    : state.seasons,
            loading: false,
        };
    }),
    on(AgeGroupActions.deleteAgeGroupFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),

    // Seasons
    on(AgeGroupActions.selectSeason, (state, {season}) => ({
        ...state,
        selectedSeason: season,
    })),
    on(AgeGroupActions.loadSeasonsSuccess, (state, {seasons, seasonsWithRaces, currentSeason}) => ({
        ...state,
        seasons,
        seasonsWithRaces,
        currentSeason,
        // Default to the season we are in - that is the one being raced and therefore the one
        // being configured. Only when it has nothing configured yet does the newest configured
        // season win, so the list doesn't open empty on a database that is a season behind.
        selectedSeason:
            state.selectedSeason ?? (seasons.includes(currentSeason) ? currentSeason : (seasons[0] ?? currentSeason)),
    })),
    on(AgeGroupActions.loadSeasonsFailure, (state, {error}) => ({
        ...state,
        error,
    })),

    on(AgeGroupActions.copySeason, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(AgeGroupActions.copySeasonSuccess, (state, {toSeason, ageGroups}) => ({
        ...state,
        // Jump straight to the season that was just created - it is what the operator wants to
        // look at and adjust next.
        ageGroups,
        selectedSeason: toSeason,
        seasons: withSeason(state.seasons, toSeason),
        loading: false,
    })),
    on(AgeGroupActions.copySeasonFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),
);
