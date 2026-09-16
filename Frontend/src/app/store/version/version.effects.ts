import {inject, Injectable} from '@angular/core';
import {extractErrorMessage} from '../../utils/http-error.util';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {VersionService} from '../../services/version.service';
import * as VersionActions from './version.actions';

@Injectable()
export class VersionEffects {
    private actions$ = inject(Actions);
    private versionService = inject(VersionService);

    loadVersion$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VersionActions.loadVersion),
            mergeMap(() =>
                this.versionService.get().pipe(
                    map(version => VersionActions.loadVersionSuccess({version})),
                    catchError(error => of(VersionActions.loadVersionFailure({
                        error: extractErrorMessage(error, 'Version konnte nicht geladen werden')
                    })))
                )
            )
        )
    );
}
