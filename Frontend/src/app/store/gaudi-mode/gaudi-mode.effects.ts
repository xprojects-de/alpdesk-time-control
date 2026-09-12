import {inject, Injectable} from '@angular/core';
import {extractErrorMessage} from '../../utils/http-error.util';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
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
                        error: extractErrorMessage(error, 'Failed to load Gaudi-Modus instances')
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
                        error: extractErrorMessage(error, 'Failed to create Gaudi-Modus instance')
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
                        error: extractErrorMessage(error, 'Failed to update Gaudi-Modus instance')
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
                        error: extractErrorMessage(error, 'Failed to delete Gaudi-Modus instance')
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
                        error: extractErrorMessage(error, 'Failed to draw pairing')
                    })))
                )
            )
        )
    );

    loadPairing$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GaudiModeActions.loadPairing),
            mergeMap(({id}) =>
                this.gaudiModeService.getPairing(id).pipe(
                    map(pairing => GaudiModeActions.pairingSuccess({pairing})),
                    catchError(error => of(GaudiModeActions.pairingFailure({
                        error: extractErrorMessage(error, 'Failed to load pairing')
                    })))
                )
            )
        )
    );

    loadRanking$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GaudiModeActions.loadRanking),
            mergeMap(({id}) =>
                this.gaudiModeService.getRanking(id).pipe(
                    map(ranking => GaudiModeActions.loadRankingSuccess({ranking})),
                    catchError(error => of(GaudiModeActions.loadRankingFailure({
                        error: extractErrorMessage(error, 'Failed to load ranking')
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
                        error: extractErrorMessage(error, 'Failed to export PDF')
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
                        error: extractErrorMessage(error, 'Failed to export PDF')
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
                        error: extractErrorMessage(error, 'Failed to export PDF')
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
                GaudiModeActions.exportPdfAllAgeGroupsSuccess
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
