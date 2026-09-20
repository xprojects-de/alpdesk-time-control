import {Component, inject, ChangeDetectorRef, OnInit} from "@angular/core";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {DisqualificationStatus, Participant, ParticipantRequest} from "../../models/participant.model";
import {Person} from "../../models/person.model";
import {formatPersonName} from "../../utils/person-name.util";
import {Store} from "@ngrx/store";
import {selectAllRaces, selectSelectedRaceId} from "../../store/race/race.selectors";
import {selectAllTeams} from "../../store/team/team.selectors";
import * as TeamActions from "../../store/team/team.actions";
import {selectAllCategories} from "../../store/category/category.selectors";
import * as CategoryActions from "../../store/category/category.actions";
import {Observable, of, combineLatest} from "rxjs";
import {take, debounceTime, distinctUntilChanged, switchMap, startWith} from "rxjs/operators";
import {Race, ResultUnit} from "../../models/race.model";
import {Team} from "../../models/team.model";
import {Category} from "../../models/category.model";
import {PersonService} from "../../services/person.service";

@Component({
    selector: "app-participant-dialog",
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatAutocompleteModule,
    ],
    template: `
        <h2 mat-dialog-title>
            {{ data ? "Teilnehmer bearbeiten" : "Neuer Teilnehmer" }}
        </h2>
        <mat-dialog-content>
            <form [formGroup]="form" class="participant-form">
                <h3 class="section-title">Person</h3>
                <mat-form-field appearance="outline">
                    <mat-label>Person</mat-label>
                    <input
                        type="text"
                        matInput
                        formControlName="personSearch"
                        [matAutocomplete]="auto"
                        placeholder="Suche nach Name"
                    />
                    <mat-autocomplete
                        #auto="matAutocomplete"
                        [displayWith]="displayPerson.bind(this)"
                        (optionSelected)="onPersonSelected($event)"
                    >
                        @for (person of personResults$ | async; track person.id) {
                            <mat-option [value]="person">
                                {{ person.lastName }} {{ person.firstName }} ({{ formatRaceDate(person.birthDate)
                                }}{{ person.externalId ? ", " + person.externalId : "" }})
                            </mat-option>
                        }
                    </mat-autocomplete>
                    <mat-hint>Neue Personen werden unter "Personen" angelegt</mat-hint>
                    @if (form.get("personId")?.hasError("required") && form.get("personId")?.touched) {
                        <mat-error>Bitte eine Person auswählen</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Rennen</mat-label>
                    <mat-select formControlName="race" required>
                        @for (race of races$ | async; track race.id) {
                            <mat-option [value]="race.id">{{ race.name }} ({{ formatRaceDate(race.date) }})</mat-option>
                        }
                    </mat-select>
                    @if (form.get("race")?.hasError("required") && form.get("race")?.touched) {
                        <mat-error>Rennen ist erforderlich</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Startnummer</mat-label>
                    <input matInput type="number" formControlName="raceNumber" />
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Team</mat-label>
                    <mat-select formControlName="teamId">
                        <mat-option [value]="null">Kein Team</mat-option>
                        @for (team of teams$ | async; track team.id) {
                            <mat-option [value]="team.id">{{ team.name }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Kategorie</mat-label>
                    <mat-select formControlName="categoryId">
                        <mat-option [value]="null">Keine Kategorie</mat-option>
                        @for (category of categories$ | async; track category.id) {
                            <mat-option [value]="category.id">{{ category.name }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>

                <h3 class="section-title">{{ isPointsRace() ? "Wert" : "Zeit" }}</h3>
                @if (!isPointsRace()) {
                    <div class="time-input-group">
                        <mat-form-field appearance="outline">
                            <mat-label>Minuten</mat-label>
                            <input matInput type="number" formControlName="minutes" min="0" />
                        </mat-form-field>

                        <mat-form-field appearance="outline">
                            <mat-label>Sekunden</mat-label>
                            <input matInput type="number" formControlName="seconds" min="0" max="59" />
                            @if (form.get("seconds")?.hasError("min") || form.get("seconds")?.hasError("max")) {
                                <mat-error>Sekunden: 0-59</mat-error>
                            }
                        </mat-form-field>

                        <mat-form-field appearance="outline">
                            <mat-label>Millisekunden</mat-label>
                            <input matInput type="number" formControlName="milliseconds" min="0" max="999" />
                            @if (
                                form.get("milliseconds")?.hasError("min") || form.get("milliseconds")?.hasError("max")
                            ) {
                                <mat-error>Millisekunden: 0-999</mat-error>
                            }
                        </mat-form-field>
                    </div>

                    <mat-form-field appearance="outline">
                        <mat-label>Strafe (Sekunden)</mat-label>
                        <input matInput type="number" formControlName="penaltySeconds" min="0" step="0.01" />
                        <mat-hint>Wird zur Zeit addiert; leer lassen, wenn keine Strafe</mat-hint>
                    </mat-form-field>
                } @else {
                    <mat-form-field appearance="outline">
                        <mat-label
                            >Wert{{
                                selectedRace?.resultUnitLabel ? " (" + selectedRace?.resultUnitLabel + ")" : ""
                            }}</mat-label
                        >
                        <input matInput type="number" formControlName="pointsValue" step="0.01" />
                    </mat-form-field>

                    <mat-form-field appearance="outline">
                        <mat-label
                            >Strafe{{
                                selectedRace?.resultUnitLabel ? " (" + selectedRace?.resultUnitLabel + ")" : ""
                            }}</mat-label
                        >
                        <input matInput type="number" formControlName="penaltyPointsValue" min="0" step="0.01" />
                        <mat-hint>Wird zum Wert addiert; leer lassen, wenn keine Strafe</mat-hint>
                    </mat-form-field>
                }

                <mat-form-field appearance="outline">
                    <mat-label>Gemessen am</mat-label>
                    <input matInput type="datetime-local" formControlName="measuredAt" step="1" />
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Status</mat-label>
                    <mat-select formControlName="status">
                        @for (option of statusOptions; track option.value) {
                            <mat-option [value]="option.value">{{ option.label }}</mat-option>
                        }
                    </mat-select>
                    <mat-hint>Schließt den Teilnehmer aus jeder Rangliste aus, auch bei gemessener Zeit</mat-hint>
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Kommentar</mat-label>
                    <textarea matInput formControlName="comment" rows="2"></textarea>
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
            .participant-form {
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
                margin: 0;
                font-size: 14px;
                font-weight: 500;
                color: rgba(0, 0, 0, 0.6);
            }

            .time-input-group {
                display: flex;
                gap: 12px;
                width: 100%;
            }

            .time-input-group mat-form-field {
                flex: 1;
            }
        `,
    ],
})
export class ParticipantDialogComponent implements OnInit {
    private fb = inject(FormBuilder);
    private dialogRef = inject(MatDialogRef<ParticipantDialogComponent>);
    public data = inject<Participant | null>(MAT_DIALOG_DATA);
    private store = inject(Store);
    private personService = inject(PersonService);
    private cdr = inject(ChangeDetectorRef);

