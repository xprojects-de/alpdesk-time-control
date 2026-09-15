import {
    Component,
    AfterViewInit,
    viewChild,
    OnDestroy,
    inject,
    effect,
    ChangeDetectionStrategy,
} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Store} from "@ngrx/store";
import {Observable, Subject, firstValueFrom} from "rxjs";
import {MatTableModule, MatTableDataSource} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSortModule, MatSort} from "@angular/material/sort";
import {MatPaginatorModule, MatPaginator} from "@angular/material/paginator";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {DisqualificationStatus, Participant} from "../../models/participant.model";
import {Gender, GenderLabels} from "../../models/gender.model";
import {Race, ResultUnit, SortDirection} from "../../models/race.model";
import * as ParticipantActions from "../../store/participant/participant.actions";
import * as ParticipantSelectors from "../../store/participant/participant.selectors";
import * as RaceActions from "../../store/race/race.actions";
import * as RaceSelectors from "../../store/race/race.selectors";
import {ParticipantDialogComponent} from "./participant-dialog.component";
import {ParticipantCopyDialogComponent, ParticipantCopyDialogResult} from "./participant-copy-dialog.component";
import {
    ParticipantImportMappingDialogComponent,
    ParticipantImportMappingDialogResult
} from "./participant-import-mapping-dialog.component";
import {
    ParticipantResultImportMappingDialogComponent,
    ParticipantResultImportMappingDialogResult
} from "./participant-result-import-mapping-dialog.component";
import {takeUntil, take} from "rxjs/operators";
import {Actions, ofType} from "@ngrx/effects";

