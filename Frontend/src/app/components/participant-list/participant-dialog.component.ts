import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {Participant, ParticipantRequest} from '../../models/participant.model';
import {Gender, GenderLabels} from '../../models/gender.model';

@Component({
    selector: 'app-participant-dialog',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule
    ],
    template: `
        <h2 mat-dialog-title>{{ data ? 'Teilnehmer bearbeiten' : 'Neuer Teilnehmer' }}</h2>
        <mat-dialog-content>
            <form [formGroup]="form" class="participant-form">
                <mat-form-field appearance="outline">
                    <mat-label>Vorname</mat-label>
                    <input matInput formControlName="firstName" required>
                    @if (form.get('firstName')?.hasError('required') && form.get('firstName')?.touched) {
                        <mat-error>Vorname ist erforderlich</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Nachname</mat-label>
                    <input matInput formControlName="lastName" required>
                    @if (form.get('lastName')?.hasError('required') && form.get('lastName')?.touched) {
                        <mat-error>Nachname ist erforderlich</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Geburtsdatum</mat-label>
                    <input matInput [matDatepicker]="picker" formControlName="birthDate"
                           placeholder="TT.MM.JJJJ" required>
                    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
                    <mat-datepicker #picker></mat-datepicker>
                    <mat-hint>Format: TT.MM.JJJJ (z.B. 24.3.2022)</mat-hint>
                    @if (form.get('birthDate')?.hasError('required') && form.get('birthDate')?.touched) {
                        <mat-error>Geburtsdatum ist erforderlich</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Geschlecht</mat-label>
                    <mat-select formControlName="gender" required>
                        @for (gender of genderOptions; track gender.value) {
                            <mat-option [value]="gender.value">{{ gender.label }}</mat-option>
                        }
                    </mat-select>
                    @if (form.get('gender')?.hasError('required') && form.get('gender')?.touched) {
                        <mat-error>Geschlecht ist erforderlich</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Startnummer</mat-label>
                    <input matInput type="number" formControlName="raceNumber" required>
                    @if (form.get('raceNumber')?.hasError('required') && form.get('raceNumber')?.touched) {
                        <mat-error>Startnummer ist erforderlich</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Verein</mat-label>
                    <input matInput formControlName="association">
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
      .participant-form {
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
export class ParticipantDialogComponent {
    private fb = inject(FormBuilder);
    private dialogRef = inject(MatDialogRef<ParticipantDialogComponent>);
    public data = inject<Participant | null>(MAT_DIALOG_DATA);

    form: FormGroup;
    genderOptions = [
        { value: Gender.MALE, label: GenderLabels[Gender.MALE] },
        { value: Gender.FEMALE, label: GenderLabels[Gender.FEMALE] }
    ];

    constructor() {
        let birthDate: Date | string = this.data?.birthDate || '';
        if (birthDate && typeof birthDate === 'string') {

            const parts = birthDate.split('-');
            if (parts.length === 3) {
                birthDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
            }
        }

        this.form = this.fb.group({
            firstName: [this.data?.firstName || '', Validators.required],
            lastName: [this.data?.lastName || '', Validators.required],
            birthDate: [birthDate, Validators.required],
            gender: [this.data?.gender || '', Validators.required],
            raceNumber: [this.data?.raceNumber || '', Validators.required],
            association: [this.data?.association || '']
        });
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        if (this.form.valid) {
            const formValue = this.form.value;
            const participant: ParticipantRequest = {
                firstName: formValue.firstName,
                lastName: formValue.lastName,
                birthDate: this.formatDate(formValue.birthDate),
                gender: formValue.gender,
                raceNumber: Number(formValue.raceNumber),
                association: formValue.association || undefined
            };
            this.dialogRef.close(participant);
        }
    }

    private formatDate(date: Date | string): string {
        if (typeof date === 'string') {
            return date;
        }
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
}

