import {inject, Injectable} from "@angular/core";
import {extractErrorMessage} from "../../utils/http-error.util";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {of} from "rxjs";
import {catchError, map, mergeMap, tap} from "rxjs/operators";
import {ParticipantService} from "../../services/participant.service";
import * as ParticipantActions from "./participant.actions";

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
                    catchError(error =>
                        of(
                            ParticipantActions.loadParticipantsFailure({
                                error: extractErrorMessage(error, "Teilnehmer konnten nicht geladen werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    loadParticipant$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.loadParticipant),
            mergeMap(({id}) =>
                this.participantService.getById(id).pipe(
                    map(participant => ParticipantActions.loadParticipantSuccess({participant})),
                    catchError(error =>
                        of(
                            ParticipantActions.loadParticipantFailure({
                                error: extractErrorMessage(error, "Teilnehmer konnte nicht geladen werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    createParticipant$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.createParticipant),
            mergeMap(({participant}) =>
                this.participantService.create(participant).pipe(
                    map(created => ParticipantActions.createParticipantSuccess({participant: created})),
                    catchError(error =>
                        of(
                            ParticipantActions.createParticipantFailure({
                                error: extractErrorMessage(error, "Teilnehmer konnte nicht erstellt werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    updateParticipant$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.updateParticipant),
            mergeMap(({id, participant}) =>
                this.participantService.update(id, participant).pipe(
                    map(updated => ParticipantActions.updateParticipantSuccess({participant: updated})),
                    catchError(error =>
                        of(
                            ParticipantActions.updateParticipantFailure({
                                error: extractErrorMessage(error, "Teilnehmer konnte nicht aktualisiert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    clearParticipantResult$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.clearParticipantResult),
            mergeMap(({id}) =>
                this.participantService.clearResult(id).pipe(
                    map(updated => ParticipantActions.clearParticipantResultSuccess({participant: updated})),
                    catchError(error =>
                        of(
                            ParticipantActions.clearParticipantResultFailure({
                                error: extractErrorMessage(error, "Ergebnis konnte nicht zurückgesetzt werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    deleteParticipant$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.deleteParticipant),
            mergeMap(({id}) =>
                this.participantService.delete(id).pipe(
                    map(() => ParticipantActions.deleteParticipantSuccess({id})),
                    catchError(error =>
                        of(
                            ParticipantActions.deleteParticipantFailure({
                                error: extractErrorMessage(error, "Teilnehmer konnte nicht gelöscht werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    deleteParticipantsByRaceId$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.deleteParticipantsByRaceId),
            mergeMap(({raceId}) =>
                this.participantService.deleteByRaceId(raceId).pipe(
                    map(() => ParticipantActions.deleteParticipantsByRaceIdSuccess({raceId})),
                    catchError(error =>
                        of(
                            ParticipantActions.deleteParticipantsByRaceIdFailure({
                                error: extractErrorMessage(
                                    error,
                                    "Teilnehmer des Rennens konnten nicht gelöscht werden",
                                ),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    assignRaceNumbers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.assignRaceNumbers),
            mergeMap(({raceId}) =>
                this.participantService.assignRaceNumbers(raceId).pipe(
                    map(participants => ParticipantActions.assignRaceNumbersSuccess({participants})),
                    catchError(error =>
                        of(
                            ParticipantActions.assignRaceNumbersFailure({
                                error: extractErrorMessage(error, "Startnummern konnten nicht vergeben werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    applyStartOrderFromPreviousRace$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.applyStartOrderFromPreviousRace),
            mergeMap(({raceId, includeUnranked}) =>
                this.participantService.applyStartOrderFromPreviousRace(raceId, includeUnranked).pipe(
                    map(participants => ParticipantActions.applyStartOrderFromPreviousRaceSuccess({participants})),
                    catchError(error =>
                        of(
                            ParticipantActions.applyStartOrderFromPreviousRaceFailure({
                                error: extractErrorMessage(error, "Startreihenfolge konnte nicht übernommen werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    saveStartGroupAssignment$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.saveStartGroupAssignment),
            mergeMap(({raceId, assignments}) =>
                this.participantService.saveStartGroupAssignment(raceId, assignments).pipe(
                    map(participants => ParticipantActions.saveStartGroupAssignmentSuccess({participants})),
                    catchError(error =>
                        of(
                            ParticipantActions.saveStartGroupAssignmentFailure({
                                error: extractErrorMessage(
                                    error,
                                    "Startgruppen-Zuordnung konnte nicht gespeichert werden",
                                ),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    copyStartGroupAssignment$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.copyStartGroupAssignment),
            mergeMap(({request}) =>
                this.participantService.copyStartGroupAssignment(request).pipe(
                    map(participants => ParticipantActions.copyStartGroupAssignmentSuccess({participants})),
                    catchError(error =>
                        of(
                            ParticipantActions.copyStartGroupAssignmentFailure({
                                error: extractErrorMessage(
                                    error,
                                    "Startgruppen-Zuordnung konnte nicht übernommen werden",
                                ),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    generateRaceNumbersFromStartGroups$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.generateRaceNumbersFromStartGroups),
            mergeMap(({raceId}) =>
                this.participantService.generateRaceNumbersFromStartGroups(raceId).pipe(
                    map(participants => ParticipantActions.generateRaceNumbersFromStartGroupsSuccess({participants})),
                    catchError(error =>
                        of(
                            ParticipantActions.generateRaceNumbersFromStartGroupsFailure({
                                error: extractErrorMessage(
                                    error,
                                    "Startnummern konnten nicht aus der Gruppierung vergeben werden",
                                ),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    importParticipantsCsv$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.importParticipantsCsv),
            mergeMap(({raceId, file}) =>
                this.participantService.importCsv(raceId, file).pipe(
                    map(result => ParticipantActions.importParticipantsCsvSuccess({result})),
                    catchError(error =>
                        of(
                            ParticipantActions.importParticipantsCsvFailure({
                                error: extractErrorMessage(error, "Teilnehmer konnten nicht importiert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    importParticipantsMapped$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.importParticipantsMapped),
            mergeMap(({raceId, file, format, delimiter, mapping}) =>
                this.participantService.importMapped(raceId, file, format, delimiter, mapping).pipe(
                    map(result => ParticipantActions.importParticipantsMappedSuccess({result})),
                    catchError(error =>
                        of(
                            ParticipantActions.importParticipantsMappedFailure({
                                error: extractErrorMessage(error, "Teilnehmer konnten nicht importiert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    importParticipantResultsMapped$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.importParticipantResultsMapped),
            mergeMap(({raceId, file, timeFormat, delimiter, mapping}) =>
                this.participantService.importResultsMapped(raceId, file, timeFormat, delimiter, mapping).pipe(
                    map(result => ParticipantActions.importParticipantResultsMappedSuccess({result})),
                    catchError(error =>
                        of(
                            ParticipantActions.importParticipantResultsMappedFailure({
                                error: extractErrorMessage(
                                    error,
                                    "Teilnehmerergebnisse konnten nicht importiert werden",
                                ),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    exportParticipantsCsv$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportParticipantsCsv),
            mergeMap(({raceId, filename}) =>
                this.participantService.exportCsv(raceId).pipe(
                    map(blob => ParticipantActions.exportParticipantsCsvSuccess({blob, filename})),
                    catchError(error =>
                        of(
                            ParticipantActions.exportParticipantsCsvFailure({
                                error: extractErrorMessage(error, "CSV konnte nicht exportiert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    exportParticipantResultsCsv$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportParticipantResultsCsv),
            mergeMap(({raceId, filename}) =>
                this.participantService.exportResultsCsv(raceId).pipe(
                    map(blob => ParticipantActions.exportParticipantResultsCsvSuccess({blob, filename})),
                    catchError(error =>
                        of(
                            ParticipantActions.exportParticipantResultsCsvFailure({
                                error: extractErrorMessage(error, "Ergebnis-CSV konnte nicht exportiert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    copyParticipants$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.copyParticipants),
            mergeMap(({request}) =>
                this.participantService.copyParticipants(request).pipe(
                    map(result => ParticipantActions.copyParticipantsSuccess({result})),
                    catchError(error =>
                        of(
                            ParticipantActions.copyParticipantsFailure({
                                error: extractErrorMessage(error, "Teilnehmer konnten nicht kopiert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    exportStartListPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportStartListPdf),
            mergeMap(({raceId}) =>
                this.participantService.exportStartListToPdf(raceId).pipe(
                    map(blob =>
                        ParticipantActions.exportStartListPdfSuccess({
                            blob,
                            filename: "startliste.pdf",
                        }),
                    ),
                    catchError(error =>
                        of(
                            ParticipantActions.exportStartListPdfFailure({
                                error: extractErrorMessage(error, "PDF konnte nicht exportiert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    exportStartListCsv$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportStartListCsv),
            mergeMap(({raceId, filename}) =>
                this.participantService.exportStartListCsv(raceId).pipe(
                    map(blob => ParticipantActions.exportStartListCsvSuccess({blob, filename})),
                    catchError(error =>
                        of(
                            ParticipantActions.exportStartListCsvFailure({
                                error: extractErrorMessage(error, "Startlisten-CSV konnte nicht exportiert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    // PDF Export Effects
    exportAllPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportAllPdf),
            mergeMap(({raceId}) =>
                this.participantService.exportAllToPdf(raceId).pipe(
                    map(blob =>
                        ParticipantActions.exportAllPdfSuccess({
                            blob,
                            filename: "gesamtwertung.pdf",
                        }),
                    ),
                    catchError(error =>
                        of(
                            ParticipantActions.exportAllPdfFailure({
                                error: extractErrorMessage(error, "PDF konnte nicht exportiert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    exportByGenderPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportByGenderPdf),
            mergeMap(({gender, raceId}) =>
                this.participantService.exportByGenderToPdf(gender, raceId).pipe(
                    map(blob =>
                        ParticipantActions.exportByGenderPdfSuccess({
                            blob,
                            filename: `wertung_${gender.toLowerCase()}.pdf`,
                        }),
                    ),
                    catchError(error =>
                        of(
                            ParticipantActions.exportByGenderPdfFailure({
                                error: extractErrorMessage(error, "PDF konnte nicht exportiert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    exportAllAgeGroupsPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportAllAgeGroupsPdf),
            mergeMap(({raceId}) =>
                this.participantService.exportAllAgeGroupsToPdf(raceId).pipe(
                    map(blob =>
                        ParticipantActions.exportAllAgeGroupsPdfSuccess({
                            blob,
                            filename: "wertung_altersklassen.pdf",
                        }),
                    ),
                    catchError(error =>
                        of(
                            ParticipantActions.exportAllAgeGroupsPdfFailure({
                                error: extractErrorMessage(error, "PDF konnte nicht exportiert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    exportAllByCategoryPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportAllByCategoryPdf),
            mergeMap(({raceId}) =>
                this.participantService.exportAllByCategoryToPdf(raceId).pipe(
                    map(blob =>
                        ParticipantActions.exportAllByCategoryPdfSuccess({
                            blob,
                            filename: "gesamtwertung_kategorien.pdf",
                        }),
                    ),
                    catchError(error =>
                        of(
                            ParticipantActions.exportAllByCategoryPdfFailure({
                                error: extractErrorMessage(error, "PDF konnte nicht exportiert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    exportByGenderByCategoryPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportByGenderByCategoryPdf),
            mergeMap(({gender, raceId}) =>
                this.participantService.exportByGenderByCategoryToPdf(gender, raceId).pipe(
                    map(blob =>
                        ParticipantActions.exportByGenderByCategoryPdfSuccess({
                            blob,
                            filename: `wertung_${gender.toLowerCase()}_kategorien.pdf`,
                        }),
                    ),
                    catchError(error =>
                        of(
                            ParticipantActions.exportByGenderByCategoryPdfFailure({
                                error: extractErrorMessage(error, "PDF konnte nicht exportiert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    exportAllAgeGroupsByCategoryPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ParticipantActions.exportAllAgeGroupsByCategoryPdf),
            mergeMap(({raceId}) =>
                this.participantService.exportAllAgeGroupsByCategoryToPdf(raceId).pipe(
                    map(blob =>
                        ParticipantActions.exportAllAgeGroupsByCategoryPdfSuccess({
                            blob,
                            filename: "wertung_altersklassen_kategorien.pdf",
                        }),
                    ),
                    catchError(error =>
                        of(
                            ParticipantActions.exportAllAgeGroupsByCategoryPdfFailure({
                                error: extractErrorMessage(error, "PDF konnte nicht exportiert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    // Auto-download the exported file (PDF or CSV) once the export succeeds
    downloadExportedFile$ = createEffect(
        () =>
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
                    ParticipantActions.exportParticipantResultsCsvSuccess,
                    ParticipantActions.exportStartListCsvSuccess,
                ),
                tap(({blob, filename}) => {
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.href = url;
                    link.download = filename;
                    link.click();
                    window.URL.revokeObjectURL(url);
                }),
            ),
        {dispatch: false},
    );
}
