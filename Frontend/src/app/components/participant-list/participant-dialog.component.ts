import {Component, inject, ChangeDetectionStrategy, OnInit, OnDestroy} from "@angular/core";
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
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {
    Participant,
    ParticipantRequest,
} from "../../models/participant.model";
import {Gender, GenderLabels} from "../../models/gender.model";
import {Store} from "@ngrx/store";
import {selectAllRaces, selectSelectedRaceId} from "../../store/race/race.selectors";
import {selectAllTeams} from "../../store/team/team.selectors";
import * as TeamActions from "../../store/team/team.actions";
import {selectAllCategories} from "../../store/category/category.selectors";
import * as CategoryActions from "../../store/category/category.actions";
import {Observable, Subject} from "rxjs";
import {take} from "rxjs/operators";
import {Race} from "../../models/race.model";
import {Team} from "../../models/team.model";
import {Category} from "../../models/category.model";


@Component({
    selector: "app-participant-dialog",
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
    ],
    template: `
        <h2 mat-dialog-title>
            {{ data ? "Teilnehmer bearbeiten" : "Neuer Teilnehmer" }}
        </h2>
        <mat-dialog-content>
            <form [formGroup]="form" class="participant-form">
                <mat-form-field appearance="outline">
                    <mat-label>Vorname</mat-label>
                    <input matInput formControlName="firstName" required/>
                    @if (form.get("firstName")?.hasError("required") &&
                    form.get("firstName")?.touched) {
                        <mat-error>Vorname ist erforderlich</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Nachname</mat-label>
                    <input matInput formControlName="lastName" required/>
                    @if (form.get("lastName")?.hasError("required") &&
                    form.get("lastName")?.touched) {
                        <mat-error>Nachname ist erforderlich</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Geburtsdatum</mat-label>
                    <input
                            matInput
                            [matDatepicker]="picker"
                            formControlName="birthDate"
                            placeholder="TT.MM.JJJJ"
                            required
                    />
                    <mat-datepicker-toggle
                            matSuffix
                            [for]="picker"
                    ></mat-datepicker-toggle>
                    <mat-datepicker #picker></mat-datepicker>
                    <mat-hint>Format: TT.MM.JJJJ (z.B. 24.3.2022)</mat-hint>
                    @if (form.get("birthDate")?.hasError("required") &&
                    form.get("birthDate")?.touched) {
                        <mat-error>Geburtsdatum ist erforderlich</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Geschlecht</mat-label>
                    <mat-select formControlName="gender" required>
                        @for (gender of genderOptions; track gender.value) {
                            <mat-option [value]="gender.value">{{ gender.label }}</mat-option>
                        }
                    </mat-select>
                    @if (form.get("gender")?.hasError("required") &&
                    form.get("gender")?.touched) {
                        <mat-error>Geschlecht ist erforderlich</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Rennen</mat-label>
                    <mat-select formControlName="race" required>
                        @for (race of races$ | async; track race.id) {
                            <mat-option [value]="race.id">{{ race.name }} ({{ formatRaceDate(race.date) }})</mat-option>
                        }
                    </mat-select>
                    @if (form.get("race")?.hasError("required") &&
                    form.get("race")?.touched) {
                        <mat-error>Rennen ist erforderlich</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Startnummer</mat-label>
                    <input matInput type="number" formControlName="raceNumber"/>
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

                <h3 class="time-section-title">Zeit</h3>
                <div class="time-input-group">
                    <mat-form-field appearance="outline">
                        <mat-label>Minuten</mat-label>
                        <input matInput type="number" formControlName="minutes" min="0"/>
                    </mat-form-field>

                    <mat-form-field appearance="outline">
                        <mat-label>Sekunden</mat-label>
                        <input matInput type="number" formControlName="seconds" min="0" max="59"/>
                        @if (form.get("seconds")?.hasError("min") || form.get("seconds")?.hasError("max")) {
                            <mat-error>Sekunden: 0-59</mat-error>
                        }
                    </mat-form-field>

                    <mat-form-field appearance="outline">
                        <mat-label>Millisekunden</mat-label>
                        <input matInput type="number" formControlName="milliseconds" min="0" max="999"/>
                        @if (form.get("milliseconds")?.hasError("min") || form.get("milliseconds")?.hasError("max")) {
                            <mat-error>Millisekunden: 0-999</mat-error>
                        }
                    </mat-form-field>
                </div>

                <mat-form-field appearance="outline">
                    <mat-label>Gemessen am</mat-label>
                    <input matInput type="datetime-local" formControlName="measuredAt" step="1"/>
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

          .time-section-title {
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
export class ParticipantDialogComponent implements OnInit, OnDestroy {
    private fb = inject(FormBuilder);
    private dialogRef = inject(MatDialogRef<ParticipantDialogComponent>);
    public data = inject<Participant | null>(MAT_DIALOG_DATA);
    private store = inject(Store);
    private destroy$ = new Subject<void>();

    form: FormGroup;
    genderOptions = [
        {value: Gender.MALE, label: GenderLabels[Gender.MALE]},
        {value: Gender.FEMALE, label: GenderLabels[Gender.FEMALE]},
    ];
    races$: Observable<Race[]> = this.store.select(selectAllRaces);
    selectedRaceId$: Observable<number | null> = this.store.select(selectSelectedRaceId);
    teams$: Observable<Team[]> = this.store.select(selectAllTeams);
    categories$: Observable<Category[]> = this.store.select(selectAllCategories);

    constructor() {
        let birthDate: Date | string = this.data?.birthDate || "";
        if (birthDate && typeof birthDate === "string") {
            const parts = birthDate.split("-");
            if (parts.length === 3) {
                birthDate = new Date(
                    parseInt(parts[0]),
                    parseInt(parts[1]) - 1,
                    parseInt(parts[2]),
                );
            }
        }

        const timeComponents = this.splitMilliseconds(this.data?.durationMs);

        this.form = this.fb.group({
            firstName: [this.data?.firstName || "", Validators.required],
            lastName: [this.data?.lastName || "", Validators.required],
            birthDate: [birthDate, Validators.required],
            gender: [this.data?.gender || "", Validators.required],
            race: [this.data?.race?.id || "", Validators.required],
            raceNumber: [this.data?.raceNumber ?? ""],
            teamId: [this.data?.team?.id || null],
            categoryId: [this.data?.category?.id || null],
            minutes: [timeComponents.minutes, [Validators.min(0)]],
            seconds: [timeComponents.seconds, [Validators.min(0), Validators.max(59)]],
            milliseconds: [timeComponents.milliseconds, [Validators.min(0), Validators.max(999)]],
            measuredAt: [this.formatDateTimeForInput(this.data?.measuredAt)],
        });
    }

     ngOnInit(): void {
         this.store.dispatch(TeamActions.loadTeams());
         this.store.dispatch(CategoryActions.loadCategories());

         if (!this.data) {
             this.selectedRaceId$
                .pipe(take(1))
                 .subscribe(selectedRaceId => {
                     if (selectedRaceId) {
                         this.form.patchValue({race: selectedRaceId});
                     }
                 });
         }
     }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        if (this.form.valid) {
            const formValue = this.form.value;
            const timeEntered = formValue.minutes !== "" && formValue.minutes !== null ||
                formValue.seconds !== "" && formValue.seconds !== null ||
                formValue.milliseconds !== "" && formValue.milliseconds !== null;

            const participant: ParticipantRequest = {
                raceId: Number(formValue.race),
                firstName: formValue.firstName,
                lastName: formValue.lastName,
                birthDate: this.formatDate(formValue.birthDate),
                gender: formValue.gender,
                raceNumber: formValue.raceNumber !== "" && formValue.raceNumber !== null ? Number(formValue.raceNumber) : undefined,
                teamId: formValue.teamId ? Number(formValue.teamId) : undefined,
                categoryId: formValue.categoryId ? Number(formValue.categoryId) : undefined,
                durationMs: timeEntered ? this.convertToMilliseconds(
                    Number(formValue.minutes || 0),
                    Number(formValue.seconds || 0),
                    Number(formValue.milliseconds || 0),
                ) : undefined,
                measuredAt: timeEntered ? this.formatDateTimeForBackend(formValue.measuredAt) : undefined,
            };
            this.dialogRef.close(participant);
        }
    }

    private formatDate(date: Date | string): string {
        if (typeof date === "string") {
            return date;
        }
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
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
        return (minutes * 60 * 1000) + (seconds * 1000) + milliseconds;
    }

    private splitMilliseconds(totalMs: number | null | undefined): { minutes: number | string; seconds: number | string; milliseconds: number | string } {
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
