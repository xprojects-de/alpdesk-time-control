import {
    Component,
    AfterViewInit,
    OnDestroy,
    inject,
    ChangeDetectionStrategy,
} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Observable, combineLatest, interval, Subject, EMPTY} from "rxjs";
import {
    map,
    takeUntil,
    switchMap,
    distinctUntilChanged,
} from "rxjs/operators";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatBadgeModule} from "@angular/material/badge";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {Measurement} from "../../models/measurement.model";
import {Participant} from "../../models/participant.model";
import {Race} from "../../models/race.model";
import * as MeasurementActions from "../../store/measurement/measurement.actions";
import * as MeasurementSelectors from "../../store/measurement/measurement.selectors";
import * as ParticipantActions from "../../store/participant/participant.actions";
import * as ParticipantSelectors from "../../store/participant/participant.selectors";
import * as RaceActions from "../../store/race/race.actions";
import * as RaceSelectors from "../../store/race/race.selectors";
import {MeasurementDialogComponent} from "./measurement-dialog.component";
import {Actions, ofType} from "@ngrx/effects";

interface MeasurementWithParticipant extends Measurement {
    participantName?: string;
}

@Component({
    selector: "app-measurement-list",
    standalone: true,
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
        MatBadgeModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatDividerModule,
        FormsModule,
        MatSelectModule,
        MatFormFieldModule,
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
                                <mat-icon class="sync-icon syncing" matTooltip="Aktualisiere..."
                                >sync
                                </mat-icon
                                >
                            } @else {
                                <mat-icon
                                        class="sync-icon"
                                        matTooltip="Letzte Aktualisierung: {{ lastUpdate }}"
                                >sync
                                </mat-icon
                                >
                            }
                            <span class="last-update-text">{{ lastUpdate }}</span>
                        </div>
                    </div>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <div class="filter-section">
                    <mat-form-field appearance="outline">
                        <mat-label>Nach Rennen filtern</mat-label>
                        <mat-select [value]="selectedRaceId$ | async" 
                                   (selectionChange)="onRaceFilterChange($event.value)">
                            <mat-option [value]="null">Alle Rennen</mat-option>
                            @for (race of races$ | async; track race.id) {
                                <mat-option [value]="race.id">{{ race.name }} ({{ formatRaceDate(race.date) }})</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>

                <div class="header-actions">
                    <button
                            mat-raised-button
                            color="primary"
                            (click)="openCreateDialog()"
                    >
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
                            (click)="syncMeasurementsToParticipants()"
                            matTooltip="Messungen mit Teilnehmern synchronisieren"
                    >
                        <mat-icon>sync</mat-icon>
                        Sync zu Teilnehmern
                    </button>
                    
                    @if ((deviceStatus$ | async) === 'continuous') {
                        <button 
                                mat-raised-button 
                                color="accent"
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
                    
                    @if ((deviceStatus$ | async) === 'normal') {
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
                    
                    @if (scheduledImportEnabled$ | async) {
                        <button 
                                mat-raised-button 
                                color="accent"
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

                @if (loading$ | async) {
                    <div class="loading-overlay">
                        <mat-spinner diameter="30"></mat-spinner>
                    </div>
                }

                <table
                        mat-table
                        [dataSource]="(measurementsWithParticipants$ | async) || []"
                        class="measurement-table"
                        [class.loading]="loading$ | async"
                >
                    <!-- ID Column -->
                    <ng-container matColumnDef="id">
                        <th mat-header-cell *matHeaderCellDef>ID</th>
                        <td mat-cell *matCellDef="let measurement">{{ measurement.id }}</td>
                    </ng-container>

                    <!-- Participant Column -->
                    <ng-container matColumnDef="participant">
                        <th mat-header-cell *matHeaderCellDef>Teilnehmer</th>
                        <td mat-cell *matCellDef="let measurement">
                            {{ measurement.participantName || "-" }}
                        </td>
                    </ng-container>

                    <!-- Duration Column -->
                    <ng-container matColumnDef="duration">
                        <th mat-header-cell *matHeaderCellDef>Dauer</th>
                        <td mat-cell *matCellDef="let measurement">
                            {{ formatDuration(measurement.durationMs) }}
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
                            <button
                                    mat-icon-button
                                    (click)="openEditDialog(measurement)"
                                    matTooltip="Bearbeiten"
                            >
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
                
                <div class="count-info">
                    Anzahl der Messungen: {{ ((measurementsWithParticipants$ | async) || []).length }}
                </div>
            </mat-card-content>
        </mat-card>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
          .filter-section {
            margin-top: 20px;
            margin-bottom: 20px;
            display: flex;
            gap: 10px;
            align-items: center;
          }

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

          .loading-container {
            display: flex;
            justify-content: center;
            padding: 40px;
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

          .menu-section-header {
            opacity: 0.7;
            cursor: default !important;
          }

          .menu-section-header span {
            font-size: 0.875rem;
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

    measurements$: Observable<Measurement[]>;
    participants$: Observable<Participant[]>;
    races$: Observable<Race[]>;
    selectedRaceId$: Observable<number | null>;
    measurementsWithParticipants$: Observable<MeasurementWithParticipant[]>;
    loading$: Observable<boolean>;
    continuousModeEnabled$: Observable<boolean>;
    scheduledImportEnabled$: Observable<boolean>;
    deviceStatus$: Observable<string | null>;
    displayedColumns = ["id", "participant", "duration", "measuredAt", "actions"];
    lastUpdate = "";
    autoRefreshEnabled = false;
    private lastResetDevice = false;

    constructor() {
        this.measurements$ = this.store.select(
            MeasurementSelectors.selectAllMeasurements,
        );
        this.participants$ = this.store.select(
            ParticipantSelectors.selectAllParticipants,
        );
        this.races$ = this.store.select(RaceSelectors.selectAllRaces);
        this.selectedRaceId$ = this.store.select(RaceSelectors.selectSelectedRaceId);
        this.loading$ = this.store.select(
            MeasurementSelectors.selectMeasurementLoading,
        );
        this.continuousModeEnabled$ = this.store.select(
            MeasurementSelectors.selectContinuousModeEnabled,
        );
        this.scheduledImportEnabled$ = this.store.select(
            MeasurementSelectors.selectScheduledImportEnabled,
        );
        this.deviceStatus$ = this.store.select(
            MeasurementSelectors.selectDeviceStatus,
        );

        this.measurementsWithParticipants$ = combineLatest([
            this.measurements$,
            this.participants$,
        ]).pipe(
            map(([measurements, participants]) =>
                measurements.map((m) => ({
                    ...m,
                    participantName: m.participantId
                        ? this.getParticipantName(m.participantId, participants)
                        : undefined,
                })),
            ),
            distinctUntilChanged(
                (prev, curr) => JSON.stringify(prev) === JSON.stringify(curr),
            ),
        );

        // Listen for successful reset and show success message
        this.actions$.pipe(
            ofType(MeasurementActions.resetMeasurementsSuccess),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            const successMsg = this.lastResetDevice
                ? 'Alle Messungen wurden gelöscht (inkl. Gerät)'
                : 'Alle Messungen wurden gelöscht (nur Datenbank)';
            this.snackBar.open(successMsg, 'OK', {
                duration: 3000,
            });
        });

        // Listen for failed reset and show error message
        this.actions$.pipe(
            ofType(MeasurementActions.resetMeasurementsFailure),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.snackBar.open('FEHLER beim Löschen der Messungen', 'OK', {
                duration: 10000,
                panelClass: 'error-snackbar'
            });
        });

        // Listen for successful continuous mode change
        this.actions$.pipe(
            ofType(MeasurementActions.setContinuousModeSuccess),
            takeUntil(this.destroy$)
        ).subscribe(({enabled}) => {
            const message = enabled
                ? 'Kontinuierlicher Modus aktiviert'
                : 'Kontinuierlicher Modus deaktiviert';
            this.snackBar.open(message, 'OK', {
                duration: 3000,
            });
        });

        // Listen for failed continuous mode change
        this.actions$.pipe(
            ofType(MeasurementActions.setContinuousModeFailure),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.snackBar.open('FEHLER beim Ändern des kontinuierlichen Modus', 'OK', {
                duration: 10000,
                panelClass: 'error-snackbar'
            });
        });

        // Listen for successful scheduled import change
        this.actions$.pipe(
            ofType(MeasurementActions.setScheduledImportSuccess),
            takeUntil(this.destroy$)
        ).subscribe(({enabled}) => {
            const message = enabled
                ? 'Automatischer Import aktiviert (alle 5 Sekunden)'
                : 'Automatischer Import deaktiviert';
            this.snackBar.open(message, 'OK', {
                duration: 3000,
            });
        });

        // Listen for failed scheduled import change
        this.actions$.pipe(
            ofType(MeasurementActions.setScheduledImportFailure),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.snackBar.open('FEHLER beim Ändern des automatischen Imports', 'OK', {
                duration: 10000,
                panelClass: 'error-snackbar'
            });
        });

        // Listen for successful sync to participants
        this.actions$.pipe(
            ofType(MeasurementActions.syncMeasurementsToParticipantsSuccess),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.snackBar.open('Messungen erfolgreich mit Teilnehmern synchronisiert', 'OK', {
                duration: 3000,
            });
            this.loadData();
        });

        // Listen for failed sync to participants
        this.actions$.pipe(
            ofType(MeasurementActions.syncMeasurementsToParticipantsFailure),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.snackBar.open('FEHLER beim Synchronisieren der Messungen', 'OK', {
                duration: 10000,
                panelClass: 'error-snackbar'
            });
        });

        // Listen for successful device status load
        this.actions$.pipe(
            ofType(MeasurementActions.loadDeviceStatusSuccess),
            takeUntil(this.destroy$)
        ).subscribe(({status}) => {
            console.log('Device status loaded:', status);
        });

        // Listen for failed device status load
        this.actions$.pipe(
            ofType(MeasurementActions.loadDeviceStatusFailure),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.snackBar.open('FEHLER beim Laden des Gerätestatus', 'OK', {
                duration: 5000,
                panelClass: 'error-snackbar'
            });
        });

        // Listen for successful discard
        this.actions$.pipe(
            ofType(MeasurementActions.discardOldestStartSuccess),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.snackBar.open('Ältester Start erfolgreich verworfen', 'OK', {
                duration: 3000,
            });
        });

        // Listen for failed discard
        this.actions$.pipe(
            ofType(MeasurementActions.discardOldestStartFailure),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.snackBar.open('FEHLER beim Verwerfen des ältesten Starts', 'OK', {
                duration: 10000,
                panelClass: 'error-snackbar'
            });
        });

        // Reload device status after continuous mode change
        this.actions$.pipe(
            ofType(MeasurementActions.setContinuousModeSuccess),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.store.dispatch(MeasurementActions.loadDeviceStatus());
        });
    }

    ngAfterViewInit(): void {

        this.loadData();

        this.store.dispatch(MeasurementActions.loadScheduledImportStatus());
        this.store.dispatch(MeasurementActions.loadDeviceStatus());

        this.autoRefresh$
            .pipe(
                switchMap((enabled) => (enabled ? interval(2000) : EMPTY)),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
                this.loadData();
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
        this.store.dispatch(MeasurementActions.loadMeasurements());
        this.store.dispatch(ParticipantActions.loadParticipants());
        this.store.dispatch(RaceActions.loadRaces());
        this.updateLastUpdateTime();
    }

    private updateLastUpdateTime(): void {
        const now = new Date();
        this.lastUpdate = now.toLocaleTimeString("de-DE");
    }

    getParticipantName(
        participantId: number,
        participants: Participant[],
    ): string {
        const participant = participants.find((p) => p.id === participantId);
        return participant
            ? `${participant.firstName} ${participant.lastName}`
            : "-";
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

         dialogRef.afterClosed()
             .pipe(takeUntil(this.destroy$))
             .subscribe((result) => {
             if (result) {
                 this.store.dispatch(
                     MeasurementActions.createMeasurement({measurement: result}),
                 );
                 this.snackBar.open("Messung erfolgreich erstellt", "OK", {
                     duration: 3000,
                 });
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
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(
                        MeasurementActions.updateMeasurement({
                            id: measurement.id,
                            measurement: result,
                        }),
                    );
                    this.snackBar.open("Messung erfolgreich aktualisiert", "OK", {
                        duration: 3000,
                    });
                }
            });
    }

    deleteMeasurement(measurement: Measurement): void {
        if (
            confirm(`Möchten Sie die Messung #${measurement.id} wirklich löschen?`)
        ) {
            this.store.dispatch(
                MeasurementActions.deleteMeasurement({id: measurement.id}),
            );
            this.snackBar.open("Messung erfolgreich gelöscht", "OK", {
                duration: 3000,
            });
        }
    }

    onRaceFilterChange(raceId: number | null): void {
        this.store.dispatch(RaceActions.selectRace({id: raceId}));
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



    resetMeasurements(resetDevice: boolean): void {
        const message = resetDevice
            ? 'Möchten Sie wirklich ALLE Messungen löschen? Dies betrifft auch die Messungen auf dem Gerät!'
            : 'Möchten Sie wirklich ALLE Messungen löschen (nur aus der Datenbank)?';

        if (confirm(message)) {
            this.lastResetDevice = resetDevice;
            this.store.dispatch(MeasurementActions.resetMeasurements({ resetDevice }));
        }
    }

    toggleContinuousMode(enable: boolean): void {
        this.store.dispatch(MeasurementActions.setContinuousMode({ enable }));
    }

    toggleScheduledImport(enable: boolean): void {
        this.store.dispatch(MeasurementActions.setScheduledImport({ enable }));
    }

    syncMeasurementsToParticipants(): void {
        this.store.dispatch(MeasurementActions.syncMeasurementsToParticipants());
        this.snackBar.open('Synchronisierung gestartet...', 'OK', {
            duration: 2000,
        });
    }

    discardOldestStart(): void {
        if (confirm('Möchten Sie den ältesten Start aus der Warteschlange verwerfen? Dies sollte verwendet werden, wenn ein Läufer gestürzt ist.')) {
            this.store.dispatch(MeasurementActions.discardOldestStart());
        }
    }
}
