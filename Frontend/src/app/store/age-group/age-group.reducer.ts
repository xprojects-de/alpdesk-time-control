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

/** Die Saisonliste (neueste zuerst) um eine Saison ergänzen, falls sie noch nicht drin ist. */
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
        // Nur übernehmen, wenn die neue Gruppe zur gerade angezeigten Saison gehört - die Tabelle
        // zeigt immer genau eine Saison, und eine fremde Zeile wäre dort nicht als solche
        // erkennbar. Der Dialog legt ohnehin nur in der angezeigten Saison an; das hier fängt den
        // Fall ab, dass währenddessen die Saison gewechselt wurde.
        ageGroups:
            state.selectedSeason == null || ageGroup.seasonYear === state.selectedSeason
                ? [...state.ageGroups, ageGroup]
                : state.ageGroups,
        // Eine Saison, die bisher nur Rennen hatte, ist ab der ersten Gruppe eine konfigurierte -
        // und damit auch als Quelle einer Übernahme wählbar.
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
            // War das die letzte Gruppe dieser Saison, ist sie keine konfigurierte mehr - sonst
            // stünde sie weiter als Quelle einer Übernahme zur Wahl und der Server lehnte sie ab.
            // Auswählbar bleibt sie trotzdem (selectedSeason fließt in die Optionen ein).
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
