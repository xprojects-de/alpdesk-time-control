import {Component, inject, ChangeDetectionStrategy, OnInit} from "@angular/core";
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
    MatDialog,
} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {take} from "rxjs/operators";
import {selectAllRaces} from "../../store/race/race.selectors";
import {Race} from "../../models/race.model";
import {
    GaudiModeRaceEntry,
    GaudiModeRequest,
    GaudiModeType,
    GaudiModeTypeLabels,
} from "../../models/gaudi-mode.model";
import {PointsScale} from "../../models/points-scale.model";
import {PointsScaleService} from "../../services/points-scale.service";
import {PointsScaleDialogComponent} from "./points-scale-dialog.component";

export interface GaudiModeDialogData {
    raceId: number | null;
}

@Component({
    selector: "app-gaudi-mode-dialog",
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatTooltipModule,
    ],
    template: `
        <h2 mat-dialog-title>Neuer Gaudi-Modus</h2>
        <mat-dialog-content>
            <form [formGroup]="form" class="gaudi-mode-form">
                <mat-form-field appearance="outline">
                    <mat-label>Modus</mat-label>
                    <mat-select formControlName="type" required>
                        @for (type of typeOptions; track type.value) {
                            <mat-option [value]="type.value">{{ type.label }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Name</mat-label>
                    <input matInput formControlName="name" required/>
                    @if (form.get("name")?.hasError("required") && form.get("name")?.touched) {
                        <mat-error>Name ist erforderlich</mat-error>
                    }
                    <mat-hint>z.B. "Los-Wertung Herbstrennen"</mat-hint>
                </mat-form-field>

                @if (isCombination()) {
                    <mat-form-field appearance="outline">
                        <mat-label>Rennen</mat-label>
                        <mat-select [value]="selectedRaceIds" (selectionChange)="onRacesSelected($event.value)" multiple required>
                            @for (race of races$ | async; track race.id) {
                                <mat-option [value]="race.id">{{ race.name }}</mat-option>
                            }
                        </mat-select>
                        <mat-hint>Mindestens zwei Rennen auswählen</mat-hint>
                    </mat-form-field>

                    @if (form.value.type === gaudiModeType.POINTS_COMBINATION && selectedRaceIds.length > 0) {
                        <div class="weights-section">
                            <span class="weights-label">Gewichtung je Rennen</span>
                            @for (raceId of selectedRaceIds; track raceId) {
                                <div class="weight-row">
                                    <span class="weight-race-name">{{ raceName(raceId) }}</span>
                                    <input
                                            type="number"
                                            step="0.1"
                                            min="0"
                                            [value]="weights[raceId] ?? 1"
                                            (input)="onWeightChanged(raceId, $event)"
                                    />
                                </div>
                            }
                        </div>

                        <div class="points-scale-row">
                            <mat-form-field appearance="outline">
                                <mat-label>Punkteschema</mat-label>
                                <mat-select formControlName="pointsScaleId" required>
                                    @for (scale of pointsScales; track scale.id) {
                                        <mat-option [value]="scale.id">{{ scale.name }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                            <button mat-icon-button type="button" (click)="openNewPointsScale()" matTooltip="Neues Punkteschema anlegen">
                                <mat-icon>add</mat-icon>
                            </button>
                        </div>
                    }
                } @else {
                    <mat-form-field appearance="outline">
                        <mat-label>Rennen</mat-label>
                        <mat-select [value]="selectedRaceIds[0] ?? null" (selectionChange)="onSingleRaceSelected($event.value)" required>
                            @for (race of races$ | async; track race.id) {
                                <mat-option [value]="race.id">{{ race.name }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                }

                @if (form.value.type === gaudiModeType.TEAM) {
                    <mat-form-field appearance="outline">
                        <mat-label>Teilnehmer pro Team</mat-label>
                        <input matInput type="number" formControlName="teamSize" required min="1"/>
                        @if (form.get("teamSize")?.hasError("required") && form.get("teamSize")?.touched) {
                            <mat-error>Teamgröße ist erforderlich</mat-error>
                        }
                        <mat-hint>Anzahl der schnellsten Teammitglieder, die gewertet werden</mat-hint>
                    </mat-form-field>
                }
            </form>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button (click)="onCancel()">Abbrechen</button>
            <button
                    mat-raised-button
                    color="primary"
                    (click)="onSave()"
                    [disabled]="!canSave()"
            >
                Erstellen
            </button>
        </mat-dialog-actions>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
          .gaudi-mode-form {
            display: flex;
            flex-direction: column;
            gap: 16px;
            min-width: 420px;
            margin-top: 16px;
          }

          mat-form-field {
            width: 100%;
          }

          .weights-section {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-top: -8px;
          }

          .weights-label {
            font-size: 12px;
            color: rgba(0, 0, 0, 0.6);
          }

          .weight-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }

          .weight-row input {
            width: 80px;
            padding: 6px;
          }

          .points-scale-row {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .points-scale-row mat-form-field {
            flex: 1;
          }
        `,
    ],
})
export class GaudiModeDialogComponent implements OnInit {
    private fb = inject(FormBuilder);
    private dialogRef = inject(MatDialogRef<GaudiModeDialogComponent>);
    private store = inject(Store);
    private pointsScaleService = inject(PointsScaleService);
    private dialog = inject(MatDialog);
    public data = inject<GaudiModeDialogData | null>(MAT_DIALOG_DATA);

