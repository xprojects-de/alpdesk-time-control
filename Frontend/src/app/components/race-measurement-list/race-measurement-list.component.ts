import {Component, AfterViewInit, OnDestroy, inject} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Store} from "@ngrx/store";
import {Observable, combineLatest, Subject} from "rxjs";
import {map, takeUntil, distinctUntilChanged, filter, take} from "rxjs/operators";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {RaceSelectComponent} from "../shared/race-select/race-select.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {RaceMeasurement, RaceMeasurementImportResponse} from "../../models/race-measurement.model";
import {shallowArrayEqual} from "../../utils/shallow-equal.util";
import {formatDeviceMeasurementId, isSyntheticDeviceMeasurementId} from "../../utils/device-measurement-id.util";
import {formatParticipantMeta} from "../../utils/participant-meta.util";
import {Participant} from "../../models/participant.model";
import {Race} from "../../models/race.model";
import * as RaceMeasurementActions from "../../store/race-measurement/race-measurement.actions";
import * as RaceMeasurementSelectors from "../../store/race-measurement/race-measurement.selectors";
import * as ParticipantActions from "../../store/participant/participant.actions";
import * as ParticipantSelectors from "../../store/participant/participant.selectors";
import * as RaceActions from "../../store/race/race.actions";
import * as RaceSelectors from "../../store/race/race.selectors";
import {RaceMeasurementDialogComponent} from "./race-measurement-dialog.component";
import {
    RaceMeasurementImportMappingDialogComponent,
    RaceMeasurementImportMappingDialogData,
    RaceMeasurementImportMappingDialogResult,
} from "./race-measurement-import-mapping-dialog.component";
import {ConfirmDialogComponent} from "../shared/confirm-dialog/confirm-dialog.component";
import {Actions, ofType} from "@ngrx/effects";

