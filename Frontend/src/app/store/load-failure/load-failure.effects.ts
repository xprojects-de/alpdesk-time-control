import {inject, Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {tap} from "rxjs/operators";

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

/**
 * Surfaces failed *read* requests, which no component listened to before: every `load*Failure`
 * only flipped the loading flag off and wrote `error` into state that nothing renders. On a
 * frozen list that is the worst possible outcome during a race - the operator reads a stale
 * snapshot ("nobody has finished yet") off a screen that looks perfectly healthy.
 *
 * Mutations (create/update/delete/import/export) keep their per-component snackbars: those are
 * tied to a button the operator just pressed and carry action-specific wording.
 *
 * Deliberately excluded because their own screen already reports them, and listing them here
 * would show two snackbars for one failure:
 * - SettingsActions.loadTimingProviderFailure (settings.component.ts)
 * - PointsScaleActions.loadPointsScalesFailure (gaudi-mode-dialog / points-scale-manager-dialog)
 * - GaudiModeActions.loadRankingFailure, RaceActions.loadLiveLinksFailure (their own views)
 * Backend-health failures are excluded too - they are expected while the backend is down and are
 * already shown as the permanent offline banner in the dashboard.
 */
@Injectable()
export class LoadFailureEffects {
    private actions$ = inject(Actions);
    private snackBar = inject(MatSnackBar);

    loadFailure$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(
                    AgeGroupActions.loadAgeGroupsFailure,
                    CategoryActions.loadCategoriesFailure,
                    GaudiModeActions.loadGaudiModesFailure,
                    MeasurementActions.loadMeasurementsFailure,
                    MeasurementActions.loadAutoAssignStatusFailure,
                    MeasurementActions.loadDeviceStatusFailure,
                    MeasurementActions.loadScheduledImportStatusFailure,
                    ParticipantActions.loadParticipantsFailure,
                    PersonActions.loadPersonsFailure,
                    RaceActions.loadRacesFailure,
                    RaceMeasurementActions.loadRaceMeasurementsFailure,
                    StartGroupTemplateActions.loadStartGroupTemplatesFailure,
                    TeamActions.loadTeamsFailure,
                    VersionActions.loadVersionFailure,
                ),
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
