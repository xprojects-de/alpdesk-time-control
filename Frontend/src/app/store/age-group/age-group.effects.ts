import {inject, Injectable} from "@angular/core";
import {extractErrorMessage} from "../../utils/http-error.util";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {of} from "rxjs";
import {catchError, map, mergeMap} from "rxjs/operators";
import {AgeGroupService} from "../../services/age-group.service";
import * as AgeGroupActions from "./age-group.actions";

@Injectable()
export class AgeGroupEffects {
    private actions$ = inject(Actions);
    private ageGroupService = inject(AgeGroupService);

    loadAgeGroups$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AgeGroupActions.loadAgeGroups),
            mergeMap(({season}) =>
                this.ageGroupService.getAll(season).pipe(
                    map(ageGroups => AgeGroupActions.loadAgeGroupsSuccess({ageGroups})),
                    catchError(error =>
                        of(
                            AgeGroupActions.loadAgeGroupsFailure({
                                error: extractErrorMessage(error, "Altersgruppen konnten nicht geladen werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    createAgeGroup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AgeGroupActions.createAgeGroup),
            mergeMap(({ageGroup}) =>
                this.ageGroupService.create(ageGroup).pipe(
                    map(created => AgeGroupActions.createAgeGroupSuccess({ageGroup: created})),
                    catchError(error =>
                        of(
                            AgeGroupActions.createAgeGroupFailure({
                                error: extractErrorMessage(error, "Altersgruppe konnte nicht erstellt werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    updateAgeGroup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AgeGroupActions.updateAgeGroup),
            mergeMap(({id, ageGroup}) =>
                this.ageGroupService.update(id, ageGroup).pipe(
                    map(updated => AgeGroupActions.updateAgeGroupSuccess({ageGroup: updated})),
                    catchError(error =>
                        of(
                            AgeGroupActions.updateAgeGroupFailure({
                                error: extractErrorMessage(error, "Altersgruppe konnte nicht aktualisiert werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    loadSeasons$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AgeGroupActions.loadSeasons),
            mergeMap(() =>
                this.ageGroupService.getSeasons().pipe(
                    map(({seasons, seasonsWithRaces, currentSeason}) =>
                        AgeGroupActions.loadSeasonsSuccess({seasons, seasonsWithRaces, currentSeason}),
                    ),
                    catchError(error =>
                        of(
                            AgeGroupActions.loadSeasonsFailure({
                                error: extractErrorMessage(error, "Saisons konnten nicht geladen werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    copySeason$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AgeGroupActions.copySeason),
            mergeMap(({fromSeason, toSeason}) =>
                this.ageGroupService.copySeason({fromSeason, toSeason}).pipe(
                    map(ageGroups => AgeGroupActions.copySeasonSuccess({toSeason, ageGroups})),
                    catchError(error =>
                        of(
                            AgeGroupActions.copySeasonFailure({
                                error: extractErrorMessage(error, "Saison konnte nicht übernommen werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    deleteAgeGroup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AgeGroupActions.deleteAgeGroup),
            mergeMap(({id}) =>
                this.ageGroupService.delete(id).pipe(
                    map(() => AgeGroupActions.deleteAgeGroupSuccess({id})),
                    catchError(error =>
                        of(
                            AgeGroupActions.deleteAgeGroupFailure({
                                error: extractErrorMessage(error, "Altersgruppe konnte nicht gelöscht werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );
}
