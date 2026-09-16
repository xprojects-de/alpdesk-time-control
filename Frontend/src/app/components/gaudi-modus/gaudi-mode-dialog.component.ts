import {Component, inject, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, OnDestroy} from "@angular/core";
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
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {Store} from "@ngrx/store";
import {Actions, ofType} from "@ngrx/effects";
import {Observable, Subject} from "rxjs";
import {take, takeUntil} from "rxjs/operators";
import {selectAllRaces} from "../../store/race/race.selectors";
import * as PointsScaleActions from "../../store/points-scale/points-scale.actions";
import * as PointsScaleSelectors from "../../store/points-scale/points-scale.selectors";
import {Race} from "../../models/race.model";
import {
    GaudiMode,
    GaudiModeRaceEntry,
    GaudiModeRequest,
    GaudiModeType,
    GaudiModeTypeLabels,
} from "../../models/gaudi-mode.model";
import {PointsScale} from "../../models/points-scale.model";
import {PointsScaleDialogComponent} from "./points-scale-dialog.component";
import {readFileAsBase64} from "../../utils/file-base64.util";

export interface GaudiModeDialogData {
    raceId: number | null;
    gaudiMode?: GaudiMode;
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
        MatCheckboxModule,
        MatIconModule,
        MatTooltipModule,
        MatSnackBarModule,
    ],
    template: `
        <h2 mat-dialog-title>{{ isEdit ? "Gaudi-Modus bearbeiten" : "Neuer Gaudi-Modus" }}</h2>
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

                        <div class="dnf-options">
                            <span class="weights-label">Nicht platzierte Teilnehmer trotzdem werten (0 Punkte statt Ausschluss)</span>
                            <mat-checkbox formControlName="keepDnsInRanking">DNS in Wertung belassen</mat-checkbox>
                            <mat-checkbox formControlName="keepDnfInRanking">DNF in Wertung belassen</mat-checkbox>
                            <mat-checkbox formControlName="keepDsqInRanking">DSQ in Wertung belassen</mat-checkbox>
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

                <h3 class="section-title">Deckblatt (optional)</h3>
                <p class="hint">
                    Wird jeder generierten PDF-Wertung dieses Gaudi-Modus vorangestellt - unabhängig
                    vom Deckblatt der zugrunde liegenden Rennen.
                </p>
                <div class="cover-page-row">
                    @if (coverPageActive) {
                        <span class="cover-page-name">
                            <mat-icon inline="true">picture_as_pdf</mat-icon>
                            {{ selectedFileName ?? 'Deckblatt aktiv' }}
                        </span>
                        <button mat-button color="warn" type="button" (click)="onRemoveCoverPage()">
                            Entfernen
                        </button>
                    } @else {
                        <span class="hint">Kein Deckblatt ausgewählt.</span>
                    }
                    <button mat-stroked-button type="button" (click)="coverPageInput.click()">
                        {{ coverPageActive ? 'Ersetzen' : 'PDF auswählen' }}
                    </button>
                    <input #coverPageInput type="file" accept="application/pdf" hidden
                           (change)="onCoverPageFileSelected($event)"/>
                </div>
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
                {{ isEdit ? "Speichern" : "Erstellen" }}
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

          .dnf-options {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-top: -8px;
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

          .section-title {
            margin: 0 0 -8px;
            font-size: 14px;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.6);
          }

          .hint {
            margin: 0;
            font-size: 12px;
            color: rgba(0, 0, 0, 0.6);
          }

          .cover-page-row {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
          }

          .cover-page-name {
            display: flex;
            align-items: center;
            gap: 4px;
          }
        `,
    ],
})
export class GaudiModeDialogComponent implements OnInit, OnDestroy {
    private fb = inject(FormBuilder);
    private dialogRef = inject(MatDialogRef<GaudiModeDialogComponent>);
    private cdr = inject(ChangeDetectorRef);
    private store = inject(Store);
    private actions$ = inject(Actions);
    private dialog = inject(MatDialog);
    private snackBar = inject(MatSnackBar);
    public data = inject<GaudiModeDialogData | null>(MAT_DIALOG_DATA);
    private destroy$ = new Subject<void>();

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

    coverPageActive = false;
    /**
     * Filename of the file just picked in this session, shown instead of the generic "Deckblatt
     * aktiv" label so replacing a cover page gives visible feedback - never sent to the backend.
     */
    selectedFileName?: string;
    private coverPagePdfBase64?: string;
    private removeCoverPage = false;

