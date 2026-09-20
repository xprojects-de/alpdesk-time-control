import {Component, AfterViewInit, OnDestroy, inject} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Observable, combineLatest, interval, Subject, EMPTY} from "rxjs";
import {take, takeUntil, switchMap, map, filter, distinctUntilChanged} from "rxjs/operators";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AutoAssignStatus, Measurement} from "../../models/measurement.model";
import {shallowArrayEqual} from "../../utils/shallow-equal.util";
import {deviceWasResetFromMessage} from "../../utils/device-reset.util";
import {Race} from "../../models/race.model";
import {Participant} from "../../models/participant.model";
import * as MeasurementActions from "../../store/measurement/measurement.actions";
import * as MeasurementSelectors from "../../store/measurement/measurement.selectors";
import * as RaceActions from "../../store/race/race.actions";
import * as RaceSelectors from "../../store/race/race.selectors";
import * as ParticipantActions from "../../store/participant/participant.actions";
import * as ParticipantSelectors from "../../store/participant/participant.selectors";
import * as SettingsSelectors from "../../store/settings/settings.selectors";
import {MeasurementDialogComponent} from "./measurement-dialog.component";
import {ConfirmDialogComponent} from "../shared/confirm-dialog/confirm-dialog.component";
import {
    ArchiveMeasurementsDialogComponent,
    ArchiveMeasurementsDialogResult,
} from "./archive-measurements-dialog.component";
import {
    MeasurementImportMappingDialogComponent,
    MeasurementImportMappingDialogResult,
} from "./measurement-import-mapping-dialog.component";
import {Actions, ofType} from "@ngrx/effects";

interface MeasurementWithParticipant extends Measurement {
    participantName?: string;
}

