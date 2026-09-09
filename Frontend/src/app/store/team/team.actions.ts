import {createAction, props} from '@ngrx/store';
import {Team, TeamRequest} from '../../models/team.model';

export const loadTeams = createAction('[Team] Load Teams');
export const loadTeamsSuccess = createAction(
    '[Team] Load Teams Success',
    props<{ teams: Team[] }>()
);
export const loadTeamsFailure = createAction(
    '[Team] Load Teams Failure',
    props<{ error: string }>()
);

export const createTeam = createAction(
    '[Team] Create Team',
    props<{ team: TeamRequest }>()
);
export const createTeamSuccess = createAction(
    '[Team] Create Team Success',
    props<{ team: Team }>()
);
export const createTeamFailure = createAction(
    '[Team] Create Team Failure',
    props<{ error: string }>()
);

export const updateTeam = createAction(
    '[Team] Update Team',
    props<{ id: number; team: TeamRequest }>()
);
export const updateTeamSuccess = createAction(
    '[Team] Update Team Success',
    props<{ team: Team }>()
);
export const updateTeamFailure = createAction(
    '[Team] Update Team Failure',
    props<{ error: string }>()
);

export const deleteTeam = createAction(
    '[Team] Delete Team',
    props<{ id: number; force?: boolean }>()
);
export const deleteTeamSuccess = createAction(
    '[Team] Delete Team Success',
    props<{ id: number }>()
);
export const deleteTeamFailure = createAction(
    '[Team] Delete Team Failure',
    props<{ error: string }>()
);
export const deleteTeamConflict = createAction(
    '[Team] Delete Team Conflict',
    props<{ id: number; message: string }>()
);
