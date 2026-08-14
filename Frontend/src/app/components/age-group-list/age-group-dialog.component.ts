import {Component, inject, ChangeDetectionStrategy} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from "@angular/forms";
import {
    MatDialogRef,
    MAT_DIALOG_DATA,
    MatDialogModule,
} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {
    AgeGroup,
    AgeGroupRequest,
} from "../../models/age-group.model";

@Component({
    selector: "app-age-group-dialog",
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
    template: `
        <h2 mat-dialog-title>
            {{ data ? "Altersgruppe bearbeiten" : "Neue Altersgruppe" }}
        </h2>
        <mat-dialog-content>
            <form [formGroup]="form" class="age-group-form">
                <mat-form-field appearance="outline">
                    <mat-label>Name</mat-label>
                    <input matInput formControlName="name" required/>
                    @if (form.get("name")?.hasError("required") &&
                    form.get("name")?.touched) {
                        <mat-error>Name ist erforderlich</mat-error>
                    }
                    <mat-hint>z.B. "Herren allgemein" oder "Damen U18"</mat-hint>
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Geburtsjahr von</mat-label>
                    <input
                            matInput
                            type="number"
                            formControlName="birthYearFrom"
                            required
                            min="1900"
                            max="2100"
                    />
                    @if (form.get("birthYearFrom")?.hasError("required") &&
                    form.get("birthYearFrom")?.touched) {
                        <mat-error>Geburtsjahr von ist erforderlich</mat-error>
                    }
                    @if (form.get("birthYearFrom")?.hasError("min")) {
                        <mat-error>Geburtsjahr muss mindestens 1900 sein</mat-error>
                    }
                    @if (form.get("birthYearFrom")?.hasError("max")) {
                        <mat-error>Geburtsjahr darf maximal 2100 sein</mat-error>
                    }
                    <mat-hint>Startzeitpunkt der Altersspanne (z.B. 1985)</mat-hint>
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Geburtsjahr bis</mat-label>
                    <input
                            matInput
                            type="number"
                            formControlName="birthYearTo"
                            required
                            min="1900"
                            max="2100"
                    />
                    @if (form.get("birthYearTo")?.hasError("required") &&
                    form.get("birthYearTo")?.touched) {
                        <mat-error>Geburtsjahr bis ist erforderlich</mat-error>
                    }
                    @if (form.get("birthYearTo")?.hasError("min")) {
                        <mat-error>Geburtsjahr muss mindestens 1900 sein</mat-error>
                    }
                    @if (form.get("birthYearTo")?.hasError("max")) {
                        <mat-error>Geburtsjahr darf maximal 2100 sein</mat-error>
                    }
                    @if (form.hasError("yearRange")) {
                        <mat-error>Geburtsjahr bis muss größer oder gleich Geburtsjahr von sein</mat-error>
                    }
                    <mat-hint>Endzeitpunkt der Altersspanne (z.B. 2000)</mat-hint>
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
          .age-group-form {
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
export class AgeGroupDialogComponent {
    private fb = inject(FormBuilder);
    private dialogRef = inject(MatDialogRef<AgeGroupDialogComponent>);
    public data = inject<AgeGroup | null>(MAT_DIALOG_DATA);

    form: FormGroup;

    constructor() {
        this.form = this.fb.group({
            name: [this.data?.name || "", Validators.required],
            birthYearFrom: [
                this.data?.birthYearFrom || "",
                [Validators.required, Validators.min(1900), Validators.max(2100)]
            ],
            birthYearTo: [
                this.data?.birthYearTo || "",
                [Validators.required, Validators.min(1900), Validators.max(2100)]
            ],
        }, {validators: this.yearRangeValidator});
    }

    yearRangeValidator(form: FormGroup) {
        const fromYear = form.get('birthYearFrom')?.value;
        const toYear = form.get('birthYearTo')?.value;

        if (fromYear && toYear && fromYear > toYear) {
            return {yearRange: true};
        }
        return null;
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        if (this.form.valid) {
            const formValue = this.form.value;
            const ageGroup: AgeGroupRequest = {
                name: formValue.name,
                birthYearFrom: Number(formValue.birthYearFrom),
                birthYearTo: Number(formValue.birthYearTo),
            };
            this.dialogRef.close(ageGroup);
        }
    }
}

