import {Component, inject, signal} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RaceMeasurementService} from "../../services/race-measurement.service";
import {MeasurementImportPreviewResponse} from "../../models/measurement-import.model";
import {RACE_MEASUREMENT_IMPORT_TARGET_FIELDS} from "../../models/race-measurement.model";

export interface RaceMeasurementImportMappingDialogData {
    raceId: number;
    /** How many archived measurements the import will replace - shown in the warning. */
    existingCount: number;
}

export interface RaceMeasurementImportMappingDialogResult {
    file: File;
    delimiter?: string;
    mapping: Record<string, string>;
}

/**
 * Column mapping for replacing a race's archived measurements with a CSV - the counterpart of
 * measurement-import-mapping-dialog for "Zuordnung & Sync". A file from this view's own CSV export
 * maps itself.
 */
@Component({
    selector: "app-race-measurement-import-mapping-dialog",
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatProgressSpinnerModule,
    ],
    template: `
        <h2 mat-dialog-title>Archivierte Messungen importieren</h2>
        <mat-dialog-content>
            <p class="warning">
                Der Import <strong>ersetzt alle {{ data.existingCount }} archivierten Messungen</strong> dieses Rennens.
                Die Zeiten bei den Teilnehmern ändern sich erst mit „Sync zu Teilnehmern“.
            </p>
            <p class="hint">
                CSV-Datei (beliebiges Trennzeichen). Ordne die Spalten der Datei unseren Feldern zu; eine Datei aus
                „CSV-Export“ ist schon richtig zugeordnet. Die Zuordnung zum Teilnehmer erfolgt über die Startnummer -
                eine Startnummer, die es in diesem Rennen nicht gibt, wird ohne Teilnehmer importiert und gemeldet.
                Leere Geräte-Nr. oder &quot;-&quot; bedeutet &quot;ohne Gerät erfasst&quot;. Ist eine Zeile fehlerhaft,
                wird nichts importiert.
            </p>

            <div class="file-row">
                <input #fileInput type="file" accept=".csv,.txt,text/csv" hidden (change)="onFileSelected($event)" />
                <button mat-raised-button (click)="fileInput.click()">
                    <mat-icon>upload_file</mat-icon>
                    Datei wählen
                </button>
                @if (file()) {
                    <span class="filename">{{ file()!.name }}</span>
                }
            </div>

            @if (file()) {
                <div class="format-row">
                    <mat-form-field appearance="outline">
                        <mat-label>Trennzeichen</mat-label>
                        <mat-select [value]="delimiter()" (selectionChange)="onDelimiterChange($event.value)">
                            @for (option of delimiterOptions; track option.value) {
                                <mat-option [value]="option.value">{{ option.label }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
            }

            @if (previewLoading()) {
                <div class="loading-row">
                    <mat-spinner diameter="24"></mat-spinner>
                    <span>Datei wird analysiert...</span>
                </div>
            }

            @if (previewError()) {
                <p class="error">{{ previewError() }}</p>
            }

            @if (preview(); as p) {
                <h3>Spalten zuordnen</h3>
                <form [formGroup]="mappingForm" class="mapping-grid">
                    @for (field of targetFields; track field.key) {
                        <mat-form-field appearance="outline">
                            <mat-label>{{ field.label }}{{ field.required ? " *" : "" }}</mat-label>
                            <mat-select [formControlName]="field.key">
                                <mat-option value="">— nicht importieren —</mat-option>
                                @for (sourceField of p.availableFields; track sourceField) {
                                    <mat-option [value]="sourceField">{{ sourceField }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                </form>

                @if (p.sampleRows.length > 0) {
                    <h3>Vorschau</h3>
                    <div class="preview-table-wrapper">
                        <table class="preview-table">
                            <thead>
                                <tr>
                                    @for (field of targetFields; track field.key) {
                                        <th>{{ field.label }}</th>
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                @for (row of p.sampleRows; track $index) {
                                    <tr>
                                        @for (field of targetFields; track field.key) {
                                            <td>{{ previewValue(row, field.key) }}</td>
                                        }
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                }
            }
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button (click)="onCancel()">Abbrechen</button>
            <button
                mat-raised-button
                color="warn"
                [disabled]="!preview() || previewLoading() || mappingForm.invalid"
                (click)="onImport()"
            >
                Ersetzen
            </button>
        </mat-dialog-actions>
    `,
    styles: [
        `
            mat-dialog-content {
                min-width: 500px;
                max-width: 80vw;
            }

            .warning {
                color: #b00020;
            }

            .hint {
                font-size: 12px;
                color: rgba(0, 0, 0, 0.6);
            }

            .file-row,
            .format-row,
            .loading-row {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 8px;
            }

            .filename {
                font-size: 13px;
            }

            .error {
                color: #b00020;
            }

            .mapping-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
                gap: 4px 16px;
            }

            .preview-table-wrapper {
                overflow-x: auto;
                max-width: 100%;
            }

            .preview-table {
                border-collapse: collapse;
                font-size: 12px;
                width: 100%;
            }

            .preview-table th,
            .preview-table td {
                border: 1px solid rgba(0, 0, 0, 0.12);
                padding: 4px 8px;
                text-align: left;
                white-space: nowrap;
            }
        `,
    ],
})
export class RaceMeasurementImportMappingDialogComponent {
    private fb = inject(FormBuilder);
    private raceMeasurementService = inject(RaceMeasurementService);
    private dialogRef = inject(MatDialogRef<RaceMeasurementImportMappingDialogComponent>);
    data = inject<RaceMeasurementImportMappingDialogData>(MAT_DIALOG_DATA);

