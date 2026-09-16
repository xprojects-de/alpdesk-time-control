import {Component, inject, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {
    MatDialogRef,
    MAT_DIALOG_DATA,
    MatDialogModule,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {
    Race,
    RaceRequest,
    ResultUnit,
    ResultUnitLabels,
    SortDirection,
    SortDirectionLabels,
    StartOrderMode,
} from '../../models/race.model';
import {readFileAsBase64} from '../../utils/file-base64.util';

/** Dialog input: the race being edited (null for a new race) plus every other race, for the "linked previous race" dropdown. */
export interface RaceDialogData {
    race: Race | null;
    races: Race[];
}

@Component({
    selector: 'app-race-dialog',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatIconModule,
    ],
    template: `
        <h2 mat-dialog-title>
            {{ data.race ? 'Rennen bearbeiten' : 'Neues Rennen' }}
        </h2>
        <mat-dialog-content>
            <form [formGroup]="form" class="race-form">
                <mat-form-field appearance="outline">
                    <mat-label>Name</mat-label>
                    <input matInput formControlName="name" required/>
                    @if (form.get('name')?.hasError('required') &&
                    form.get('name')?.touched) {
                        <mat-error>Name ist erforderlich</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Datum</mat-label>
                    <input
                            matInput
                            [matDatepicker]="picker"
                            formControlName="date"
                            placeholder="TT.MM.JJJJ"
                            required
                    />
                    <mat-datepicker-toggle
                            matSuffix
                            [for]="picker"
                    ></mat-datepicker-toggle>
                    <mat-datepicker #picker></mat-datepicker>
                    <mat-hint>Format: TT.MM.JJJJ (z.B. 24.3.2022)</mat-hint>
                    @if (form.get('date')?.hasError('required') &&
                    form.get('date')?.touched) {
                        <mat-error>Datum ist erforderlich</mat-error>
                    }
                </mat-form-field>

                <h3 class="section-title">Wertung</h3>
                <div class="race-form-grid">
                    <mat-form-field appearance="outline">
                        <mat-label>Einheit</mat-label>
                        <mat-select formControlName="resultUnit">
                            @for (unit of resultUnitOptions; track unit.value) {
                                <mat-option [value]="unit.value">{{ unit.label }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>

                    <mat-form-field appearance="outline">
                        <mat-label>Sortierung</mat-label>
                        <mat-select formControlName="sortDirection">
                            @for (dir of sortDirectionOptions; track dir.value) {
                                <mat-option [value]="dir.value">{{ dir.label }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>

                    @if (form.value.resultUnit === resultUnit.POINTS) {
                        <mat-form-field appearance="outline">
                            <mat-label>Einheiten-Bezeichnung</mat-label>
                            <input matInput formControlName="resultUnitLabel" placeholder="z.B. m, Punkte"/>
                        </mat-form-field>
                    }
                </div>

                <h3 class="section-title">Startreihenfolge (optional)</h3>
                <p class="hint">
                    Für einen zweiten Durchgang (z.B. Slalom): verknüpft dieses Rennen mit einem
                    anderen, dessen Ergebnis die Startreihenfolge (und automatische Zeitmesswert-Zuordnung) bestimmt.
                </p>
                <div class="race-form-grid">
                    <mat-form-field appearance="outline">
                        <mat-label>Verknüpfter Durchgang</mat-label>
                        <mat-select formControlName="previousRaceId">
                            <mat-option [value]="null">Kein</mat-option>
                            @for (race of availablePreviousRaces; track race.id) {
                                <mat-option [value]="race.id">{{ race.name }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>

                    @if (form.value.previousRaceId) {
                        <mat-form-field appearance="outline">
                            <mat-label>Anzahl Top-Platzierte umkehren</mat-label>
                            <input matInput type="number" min="0" formControlName="startOrderReverseTopCount"/>
                            <mat-hint>Pro Altersgruppe; z.B. 15 bei Slalom. 0 = keine Umkehrung.</mat-hint>
                            @if (form.get('startOrderReverseTopCount')?.hasError('min')) {
                                <mat-error>Darf nicht negativ sein</mat-error>
                            }
                        </mat-form-field>
                    }
                </div>

                <h3 class="section-title">Zusatzinformationen (optional)</h3>
                <div class="race-form-grid">
                    <mat-form-field appearance="outline">
                        <mat-label>Veranstalter</mat-label>
                        <input matInput formControlName="organisation"/>
                    </mat-form-field>

                    <mat-form-field appearance="outline">
                        <mat-label>Schiedsrichter</mat-label>
                        <input matInput formControlName="referee"/>
                    </mat-form-field>

                    <mat-form-field appearance="outline">
                        <mat-label>Rennleiter</mat-label>
                        <input matInput formControlName="raceDirector"/>
                    </mat-form-field>

                    <mat-form-field appearance="outline">
                        <mat-label>Zeitnahme</mat-label>
                        <input matInput formControlName="timeControl"/>
                    </mat-form-field>

                    <mat-form-field appearance="outline">
                        <mat-label>Streckenname</mat-label>
                        <input matInput formControlName="routeName"/>
                    </mat-form-field>

                    <mat-form-field appearance="outline">
                        <mat-label>Höhendifferenz</mat-label>
                        <input matInput formControlName="elevationDifference" placeholder="z.B. 350 m"/>
                    </mat-form-field>

                    <mat-form-field appearance="outline">
                        <mat-label>Streckenlänge</mat-label>
                        <input matInput formControlName="routeLength" placeholder="z.B. 1200 m"/>
                    </mat-form-field>

                    <mat-form-field appearance="outline">
                        <mat-label>Kurssetzer</mat-label>
                        <input matInput formControlName="courseSetter"/>
                    </mat-form-field>

                    <mat-form-field appearance="outline">
                        <mat-label>Wetter</mat-label>
                        <input matInput formControlName="weather"/>
                    </mat-form-field>
                </div>

                <h3 class="section-title">Deckblatt (optional)</h3>
                <p class="hint">
                    Wird jeder generierten Ergebnisliste dieses Rennens vorangestellt (nicht der Startliste).
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
                    [disabled]="!form.valid"
            >
                Speichern
            </button>
        </mat-dialog-actions>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
     styles: [
         `
           .race-form {
             display: flex;
             flex-direction: column;
             gap: 16px;
             min-width: 400px;
             margin-top: 16px;
           }

           mat-form-field {
             width: 100%;
           }

           .section-title {
             margin: 0 0 -8px;
             font-size: 14px;
             font-weight: 500;
             color: rgba(0, 0, 0, 0.6);
           }

           .race-form-grid {
             display: grid;
             grid-template-columns: 1fr 1fr;
             gap: 0 16px;
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
export class RaceDialogComponent {
    private fb = inject(FormBuilder);
    private dialogRef = inject(MatDialogRef<RaceDialogComponent>);
    private cdr = inject(ChangeDetectorRef);
    public data = inject<RaceDialogData>(MAT_DIALOG_DATA);

    form: FormGroup;
    /** Every other race this one could link to as its "previous race" - excludes itself. */
    availablePreviousRaces: Race[];
    resultUnit = ResultUnit;
    resultUnitOptions = [
        {value: ResultUnit.TIME, label: ResultUnitLabels[ResultUnit.TIME]},
        {value: ResultUnit.POINTS, label: ResultUnitLabels[ResultUnit.POINTS]},
    ];
    sortDirectionOptions = [
        {value: SortDirection.ASC, label: SortDirectionLabels[SortDirection.ASC]},
        {value: SortDirection.DESC, label: SortDirectionLabels[SortDirection.DESC]},
    ];

    /** Whether a cover page is (or will be, after saving) set for this race. */
    coverPageActive = false;
    /**
     * Filename of the file just picked in this session, shown instead of the generic "Deckblatt
     * aktiv" label so replacing an existing cover page gives visible feedback - never sent to the
     * backend, which only ever sees hasCoverPage (see race.model.ts).
     */
    selectedFileName?: string;
    /** Set only when the user picks a new file this session; sent as coverPagePdf on save. */
    private coverPagePdfBase64?: string;
    private removeCoverPage = false;

    constructor() {
        const race = this.data.race;
        this.availablePreviousRaces = this.data.races.filter(r => r.id !== race?.id);

        let date: Date | string = race?.date || '';
        if (date && typeof date === 'string') {
            const parts = date.split('-');
            if (parts.length === 3) {
                date = new Date(
                    parseInt(parts[0]),
                    parseInt(parts[1]) - 1,
                    parseInt(parts[2])
                );
            }
        }

        this.form = this.fb.group({
            name: [race?.name || '', Validators.required],
            date: [date, Validators.required],
            organisation: [race?.organisation || ''],
            referee: [race?.referee || ''],
            raceDirector: [race?.raceDirector || ''],
            timeControl: [race?.timeControl || ''],
            routeName: [race?.routeName || ''],
            elevationDifference: [race?.elevationDifference || ''],
            routeLength: [race?.routeLength || ''],
            courseSetter: [race?.courseSetter || ''],
            weather: [race?.weather || ''],
            resultUnit: [race?.resultUnit || ResultUnit.TIME],
            resultUnitLabel: [race?.resultUnitLabel || ''],
            sortDirection: [race?.sortDirection || SortDirection.ASC],
            previousRaceId: [race?.previousRaceId ?? null],
            startOrderReverseTopCount: [race?.startOrderReverseTopCount ?? 15, Validators.min(0)],
        });

        this.coverPageActive = race?.hasCoverPage ?? false;
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
        if (this.form.valid) {
            const formValue = this.form.value;
            const race: RaceRequest = {
                name: formValue.name,
                date: this.formatDate(formValue.date),
                organisation: formValue.organisation || undefined,
                referee: formValue.referee || undefined,
                raceDirector: formValue.raceDirector || undefined,
                timeControl: formValue.timeControl || undefined,
                routeName: formValue.routeName || undefined,
                elevationDifference: formValue.elevationDifference || undefined,
                routeLength: formValue.routeLength || undefined,
                courseSetter: formValue.courseSetter || undefined,
                weather: formValue.weather || undefined,
                resultUnit: formValue.resultUnit,
                resultUnitLabel: formValue.resultUnit === ResultUnit.POINTS ? (formValue.resultUnitLabel || undefined) : undefined,
                sortDirection: formValue.sortDirection,
                coverPagePdf: this.coverPagePdfBase64,
                removeCoverPage: this.removeCoverPage || undefined,
                previousRaceId: formValue.previousRaceId || null,
                startOrderMode: formValue.previousRaceId ? StartOrderMode.REVERSE_TOP_N : undefined,
                startOrderReverseTopCount: formValue.previousRaceId ? formValue.startOrderReverseTopCount : undefined,
            };
            this.dialogRef.close(race);
        }
    }

    private formatDate(date: Date | string): string {
        if (typeof date === 'string') {
            return date;
        }
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
}
