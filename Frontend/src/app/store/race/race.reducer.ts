import {createReducer, on} from "@ngrx/store";
import {Race, RaceLiveLink} from "../../models/race.model";
import * as RaceActions from "./race.actions";

export interface RaceState {
    races: Race[];
    selectedRaceId: number | null;
    loading: boolean;
    error: string | null;
    /** Live-results links of the race whose live-links dialog was opened last. */
    liveLinks: RaceLiveLink[];
    liveLinksLoading: boolean;
}

export const initialState: RaceState = {
    races: [],
    selectedRaceId: null,
    loading: false,
    error: null,
    liveLinks: [],
    liveLinksLoading: false,
};

export const raceReducer = createReducer(
    initialState,
    on(RaceActions.loadRaces, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(RaceActions.loadRacesSuccess, (state, {races}) => ({
        ...state,
        races,
        loading: false,
    })),
    on(RaceActions.loadRacesFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),
    on(RaceActions.createRace, RaceActions.createRaceForResultImport, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(RaceActions.createRaceSuccess, RaceActions.createRaceForResultImportSuccess, (state, {race}) => ({
        ...state,
        races: [...state.races, race],
        loading: false,
    })),
    on(RaceActions.createRaceFailure, RaceActions.createRaceForResultImportFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),
    on(RaceActions.updateRace, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(RaceActions.updateRaceSuccess, (state, {race}) => ({
        ...state,
        races: state.races.map(r => (r.id === race.id ? race : r)),
        loading: false,
    })),
    on(RaceActions.updateRaceFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),
    on(RaceActions.deleteRace, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(RaceActions.deleteRaceSuccess, (state, {id}) => ({
        ...state,
        races: state.races.filter(r => r.id !== id),
        // Otherwise the participant/start-group pages keep filtering by (and acting on) a race
        // that no longer exists.
        selectedRaceId: state.selectedRaceId === id ? null : state.selectedRaceId,
        loading: false,
    })),
    on(RaceActions.deleteRaceFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),
    on(RaceActions.deleteRaceConflict, state => ({
        ...state,
        loading: false,
    })),
    // Reset on every load so the dialog never briefly shows the links of the race opened before.
    on(RaceActions.loadLiveLinks, state => ({
        ...state,
        liveLinks: [],
        liveLinksLoading: true,
    })),
    on(RaceActions.loadLiveLinksSuccess, (state, {links}) => ({
        ...state,
        liveLinks: links,
        liveLinksLoading: false,
    })),
    on(RaceActions.loadLiveLinksFailure, state => ({
        ...state,
        liveLinksLoading: false,
    })),
    on(RaceActions.selectRace, (state, {id}) => ({
        ...state,
        selectedRaceId: id,
    })),
);
