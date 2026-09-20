import {
    Component,
    AfterViewInit,
    viewChild,
    OnDestroy,
    inject,
    effect,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {Observable, Subject, firstValueFrom} from 'rxjs';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSortModule, MatSort} from '@angular/material/sort';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import {Race, RaceRequest} from '../../models/race.model';
import * as RaceActions from '../../store/race/race.actions';
import * as RaceSelectors from '../../store/race/race.selectors';
import * as ParticipantActions from '../../store/participant/participant.actions';
import {RaceDialogComponent} from './race-dialog.component';
import {RaceLiveLinksDialogComponent} from './race-live-links-dialog.component';
import {
    ParticipantImportMappingDialogComponent,
    ParticipantImportMappingDialogResult
} from '../participant-list/participant-import-mapping-dialog.component';
import {ConfirmDialogComponent} from '../shared/confirm-dialog/confirm-dialog.component';
import {takeUntil} from 'rxjs/operators';
import {Actions, ofType} from '@ngrx/effects';

@Component({
    selector: 'app-race-list',
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
                    <button
                            mat-raised-button
                            (click)="importRaceResults()"
                            matTooltip="Neues Rennen aus einer Ergebnisdatei (CSV) anlegen, z.B. dem Export eines Rennens aus einer anderen Instanz"
                    >
                        <mat-icon>upload_file</mat-icon>
                        Rennergebnisse importieren
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
                                    (click)="openLiveLinksDialog(race)"
                                    matTooltip="Live-Ergebnisse-Links"
                            >
                                <mat-icon>link</mat-icon>
                            </button>
                            <button
                                    mat-icon-button
                                    (click)="exportResults(race)"
                                    matTooltip="Rennergebnisse als CSV exportieren (Teilnehmer, Personendaten, Zeiten)"
                            >
                                <mat-icon>download</mat-icon>
                            </button>
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
                <mat-paginator [pageSizeOptions]="[10, 25, 50, 100]" showFirstLastButtons></mat-paginator>
            </mat-card-content>
        </mat-card>
    `,
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
            padding: 8px;
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
    trackById = (_index: number, race: Race) => race.id;

    sort = viewChild.required(MatSort);
    paginator = viewChild.required(MatPaginator);

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
            ofType(RaceActions.createRaceForResultImportSuccess),
            takeUntil(this.destroy$),
        ).subscribe(({race}) => this.openResultImportDialog(race));
        this.actions$.pipe(
            ofType(RaceActions.createRaceForResultImportFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Anlegen des Rennens: ${error}`, 'OK', {duration: 5000, panelClass: ['error-snackbar']});
        });
        // The import result lands in the participant slice (shared with the participant list's own
        // import); show it here and clear it, so the participant list doesn't re-display it later.
        this.actions$.pipe(
            ofType(ParticipantActions.importParticipantsMappedSuccess),
            takeUntil(this.destroy$),
        ).subscribe(({result}) => {
            this.snackBar.open(
                `Import abgeschlossen: ${result.importedCount} importiert, ${result.skippedCount} übersprungen`,
                'OK',
                {duration: 5000},
            );
            const errors = result.errors ?? [];
            if (errors.length > 0) {
                const details = errors
                    .map((e) => `Zeile ${e.lineNumber}: ${e.reason}`)
                    .join('\n');
                this.dialog.open(ConfirmDialogComponent, {
                    width: '500px',
                    data: {
                        title: 'Übersprungene Zeilen',
                        message: details,
                        confirmLabel: 'OK',
                        hideCancel: true,
                    },
                });
            }
            this.store.dispatch(ParticipantActions.clearImportResult());
        });
        this.actions$.pipe(
            ofType(ParticipantActions.importParticipantsMappedFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Import: ${error}`, 'OK', {duration: 5000, panelClass: ['error-snackbar']});
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
        this.actions$.pipe(
            ofType(RaceActions.deleteRaceConflict),
            takeUntil(this.destroy$),
        ).subscribe(({id, message}) => {
            this.dialog.open(ConfirmDialogComponent, {
                width: '450px',
                data: {message, confirmLabel: 'Löschen', confirmColor: 'warn'},
            })
                .afterClosed()
                .pipe(takeUntil(this.destroy$))
                .subscribe((confirmed) => {
                    if (confirmed) {
                        this.store.dispatch(RaceActions.deleteRace({id, force: true}));
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
            data: {race: null, races: this.dataSource.data},
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
            data: {race, races: this.dataSource.data},
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
        this.dialog.open(ConfirmDialogComponent, {
            width: '450px',
            data: {
                message: `Möchten Sie das Rennen "${race.name}" wirklich löschen?`,
                confirmLabel: 'Löschen',
                confirmColor: 'warn',
            },
        })
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((confirmed) => {
                if (confirmed) {
                    this.store.dispatch(
                        RaceActions.deleteRace({id: race.id})
                    );
                }
            });
    }

    refreshData(): void {
        this.store.dispatch(RaceActions.loadRaces());
        this.snackBar.open('Daten werden aktualisiert...', 'OK', {
            duration: 2000,
        });
    }

    exportResults(race: Race): void {
        this.store.dispatch(ParticipantActions.exportParticipantsCsv({
            raceId: race.id,
            filename: `rennergebnisse_${race.name}.csv`,
        }));
    }

    openLiveLinksDialog(race: Race): void {
        this.dialog.open(RaceLiveLinksDialogComponent, {
            width: '500px',
            data: {race},
        });
    }

    /**
     * Full race migration from another instance: create a new race here (name/date decided locally,
     * not carried from the export - the source instance's export doesn't include them), then import
     * the roster+results CSV into it via the same mapping dialog the participant list uses.
     * Continues in the createRaceForResultImportSuccess listener set up in the constructor.
     */
    async importRaceResults(): Promise<void> {
        const raceDialogRef = this.dialog.open(RaceDialogComponent, {
            width: '500px',
            data: {race: null, races: this.dataSource.data},
        });
        const raceRequest: RaceRequest | undefined = await firstValueFrom(raceDialogRef.afterClosed());
        if (!raceRequest) {
            return;
        }
        this.store.dispatch(RaceActions.createRaceForResultImport({race: raceRequest}));
    }

    private openResultImportDialog(race: Race): void {
        this.snackBar.open(`Rennen "${race.name}" angelegt - jetzt die Ergebnisdatei wählen`, 'OK', {duration: 3000});
        this.dialog.open(ParticipantImportMappingDialogComponent, {width: '900px'})
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((result: ParticipantImportMappingDialogResult | undefined) => {
                if (!result) {
                    return;
                }
                this.store.dispatch(ParticipantActions.importParticipantsMapped({
                    raceId: race.id,
                    file: result.file,
                    format: result.format,
                    delimiter: result.delimiter,
                    mapping: result.mapping,
                }));
            });
    }
}
