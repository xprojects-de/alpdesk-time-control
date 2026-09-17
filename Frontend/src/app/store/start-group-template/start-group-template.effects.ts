import {inject, Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {extractErrorMessage} from '../../utils/http-error.util';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {StartGroupTemplateService} from '../../services/start-group-template.service';
import * as StartGroupTemplateActions from './start-group-template.actions';

@Injectable()
export class StartGroupTemplateEffects {
    private actions$ = inject(Actions);
    private startGroupTemplateService = inject(StartGroupTemplateService);

    loadStartGroupTemplates$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StartGroupTemplateActions.loadStartGroupTemplates),
            mergeMap(() =>
                this.startGroupTemplateService.getAll().pipe(
                    map(templates => StartGroupTemplateActions.loadStartGroupTemplatesSuccess({templates})),
                    catchError(error => of(StartGroupTemplateActions.loadStartGroupTemplatesFailure({
                        error: extractErrorMessage(error, 'Startgruppen konnten nicht geladen werden')
                    })))
                )
            )
        )
    );

    createStartGroupTemplate$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StartGroupTemplateActions.createStartGroupTemplate),
            mergeMap(({template}) =>
                this.startGroupTemplateService.create(template).pipe(
                    map(created => StartGroupTemplateActions.createStartGroupTemplateSuccess({template: created})),
                    catchError(error => of(StartGroupTemplateActions.createStartGroupTemplateFailure({
                        error: extractErrorMessage(error, 'Startgruppe konnte nicht erstellt werden')
                    })))
                )
            )
        )
    );

    updateStartGroupTemplate$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StartGroupTemplateActions.updateStartGroupTemplate),
            mergeMap(({id, template}) =>
                this.startGroupTemplateService.update(id, template).pipe(
                    map(updated => StartGroupTemplateActions.updateStartGroupTemplateSuccess({template: updated})),
                    catchError(error => of(StartGroupTemplateActions.updateStartGroupTemplateFailure({
                        error: extractErrorMessage(error, 'Startgruppe konnte nicht aktualisiert werden')
                    })))
                )
            )
        )
    );

    deleteStartGroupTemplate$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StartGroupTemplateActions.deleteStartGroupTemplate),
            mergeMap(({id, force}) =>
                this.startGroupTemplateService.delete(id, force).pipe(
                    map(() => StartGroupTemplateActions.deleteStartGroupTemplateSuccess({id})),
                    catchError(error => {
                        if (error instanceof HttpErrorResponse && error.status === 409) {
                            return of(StartGroupTemplateActions.deleteStartGroupTemplateConflict({
                                id,
                                message: extractErrorMessage(error, 'Startgruppe konnte nicht gelöscht werden')
                            }));
                        }
                        return of(StartGroupTemplateActions.deleteStartGroupTemplateFailure({
                            error: extractErrorMessage(error, 'Startgruppe konnte nicht gelöscht werden')
                        }));
                    })
                )
            )
        )
    );
}
