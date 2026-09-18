import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {interval, of} from 'rxjs';
import {catchError, map, mergeMap, switchMap, takeUntil} from 'rxjs/operators';
import {HealthService} from '../../services/health.service';
import * as BackendHealthActions from './backend-health.actions';

@Injectable()
export class BackendHealthEffects {
    private actions$ = inject(Actions);
    private healthService = inject(HealthService);

    // Shorter than the timing-device connection poll (measurement.effects.ts, 10s) since a missing
    // backend is more urgent to notice - the 2-consecutive-failures debounce in the reducer keeps
    // this from being noisy despite the tighter interval. Still essentially free for the backend
    // to answer, so there's no real cost to polling this often.
    startBackendHealthPolling$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BackendHealthActions.startBackendHealthPolling),
            switchMap(() =>
                interval(5000).pipe(
                    map(() => BackendHealthActions.checkBackendHealth()),
                    takeUntil(this.actions$.pipe(ofType(BackendHealthActions.stopBackendHealthPolling)))
                )
            )
        )
    );

    checkBackendHealth$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BackendHealthActions.checkBackendHealth),
            mergeMap(() =>
                this.healthService.ping().pipe(
                    map(() => BackendHealthActions.checkBackendHealthSuccess()),
                    catchError(() => of(BackendHealthActions.checkBackendHealthFailure()))
                )
            )
        )
    );
}