    form: FormGroup;
    resultUnit = ResultUnit;
    readonly statusOptions: {value: DisqualificationStatus; label: string}[] = [
        {value: "NONE", label: "Gewertet"},
        {value: "DNS", label: "DNS – nicht gestartet"},
        {value: "DNF", label: "DNF – nicht beendet"},
        {value: "DSQ", label: "DSQ – disqualifiziert"},
    ];
    selectedRace: Race | null = null;
    races$: Observable<Race[]> = this.store.select(selectAllRaces);
    selectedRaceId$: Observable<number | null> = this.store.select(selectSelectedRaceId);
    teams$: Observable<Team[]> = this.store.select(selectAllTeams);
    categories$: Observable<Category[]> = this.store.select(selectAllCategories);
    personResults$: Observable<Person[]>;

    constructor() {
        const timeComponents = this.splitMilliseconds(this.data?.durationMs);
        const pointsValue =
            this.data?.durationMs !== undefined && this.data?.durationMs !== null
                ? (this.data.durationMs / 100).toFixed(2)
                : "";
        const penaltyPointsValue =
            this.data?.penalty !== undefined && this.data?.penalty !== null ? (this.data.penalty / 100).toFixed(2) : "";

        this.selectedRace = this.data?.race ?? null;

        this.form = this.fb.group({
            personSearch: [this.data?.person || ""],
            personId: [this.data?.person?.id || null, Validators.required],
            race: [this.data?.race?.id || "", Validators.required],
            raceNumber: [this.data?.raceNumber ?? ""],
            teamId: [this.data?.team?.id || null],
            categoryId: [this.data?.category?.id || null],
            minutes: [timeComponents.minutes, [Validators.min(0)]],
            seconds: [timeComponents.seconds, [Validators.min(0), Validators.max(59)]],
            milliseconds: [timeComponents.milliseconds, [Validators.min(0), Validators.max(999)]],
            penaltySeconds: [
                this.data?.penalty !== undefined && this.data?.penalty !== null ? this.data.penalty / 1000 : "",
                [Validators.min(0)],
            ],
            pointsValue: [pointsValue],
            penaltyPointsValue: [penaltyPointsValue, [Validators.min(0)]],
            measuredAt: [this.formatDateTimeForInput(this.data?.measuredAt)],
            status: [this.data?.status ?? "NONE"],
            comment: [this.data?.comment ?? ""],
        });

        this.personResults$ = this.form.get("personSearch")!.valueChanges.pipe(
            startWith(this.form.get("personSearch")!.value),
            debounceTime(250),
            distinctUntilChanged(),
            switchMap(value => {
                const term = typeof value === "string" ? value : "";
                if (!term || term.trim().length < 2) {
                    return of([]);
                }
                return this.personService.search(term);
            }),
        );

        // A selection sets personSearch's value to the full Person object (see [value]="person"
        // on the mat-option below); any further edit to the search text turns the value back into
        // a plain string. That means the previously selected person no longer matches what's shown,
        // so the stale personId must be cleared - otherwise a user who picks Person A, then edits
        // the text without picking a new suggestion, would silently save Person A anyway.
        this.form
            .get("personSearch")!
            .valueChanges.pipe(takeUntilDestroyed())
            .subscribe(value => {
                if (typeof value === "string") {
                    this.form.get("personId")!.setValue(null);
                }
            });

        // Track the currently selected race's resultUnit/resultUnitLabel so the Zeit/Wert
        // section can switch between the time inputs and a generic decimal-value input.
        // If the user actually changes the race to one with a different resultUnit, the
        // now-hidden field set is cleared - otherwise a value entered/pre-filled under the
        // old unit would silently be reinterpreted and submitted under the new one.
        let previousResultUnit: ResultUnit | null = null;
        combineLatest([this.races$, this.form.get("race")!.valueChanges.pipe(startWith(this.form.value.race))])
            .pipe(takeUntilDestroyed())
            .subscribe(([races, raceId]) => {
                const found = races.find(r => r.id === Number(raceId));
                if (found) {
                    if (previousResultUnit !== null && previousResultUnit !== found.resultUnit) {
                        this.form.patchValue(
                            {
                                minutes: "",
                                seconds: "",
                                milliseconds: "",
                                penaltySeconds: "",
                                pointsValue: "",
                                penaltyPointsValue: "",
                            },
                            {emitEvent: false},
                        );
                    }
                    previousResultUnit = found.resultUnit;
                    this.selectedRace = found;
                    this.cdr.markForCheck();
                }
            });
    }

