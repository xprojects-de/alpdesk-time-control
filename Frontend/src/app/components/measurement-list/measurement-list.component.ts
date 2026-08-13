import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Measurement } from '../../models/measurement.model';
import { Participant } from '../../models/participant.model';
import * as MeasurementActions from '../../store/measurement/measurement.actions';
import * as MeasurementSelectors from '../../store/measurement/measurement.selectors';
import * as ParticipantActions from '../../store/participant/participant.actions';
import * as ParticipantSelectors from '../../store/participant/participant.selectors';
import { MeasurementDialogComponent } from './measurement-dialog.component';

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
    MatTooltipModule
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Messungen</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div class="header-actions">
          <button mat-raised-button color="primary" (click)="openCreateDialog()">
            <mat-icon>add</mat-icon>
            Neue Messung
          </button>
        </div>

        @if (loading$ | async) {
          <div class="loading-container">
            <mat-spinner></mat-spinner>
          </div>
        } @else {
          <table mat-table [dataSource]="(measurementsWithParticipants$ | async) || []" class="measurement-table">
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
              <td mat-cell *matCellDef="let measurement">{{ measurement.measuredAt | date: 'dd.MM.yyyy HH:mm:ss' }}</td>
            </ng-container>

            <!-- Actions Column -->
            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Aktionen</th>
              <td mat-cell *matCellDef="let measurement">
                <button mat-icon-button (click)="openEditDialog(measurement)" matTooltip="Bearbeiten">
                  <mat-icon>edit</mat-icon>
                </button>
                <button mat-icon-button color="warn" (click)="deleteMeasurement(measurement)" matTooltip="Löschen">
                  <mat-icon>delete</mat-icon>
                </button>
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
          </table>
        }
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .header-actions {
      margin-bottom: 20px;
    }

    .loading-container {
      display: flex;
      justify-content: center;
      padding: 40px;
    }

    .measurement-table {
      width: 100%;
    }

    mat-card {
      margin: 20px;
    }
  `]
})
export class MeasurementListComponent implements AfterViewInit {
  measurements$: Observable<Measurement[]>;
  participants$: Observable<Participant[]>;
  measurementsWithParticipants$: Observable<MeasurementWithParticipant[]>;
  loading$: Observable<boolean>;
  displayedColumns = ['id', 'participant', 'duration', 'measuredAt', 'actions'];

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
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
      )
    );
  }

  ngAfterViewInit(): void {
    this.store.dispatch(MeasurementActions.loadMeasurements());
    this.store.dispatch(ParticipantActions.loadParticipants());
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
        this.store.dispatch(MeasurementActions.createMeasurement({ measurement: result }));
        this.snackBar.open('Messung erfolgreich erstellt', 'OK', { duration: 3000 });
      }
    });
  }

  openEditDialog(measurement: Measurement): void {
    const dialogRef = this.dialog.open(MeasurementDialogComponent, {
      width: '500px',
      data: measurement
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(MeasurementActions.updateMeasurement({
          id: measurement.id,
          measurement: result
        }));
        this.snackBar.open('Messung erfolgreich aktualisiert', 'OK', { duration: 3000 });
      }
    });
  }

  deleteMeasurement(measurement: Measurement): void {
    if (confirm(`Möchten Sie die Messung #${measurement.id} wirklich löschen?`)) {
      this.store.dispatch(MeasurementActions.deleteMeasurement({ id: measurement.id }));
      this.snackBar.open('Messung erfolgreich gelöscht', 'OK', { duration: 3000 });
    }
  }
}