@Component({
    selector: "app-measurement-list",
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
        MatSlideToggleModule,
        MatMenuModule,
        MatSelectModule,
        MatFormFieldModule,
        FormsModule,
    ],
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>
                    <div class="title-row">
                        <span>Messungen</span>
                        <div class="sync-status">
                            <mat-slide-toggle
                                [(ngModel)]="autoRefreshEnabled"
                                (change)="onAutoRefreshToggle()"
                                color="primary"
                                matTooltip="Automatische Aktualisierung"
                            >
                            </mat-slide-toggle>
                            @if (loading$ | async) {
                                <mat-icon class="sync-icon syncing" matTooltip="Aktualisiere...">sync </mat-icon>
                            } @else {
                                <mat-icon class="sync-icon" matTooltip="Letzte Aktualisierung: {{ lastUpdate }}"
                                    >sync
                                </mat-icon>
                            }
                            <span class="last-update-text">{{ lastUpdate }}</span>
                        </div>
                    </div>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <div class="header-actions">
                    <button mat-raised-button color="primary" (click)="openCreateDialog()">
                        <mat-icon>add</mat-icon>
                        Neue Messung
                    </button>
                    <button mat-raised-button (click)="manualRefresh()">
                        <mat-icon>refresh</mat-icon>
                        Manuell aktualisieren
                    </button>

                    <button
                        mat-raised-button
                        color="accent"
                        (click)="openArchiveDialog()"
                        matTooltip="Aktuelle Messungen einem Rennen zuordnen und archivieren"
                    >
                        <mat-icon>archive</mat-icon>
                        Archivieren
                    </button>

                    <button
                        mat-raised-button
                        (click)="exportMeasurementsCsv()"
                        matTooltip="Alle Messungen als CSV-Datei herunterladen"
                    >
                        <mat-icon>download</mat-icon>
                        CSV Export
                    </button>
                    <button
                        mat-raised-button
                        (click)="openImportDialog()"
                        [disabled]="importLoading$ | async"
                        matTooltip="Messungen aus CSV-Datei importieren (mit Spalten-Zuordnung)"
                    >
                        @if (importLoading$ | async) {
                            <mat-spinner diameter="20" style="display: inline-block; margin-right: 8px;"></mat-spinner>
                        } @else {
                            <mat-icon>upload_file</mat-icon>
                        }
                        CSV Import
                    </button>

                    @if (timingProviderActive$ | async) {
                        @if ((deviceStatus$ | async) === "continuous") {
                            <button
                                mat-raised-button
                                color="accent"
                                class="active-mode"
                                (click)="toggleContinuousMode(false)"
                                matTooltip="Kontinuierlichen Modus deaktivieren"
                            >
                                <mat-icon>stop</mat-icon>
                                Kontinuierlich AUS
                            </button>
                        } @else {
                            <button
                                mat-raised-button
                                (click)="toggleContinuousMode(true)"
                                matTooltip="Kontinuierlichen Modus aktivieren"
                            >
                                <mat-icon>play_arrow</mat-icon>
                                Kontinuierlich AN
                            </button>
                        }

                        @if ((deviceStatus$ | async) === "normal") {
                            <button
                                mat-raised-button
                                color="warn"
                                (click)="discardOldestStart()"
                                matTooltip="Ältesten Start verwerfen (bei Sturz des Läufers)"
                            >
                                <mat-icon>person_off</mat-icon>
                                Sturz signalisieren
                            </button>
                        }
                    }

                    @if (scheduledImportEnabled$ | async) {
                        <button
                            mat-raised-button
                            color="accent"
                            class="active-mode"
                            (click)="toggleScheduledImport(false)"
                            matTooltip="Automatischen Import deaktivieren (läuft alle 5 Sekunden)"
                        >
                            <mat-icon>cloud_sync</mat-icon>
                            Auto-Import AUS
                        </button>
                    } @else {
                        <button
                            mat-raised-button
                            (click)="toggleScheduledImport(true)"
                            matTooltip="Automatischen Import aktivieren (läuft alle 5 Sekunden)"
                        >
                            <mat-icon>cloud_download</mat-icon>
                            Auto-Import AN
                        </button>
                    }

                    <button
                        mat-raised-button
                        color="warn"
                        [matMenuTriggerFor]="resetMenu"
                        matTooltip="Alle Messungen zurücksetzen"
                    >
                        <mat-icon>delete_sweep</mat-icon>
                        Zurücksetzen
                        <mat-icon>arrow_drop_down</mat-icon>
                    </button>

                    <mat-menu #resetMenu="matMenu">
                        <button mat-menu-item (click)="resetMeasurements(false)">
                            <mat-icon>delete_sweep</mat-icon>
                            <span>Alle Messungen löschen (nur Datenbank)</span>
                        </button>

                        <button mat-menu-item (click)="resetMeasurements(true)">
                            <mat-icon>delete_forever</mat-icon>
                            <span>Alle löschen (inkl. Gerät)</span>
                        </button>
                    </mat-menu>
                </div>

                <div class="auto-assign-row">
                    <mat-form-field
                        appearance="outline"
                        class="race-select"
                        [matTooltip]="
                            (scheduledImportEnabled$ | async)
                                ? 'Automatischen Import zuerst deaktivieren, um das Rennen zu wechseln'
                                : 'Rennen auswählen startet die automatische Zuordnung, abwählen stoppt sie'
                        "
                    >
                        <mat-label>Rennen (Automatik-Zuordnung)</mat-label>
                        <mat-select
                            [value]="selectedRaceId$ | async"
                            [disabled]="!!(scheduledImportEnabled$ | async)"
                            (selectionChange)="onRaceChange($event.value)"
                        >
                            <mat-option [value]="null">— kein Rennen —</mat-option>
                            @for (race of races$ | async; track race.id) {
                                <mat-option [value]="race.id"
                                    >{{ race.name }} ({{ formatRaceDate(race.date) }})</mat-option
                                >
                            }
                        </mat-select>
                    </mat-form-field>

                    @if (selectedRaceId$ | async; as selectedRaceId) {
                        @if (autoAssignStatus$ | async; as autoStatus) {
                            @if (autoStatus.active && autoStatus.raceId === selectedRaceId) {
                                <button
                                    mat-raised-button
                                    (click)="skipAutoAssign()"
                                    matTooltip="Aktuell erwartete Startnummer überspringen (z. B. nicht gestartet)"
                                >
                                    <mat-icon>skip_next</mat-icon>
                                    Überspringen
                                </button>
                                <span class="next-number-info">
                                    Nächste erwartete Startnummer:
                                    @if (autoStatus.nextRaceNumber !== null) {
                                        <strong>{{ autoStatus.nextRaceNumber }}</strong>
                                        ({{
                                            getParticipantNameByRaceNumber(
                                                selectedRaceId,
                                                autoStatus.nextRaceNumber,
                                                (participants$ | async) || []
                                            )
                                        }})
                                    } @else {
                                        <em>keine weiteren Startnummern</em>
                                    }
                                </span>
                            }
                        }
                    } @else {
                        <span class="hint">Rennen auswählen, um Messungen automatisch zuzuordnen.</span>
                    }
                </div>

                @if (loading$ | async) {
                    <div class="loading-overlay">
                        <mat-spinner diameter="30"></mat-spinner>
                    </div>
                }

                <div class="table-container">
                    <table
                        mat-table
                        [dataSource]="(measurementsWithParticipants$ | async) || []"
                        [trackBy]="trackById"
                        class="measurement-table"
                        [class.loading]="loading$ | async"
                    >
                        <!-- ID Column -->
                        <ng-container matColumnDef="id">
                            <th mat-header-cell *matHeaderCellDef>ID</th>
                            <td mat-cell *matCellDef="let measurement">{{ measurement.id }}</td>
                        </ng-container>

                        <!-- Duration Column -->
                        <ng-container matColumnDef="duration">
                            <th mat-header-cell *matHeaderCellDef>Dauer</th>
                            <td mat-cell *matCellDef="let measurement">
                                {{ formatDuration(measurement.durationMs) }}
                            </td>
                        </ng-container>

                        <!-- Participant Column -->
                        <ng-container matColumnDef="participant">
                            <th mat-header-cell *matHeaderCellDef>Teilnehmer</th>
                            <td
                                mat-cell
                                *matCellDef="let measurement"
                                [matTooltip]="measurement.participantId ? 'Bereits einem Rennen zugeordnet' : ''"
                            >
                                {{ measurement.participantName || "-" }}
                            </td>
                        </ng-container>

                        <!-- Measured At Column -->
                        <ng-container matColumnDef="measuredAt">
                            <th mat-header-cell *matHeaderCellDef>Gemessen am</th>
                            <td mat-cell *matCellDef="let measurement">
                                {{ measurement.measuredAt | date: "dd.MM.yyyy HH:mm:ss" }}
                            </td>
                        </ng-container>

                        <!-- Actions Column -->
                        <ng-container matColumnDef="actions">
                            <th mat-header-cell *matHeaderCellDef>Aktionen</th>
                            <td mat-cell *matCellDef="let measurement">
                                <button mat-icon-button (click)="openEditDialog(measurement)" matTooltip="Bearbeiten">
                                    <mat-icon>edit</mat-icon>
                                </button>
                                <button
                                    mat-icon-button
                                    color="warn"
                                    (click)="deleteMeasurement(measurement)"
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

                <div class="count-info">Anzahl der Messungen: {{ ((measurements$ | async) || []).length }}</div>
            </mat-card-content>
        </mat-card>
    `,
    styles: [
        `
            .title-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                gap: 32px;
            }

            .sync-status {
                display: flex;
                align-items: center;
                gap: 12px;
                font-size: 0.875rem;
                color: rgba(0, 0, 0, 0.6);
            }

            .sync-icon {
                font-size: 20px;
                width: 20px;
                height: 20px;
                color: rgba(0, 0, 0, 0.6);
            }

            .sync-icon.syncing {
                animation: spin 1s linear infinite;
                color: #3f51b5;
            }

            @keyframes spin {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }

            .last-update-text {
                font-size: 0.75rem;
                white-space: nowrap;
            }

            .header-actions {
                margin-top: 20px;
                margin-bottom: 20px;
                display: flex;
                gap: 10px;
                position: relative;
                flex-wrap: wrap;
                align-items: center;
            }

            .active-mode {
                background-color: #4caf50 !important;
                color: white !important;
            }

            .active-mode:hover {
                background-color: #45a049 !important;
            }

            .auto-assign-row {
                margin-bottom: 20px;
                display: flex;
                gap: 16px;
                flex-wrap: wrap;
                align-items: center;
            }

            .race-select {
                min-width: 280px;
            }

            .next-number-info {
                font-size: 0.9rem;
                color: rgba(0, 0, 0, 0.7);
            }

            .hint {
                color: rgba(0, 0, 0, 0.6);
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

            .measurement-table {
                width: 100%;
                transition: opacity 0.2s ease;
            }

            .measurement-table.loading {
                opacity: 0.6;
            }

            mat-card {
                margin: 20px;
            }

            mat-card-content {
                position: relative;
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

            @media (max-width: 768px) {
                mat-card {
                    margin: 8px;
                }

                .title-row {
                    flex-wrap: wrap;
                    gap: 8px;
                }
            }
        `,
    ],
})
export class MeasurementListComponent implements AfterViewInit, OnDestroy {
    private store = inject(Store);
    private dialog = inject(MatDialog);
    private snackBar = inject(MatSnackBar);
    private actions$ = inject(Actions);
    private destroy$ = new Subject<void>();
    private autoRefresh$ = new Subject<boolean>();

    // Each poll tick emits a freshly-deserialized array, so the CDK table's default identity-based
    // diffing would otherwise tear down and rebuild every row on every refresh instead of only the
    // ones that actually changed.
    trackById = (_index: number, measurement: MeasurementWithParticipant) => measurement.id;

    measurements$: Observable<Measurement[]>;
    races$: Observable<Race[]>;
    participants$: Observable<Participant[]>;
    measurementsWithParticipants$: Observable<MeasurementWithParticipant[]>;
    selectedRaceId$: Observable<number | null>;
    autoAssignStatus$: Observable<AutoAssignStatus>;
    loading$: Observable<boolean>;
    scheduledImportEnabled$: Observable<boolean>;
    deviceStatus$: Observable<string | null>;
    // Emits only once the real value is known (see constructor / selectTimingProviderActive) -
    // hides the continuous-mode/discard-start controls and skips loading device status once a
    // timing device is confirmed not configured (NONE).
    timingProviderActive$: Observable<boolean>;
    importLoading$: Observable<boolean>;
    displayedColumns = ["id", "duration", "measuredAt", "participant", "actions"];
    lastUpdate = "";
    autoRefreshEnabled = false;

    constructor() {
        this.measurements$ = this.store.select(MeasurementSelectors.selectAllMeasurements);
        this.races$ = this.store.select(RaceSelectors.selectAllRaces);
        this.participants$ = this.store.select(ParticipantSelectors.selectAllParticipants);
        this.loading$ = this.store.select(MeasurementSelectors.selectMeasurementLoading);
        this.timingProviderActive$ = this.store.select(SettingsSelectors.selectTimingProviderActive).pipe(
            filter((active): active is boolean => active !== null),
            distinctUntilChanged(),
        );

        this.measurementsWithParticipants$ = combineLatest([this.measurements$, this.participants$]).pipe(
            map(([measurements, participants]) =>
                measurements.map(m => ({
                    ...m,
                    participantName: m.participantId
                        ? this.getParticipantName(m.participantId, participants)
                        : undefined,
                })),
            ),
            distinctUntilChanged(shallowArrayEqual),
        );
        this.scheduledImportEnabled$ = this.store.select(MeasurementSelectors.selectScheduledImportEnabled);
        this.deviceStatus$ = this.store.select(MeasurementSelectors.selectDeviceStatus);
        this.autoAssignStatus$ = this.store.select(MeasurementSelectors.selectAutoAssignStatus);
        // Deliberately NOT bound to the app-wide RaceSelectors.selectSelectedRaceId (used by
        // participant-list/race-measurement-list/gaudi-modus to filter by race): this select
        // doubles as the auto-assign on/off switch, so showing it pre-filled from another
        // screen's race choice risks silently auto-assigning measurements to the wrong race.
        // It must reflect only the race auto-assign is actually running for.
        this.selectedRaceId$ = this.autoAssignStatus$.pipe(
            map(status => (status.active ? status.raceId : null)),
            distinctUntilChanged(),
        );
        this.importLoading$ = this.store.select(MeasurementSelectors.selectImportLoading);

        // Listen for successful auto-assign changes
        this.actions$
            .pipe(
                ofType(
                    MeasurementActions.enableAutoAssignSuccess,
                    MeasurementActions.disableAutoAssignSuccess,
                    MeasurementActions.skipAutoAssignSuccess,
                ),
                takeUntil(this.destroy$),
            )
            .subscribe(action => {
                const message =
                    action.type === MeasurementActions.enableAutoAssignSuccess.type
                        ? "Automatik-Modus aktiviert"
                        : action.type === MeasurementActions.disableAutoAssignSuccess.type
                          ? "Automatik-Modus deaktiviert"
                          : "Startnummer übersprungen";
                this.snackBar.open(message, "OK", {duration: 3000});
            });

        // Listen for failed auto-assign changes
        this.actions$
            .pipe(
                ofType(
                    MeasurementActions.enableAutoAssignFailure,
                    MeasurementActions.disableAutoAssignFailure,
                    MeasurementActions.skipAutoAssignFailure,
                ),
                takeUntil(this.destroy$),
            )
            .subscribe(({error}) => {
                this.snackBar.open(`FEHLER: ${error}`, "OK", {
                    duration: 10000,
                    panelClass: "error-snackbar",
                });
            });

        // Listen for successful/failed create, update and delete of a single measurement
        this.actions$
            .pipe(ofType(MeasurementActions.createMeasurementSuccess), takeUntil(this.destroy$))
            .subscribe(() => {
                this.snackBar.open("Messung erfolgreich erstellt", "OK", {duration: 3000});
            });
        this.actions$
            .pipe(ofType(MeasurementActions.createMeasurementFailure), takeUntil(this.destroy$))
            .subscribe(({error}) => {
                this.snackBar.open(`FEHLER beim Erstellen der Messung: ${error}`, "OK", {
                    duration: 10000,
                    panelClass: "error-snackbar",
                });
            });
        this.actions$
            .pipe(ofType(MeasurementActions.updateMeasurementSuccess), takeUntil(this.destroy$))
            .subscribe(() => {
                this.snackBar.open("Messung erfolgreich aktualisiert", "OK", {duration: 3000});
            });
        this.actions$
            .pipe(ofType(MeasurementActions.updateMeasurementFailure), takeUntil(this.destroy$))
            .subscribe(({error}) => {
                this.snackBar.open(`FEHLER beim Aktualisieren der Messung: ${error}`, "OK", {
                    duration: 10000,
                    panelClass: "error-snackbar",
                });
            });
        this.actions$
            .pipe(ofType(MeasurementActions.deleteMeasurementSuccess), takeUntil(this.destroy$))
            .subscribe(() => {
                this.snackBar.open("Messung erfolgreich gelöscht", "OK", {duration: 3000});
            });
        this.actions$
            .pipe(ofType(MeasurementActions.deleteMeasurementFailure), takeUntil(this.destroy$))
            .subscribe(({error}) => {
                this.snackBar.open(`FEHLER beim Löschen der Messung: ${error}`, "OK", {
                    duration: 10000,
                    panelClass: "error-snackbar",
                });
            });

        // Listen for successful reset and show success message. Read whether the device was
        // actually reset from the backend's own response message rather than echoing back what
        // was merely requested - resetAll() silently skips the device step when none is
        // configured (see MeasurementController#resetAll), so "what the user asked for" and
        // "what actually happened" can differ.
        this.actions$
            .pipe(ofType(MeasurementActions.resetMeasurementsSuccess), takeUntil(this.destroy$))
            .subscribe(({message}) => {
                const deviceWasReset = deviceWasResetFromMessage(message);
                const successMsg = deviceWasReset
                    ? "Alle Messungen wurden gelöscht (inkl. Gerät)"
                    : "Alle Messungen wurden gelöscht (nur Datenbank)";
                this.snackBar.open(successMsg, "OK", {
                    duration: 3000,
                });
            });

        // Listen for failed reset and show error message
        this.actions$
            .pipe(ofType(MeasurementActions.resetMeasurementsFailure), takeUntil(this.destroy$))
            .subscribe(() => {
                this.snackBar.open("FEHLER beim Löschen der Messungen", "OK", {
                    duration: 10000,
                    panelClass: "error-snackbar",
                });
            });

        // Listen for successful continuous mode change
        this.actions$
            .pipe(ofType(MeasurementActions.setContinuousModeSuccess), takeUntil(this.destroy$))
            .subscribe(({enabled}) => {
                const message = enabled ? "Kontinuierlicher Modus aktiviert" : "Kontinuierlicher Modus deaktiviert";
                this.snackBar.open(message, "OK", {
                    duration: 3000,
                });
            });

        // Listen for failed continuous mode change
        this.actions$
            .pipe(ofType(MeasurementActions.setContinuousModeFailure), takeUntil(this.destroy$))
            .subscribe(() => {
                this.snackBar.open("FEHLER beim Ändern des kontinuierlichen Modus", "OK", {
                    duration: 10000,
                    panelClass: "error-snackbar",
                });
            });

        // Listen for successful scheduled import change
        this.actions$
            .pipe(ofType(MeasurementActions.setScheduledImportSuccess), takeUntil(this.destroy$))
            .subscribe(({enabled}) => {
                const message = enabled
                    ? "Automatischer Import aktiviert (alle 5 Sekunden)"
                    : "Automatischer Import deaktiviert";
                this.snackBar.open(message, "OK", {
                    duration: 3000,
                });
            });

        // Listen for failed scheduled import change
        this.actions$
            .pipe(ofType(MeasurementActions.setScheduledImportFailure), takeUntil(this.destroy$))
            .subscribe(() => {
                this.snackBar.open("FEHLER beim Ändern des automatischen Imports", "OK", {
                    duration: 10000,
                    panelClass: "error-snackbar",
                });
            });

        // Listen for successful archive and show success message. Same reasoning as the reset
        // handler above: read whether the device was actually reset from the backend's response,
        // not from what was requested - archiveMeasurements() silently skips the device step when
        // none is configured (see RaceController#archiveMeasurements).
        this.actions$
            .pipe(ofType(MeasurementActions.archiveMeasurementsSuccess), takeUntil(this.destroy$))
            .subscribe(({clearAfterArchive, message}) => {
                const deviceWasReset = deviceWasResetFromMessage(message);
                const successMsg = !clearAfterArchive
                    ? "Messungen archiviert. Datenbank und Gerät wurden nicht verändert."
                    : deviceWasReset
                      ? "Messungen archiviert und Gerät zurückgesetzt. Bereit für das nächste Rennen."
                      : "Messungen archiviert. Bereit für das nächste Rennen.";
                this.snackBar.open(successMsg, "OK", {
                    duration: 3000,
                });
            });

        // Listen for failed archive and show error message
        this.actions$
            .pipe(ofType(MeasurementActions.archiveMeasurementsFailure), takeUntil(this.destroy$))
            .subscribe(() => {
                this.snackBar.open("FEHLER beim Archivieren der Messungen", "OK", {
                    duration: 10000,
                    panelClass: "error-snackbar",
                });
            });

        // Load device status when device connection is successful
        this.actions$
            .pipe(ofType(MeasurementActions.checkDeviceConnectionSuccess), takeUntil(this.destroy$))
            .subscribe(({connected}) => {
                if (connected) {
                    this.store.dispatch(MeasurementActions.loadDeviceStatus());
                }
            });

        // Listen for successful discard. The backend already advances the auto-assign cursor in
        // lockstep when it's active (see MeasurementController#discardOldestStart) - just refresh
        // the status here so the displayed "next expected number" updates immediately instead of
        // waiting for the next auto-refresh tick.
        this.actions$
            .pipe(ofType(MeasurementActions.discardOldestStartSuccess), takeUntil(this.destroy$))
            .subscribe(() => {
                this.store.dispatch(MeasurementActions.loadAutoAssignStatus());
                this.snackBar.open("Ältester Start erfolgreich verworfen", "OK", {
                    duration: 3000,
                });
            });

        // Listen for failed discard
        this.actions$
            .pipe(ofType(MeasurementActions.discardOldestStartFailure), takeUntil(this.destroy$))
            .subscribe(() => {
                this.snackBar.open("FEHLER beim Verwerfen des ältesten Starts", "OK", {
                    duration: 10000,
                    panelClass: "error-snackbar",
                });
            });

        // Reload device status after continuous mode change
        this.actions$
            .pipe(ofType(MeasurementActions.setContinuousModeSuccess), takeUntil(this.destroy$))
            .subscribe(() => {
                this.store.dispatch(MeasurementActions.loadDeviceStatus());
            });

        // Listen for successful export
        this.actions$
            .pipe(ofType(MeasurementActions.exportMeasurementsCsvSuccess), takeUntil(this.destroy$))
            .subscribe(() => {
                this.snackBar.open("Messungen erfolgreich exportiert", "OK", {duration: 3000});
            });

        // Listen for failed export
        this.actions$
            .pipe(ofType(MeasurementActions.exportMeasurementsCsvFailure), takeUntil(this.destroy$))
            .subscribe(() => {
                this.snackBar.open("FEHLER beim Exportieren der Messungen", "OK", {
                    duration: 10000,
                    panelClass: "error-snackbar",
                });
            });

        // Listen for successful CSV import
        this.actions$
            .pipe(ofType(MeasurementActions.importMeasurementsMappedSuccess), takeUntil(this.destroy$))
            .subscribe(({result}) => {
                const message =
                    result.skippedCount > 0
                        ? `Import abgeschlossen: ${result.importedCount} importiert, ${result.skippedCount} übersprungen`
                        : `Import abgeschlossen: ${result.importedCount} importiert`;
                this.snackBar.open(message, "OK", {duration: result.skippedCount > 0 ? 8000 : 3000});
                const errors = result.errors ?? [];
                if (errors.length > 0) {
                    const details = errors.map(e => `Zeile ${e.lineNumber}: ${e.reason}`).join("\n");
                    this.dialog.open(ConfirmDialogComponent, {
                        width: "500px",
                        data: {
                            title: "Übersprungene Zeilen",
                            message: details,
                            confirmLabel: "OK",
                            hideCancel: true,
                        },
                    });
                }
                this.loadData();
            });

        // Listen for failed CSV import
        this.actions$
            .pipe(ofType(MeasurementActions.importMeasurementsMappedFailure), takeUntil(this.destroy$))
            .subscribe(({error}) => {
                this.snackBar.open(`FEHLER beim Importieren der Messungen: ${error}`, "OK", {
                    duration: 10000,
                    panelClass: "error-snackbar",
                });
            });

        // Loads device status once a timing provider is confirmed active. Deliberately not grouped
        // with the other one-shot dispatches in ngAfterViewInit below: this one needs to react
        // again if the provider is switched on/off from the Settings page while this view stays
        // mounted, so it stays subscribed for the component's lifetime instead of firing once.
        this.timingProviderActive$.pipe(takeUntil(this.destroy$)).subscribe(active => {
            if (active) {
                this.store.dispatch(MeasurementActions.loadDeviceStatus());
            }
        });
    }

    ngAfterViewInit(): void {
        this.loadData();

        // Loaded once (not on every auto-refresh tick like measurements/races): selectFilteredMeasurements
        // needs the participant->race mapping to filter by race, and participants rarely change while
        // this view is open.
        this.store.dispatch(ParticipantActions.loadParticipants());
        this.store.dispatch(MeasurementActions.loadScheduledImportStatus());

        this.autoRefresh$
            .pipe(
                switchMap(enabled => (enabled ? interval(2000) : EMPTY)),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
                this.loadMeasurementData();
            });

        this.autoRefresh$.next(this.autoRefreshEnabled);
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
        this.autoRefresh$.complete();
    }

    onAutoRefreshToggle(): void {
        this.autoRefresh$.next(this.autoRefreshEnabled);
        const message = this.autoRefreshEnabled
            ? "Automatische Aktualisierung aktiviert"
            : "Automatische Aktualisierung deaktiviert";
        this.snackBar.open(message, "OK", {duration: 2000});
    }

    manualRefresh(): void {
        this.loadData();
        this.snackBar.open("Daten wurden aktualisiert", "OK", {duration: 2000});
    }

    private loadData(): void {
        this.store.dispatch(RaceActions.loadRaces());
        this.loadMeasurementData();
    }

    /**
     * The subset of loadData() that needs to stay live while a race is running: measurements and
     * auto-assign status (kept together so the "next expected number" and the auto-assigned
     * Teilnehmer column stay in step with the measurements they're derived from). Used for every
     * 2s auto-refresh tick. Races are a collection that practically never changes mid-run, so
     * they're only (re-)loaded on mount and on an explicit manual refresh via loadData(), not on
     * every tick.
     */
    private loadMeasurementData(): void {
        this.store.dispatch(MeasurementActions.loadMeasurements());
        this.store.dispatch(MeasurementActions.loadAutoAssignStatus());
        this.updateLastUpdateTime();
    }

    private updateLastUpdateTime(): void {
        const now = new Date();
        this.lastUpdate = now.toLocaleTimeString("de-DE");
    }

    getParticipantName(participantId: number, participants: Participant[]): string {
        const participant = participants.find(p => p.id === participantId);
        return participant?.person ? `${participant.person.firstName} ${participant.person.lastName}` : "-";
    }

    getParticipantNameByRaceNumber(raceId: number, raceNumber: number, participants: Participant[]): string {
        const participant = participants.find(p => p.race?.id === raceId && p.raceNumber === raceNumber);
        return participant?.person ? `${participant.person.firstName} ${participant.person.lastName}` : "unbekannt";
    }

    formatRaceDate(dateString: string): string {
        const parts = dateString.split("-");
        if (parts.length === 3) {
            const [year, month, day] = parts;
            return `${day}.${month}.${year}`;
        }
        return dateString;
    }

    onRaceChange(raceId: number | null): void {
        this.store.dispatch(RaceActions.selectRace({id: raceId}));
        // Selecting a race is the on/off switch for auto-assign - no separate start/stop button.
        if (raceId !== null) {
            this.store.dispatch(MeasurementActions.enableAutoAssign({request: {raceId}}));
        } else {
            this.store.dispatch(MeasurementActions.disableAutoAssign());
        }
    }

    skipAutoAssign(): void {
        this.store.dispatch(MeasurementActions.skipAutoAssign());
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

    openCreateDialog(): void {
        const dialogRef = this.dialog.open(MeasurementDialogComponent, {
            width: "500px",
        });

        dialogRef
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
                if (result) {
                    this.store.dispatch(MeasurementActions.createMeasurement({measurement: result}));
                }
            });
    }

    openEditDialog(measurement: Measurement): void {
        const dialogRef = this.dialog.open(MeasurementDialogComponent, {
            width: "500px",
            data: measurement,
        });

        dialogRef
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
                if (result) {
                    this.store.dispatch(
                        MeasurementActions.updateMeasurement({
                            id: measurement.id,
                            measurement: result,
                        }),
                    );
                }
            });
    }

    deleteMeasurement(measurement: Measurement): void {
        this.dialog
            .open(ConfirmDialogComponent, {
                width: "450px",
                data: {
                    message: `Möchten Sie die Messung #${measurement.id} wirklich löschen?`,
                    confirmLabel: "Löschen",
                    confirmColor: "warn",
                },
            })
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(confirmed => {
                if (confirmed) {
                    this.store.dispatch(MeasurementActions.deleteMeasurement({id: measurement.id}));
                }
            });
    }

    resetMeasurements(resetDevice: boolean): void {
        const message = resetDevice
            ? "Möchten Sie wirklich ALLE Messungen löschen? Dies betrifft auch die Messungen auf dem Gerät!"
            : "Möchten Sie wirklich ALLE Messungen löschen (nur aus der Datenbank)?";

        this.dialog
            .open(ConfirmDialogComponent, {
                width: "450px",
                data: {message, confirmLabel: "Löschen", confirmColor: "warn"},
            })
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(confirmed => {
                if (confirmed) {
                    this.store.dispatch(MeasurementActions.resetMeasurements({resetDevice}));
                }
            });
    }

    toggleContinuousMode(enable: boolean): void {
        const message = enable
            ? "Möchten Sie den kontinuierlichen Modus wirklich aktivieren? Dabei werden alle Zeiten auf dem Gerät zurückgesetzt!"
            : "Möchten Sie den kontinuierlichen Modus wirklich deaktivieren? Dabei werden alle Zeiten auf dem Gerät zurückgesetzt!";

        this.dialog
            .open(ConfirmDialogComponent, {
                width: "450px",
                data: {message, confirmLabel: "Bestätigen"},
            })
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(confirmed => {
                if (confirmed) {
                    this.store.dispatch(MeasurementActions.setContinuousMode({enable}));
                }
            });
    }

    toggleScheduledImport(enable: boolean): void {
        this.store.dispatch(MeasurementActions.setScheduledImport({enable}));
    }

    openArchiveDialog(): void {
        this.races$.pipe(take(1)).subscribe(races => {
            const dialogRef = this.dialog.open(ArchiveMeasurementsDialogComponent, {
                width: "500px",
                data: {races},
            });

            dialogRef
                .afterClosed()
                .pipe(takeUntil(this.destroy$))
                .subscribe((result?: ArchiveMeasurementsDialogResult) => {
                    if (!result) {
                        return;
                    }
                    this.store.dispatch(MeasurementActions.archiveMeasurements(result));
                });
        });
    }

    discardOldestStart(): void {
        this.dialog
            .open(ConfirmDialogComponent, {
                width: "450px",
                data: {
                    message:
                        "Möchten Sie den ältesten Start aus der Warteschlange verwerfen? Dies sollte verwendet werden, wenn ein Läufer gestürzt ist.",
                    confirmLabel: "Verwerfen",
                    confirmColor: "warn",
                },
            })
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(confirmed => {
                if (confirmed) {
                    this.store.dispatch(MeasurementActions.discardOldestStart());
                }
            });
    }

    exportMeasurementsCsv(): void {
        this.store.dispatch(MeasurementActions.exportMeasurementsCsv());
    }

    openImportDialog(): void {
        const dialogRef = this.dialog.open(MeasurementImportMappingDialogComponent, {
            width: "900px",
        });

        dialogRef
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((result: MeasurementImportMappingDialogResult | undefined) => {
                if (result) {
                    this.store.dispatch(
                        MeasurementActions.importMeasurementsMapped({
                            file: result.file,
                            delimiter: result.delimiter,
                            mapping: result.mapping,
                        }),
                    );
                    this.snackBar.open("Import gestartet...", "OK", {duration: 2000});
                }
            });
    }
}
