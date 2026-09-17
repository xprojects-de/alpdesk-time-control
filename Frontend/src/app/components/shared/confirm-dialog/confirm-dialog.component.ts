import {Component, inject, ChangeDetectionStrategy} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

export interface ConfirmDialogData {
    title?: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
    confirmColor?: "primary" | "warn";
    // Renders a single button (confirmLabel, default "OK") instead of confirm/cancel - for
    // replacing plain informational alert()s that don't gate an action.
    hideCancel?: boolean;
}

@Component({
    selector: "app-confirm-dialog",
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatButtonModule],
    template: `
        @if (data.title) {
            <h2 mat-dialog-title>{{ data.title }}</h2>
        }
        <mat-dialog-content>
            <p class="confirm-dialog-message">{{ data.message }}</p>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            @if (!data.hideCancel) {
                <button mat-button (click)="onCancel()">{{ data.cancelLabel || "Abbrechen" }}</button>
            }
            <button
                    mat-raised-button
                    [color]="data.confirmColor || 'primary'"
                    (click)="onConfirm()"
            >
                {{ data.confirmLabel || "OK" }}
            </button>
        </mat-dialog-actions>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
          .confirm-dialog-message {
            white-space: pre-line;
            min-width: 300px;
            max-width: 500px;
          }
        `,
    ],
})
export class ConfirmDialogComponent {
    private dialogRef = inject(MatDialogRef<ConfirmDialogComponent>);
    public data = inject<ConfirmDialogData>(MAT_DIALOG_DATA);

    onCancel(): void {
        this.dialogRef.close(false);
    }

    onConfirm(): void {
        this.dialogRef.close(true);
    }
}
