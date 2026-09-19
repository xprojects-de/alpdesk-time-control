import {inject, Injectable} from '@angular/core';
import {extractErrorMessage} from '../../utils/http-error.util';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {forkJoin, of} from 'rxjs';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {GaudiModeService} from '../../services/gaudi-mode.service';
import * as GaudiModeActions from './gaudi-mode.actions';

@Injectable()
export class GaudiModeEffects {
    private actions$ = inject(Actions);
    private gaudiModeService = inject(GaudiModeService);

    loadGaudiModes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GaudiModeActions.loadGaudiModes),
            mergeMap(({raceId}) =>
                this.gaudiModeService.getAll(raceId).pipe(
                    map(gaudiModes => GaudiModeActions.loadGaudiModesSuccess({gaudiModes})),
                    catchError(error => of(GaudiModeActions.loadGaudiModesFailure({
                        error: extractErrorMessage(error, 'Gaudi-Modus-Instanzen konnten nicht geladen werden')
                    })))
                )
            )
        )
    );

    createGaudiMode$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GaudiModeActions.createGaudiMode),
            mergeMap(({gaudiMode}) =>
                this.gaudiModeService.create(gaudiMode).pipe(
                    map(created => GaudiModeActions.createGaudiModeSuccess({gaudiMode: created})),
                    catchError(error => of(GaudiModeActions.createGaudiModeFailure({
                        error: extractErrorMessage(error, 'Gaudi-Modus-Instanz konnte nicht erstellt werden')
                    })))
                )
            )
        )
    );

    updateGaudiMode$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GaudiModeActions.updateGaudiMode),
            mergeMap(({id, gaudiMode}) =>
                this.gaudiModeService.update(id, gaudiMode).pipe(
                    map(updated => GaudiModeActions.updateGaudiModeSuccess({gaudiMode: updated})),
                    catchError(error => of(GaudiModeActions.updateGaudiModeFailure({
                        error: extractErrorMessage(error, 'Gaudi-Modus-Instanz konnte nicht aktualisiert werden')
                    })))
                )
            )
        )
    );

    deleteGaudiMode$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GaudiModeActions.deleteGaudiMode),
            mergeMap(({id}) =>
                this.gaudiModeService.delete(id).pipe(
                    map(() => GaudiModeActions.deleteGaudiModeSuccess({id})),
                    catchError(error => of(GaudiModeActions.deleteGaudiModeFailure({
                        error: extractErrorMessage(error, 'Gaudi-Modus-Instanz konnte nicht gelöscht werden')
                    })))
                )
            )
        )
    );

    drawPairing$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GaudiModeActions.drawPairing),
            mergeMap(({id}) =>
                this.gaudiModeService.draw(id).pipe(
                    map(pairing => GaudiModeActions.pairingSuccess({pairing})),
                    catchError(error => of(GaudiModeActions.pairingFailure({
                        error: extractErrorMessage(error, 'Los-Ziehung konnte nicht durchgeführt werden')
                    })))
                )
            )
        )
    );

    loadPairing$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GaudiModeActions.loadPairing),
            // switchMap: switching to another Gaudi-Modus cancels the previous request, so a slow
            // response for mode A can't land in mode B's detail view.
            switchMap(({id}) =>
                this.gaudiModeService.getPairing(id).pipe(
                    map(pairing => GaudiModeActions.pairingSuccess({pairing})),
                    catchError(error => of(GaudiModeActions.pairingFailure({
                        error: extractErrorMessage(error, 'Paarung konnte nicht geladen werden')
                    })))
                )
            )
        )
    );

    loadRanking$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GaudiModeActions.loadRanking),
            // switchMap: switching to another Gaudi-Modus cancels the previous request, so a slow
            // response for mode A can't land in mode B's detail view.
            switchMap(({id}) =>
                forkJoin({
                    ranking: this.gaudiModeService.getRanking(id),
                    notRanked: this.gaudiModeService.getNotRanked(id),
                }).pipe(
                    map(({ranking, notRanked}) => GaudiModeActions.loadRankingSuccess({ranking, notRanked})),
                    catchError(error => of(GaudiModeActions.loadRankingFailure({
                        error: extractErrorMessage(error, 'Rangliste konnte nicht geladen werden')
                    })))
                )
            )
        )
    );

    exportPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GaudiModeActions.exportPdf),
            mergeMap(({id, filename}) =>
                this.gaudiModeService.exportPdf(id).pipe(
                    map(blob => GaudiModeActions.exportPdfSuccess({blob, filename})),
                    catchError(error => of(GaudiModeActions.exportPdfFailure({
                        error: extractErrorMessage(error, 'PDF konnte nicht exportiert werden')
                    })))
                )
            )
        )
    );

    exportPdfByGender$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GaudiModeActions.exportPdfByGender),
            mergeMap(({id, gender, filename}) =>
                this.gaudiModeService.exportPdfByGender(id, gender).pipe(
                    map(blob => GaudiModeActions.exportPdfByGenderSuccess({blob, filename})),
                    catchError(error => of(GaudiModeActions.exportPdfByGenderFailure({
                        error: extractErrorMessage(error, 'PDF konnte nicht exportiert werden')
                    })))
                )
            )
        )
    );

    exportPdfAllAgeGroups$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GaudiModeActions.exportPdfAllAgeGroups),
            mergeMap(({id, filename}) =>
                this.gaudiModeService.exportPdfAllAgeGroups(id).pipe(
                    map(blob => GaudiModeActions.exportPdfAllAgeGroupsSuccess({blob, filename})),
                    catchError(error => of(GaudiModeActions.exportPdfAllAgeGroupsFailure({
                        error: extractErrorMessage(error, 'PDF konnte nicht exportiert werden')
                    })))
                )
            )
        )
    );

    exportCsv$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GaudiModeActions.exportCsv),
            mergeMap(({id, variant, filename}) =>
                this.gaudiModeService.exportCsv(id, variant).pipe(
                    map(blob => GaudiModeActions.exportCsvSuccess({blob, filename})),
                    catchError(error => of(GaudiModeActions.exportCsvFailure({
                        error: extractErrorMessage(error, 'CSV konnte nicht exportiert werden')
                    })))
                )
            )
        )
    );

    downloadPdf$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                GaudiModeActions.exportPdfSuccess,
                GaudiModeActions.exportPdfByGenderSuccess,
                GaudiModeActions.exportPdfAllAgeGroupsSuccess,
                GaudiModeActions.exportCsvSuccess
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
