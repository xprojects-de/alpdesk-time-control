import {inject, Injectable} from '@angular/core';
import {extractErrorMessage} from '../../utils/http-error.util';
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
                        error: extractErrorMessage(error, 'Failed to load participants')
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
                        error: extractErrorMessage(error, 'Failed to load participant')
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
                        error: extractErrorMessage(error, 'Failed to create participant')
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
                        error: extractErrorMessage(error, 'Failed to update participant')
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
                        error: extractErrorMessage(error, 'Failed to delete participant')
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
                        error: extractErrorMessage(error, 'Failed to delete participants by race')
                    })))
                )
            )
        )
    );

    assignRaceNumbers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.assignRaceNumbers),
            mergeMap(({raceId}) =>
                this.participantService.assignRaceNumbers(raceId).pipe(
                    map(participants => ParticipantActions.assignRaceNumbersSuccess({participants})),
                    catchError(error => of(ParticipantActions.assignRaceNumbersFailure({
                        error: extractErrorMessage(error, 'Failed to assign race numbers')
                    })))
                )
            )
        )
    );

    importParticipantsCsv$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.importParticipantsCsv),
            mergeMap(({raceId, file}) =>
                this.participantService.importCsv(raceId, file).pipe(
                    map(result => ParticipantActions.importParticipantsCsvSuccess({result})),
                    catchError(error => of(ParticipantActions.importParticipantsCsvFailure({
                        error: extractErrorMessage(error, 'Failed to import participants')
                    })))
                )
            )
        )
    );

    importParticipantsMapped$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.importParticipantsMapped),
            mergeMap(({raceId, file, format, delimiter, mapping}) =>
                this.participantService.importMapped(raceId, file, format, delimiter, mapping).pipe(
                    map(result => ParticipantActions.importParticipantsMappedSuccess({result})),
                    catchError(error => of(ParticipantActions.importParticipantsMappedFailure({
                        error: extractErrorMessage(error, 'Failed to import participants')
                    })))
                )
            )
        )
    );

    importParticipantResultsMapped$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.importParticipantResultsMapped),
            mergeMap(({raceId, file, timeFormat, delimiter, mapping}) =>
                this.participantService.importResultsMapped(raceId, file, timeFormat, delimiter, mapping).pipe(
                    map(result => ParticipantActions.importParticipantResultsMappedSuccess({result})),
                    catchError(error => of(ParticipantActions.importParticipantResultsMappedFailure({
                        error: extractErrorMessage(error, 'Failed to import participant results')
                    })))
                )
            )
        )
    );

    exportParticipantsCsv$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportParticipantsCsv),
            mergeMap(({raceId, filename}) =>
                this.participantService.exportCsv(raceId).pipe(
                    map(blob => ParticipantActions.exportParticipantsCsvSuccess({blob, filename})),
                    catchError(error => of(ParticipantActions.exportParticipantsCsvFailure({
                        error: extractErrorMessage(error, 'Failed to export CSV')
                    })))
                )
            )
        )
    );

    exportParticipantResultsCsv$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportParticipantResultsCsv),
            mergeMap(({raceId, filename}) =>
                this.participantService.exportResultsCsv(raceId).pipe(
                    map(blob => ParticipantActions.exportParticipantResultsCsvSuccess({blob, filename})),
                    catchError(error => of(ParticipantActions.exportParticipantResultsCsvFailure({
                        error: extractErrorMessage(error, 'Failed to export results CSV')
                    })))
                )
            )
        )
    );

    copyParticipants$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.copyParticipants),
            mergeMap(({request}) =>
                this.participantService.copyParticipants(request).pipe(
                    map(result => ParticipantActions.copyParticipantsSuccess({result})),
                    catchError(error => of(ParticipantActions.copyParticipantsFailure({
                        error: extractErrorMessage(error, 'Failed to copy participants')
                    })))
                )
            )
        )
    );

    exportStartListPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportStartListPdf),
            mergeMap(({raceId}) =>
                this.participantService.exportStartListToPdf(raceId).pipe(
                    map(blob => ParticipantActions.exportStartListPdfSuccess({
                        blob,
                        filename: 'startliste.pdf'
                    })),
                    catchError(error => of(ParticipantActions.exportStartListPdfFailure({
                        error: extractErrorMessage(error, 'Failed to export PDF')
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
                        error: extractErrorMessage(error, 'Failed to export PDF')
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
                        error: extractErrorMessage(error, 'Failed to export PDF')
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
                        error: extractErrorMessage(error, 'Failed to export PDF')
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
                        error: extractErrorMessage(error, 'Failed to export PDF')
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
                        error: extractErrorMessage(error, 'Failed to export PDF')
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
                        error: extractErrorMessage(error, 'Failed to export PDF')
                    })))
                )
            )
        )
    );

    // Auto-download the exported file (PDF or CSV) once the export succeeds
    downloadExportedFile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                ParticipantActions.exportAllPdfSuccess,
                ParticipantActions.exportByGenderPdfSuccess,
                ParticipantActions.exportAllAgeGroupsPdfSuccess,
                ParticipantActions.exportAllByCategoryPdfSuccess,
                ParticipantActions.exportByGenderByCategoryPdfSuccess,
                ParticipantActions.exportAllAgeGroupsByCategoryPdfSuccess,
                ParticipantActions.exportStartListPdfSuccess,
                ParticipantActions.exportParticipantsCsvSuccess,
                ParticipantActions.exportParticipantResultsCsvSuccess
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

