import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
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

    // PDF Export Effects
    exportAllPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportAllPdf),
            mergeMap(({raceId}) =>
                this.participantService.exportAllToPdf(raceId).pipe(
                    map(blob => ParticipantActions.exportAllPdfSuccess({
                        blob,
                        filename: 'gesamtwertung.pdf'
                    })),
                    catchError(error => of(ParticipantActions.exportAllPdfFailure({
                        error: error.message || 'Failed to export PDF'
                    })))
                )
            )
        )
    );

    exportByGenderPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportByGenderPdf),
            mergeMap(({gender, raceId}) =>
                this.participantService.exportByGenderToPdf(gender, raceId).pipe(
                    map(blob => ParticipantActions.exportByGenderPdfSuccess({
                        blob,
                        filename: `wertung_${gender.toLowerCase()}.pdf`
                    })),
                    catchError(error => of(ParticipantActions.exportByGenderPdfFailure({
                        error: error.message || 'Failed to export PDF'
                    })))
                )
            )
        )
    );

    exportAllAgeGroupsPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportAllAgeGroupsPdf),
            mergeMap(({raceId}) =>
                this.participantService.exportAllAgeGroupsToPdf(raceId).pipe(
                    map(blob => ParticipantActions.exportAllAgeGroupsPdfSuccess({
                        blob,
                        filename: 'wertung_altersklassen.pdf'
                    })),
                    catchError(error => of(ParticipantActions.exportAllAgeGroupsPdfFailure({
                        error: error.message || 'Failed to export PDF'
                    })))
                )
            )
        )
    );

    exportAllByCategoryPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportAllByCategoryPdf),
            mergeMap(({raceId}) =>
                this.participantService.exportAllByCategoryToPdf(raceId).pipe(
                    map(blob => ParticipantActions.exportAllByCategoryPdfSuccess({
                        blob,
                        filename: 'gesamtwertung_kategorien.pdf'
                    })),
                    catchError(error => of(ParticipantActions.exportAllByCategoryPdfFailure({
                        error: error.message || 'Failed to export PDF'
                    })))
                )
            )
        )
    );

    exportByGenderByCategoryPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportByGenderByCategoryPdf),
            mergeMap(({gender, raceId}) =>
                this.participantService.exportByGenderByCategoryToPdf(gender, raceId).pipe(
                    map(blob => ParticipantActions.exportByGenderByCategoryPdfSuccess({
                        blob,
                        filename: `wertung_${gender.toLowerCase()}_kategorien.pdf`
                    })),
                    catchError(error => of(ParticipantActions.exportByGenderByCategoryPdfFailure({
                        error: error.message || 'Failed to export PDF'
                    })))
                )
            )
        )
    );

    exportAllAgeGroupsByCategoryPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportAllAgeGroupsByCategoryPdf),
            mergeMap(({raceId}) =>
                this.participantService.exportAllAgeGroupsByCategoryToPdf(raceId).pipe(
                    map(blob => ParticipantActions.exportAllAgeGroupsByCategoryPdfSuccess({
                        blob,
                        filename: 'wertung_altersklassen_kategorien.pdf'
                    })),
                    catchError(error => of(ParticipantActions.exportAllAgeGroupsByCategoryPdfFailure({
                        error: error.message || 'Failed to export PDF'
                    })))
                )
            )
        )
    );

    // Auto-download PDF when export is successful
    downloadPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                ParticipantActions.exportAllPdfSuccess,
                ParticipantActions.exportByGenderPdfSuccess,
                ParticipantActions.exportAllAgeGroupsPdfSuccess,
                ParticipantActions.exportAllByCategoryPdfSuccess,
                ParticipantActions.exportByGenderByCategoryPdfSuccess,
                ParticipantActions.exportAllAgeGroupsByCategoryPdfSuccess
            ),
            tap(({blob, filename}) => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = filename;
                link.click();
                window.URL.revokeObjectURL(url);
            })
        ),
        {dispatch: false}
    );
}