    form: FormGroup = this.fb.group({
        type: [GaudiModeType.LOS, Validators.required],
        name: ["", Validators.required],
        teamSize: [5, Validators.min(1)],
        pointsScaleId: [null],
        keepDnsInRanking: [false],
        keepDnfInRanking: [false],
        keepDsqInRanking: [false],
    });

    get isEdit(): boolean {
        return !!this.data?.gaudiMode;
    }

    ngOnInit(): void {
        const editing = this.data?.gaudiMode;
        if (editing) {
            this.selectedRaceIds = [...editing.races]
                .sort((a, b) => a.sortOrder - b.sortOrder)
                .map(r => r.raceId);
            this.weights = Object.fromEntries(editing.races.map(r => [r.raceId, r.weight]));
            this.coverPageActive = editing.hasCoverPage;
            this.form.patchValue({
                type: editing.type,
                name: editing.name,
                teamSize: editing.teamSize ?? 5,
                pointsScaleId: editing.pointsScaleId ?? null,
                keepDnsInRanking: editing.keepDnsInRanking,
                keepDnfInRanking: editing.keepDnfInRanking,
                keepDsqInRanking: editing.keepDsqInRanking,
            });
        } else if (this.data?.raceId) {
            this.selectedRaceIds = [this.data.raceId];
        }
        this.races$.pipe(take(1)).subscribe(races => (this.allRaces = races));
        this.loadPointsScales();

        // Switching from a combination type (multi-race) back to LOS/TEAM (single-race) must
        // not leave more than one race selected behind - the single-race select only ever shows
        // and replaces selectedRaceIds[0], so a stale second entry would silently be saved too.
        this.form.get("type")!.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
            if (!this.isCombination() && this.selectedRaceIds.length > 1) {
                this.selectedRaceIds = this.selectedRaceIds.slice(0, 1);
            }
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
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
                    this.store.dispatch(PointsScaleActions.createPointsScale({pointsScale: result}));
                }
            });
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    async onCoverPageFileSelected(event: Event): Promise<void> {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        input.value = '';
        if (!file) {
            return;
        }
        this.coverPagePdfBase64 = await readFileAsBase64(file);
        this.coverPageActive = true;
        this.selectedFileName = file.name;
        this.removeCoverPage = false;
        // OnPush only marks the view dirty automatically for the synchronous part of a template
        // event handler - state set after this `await` needs markForCheck() or it never renders.
        this.cdr.markForCheck();
    }

    onRemoveCoverPage(): void {
        this.coverPageActive = false;
        this.selectedFileName = undefined;
        this.coverPagePdfBase64 = undefined;
        this.removeCoverPage = true;
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
            keepDnsInRanking: formValue.type === GaudiModeType.POINTS_COMBINATION ? !!formValue.keepDnsInRanking : undefined,
            keepDnfInRanking: formValue.type === GaudiModeType.POINTS_COMBINATION ? !!formValue.keepDnfInRanking : undefined,
            keepDsqInRanking: formValue.type === GaudiModeType.POINTS_COMBINATION ? !!formValue.keepDsqInRanking : undefined,
            coverPagePdf: this.coverPagePdfBase64,
            removeCoverPage: this.removeCoverPage || undefined,
        };
        this.dialogRef.close(request);
    }

    private loadPointsScales(): void {
        this.store.select(PointsScaleSelectors.selectAllPointsScales).pipe(
            takeUntil(this.destroy$),
        ).subscribe(scales => {
            this.pointsScales = scales;
            if (!this.form.value.pointsScaleId) {
                const defaultScale = scales.find(s => s.name === "FIS-Schema") ?? scales[0];
                if (defaultScale) {
                    this.form.patchValue({pointsScaleId: defaultScale.id});
                }
            }
            this.cdr.markForCheck();
        });
        this.actions$.pipe(
            ofType(PointsScaleActions.createPointsScaleSuccess),
            takeUntil(this.destroy$),
        ).subscribe(({pointsScale}) => {
            this.form.patchValue({pointsScaleId: pointsScale.id});
        });
        this.actions$.pipe(
            ofType(PointsScaleActions.loadPointsScalesFailure, PointsScaleActions.createPointsScaleFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(error, "OK", {duration: 5000, panelClass: "error-snackbar"});
        });
        this.store.dispatch(PointsScaleActions.loadPointsScales());
    }
}
