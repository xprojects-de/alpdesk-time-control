import {Component, inject} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {Race} from "../../models/race.model";

export interface ArchiveMeasurementsDialogData {
    races: Race[];
}

export interface ArchiveMeasurementsDialogResult {
    raceId: number;
    resetDevice: boolean;
    clearAfterArchive: boolean;
}

type ArchiveMode = "reset" | "keep" | "noclear";

@Component({
    selector: "app-archive-measurements-dialog",
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatButtonModule,
    ],
    template: `
        <h2 mat-dialog-title>Messungen archivieren</h2>
        <mat-dialog-content>
            <form [formGroup]="form" class="archive-form">
                <mat-form-field appearance="outline">
                    <mat-label>Rennen</mat-label>
                    <mat-select formControlName="raceId" required>
                        @for (race of data.races; track race.id) {
                            <mat-option [value]="race.id">{{ race.name }} ({{ formatRaceDate(race.date) }})</mat-option>
                        }
                    </mat-select>
                    @if (form.get("raceId")?.hasError("required") && form.get("raceId")?.touched) {
                        <mat-error>Bitte ein Rennen auswählen</mat-error>
                    }
                </mat-form-field>

                <mat-radio-group formControlName="mode" class="mode-group">
                    <mat-radio-button value="reset">
                        Archivieren (inkl. Gerät-Reset)
                        <p class="hint">Aktuelle Messungen werden diesem Rennen zugeordnet, danach werden
                            Datenbank und Gerät geleert. Bereit für das nächste Rennen.</p>
                    </mat-radio-button>
                    <mat-radio-button value="keep">
                        Archivieren (nur Datenbank)
                        <p class="hint">Wie oben, aber nur die Datenbank wird geleert, das Gerät bleibt
                            unverändert.</p>
                    </mat-radio-button>
                    <mat-radio-button value="noclear">
                        Archivieren (ohne Löschen)
                        <p class="hint">Aktuelle Messungen werden diesem Rennen zugeordnet. Datenbank und Gerät
                            werden dabei NICHT verändert.</p>
                    </mat-radio-button>
                </mat-radio-group>
                @if (form.get("mode")?.hasError("required") && form.get("mode")?.touched) {
                    <mat-error>Bitte eine Archivierungs-Variante auswählen</mat-error>
                }
            </form>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button (click)="onCancel()">Abbrechen</button>
            <button mat-raised-button color="primary" (click)="onSave()" [disabled]="!form.valid">
                Archivieren
            </button>
        </mat-dialog-actions>
    `,
    styles: [
        `
          .archive-form {
            display: flex;
            flex-direction: column;
            gap: 8px;
            min-width: 420px;
            margin-top: 16px;
          }

          mat-form-field {
            width: 100%;
          }

          .mode-group {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .hint {
            margin: 2px 0 0;
            font-size: 12px;
            color: rgba(0, 0, 0, 0.6);
          }
        `,
    ],
})
export class ArchiveMeasurementsDialogComponent {
    private fb = inject(FormBuilder);
    private dialogRef = inject(MatDialogRef<ArchiveMeasurementsDialogComponent>);
    public data = inject<ArchiveMeasurementsDialogData>(MAT_DIALOG_DATA);

    form: FormGroup = this.fb.group({
        raceId: [null, Validators.required],
        mode: [null as ArchiveMode | null, Validators.required],
    });

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        if (!this.form.valid) {
            return;
        }
        const mode: ArchiveMode = this.form.value.mode;
        const result: ArchiveMeasurementsDialogResult = {
            raceId: Number(this.form.value.raceId),
            resetDevice: mode === "reset",
            clearAfterArchive: mode !== "noclear",
        };
        this.dialogRef.close(result);
    }

    formatRaceDate(dateString: string): string {
        const parts = dateString.split("-");
        if (parts.length === 3) {
            return `${parts[2]}.${parts[1]}.${parts[0]}`;
        }
        return dateString;
    }
}
