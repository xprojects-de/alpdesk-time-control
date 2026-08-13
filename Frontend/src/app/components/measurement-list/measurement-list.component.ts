import {Component, AfterViewInit, OnDestroy, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable, combineLatest, interval, Subject, EMPTY} from 'rxjs';
import {map, takeUntil, switchMap, distinctUntilChanged} from 'rxjs/operators';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {Measurement} from '../../models/measurement.model';
import {Participant} from '../../models/participant.model';
import * as MeasurementActions from '../../store/measurement/measurement.actions';
import * as MeasurementSelectors from '../../store/measurement/measurement.selectors';
import * as ParticipantActions from '../../store/participant/participant.actions';
import * as ParticipantSelectors from '../../store/participant/participant.selectors';
import {MeasurementDialogComponent} from './measurement-dialog.component';

interface MeasurementWithParticipant extends Measurement {
    participantName?: string;
}

@Component({
    selector: 'app-measurement-list',
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
        MatBadgeModule,
        MatSlideToggleModule,
        FormsModule
    ],
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>
                    <div class="title-row">
                        <span>Messungen</span>
                        <div class="sync-status">
                            <mat-slide-toggle 
                                [(ngModel)]="autoRefreshEnabled"
                                (change)="onAutoRefreshToggle()"
                                color="primary"
                                matTooltip="Automatische Aktualisierung">
                            </mat-slide-toggle>
                            @if (loading$ | async) {
                                <mat-icon class="sync-icon syncing" matTooltip="Aktualisiere...">sync</mat-icon>
                            } @else {
                                <mat-icon class="sync-icon" matTooltip="Letzte Aktualisierung: {{ lastUpdate }}">sync</mat-icon>
                            }
                            <span class="last-update-text">{{ lastUpdate }}</span>
                        </div>
                    </div>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <div class="header-actions">
                    <button mat-raised-button color="primary" (click)="openCreateDialog()">
                        <mat-icon>add</mat-icon>
                        Neue Messung
                    </button>
                    <button mat-raised-button (click)="manualRefresh()">
                        <mat-icon>refresh</mat-icon>
                        Manuell aktualisieren
                    </button>
                </div>

                @if (loading$ | async) {
                    <div class="loading-overlay">
                        <mat-spinner diameter="30"></mat-spinner>
                    </div>
                }
                
                <table mat-table [dataSource]="(measurementsWithParticipants$ | async) || []"
                       class="measurement-table"
                       [class.loading]="loading$ | async">
                        <!-- ID Column -->
                        <ng-container matColumnDef="id">
                            <th mat-header-cell *matHeaderCellDef>ID</th>
                            <td mat-cell *matCellDef="let measurement">{{ measurement.id }}</td>
                        </ng-container>

                        <!-- Participant Column -->
                        <ng-container matColumnDef="participant">
                            <th mat-header-cell *matHeaderCellDef>Teilnehmer</th>
                            <td mat-cell *matCellDef="let measurement">{{ measurement.participantName || '-' }}</td>
                        </ng-container>

                        <!-- Duration Column -->
                        <ng-container matColumnDef="duration">
                            <th mat-header-cell *matHeaderCellDef>Dauer</th>
                            <td mat-cell *matCellDef="let measurement">{{ formatDuration(measurement.durationMs) }}</td>
                        </ng-container>

                        <!-- Measured At Column -->
                        <ng-container matColumnDef="measuredAt">
                            <th mat-header-cell *matHeaderCellDef>Gemessen am</th>
                            <td mat-cell
                                *matCellDef="let measurement">{{ measurement.measuredAt | date: 'dd.MM.yyyy HH:mm:ss' }}
                            </td>
                        </ng-container>

                        <!-- Actions Column -->
                        <ng-container matColumnDef="actions">
                            <th mat-header-cell *matHeaderCellDef>Aktionen</th>
                            <td mat-cell *matCellDef="let measurement">
                                <button mat-icon-button (click)="openEditDialog(measurement)" matTooltip="Bearbeiten">
                                    <mat-icon>edit</mat-icon>
                                </button>
                                <button mat-icon-button color="warn" (click)="deleteMeasurement(measurement)"
                                        matTooltip="Löschen">
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
    styles: [`
      .title-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 32px;
      }

      .sync-status {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 0.875rem;
        color: rgba(0, 0, 0, 0.6);
      }

      .sync-icon {
        font-size: 20px;
        width: 20px;
        height: 20px;
        color: rgba(0, 0, 0, 0.6);
      }

      .sync-icon.syncing {
        animation: spin 1s linear infinite;
        color: #3f51b5;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .last-update-text {
        font-size: 0.75rem;
        white-space: nowrap;
      }

      .header-actions {
        margin-bottom: 20px;
        display: flex;
        gap: 10px;
        position: relative;
      }

      .loading-overlay {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }

      .loading-container {
        display: flex;
        justify-content: center;
        padding: 40px;
      }

      .measurement-table {
        width: 100%;
        transition: opacity 0.2s ease;
      }

      .measurement-table.loading {
        opacity: 0.6;
      }

      mat-card {
        margin: 20px;
      }

      mat-card-content {
        position: relative;
      }
    `]
})
export class MeasurementListComponent implements AfterViewInit, OnDestroy {
    private store = inject(Store);
    private dialog = inject(MatDialog);
    private snackBar = inject(MatSnackBar);
    private destroy$ = new Subject<void>();
    private autoRefresh$ = new Subject<boolean>();

