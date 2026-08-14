import {
    Component,
    AfterViewInit,
    inject,
    OnDestroy,
    ChangeDetectionStrategy,
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
import {MatSelectModule} from "@angular/material/select";
import {
    MatAutocompleteModule,
    MatAutocompleteSelectedEvent,
} from "@angular/material/autocomplete";
import {Store} from "@ngrx/store";
import {Observable, map, startWith, combineLatest, Subject} from "rxjs";
import {
    Measurement,
    MeasurementRequest,
} from "../../models/measurement.model";
import {Participant} from "../../models/participant.model";
import * as ParticipantSelectors from "../../store/participant/participant.selectors";
import * as ParticipantActions from "../../store/participant/participant.actions";
import {take, takeUntil} from "rxjs/operators";

@Component({
    selector: "app-measurement-dialog",
    standalone: true,
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
        <h2 mat-dialog-title>{{ data ? "Messung bearbeiten" : "Neue Messung" }}</h2>
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
                                {{ participant.firstName }} {{ participant.lastName }} ({{
                                    participant.raceNumber
                                }})
                            </mat-option>
                        }
                    </mat-autocomplete>
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Dauer (Millisekunden)</mat-label>
                    <input matInput type="number" formControlName="durationMs" required/>
                    @if (form.get("durationMs")?.hasError("required") &&
                    form.get("durationMs")?.touched) {
                        <mat-error>Dauer ist erforderlich</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline">
                    <mat-label>Gemessen am (ISO Format)</mat-label>
                    <input
                            matInput
                            type="datetime-local"
                            formControlName="measuredAt"
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
    changeDetection: ChangeDetectionStrategy.OnPush,
     styles: [
         `
           .measurement-form {
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
export class MeasurementDialogComponent implements AfterViewInit, OnDestroy {
    private fb = inject(FormBuilder);
    private store = inject(Store);
    private dialogRef = inject(MatDialogRef<MeasurementDialogComponent>);
    public data = inject<Measurement | null>(MAT_DIALOG_DATA);
    private destroy$ = new Subject<void>();

    form: FormGroup;
    participants$: Observable<Participant[]>;
    filteredParticipants$: Observable<Participant[]>;
    selectedParticipant: Participant | null = null;

    constructor() {
        this.participants$ = this.store.select(
            ParticipantSelectors.selectFilteredParticipants,
        );

        if (this.data?.participantId) {
            setTimeout(() => {
                this.participants$.pipe(
                    take(1),
                    takeUntil(this.destroy$)
                ).subscribe((participants) => {
                    this.selectedParticipant =
                        participants.find((p) => p.id === this.data!.participantId) || null;
                    if (this.selectedParticipant) {
                        this.form.patchValue({
                            participantSearch: this.selectedParticipant,
                        }, { emitEvent: false });
                    }
                });
            }, 0);
        }

        this.form = this.fb.group({
            participantId: [this.data?.participantId || null],
            participantSearch: [""],
            durationMs: [this.data?.durationMs || "", Validators.required],
            measuredAt: [
                this.formatDateTimeForInput(this.data?.measuredAt),
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
            const measurement: MeasurementRequest = {
                participantId: formValue.participantId || undefined,
                durationMs: Number(formValue.durationMs),
                measuredAt: this.formatDateTimeForBackend(formValue.measuredAt),
            };
            this.dialogRef.close(measurement);
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
        return `${participant.firstName} ${participant.lastName} (${participant.raceNumber})`;
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
            const fullName =
                `${participant.firstName} ${participant.lastName}`.toLowerCase();
            const raceNumber = participant.raceNumber.toString();
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
        return `${year}-${month}-${day}T${hours}:${minutes}`;
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
}
