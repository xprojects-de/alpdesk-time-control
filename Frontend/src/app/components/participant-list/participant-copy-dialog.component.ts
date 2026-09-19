import {Component, inject, ChangeDetectionStrategy} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {Race} from "../../models/race.model";

export interface ParticipantCopyDialogData {
    sourceRaceId: number;
    races: Race[];
}

export interface ParticipantCopyDialogResult {
    targetRaceIds: number[];
    carryStartNumber: boolean;
}

@Component({
    selector: "app-participant-copy-dialog",
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
        MatCheckboxModule,
    ],
    template: `
        <h2 mat-dialog-title>Teilnehmer in andere Rennen kopieren</h2>
        <mat-dialog-content>
            <p>
                Alle Teilnehmer von "{{ sourceRaceName() }}" werden in die ausgewählten Rennen übernommen
                (Name, Team, Kategorie, Kommentar, Startgruppe und Startreihenfolge). Ein DNS-Status wird
                mitkopiert, DNF und DSQ nicht. Zeiten und Strafen werden nicht übernommen. Personen,
                die im Zielrennen bereits Teilnehmer sind, werden übersprungen.
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
                <mat-checkbox formControlName="carryStartNumber">
                    Startnummern übernehmen
                </mat-checkbox>
                <p class="hint">
                    Bereits im Zielrennen vergebene Startnummern werden dabei übersprungen (leer gelassen).
                </p>
            </form>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button (click)="onCancel()">Abbrechen</button>
            <button mat-raised-button color="primary" (click)="onSave()" [disabled]="!form.valid">Kopieren</button>
        </mat-dialog-actions>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
          mat-form-field {
            width: 100%;
            min-width: 350px;
          }

          .hint {
            font-size: 12px;
            color: rgba(0, 0, 0, 0.6);
            margin-top: 4px;
          }
        `,
    ],
})
export class ParticipantCopyDialogComponent {
    private fb = inject(FormBuilder);
    private dialogRef = inject(MatDialogRef<ParticipantCopyDialogComponent>);
    public data = inject<ParticipantCopyDialogData>(MAT_DIALOG_DATA);

    form: FormGroup = this.fb.group({
        targetRaceIds: [[], Validators.required],
        carryStartNumber: [false],
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
            const result: ParticipantCopyDialogResult = {
                targetRaceIds: this.form.value.targetRaceIds as number[],
                carryStartNumber: this.form.value.carryStartNumber as boolean,
            };
            this.dialogRef.close(result);
        }
    }
}
