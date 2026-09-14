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
import {Team, TeamRequest} from "../../models/team.model";
import {notBlank} from "../../utils/validators.util";

@Component({
    selector: "app-team-dialog",
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
    template: `
        <h2 mat-dialog-title>
            {{ data ? "Team bearbeiten" : "Neues Team" }}
        </h2>
        <mat-dialog-content>
            <form [formGroup]="form" class="team-form">
                <mat-form-field appearance="outline">
                    <mat-label>Name</mat-label>
                    <input matInput formControlName="name" required/>
                    @if (form.get("name")?.hasError("required") &&
                    form.get("name")?.touched) {
                        <mat-error>Name ist erforderlich</mat-error>
                    }
                    @if (form.get("name")?.hasError("blank")) {
                        <mat-error>Name darf nicht nur aus Leerzeichen bestehen</mat-error>
                    }
                    <mat-hint>z.B. "SC Musterhausen"</mat-hint>
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
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
          .team-form {
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
export class TeamDialogComponent {
    private fb = inject(FormBuilder);
    private dialogRef = inject(MatDialogRef<TeamDialogComponent>);
    public data = inject<Team | null>(MAT_DIALOG_DATA);

    form: FormGroup;

    constructor() {
        this.form = this.fb.group({
            name: [this.data?.name || "", [Validators.required, notBlank()]],
        });
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        if (this.form.valid) {
            const team: TeamRequest = {
                name: this.form.value.name,
            };
            this.dialogRef.close(team);
        }
    }
}