    measurements$: Observable<Measurement[]>;
    participants$: Observable<Participant[]>;
    measurementsWithParticipants$: Observable<MeasurementWithParticipant[]>;
    loading$: Observable<boolean>;
    displayedColumns = ['id', 'participant', 'duration', 'measuredAt', 'actions'];
    lastUpdate = '';
    autoRefreshEnabled = false;

    constructor() {
        this.measurements$ = this.store.select(MeasurementSelectors.selectAllMeasurements);
        this.participants$ = this.store.select(ParticipantSelectors.selectAllParticipants);
        this.loading$ = this.store.select(MeasurementSelectors.selectMeasurementLoading);

        this.measurementsWithParticipants$ = combineLatest([
            this.measurements$,
            this.participants$
        ]).pipe(
            map(([measurements, participants]) =>
                measurements.map(m => ({
                    ...m,
                    participantName: m.participantId
                        ? this.getParticipantName(m.participantId, participants)
                        : undefined
                }))
            ),
            distinctUntilChanged((prev, curr) =>
                JSON.stringify(prev) === JSON.stringify(curr)
            )
        );
    }

    ngAfterViewInit(): void {
        // Initiales Laden
        this.loadData();

        // Auto-Refresh mit Toggle-Kontrolle
        this.autoRefresh$.pipe(
            switchMap(enabled =>
                enabled ? interval(2000) : EMPTY
            ),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.loadData();
        });

        // Starte mit Auto-Refresh
        this.autoRefresh$.next(this.autoRefreshEnabled);
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
        this.autoRefresh$.complete();
    }

    onAutoRefreshToggle(): void {
        this.autoRefresh$.next(this.autoRefreshEnabled);
        const message = this.autoRefreshEnabled
            ? 'Automatische Aktualisierung aktiviert'
            : 'Automatische Aktualisierung deaktiviert';
        this.snackBar.open(message, 'OK', {duration: 2000});
    }

    manualRefresh(): void {
        this.loadData();
        this.snackBar.open('Daten wurden aktualisiert', 'OK', {duration: 2000});
    }

    private loadData(): void {
        this.store.dispatch(MeasurementActions.loadMeasurements());
        this.store.dispatch(ParticipantActions.loadParticipants());
        this.updateLastUpdateTime();
    }

    private updateLastUpdateTime(): void {
        const now = new Date();
        this.lastUpdate = now.toLocaleTimeString('de-DE');
    }

    getParticipantName(participantId: number, participants: Participant[]): string {
        const participant = participants.find(p => p.id === participantId);
        return participant ? `${participant.firstName} ${participant.lastName}` : '-';
    }

    formatDuration(ms: number): string {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const milliseconds = ms % 1000;

        if (hours > 0) {
            return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
        } else if (minutes > 0) {
            return `${minutes}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
        } else {
            return `${seconds}.${String(milliseconds).padStart(3, '0')}s`;
        }
    }

    openCreateDialog(): void {
        const dialogRef = this.dialog.open(MeasurementDialogComponent, {
            width: '500px'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.store.dispatch(MeasurementActions.createMeasurement({measurement: result}));
                this.snackBar.open('Messung erfolgreich erstellt', 'OK', {duration: 3000});
            }
        });
    }

    openEditDialog(measurement: Measurement): void {
        const dialogRef = this.dialog.open(MeasurementDialogComponent, {
            width: '500px',
            data: measurement
        });

        dialogRef.afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
                if (result) {
                    this.store.dispatch(MeasurementActions.updateMeasurement({
                        id: measurement.id,
                        measurement: result
                    }));
                    this.snackBar.open('Messung erfolgreich aktualisiert', 'OK', {duration: 3000});
                }
            });
    }

    deleteMeasurement(measurement: Measurement): void {
        if (confirm(`Möchten Sie die Messung #${measurement.id} wirklich löschen?`)) {
            this.store.dispatch(MeasurementActions.deleteMeasurement({id: measurement.id}));
            this.snackBar.open('Messung erfolgreich gelöscht', 'OK', {duration: 3000});
        }
    }
}




