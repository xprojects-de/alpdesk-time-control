import {createReducer, on} from '@ngrx/store';
import {Race} from '../../models/race.model';
import * as RaceActions from './race.actions';

export interface RaceState {
    races: Race[];
    selectedRaceId: number | null;
    loading: boolean;
    error: any;
}

export const initialState: RaceState = {
    races: [],
    selectedRaceId: null,
    loading: false,
    error: null
};


export const raceReducer = createReducer(
    initialState,
    on(RaceActions.loadRaces, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(RaceActions.loadRacesSuccess, (state, {races}) => ({
        ...state,
        races,
        loading: false
    })),
    on(RaceActions.loadRacesFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),
    on(RaceActions.createRace, (state) => ({
        ...state,
        loading: true
    })),
    on(RaceActions.createRaceSuccess, (state, {race}) => ({
        ...state,
        races: [...state.races, race],
        loading: false
    })),
    on(RaceActions.createRaceFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),
    on(RaceActions.updateRace, (state) => ({
        ...state,
        loading: true
    })),
    on(RaceActions.updateRaceSuccess, (state, {race}) => ({
        ...state,
        races: state.races.map(r => r.id === race.id ? race : r),
        loading: false
    })),
    on(RaceActions.updateRaceFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),
    on(RaceActions.deleteRace, (state) => ({
        ...state,
        loading: true
    })),
    on(RaceActions.deleteRaceSuccess, (state, {id}) => ({
        ...state,
        races: state.races.filter(r => r.id !== id),
        loading: false
    })),
    on(RaceActions.deleteRaceFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),
    on(RaceActions.selectRace, (state, {id}) => ({
        ...state,
        selectedRaceId: id
    }))
);