interface RaceMeasurementWithParticipant extends RaceMeasurement {
    participantName?: string;
    /** Start number, age group and team of the assigned participant - see formatParticipantMeta. */
    participantMeta?: string;
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
        RaceSelectComponent,
        MatFormFieldModule,
    ],
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>Zuordnung &amp; Sync</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <div class="filter-section">
                    <app-race-select
                        [races]="(races$ | async) ?? []"
                        [value]="selectedRaceId$ | async"
                        (valueChange)="onRaceChange($any($event))"
                    />
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
                        <button
                            mat-raised-button
                            (click)="exportCsv(selectedRaceId)"
                            matTooltip="Archivierte Messungen dieses Rennens als CSV sichern"
                        >
                            <mat-icon>download</mat-icon>
                            CSV-Export
                        </button>
                        <button
                            mat-raised-button
                            (click)="openImportDialog(selectedRaceId)"
                            matTooltip="Archivierte Messungen dieses Rennens durch eine CSV-Datei ersetzen"
                        >
                            <mat-icon>upload_file</mat-icon>
                            CSV-Import
                        </button>
                        <button
                            mat-raised-button
                            color="warn"
                            (click)="deleteAllOfRace(selectedRaceId)"
                            [disabled]="((raceMeasurements$ | async) ?? []).length === 0"
                            matTooltip="Alle archivierten Messungen dieses Rennens löschen, z. B. um neu zu archivieren"
                        >
                            <mat-icon>delete_sweep</mat-icon>
                            Alle löschen
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
                            <ng-container matColumnDef="deviceMeasurementId">
                                <th mat-header-cell *matHeaderCellDef>Geräte-Nr.</th>
                                <td
                                    mat-cell
                                    *matCellDef="let m"
                                    [matTooltip]="
                                        isSyntheticDeviceMeasurementId(m.deviceMeasurementId)
                                            ? 'Ohne Gerät erfasst (manuell oder CSV-Import)'
                                            : ''
                                    "
                                >
                                    {{ formatDeviceMeasurementId(m.deviceMeasurementId) }}
                                </td>
                            </ng-container>

                            <ng-container matColumnDef="participant">
                                <th mat-header-cell *matHeaderCellDef>Teilnehmer</th>
                                <td mat-cell *matCellDef="let m">
                                    @if (m.participantName) {
                                        <div class="participant-cell">
                                            <span>{{ m.participantName }}</span>
                                            @if (m.participantMeta) {
                                                <span class="participant-meta">{{ m.participantMeta }}</span>
                                            }
                                        </div>
                                    } @else {
                                        -
                                    }
                                </td>
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

            /*
             * Start number, age group and team below the name: what tells two runners of the same
             * name apart, and what an operator checks a manual assignment against. Kept visually
             * secondary so the name is still what the eye scans the column for.
             */
            .participant-cell {
                display: flex;
                flex-direction: column;
                line-height: 1.3;
                padding: 4px 0;
            }

            .participant-meta {
                font-size: 11px;
                color: var(--mat-sys-on-surface-variant);
            }

            mat-card {
                margin: 20px;
            }

            mat-card-content {
                position: relative;
            }

            mat-form-field,
            app-race-select {
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
    displayedColumns = ["deviceMeasurementId", "participant", "duration", "measuredAt", "actions"];

    constructor() {
        this.raceMeasurements$ = this.store.select(RaceMeasurementSelectors.selectAllRaceMeasurements);
        this.participants$ = this.store.select(ParticipantSelectors.selectAllParticipants);
        this.races$ = this.store.select(RaceSelectors.selectAllRaces);
        this.selectedRaceId$ = this.store.select(RaceSelectors.selectSelectedRaceId);
        this.loading$ = this.store.select(RaceMeasurementSelectors.selectRaceMeasurementLoading);

        this.raceMeasurementsWithParticipants$ = combineLatest([this.raceMeasurements$, this.participants$]).pipe(
            map(([raceMeasurements, participants]) =>
                raceMeasurements.map(m => {
                    const participant = m.participantId ? participants.find(p => p.id === m.participantId) : undefined;
                    return {
                        ...m,
                        participantName: participant?.person
                            ? `${participant.person.firstName} ${participant.person.lastName}`
                            : undefined,
                        participantMeta: formatParticipantMeta(participant),
                    };
                }),
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

        this.actions$
            .pipe(ofType(RaceMeasurementActions.deleteAllRaceMeasurementsSuccess), takeUntil(this.destroy$))
            .subscribe(({response}) => {
                this.snackBar.open(`${response.deletedCount} archivierte Messungen gelöscht`, "OK", {duration: 5000});
            });

        this.actions$
            .pipe(ofType(RaceMeasurementActions.importRaceMeasurementsCsvSuccess), takeUntil(this.destroy$))
            .subscribe(({response}) => this.showImportResult(response));

        this.actions$
            .pipe(
                ofType(
                    RaceMeasurementActions.deleteAllRaceMeasurementsFailure,
                    RaceMeasurementActions.exportRaceMeasurementsCsvFailure,
                    RaceMeasurementActions.importRaceMeasurementsCsvFailure,
                ),
                takeUntil(this.destroy$),
            )
            .subscribe(({error}) => {
                this.snackBar.open(`FEHLER: ${error}`, "OK", {duration: 15000, panelClass: "error-snackbar"});
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

    formatDeviceMeasurementId = formatDeviceMeasurementId;

    /**
     * Names an archived measurement the way the table shows it - by the device counter, not by the
     * database id the table no longer prints.
     */
    describeRaceMeasurement(raceMeasurement: RaceMeasurement): string {
        return isSyntheticDeviceMeasurementId(raceMeasurement.deviceMeasurementId)
            ? `die manuell erfasste archivierte Messung (${this.formatDuration(raceMeasurement.durationMs)})`
            : `die archivierte Messung Geräte-Nr. ${raceMeasurement.deviceMeasurementId} (${this.formatDuration(raceMeasurement.durationMs)})`;
    }
    isSyntheticDeviceMeasurementId = isSyntheticDeviceMeasurementId;

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
                    message: `Möchten Sie ${this.describeRaceMeasurement(raceMeasurement)} wirklich löschen?`,
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

    exportCsv(raceId: number): void {
        this.store.dispatch(RaceMeasurementActions.exportRaceMeasurementsCsv({raceId}));
    }

    deleteAllOfRace(raceId: number): void {
        this.raceMeasurements$.pipe(take(1)).subscribe(raceMeasurements => {
            this.confirm(
                `Möchten Sie alle ${raceMeasurements.length} archivierten Messungen dieses Rennens löschen? ` +
                    "Die bereits zu den Teilnehmern synchronisierten Zeiten bleiben unverändert. " +
                    "Tipp: vorher mit „CSV-Export“ sichern.",
                "Alle löschen",
                () => this.store.dispatch(RaceMeasurementActions.deleteAllRaceMeasurements({raceId})),
            );
        });
    }

    openImportDialog(raceId: number): void {
        this.raceMeasurements$.pipe(take(1)).subscribe(raceMeasurements => {
            const data: RaceMeasurementImportMappingDialogData = {raceId, existingCount: raceMeasurements.length};
            this.dialog
                .open(RaceMeasurementImportMappingDialogComponent, {width: "760px", data})
                .afterClosed()
                .pipe(takeUntil(this.destroy$))
                .subscribe((result: RaceMeasurementImportMappingDialogResult | undefined) => {
                    if (result) {
                        this.store.dispatch(RaceMeasurementActions.importRaceMeasurementsCsv({raceId, ...result}));
                    }
                });
        });
    }

    private confirm(message: string, confirmLabel: string, onConfirm: () => void): void {
        this.dialog
            .open(ConfirmDialogComponent, {
                width: "500px",
                data: {message, confirmLabel, confirmColor: "warn"},
            })
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(confirmed => {
                if (confirmed) {
                    onConfirm();
                }
            });
    }

    private showImportResult(response: RaceMeasurementImportResponse): void {
        const warnings = response.warnings ?? [];
        const summary =
            `${response.importedCount} archivierte Messungen importiert` +
            (response.withoutParticipantCount > 0 ? `, davon ${response.withoutParticipantCount} ohne Teilnehmer` : "");
        if (warnings.length === 0) {
            this.snackBar.open(summary, "OK", {duration: 5000});
            return;
        }
        const lines = warnings.map(
            w =>
                `Zeile ${w.lineNumber} (${w.rawLine}): Startnummer nicht in diesem Rennen – ohne Teilnehmer importiert`,
        );
        this.dialog.open(ConfirmDialogComponent, {
            width: "600px",
            data: {title: "Import abgeschlossen", message: `${summary}.\n\n${lines.join("\n")}`, hideCancel: true},
        });
    }

    syncToParticipants(raceId: number): void {
        this.store.dispatch(RaceMeasurementActions.syncRaceMeasurementsToParticipants({raceId}));
        this.snackBar.open("Synchronisierung gestartet...", "OK", {
            duration: 2000,
        });
    }
}