@Component({
    selector: "app-participant-list",
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
        MatSortModule,
        MatPaginatorModule,
        MatSelectModule,
        MatFormFieldModule,
        MatMenuModule,
        MatDividerModule,
    ],
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>Teilnehmer</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <div class="filter-section">
                    <mat-form-field appearance="outline">
                        <mat-label>Nach Rennen filtern</mat-label>
                        <mat-select [value]="selectedRaceId$ | async"
                                   (selectionChange)="onRaceFilterChange($event.value)">
                            <mat-option [value]="null">Rennen auswählen...</mat-option>
                            @for (race of races$ | async; track race.id) {
                                <mat-option [value]="race.id">{{ race.name }} ({{ formatRaceDate(race.date) }})</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    @if ((selectedRaceId$ | async) !== null) {
                        <button
                                mat-raised-button
                                color="warn"
                                (click)="deleteParticipantsByRace()"
                                matTooltip="Alle Teilnehmer des gefilterten Rennens löschen"
                        >
                            <mat-icon>delete_sweep</mat-icon>
                            Alle Teilnehmer löschen
                        </button>
                    }
                </div>

                <div class="header-actions">
                    <button
                            mat-raised-button
                            color="primary"
                            (click)="openCreateDialog()"
                    >
                        <mat-icon>add</mat-icon>
                        Neuer Teilnehmer
                    </button>
                    <button
                            mat-raised-button
                            (click)="refreshData()"
                            matTooltip="Daten aktualisieren"
                    >
                        <mat-icon>refresh</mat-icon>
                        Aktualisieren
                    </button>

                    @if ((selectedRaceId$ | async) !== null) {
                        <button
                                mat-raised-button
                                (click)="assignRaceNumbers()"
                                matTooltip="Startnummern innerhalb der Altersklassen zufällig zuweisen"
                        >
                            <mat-icon>shuffle</mat-icon>
                            Startnummern zuweisen
                        </button>

                        <button
                                mat-raised-button
                                color="accent"
                                (click)="exportStartListPdf()"
                                matTooltip="Startliste als PDF exportieren"
                        >
                            <mat-icon>picture_as_pdf</mat-icon>
                            Startliste (PDF)
                        </button>

                        <button
                                mat-raised-button
                                (click)="openImportDialog()"
                                [disabled]="importLoading$ | async"
                                matTooltip="Teilnehmer importieren (CSV mit beliebigem Trennzeichen oder DSV-Wettkampfdatei, mit Spalten-Zuordnung)"
                        >
                            @if (importLoading$ | async) {
                                <mat-spinner diameter="20" style="display: inline-block; margin-right: 8px;"></mat-spinner>
                            } @else {
                                <mat-icon>upload_file</mat-icon>
                            }
                            Teilnehmer importieren
                        </button>

                        <button
                                mat-raised-button
                                (click)="openResultImportDialog()"
                                [disabled]="resultImportLoading$ | async"
                                matTooltip="Ergebnisse (Zeit/Status) für bereits vorhandene Teilnehmer per Startnummer importieren - legt keine neuen Teilnehmer an"
                        >
                            @if (resultImportLoading$ | async) {
                                <mat-spinner diameter="20" style="display: inline-block; margin-right: 8px;"></mat-spinner>
                            } @else {
                                <mat-icon>update</mat-icon>
                            }
                            Ergebnisse importieren
                        </button>

                        <button
                                mat-raised-button
                                (click)="exportResults()"
                                matTooltip="Ergebnisse (Startnummer/Zeit/Status) dieses Rennens als CSV exportieren - zum Teilen mit einer anderen Instanz, die dieselben Teilnehmer schon hat"
                        >
                            <mat-icon>download</mat-icon>
                            Ergebnisse exportieren
                        </button>

                        <button
                                mat-raised-button
                                (click)="openCopyDialog()"
                                [disabled]="copyLoading$ | async"
                                matTooltip="Alle Teilnehmer dieses Rennens in andere Rennen kopieren"
                        >
                            @if (copyLoading$ | async) {
                                <mat-spinner diameter="20" style="display: inline-block; margin-right: 8px;"></mat-spinner>
                            } @else {
                                <mat-icon>content_copy</mat-icon>
                            }
                            In andere Rennen kopieren
                        </button>
                    }

                    <button
                            mat-raised-button
                            color="accent"
                            [matMenuTriggerFor]="exportMenu"
                            [disabled]="pdfExportLoading$ | async"
                            matTooltip="PDF Export Optionen"
                    >
                        @if (pdfExportLoading$ | async) {
                            <mat-spinner diameter="20" style="display: inline-block; margin-right: 8px;"></mat-spinner>
                        } @else {
                            <mat-icon>picture_as_pdf</mat-icon>
                        }
                        PDF Export
                        <mat-icon>arrow_drop_down</mat-icon>
                    </button>
                    
                    <mat-menu #exportMenu="matMenu">
                        <button mat-menu-item (click)="exportAllPdf()">
                            <mat-icon>groups</mat-icon>
                            <span>Gesamtwertung (Alle)</span>
                        </button>

                        <button mat-menu-item (click)="exportAllByCategoryPdf()">
                            <mat-icon>category</mat-icon>
                            <span>Gesamtwertung (Alle) nach Kategorie</span>
                        </button>

                        <mat-divider></mat-divider>

                        <button mat-menu-item (click)="exportByGenderPdf('MALE')">
                            <mat-icon>male</mat-icon>
                            <span>Alle Herren</span>
                        </button>

                        <button mat-menu-item (click)="exportByGenderByCategoryPdf('MALE')">
                            <mat-icon>category</mat-icon>
                            <span>Alle Herren nach Kategorie</span>
                        </button>

                        <button mat-menu-item (click)="exportByGenderPdf('FEMALE')">
                            <mat-icon>female</mat-icon>
                            <span>Alle Damen</span>
                        </button>

                        <button mat-menu-item (click)="exportByGenderByCategoryPdf('FEMALE')">
                            <mat-icon>category</mat-icon>
                            <span>Alle Damen nach Kategorie</span>
                        </button>

                        <mat-divider></mat-divider>

                        <button mat-menu-item (click)="exportAllAgeGroupsPdf()">
                            <mat-icon>view_list</mat-icon>
                            <span>Nach Altersklassen aufgeteilt</span>
                        </button>

                        <button mat-menu-item (click)="exportAllAgeGroupsByCategoryPdf()">
                            <mat-icon>category</mat-icon>
                            <span>Nach Altersklassen aufgeteilt nach Kategorie</span>
                        </button>
                    </mat-menu>
                </div>

                @if ((selectedRaceId$ | async) === null) {
                    <p class="hint">Bitte ein Rennen auswählen, um dessen Teilnehmer anzuzeigen.</p>
                } @else {
                @if (loading$ | async) {
                    <div class="loading-container">
                        <mat-spinner></mat-spinner>
                    </div>
                }

                <div class="table-container">
                <table
                        mat-table
                        [dataSource]="dataSource"
                        [trackBy]="trackById"
                        matSort
                        class="participant-table"
                        [class.hidden]="loading$ | async"
                >
                    <!-- ID Column -->
                    <ng-container matColumnDef="id">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>
                        <td mat-cell *matCellDef="let participant">{{ participant.id }}</td>
                    </ng-container>

                    <!-- First Name Column -->
                    <ng-container matColumnDef="firstName">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Vorname</th>
                        <td mat-cell *matCellDef="let participant">
                            {{ participant.person?.firstName || "—" }}
                        </td>
                    </ng-container>

                    <!-- Last Name Column -->
                    <ng-container matColumnDef="lastName">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Nachname</th>
                        <td mat-cell *matCellDef="let participant">
                            {{ participant.person?.lastName || "—" }}
                        </td>
                    </ng-container>

                    <!-- Birth Date Column -->
                    <ng-container matColumnDef="birthDate">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>
                            Geburtsdatum
                        </th>
                        <td mat-cell *matCellDef="let participant">
                            {{ participant.person?.birthDate ? (participant.person.birthDate | date: "dd.MM.yyyy") : "—" }}
                        </td>
                    </ng-container>

                    <!-- Gender Column -->
                    <ng-container matColumnDef="gender">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>
                            Geschlecht
                        </th>
                        <td mat-cell *matCellDef="let participant">
                            {{ getGenderLabel(participant.person?.gender) }}
                        </td>
                    </ng-container>

                    <!-- Race Number Column -->
                    <ng-container matColumnDef="raceNumber">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>
                            Startnummer
                        </th>
                        <td mat-cell *matCellDef="let participant">
                            {{ participant.raceNumber }}
                        </td>
                    </ng-container>

                    <!-- Team Column -->
                    <ng-container matColumnDef="team">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Team</th>
                        <td mat-cell *matCellDef="let participant">
                            {{ participant.team?.name || "-" }}
                        </td>
                    </ng-container>

                    <!-- Category Column -->
                    <ng-container matColumnDef="category">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Kategorie</th>
                        <td mat-cell *matCellDef="let participant">
                            {{ participant.category?.name || "-" }}
                        </td>
                    </ng-container>

                     <!-- Age Group Column -->
                     <ng-container matColumnDef="ageGroup">
                         <th mat-header-cell *matHeaderCellDef mat-sort-header>Altersgruppe</th>
                         <td mat-cell *matCellDef="let participant">
                             {{ participant.ageGroup?.name || "-" }}
                         </td>
                     </ng-container>

                     <!-- Race Column -->
                     <ng-container matColumnDef="race">
                         <th mat-header-cell *matHeaderCellDef mat-sort-header>Rennen</th>
                         <td mat-cell *matCellDef="let participant">
                             {{ participant.race?.name || "-" }}
                         </td>
                     </ng-container>

                     <!-- Duration/Value Column -->
                     <ng-container matColumnDef="durationMs">
                         <th mat-header-cell *matHeaderCellDef mat-sort-header>Ergebnis</th>
                         <td mat-cell *matCellDef="let participant">
                             {{ formatResultValue(participant) }}
                         </td>
                     </ng-container>

                     <!-- Status Column -->
                     <ng-container matColumnDef="status">
                         <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>
                         <td mat-cell *matCellDef="let participant">
                             @if (participant.status && participant.status !== 'NONE') {
                                 <span class="status-badge" [class]="'status-' + participant.status"
                                       [matTooltip]="getStatusLabel(participant.status)">
                                     {{ participant.status }}
                                 </span>
                             } @else {
                                 -
                             }
                         </td>
                     </ng-container>

                     <!-- Measured At Column -->
                     <ng-container matColumnDef="measuredAt">
                         <th mat-header-cell *matHeaderCellDef mat-sort-header>Gemessen am</th>
                         <td mat-cell *matCellDef="let participant">
                             {{ participant.measuredAt ? (participant.measuredAt | date: "dd.MM.yyyy HH:mm:ss") : "-" }}
                         </td>
                     </ng-container>

                     <!-- Comment Column -->
                     <ng-container matColumnDef="comment">
                         <th mat-header-cell *matHeaderCellDef mat-sort-header>Kommentar</th>
                         <td mat-cell *matCellDef="let participant" class="comment-cell" [matTooltip]="participant.comment || ''">
                             {{ participant.comment || "-" }}
                         </td>
                     </ng-container>

                     <!-- Actions Column -->
                     <ng-container matColumnDef="actions">
                        <th mat-header-cell *matHeaderCellDef>Aktionen</th>
                        <td mat-cell *matCellDef="let participant">
                            <button
                                    mat-icon-button
                                    (click)="openEditDialog(participant)"
                                    matTooltip="Bearbeiten"
                            >
                                <mat-icon>edit</mat-icon>
                            </button>
                            <button
                                    mat-icon-button
                                    color="warn"
                                    (click)="deleteParticipant(participant)"
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
                <mat-paginator [pageSizeOptions]="[10, 25, 50, 100]" showFirstLastButtons></mat-paginator>

                <div class="count-info" [class.hidden]="loading$ | async">
                    Anzahl der Teilnehmer: {{ dataSource.data.length }}
                </div>
                }
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

          .header-actions {
            margin-top: 20px;
            margin-bottom: 20px;
            display: flex;
            gap: 10px;
          }

          .loading-container {
            display: flex;
            justify-content: center;
            padding: 40px;
          }

          .participant-table {
            width: 100%;
          }

          .hidden {
            display: none;
          }

          mat-card {
            margin: 20px;
          }

          th.mat-sort-header-sorted {
            color: black;
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

          .comment-cell {
            max-width: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .status-badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            color: white;
          }

          .status-DNS {
            background-color: #ff9800;
          }

          .status-DNF {
            background-color: #f57c00;
          }

          .status-DSQ {
            background-color: #f44336;
          }
        `,
    ],
})
export class ParticipantListComponent implements AfterViewInit, OnDestroy {
    private store = inject(Store);
    private dialog = inject(MatDialog);
    private snackBar = inject(MatSnackBar);
    private actions$ = inject(Actions);
    private destroy$ = new Subject<void>();

    participants$: Observable<Participant[]>;
    races$: Observable<Race[]>;
    selectedRaceId$: Observable<number | null>;
    loading$: Observable<boolean>;
    pdfExportLoading$: Observable<boolean>;
    importLoading$: Observable<boolean>;
    resultImportLoading$: Observable<boolean>;
    copyLoading$: Observable<boolean>;
    displayedColumns = [
        "id",
        "firstName",
        "lastName",
        "birthDate",
        "gender",
        "raceNumber",
        "team",
        "category",
        "ageGroup",
        "race",
        "durationMs",
        "status",
        "measuredAt",
        "comment",
        "actions",
    ];
    dataSource = new MatTableDataSource<Participant>([]);

    // Each 2s poll/reload replaces dataSource.data with freshly-deserialized objects, so the CDK
    // table's default identity-based diffing would otherwise tear down and rebuild every row on
    // every refresh instead of only the ones that actually changed.
    trackById = (_index: number, participant: Participant) => participant.id;

    // Optional, not required: the table (and its matSort) only renders once a race is
    // selected - see the @if in the template - so it may genuinely not exist yet, and is
    // destroyed/recreated (as a fresh MatSort instance) each time the selection is cleared
    // and set again.
    sort = viewChild(MatSort);
    paginator = viewChild(MatPaginator);

    constructor() {
        this.dataSource.sortingDataAccessor = (participant: Participant, columnId: string) => {
            switch (columnId) {
                case "firstName":
                    return participant.person?.firstName ?? "";
                case "lastName":
                    return participant.person?.lastName ?? "";
                case "birthDate":
                    return participant.person?.birthDate ?? "";
                case "gender":
                    return participant.person?.gender ?? "";
                case "durationMs": {
                    if (participant.durationMs === undefined || participant.durationMs === null) {
                        return "";
                    }
                    const penalty = participant.penalty ?? 0;
                    const isDesc = participant.race?.sortDirection === SortDirection.DESC;
                    const adjusted = isDesc ? participant.durationMs - penalty : participant.durationMs + penalty;
                    // Negate DESC (higher-is-better) races so ascending sort still means
                    // "best first" consistently with ASC races, matching RankingService.
                    return isDesc ? -adjusted : adjusted;
                }
                default:
                    return (participant as any)[columnId];
            }
        };

        this.participants$ = this.store.select(
            ParticipantSelectors.selectFilteredParticipants,
        );
        this.races$ = this.store.select(RaceSelectors.selectAllRaces);
        this.selectedRaceId$ = this.store.select(RaceSelectors.selectSelectedRaceId);
        this.loading$ = this.store.select(
            ParticipantSelectors.selectParticipantLoading,
        );
        this.pdfExportLoading$ = this.store.select(
            ParticipantSelectors.selectPdfExportLoading,
        );
        this.importLoading$ = this.store.select(
            ParticipantSelectors.selectImportLoading,
        );
        this.resultImportLoading$ = this.store.select(
            ParticipantSelectors.selectResultImportLoading,
        );
        this.copyLoading$ = this.store.select(
            ParticipantSelectors.selectCopyLoading,
        );

        this.actions$.pipe(
            ofType(ParticipantActions.createParticipantSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Teilnehmer erfolgreich erstellt", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(ParticipantActions.createParticipantFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Erstellen des Teilnehmers: ${error}`, "OK", {duration: 5000});
        });

        this.actions$.pipe(
            ofType(ParticipantActions.updateParticipantSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Teilnehmer erfolgreich aktualisiert", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(ParticipantActions.updateParticipantFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Aktualisieren des Teilnehmers: ${error}`, "OK", {duration: 5000});
        });

        this.actions$.pipe(
            ofType(ParticipantActions.deleteParticipantSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Teilnehmer erfolgreich gelöscht", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(ParticipantActions.deleteParticipantFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Löschen des Teilnehmers: ${error}`, "OK", {duration: 5000});
        });

        this.actions$.pipe(
            ofType(ParticipantActions.deleteParticipantsByRaceIdSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Alle Teilnehmer des Rennens erfolgreich gelöscht", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(ParticipantActions.deleteParticipantsByRaceIdFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Löschen der Teilnehmer: ${error}`, "OK", {duration: 5000});
        });

        this.actions$.pipe(
            ofType(ParticipantActions.assignRaceNumbersSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Startnummern erfolgreich vergeben", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(ParticipantActions.assignRaceNumbersFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Vergeben der Startnummern: ${error}`, "OK", {duration: 5000});
        });

        // Import/Copy/PDF-Export failures previously had no feedback at all: the loading spinner
        // just stopped with nothing telling the operator the roster wasn't actually there.
        this.actions$.pipe(
            ofType(ParticipantActions.importParticipantsCsvSuccess, ParticipantActions.importParticipantsMappedSuccess),
            takeUntil(this.destroy$),
        ).subscribe(({result}) => {
            const message = result.skippedCount > 0
                ? `Import abgeschlossen: ${result.importedCount} importiert, ${result.skippedCount} übersprungen`
                : `Import abgeschlossen: ${result.importedCount} importiert`;
            this.snackBar.open(message, "OK", {duration: result.skippedCount > 0 ? 8000 : 3000});
        });
        this.actions$.pipe(
            ofType(ParticipantActions.importParticipantsCsvFailure, ParticipantActions.importParticipantsMappedFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Importieren: ${error}`, "OK", {duration: 8000, panelClass: "error-snackbar"});
        });

        this.actions$.pipe(
            ofType(ParticipantActions.importParticipantResultsMappedSuccess),
            takeUntil(this.destroy$),
        ).subscribe(({result}) => {
            const message = result.skippedCount > 0
                ? `Ergebnis-Import abgeschlossen: ${result.updatedCount} aktualisiert, ${result.skippedCount} übersprungen`
                : `Ergebnis-Import abgeschlossen: ${result.updatedCount} aktualisiert`;
            this.snackBar.open(message, "OK", {duration: result.skippedCount > 0 ? 8000 : 3000});
        });
        this.actions$.pipe(
            ofType(ParticipantActions.importParticipantResultsMappedFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Ergebnis-Import: ${error}`, "OK", {duration: 8000, panelClass: "error-snackbar"});
        });

        this.actions$.pipe(
            ofType(ParticipantActions.copyParticipantsSuccess),
            takeUntil(this.destroy$),
        ).subscribe(({result}) => {
            const message = result.skippedCount > 0
                ? `Kopieren abgeschlossen: ${result.copiedCount} kopiert, ${result.skippedCount} übersprungen`
                : `Kopieren abgeschlossen: ${result.copiedCount} kopiert`;
            this.snackBar.open(message, "OK", {duration: result.skippedCount > 0 ? 8000 : 3000});
        });
        this.actions$.pipe(
            ofType(ParticipantActions.copyParticipantsFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Kopieren: ${error}`, "OK", {duration: 8000, panelClass: "error-snackbar"});
        });

        // PDF export success is already visible to the operator via the browser's own download -
        // only the failure case (a stopped spinner with nothing to show for it) needs a snackbar.
        this.actions$.pipe(
            ofType(
                ParticipantActions.exportAllPdfFailure,
                ParticipantActions.exportByGenderPdfFailure,
                ParticipantActions.exportAllAgeGroupsPdfFailure,
                ParticipantActions.exportAllByCategoryPdfFailure,
                ParticipantActions.exportByGenderByCategoryPdfFailure,
                ParticipantActions.exportAllAgeGroupsByCategoryPdfFailure,
                ParticipantActions.exportStartListPdfFailure,
            ),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim PDF-Export: ${error}`, "OK", {duration: 8000, panelClass: "error-snackbar"});
        });

        // Setup sort when signal changes - re-attaches whenever a *new* MatSort instance
        // appears (initial render, or the table being recreated after the race filter is
        // cleared and set again), not just once, since sortInstance !== a stale destroyed
        // instance already assigned to dataSource.sort.
        effect(() => {
            const sortInstance = this.sort();
            if (sortInstance && this.dataSource.sort !== sortInstance) {
                setTimeout(() => {
                    this.dataSource.sort = sortInstance;
                }, 100);
            }
        });

        // Same re-attach logic as sort above: the table (and its MatPaginator) only exists once a
        // race is selected, and is destroyed/recreated each time the selection is cleared and set again.
        effect(() => {
            const paginatorInstance = this.paginator();
            if (paginatorInstance && this.dataSource.paginator !== paginatorInstance) {
                setTimeout(() => {
                    this.dataSource.paginator = paginatorInstance;
                }, 100);
            }
        });
    }

    ngAfterViewInit(): void {
        this.store.dispatch(ParticipantActions.loadParticipants());
        this.store.dispatch(RaceActions.loadRaces());
        this.participants$
            .pipe(takeUntil(this.destroy$))
            .subscribe((participants) => {
                this.dataSource.data = participants;
            });

        this.store.select(ParticipantSelectors.selectImportResult)
            .pipe(takeUntil(this.destroy$))
            .subscribe((result) => {
                if (!result) {
                    return;
                }
                this.snackBar.open(
                    `Import abgeschlossen: ${result.importedCount} importiert, ${result.skippedCount} übersprungen`,
                    'OK',
                    {duration: 5000},
                );
                const errors = result.errors ?? [];
                if (errors.length > 0) {
                    const details = errors
                        .map((e) => `Zeile ${e.lineNumber}: ${e.reason}`)
                        .join('\n');
                    alert(`Folgende Zeilen wurden übersprungen:\n\n${details}`);
                }
            });

        this.store.select(ParticipantSelectors.selectCopyResult)
            .pipe(takeUntil(this.destroy$))
            .subscribe((result) => {
                if (!result) {
                    return;
                }
                this.snackBar.open(
                    `Kopieren abgeschlossen: ${result.copiedCount} kopiert, ${result.skippedCount} übersprungen (bereits vorhanden)`,
                    'OK',
                    {duration: 5000},
                );
                this.store.dispatch(ParticipantActions.loadParticipants());
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    getGenderLabel(gender: Gender | null | undefined): string {
        if (!gender) {
            return "—";
        }
        return GenderLabels[gender] || gender;
    }

    private static readonly STATUS_LABELS: Record<DisqualificationStatus, string> = {
        NONE: "Gewertet",
        DNS: "DNS – nicht gestartet",
        DNF: "DNF – nicht beendet",
        DSQ: "DSQ – disqualifiziert",
    };

    getStatusLabel(status: DisqualificationStatus): string {
        return ParticipantListComponent.STATUS_LABELS[status] ?? status;
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

    formatResultValue(participant: Participant): string {
        if (participant.durationMs === undefined || participant.durationMs === null) {
            return "-";
        }
        const hasPenalty = participant.penalty !== undefined && participant.penalty !== null && participant.penalty !== 0;
        if (participant.race?.resultUnit === ResultUnit.POINTS) {
            const label = participant.race?.resultUnitLabel ? ` ${participant.race.resultUnitLabel}` : "";
            const value = `${(participant.durationMs / 100).toFixed(2)}${label}`;
            if (hasPenalty) {
                return `${value} (+${(participant.penalty! / 100).toFixed(2)}${label})`;
            }
            return value;
        }
        const value = this.formatDuration(participant.durationMs);
        if (hasPenalty) {
            return `${value} (+${this.formatDuration(participant.penalty!)})`;
        }
        return value;
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

    onRaceFilterChange(raceId: number | null): void {
        this.store.dispatch(RaceActions.selectRace({id: raceId}));
    }

    openCreateDialog(): void {
        const dialogRef = this.dialog.open(ParticipantDialogComponent, {
            width: "500px",
        });

        dialogRef
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(
                        ParticipantActions.createParticipant({participant: result}),
                    );
                }
            });
    }

    openEditDialog(participant: Participant): void {
        const dialogRef = this.dialog.open(ParticipantDialogComponent, {
            width: "500px",
            data: participant,
        });

        dialogRef.afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(
                        ParticipantActions.updateParticipant({
                            id: participant.id,
                            participant: result,
                        }),
                    );
                }
            });
    }

    deleteParticipant(participant: Participant): void {
        const name = participant.person
            ? `${participant.person.firstName} ${participant.person.lastName}`
            : `#${participant.id}`;
        if (
            confirm(
                `Möchten Sie den Teilnehmer "${name}" wirklich löschen?`,
            )
        ) {
            this.store.dispatch(
                ParticipantActions.deleteParticipant({id: participant.id}),
            );
        }
    }

    deleteParticipantsByRace(): void {
        this.selectedRaceId$
            .pipe(take(1))
            .subscribe(raceId => {
                if (raceId === null) return;

                const raceName = this.dataSource.data[0]?.race?.name || 'diesem Rennen';
                if (
                    confirm(
                        `Möchten Sie wirklich ALLE Teilnehmer von "${raceName}" löschen? Diese Aktion kann nicht rückgängig gemacht werden!`,
                    )
                ) {
                    this.store.dispatch(
                        ParticipantActions.deleteParticipantsByRaceId({raceId}),
                    );
                }
            });
    }

