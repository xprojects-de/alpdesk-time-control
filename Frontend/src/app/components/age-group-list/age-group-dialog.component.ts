import {Component, inject} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {AgeGroup, AgeGroupRequest, STANDARD_VARIANT, variantLabel} from "../../models/age-group.model";

/**
 * An existing age group to edit, or just the season and variant a new one is being created in -
 * the dialog always needs both, since a class's birth years are only meaningful together with them.
 */
export interface AgeGroupDialogData {
    ageGroup: AgeGroup | null;
    seasonYear: number;
    variant: string;
}
import {Gender, GenderLabels} from "../../models/gender.model";
import {notBlank} from "../../utils/validators.util";

@Component({
    selector: "app-age-group-dialog",
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
    ],
    template: `
        <h2 mat-dialog-title>
            {{ data.ageGroup ? "Altersgruppe bearbeiten" : "Neue Altersgruppe" }}
            <span class="season-badge">Saison {{ data.seasonYear }}</span>
            @if (data.variant !== standardVariant) {
                <span class="season-badge">{{ label(data.variant) }}</span>
            }
        </h2>
        <mat-dialog-content>
            <form [formGroup]="form" class="age-group-form">
                <mat-form-field appearance="outline">
                    <mat-label>Name</mat-label>
                    <input matInput formControlName="name" required />
                    @if (form.get("name")?.hasError("required") && form.get("name")?.touched) {
                        <mat-error>Name ist erforderlich</mat-error>
                    }
                    @if (form.get("name")?.hasError("blank")) {
                        <mat-error>Name darf nicht nur aus Leerzeichen bestehen</mat-error>
                    }
                    <mat-hint>z.B. "Herren allgemein" oder "Damen U18"</mat-hint>
                </mat-form-field>

                <!-- The season is shown in the title and deliberately not editable here: it
                     belongs to the list currently on screen, not to the individual group. Making it
                     editable would be the one way to write a group into a season the table next to
                     it does not show. Switching seasons goes through the season selector. -->
                <p class="season-note">
                    Diese Geburtsjahrgänge gelten für <strong>Saison {{ data.seasonYear }}</strong>
                    @if (data.variant !== standardVariant) {
                        in der Variante <strong>{{ label(data.variant) }}</strong>
                    }
                    . Für eine andere Saison oder Variante oben umschalten.
                </p>

                <mat-form-field appearance="outline">
                    <mat-label>Geschlecht</mat-label>
                    <mat-select formControlName="gender" required>
                        @for (gender of genderOptions; track gender.value) {
                            <mat-option [value]="gender.value">{{ gender.label }}</mat-option>
                        }
                    </mat-select>
                    @if (form.get("gender")?.hasError("required") && form.get("gender")?.touched) {
                        <mat-error>Geschlecht ist erforderlich</mat-error>
                    }
                    <mat-hint>Für welches Geschlecht gilt diese Altersgruppe?</mat-hint>
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Geburtsjahr von</mat-label>
                    <input matInput type="number" formControlName="birthYearFrom" required min="1900" max="2100" />
                    @if (form.get("birthYearFrom")?.hasError("required") && form.get("birthYearFrom")?.touched) {
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
                    <input matInput type="number" formControlName="birthYearTo" required min="1900" max="2100" />
                    @if (form.get("birthYearTo")?.hasError("required") && form.get("birthYearTo")?.touched) {
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
            <button mat-raised-button color="primary" (click)="onSave()" [disabled]="!form.valid">Speichern</button>
        </mat-dialog-actions>
    `,
    styles: [
        `
            .age-group-form {
                display: flex;
                flex-direction: column;
                gap: 16px;
                min-width: 400px;
                margin-top: 16px;
            }

            mat-form-field {
                width: 100%;
            }

            .season-note {
                margin: 0 0 4px;
                color: rgba(0, 0, 0, 0.6);
                font-size: 13px;
            }

            .season-badge {
                margin-left: 8px;
                padding: 2px 8px;
                border-radius: 12px;
                background: rgba(0, 0, 0, 0.08);
                font-size: 0.7em;
                font-weight: 500;
                vertical-align: middle;
            }
        `,
    ],
})
export class AgeGroupDialogComponent {
    private fb = inject(FormBuilder);
    private dialogRef = inject(MatDialogRef<AgeGroupDialogComponent>);
    public data = inject<AgeGroupDialogData>(MAT_DIALOG_DATA);

    form: FormGroup;
    standardVariant = STANDARD_VARIANT;
    label = variantLabel;
    genderOptions = [
        {value: Gender.FEMALE, label: GenderLabels[Gender.FEMALE]},
        {value: Gender.MALE, label: GenderLabels[Gender.MALE]},
        {value: Gender.BOTH, label: GenderLabels[Gender.BOTH]},
    ];

    constructor() {
        this.form = this.fb.group(
            {
                name: [this.data.ageGroup?.name || "", [Validators.required, notBlank()]],
                gender: [this.data.ageGroup?.gender || "", Validators.required],
                birthYearFrom: [
                    this.data.ageGroup?.birthYearFrom || "",
                    [Validators.required, Validators.min(1900), Validators.max(2100)],
                ],
                birthYearTo: [
                    this.data.ageGroup?.birthYearTo || "",
                    [Validators.required, Validators.min(1900), Validators.max(2100)],
                ],
            },
            {validators: this.yearRangeValidator},
        );
    }

    yearRangeValidator(form: FormGroup) {
        const fromYear = form.get("birthYearFrom")?.value;
        const toYear = form.get("birthYearTo")?.value;

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
                // From the dialog data, not from the form: editing keeps the group's own season,
                // creating uses the one on screen - changing it here is not offered (see template).
                seasonYear: this.data.ageGroup?.seasonYear ?? this.data.seasonYear,
                variant: this.data.ageGroup?.variant ?? this.data.variant,
                gender: formValue.gender,
                birthYearFrom: Number(formValue.birthYearFrom),
                birthYearTo: Number(formValue.birthYearTo),
            };
            this.dialogRef.close(ageGroup);
        }
    }
}
