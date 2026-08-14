import {Component, inject, ChangeDetectionStrategy} from '@angular/core';
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
import {Race, RaceRequest} from '../../models/race.model';

@Component({
    selector: 'app-race-dialog',
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
    ],
    template: `
        <h2 mat-dialog-title>
            {{ data ? 'Rennen bearbeiten' : 'Neues Rennen' }}
        </h2>
        <mat-dialog-content>
            <form [formGroup]="form" class="race-form">
                <mat-form-field appearance="outline">
                    <mat-label>Name</mat-label>
                    <input matInput formControlName="name" required/>
                    @if (form.get('name')?.hasError('required') &&
                    form.get('name')?.touched) {
                        <mat-error>Name ist erforderlich</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Datum</mat-label>
                    <input
                            matInput
                            [matDatepicker]="picker"
                            formControlName="date"
                            placeholder="TT.MM.JJJJ"
                            required
                    />
                    <mat-datepicker-toggle
                            matSuffix
                            [for]="picker"
                    ></mat-datepicker-toggle>
                    <mat-datepicker #picker></mat-datepicker>
                    <mat-hint>Format: TT.MM.JJJJ (z.B. 24.3.2022)</mat-hint>
                    @if (form.get('date')?.hasError('required') &&
                    form.get('date')?.touched) {
                        <mat-error>Datum ist erforderlich</mat-error>
                    }
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
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
          .race-form {
            display: flex;
            flex-direction: column;
            gap: 16px;
            min-width: 400px;
          }

          mat-form-field {
            width: 100%;
          }
        `,
    ],
})
export class RaceDialogComponent {
    private fb = inject(FormBuilder);
    private dialogRef = inject(MatDialogRef<RaceDialogComponent>);
    public data = inject<Race | null>(MAT_DIALOG_DATA);

    form: FormGroup;

    constructor() {
        let date: Date | string = this.data?.date || '';
        if (date && typeof date === 'string') {
            const parts = date.split('-');
            if (parts.length === 3) {
                date = new Date(
                    parseInt(parts[0]),
                    parseInt(parts[1]) - 1,
                    parseInt(parts[2])
                );
            }
        }

        this.form = this.fb.group({
            name: [this.data?.name || '', Validators.required],
            date: [date, Validators.required],
        });
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        if (this.form.valid) {
            const formValue = this.form.value;
            const race: RaceRequest = {
                name: formValue.name,
                date: this.formatDate(formValue.date),
            };
            this.dialogRef.close(race);
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

