import {createAction, props} from '@ngrx/store';
import {Participant, ParticipantRequest} from '../../models/participant.model';

// Load all participants
export const loadParticipants = createAction('[Participant] Load Participants');
export const loadParticipantsSuccess = createAction(
    '[Participant] Load Participants Success',
    props<{ participants: Participant[] }>()
);
export const loadParticipantsFailure = createAction(
    '[Participant] Load Participants Failure',
    props<{ error: string }>()
);

// Load single participant
export const loadParticipant = createAction(
    '[Participant] Load Participant',
    props<{ id: number }>()
);
export const loadParticipantSuccess = createAction(
    '[Participant] Load Participant Success',
    props<{ participant: Participant }>()
);
export const loadParticipantFailure = createAction(
    '[Participant] Load Participant Failure',
    props<{ error: string }>()
);

// Create participant
export const createParticipant = createAction(
    '[Participant] Create Participant',
    props<{ participant: ParticipantRequest }>()
);
export const createParticipantSuccess = createAction(
    '[Participant] Create Participant Success',
    props<{ participant: Participant }>()
);
export const createParticipantFailure = createAction(
    '[Participant] Create Participant Failure',
    props<{ error: string }>()
);

// Update participant
export const updateParticipant = createAction(
    '[Participant] Update Participant',
    props<{ id: number; participant: ParticipantRequest }>()
);
export const updateParticipantSuccess = createAction(
    '[Participant] Update Participant Success',
    props<{ participant: Participant }>()
);
export const updateParticipantFailure = createAction(
    '[Participant] Update Participant Failure',
    props<{ error: string }>()
);

// Delete participant
export const deleteParticipant = createAction(
    '[Participant] Delete Participant',
    props<{ id: number }>()
);
export const deleteParticipantSuccess = createAction(
    '[Participant] Delete Participant Success',
    props<{ id: number }>()
);
export const deleteParticipantFailure = createAction(
    '[Participant] Delete Participant Failure',
    props<{ error: string }>()
);

// Select participant
export const selectParticipant = createAction(
    '[Participant] Select Participant',
    props<{ id: number | null }>()
);

