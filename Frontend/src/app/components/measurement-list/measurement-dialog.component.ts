import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Measurement, MeasurementRequest } from '../../models/measurement.model';
import { Participant } from '../../models/participant.model';
import * as ParticipantSelectors from '../../store/participant/participant.selectors';
import * as ParticipantActions from '../../store/participant/participant.actions';

@Component({
  selector: 'app-measurement-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  template: `
    <h2 mat-dialog-title>{{ data ? 'Messung bearbeiten' : 'Neue Messung' }}</h2>
    <mat-dialog-content>
      <form [formGroup]="form" class="measurement-form">
        <mat-form-field appearance="outline">
          <mat-label>Teilnehmer</mat-label>
          <mat-select formControlName="participantId">
            <mat-option [value]="null">Kein Teilnehmer</mat-option>
            @for (participant of participants$ | async; track participant.id) {
              <mat-option [value]="participant.id">
                {{ participant.firstName }} {{ participant.lastName }} ({{ participant.raceNumber }})
              </mat-option>
            }
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Dauer (Millisekunden)</mat-label>
          <input matInput type="number" formControlName="durationMs" required>
          @if (form.get('durationMs')?.hasError('required') && form.get('durationMs')?.touched) {
            <mat-error>Dauer ist erforderlich</mat-error>
          }
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Gemessen am (ISO Format)</mat-label>
          <input matInput type="datetime-local" formControlName="measuredAt" required>
          @if (form.get('measuredAt')?.hasError('required') && form.get('measuredAt')?.touched) {
            <mat-error>Messzeit ist erforderlich</mat-error>
          }
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">Abbrechen</button>
      <button mat-raised-button color="primary" (click)="onSave()" [disabled]="!form.valid">
        Speichern
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .measurement-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      min-width: 400px;
    }

    mat-form-field {
      width: 100%;
    }
  `]
})
export class MeasurementDialogComponent implements OnInit {
  form: FormGroup;
  participants$: Observable<Participant[]>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private dialogRef: MatDialogRef<MeasurementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Measurement | null
  ) {
    this.participants$ = this.store.select(ParticipantSelectors.selectAllParticipants);

    this.form = this.fb.group({
      participantId: [data?.participantId || null],
      durationMs: [data?.durationMs || '', Validators.required],
      measuredAt: [this.formatDateTimeForInput(data?.measuredAt), Validators.required]
    });
  }

  ngOnInit(): void {
    this.store.dispatch(ParticipantActions.loadParticipants());
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.form.valid) {
      const formValue = this.form.value;
      const measurement: MeasurementRequest = {
        participantId: formValue.participantId || undefined,
        durationMs: Number(formValue.durationMs),
        measuredAt: this.formatDateTimeForBackend(formValue.measuredAt)
      };
      this.dialogRef.close(measurement);
    }
  }

  private formatDateTimeForInput(dateTime?: string): string {
    if (!dateTime) {
      const now = new Date();
      return this.toLocalISOString(now);
    }
    const date = new Date(dateTime);
    return this.toLocalISOString(date);
  }

  private toLocalISOString(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  private formatDateTimeForBackend(dateTime: string): string {
    const date = new Date(dateTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }
}

