import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {ParticipantService} from '../../services/participant.service';
import * as ParticipantActions from './participant.actions';

@Injectable()
export class ParticipantEffects {
    private actions$ = inject(Actions);
    private participantService = inject(ParticipantService);

    loadParticipants$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.loadParticipants),
            mergeMap(() =>
                this.participantService.getAll().pipe(
                    map(participants => ParticipantActions.loadParticipantsSuccess({participants})),
                    catchError(error => of(ParticipantActions.loadParticipantsFailure({
                        error: error.message || 'Failed to load participants'
                    })))
                )
            )
        )
    );

    loadParticipant$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.loadParticipant),
            mergeMap(({id}) =>
                this.participantService.getById(id).pipe(
                    map(participant => ParticipantActions.loadParticipantSuccess({participant})),
                    catchError(error => of(ParticipantActions.loadParticipantFailure({
                        error: error.message || 'Failed to load participant'
                    })))
                )
            )
        )
    );

    createParticipant$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.createParticipant),
            mergeMap(({participant}) =>
                this.participantService.create(participant).pipe(
                    map(created => ParticipantActions.createParticipantSuccess({participant: created})),
                    catchError(error => of(ParticipantActions.createParticipantFailure({
                        error: error.message || 'Failed to create participant'
                    })))
                )
            )
        )
    );

    updateParticipant$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.updateParticipant),
            mergeMap(({id, participant}) =>
                this.participantService.update(id, participant).pipe(
                    map(updated => ParticipantActions.updateParticipantSuccess({participant: updated})),
                    catchError(error => of(ParticipantActions.updateParticipantFailure({
                        error: error.message || 'Failed to update participant'
                    })))
                )
            )
        )
    );

    deleteParticipant$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.deleteParticipant),
            mergeMap(({id}) =>
                this.participantService.delete(id).pipe(
                    map(() => ParticipantActions.deleteParticipantSuccess({id})),
                    catchError(error => of(ParticipantActions.deleteParticipantFailure({
                        error: error.message || 'Failed to delete participant'
                    })))
                )
            )
        )
    );

    deleteParticipantsByRaceId$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.deleteParticipantsByRaceId),
            mergeMap(({raceId}) =>
                this.participantService.deleteByRaceId(raceId).pipe(
                    map(() => ParticipantActions.deleteParticipantsByRaceIdSuccess({raceId})),
                    catchError(error => of(ParticipantActions.deleteParticipantsByRaceIdFailure({
                        error: error.message || 'Failed to delete participants by race'
                    })))
                )
            )
        )
    );
}

