import {Component, AfterViewInit, OnDestroy, inject} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Store} from "@ngrx/store";
import {Observable, combineLatest, Subject} from "rxjs";
import {map, takeUntil, distinctUntilChanged, filter} from "rxjs/operators";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {RaceMeasurement} from "../../models/race-measurement.model";
import {shallowArrayEqual} from "../../utils/shallow-equal.util";
import {Participant} from "../../models/participant.model";
import {Race} from "../../models/race.model";
import * as RaceMeasurementActions from "../../store/race-measurement/race-measurement.actions";
import * as RaceMeasurementSelectors from "../../store/race-measurement/race-measurement.selectors";
import * as ParticipantActions from "../../store/participant/participant.actions";
import * as ParticipantSelectors from "../../store/participant/participant.selectors";
import * as RaceActions from "../../store/race/race.actions";
import * as RaceSelectors from "../../store/race/race.selectors";
import {RaceMeasurementDialogComponent} from "./race-measurement-dialog.component";
import {ConfirmDialogComponent} from "../shared/confirm-dialog/confirm-dialog.component";
import {Actions, ofType} from "@ngrx/effects";

interface RaceMeasurementWithParticipant extends RaceMeasurement {
    participantName?: string;
}

@Component({
    selector: "app-race-measurement-list",
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSnackBarModule,
        MatCardModule,
        MatTooltipModule,
        MatSelectModule,
        MatFormFieldModule,
    ],
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>Zuordnung &amp; Sync</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <div class="filter-section">
                    <mat-form-field appearance="outline">
                        <mat-label>Rennen</mat-label>
                        <mat-select [value]="selectedRaceId$ | async" (selectionChange)="onRaceChange($event.value)">
                            @for (race of races$ | async; track race.id) {
                                <mat-option [value]="race.id"
                                    >{{ race.name }} ({{ formatRaceDate(race.date) }})
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>

                @if (selectedRaceId$ | async; as selectedRaceId) {
                    <div class="header-actions">
                        <button mat-raised-button (click)="manualRefresh(selectedRaceId)">
                            <mat-icon>refresh</mat-icon>
                            Aktualisieren
                        </button>

                        <button
                            mat-raised-button
                            color="accent"
                            (click)="syncToParticipants(selectedRaceId)"
                            matTooltip="Archivierte Messungen dieses Rennens mit Teilnehmern synchronisieren"
                        >
                            <mat-icon>sync</mat-icon>
                            Sync zu Teilnehmern
                        </button>
                    </div>

                    @if (loading$ | async) {
                        <div class="loading-overlay">
                            <mat-spinner diameter="30"></mat-spinner>
                        </div>
                    }

                    <div class="table-container">
                        <table
                            mat-table
                            [dataSource]="(raceMeasurementsWithParticipants$ | async) || []"
                            [trackBy]="trackById"
                            class="race-measurement-table"
                            [class.loading]="loading$ | async"
                        >
                            <ng-container matColumnDef="id">
                                <th mat-header-cell *matHeaderCellDef>ID</th>
                                <td mat-cell *matCellDef="let m">{{ m.id }}</td>
                            </ng-container>

                            <ng-container matColumnDef="deviceMeasurementId">
                                <th mat-header-cell *matHeaderCellDef>Geräte-ID</th>
                                <td mat-cell *matCellDef="let m">{{ m.deviceMeasurementId }}</td>
                            </ng-container>

                            <ng-container matColumnDef="participant">
                                <th mat-header-cell *matHeaderCellDef>Teilnehmer</th>
                                <td mat-cell *matCellDef="let m">{{ m.participantName || "-" }}</td>
                            </ng-container>

                            <ng-container matColumnDef="duration">
                                <th mat-header-cell *matHeaderCellDef>Dauer</th>
                                <td mat-cell *matCellDef="let m">{{ formatDuration(m.durationMs) }}</td>
                            </ng-container>

                            <ng-container matColumnDef="measuredAt">
                                <th mat-header-cell *matHeaderCellDef>Gemessen am</th>
                                <td mat-cell *matCellDef="let m">{{ m.measuredAt | date: "dd.MM.yyyy HH:mm:ss" }}</td>
                            </ng-container>

                            <ng-container matColumnDef="actions">
                                <th mat-header-cell *matHeaderCellDef>Aktionen</th>
                                <td mat-cell *matCellDef="let m">
                                    <button
                                        mat-icon-button
                                        (click)="openEditDialog(m)"
                                        matTooltip="Teilnehmer zuordnen / bearbeiten"
                                    >
                                        <mat-icon>edit</mat-icon>
                                    </button>
                                    <button
                                        mat-icon-button
                                        color="warn"
                                        (click)="deleteRaceMeasurement(m)"
                                        matTooltip="Löschen"
                                    >
                                        <mat-icon>delete</mat-icon>
                                    </button>
                                </td>
                            </ng-container>

                            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                            <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
                        </table>
                    </div>

                    <div class="count-info">
                        Anzahl der archivierten Messungen:
                        {{ ((raceMeasurementsWithParticipants$ | async) || []).length }}
                    </div>
                } @else {
                    <p class="hint">Bitte ein Rennen auswählen, um dessen archivierte Messungen zuzuordnen.</p>
                }
            </mat-card-content>
        </mat-card>
    `,
    styles: [
        `
            .filter-section {
                margin-top: 20px;
                margin-bottom: 20px;
                display: flex;
                gap: 10px;
                align-items: center;
            }

            .header-actions {
                margin-top: 20px;
                margin-bottom: 20px;
                display: flex;
                gap: 16px;
                position: relative;
                flex-wrap: wrap;
                align-items: center;
            }

            .loading-overlay {
                position: absolute;
                top: 0;
                right: 0;
                z-index: 10;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 10px;
            }

            .race-measurement-table {
                width: 100%;
                transition: opacity 0.2s ease;
            }

            .race-measurement-table.loading {
                opacity: 0.6;
            }

            mat-card {
                margin: 20px;
            }

            mat-card-content {
                position: relative;
            }

            mat-form-field {
                min-width: 250px;
            }

            .count-info {
                margin-top: 16px;
                padding: 12px 16px;
                background-color: #f5f5f5;
                border-radius: 4px;
                font-size: 14px;
                font-weight: 500;
                color: rgba(0, 0, 0, 0.87);
            }

            .hint {
                color: rgba(0, 0, 0, 0.6);
            }

            @media (max-width: 768px) {
                mat-card {
                    margin: 8px;
                }

                .race-measurement-table {
                    font-size: 12px;
                }
            }
        `,
    ],
})
export class RaceMeasurementListComponent implements AfterViewInit, OnDestroy {
    private store = inject(Store);
    private dialog = inject(MatDialog);
    private snackBar = inject(MatSnackBar);
    private actions$ = inject(Actions);
    private destroy$ = new Subject<void>();

    // Each poll tick emits a freshly-deserialized array, so the CDK table's default identity-based
    // diffing would otherwise tear down and rebuild every row on every refresh instead of only the
    // ones that actually changed.
    trackById = (_index: number, measurement: RaceMeasurementWithParticipant) => measurement.id;

    raceMeasurements$: Observable<RaceMeasurement[]>;
    participants$: Observable<Participant[]>;
    races$: Observable<Race[]>;
    selectedRaceId$: Observable<number | null>;
    raceMeasurementsWithParticipants$: Observable<RaceMeasurementWithParticipant[]>;
    loading$: Observable<boolean>;
    displayedColumns = ["id", "deviceMeasurementId", "participant", "duration", "measuredAt", "actions"];

    constructor() {
        this.raceMeasurements$ = this.store.select(RaceMeasurementSelectors.selectAllRaceMeasurements);
        this.participants$ = this.store.select(ParticipantSelectors.selectAllParticipants);
        this.races$ = this.store.select(RaceSelectors.selectAllRaces);
        this.selectedRaceId$ = this.store.select(RaceSelectors.selectSelectedRaceId);
        this.loading$ = this.store.select(RaceMeasurementSelectors.selectRaceMeasurementLoading);

        this.raceMeasurementsWithParticipants$ = combineLatest([this.raceMeasurements$, this.participants$]).pipe(
            map(([raceMeasurements, participants]) =>
                raceMeasurements.map(m => ({
                    ...m,
                    participantName: m.participantId
                        ? this.getParticipantName(m.participantId, participants)
                        : undefined,
                })),
            ),
            distinctUntilChanged(shallowArrayEqual),
        );

        // Reload the archived measurements whenever the selected race changes
        this.selectedRaceId$
            .pipe(
                distinctUntilChanged(),
                filter((raceId): raceId is number => raceId !== null),
                takeUntil(this.destroy$),
            )
            .subscribe(raceId => {
                this.store.dispatch(RaceMeasurementActions.loadRaceMeasurements({raceId}));
            });

        // Listen for successful update
        this.actions$
            .pipe(ofType(RaceMeasurementActions.updateRaceMeasurementSuccess), takeUntil(this.destroy$))
            .subscribe(() => {
                this.snackBar.open("Messung erfolgreich aktualisiert", "OK", {
                    duration: 3000,
                });
            });

        // Listen for failed update
        this.actions$
            .pipe(ofType(RaceMeasurementActions.updateRaceMeasurementFailure), takeUntil(this.destroy$))
            .subscribe(() => {
                this.snackBar.open("FEHLER beim Aktualisieren der Messung", "OK", {
                    duration: 10000,
                    panelClass: "error-snackbar",
                });
            });

        // Listen for successful sync
        this.actions$
            .pipe(ofType(RaceMeasurementActions.syncRaceMeasurementsToParticipantsSuccess), takeUntil(this.destroy$))
            .subscribe(({response}) => {
                this.snackBar.open(response.message, "OK", {
                    duration: 5000,
                });
            });

        // Listen for failed sync
        this.actions$
            .pipe(ofType(RaceMeasurementActions.syncRaceMeasurementsToParticipantsFailure), takeUntil(this.destroy$))
            .subscribe(() => {
                this.snackBar.open("FEHLER beim Synchronisieren der Messungen", "OK", {
                    duration: 10000,
                    panelClass: "error-snackbar",
                });
            });

        // Listen for successful delete
        this.actions$
            .pipe(ofType(RaceMeasurementActions.deleteRaceMeasurementSuccess), takeUntil(this.destroy$))
            .subscribe(() => {
                this.snackBar.open("Messung erfolgreich gelöscht", "OK", {
                    duration: 3000,
                });
            });

        // Listen for failed delete
        this.actions$
            .pipe(ofType(RaceMeasurementActions.deleteRaceMeasurementFailure), takeUntil(this.destroy$))
            .subscribe(() => {
                this.snackBar.open("FEHLER beim Löschen der Messung", "OK", {
                    duration: 10000,
                    panelClass: "error-snackbar",
                });
            });
    }

    ngAfterViewInit(): void {
        this.store.dispatch(RaceActions.loadRaces());
        this.store.dispatch(ParticipantActions.loadParticipants());
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onRaceChange(raceId: number | null): void {
        this.store.dispatch(RaceActions.selectRace({id: raceId}));
    }

    manualRefresh(raceId: number): void {
        this.store.dispatch(RaceMeasurementActions.loadRaceMeasurements({raceId}));
        this.snackBar.open("Daten wurden aktualisiert", "OK", {duration: 2000});
    }

    getParticipantName(participantId: number, participants: Participant[]): string {
        const participant = participants.find(p => p.id === participantId);
        return participant?.person ? `${participant.person.firstName} ${participant.person.lastName}` : "-";
    }

    formatDuration(ms: number): string {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const milliseconds = ms % 1000;

        if (hours > 0) {
            return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(3, "0")}`;
        } else if (minutes > 0) {
            return `${minutes}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(3, "0")}`;
        } else {
            return `${seconds}.${String(milliseconds).padStart(3, "0")}s`;
        }
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

    openEditDialog(raceMeasurement: RaceMeasurement): void {
        const dialogRef = this.dialog.open(RaceMeasurementDialogComponent, {
            width: "500px",
            data: raceMeasurement,
        });

        dialogRef
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
                if (result) {
                    this.store.dispatch(
                        RaceMeasurementActions.updateRaceMeasurement({
                            id: raceMeasurement.id,
                            raceMeasurement: result,
                        }),
                    );
                }
            });
    }

    deleteRaceMeasurement(raceMeasurement: RaceMeasurement): void {
        this.dialog
            .open(ConfirmDialogComponent, {
                width: "450px",
                data: {
                    message: `Möchten Sie die archivierte Messung #${raceMeasurement.id} wirklich löschen?`,
                    confirmLabel: "Löschen",
                    confirmColor: "warn",
                },
            })
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(confirmed => {
                if (confirmed) {
                    this.store.dispatch(RaceMeasurementActions.deleteRaceMeasurement({id: raceMeasurement.id}));
                }
            });
    }

    syncToParticipants(raceId: number): void {
        this.store.dispatch(RaceMeasurementActions.syncRaceMeasurementsToParticipants({raceId}));
        this.snackBar.open("Synchronisierung gestartet...", "OK", {
            duration: 2000,
        });
    }
}
