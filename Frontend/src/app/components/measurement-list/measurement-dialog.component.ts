import {
    Component,
    inject,
} from "@angular/core";
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
    Measurement,
    MeasurementRequest,
} from "../../models/measurement.model";

@Component({
    selector: "app-measurement-dialog",
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
    template: `
        <h2 mat-dialog-title>{{ data ? "Messung bearbeiten" : "Neue Messung" }}</h2>
        <mat-dialog-content>
            <form [formGroup]="form" class="measurement-form">
                <div class="time-input-group">
                    <mat-form-field appearance="outline">
                        <mat-label>Minuten</mat-label>
                        <input matInput type="number" formControlName="minutes" min="0" required/>
                        @if (form.get("minutes")?.hasError("required") &&
                        form.get("minutes")?.touched) {
                            <mat-error>Minuten erforderlich</mat-error>
                        }
                        @if (form.get("minutes")?.hasError("min")) {
                            <mat-error>Minuten müssen >= 0 sein</mat-error>
                        }
                    </mat-form-field>

                    <mat-form-field appearance="outline">
                        <mat-label>Sekunden</mat-label>
                        <input matInput type="number" formControlName="seconds" min="0" max="59" required/>
                        @if (form.get("seconds")?.hasError("required") &&
                        form.get("seconds")?.touched) {
                            <mat-error>Sekunden erforderlich</mat-error>
                        }
                        @if (form.get("seconds")?.hasError("min") || form.get("seconds")?.hasError("max")) {
                            <mat-error>Sekunden: 0-59</mat-error>
                        }
                    </mat-form-field>

                    <mat-form-field appearance="outline">
                        <mat-label>Millisekunden</mat-label>
                        <input matInput type="number" formControlName="milliseconds" min="0" max="999" required/>
                        @if (form.get("milliseconds")?.hasError("required") &&
                        form.get("milliseconds")?.touched) {
                            <mat-error>Millisekunden erforderlich</mat-error>
                        }
                        @if (form.get("milliseconds")?.hasError("min") || form.get("milliseconds")?.hasError("max")) {
                            <mat-error>Millisekunden: 0-999</mat-error>
                        }
                    </mat-form-field>
                </div>

                <mat-form-field appearance="outline">
                    <mat-label>Gemessen am (ISO Format)</mat-label>
                    <input
                            matInput
                            type="datetime-local"
                            formControlName="measuredAt"
                            step="1"
                            required
                    />
                    @if (form.get("measuredAt")?.hasError("required") &&
                    form.get("measuredAt")?.touched) {
                        <mat-error>Messzeit ist erforderlich</mat-error>
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
     styles: [
         `
           .measurement-form {
             display: flex;
             flex-direction: column;
             gap: 16px;
             min-width: 400px;
             margin-top: 16px;
           }

           .time-input-group {
             display: flex;
             gap: 12px;
             width: 100%;
           }

           .time-input-group mat-form-field {
             flex: 1;
           }

           mat-form-field {
             width: 100%;
           }
         `,
     ],
})
export class MeasurementDialogComponent {
    private fb = inject(FormBuilder);
    private dialogRef = inject(MatDialogRef<MeasurementDialogComponent>);
    public data = inject<Measurement | null>(MAT_DIALOG_DATA);

    form: FormGroup;

    constructor() {
        const timeComponents = this.splitMilliseconds(this.data?.durationMs || 0);

        this.form = this.fb.group({
            minutes: [timeComponents.minutes, [Validators.required, Validators.min(0)]],
            seconds: [timeComponents.seconds, [Validators.required, Validators.min(0), Validators.max(59)]],
            milliseconds: [timeComponents.milliseconds, [Validators.required, Validators.min(0), Validators.max(999)]],
            measuredAt: [
                this.formatDateTimeForInput(this.data?.measuredAt),
                Validators.required,
            ],
        });
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        if (this.form.valid) {
            const formValue = this.form.value;
            const durationMs = this.convertToMilliseconds(
                Number(formValue.minutes),
                Number(formValue.seconds),
                Number(formValue.milliseconds)
            );

            const measurement: MeasurementRequest = {
                participantId: this.data?.participantId ?? null,
                durationMs: durationMs,
                measuredAt: this.formatDateTimeForBackend(formValue.measuredAt),
            };
            this.dialogRef.close(measurement);
        }
    }

    private formatDateTimeForInput(dateTime?: string): string {
        if (!dateTime) {
            const now = new Date();
            return this.toLocalISOString(now);
        }
        const date = new Date(dateTime);
        return this.toLocalISOString(date);
    }

    private toLocalISOString(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    }

    private formatDateTimeForBackend(dateTime: string): string {
        const date = new Date(dateTime);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    }

    private convertToMilliseconds(minutes: number, seconds: number, milliseconds: number): number {
        return (minutes * 60 * 1000) + (seconds * 1000) + milliseconds;
    }

    private splitMilliseconds(totalMs: number): { minutes: number; seconds: number; milliseconds: number } {
        const minutes = Math.floor(totalMs / (60 * 1000));
        const remainingAfterMinutes = totalMs % (60 * 1000);
        const seconds = Math.floor(remainingAfterMinutes / 1000);
        const milliseconds = remainingAfterMinutes % 1000;

        return { minutes, seconds, milliseconds };
    }
}
