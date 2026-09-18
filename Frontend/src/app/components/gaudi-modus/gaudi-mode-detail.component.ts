import {
    Component,
    OnDestroy,
    inject,
    input,
    output,
    effect,
    ChangeDetectionStrategy,
} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Store} from "@ngrx/store";
import {Actions, ofType} from "@ngrx/effects";
import {Observable, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {
    GaudiLosPairing,
    GaudiMode,
    GaudiModeType,
    GaudiNotRankedEntry,
    GaudiRankingEntry,
    GaudiRankingLeg,
} from "../../models/gaudi-mode.model";
import {Race, ResultUnit, SortDirection} from "../../models/race.model";
import * as GaudiModeActions from "../../store/gaudi-mode/gaudi-mode.actions";
import * as GaudiModeSelectors from "../../store/gaudi-mode/gaudi-mode.selectors";
import {selectAllRaces} from "../../store/race/race.selectors";

@Component({
    selector: "app-gaudi-mode-detail",
    standalone: true,
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        MatMenuModule,
        MatDividerModule,
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatSnackBarModule,
    ],
    template: `
        <mat-card class="detail-card">
            <mat-card-header class="header-row">
                <div>
                    <mat-card-title>{{ gaudiMode().name }}</mat-card-title>
                    <mat-card-subtitle>
                        {{ typeLabel() }}
                        @if (gaudiMode().type === gaudiModeType.TEAM) {
                            &ndash; {{ gaudiMode().teamSize }} Teilnehmer pro Team
                        }
                        @if (isCombinationType()) {
                            &ndash; {{ gaudiMode().races.length }} Rennen
                        }
                    </mat-card-subtitle>
                </div>
                <button mat-icon-button (click)="close()" matTooltip="Schließen">
                    <mat-icon>close</mat-icon>
                </button>
            </mat-card-header>
            <mat-card-content>

                @if (gaudiMode().type === gaudiModeType.LOS) {
                    <div class="section-actions">
                        <button mat-raised-button color="primary" (click)="draw()">
                            <mat-icon>casino</mat-icon>
                            {{ (pairing$ | async)?.length ? 'Neu auslosen' : 'Auslosen' }}
                        </button>
                    </div>

                    @if ((pairing$ | async)?.length) {
                        <div class="table-container">
                        <table mat-table [dataSource]="(pairing$ | async) || []" [trackBy]="trackByPairingId" class="detail-table">
                            <ng-container matColumnDef="participant1">
                                <th mat-header-cell *matHeaderCellDef>Teilnehmer 1</th>
                                <td mat-cell *matCellDef="let p">{{ p.participant1Name }}</td>
                            </ng-container>
                            <ng-container matColumnDef="participant2">
                                <th mat-header-cell *matHeaderCellDef>Teilnehmer 2</th>
                                <td mat-cell *matCellDef="let p">{{ p.participant2Name || '(Einzel)' }}</td>
                            </ng-container>
                            <tr mat-header-row *matHeaderRowDef="pairingColumns"></tr>
                            <tr mat-row *matRowDef="let row; columns: pairingColumns"></tr>
                        </table>
                        </div>
                    } @else {
                        <p class="hint">Noch keine Zulosung vorhanden.</p>
                    }
                }

                <div class="section-actions">
                    <button mat-raised-button (click)="loadRanking()">
                        <mat-icon>leaderboard</mat-icon>
                        Wertung anzeigen
                    </button>
                    @if (gaudiMode().type === gaudiModeType.POINTS_COMBINATION) {
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
                            <button mat-menu-item (click)="exportPdf()">
                                <mat-icon>leaderboard</mat-icon>
                                <span>Gesamtwertung</span>
                            </button>

                            <mat-divider></mat-divider>

                            <button mat-menu-item (click)="exportByGenderPdf('FEMALE')">
                                <mat-icon>female</mat-icon>
                                <span>Alle Damen</span>
                            </button>

                            <button mat-menu-item (click)="exportByGenderPdf('MALE')">
                                <mat-icon>male</mat-icon>
                                <span>Alle Herren</span>
                            </button>

                            <mat-divider></mat-divider>

                            <button mat-menu-item (click)="exportAllAgeGroupsPdf()">
                                <mat-icon>view_list</mat-icon>
                                <span>Nach Altersklassen aufgeteilt</span>
                            </button>
                        </mat-menu>
                    } @else {
                        <button
                                mat-raised-button
                                color="accent"
                                (click)="exportPdf()"
                                [disabled]="pdfExportLoading$ | async"
                        >
                            @if (pdfExportLoading$ | async) {
                                <mat-spinner diameter="20" style="display: inline-block; margin-right: 8px;"></mat-spinner>
                            } @else {
                                <mat-icon>picture_as_pdf</mat-icon>
                            }
                            PDF Export
                        </button>
                    }
                </div>

                @if ((ranking$ | async)?.length) {
                    <div class="table-container">
                    @if (isCombinationType()) {
                        <table mat-table [dataSource]="(ranking$ | async) || []" [trackBy]="trackByRankingEntry" class="detail-table">
                            <ng-container matColumnDef="place">
                                <th mat-header-cell *matHeaderCellDef>Platz</th>
                                <td mat-cell *matCellDef="let r">{{ r.place }}</td>
                            </ng-container>
                            <ng-container matColumnDef="label">
                                <th mat-header-cell *matHeaderCellDef>Name</th>
                                <td mat-cell *matCellDef="let r">{{ r.label }}</td>
                            </ng-container>
                            @for (leg of legColumns; track leg.raceId) {
                                <ng-container [matColumnDef]="'leg_' + leg.raceId + '_value'">
                                    <th mat-header-cell *matHeaderCellDef>{{ leg.raceName }}</th>
                                    <td mat-cell *matCellDef="let r" [matTooltip]="legValueTooltip(r, leg.raceId)">{{ legValueDisplay(r, leg.raceId) }}</td>
                                </ng-container>
                                @if (gaudiMode().type === gaudiModeType.POINTS_COMBINATION) {
                                    <ng-container [matColumnDef]="'leg_' + leg.raceId + '_place'">
                                        <th mat-header-cell *matHeaderCellDef>{{ leg.raceName }} Platz</th>
                                        <td mat-cell *matCellDef="let r">{{ legPlaceDisplay(r, leg.raceId) }}</td>
                                    </ng-container>
                                    <ng-container [matColumnDef]="'leg_' + leg.raceId + '_points'">
                                        <th mat-header-cell *matHeaderCellDef>{{ leg.raceName }} Pkt.</th>
                                        <td mat-cell *matCellDef="let r">{{ legPointsDisplay(r, leg.raceId) }}</td>
                                    </ng-container>
                                }
                            }
                            <ng-container matColumnDef="total">
                                <th mat-header-cell *matHeaderCellDef>Gesamt</th>
                                <td mat-cell *matCellDef="let r">{{ totalDisplay(r) }}</td>
                            </ng-container>
                            <tr mat-header-row *matHeaderRowDef="combinationColumns"></tr>
                            <tr mat-row *matRowDef="let row; columns: combinationColumns"></tr>
                        </table>
                    } @else {
                        <table mat-table [dataSource]="(ranking$ | async) || []" [trackBy]="trackByRankingEntry" class="detail-table">
                            <ng-container matColumnDef="place">
                                <th mat-header-cell *matHeaderCellDef>Platz</th>
                                <td mat-cell *matCellDef="let r">{{ r.place }}</td>
                            </ng-container>
                            <ng-container matColumnDef="label">
                                <th mat-header-cell *matHeaderCellDef>
                                    {{ gaudiMode().type === gaudiModeType.LOS ? 'Paarung' : 'Mannschaft' }}
                                </th>
                                <td mat-cell *matCellDef="let r">{{ r.label }}</td>
                            </ng-container>
                            <ng-container matColumnDef="time1Ms">
                                <th mat-header-cell *matHeaderCellDef>Wert 1</th>
                                <td mat-cell *matCellDef="let r">{{ singleRaceValueDisplay(r.time1Ms) }}</td>
                            </ng-container>
                            <ng-container matColumnDef="time2Ms">
                                <th mat-header-cell *matHeaderCellDef>Wert 2</th>
                                <td mat-cell *matCellDef="let r">{{ singleRaceValueDisplay(r.time2Ms) }}</td>
                            </ng-container>
                            <ng-container matColumnDef="valueMs">
                                <th mat-header-cell *matHeaderCellDef>
                                    {{ gaudiMode().type === gaudiModeType.LOS ? 'Ø-Wert Paar' : 'Gesamtwert' }}
                                </th>
                                <td mat-cell *matCellDef="let r">{{ singleRaceValueDisplay(r.valueMs) }}</td>
                            </ng-container>
                            <ng-container matColumnDef="referenceMs">
                                <th mat-header-cell *matHeaderCellDef>Ø-Wert Gesamt</th>
                                <td mat-cell *matCellDef="let r">{{ singleRaceValueDisplay(r.referenceMs) }}</td>
                            </ng-container>
                            <ng-container matColumnDef="diffMs">
                                <th mat-header-cell *matHeaderCellDef>Abweichung</th>
                                <td mat-cell *matCellDef="let r">{{ singleRaceValueDisplay(r.diffMs) }}</td>
                            </ng-container>
                            @if (gaudiMode().type === gaudiModeType.TEAM) {
                                <ng-container matColumnDef="members">
                                    <th mat-header-cell *matHeaderCellDef>Mitglieder</th>
                                    <td mat-cell *matCellDef="let r">{{ memberSummary(r) }}</td>
                                </ng-container>
                            }
                            <tr mat-header-row *matHeaderRowDef="rankingColumns"></tr>
                            <tr mat-row *matRowDef="let row; columns: rankingColumns"></tr>
                        </table>
                    }
                    </div>
                } @else {
                    <p class="hint">Noch keine Wertung berechnet.</p>
                }

                @if ((notRanked$ | async)?.length) {
                    <h3 class="not-ranked-title">Nicht gewertet</h3>
                    <div class="table-container">
                        <table mat-table [dataSource]="(notRanked$ | async) || []" class="detail-table">
                            <ng-container matColumnDef="name">
                                <th mat-header-cell *matHeaderCellDef>
                                    {{ gaudiMode().type === gaudiModeType.LOS ? 'Paarung' : 'Name' }}
                                </th>
                                <td mat-cell *matCellDef="let e">{{ notRankedName(e) }}</td>
                            </ng-container>
                            <ng-container matColumnDef="team">
                                <th mat-header-cell *matHeaderCellDef>Team</th>
                                <td mat-cell *matCellDef="let e">{{ e.team || '-' }}</td>
                            </ng-container>
                            <ng-container matColumnDef="status">
                                <th mat-header-cell *matHeaderCellDef>Status</th>
                                <td mat-cell *matCellDef="let e">{{ e.status }}</td>
                            </ng-container>
                            <tr mat-header-row *matHeaderRowDef="notRankedColumns"></tr>
                            <tr mat-row *matRowDef="let row; columns: notRankedColumns"></tr>
                        </table>
                    </div>
                }
            </mat-card-content>
        </mat-card>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
          .detail-card {
            margin-top: 20px;
          }

          .header-row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            width: 100%;
          }

          .section-actions {
            display: flex;
            gap: 10px;
            margin: 16px 0;
          }

          .detail-table {
            width: 100%;
            margin-bottom: 16px;
          }

          .not-ranked-title {
            margin: 8px 0;
          }

          .hint {
            color: rgba(0, 0, 0, 0.6);
            font-style: italic;
          }
        `,
    ],
})
export class GaudiModeDetailComponent implements OnDestroy {
    private store = inject(Store);
    private snackBar = inject(MatSnackBar);
    private actions$ = inject(Actions);
    private destroy$ = new Subject<void>();