    readonly targetFields = RACE_MEASUREMENT_IMPORT_TARGET_FIELDS;
    readonly delimiterOptions = [
        {value: "", label: "Automatisch erkennen"},
        {value: ";", label: "Semikolon (;)"},
        {value: ",", label: "Komma (,)"},
        {value: "\t", label: "Tab"},
        {value: "|", label: "Pipe (|)"},
    ];

    file = signal<File | null>(null);
    delimiter = signal<string>("");
    previewLoading = signal(false);
    previewError = signal<string | null>(null);
    preview = signal<MeasurementImportPreviewResponse | null>(null);

    mappingForm: FormGroup = this.fb.group(
        Object.fromEntries(
            this.targetFields.map(field => [field.key, ["", field.required ? Validators.required : []]]),
        ),
    );

    // A newer file/delimiter choice must win over a slower earlier preview request - see
    // measurement-import-mapping-dialog.
    private analyzeRequestId = 0;

    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        const selected = input.files?.[0] ?? null;
        this.file.set(selected);
        this.preview.set(null);
        this.previewError.set(null);
        if (selected) {
            this.analyze();
        } else {
            this.analyzeRequestId++;
            this.previewLoading.set(false);
        }
    }

    onDelimiterChange(delimiter: string): void {
        this.delimiter.set(delimiter);
        this.analyze();
    }

    private analyze(): void {
        const file = this.file();
        if (!file) {
            return;
        }
        const requestId = ++this.analyzeRequestId;
        this.previewLoading.set(true);
        this.previewError.set(null);
        this.raceMeasurementService.previewImport(this.data.raceId, file, this.delimiter() || undefined).subscribe({
            next: response => {
                if (requestId !== this.analyzeRequestId) {
                    return;
                }
                this.previewLoading.set(false);
                this.preview.set(response);
                const patch: Record<string, string> = {};
                for (const field of this.targetFields) {
                    patch[field.key] = response.suggestedMapping[field.key] ?? "";
                }
                this.mappingForm.patchValue(patch);
            },
            error: err => {
                if (requestId !== this.analyzeRequestId) {
                    return;
                }
                this.previewLoading.set(false);
                this.preview.set(null);
                this.previewError.set(err?.error?.message ?? "Datei konnte nicht gelesen/analysiert werden.");
            },
        });
    }

    previewValue(row: Record<string, string>, targetKey: string): string {
        const sourceField = this.mappingForm.get(targetKey)?.value;
        if (!sourceField) {
            return "";
        }
        return row[sourceField] ?? "";
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onImport(): void {
        const file = this.file();
        if (!file) {
            return;
        }
        const mapping: Record<string, string> = {};
        for (const [key, value] of Object.entries(this.mappingForm.value as Record<string, string>)) {
            if (value) {
                mapping[key] = value;
            }
        }
        const result: RaceMeasurementImportMappingDialogResult = {
            file,
            delimiter: this.delimiter() || undefined,
            mapping,
        };
        this.dialogRef.close(result);
    }
}
