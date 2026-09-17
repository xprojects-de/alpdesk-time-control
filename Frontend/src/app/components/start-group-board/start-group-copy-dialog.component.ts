import {Component, inject, ChangeDetectionStrategy} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {Race} from "../../models/race.model";

export interface StartGroupCopyDialogData {
    sourceRaceId: number;
    races: Race[];
}

@Component({
    selector: "app-start-group-copy-dialog",
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
    ],
    template: `
        <h2 mat-dialog-title>Startgruppen-Zuordnung übernehmen</h2>
        <mat-dialog-content>
            <p>
                Die gespeicherte Gruppen-Zuordnung von "{{ sourceRaceName() }}" wird in die
                ausgewählten Rennen übernommen (per Person zugeordnet). Ein Teilnehmer, der im
                Zielrennen nicht vorkommt, bleibt unverändert.
            </p>
            <form [formGroup]="form">
                <mat-form-field appearance="outline">
                    <mat-label>Zielrennen</mat-label>
                    <mat-select formControlName="targetRaceIds" multiple required>
                        @for (race of otherRaces(); track race.id) {
                            <mat-option [value]="race.id">{{ race.name }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </form>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button (click)="onCancel()">Abbrechen</button>
            <button mat-raised-button color="primary" (click)="onSave()" [disabled]="!form.valid">Übernehmen</button>
        </mat-dialog-actions>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
          mat-form-field {
            width: 100%;
            min-width: 350px;
          }
        `,
    ],
})
export class StartGroupCopyDialogComponent {
    private fb = inject(FormBuilder);
    private dialogRef = inject(MatDialogRef<StartGroupCopyDialogComponent>);
    public data = inject<StartGroupCopyDialogData>(MAT_DIALOG_DATA);

    form: FormGroup = this.fb.group({
        targetRaceIds: [[], Validators.required],
    });

    sourceRaceName(): string {
        return this.data.races.find(r => r.id === this.data.sourceRaceId)?.name ?? "";
    }

    otherRaces(): Race[] {
        return this.data.races.filter(r => r.id !== this.data.sourceRaceId);
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        if (this.form.valid) {
            this.dialogRef.close(this.form.value.targetRaceIds as number[]);
        }
    }
}
