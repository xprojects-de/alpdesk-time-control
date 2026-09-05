import {
    Component,
    AfterViewInit,
    OnDestroy,
    inject,
    ChangeDetectionStrategy,
} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Store} from "@ngrx/store";
import {Observable, Subject} from "rxjs";
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
import {take, takeUntil} from "rxjs/operators";
import {Race} from "../../models/race.model";
import {GaudiMode, GaudiModeType, GaudiModeTypeLabels} from "../../models/gaudi-mode.model";
import * as RaceActions from "../../store/race/race.actions";
import * as RaceSelectors from "../../store/race/race.selectors";
import * as GaudiModeActions from "../../store/gaudi-mode/gaudi-mode.actions";
import * as GaudiModeSelectors from "../../store/gaudi-mode/gaudi-mode.selectors";
import {GaudiModeDialogComponent} from "./gaudi-mode-dialog.component";
import {GaudiModeDetailComponent} from "./gaudi-mode-detail.component";

@Component({
    selector: "app-gaudi-modus",
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
        MatSelectModule,
        MatFormFieldModule,
        GaudiModeDetailComponent,
    ],
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>Gaudi-Modus</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <div class="filter-section">
                    <mat-form-field appearance="outline">
                        <mat-label>Nach Rennen filtern</mat-label>
                        <mat-select [value]="selectedRaceId$ | async"
                                    (selectionChange)="onRaceFilterChange($event.value)">
                            <mat-option [value]="null">Alle Rennen</mat-option>
                            @for (race of races$ | async; track race.id) {
                                <mat-option [value]="race.id">{{ race.name }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>

                    <button mat-raised-button color="primary" (click)="openCreateDialog()">
                        <mat-icon>add</mat-icon>
                        Neuer Gaudi-Modus
                    </button>
                </div>

                @if (loading$ | async) {
                    <div class="loading-container">
                        <mat-spinner></mat-spinner>
                    </div>
                }

                <table mat-table [dataSource]="(filteredGaudiModes$ | async) || []" class="gaudi-mode-table">
                    <ng-container matColumnDef="name">
                        <th mat-header-cell *matHeaderCellDef>Name</th>
                        <td mat-cell *matCellDef="let gm">{{ gm.name }}</td>
                    </ng-container>

                    <ng-container matColumnDef="type">
                        <th mat-header-cell *matHeaderCellDef>Modus</th>
                        <td mat-cell *matCellDef="let gm">{{ getTypeLabel(gm.type) }}</td>
                    </ng-container>

                    <ng-container matColumnDef="teamSize">
                        <th mat-header-cell *matHeaderCellDef>Teamgröße</th>
                        <td mat-cell *matCellDef="let gm">{{ gm.teamSize || "-" }}</td>
                    </ng-container>

                    <ng-container matColumnDef="actions">
                        <th mat-header-cell *matHeaderCellDef>Aktionen</th>
                        <td mat-cell *matCellDef="let gm">
                            @if ((selectedGaudiModeId$ | async) === gm.id) {
                                <button mat-raised-button (click)="closeDetail()" matTooltip="Ausblenden">
                                    <mat-icon>visibility_off</mat-icon>
                                    Ausblenden
                                </button>
                            } @else {
                                <button mat-raised-button (click)="selectGaudiMode(gm)" matTooltip="Anzeigen">
                                    <mat-icon>visibility</mat-icon>
                                    Anzeigen
                                </button>
                            }
                            <button mat-icon-button color="warn" (click)="deleteGaudiMode(gm)" matTooltip="Löschen">
                                <mat-icon>delete</mat-icon>
                            </button>
                        </td>
                    </ng-container>

                    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                    <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
                </table>

                @if (selectedGaudiMode$ | async; as selected) {
                    <app-gaudi-mode-detail [gaudiMode]="selected" (closed)="closeDetail()"/>
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

          .loading-container {
            display: flex;
            justify-content: center;
            padding: 40px;
          }

          .gaudi-mode-table {
            width: 100%;
          }

          mat-card {
            margin: 20px;
          }

          mat-form-field {
            min-width: 250px;
          }
        `,
    ],
})
export class GaudiModusComponent implements AfterViewInit, OnDestroy {
    private store = inject(Store);
    private dialog = inject(MatDialog);
    private snackBar = inject(MatSnackBar);
    private destroy$ = new Subject<void>();

    races$: Observable<Race[]>;
    selectedRaceId$: Observable<number | null>;
    filteredGaudiModes$: Observable<GaudiMode[]>;
    selectedGaudiMode$: Observable<GaudiMode | null>;
    selectedGaudiModeId$: Observable<number | null>;
    loading$: Observable<boolean>;

    displayedColumns = ["name", "type", "teamSize", "actions"];

    constructor() {
        this.races$ = this.store.select(RaceSelectors.selectAllRaces);
        this.selectedRaceId$ = this.store.select(RaceSelectors.selectSelectedRaceId);
        this.loading$ = this.store.select(GaudiModeSelectors.selectGaudiModeLoading);
        this.selectedGaudiMode$ = this.store.select(GaudiModeSelectors.selectSelectedGaudiMode);
        this.selectedGaudiModeId$ = this.store.select(GaudiModeSelectors.selectSelectedGaudiModeId);
        this.filteredGaudiModes$ = this.store.select(
            GaudiModeSelectors.selectGaudiModesByRace(null)
        );

        this.selectedRaceId$
            .pipe(takeUntil(this.destroy$))
            .subscribe(raceId => {
                this.filteredGaudiModes$ = this.store.select(
                    GaudiModeSelectors.selectGaudiModesByRace(raceId)
                );
            });
    }

    ngAfterViewInit(): void {
        this.store.dispatch(RaceActions.loadRaces());
        this.store.dispatch(GaudiModeActions.loadGaudiModes({}));
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    getTypeLabel(type: GaudiModeType): string {
        return GaudiModeTypeLabels[type] || type;
    }

    onRaceFilterChange(raceId: number | null): void {
        this.store.dispatch(RaceActions.selectRace({id: raceId}));
    }

    openCreateDialog(): void {
        this.selectedRaceId$.pipe(take(1)).subscribe(raceId => {
            const dialogRef = this.dialog.open(GaudiModeDialogComponent, {
                width: "500px",
                data: {raceId},
            });

            dialogRef
                .afterClosed()
                .pipe(takeUntil(this.destroy$))
                .subscribe((result) => {
                    if (result) {
                        this.store.dispatch(GaudiModeActions.createGaudiMode({gaudiMode: result}));
                        this.snackBar.open("Gaudi-Modus erfolgreich erstellt", "OK", {duration: 3000});
                    }
                });
        });
    }

    selectGaudiMode(gaudiMode: GaudiMode): void {
        this.store.dispatch(GaudiModeActions.selectGaudiMode({id: gaudiMode.id}));
    }

    closeDetail(): void {
        this.store.dispatch(GaudiModeActions.selectGaudiMode({id: null}));
    }

    deleteGaudiMode(gaudiMode: GaudiMode): void {
        if (confirm(`Möchten Sie den Gaudi-Modus "${gaudiMode.name}" wirklich löschen?`)) {
            this.store.dispatch(GaudiModeActions.deleteGaudiMode({id: gaudiMode.id}));
            this.snackBar.open("Gaudi-Modus erfolgreich gelöscht", "OK", {duration: 3000});
        }
    }
}
