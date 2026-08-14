import {
    Component,
    AfterViewInit,
    viewChild,
    OnDestroy,
    inject,
    effect,
    ChangeDetectionStrategy,
} from "@angular/core";
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
import {AgeGroup} from "../../models/age-group.model";
import {Gender, GenderLabels} from "../../models/gender.model";
import * as AgeGroupActions from "../../store/age-group/age-group.actions";
import * as AgeGroupSelectors from "../../store/age-group/age-group.selectors";
import {AgeGroupDialogComponent} from "./age-group-dialog.component";
import {takeUntil} from "rxjs/operators";

@Component({
    selector: "app-age-group-list",
    standalone: true,
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
    ],
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>Altersgruppen</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <div class="header-actions">
                    <button
                            mat-raised-button
                            color="primary"
                            (click)="openCreateDialog()"
                    >
                        <mat-icon>add</mat-icon>
                        Neue Altersgruppe
                    </button>
                    <button
                            mat-raised-button
                            (click)="refreshData()"
                            matTooltip="Daten aktualisieren"
                    >
                        <mat-icon>refresh</mat-icon>
                        Aktualisieren
                    </button>
                </div>

                @if (loading$ | async) {
                    <div class="loading-container">
                        <mat-spinner></mat-spinner>
                    </div>
                }

                <table
                        mat-table
                        [dataSource]="dataSource"
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
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>
                            Geschlecht
                        </th>
                        <td mat-cell *matCellDef="let ageGroup">
                            {{ getGenderLabel(ageGroup.gender) }}
                        </td>
                    </ng-container>

                    <!-- Birth Year From Column -->
                    <ng-container matColumnDef="birthYearFrom">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>
                            Geburtsjahr von
                        </th>
                        <td mat-cell *matCellDef="let ageGroup">
                            {{ ageGroup.birthYearFrom }}
                        </td>
                    </ng-container>

                    <!-- Birth Year To Column -->
                    <ng-container matColumnDef="birthYearTo">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>
                            Geburtsjahr bis
                        </th>
                        <td mat-cell *matCellDef="let ageGroup">
                            {{ ageGroup.birthYearTo }}
                        </td>
                    </ng-container>

                    <!-- Actions Column -->
                    <ng-container matColumnDef="actions">
                        <th mat-header-cell *matHeaderCellDef>Aktionen</th>
                        <td mat-cell *matCellDef="let ageGroup">
                            <button
                                    mat-icon-button
                                    (click)="openEditDialog(ageGroup)"
                                    matTooltip="Bearbeiten"
                            >
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
            </mat-card-content>
        </mat-card>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
          .header-actions {
            margin-top: 20px;
            margin-bottom: 20px;
            display: flex;
            gap: 10px;
          }

          .loading-container {
            display: flex;
            justify-content: center;
            padding: 40px;
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
    private destroy$ = new Subject<void>();

    ageGroups$: Observable<AgeGroup[]>;
    loading$: Observable<boolean>;
    displayedColumns = [
        "id",
        "name",
        "gender",
        "birthYearFrom",
        "birthYearTo",
        "actions",
    ];
    dataSource = new MatTableDataSource<AgeGroup>([]);
    private sortInitialized = false;

    sort = viewChild.required(MatSort);

    constructor() {
        this.ageGroups$ = this.store.select(
            AgeGroupSelectors.selectAllAgeGroups,
        );
        this.loading$ = this.store.select(
            AgeGroupSelectors.selectAgeGroupLoading,
        );

        // Setup sort when signal changes
        effect(() => {
            const sortInstance = this.sort();
            if (sortInstance && !this.sortInitialized) {
                setTimeout(() => {
                    this.dataSource.sort = sortInstance;
                    this.sortInitialized = true;

                    sortInstance.sortChange
                        .pipe(takeUntil(this.destroy$))
                        .subscribe(() => {
                            console.log(
                                "Sort changed:",
                                sortInstance.active,
                                sortInstance.direction,
                            );
                        });
                }, 100);
            }
        });
    }

    ngAfterViewInit(): void {
        this.store.dispatch(AgeGroupActions.loadAgeGroups());
        this.ageGroups$
            .pipe(takeUntil(this.destroy$))
            .subscribe((ageGroups) => {
                this.dataSource.data = ageGroups;
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
        });

        dialogRef
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(
                        AgeGroupActions.createAgeGroup({ageGroup: result}),
                    );
                    this.snackBar.open("Altersgruppe erfolgreich erstellt", "OK", {
                        duration: 3000,
                    });
                }
            });
    }

    openEditDialog(ageGroup: AgeGroup): void {
        const dialogRef = this.dialog.open(AgeGroupDialogComponent, {
            width: "500px",
            data: ageGroup,
        });

        dialogRef.afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(
                        AgeGroupActions.updateAgeGroup({
                            id: ageGroup.id,
                            ageGroup: result,
                        }),
                    );
                    this.snackBar.open("Altersgruppe erfolgreich aktualisiert", "OK", {
                        duration: 3000,
                    });
                }
            });
    }

    deleteAgeGroup(ageGroup: AgeGroup): void {
        if (
            confirm(
                `Möchten Sie die Altersgruppe "${ageGroup.name}" wirklich löschen?`,
            )
        ) {
            this.store.dispatch(
                AgeGroupActions.deleteAgeGroup({id: ageGroup.id}),
            );
            this.snackBar.open("Altersgruppe erfolgreich gelöscht", "OK", {
                duration: 3000,
            });
        }
    }

    refreshData(): void {
        this.store.dispatch(AgeGroupActions.loadAgeGroups());
        this.snackBar.open("Daten werden aktualisiert...", "OK", {
            duration: 2000,
        });
    }
}