    ngOnInit(): void {
        this.store.dispatch(TeamActions.loadTeams());
        this.store.dispatch(CategoryActions.loadCategories());

        if (!this.data) {
            this.selectedRaceId$.pipe(take(1)).subscribe(selectedRaceId => {
                if (selectedRaceId) {
                    this.form.patchValue({race: selectedRaceId});
                }
            });
        }
    }

    isPointsRace(): boolean {
        return this.selectedRace?.resultUnit === ResultUnit.POINTS;
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        if (!this.form.valid) {
            return;
        }

        const formValue = this.form.value;
        const isPoints = this.isPointsRace();
        const timeEntered = isPoints
            ? formValue.pointsValue !== "" && formValue.pointsValue !== null
            : (formValue.minutes !== "" && formValue.minutes !== null) ||
              (formValue.seconds !== "" && formValue.seconds !== null) ||
              (formValue.milliseconds !== "" && formValue.milliseconds !== null);

        const durationMs = !timeEntered
            ? undefined
            : isPoints
              ? Math.round(Number(formValue.pointsValue) * 100)
              : this.convertToMilliseconds(
                    Number(formValue.minutes || 0),
                    Number(formValue.seconds || 0),
                    Number(formValue.milliseconds || 0),
                );

        // An empty penalty field alongside an entered time is sent as 0, which the backend treats as
        // "remove the penalty" (stored as null) - undefined would mean "keep the existing penalty".
        const penalty = !timeEntered
            ? undefined
            : isPoints
              ? formValue.penaltyPointsValue !== "" && formValue.penaltyPointsValue !== null
                  ? Math.round(Number(formValue.penaltyPointsValue) * 100)
                  : 0
              : formValue.penaltySeconds !== "" && formValue.penaltySeconds !== null
                ? Math.round(Number(formValue.penaltySeconds) * 1000)
                : 0;

        const request: ParticipantRequest = {
            raceId: Number(formValue.race),
            personId: Number(formValue.personId),
            raceNumber:
                formValue.raceNumber !== "" && formValue.raceNumber !== null ? Number(formValue.raceNumber) : undefined,
            teamId: formValue.teamId ? Number(formValue.teamId) : undefined,
            categoryId: formValue.categoryId ? Number(formValue.categoryId) : undefined,
            durationMs,
            penalty,
            measuredAt: timeEntered ? this.formatDateTimeForBackend(formValue.measuredAt) : undefined,
            comment: formValue.comment !== "" && formValue.comment !== null ? formValue.comment : undefined,
            status: formValue.status ?? undefined,
        };
        this.dialogRef.close(request);
    }