    races$: Observable<Race[]> = this.store.select(selectAllRaces);
    gaudiModeType = GaudiModeType;
    typeOptions = [
        {value: GaudiModeType.LOS, label: GaudiModeTypeLabels[GaudiModeType.LOS]},
        {value: GaudiModeType.TEAM, label: GaudiModeTypeLabels[GaudiModeType.TEAM]},
        {value: GaudiModeType.TIME_COMBINATION, label: GaudiModeTypeLabels[GaudiModeType.TIME_COMBINATION]},
        {value: GaudiModeType.POINTS_COMBINATION, label: GaudiModeTypeLabels[GaudiModeType.POINTS_COMBINATION]},
    ];

    selectedRaceIds: number[] = [];
    weights: Record<number, number> = {};
    allRaces: Race[] = [];
    pointsScales: PointsScale[] = [];

    form: FormGroup = this.fb.group({
        type: [GaudiModeType.LOS, Validators.required],
        name: ["", Validators.required],
        teamSize: [5, Validators.min(1)],
        pointsScaleId: [null],
    });

    ngOnInit(): void {
        if (this.data?.raceId) {
            this.selectedRaceIds = [this.data.raceId];
        }
        this.races$.pipe(take(1)).subscribe(races => (this.allRaces = races));
        this.loadPointsScales();

        // Switching from a combination type (multi-race) back to LOS/TEAM (single-race) must
        // not leave more than one race selected behind - the single-race select only ever shows
        // and replaces selectedRaceIds[0], so a stale second entry would silently be saved too.
        this.form.get("type")!.valueChanges.subscribe(() => {
            if (!this.isCombination() && this.selectedRaceIds.length > 1) {
                this.selectedRaceIds = this.selectedRaceIds.slice(0, 1);
            }
        });
    }

    isCombination(): boolean {
        return this.form.value.type === GaudiModeType.TIME_COMBINATION
            || this.form.value.type === GaudiModeType.POINTS_COMBINATION;
    }

    raceName(raceId: number): string {
        return this.allRaces.find(r => r.id === raceId)?.name ?? String(raceId);
    }

    onRacesSelected(raceIds: number[]): void {
        this.selectedRaceIds = raceIds;
    }

    onSingleRaceSelected(raceId: number): void {
        this.selectedRaceIds = [raceId];
    }

    onWeightChanged(raceId: number, event: Event): void {
        const value = Number((event.target as HTMLInputElement).value);
        this.weights = {...this.weights, [raceId]: Number.isNaN(value) ? 1 : value};
    }

    canSave(): boolean {
        if (!this.form.valid || this.selectedRaceIds.length === 0) {
            return false;
        }
        if (this.isCombination() && this.selectedRaceIds.length < 2) {
            return false;
        }
        if (this.form.value.type === GaudiModeType.POINTS_COMBINATION && !this.form.value.pointsScaleId) {
            return false;
        }
        return true;
    }

    openNewPointsScale(): void {
        this.dialog.open(PointsScaleDialogComponent, {width: "480px"})
            .afterClosed()
            .subscribe(result => {
                if (result) {
                    this.pointsScaleService.create(result).subscribe(created => {
                        this.pointsScales = [...this.pointsScales, created];
                        this.form.patchValue({pointsScaleId: created.id});
                    });
                }
            });
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        if (!this.canSave()) {
            return;
        }
        const formValue = this.form.value;
        const races: GaudiModeRaceEntry[] = this.selectedRaceIds.map(raceId => ({
            raceId,
            weight: formValue.type === GaudiModeType.POINTS_COMBINATION ? (this.weights[raceId] ?? 1) : undefined,
        }));

        const request: GaudiModeRequest = {
            races,
            type: formValue.type,
            name: formValue.name,
            teamSize: formValue.type === GaudiModeType.TEAM ? Number(formValue.teamSize) : undefined,
            pointsScaleId: formValue.type === GaudiModeType.POINTS_COMBINATION ? Number(formValue.pointsScaleId) : undefined,
        };
        this.dialogRef.close(request);
    }

    private loadPointsScales(): void {
        this.pointsScaleService.getAll().subscribe(scales => {
            this.pointsScales = scales;
            const defaultScale = scales.find(s => s.name === "FIS-Schema") ?? scales[0];
            if (defaultScale) {
                this.form.patchValue({pointsScaleId: defaultScale.id});
            }
        });
    }
}