    gaudiMode = input.required<GaudiMode>();
    closed = output<void>();

    gaudiModeType = GaudiModeType;
    pairingColumns = ["participant1", "participant2"];
    rankingColumns: string[] = [];
    combinationColumns: string[] = [];
    legColumns: { raceId: number; raceName: string }[] = [];

    pairing$: Observable<GaudiLosPairing[]> = this.store.select(GaudiModeSelectors.selectPairing);
    ranking$: Observable<GaudiRankingEntry[]> = this.store.select(GaudiModeSelectors.selectRanking);
    notRanked$: Observable<GaudiNotRankedEntry[]> = this.store.select(GaudiModeSelectors.selectNotRanked);
    notRankedColumns = ["name", "team", "status"];

    trackByPairingId = (_index: number, pairing: GaudiLosPairing) => pairing.id;

    // GaudiRankingEntry has no stable unique id: personId is only ever populated for
    // POINTS_COMBINATION (TIME_COMBINATION/LOS/TEAM always send it as null - see the respective
    // backend calculators). Without it, place+label is NOT a safe fallback key on its own: place
    // is not unique under a tie (RankingService.assignStandardPlaces), and label is just
    // "Lastname Firstname" with no disambiguator, so two different people who happen to share a
    // name and a tied place would collide - the CDK table's row diffing has undefined behavior for
    // duplicate trackBy keys (can misrender/reuse the wrong row's DOM), not just a missed
    // optimization. The row index is folded in as a guaranteed-unique tiebreaker; this table isn't
    // on a polling refresh, so losing cross-emission identity stability for the non-personId cases
    // costs nothing in practice.
    trackByRankingEntry = (index: number, entry: GaudiRankingEntry) =>
        entry.personId ?? `${index}|${entry.place}|${entry.label}`;
    pdfExportLoading$: Observable<boolean> = this.store.select(GaudiModeSelectors.selectGaudiModePdfExportLoading);