async openImportDialog(): Promise<void> {
        const raceId = await firstValueFrom(this.selectedRaceId$);
        if (!raceId) {
            this.snackBar.open('Bitte wählen Sie zuerst ein Rennen aus!', 'Schließen', {
                duration: 5000,
                panelClass: ['error-snackbar'],
            });
            return;
        }

        const dialogRef = this.dialog.open(ParticipantImportMappingDialogComponent, {
            width: '900px',
        });

        dialogRef
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((result: ParticipantImportMappingDialogResult | undefined) => {
                if (result) {
                    this.store.dispatch(ParticipantActions.importParticipantsMapped({
                        raceId,
                        file: result.file,
                        format: result.format,
                        delimiter: result.delimiter,
                        mapping: result.mapping,
                    }));
                    this.snackBar.open('Import gestartet...', 'OK', {duration: 2000});
                }
            });
    }

    async openResultImportDialog(): Promise<void> {
        const raceId = await firstValueFrom(this.selectedRaceId$);
        if (!raceId) {
            this.snackBar.open('Bitte wählen Sie zuerst ein Rennen aus!', 'Schließen', {
                duration: 5000,
                panelClass: ['error-snackbar'],
            });
            return;
        }

        const dialogRef = this.dialog.open(ParticipantResultImportMappingDialogComponent, {
            width: '900px',
        });

        dialogRef
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((result: ParticipantResultImportMappingDialogResult | undefined) => {
                if (result) {
                    this.store.dispatch(ParticipantActions.importParticipantResultsMapped({
                        raceId,
                        file: result.file,
                        timeFormat: result.timeFormat,
                        delimiter: result.delimiter,
                        mapping: result.mapping,
                    }));
                    this.snackBar.open('Import gestartet...', 'OK', {duration: 2000});
                }
            });
    }

    async exportResults(): Promise<void> {
        const raceId = await firstValueFrom(this.selectedRaceId$);
        if (!raceId) {
            this.snackBar.open('Bitte wählen Sie zuerst ein Rennen aus!', 'Schließen', {
                duration: 5000,
                panelClass: ['error-snackbar'],
            });
            return;
        }
        const races = await firstValueFrom(this.races$);
        const race = races.find(r => r.id === raceId);
        this.store.dispatch(ParticipantActions.exportParticipantResultsCsv({
            raceId,
            filename: `ergebnisse_${race?.name ?? raceId}.csv`,
        }));
    }

    async openCopyDialog(): Promise<void> {
        const sourceRaceId = await firstValueFrom(this.selectedRaceId$);
        if (!sourceRaceId) {
            this.snackBar.open('Bitte wählen Sie zuerst ein Rennen aus!', 'Schließen', {
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        const races = await firstValueFrom(this.races$);

        const dialogRef = this.dialog.open(ParticipantCopyDialogComponent, {
            width: '450px',
            data: {sourceRaceId, races},
        });

        dialogRef
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((result: ParticipantCopyDialogResult | undefined) => {
                if (result && result.targetRaceIds.length > 0) {
                    this.store.dispatch(ParticipantActions.copyParticipants({
                        request: {
                            sourceRaceId,
                            targetRaceIds: result.targetRaceIds,
                            carryStartNumber: result.carryStartNumber,
                        },
                    }));
                }
            });
    }

    refreshData(): void {
        this.store.dispatch(ParticipantActions.loadParticipants());
        this.snackBar.open("Daten werden aktualisiert...", "OK", {
            duration: 2000,
        });
    }

    async assignRaceNumbers(): Promise<void> {
        const raceId = await firstValueFrom(this.selectedRaceId$);
        if (!raceId) {
            this.snackBar.open('Bitte wählen Sie zuerst ein Rennen aus!', 'Schließen', {
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }

        if (
            confirm(
                'Möchten Sie die Startnummern für dieses Rennen wirklich neu zuweisen? Bereits vergebene Startnummern werden überschrieben.',
            )
        ) {
            this.store.dispatch(ParticipantActions.assignRaceNumbers({raceId}));
            this.snackBar.open('Startnummern werden zugewiesen...', 'OK', {
                duration: 2000,
            });
        }
    }

    async exportStartListPdf(): Promise<void> {
        const raceId = await firstValueFrom(this.selectedRaceId$);
        if (!raceId) {
            this.snackBar.open('Bitte wählen Sie zuerst ein Rennen aus!', 'Schließen', {
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        this.store.dispatch(ParticipantActions.exportStartListPdf({raceId}));
        this.snackBar.open('PDF Export gestartet: Startliste', 'OK', {
            duration: 2000,
        });
    }

    // PDF Export Methods using ngrx
    async exportAllPdf(): Promise<void> {
        const selectedRaceId = await firstValueFrom(this.selectedRaceId$);
        if (!selectedRaceId) {
            this.snackBar.open('Bitte wählen Sie zuerst ein Rennen aus!', 'Schließen', {
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        this.store.dispatch(ParticipantActions.exportAllPdf({ raceId: selectedRaceId }));
        this.snackBar.open('PDF Export gestartet: Gesamtwertung', 'OK', {
            duration: 2000,
        });
    }

    async exportByGenderPdf(gender: string): Promise<void> {
        const selectedRaceId = await firstValueFrom(this.selectedRaceId$);
        if (!selectedRaceId) {
            this.snackBar.open('Bitte wählen Sie zuerst ein Rennen aus!', 'Schließen', {
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        this.store.dispatch(ParticipantActions.exportByGenderPdf({ gender, raceId: selectedRaceId }));
        const genderLabel = gender === 'MALE' ? 'Herren' : 'Damen';
        this.snackBar.open(`PDF Export gestartet: Alle ${genderLabel}`, 'OK', {
            duration: 2000,
        });
    }

    async exportAllAgeGroupsPdf(): Promise<void> {
        const selectedRaceId = await firstValueFrom(this.selectedRaceId$);
        if (!selectedRaceId) {
            this.snackBar.open('Bitte wählen Sie zuerst ein Rennen aus!', 'Schließen', {
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        this.store.dispatch(ParticipantActions.exportAllAgeGroupsPdf({ raceId: selectedRaceId }));
        this.snackBar.open('PDF Export gestartet: Nach Altersklassen', 'OK', {
            duration: 2000,
        });
    }

    async exportAllByCategoryPdf(): Promise<void> {
        const selectedRaceId = await firstValueFrom(this.selectedRaceId$);
        if (!selectedRaceId) {
            this.snackBar.open('Bitte wählen Sie zuerst ein Rennen aus!', 'Schließen', {
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        this.store.dispatch(ParticipantActions.exportAllByCategoryPdf({ raceId: selectedRaceId }));
        this.snackBar.open('PDF Export gestartet: Gesamtwertung nach Kategorie', 'OK', {
            duration: 2000,
        });
    }

    async exportByGenderByCategoryPdf(gender: string): Promise<void> {
        const selectedRaceId = await firstValueFrom(this.selectedRaceId$);
        if (!selectedRaceId) {
            this.snackBar.open('Bitte wählen Sie zuerst ein Rennen aus!', 'Schließen', {
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        this.store.dispatch(ParticipantActions.exportByGenderByCategoryPdf({ gender, raceId: selectedRaceId }));
        const genderLabel = gender === 'MALE' ? 'Herren' : 'Damen';
        this.snackBar.open(`PDF Export gestartet: Alle ${genderLabel} nach Kategorie`, 'OK', {
            duration: 2000,
        });
    }

    async exportAllAgeGroupsByCategoryPdf(): Promise<void> {
        const selectedRaceId = await firstValueFrom(this.selectedRaceId$);
        if (!selectedRaceId) {
            this.snackBar.open('Bitte wählen Sie zuerst ein Rennen aus!', 'Schließen', {
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        this.store.dispatch(ParticipantActions.exportAllAgeGroupsByCategoryPdf({ raceId: selectedRaceId }));
        this.snackBar.open('PDF Export gestartet: Nach Altersklassen und Kategorie', 'OK', {
            duration: 2000,
        });
    }
}
