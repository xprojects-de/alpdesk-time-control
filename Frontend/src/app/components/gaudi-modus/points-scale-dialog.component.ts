import {Component, inject} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {PointsScale, PointsScaleRequest} from "../../models/points-scale.model";

@Component({
    selector: "app-points-scale-dialog",
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
    template: `
        <h2 mat-dialog-title>{{ data ? "Punkteschema bearbeiten" : "Neues Punkteschema" }}</h2>
        <mat-dialog-content>
            <form [formGroup]="form" class="points-scale-form">
                <mat-form-field appearance="outline">
                    <mat-label>Name</mat-label>
                    <input matInput formControlName="name" required/>
                    @if (form.get("name")?.hasError("required") && form.get("name")?.touched) {
                        <mat-error>Name ist erforderlich</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Punkte je Platz (kommagetrennt, Platz 1 zuerst)</mat-label>
                    <textarea matInput formControlName="pointsCsv" rows="4" required
                              placeholder="100,80,60,50,45,40,36,32,29,26,24,22,20,18,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0"></textarea>
                    @if (form.get("pointsCsv")?.hasError("required") && form.get("pointsCsv")?.touched) {
                        <mat-error>Punkteliste ist erforderlich</mat-error>
                    }
                    @if (form.get("pointsCsv")?.hasError("invalid")) {
                        <mat-error>Bitte nur kommagetrennte Zahlen eingeben</mat-error>
                    }
                    @if (form.get("pointsCsv")?.hasError("empty")) {
                        <mat-error>Mindestens ein Punktewert ist erforderlich</mat-error>
                    }
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
          .points-scale-form {
            display: flex;
            flex-direction: column;
            gap: 16px;
            min-width: 420px;
            margin-top: 16px;
          }

          mat-form-field {
            width: 100%;
          }
        `,
    ],
})
export class PointsScaleDialogComponent {
    private fb = inject(FormBuilder);
    private dialogRef = inject(MatDialogRef<PointsScaleDialogComponent>);
    public data = inject<PointsScale | null>(MAT_DIALOG_DATA);

    form: FormGroup = this.fb.group({
        name: [this.data?.name || "", Validators.required],
        pointsCsv: [this.data?.points?.join(",") || "", Validators.required],
    });

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        if (!this.form.valid) {
            return;
        }
        const points = String(this.form.value.pointsCsv)
            .split(",")
            .map((p: string) => p.trim())
            .filter((p: string) => p.length > 0)
            .map((p: string) => Number(p));

        if (points.length === 0) {
            this.form.get("pointsCsv")?.setErrors({empty: true});
            return;
        }

        if (points.some((p: number) => Number.isNaN(p))) {
            this.form.get("pointsCsv")?.setErrors({invalid: true});
            return;
        }

        const request: PointsScaleRequest = {
            name: this.form.value.name,
            points,
        };
        this.dialogRef.close(request);
    }
}
