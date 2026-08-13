import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Participant } from '../../models/participant.model';
import * as ParticipantActions from '../../store/participant/participant.actions';
import * as ParticipantSelectors from '../../store/participant/participant.selectors';
import { ParticipantDialogComponent } from './participant-dialog.component';

@Component({
  selector: 'app-participant-list',
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
        <mat-card-title>Teilnehmer</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div class="header-actions">
          <button mat-raised-button color="primary" (click)="openCreateDialog()">
            <mat-icon>add</mat-icon>
            Neuer Teilnehmer
          </button>
        </div>

        @if (loading$ | async) {
          <div class="loading-container">
            <mat-spinner></mat-spinner>
          </div>
        } @else {
          <table mat-table [dataSource]="(participants$ | async) || []" class="participant-table">
            <!-- ID Column -->
            <ng-container matColumnDef="id">
              <th mat-header-cell *matHeaderCellDef>ID</th>
              <td mat-cell *matCellDef="let participant">{{ participant.id }}</td>
            </ng-container>

            <!-- First Name Column -->
            <ng-container matColumnDef="firstName">
              <th mat-header-cell *matHeaderCellDef>Vorname</th>
              <td mat-cell *matCellDef="let participant">{{ participant.firstName }}</td>
            </ng-container>

            <!-- Last Name Column -->
            <ng-container matColumnDef="lastName">
              <th mat-header-cell *matHeaderCellDef>Nachname</th>
              <td mat-cell *matCellDef="let participant">{{ participant.lastName }}</td>
            </ng-container>

            <!-- Birth Date Column -->
            <ng-container matColumnDef="birthDate">
              <th mat-header-cell *matHeaderCellDef>Geburtsdatum</th>
              <td mat-cell *matCellDef="let participant">{{ participant.birthDate | date: 'dd.MM.yyyy' }}</td>
            </ng-container>

            <!-- Race Number Column -->
            <ng-container matColumnDef="raceNumber">
              <th mat-header-cell *matHeaderCellDef>Startnummer</th>
              <td mat-cell *matCellDef="let participant">{{ participant.raceNumber }}</td>
            </ng-container>

            <!-- Association Column -->
            <ng-container matColumnDef="association">
              <th mat-header-cell *matHeaderCellDef>Verein</th>
              <td mat-cell *matCellDef="let participant">{{ participant.association || '-' }}</td>
            </ng-container>

            <!-- Actions Column -->
            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Aktionen</th>
              <td mat-cell *matCellDef="let participant">
                <button mat-icon-button (click)="openEditDialog(participant)" matTooltip="Bearbeiten">
                  <mat-icon>edit</mat-icon>
                </button>
                <button mat-icon-button color="warn" (click)="deleteParticipant(participant)" matTooltip="Löschen">
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

    .participant-table {
      width: 100%;
    }

    mat-card {
      margin: 20px;
    }
  `]
})
export class ParticipantListComponent implements OnInit {
  participants$: Observable<Participant[]>;
  loading$: Observable<boolean>;
  displayedColumns = ['id', 'firstName', 'lastName', 'birthDate', 'raceNumber', 'association', 'actions'];

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.participants$ = this.store.select(ParticipantSelectors.selectAllParticipants);
    this.loading$ = this.store.select(ParticipantSelectors.selectParticipantLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(ParticipantActions.loadParticipants());
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(ParticipantDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(ParticipantActions.createParticipant({ participant: result }));
        this.snackBar.open('Teilnehmer erfolgreich erstellt', 'OK', { duration: 3000 });
      }
    });
  }

  openEditDialog(participant: Participant): void {
    const dialogRef = this.dialog.open(ParticipantDialogComponent, {
      width: '500px',
      data: participant
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(ParticipantActions.updateParticipant({
          id: participant.id,
          participant: result
        }));
        this.snackBar.open('Teilnehmer erfolgreich aktualisiert', 'OK', { duration: 3000 });
      }
    });
  }

  deleteParticipant(participant: Participant): void {
    if (confirm(`Möchten Sie den Teilnehmer "${participant.firstName} ${participant.lastName}" wirklich löschen?`)) {
      this.store.dispatch(ParticipantActions.deleteParticipant({ id: participant.id }));
      this.snackBar.open('Teilnehmer erfolgreich gelöscht', 'OK', { duration: 3000 });
    }
  }
}



