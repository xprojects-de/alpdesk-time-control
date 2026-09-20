import {Component, AfterViewInit, viewChild, OnDestroy, inject, effect, signal} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Store} from "@ngrx/store";
import {Observable, Subject} from "rxjs";
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
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {Team} from "../../models/team.model";
import * as TeamActions from "../../store/team/team.actions";
import * as TeamSelectors from "../../store/team/team.selectors";
import {TeamDialogComponent} from "./team-dialog.component";
import {ConfirmDialogComponent} from "../shared/confirm-dialog/confirm-dialog.component";
import {takeUntil} from "rxjs/operators";
import {Actions, ofType} from "@ngrx/effects";

@Component({
    selector: "app-team-list",
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
        MatFormFieldModule,
        MatInputModule,
    ],
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>Teams</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <div class="filter-section">
                    <mat-form-field appearance="outline" class="search-field">
                        <mat-label>Suche (Team)</mat-label>
                        <mat-icon matPrefix>search</mat-icon>
                        <input
                            matInput
                            [value]="searchTerm()"
                            (input)="onSearchChange($any($event.target).value)"
                            placeholder="z.B. SV Muster"
                        />
                        @if (searchTerm()) {
                            <button matSuffix mat-icon-button aria-label="Suche leeren" (click)="clearSearch()">
                                <mat-icon>close</mat-icon>
                            </button>
                        }
                    </mat-form-field>
                </div>

                <div class="header-actions">
                    <button mat-raised-button color="primary" (click)="openCreateDialog()">
                        <mat-icon>add</mat-icon>
                        Neues Team
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
                        class="team-table"
                        [class.hidden]="loading$ | async"
                    >
                        <ng-container matColumnDef="id">
                            <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>
                            <td mat-cell *matCellDef="let team">{{ team.id }}</td>
                        </ng-container>

                        <ng-container matColumnDef="name">
                            <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
                            <td mat-cell *matCellDef="let team">
                                {{ team.name }}
                            </td>
                        </ng-container>

                        <ng-container matColumnDef="actions">
                            <th mat-header-cell *matHeaderCellDef>Aktionen</th>
                            <td mat-cell *matCellDef="let team">
                                <button mat-icon-button (click)="openEditDialog(team)" matTooltip="Bearbeiten">
                                    <mat-icon>edit</mat-icon>
                                </button>
                                <button mat-icon-button color="warn" (click)="deleteTeam(team)" matTooltip="Löschen">
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
            .filter-section {
                margin-top: 20px;
                display: flex;
                gap: 10px;
                align-items: center;
            }

            .search-field {
                min-width: 280px;
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

            .team-table {
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
export class TeamListComponent implements AfterViewInit, OnDestroy {
    private store = inject(Store);
    private dialog = inject(MatDialog);
    private snackBar = inject(MatSnackBar);
    private actions$ = inject(Actions);
    private destroy$ = new Subject<void>();

    teams$: Observable<Team[]>;
    loading$: Observable<boolean>;
    displayedColumns = ["id", "name", "actions"];
    dataSource = new MatTableDataSource<Team>([]);
    trackById = (_index: number, team: Team) => team.id;

    /** Free-text search over the rows currently loaded - see filterPredicate below. */
    searchTerm = signal("");

    sort = viewChild.required(MatSort);
    paginator = viewChild.required(MatPaginator);

    constructor() {
        // Teams only carry a name, so that is what the search box looks at.
        this.dataSource.filterPredicate = (team: Team, filter: string) => {
            const term = filter.trim().toLowerCase();
            return !term || (team.name?.toLowerCase().includes(term) ?? false);
        };

        this.teams$ = this.store.select(TeamSelectors.selectAllTeams);
        this.loading$ = this.store.select(TeamSelectors.selectTeamLoading);

        this.actions$.pipe(ofType(TeamActions.createTeamSuccess), takeUntil(this.destroy$)).subscribe(() => {
            this.snackBar.open("Team erfolgreich erstellt", "OK", {duration: 3000});
        });
        this.actions$.pipe(ofType(TeamActions.createTeamFailure), takeUntil(this.destroy$)).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Erstellen des Teams: ${error}`, "OK", {duration: 5000});
        });

        this.actions$.pipe(ofType(TeamActions.updateTeamSuccess), takeUntil(this.destroy$)).subscribe(() => {
            this.snackBar.open("Team erfolgreich aktualisiert", "OK", {duration: 3000});
        });
        this.actions$.pipe(ofType(TeamActions.updateTeamFailure), takeUntil(this.destroy$)).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Aktualisieren des Teams: ${error}`, "OK", {duration: 5000});
        });

        this.actions$.pipe(ofType(TeamActions.deleteTeamSuccess), takeUntil(this.destroy$)).subscribe(() => {
            this.snackBar.open("Team erfolgreich gelöscht", "OK", {duration: 3000});
        });
        this.actions$.pipe(ofType(TeamActions.deleteTeamFailure), takeUntil(this.destroy$)).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Löschen des Teams: ${error}`, "OK", {duration: 5000});
        });
        this.actions$
            .pipe(ofType(TeamActions.deleteTeamConflict), takeUntil(this.destroy$))
            .subscribe(({id, message}) => {
                this.dialog
                    .open(ConfirmDialogComponent, {
                        width: "450px",
                        data: {message, confirmLabel: "Löschen", confirmColor: "warn"},
                    })
                    .afterClosed()
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(confirmed => {
                        if (confirmed) {
                            this.store.dispatch(TeamActions.deleteTeam({id, force: true}));
                        }
                    });
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
        this.store.dispatch(TeamActions.loadTeams());
        this.teams$.pipe(takeUntil(this.destroy$)).subscribe(teams => {
            this.dataSource.data = teams;
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    openCreateDialog(): void {
        const dialogRef = this.dialog.open(TeamDialogComponent, {
            width: "500px",
        });

        dialogRef
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
                if (result) {
                    this.store.dispatch(TeamActions.createTeam({team: result}));
                }
            });
    }

    openEditDialog(team: Team): void {
        const dialogRef = this.dialog.open(TeamDialogComponent, {
            width: "500px",
            data: team,
        });

        dialogRef
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
                if (result) {
                    this.store.dispatch(TeamActions.updateTeam({id: team.id, team: result}));
                }
            });
    }

    deleteTeam(team: Team): void {
        this.dialog
            .open(ConfirmDialogComponent, {
                width: "450px",
                data: {
                    message: `Möchten Sie das Team "${team.name}" wirklich löschen?`,
                    confirmLabel: "Löschen",
                    confirmColor: "warn",
                },
            })
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(confirmed => {
                if (confirmed) {
                    this.store.dispatch(TeamActions.deleteTeam({id: team.id}));
                }
            });
    }

    onSearchChange(value: string): void {
        this.searchTerm.set(value);
        this.dataSource.filter = value.trim().toLowerCase();
        // Without this, a search made while on page 3 shows an empty table instead of its matches.
        this.paginator()?.firstPage();
    }

    clearSearch(): void {
        this.onSearchChange("");
    }

    refreshData(): void {
        this.store.dispatch(TeamActions.loadTeams());
        this.snackBar.open("Daten werden aktualisiert...", "OK", {
            duration: 2000,
        });
    }
}
