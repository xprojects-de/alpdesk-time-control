import {
    Component,
    AfterViewInit,
    viewChild,
    OnDestroy,
    inject,
    effect,
    ChangeDetectionStrategy,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSortModule, MatSort} from '@angular/material/sort';
import {Race} from '../../models/race.model';
import * as RaceActions from '../../store/race/race.actions';
import * as RaceSelectors from '../../store/race/race.selectors';
import {RaceDialogComponent} from './race-dialog.component';
import {takeUntil} from 'rxjs/operators';
import {Actions, ofType} from '@ngrx/effects';

@Component({
    selector: 'app-race-list',
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
                <mat-card-title>Rennen</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <div class="header-actions">
                    <button
                            mat-raised-button
                            color="primary"
                            (click)="openCreateDialog()"
                    >
                        <mat-icon>add</mat-icon>
                        Neues Rennen
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

                <div class="table-container">
                <table
                        mat-table
                        [dataSource]="dataSource"
                        matSort
                        class="race-table"
                        [class.hidden]="loading$ | async"
                >
                    <!-- ID Column -->
                    <ng-container matColumnDef="id">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>
                        <td mat-cell *matCellDef="let race">{{ race.id }}</td>
                    </ng-container>

                    <!-- Name Column -->
                    <ng-container matColumnDef="name">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
                        <td mat-cell *matCellDef="let race">{{ race.name }}</td>
                    </ng-container>

                    <!-- Date Column -->
                    <ng-container matColumnDef="date">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Datum</th>
                        <td mat-cell *matCellDef="let race">
                            {{ race.date | date: 'dd.MM.yyyy' }}
                        </td>
                    </ng-container>

                    <!-- Actions Column -->
                    <ng-container matColumnDef="actions">
                        <th mat-header-cell *matHeaderCellDef>Aktionen</th>
                        <td mat-cell *matCellDef="let race">
                            <button
                                    mat-icon-button
                                    (click)="openEditDialog(race)"
                                    matTooltip="Bearbeiten"
                            >
                                <mat-icon>edit</mat-icon>
                            </button>
                            <button
                                    mat-icon-button
                                    color="warn"
                                    (click)="deleteRace(race)"
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

          .race-table {
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
export class RaceListComponent implements AfterViewInit, OnDestroy {
    private store = inject(Store);
    private dialog = inject(MatDialog);
    private snackBar = inject(MatSnackBar);
    private actions$ = inject(Actions);
    private destroy$ = new Subject<void>();

    races$: Observable<Race[]>;
    loading$: Observable<boolean>;
    displayedColumns = ['id', 'name', 'date', 'actions'];
    dataSource = new MatTableDataSource<Race>([]);
    private sortInitialized = false;

    sort = viewChild.required(MatSort);

    constructor() {
        this.races$ = this.store.select(RaceSelectors.selectAllRaces);
        this.loading$ = this.store.select(RaceSelectors.selectRaceLoading);

        this.actions$.pipe(
            ofType(RaceActions.createRaceSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open('Rennen erfolgreich erstellt', 'OK', {duration: 3000});
        });
        this.actions$.pipe(
            ofType(RaceActions.createRaceFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Erstellen des Rennens: ${error}`, 'OK', {duration: 5000});
        });

        this.actions$.pipe(
            ofType(RaceActions.updateRaceSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open('Rennen erfolgreich aktualisiert', 'OK', {duration: 3000});
        });
        this.actions$.pipe(
            ofType(RaceActions.updateRaceFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Aktualisieren des Rennens: ${error}`, 'OK', {duration: 5000});
        });

        this.actions$.pipe(
            ofType(RaceActions.deleteRaceSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open('Rennen erfolgreich gelöscht', 'OK', {duration: 3000});
        });
        this.actions$.pipe(
            ofType(RaceActions.deleteRaceFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Löschen des Rennens: ${error}`, 'OK', {duration: 5000});
        });

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
                                'Sort changed:',
                                sortInstance.active,
                                sortInstance.direction
                            );
                        });
                }, 100);
            }
        });
    }

    ngAfterViewInit(): void {
        this.store.dispatch(RaceActions.loadRaces());
        this.races$
            .pipe(takeUntil(this.destroy$))
            .subscribe((races) => {
                this.dataSource.data = races;
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    openCreateDialog(): void {
        const dialogRef = this.dialog.open(RaceDialogComponent, {
            width: '500px',
        });

        dialogRef
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(
                        RaceActions.createRace({race: result})
                    );
                }
            });
    }

    openEditDialog(race: Race): void {
        const dialogRef = this.dialog.open(RaceDialogComponent, {
            width: '500px',
            data: race,
        });

        dialogRef.afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(
                        RaceActions.updateRace({
                            id: race.id,
                            race: result,
                        })
                    );
                }
            });
    }

    deleteRace(race: Race): void {
        if (
            confirm(
                `Möchten Sie das Rennen "${race.name}" wirklich löschen?`
            )
        ) {
            this.store.dispatch(
                RaceActions.deleteRace({id: race.id})
            );
        }
    }

    refreshData(): void {
        this.store.dispatch(RaceActions.loadRaces());
        this.snackBar.open('Daten werden aktualisiert...', 'OK', {
            duration: 2000,
        });
    }
}

