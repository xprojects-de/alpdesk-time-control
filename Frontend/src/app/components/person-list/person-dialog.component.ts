import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {
    MatDialogRef,
    MAT_DIALOG_DATA,
    MatDialogModule,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {Person, PersonRequest} from '../../models/person.model';
import {Gender, GenderLabels} from '../../models/gender.model';
import {notBlank} from '../../utils/validators.util';

@Component({
    selector: 'app-person-dialog',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
    ],
    template: `
        <h2 mat-dialog-title>
            {{ data ? 'Person bearbeiten' : 'Neue Person' }}
        </h2>
        <mat-dialog-content>
            <form [formGroup]="form" class="person-form">
                <mat-form-field appearance="outline">
                    <mat-label>Vorname</mat-label>
                    <input matInput formControlName="firstName" required/>
                    @if (form.get('firstName')?.hasError('required') &&
                    form.get('firstName')?.touched) {
                        <mat-error>Vorname ist erforderlich</mat-error>
                    }
                    @if (form.get('firstName')?.hasError('blank')) {
                        <mat-error>Vorname darf nicht nur aus Leerzeichen bestehen</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Nachname</mat-label>
                    <input matInput formControlName="lastName" required/>
                    @if (form.get('lastName')?.hasError('required') &&
                    form.get('lastName')?.touched) {
                        <mat-error>Nachname ist erforderlich</mat-error>
                    }
                    @if (form.get('lastName')?.hasError('blank')) {
                        <mat-error>Nachname darf nicht nur aus Leerzeichen bestehen</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Geburtsdatum</mat-label>
                    <input
                            matInput
                            [matDatepicker]="picker"
                            formControlName="birthDate"
                            placeholder="TT.MM.JJJJ"
                            required
                            [min]="minBirthDate"
                            [max]="maxBirthDate"
                    />
                    <mat-datepicker-toggle
                            matSuffix
                            [for]="picker"
                    ></mat-datepicker-toggle>
                    <mat-datepicker #picker></mat-datepicker>
                    <mat-hint>Format: TT.MM.JJJJ (z.B. 24.3.2022)</mat-hint>
                    @if (form.get('birthDate')?.hasError('required') &&
                    form.get('birthDate')?.touched) {
                        <mat-error>Geburtsdatum ist erforderlich</mat-error>
                    }
                    @if (form.get('birthDate')?.hasError('matDatepickerMin') ||
                    form.get('birthDate')?.hasError('matDatepickerMax')) {
                        <mat-error>Geburtsdatum muss zwischen 1900 und heute liegen</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Geschlecht</mat-label>
                    <mat-select formControlName="gender" required>
                        @for (gender of genderOptions; track gender.value) {
                            <mat-option [value]="gender.value">{{ gender.label }}</mat-option>
                        }
                    </mat-select>
                    @if (form.get('gender')?.hasError('required') &&
                    form.get('gender')?.touched) {
                        <mat-error>Geschlecht ist erforderlich</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Externe ID (optional)</mat-label>
                    <input matInput formControlName="externalId"/>
                    <mat-hint>Vereins-/Verbandsnummer, falls vorhanden</mat-hint>
                </mat-form-field>
            </form>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button (click)="onCancel()">Abbrechen</button>
            <button
                    mat-raised-button
                    color="primary"
                    (click)="onSave()"
                    [disabled]="!form.valid"
            >
                Speichern
            </button>
        </mat-dialog-actions>
    `,
    styles: [
        `
          .person-form {
            display: flex;
            flex-direction: column;
            gap: 16px;
            min-width: 400px;
            margin-top: 16px;
          }

          mat-form-field {
            width: 100%;
          }
        `,
    ],
})
export class PersonDialogComponent {
    private fb = inject(FormBuilder);

    // Mirrors age-group-dialog's 1900-2100 sanity bound; upper end is "today" rather than 2100
    // since a birth date can never be in the future. Without this, a mis-click or a bad CSV
    // import mapping can silently produce a birth date that matches no configured age group,
    // dropping that person out of every age-group PDF export and Gaudi-Modus category filter.
    readonly minBirthDate = new Date(1900, 0, 1);
    readonly maxBirthDate = new Date();
    private dialogRef = inject(MatDialogRef<PersonDialogComponent>);
    public data = inject<Person | null>(MAT_DIALOG_DATA);

    form: FormGroup;
    genderOptions = [
        {value: Gender.FEMALE, label: GenderLabels[Gender.FEMALE]},
        {value: Gender.MALE, label: GenderLabels[Gender.MALE]},
    ];

    constructor() {
        let birthDate: Date | string = this.data?.birthDate || '';
        if (birthDate && typeof birthDate === 'string') {
            const parts = birthDate.split('-');
            if (parts.length === 3) {
                birthDate = new Date(
                    parseInt(parts[0]),
                    parseInt(parts[1]) - 1,
                    parseInt(parts[2])
                );
            }
        }

        this.form = this.fb.group({
            firstName: [this.data?.firstName || '', [Validators.required, notBlank()]],
            lastName: [this.data?.lastName || '', [Validators.required, notBlank()]],
            birthDate: [birthDate, Validators.required],
            gender: [this.data?.gender || '', Validators.required],
            externalId: [this.data?.externalId || ''],
        });
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        if (this.form.valid) {
            const formValue = this.form.value;
            const person: PersonRequest = {
                firstName: formValue.firstName,
                lastName: formValue.lastName,
                birthDate: this.formatDate(formValue.birthDate),
                gender: formValue.gender,
                externalId: formValue.externalId || undefined,
            };
            this.dialogRef.close(person);
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