    private races: Race[] = [];

    constructor() {
        this.store.select(selectAllRaces)
            .pipe(takeUntil(this.destroy$))
            .subscribe(races => (this.races = races));

        effect(() => {
            const gaudiMode = this.gaudiMode();
            this.rankingColumns = gaudiMode.type === GaudiModeType.LOS
                ? ["place", "label", "time1Ms", "time2Ms", "valueMs", "referenceMs", "diffMs"]
                : gaudiMode.type === GaudiModeType.TEAM
                    ? ["place", "label", "valueMs", "members"]
                    : ["place", "label", "valueMs"];

            this.legColumns = gaudiMode.races.map(r => ({raceId: r.raceId, raceName: r.raceName}));
            const cols = ["place", "label"];
            for (const leg of this.legColumns) {
                cols.push(`leg_${leg.raceId}_value`);
                if (gaudiMode.type === GaudiModeType.POINTS_COMBINATION) {
                    cols.push(`leg_${leg.raceId}_place`, `leg_${leg.raceId}_points`);
                }
            }
            cols.push("total");
            this.combinationColumns = cols;

            if (gaudiMode.type === GaudiModeType.LOS) {
                this.store.dispatch(GaudiModeActions.loadPairing({id: gaudiMode.id}));
            }
        });

        this.actions$.pipe(
            ofType(GaudiModeActions.pairingFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER bei der Auslosung: ${error}`, "OK", {duration: 5000});
        });
        this.actions$.pipe(
            ofType(GaudiModeActions.loadRankingFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Laden der Rangliste: ${error}`, "OK", {duration: 5000});
        });
        this.actions$.pipe(
            ofType(GaudiModeActions.exportPdfFailure, GaudiModeActions.exportPdfByGenderFailure, GaudiModeActions.exportPdfAllAgeGroupsFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim PDF-Export: ${error}`, "OK", {duration: 5000});
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    close(): void {
        this.closed.emit();
    }

    draw(): void {
        this.store.dispatch(GaudiModeActions.drawPairing({id: this.gaudiMode().id}));
        this.snackBar.open("Auslosung wird durchgeführt...", "OK", {duration: 2000});
    }

    loadRanking(): void {
        this.store.dispatch(GaudiModeActions.loadRanking({id: this.gaudiMode().id}));
    }

    exportPdf(): void {
        const gaudiMode = this.gaudiMode();
        this.store.dispatch(GaudiModeActions.exportPdf({
            id: gaudiMode.id,
            filename: this.buildFilename(gaudiMode, "")
        }));
        this.snackBar.open("PDF Export gestartet", "OK", {duration: 2000});
    }

    exportByGenderPdf(gender: string): void {
        const gaudiMode = this.gaudiMode();
        this.store.dispatch(GaudiModeActions.exportPdfByGender({
            id: gaudiMode.id,
            gender,
            filename: this.buildFilename(gaudiMode, gender.toLowerCase())
        }));
        this.snackBar.open("PDF Export gestartet", "OK", {duration: 2000});
    }

    exportAllAgeGroupsPdf(): void {
        const gaudiMode = this.gaudiMode();
        this.store.dispatch(GaudiModeActions.exportPdfAllAgeGroups({
            id: gaudiMode.id,
            filename: this.buildFilename(gaudiMode, "altersklassen")
        }));
        this.snackBar.open("PDF Export gestartet", "OK", {duration: 2000});
    }

    private buildFilename(gaudiMode: GaudiMode, suffix: string): string {
        const base = `gaudi_${gaudiMode.name.replace(/\s+/g, '_').toLowerCase()}`;
        return suffix ? `${base}_${suffix}.pdf` : `${base}.pdf`;
    }

    /** Los-Modus puts the whole pair label into lastName (firstName empty). */
    notRankedName(entry: GaudiNotRankedEntry): string {
        return `${entry.lastName} ${entry.firstName}`.trim();
    }

    memberSummary(entry: GaudiRankingEntry): string {
        if (!entry.members?.length) {
            return "-";
        }
        return entry.members
            .map(m => `${m.label} (${this.singleRaceValueDisplay(m.valueMs)})`)
            .join(', ');
    }

    typeLabel(): string {
        switch (this.gaudiMode().type) {
            case GaudiModeType.LOS: return "Los-Modus";
            case GaudiModeType.TEAM: return "Mannschaftswertung";
            case GaudiModeType.TIME_COMBINATION: return "Zeit-Kombination";
            case GaudiModeType.POINTS_COMBINATION: return "Punkte-Mischwertung";
        }
    }

    isCombinationType(): boolean {
        return this.gaudiMode().type === GaudiModeType.TIME_COMBINATION
            || this.gaudiMode().type === GaudiModeType.POINTS_COMBINATION;
    }

    legFor(entry: GaudiRankingEntry, raceId: number): GaudiRankingLeg | undefined {
        return entry.legs?.find(l => l.raceId === raceId);
    }

    legValueDisplay(entry: GaudiRankingEntry, raceId: number): string {
        const leg = this.legFor(entry, raceId);
        if (leg?.status) {
            return leg.status;
        }
        if (!leg || leg.rawValue === undefined || leg.rawValue === null) {
            return "-";
        }
        const race = this.races.find(r => r.id === raceId);
        const hasPenalty = leg.penalty !== undefined && leg.penalty !== null && leg.penalty !== 0;
        const penaltySign = this.penaltySign(race);
        if (race && race.resultUnit === ResultUnit.POINTS) {
            const label = race.resultUnitLabel ? ` ${race.resultUnitLabel}` : "";
            const value = `${(leg.rawValue / 100).toFixed(2)}${label}`;
            return hasPenalty ? `${value} (${penaltySign}${(leg.penalty! / 100).toFixed(2)}${label})` : value;
        }
        let value = this.formatDuration(leg.rawValue);
        if (leg.startGroupOffsetMs) {
            value += ` (−${this.formatDuration(leg.startGroupOffsetMs)})`;
        }
        if (hasPenalty) {
            value += ` (${penaltySign}${this.formatDuration(leg.penalty)})`;
        }
        return value;
    }

    /** Mirrors RankingService#adjustedValue: a penalty is subtracted on DESC (higher-is-better) races. */
    private penaltySign(race: Race | undefined): string {
        return race?.sortDirection === SortDirection.DESC ? "−" : "+";
    }

    legValueTooltip(entry: GaudiRankingEntry, raceId: number): string {
        const leg = this.legFor(entry, raceId);
        if (!leg || leg.status || leg.rawValue === undefined || leg.rawValue === null) {
            return "";
        }
        const hasOffset = !!leg.startGroupOffsetMs;
        const hasPenalty = leg.penalty !== undefined && leg.penalty !== null && leg.penalty !== 0;
        if (!hasOffset && !hasPenalty) {
            return "";
        }
        return ["Messwert", hasOffset ? "(− Zeitversatz Startgruppe)" : "", hasPenalty ? `(${this.penaltySign(this.races.find(r => r.id === raceId))} Strafe)` : ""]
            .filter(Boolean).join(" ");
    }

    legPlaceDisplay(entry: GaudiRankingEntry, raceId: number): string {
        const leg = this.legFor(entry, raceId);
        return leg?.place !== undefined && leg?.place !== null ? String(leg.place) : "-";
    }

    legPointsDisplay(entry: GaudiRankingEntry, raceId: number): string {
        const leg = this.legFor(entry, raceId);
        return leg?.points !== undefined && leg?.points !== null ? String(leg.points) : "-";
    }

    totalDisplay(entry: GaudiRankingEntry): string {
        if (this.gaudiMode().type === GaudiModeType.POINTS_COMBINATION) {
            return entry.totalPoints !== undefined && entry.totalPoints !== null ? String(entry.totalPoints) : "-";
        }
        return this.singleRaceValueDisplay(entry.valueMs);
    }

    /**
     * Formats a value from the LOS/TEAM ranking table or the TIME_COMBINATION "Gesamt" column
     * using the mode's own race's unit (points races render as a decimal value, not a duration) -
     * mirrors legValueDisplay()'s per-leg formatting, but for the single race these modes have
     * (LOS/TEAM combine exactly one race; every TIME_COMBINATION leg shares the same result unit).
     */
    singleRaceValueDisplay(value: number | undefined | null): string {
        if (value === undefined || value === null) {
            return "-";
        }
        const raceId = this.gaudiMode().races[0]?.raceId;
        const race = raceId !== undefined ? this.races.find(r => r.id === raceId) : undefined;
        if (race && race.resultUnit === ResultUnit.POINTS) {
            const label = race.resultUnitLabel ? ` ${race.resultUnitLabel}` : "";
            return `${(value / 100).toFixed(2)}${label}`;
        }
        return this.formatDuration(value);
    }

    formatDuration(ms: number | undefined | null): string {
        if (ms === undefined || ms === null) {
            return "-";
        }
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const milliseconds = ms % 1000;
        return `${minutes}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(3, "0")}`;
    }
}
