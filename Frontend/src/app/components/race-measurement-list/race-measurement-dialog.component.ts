import {
    Component,
    AfterViewInit,
    inject,
    DestroyRef,
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
    MatAutocompleteModule,
    MatAutocompleteSelectedEvent,
} from "@angular/material/autocomplete";
import {Store} from "@ngrx/store";
import {Observable, map, startWith, combineLatest} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {
    RaceMeasurement,
    RaceMeasurementRequest,
} from "../../models/race-measurement.model";
import {Participant} from "../../models/participant.model";
import * as ParticipantSelectors from "../../store/participant/participant.selectors";
import * as ParticipantActions from "../../store/participant/participant.actions";
import {take} from "rxjs/operators";

@Component({
    selector: "app-race-measurement-dialog",
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatAutocompleteModule,
    ],
    template: `
        <h2 mat-dialog-title>Messung zuordnen</h2>
        <mat-dialog-content>
            <form [formGroup]="form" class="measurement-form">
                <mat-form-field appearance="outline">
                    <mat-label>Teilnehmer</mat-label>
                    <input
                            type="text"
                            matInput
                            formControlName="participantSearch"
                            [matAutocomplete]="auto"
                            placeholder="Suche nach Name oder Startnummer"
                    />
                    <mat-autocomplete
                            #auto="matAutocomplete"
                            [displayWith]="displayParticipant.bind(this)"
                            (optionSelected)="onParticipantSelected($event)"
                    >
                        <mat-option [value]="null">Kein Teilnehmer</mat-option>
                        @for (participant of filteredParticipants$ | async;
                                track participant.id) {
                            <mat-option [value]="participant">
                                {{ participant.person?.firstName }} {{ participant.person?.lastName }} ({{
                                    participant.raceNumber
                                }})
                            </mat-option>
                        }
                    </mat-autocomplete>
                </mat-form-field>

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
export class RaceMeasurementDialogComponent implements AfterViewInit {
    private fb = inject(FormBuilder);
    private store = inject(Store);
    private dialogRef = inject(MatDialogRef<RaceMeasurementDialogComponent>);
    public data = inject<RaceMeasurement>(MAT_DIALOG_DATA);
    // The only subscription below runs inside a setTimeout, i.e. outside the injection
    // context, so takeUntilDestroyed needs this explicitly.
    private destroyRef = inject(DestroyRef);

    form: FormGroup;
    participants$: Observable<Participant[]>;
    filteredParticipants$: Observable<Participant[]>;
    selectedParticipant: Participant | null = null;

    constructor() {
        this.participants$ = this.store.select(
            ParticipantSelectors.selectFilteredParticipants,
        );

        if (this.data.participantId) {
            setTimeout(() => {
                this.participants$.pipe(
                    take(1),
                    takeUntilDestroyed(this.destroyRef)
                ).subscribe((participants) => {
                    this.selectedParticipant =
                        participants.find((p) => p.id === this.data.participantId) || null;
                    if (this.selectedParticipant) {
                        this.form.patchValue({
                            participantSearch: this.selectedParticipant,
                        }, { emitEvent: false });
                    }
                });
            }, 0);
        }

        const timeComponents = this.splitMilliseconds(this.data.durationMs || 0);

        this.form = this.fb.group({
            participantId: [this.data.participantId || null],
            participantSearch: [""],
            minutes: [timeComponents.minutes, [Validators.required, Validators.min(0)]],
            seconds: [timeComponents.seconds, [Validators.required, Validators.min(0), Validators.max(59)]],
            milliseconds: [timeComponents.milliseconds, [Validators.required, Validators.min(0), Validators.max(999)]],
            measuredAt: [
                this.formatDateTimeForInput(this.data.measuredAt),
                Validators.required,
            ],
        });

        this.filteredParticipants$ = combineLatest([
            this.participants$,
            this.form
                .get("participantSearch")!
                .valueChanges.pipe(startWith("")),
        ]).pipe(
            map(([participants, searchValue]) => {
                const searchTerm = typeof searchValue === "string" ? searchValue : "";
                return this.filterParticipants(participants, searchTerm);
            }),
        );
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.store.dispatch(ParticipantActions.loadParticipants());
        }, 0);
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

            const raceMeasurement: RaceMeasurementRequest = {
                participantId: formValue.participantId || undefined,
                durationMs: durationMs,
                measuredAt: this.formatDateTimeForBackend(formValue.measuredAt),
            };
            this.dialogRef.close(raceMeasurement);
        }
    }

    onParticipantSelected(event: MatAutocompleteSelectedEvent): void {
        const participant = event.option.value;
        this.selectedParticipant = participant;
        this.form.patchValue({
            participantId: participant ? participant.id : null,
        });
    }

    displayParticipant(participant: Participant | null): string {
        if (!participant) {
            return "";
        }
        if (!participant.person) {
            return `(${participant.raceNumber})`;
        }
        return `${participant.person.firstName} ${participant.person.lastName} (${participant.raceNumber})`;
    }

    private filterParticipants(
        participants: Participant[],
        searchTerm: string,
    ): Participant[] {
        if (!searchTerm || searchTerm.trim() === "") {
            return participants;
        }

        const lowerSearchTerm = searchTerm.toLowerCase();
        return participants.filter((participant) => {
            const fullName = participant.person
                ? `${participant.person.firstName} ${participant.person.lastName}`.toLowerCase()
                : "";
            const raceNumber = participant.raceNumber?.toString() ?? "";
            return (
                fullName.includes(lowerSearchTerm) ||
                raceNumber.includes(lowerSearchTerm)
            );
        });
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
