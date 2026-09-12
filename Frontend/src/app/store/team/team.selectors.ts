import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TeamState} from './team.reducer';

export const selectTeamState = createFeatureSelector<TeamState>('team');

export const selectAllTeams = createSelector(
    selectTeamState,
    state => state.teams
);

export const selectTeamLoading = createSelector(
    selectTeamState,
    state => state.loading
);

export const selectTeamError = createSelector(
    selectTeamState,
    state => state.error
);

export const selectTeamById = (id: number) => createSelector(
    selectAllTeams,
    teams => teams.find(t => t.id === id)
);
