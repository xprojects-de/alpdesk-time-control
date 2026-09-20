import {Component, AfterViewInit, viewChild, OnDestroy, inject, effect, signal} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Store} from "@ngrx/store";
import {combineLatest, Observable, Subject} from "rxjs";
import {MatTableModule, MatTableDataSource} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSortModule, MatSort} from "@angular/material/sort";
import {MatPaginatorModule, MatPaginator} from "@angular/material/paginator";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AgeGroup} from "../../models/age-group.model";
import {Gender, GenderLabels} from "../../models/gender.model";
import * as AgeGroupActions from "../../store/age-group/age-group.actions";
import * as AgeGroupSelectors from "../../store/age-group/age-group.selectors";
import {AgeGroupDialogComponent} from "./age-group-dialog.component";
import {ConfirmDialogComponent} from "../shared/confirm-dialog/confirm-dialog.component";
import {takeUntil} from "rxjs/operators";
import {Actions, ofType} from "@ngrx/effects";

@Component({
    selector: "app-age-group-list",
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSnackBarModule,
        MatCardModule,
        MatTooltipModule,
        MatSortModule,
        MatPaginatorModule,
        MatSelectModule,
        MatFormFieldModule,
    ],
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>Altersgruppen</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <div class="season-bar">
                    <mat-form-field appearance="outline" class="season-select" subscriptSizing="dynamic">
                        <mat-label>Saison</mat-label>
                        <mat-select [value]="selectedSeason$ | async" (selectionChange)="onSeasonChange($event.value)">
                            @for (season of seasonOptions(); track season) {
                                <mat-option [value]="season">
                                    {{ season }}
                                    @if (season === (currentSeason$ | async)) {
                                        <span class="season-hint">(aktuell)</span>
                                    }
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>

                    @if (rolloverSource$ | async; as rolloverSource) {
                        @if ((ageGroups$ | async)?.length === 0) {
                            <button
                                mat-raised-button
                                color="accent"
                                (click)="copyFromSeason(rolloverSource)"
                                matTooltip="Übernimmt alle Altersgruppen der Saison {{
                                    rolloverSource
                                }} und verschiebt die Geburtsjahrgänge entsprechend"
                            >
                                <mat-icon>content_copy</mat-icon>
                                Aus Saison {{ rolloverSource }} übernehmen
                            </button>
                        }
                    }
                </div>

                @if ((ageGroups$ | async)?.length === 0 && (loading$ | async) === false) {
                    <div class="empty-season">
                        <mat-icon>info</mat-icon>
                        <span>
                            Für die Saison {{ selectedSeason$ | async }} sind keine Altersgruppen angelegt. Rennen
                            dieser Saison werden ohne Altersklasse ausgewertet, bis hier welche existieren.
                        </span>
                    </div>
                }

                <div class="header-actions">
                    <button mat-raised-button color="primary" (click)="openCreateDialog()">
                        <mat-icon>add</mat-icon>
                        Neue Altersgruppe
                    </button>
                    <button mat-raised-button (click)="refreshData()" matTooltip="Daten aktualisieren">
                        <mat-icon>refresh</mat-icon>
                        Aktualisieren
                    </button>
                </div>

                @if (loading$ | async) {
                    <div class="loading-container">
                        <mat-spinner diameter="30"></mat-spinner>
                    </div>
                }

                <div class="table-container">
                    <table
                        mat-table
                        [dataSource]="dataSource"
                        [trackBy]="trackById"
                        matSort
                        class="age-group-table"
                        [class.hidden]="loading$ | async"
                    >
                        <!-- ID Column -->
                        <ng-container matColumnDef="id">
                            <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>
                            <td mat-cell *matCellDef="let ageGroup">{{ ageGroup.id }}</td>
                        </ng-container>

                        <!-- Name Column -->
                        <ng-container matColumnDef="name">
                            <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
                            <td mat-cell *matCellDef="let ageGroup">
                                {{ ageGroup.name }}
                            </td>
                        </ng-container>

                        <!-- Gender Column -->
                        <ng-container matColumnDef="gender">
                            <th mat-header-cell *matHeaderCellDef mat-sort-header>Geschlecht</th>
                            <td mat-cell *matCellDef="let ageGroup">
                                {{ getGenderLabel(ageGroup.gender) }}
                            </td>
                        </ng-container>

                        <!-- Birth Year From Column -->
                        <ng-container matColumnDef="birthYearFrom">
                            <th mat-header-cell *matHeaderCellDef mat-sort-header>Geburtsjahr von</th>
                            <td mat-cell *matCellDef="let ageGroup">
                                {{ ageGroup.birthYearFrom }}
                            </td>
                        </ng-container>

                        <!-- Birth Year To Column -->
                        <ng-container matColumnDef="birthYearTo">
                            <th mat-header-cell *matHeaderCellDef mat-sort-header>Geburtsjahr bis</th>
                            <td mat-cell *matCellDef="let ageGroup">
                                {{ ageGroup.birthYearTo }}
                            </td>
                        </ng-container>

                        <!-- Actions Column -->
                        <ng-container matColumnDef="actions">
                            <th mat-header-cell *matHeaderCellDef>Aktionen</th>
                            <td mat-cell *matCellDef="let ageGroup">
                                <button mat-icon-button (click)="openEditDialog(ageGroup)" matTooltip="Bearbeiten">
                                    <mat-icon>edit</mat-icon>
                                </button>
                                <button
                                    mat-icon-button
                                    color="warn"
                                    (click)="deleteAgeGroup(ageGroup)"
                                    matTooltip="Löschen"
                                >
                                    <mat-icon>delete</mat-icon>
                                </button>
                            </td>
                        </ng-container>

                        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
                    </table>
                </div>
                <mat-paginator [pageSizeOptions]="[10, 25, 50, 100]" showFirstLastButtons></mat-paginator>
            </mat-card-content>
        </mat-card>
    `,
    styles: [
        `
            .season-bar {
                margin-top: 20px;
                display: flex;
                align-items: center;
                gap: 16px;
                flex-wrap: wrap;
            }

            .season-select {
                width: 160px;
            }

            .season-hint {
                opacity: 0.6;
                font-size: 0.85em;
            }

            .empty-season mat-icon {
                flex-shrink: 0;
            }

            .empty-season {
                margin-top: 16px;
                padding: 12px 16px;
                display: flex;
                /* flex-start, not center: the text wraps to several lines on a narrow window, and
                   a vertically centred icon then sits next to the middle line instead of the
                   first one. */
                align-items: flex-start;
                gap: 12px;
                border-radius: 4px;
                background: rgba(255, 171, 0, 0.12);
            }

            .header-actions {
                margin-top: 20px;
                margin-bottom: 20px;
                display: flex;
                gap: 10px;
            }

            .loading-container {
                display: flex;
                justify-content: center;
                padding: 8px;
            }

            .age-group-table {
                width: 100%;
            }

            .hidden {
                display: none;
            }

            mat-card {
                margin: 20px;
            }

            th.mat-sort-header-sorted {
                color: black;
            }
        `,
    ],
})
export class AgeGroupListComponent implements AfterViewInit, OnDestroy {
    private store = inject(Store);
    private dialog = inject(MatDialog);
    private snackBar = inject(MatSnackBar);
    private actions$ = inject(Actions);
    private destroy$ = new Subject<void>();

    ageGroups$: Observable<AgeGroup[]>;
    loading$: Observable<boolean>;
    selectedSeason$: Observable<number | null>;
    currentSeason$: Observable<number | null>;
    rolloverSource$: Observable<number | null>;
    // The seasons to offer: everything already configured, plus the current one even when it has
    // nothing yet - otherwise there would be no way to select the season you want to set up.
    seasonOptions = signal<number[]>([]);
    private selectedSeason: number | null = null;
    displayedColumns = ["id", "name", "gender", "birthYearFrom", "birthYearTo", "actions"];
    dataSource = new MatTableDataSource<AgeGroup>([]);
    trackById = (_index: number, ageGroup: AgeGroup) => ageGroup.id;

    sort = viewChild.required(MatSort);
    paginator = viewChild.required(MatPaginator);

    constructor() {
        this.ageGroups$ = this.store.select(AgeGroupSelectors.selectAllAgeGroups);
        this.loading$ = this.store.select(AgeGroupSelectors.selectAgeGroupLoading);
        this.selectedSeason$ = this.store.select(AgeGroupSelectors.selectSelectedSeason);
        this.currentSeason$ = this.store.select(AgeGroupSelectors.selectCurrentSeason);
        this.rolloverSource$ = this.store.select(AgeGroupSelectors.selectRolloverSourceSeason);

        combineLatest([
            this.store.select(AgeGroupSelectors.selectAgeGroupSeasons),
            // Auch Saisons mit Rennen, aber ohne Altersgruppen: genau die werden "ohne
            // Altersklasse" ausgewertet, und genau die muss man auswählen können, um das zu
            // beheben. Nach einem Upgrade auf saisonbezogene Altersklassen ist jede
            // Vergangenheits-Saison in diesem Zustand.
            this.store.select(AgeGroupSelectors.selectSeasonsWithRaces),
            this.currentSeason$,
            this.selectedSeason$,
        ])
            .pipe(takeUntil(this.destroy$))
            .subscribe(([seasons, seasonsWithRaces, currentSeason, selectedSeason]) => {
                const options = new Set([...seasons, ...seasonsWithRaces]);
                if (currentSeason != null) {
                    options.add(currentSeason);
                }
                // A season the operator explicitly navigated to stays selectable even after its
                // last group was deleted - otherwise the select would clear itself mid-edit.
                if (selectedSeason != null) {
                    options.add(selectedSeason);
                }
                // Always offer one season beyond the furthest one that exists, so a new season is
                // reachable before anything is configured for it - and stays reachable once it is:
                // without this, setting up next year would make the year after that unselectable
                // until the calendar caught up.
                const furthest = Math.max(...options);
                if (Number.isFinite(furthest)) {
                    options.add(furthest + 1);
                }
                this.seasonOptions.set([...options].sort((a, b) => b - a));
            });

        // Reload whenever the selected season changes - the table only ever shows one season.
        this.selectedSeason$.pipe(takeUntil(this.destroy$)).subscribe(season => {
            this.selectedSeason = season;
            if (season != null) {
                this.store.dispatch(AgeGroupActions.loadAgeGroups({season}));
            }
        });

        this.actions$
            .pipe(ofType(AgeGroupActions.copySeasonSuccess), takeUntil(this.destroy$))
            .subscribe(({toSeason, ageGroups}) => {
                this.snackBar.open(
                    `${ageGroups.length} Altersgruppen nach Saison ${toSeason} übernommen - bitte Jahrgänge prüfen`,
                    "OK",
                    {duration: 6000},
                );
            });
        this.actions$.pipe(ofType(AgeGroupActions.copySeasonFailure), takeUntil(this.destroy$)).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Übernehmen der Saison: ${error}`, "OK", {duration: 5000});
        });

        this.actions$.pipe(ofType(AgeGroupActions.createAgeGroupSuccess), takeUntil(this.destroy$)).subscribe(() => {
            this.snackBar.open("Altersgruppe erfolgreich erstellt", "OK", {duration: 3000});
        });
        this.actions$
            .pipe(ofType(AgeGroupActions.createAgeGroupFailure), takeUntil(this.destroy$))
            .subscribe(({error}) => {
                this.snackBar.open(`FEHLER beim Erstellen der Altersgruppe: ${error}`, "OK", {duration: 5000});
            });

        this.actions$.pipe(ofType(AgeGroupActions.updateAgeGroupSuccess), takeUntil(this.destroy$)).subscribe(() => {
            this.snackBar.open("Altersgruppe erfolgreich aktualisiert", "OK", {duration: 3000});
        });
        this.actions$
            .pipe(ofType(AgeGroupActions.updateAgeGroupFailure), takeUntil(this.destroy$))
            .subscribe(({error}) => {
                this.snackBar.open(`FEHLER beim Aktualisieren der Altersgruppe: ${error}`, "OK", {duration: 5000});
            });

        this.actions$.pipe(ofType(AgeGroupActions.deleteAgeGroupSuccess), takeUntil(this.destroy$)).subscribe(() => {
            this.snackBar.open("Altersgruppe erfolgreich gelöscht", "OK", {duration: 3000});
        });
        this.actions$
            .pipe(ofType(AgeGroupActions.deleteAgeGroupFailure), takeUntil(this.destroy$))
            .subscribe(({error}) => {
                this.snackBar.open(`FEHLER beim Löschen der Altersgruppe: ${error}`, "OK", {duration: 5000});
            });

        // Assigns as soon as the signal reports the instance - no delay needed, and comparing
        // instances (rather than a "done" flag) also re-attaches should the table ever be
        // recreated.
        effect(() => {
            const sortInstance = this.sort();
            if (sortInstance && this.dataSource.sort !== sortInstance) {
                this.dataSource.sort = sortInstance;
            }
        });

        effect(() => {
            const paginatorInstance = this.paginator();
            if (paginatorInstance && this.dataSource.paginator !== paginatorInstance) {
                this.dataSource.paginator = paginatorInstance;
            }
        });
    }

    ngAfterViewInit(): void {
        // The season list drives everything else: its success action picks the default season,
        // which in turn triggers the age-group load above.
        this.store.dispatch(AgeGroupActions.loadSeasons());
        this.ageGroups$.pipe(takeUntil(this.destroy$)).subscribe(ageGroups => {
            this.dataSource.data = ageGroups;
        });
    }

    onSeasonChange(season: number): void {
        this.store.dispatch(AgeGroupActions.selectSeason({season}));
    }

    copyFromSeason(fromSeason: number): void {
        const toSeason = this.selectedSeason;
        if (toSeason == null) {
            return;
        }
        // Die Verschiebung kann negativ sein: eine vergangene Saison wird aus einer späteren
        // aufgefüllt (nach dem Upgrade auf saisonbezogene Altersklassen der Normalfall), dann
        // wandern die Jahrgänge zurück statt vor.
        const shift = toSeason - fromSeason;
        const years = Math.abs(shift) === 1 ? "1 Jahr" : `${Math.abs(shift)} Jahre`;
        const direction = shift > 0 ? "nach vorne" : "zurück";
        this.dialog
            .open(ConfirmDialogComponent, {
                width: "520px",
                data: {
                    message:
                        `Alle Altersgruppen der Saison ${fromSeason} nach ${toSeason} übernehmen? ` +
                        `Die Geburtsjahrgänge werden dabei um ${years} ${direction} verschoben ` +
                        `(aus "U14 2013-2014" wird "U14 ${2013 + shift}-${2014 + shift}"). ` +
                        `Feste Jahrgangsklassen musst du danach von Hand korrigieren.`,
                    confirmLabel: "Übernehmen",
                },
            })
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(confirmed => {
                if (confirmed) {
                    this.store.dispatch(AgeGroupActions.copySeason({fromSeason, toSeason}));
                }
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    getGenderLabel(gender: Gender): string {
        return GenderLabels[gender] || gender;
    }

    openCreateDialog(): void {
        const dialogRef = this.dialog.open(AgeGroupDialogComponent, {
            width: "500px",
            data: {ageGroup: null, seasonYear: this.selectedSeason ?? new Date().getFullYear()},
        });

        dialogRef
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
                if (result) {
                    this.store.dispatch(AgeGroupActions.createAgeGroup({ageGroup: result}));
                }
            });
    }

    openEditDialog(ageGroup: AgeGroup): void {
        const dialogRef = this.dialog.open(AgeGroupDialogComponent, {
            width: "500px",
            data: {ageGroup, seasonYear: ageGroup.seasonYear},
        });

        dialogRef
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
                if (result) {
                    this.store.dispatch(
                        AgeGroupActions.updateAgeGroup({
                            id: ageGroup.id,
                            ageGroup: result,
                        }),
                    );
                }
            });
    }

    deleteAgeGroup(ageGroup: AgeGroup): void {
        this.dialog
            .open(ConfirmDialogComponent, {
                width: "450px",
                data: {
                    message: `Möchten Sie die Altersgruppe "${ageGroup.name}" wirklich löschen?`,
                    confirmLabel: "Löschen",
                    confirmColor: "warn",
                },
            })
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(confirmed => {
                if (confirmed) {
                    this.store.dispatch(AgeGroupActions.deleteAgeGroup({id: ageGroup.id}));
                }
            });
    }

    refreshData(): void {
        this.store.dispatch(AgeGroupActions.loadSeasons());
        if (this.selectedSeason != null) {
            this.store.dispatch(AgeGroupActions.loadAgeGroups({season: this.selectedSeason}));
        }
        this.snackBar.open("Daten werden aktualisiert...", "OK", {
            duration: 2000,
        });
    }
}