    onPersonSelected(event: MatAutocompleteSelectedEvent): void {
        const person: Person | null = event.option.value;
        this.form.patchValue({
            personId: person ? person.id : null,
        });
    }

    displayPerson(person: Person | null): string {
        return formatPersonName(person);
    }

    formatRaceDate(dateString: string): string {
        const parts = dateString.split("-");
        if (parts.length === 3) {
            const year = parts[0];
            const month = parts[1];
            const day = parts[2];
            return `${day}.${month}.${year}`;
        }
        return dateString;
    }

    private convertToMilliseconds(minutes: number, seconds: number, milliseconds: number): number {
        return minutes * 60 * 1000 + seconds * 1000 + milliseconds;
    }

    private splitMilliseconds(totalMs: number | null | undefined): {
        minutes: number | string;
        seconds: number | string;
        milliseconds: number | string;
    } {
        if (totalMs === null || totalMs === undefined) {
            return {minutes: "", seconds: "", milliseconds: ""};
        }
        const minutes = Math.floor(totalMs / (60 * 1000));
        const remainingAfterMinutes = totalMs % (60 * 1000);
        const seconds = Math.floor(remainingAfterMinutes / 1000);
        const milliseconds = remainingAfterMinutes % 1000;
        return {minutes, seconds, milliseconds};
    }

    private formatDateTimeForInput(dateTime?: string): string {
        if (!dateTime) {
            return "";
        }
        return this.toLocalISOString(new Date(dateTime));
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
        const date = dateTime ? new Date(dateTime) : new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    }
}
