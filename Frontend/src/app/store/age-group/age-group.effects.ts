import {inject, Injectable} from "@angular/core";
import {extractErrorMessage} from "../../utils/http-error.util";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {of} from "rxjs";
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";
import {AgeGroupService} from "../../services/age-group.service";
import {STANDARD_VARIANT} from "../../models/age-group.model";
import * as AgeGroupActions from "./age-group.actions";

@Injectable()
export class AgeGroupEffects {
    private actions$ = inject(Actions);
    private ageGroupService = inject(AgeGroupService);

    loadAgeGroups$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AgeGroupActions.loadAgeGroups),
            mergeMap(({season, variant}) =>
                this.ageGroupService.getAll(season, variant).pipe(
                    map(ageGroups =>
                        AgeGroupActions.loadAgeGroupsSuccess({ageGroups, season, variant: variant ?? STANDARD_VARIANT}),
                    ),
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
                        // seasonsWithRaces defensively: in the dev setup `ng serve` talks to a
                        // separately running backend, which can be older than the frontend.
                        AgeGroupActions.loadSeasonsSuccess({
                            seasons: seasons ?? [],
                            seasonsWithRaces: seasonsWithRaces ?? [],
                            currentSeason,
                        }),
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
            mergeMap(({fromSeason, fromVariant, toSeason, toVariant}) =>
                this.ageGroupService.copySeason({fromSeason, fromVariant, toSeason, toVariant}).pipe(
                    map(ageGroups => AgeGroupActions.copySeasonSuccess({toSeason, toVariant, ageGroups})),
                    catchError(error =>
                        of(
                            AgeGroupActions.copySeasonFailure({
                                error: extractErrorMessage(error, "Altersgruppen konnten nicht übernommen werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    loadVariants$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AgeGroupActions.loadVariants),
            mergeMap(({season}) =>
                this.ageGroupService.getVariants(season).pipe(
                    map(({variants}) => AgeGroupActions.loadVariantsSuccess({season, variants})),
                    catchError(error =>
                        of(
                            AgeGroupActions.loadVariantsFailure({
                                error: extractErrorMessage(error, "Varianten konnten nicht geladen werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    deleteVariant$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AgeGroupActions.deleteVariant),
            mergeMap(({season, variant}) =>
                this.ageGroupService.deleteVariant(season, variant).pipe(
                    map(() => AgeGroupActions.deleteVariantSuccess({season, variant})),
                    catchError(error =>
                        of(
                            AgeGroupActions.deleteVariantFailure({
                                error: extractErrorMessage(error, "Variante konnte nicht gelöscht werden"),
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    // switchMap: while the date is being typed, only the answer for the latest one matters.
    loadVariantsForDate$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AgeGroupActions.loadVariantsForDate),
            switchMap(({date}) =>
                this.ageGroupService.getVariantsForDate(date).pipe(
                    map(variants => AgeGroupActions.loadVariantsForDateSuccess({date, variants})),
                    catchError(error =>
                        of(
                            AgeGroupActions.loadVariantsForDateFailure({
                                error: extractErrorMessage(error, "Varianten konnten nicht geladen werden"),
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
