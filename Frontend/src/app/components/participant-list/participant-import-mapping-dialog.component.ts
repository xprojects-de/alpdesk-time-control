import {Component, inject, signal} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatDialogRef, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ParticipantService} from "../../services/participant.service";
import {
    PARTICIPANT_IMPORT_TARGET_FIELDS,
    ParticipantImportFileFormat,
    ParticipantImportPreviewResponse,
} from "../../models/participant-import.model";

export interface ParticipantImportMappingDialogResult {
    file: File;
    format: ParticipantImportFileFormat;
    delimiter?: string;
    mapping: Record<string, string>;
}

@Component({
    selector: "app-participant-import-mapping-dialog",
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
        <h2 mat-dialog-title>Teilnehmer importieren</h2>
        <mat-dialog-content>
            <p class="hint">
                CSV (beliebiges Trennzeichen) oder DSV-Wettkampfdatei (XML). Ordne die Spalten/Felder der Datei unseren
                Feldern zu - das Mapping wird nicht gespeichert und muss bei jedem Import neu gewählt werden. Nicht
                zugeordnete Felder werden einfach nicht importiert.
            </p>

            <div class="file-row">
                <input
                    #fileInput
                    type="file"
                    accept=".csv,.txt,.xml,text/csv,text/xml,application/xml"
                    hidden
                    (change)="onFileSelected($event)"
                />
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
                        <mat-label>Format</mat-label>
                        <mat-select [value]="format()" (selectionChange)="onFormatChange($event.value)">
                            <mat-option value="CSV">CSV / Text</mat-option>
                            <mat-option value="DSV_XML">DSV-Wettkampfdatei (XML)</mat-option>
                        </mat-select>
                    </mat-form-field>

                    @if (format() === "CSV") {
                        <mat-form-field appearance="outline">
                            <mat-label>Trennzeichen</mat-label>
                            <mat-select [value]="delimiter()" (selectionChange)="onDelimiterChange($event.value)">
                                @for (option of delimiterOptions; track option.value) {
                                    <mat-option [value]="option.value">{{ option.label }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
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
            <button mat-raised-button color="primary" [disabled]="!preview() || previewLoading()" (click)="onImport()">
                Importieren
            </button>
        </mat-dialog-actions>
    `,
    styles: [
        `
            mat-dialog-content {
                min-width: 500px;
                max-width: 80vw;
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
export class ParticipantImportMappingDialogComponent {
    private fb = inject(FormBuilder);
    private participantService = inject(ParticipantService);
    private dialogRef = inject(MatDialogRef<ParticipantImportMappingDialogComponent>);

    readonly targetFields = PARTICIPANT_IMPORT_TARGET_FIELDS;
    readonly delimiterOptions = [
        {value: "", label: "Automatisch erkennen"},
        {value: ";", label: "Semikolon (;)"},
        {value: ",", label: "Komma (,)"},
        {value: "\t", label: "Tab"},
        {value: "|", label: "Pipe (|)"},
    ];

    file = signal<File | null>(null);
    format = signal<ParticipantImportFileFormat>("CSV");
    delimiter = signal<string>("");
    previewLoading = signal(false);
    previewError = signal<string | null>(null);
    preview = signal<ParticipantImportPreviewResponse | null>(null);

    mappingForm: FormGroup = this.fb.group(Object.fromEntries(this.targetFields.map(field => [field.key, [""]])));

    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        const selected = input.files?.[0] ?? null;
        this.file.set(selected);
        this.preview.set(null);
        this.previewError.set(null);
        if (selected) {
            this.format.set(selected.name.toLowerCase().endsWith(".xml") ? "DSV_XML" : "CSV");
            this.analyze();
        } else {
            // No file (re-opened the picker and canceled): bump the request id on its own so a
            // still-in-flight analyze() for the previously selected file can no longer pass the
            // staleness check and repopulate preview/previewLoading for a file that's now cleared.
            this.analyzeRequestId++;
            this.previewLoading.set(false);
        }
    }

    onFormatChange(format: ParticipantImportFileFormat): void {
        this.format.set(format);
        this.analyze();
    }

    onDelimiterChange(delimiter: string): void {
        this.delimiter.set(delimiter);
        this.analyze();
    }

    // Guards against a stale response overwriting newer state: analyze() is re-triggered on every
    // file/format/delimiter change with no request cancellation, so rapidly switching format while
    // a slower earlier request is still in flight could otherwise let that late response's preview
    // and suggested mapping silently apply to the now-different selection.
    private analyzeRequestId = 0;

    private analyze(): void {
        const file = this.file();
        if (!file) {
            return;
        }
        const requestId = ++this.analyzeRequestId;
        this.previewLoading.set(true);
        this.previewError.set(null);
        this.participantService.previewImport(file, this.format(), this.delimiter() || undefined).subscribe({
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
        const rawMapping = this.mappingForm.value as Record<string, string>;
        const mapping: Record<string, string> = {};
        for (const [key, value] of Object.entries(rawMapping)) {
            if (value) {
                mapping[key] = value;
            }
        }
        const result: ParticipantImportMappingDialogResult = {
            file,
            format: this.format(),
            delimiter: this.delimiter() || undefined,
            mapping,
        };
        this.dialogRef.close(result);
    }
}
