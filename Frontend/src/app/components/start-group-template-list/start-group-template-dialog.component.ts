import {Component, inject} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {StartGroupTemplate, StartGroupTemplateRequest, START_GROUP_COLOR_PALETTE} from "../../models/start-group.model";
import {notBlank} from "../../utils/validators.util";

@Component({
    selector: "app-start-group-template-dialog",
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTooltipModule,
    ],
    template: `
        <h2 mat-dialog-title>
            {{ data ? "Startgruppe bearbeiten" : "Neue Startgruppe" }}
        </h2>
        <mat-dialog-content>
            <form [formGroup]="form" class="start-group-form">
                <mat-form-field appearance="outline">
                    <mat-label>Label</mat-label>
                    <input matInput formControlName="label" required />
                    @if (form.get("label")?.hasError("required") && form.get("label")?.touched) {
                        <mat-error>Label ist erforderlich</mat-error>
                    }
                    @if (form.get("label")?.hasError("blank")) {
                        <mat-error>Label darf nicht nur aus Leerzeichen bestehen</mat-error>
                    }
                    <mat-hint>z.B. "Gruppe A" oder "Halle 1"</mat-hint>
                </mat-form-field>

                <div class="color-picker">
                    <span class="color-picker-label">Farbe</span>
                    <div class="color-swatches">
                        @for (color of palette; track color.hex) {
                            <button
                                type="button"
                                class="swatch"
                                [class.selected]="form.value.color === color.hex"
                                [style.background]="color.hex"
                                [matTooltip]="color.label"
                                (click)="selectColor(color.hex)"
                            ></button>
                        }
                    </div>
                </div>

                <mat-form-field appearance="outline">
                    <mat-label>Position</mat-label>
                    <input matInput type="number" formControlName="position" />
                    <mat-hint>Reihenfolge dieser Vorlage gegenüber anderen (kleiner = früher)</mat-hint>
                </mat-form-field>

                <div class="offset-row">
                    <mat-form-field appearance="outline">
                        <mat-label>Zeitversatz - Minuten</mat-label>
                        <input matInput type="number" min="0" formControlName="offsetMinutes" />
                    </mat-form-field>
                    <mat-form-field appearance="outline">
                        <mat-label>Sekunden</mat-label>
                        <input matInput type="number" min="0" max="59" formControlName="offsetSecondsPart" />
                    </mat-form-field>
                </div>
                <p class="hint">Optional, für Blockstart mit versetztem Startsignal (z.B. 10 Minuten)</p>
            </form>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button (click)="onCancel()">Abbrechen</button>
            <button mat-raised-button color="primary" (click)="onSave()" [disabled]="!form.valid">Speichern</button>
        </mat-dialog-actions>
    `,
    styles: [
        `
            .start-group-form {
                display: flex;
                flex-direction: column;
                gap: 16px;
                min-width: 400px;
                margin-top: 16px;
            }

            mat-form-field {
                width: 100%;
            }

            .color-picker-label {
                display: block;
                font-size: 12px;
                color: rgba(0, 0, 0, 0.6);
                margin-bottom: 6px;
            }

            .color-swatches {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }

            .swatch {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                border: 2px solid transparent;
                cursor: pointer;
                padding: 0;
            }

            .swatch.selected {
                border-color: rgba(0, 0, 0, 0.7);
            }

            .offset-row {
                display: flex;
                gap: 12px;
            }

            .offset-row mat-form-field {
                flex: 1 1 0;
            }

            .hint {
                font-size: 12px;
                color: rgba(0, 0, 0, 0.6);
                margin-top: -12px;
            }
        `,
    ],
})
export class StartGroupTemplateDialogComponent {
    private fb = inject(FormBuilder);
    private dialogRef = inject(MatDialogRef<StartGroupTemplateDialogComponent>);
    public data = inject<StartGroupTemplate | null>(MAT_DIALOG_DATA);

    readonly palette = START_GROUP_COLOR_PALETTE;

    form: FormGroup;

    constructor() {
        const totalOffsetSeconds = this.data?.offsetSeconds ?? null;
        this.form = this.fb.group({
            label: [this.data?.label || "", [Validators.required, notBlank()]],
            color: [this.data?.color || this.palette[0].hex, Validators.required],
            position: [this.data?.position ?? 0],
            offsetMinutes: [totalOffsetSeconds != null ? Math.floor(totalOffsetSeconds / 60) : null],
            offsetSecondsPart: [totalOffsetSeconds != null ? totalOffsetSeconds % 60 : null],
        });
    }

    selectColor(hex: string): void {
        this.form.patchValue({color: hex});
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        if (this.form.valid) {
            const minutes = this.form.value.offsetMinutes || 0;
            const seconds = this.form.value.offsetSecondsPart || 0;
            const offsetSeconds = minutes || seconds ? minutes * 60 + seconds : null;
            const template: StartGroupTemplateRequest = {
                label: this.form.value.label,
                color: this.form.value.color,
                position: this.form.value.position ?? 0,
                offsetSeconds,
            };
            this.dialogRef.close(template);
        }
    }
}
