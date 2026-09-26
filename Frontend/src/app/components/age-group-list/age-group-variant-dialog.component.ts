import {Component, inject} from "@angular/core";
import {AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {STANDARD_VARIANT, variantLabel} from "../../models/age-group.model";

/**
 * "new": name a variant of the shown season, whose age groups are then entered by hand.
 * "copy": copy the shown variant to a variant of any season - rolling it over, or starting a new
 * variant of the same season from it.
 */
export interface AgeGroupVariantDialogData {
    mode: "new" | "copy";
    season: number;
    variant: string;
    /** Names of the shown season's existing variants - a new one must not repeat them. */
    existingVariants: string[];
    /** Seasons offered as copy target. */
    seasonOptions: number[];
}

export interface AgeGroupVariantDialogResult {
    season: number;
    variant: string;
}

@Component({
    selector: "app-age-group-variant-dialog",
    imports: [
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
    ],
    template: `
        <h2 mat-dialog-title>{{ data.mode === "new" ? "Neue Variante" : "Variante kopieren" }}</h2>
        <mat-dialog-content>
            <p class="intro">
                @if (data.mode === "new") {
                    Eine Variante gruppiert die Jahrgänge der Saison {{ data.season }} anders als der Standard, z.B.
                    jahrgangsweise für ein Kinderrennen. Nach dem Anlegen die Altersgruppen eintragen und die Variante
                    im Rennen auswählen.
                } @else {
                    Kopiert alle Altersgruppen von „{{ label(data.variant) }}“ (Saison {{ data.season }}). In eine
                    andere Saison werden die Geburtsjahrgänge um die Differenz der Jahre verschoben.
                }
            </p>
            <form [formGroup]="form" class="variant-form">
                @if (data.mode === "copy") {
                    <mat-form-field appearance="outline">
                        <mat-label>Ziel-Saison</mat-label>
                        <mat-select formControlName="season">
                            @for (season of data.seasonOptions; track season) {
                                <mat-option [value]="season">{{ season }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                }
                <mat-form-field appearance="outline">
                    <mat-label>Name der Variante</mat-label>
                    <input matInput formControlName="variant" />
                    @if (data.mode === "copy") {
                        <mat-hint>Leer lassen für den Standard der Ziel-Saison</mat-hint>
                    }
                </mat-form-field>
                @if (form.hasError("reserved")) {
                    <p class="error">„Standard“ ist für die Standard-Variante reserviert.</p>
                }
                @if (form.hasError("exists")) {
                    <p class="error">Diese Variante gibt es in der Saison schon.</p>
                }
                @if (form.hasError("sameAsSource")) {
                    <p class="error">Ziel und Quelle sind dieselbe Variante.</p>
                }
            </form>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button (click)="dialogRef.close()">Abbrechen</button>
            <button mat-raised-button color="primary" (click)="onSave()" [disabled]="form.invalid">
                {{ data.mode === "new" ? "Anlegen" : "Kopieren" }}
            </button>
        </mat-dialog-actions>
    `,
    styles: [
        `
            .intro {
                margin: 0 0 16px;
                max-width: 440px;
                color: rgba(0, 0, 0, 0.6);
                font-size: 13px;
            }

            .variant-form {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            mat-form-field {
                width: 100%;
            }

            .error {
                margin: 0;
                color: #d32f2f;
                font-size: 13px;
            }
        `,
    ],
})
export class AgeGroupVariantDialogComponent {
    dialogRef = inject(MatDialogRef<AgeGroupVariantDialogComponent, AgeGroupVariantDialogResult>);
    data = inject<AgeGroupVariantDialogData>(MAT_DIALOG_DATA);
    private fb = inject(FormBuilder);

    label = variantLabel;

    form = this.fb.nonNullable.group(
        {season: [this.data.season], variant: [""]},
        {validators: [this.targetValidator()]},
    );

    onSave(): void {
        if (this.form.invalid) {
            return;
        }
        this.dialogRef.close({
            season: this.form.controls.season.value,
            variant: this.form.controls.variant.value.trim(),
        });
    }

    // On the group rather than the name: whether a name is taken depends on the target season
    // picked next to it. A copy may target a season's standard variant (empty name), a new variant
    // needs a name.
    private targetValidator() {
        return (group: AbstractControl): ValidationErrors | null => {
            const season = group.get("season")?.value as number;
            const variant = (group.get("variant")?.value as string).trim();
            if (variant === STANDARD_VARIANT) {
                return this.data.mode === "new" ? {blank: true} : this.sameAsSource(season, variant);
            }
            if (variant.toLowerCase() === "standard") {
                return {reserved: true};
            }
            if (season === this.data.season && this.data.existingVariants.includes(variant)) {
                return variant === this.data.variant ? {sameAsSource: true} : {exists: true};
            }
            return null;
        };
    }

    private sameAsSource(season: number, variant: string): ValidationErrors | null {
        return season === this.data.season && variant === this.data.variant ? {sameAsSource: true} : null;
    }
}
