import {createFeatureSelector, createSelector} from '@ngrx/store';
import {RaceState} from './race.reducer';

export const selectRaceState = createFeatureSelector<RaceState>('race');

export const selectAllRaces = createSelector(
    selectRaceState,
    (state: RaceState) => state.races
);

export const selectRaceLoading = createSelector(
    selectRaceState,
    (state: RaceState) => state.loading
);

export const selectRaceError = createSelector(
    selectRaceState,
    (state: RaceState) => state.error
);

export const selectLiveLinks = createSelector(
    selectRaceState,
    (state: RaceState) => state.liveLinks
);

export const selectLiveLinksLoading = createSelector(
    selectRaceState,
    (state: RaceState) => state.liveLinksLoading
);

export const selectRaceById = (id: number) => createSelector(
    selectAllRaces,
    (races) => races.find(race => race.id === id)
);

export const selectSelectedRaceId = createSelector(
    selectRaceState,
    (state: RaceState) => state.selectedRaceId
);

export const selectSelectedRace = createSelector(
    selectAllRaces,
    selectSelectedRaceId,
    (races, selectedId) => selectedId ? races.find(race => race.id === selectedId) : null
);

