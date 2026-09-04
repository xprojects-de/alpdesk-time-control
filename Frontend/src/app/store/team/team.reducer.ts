import {createReducer, on} from '@ngrx/store';
import {Team} from '../../models/team.model';
import * as TeamActions from './team.actions';

export interface TeamState {
    teams: Team[];
    loading: boolean;
    error: string | null;
}

export const initialState: TeamState = {
    teams: [],
    loading: false,
    error: null
};

export const teamReducer = createReducer(
    initialState,

    on(TeamActions.loadTeams, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(TeamActions.loadTeamsSuccess, (state, {teams}) => ({
        ...state,
        teams,
        loading: false
    })),
    on(TeamActions.loadTeamsFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    on(TeamActions.createTeam, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(TeamActions.createTeamSuccess, (state, {team}) => ({
        ...state,
        teams: [...state.teams, team],
        loading: false
    })),
    on(TeamActions.createTeamFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    on(TeamActions.updateTeam, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(TeamActions.updateTeamSuccess, (state, {team}) => ({
        ...state,
        teams: state.teams.map(t => t.id === team.id ? team : t),
        loading: false
    })),
    on(TeamActions.updateTeamFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    on(TeamActions.deleteTeam, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(TeamActions.deleteTeamSuccess, (state, {id}) => ({
        ...state,
        teams: state.teams.filter(t => t.id !== id),
        loading: false
    })),
    on(TeamActions.deleteTeamFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    }))
);
