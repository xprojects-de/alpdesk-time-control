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
import {MatSelectModule} from "@angular/material/select";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectAllRaces} from "../../store/race/race.selectors";
import {Race} from "../../models/race.model";
import {
    GaudiModeRequest,
    GaudiModeType,
    GaudiModeTypeLabels,
} from "../../models/gaudi-mode.model";

export interface GaudiModeDialogData {
    raceId: number | null;
}

@Component({
    selector: "app-gaudi-mode-dialog",
    standalone: true,
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
        <h2 mat-dialog-title>Neuer Gaudi-Modus</h2>
        <mat-dialog-content>
            <form [formGroup]="form" class="gaudi-mode-form">
                <mat-form-field appearance="outline">
                    <mat-label>Rennen</mat-label>
                    <mat-select formControlName="raceId" required>
                        @for (race of races$ | async; track race.id) {
                            <mat-option [value]="race.id">{{ race.name }}</mat-option>
                        }
                    </mat-select>
                    @if (form.get("raceId")?.hasError("required") && form.get("raceId")?.touched) {
                        <mat-error>Rennen ist erforderlich</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Modus</mat-label>
                    <mat-select formControlName="type" required>
                        @for (type of typeOptions; track type.value) {
                            <mat-option [value]="type.value">{{ type.label }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Name</mat-label>
                    <input matInput formControlName="name" required/>
                    @if (form.get("name")?.hasError("required") && form.get("name")?.touched) {
                        <mat-error>Name ist erforderlich</mat-error>
                    }
                    <mat-hint>z.B. "Los-Wertung Herbstrennen"</mat-hint>
                </mat-form-field>

                @if (form.value.type === gaudiModeType.TEAM) {
                    <mat-form-field appearance="outline">
                        <mat-label>Teilnehmer pro Team</mat-label>
                        <input matInput type="number" formControlName="teamSize" required min="1"/>
                        @if (form.get("teamSize")?.hasError("required") && form.get("teamSize")?.touched) {
                            <mat-error>Teamgröße ist erforderlich</mat-error>
                        }
                        <mat-hint>Anzahl der schnellsten Teammitglieder, die gewertet werden</mat-hint>
                    </mat-form-field>
                }
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
                Erstellen
            </button>
        </mat-dialog-actions>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
          .gaudi-mode-form {
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
export class GaudiModeDialogComponent {
    private fb = inject(FormBuilder);
    private dialogRef = inject(MatDialogRef<GaudiModeDialogComponent>);
    private store = inject(Store);
    public data = inject<GaudiModeDialogData | null>(MAT_DIALOG_DATA);

    races$: Observable<Race[]> = this.store.select(selectAllRaces);
    gaudiModeType = GaudiModeType;
    typeOptions = [
        {value: GaudiModeType.LOS, label: GaudiModeTypeLabels[GaudiModeType.LOS]},
        {value: GaudiModeType.TEAM, label: GaudiModeTypeLabels[GaudiModeType.TEAM]},
    ];

    form: FormGroup = this.fb.group({
        raceId: [this.data?.raceId || "", Validators.required],
        type: [GaudiModeType.LOS, Validators.required],
        name: ["", Validators.required],
        teamSize: [5],
    });

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        if (this.form.valid) {
            const formValue = this.form.value;
            const request: GaudiModeRequest = {
                raceId: Number(formValue.raceId),
                type: formValue.type,
                name: formValue.name,
                teamSize: formValue.type === GaudiModeType.TEAM ? Number(formValue.teamSize) : undefined,
            };
            this.dialogRef.close(request);
        }
    }
}
