import {createAction, props} from '@ngrx/store';
import {Race, RaceRequest} from '../../models/race.model';

export const loadRaces = createAction(
    '[Race] Load Races'
);

export const loadRacesSuccess = createAction(
    '[Race] Load Races Success',
    props<{ races: Race[] }>()
);

export const loadRacesFailure = createAction(
    '[Race] Load Races Failure',
    props<{ error: string }>()
);

export const createRace = createAction(
    '[Race] Create Race',
    props<{ race: RaceRequest }>()
);

export const createRaceSuccess = createAction(
    '[Race] Create Race Success',
    props<{ race: Race }>()
);

export const createRaceFailure = createAction(
    '[Race] Create Race Failure',
    props<{ error: string }>()
);

export const updateRace = createAction(
    '[Race] Update Race',
    props<{ id: number; race: RaceRequest }>()
);

export const updateRaceSuccess = createAction(
    '[Race] Update Race Success',
    props<{ race: Race }>()
);

export const updateRaceFailure = createAction(
    '[Race] Update Race Failure',
    props<{ error: string }>()
);

export const deleteRace = createAction(
    '[Race] Delete Race',
    props<{ id: number }>()
);

export const deleteRaceSuccess = createAction(
    '[Race] Delete Race Success',
    props<{ id: number }>()
);

export const deleteRaceFailure = createAction(
    '[Race] Delete Race Failure',
    props<{ error: string }>()
);

export const selectRace = createAction(
    '[Race] Select Race',
    props<{ id: number | null }>()
);

