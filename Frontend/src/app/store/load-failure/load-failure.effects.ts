import {inject, Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {filter, tap} from "rxjs/operators";

import * as AgeGroupActions from "../age-group/age-group.actions";
import * as CategoryActions from "../category/category.actions";
import * as GaudiModeActions from "../gaudi-mode/gaudi-mode.actions";
import * as MeasurementActions from "../measurement/measurement.actions";
import * as ParticipantActions from "../participant/participant.actions";
import * as PersonActions from "../person/person.actions";
import * as RaceActions from "../race/race.actions";
import * as RaceMeasurementActions from "../race-measurement/race-measurement.actions";
import * as StartGroupTemplateActions from "../start-group-template/start-group-template.actions";
import * as TeamActions from "../team/team.actions";
import * as VersionActions from "../version/version.actions";

/** A repeated failure (the 2s measurement poll against a dead backend) is shown at most this often. */
const REPEAT_SUPPRESSION_MS = 15000;

/**
 * Surfaces failed *read* requests, which no component listened to before: every `load*Failure`
 * only flipped the loading flag off and wrote `error` into state that nothing renders. On a
 * frozen list that is the worst possible outcome during a race - the operator reads a stale
 * snapshot ("nobody has finished yet") off a screen that looks perfectly healthy.
 *
 * Mutations (create/update/delete/import/export) keep their per-component snackbars: those are
 * tied to a button the operator just pressed and carry action-specific wording.
 *
 * Cyclic status polls are excluded as well - the timing-device connection (checked every 10s), the
 * auto-assign status and the scheduled-import status. Their state is what the icon in the toolbar
 * and the auto-assign panel show; a snackbar every few seconds for a device that is simply not
 * plugged in would bury every other message and drive the operator up the wall.
 *
 * Deliberately excluded because their own screen already reports them, and listing them here
 * would show two snackbars for one failure:
 * - SettingsActions.loadTimingProviderFailure (settings.component.ts)
 * - SettingsActions.loadSeasonFailure (season-settings.component.ts)
 * - PointsScaleActions.loadPointsScalesFailure (gaudi-mode-dialog / points-scale-manager-dialog)
 * - GaudiModeActions.loadRankingFailure, RaceActions.loadLiveLinksFailure (their own views)
 * Backend-health failures are excluded too - they are expected while the backend is down and are
 * already shown as the permanent offline banner in the dashboard.
 */
@Injectable()
export class LoadFailureEffects {
    private actions$ = inject(Actions);
    private snackBar = inject(MatSnackBar);
    /** Last time each message was shown, keyed by action type + message - see the filter below. */
    private readonly lastShownAt = new Map<string, number>();

    loadFailure$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(
                    AgeGroupActions.loadAgeGroupsFailure,
                    AgeGroupActions.loadSeasonsFailure,
                    CategoryActions.loadCategoriesFailure,
                    GaudiModeActions.loadGaudiModesFailure,
                    MeasurementActions.loadMeasurementsFailure,
                    ParticipantActions.loadParticipantsFailure,
                    PersonActions.loadPersonsFailure,
                    RaceActions.loadRacesFailure,
                    RaceMeasurementActions.loadRaceMeasurementsFailure,
                    StartGroupTemplateActions.loadStartGroupTemplatesFailure,
                    TeamActions.loadTeamsFailure,
                    VersionActions.loadVersionFailure,
                ),
                // The measurement list reloads every 2s during a race: without this, a backend that
                // is down would queue a new snackbar on every tick. The same message is therefore
                // shown at most once per REPEAT_SUPPRESSION_MS - long enough to stay readable, short
                // enough that a failure the operator just caused is never swallowed.
                filter(({type, error}) => {
                    const key = `${type}|${error}`;
                    const now = Date.now();
                    const last = this.lastShownAt.get(key) ?? 0;
                    if (now - last < REPEAT_SUPPRESSION_MS) {
                        return false;
                    }
                    this.lastShownAt.set(key, now);
                    return true;
                }),
                tap(({error}) => {
                    this.snackBar.open(`FEHLER beim Laden: ${error}`, "OK", {
                        duration: 10000,
                        panelClass: "error-snackbar",
                    });
                }),
            ),
        {dispatch: false},
    );
}
