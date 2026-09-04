import {
    Component,
    OnChanges,
    OnDestroy,
    Input,
    inject,
    ChangeDetectionStrategy,
} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Store} from "@ngrx/store";
import {Observable, Subject} from "rxjs";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {
    GaudiLosPairing,
    GaudiMode,
    GaudiModeType,
    GaudiRankingEntry,
} from "../../models/gaudi-mode.model";
import * as GaudiModeActions from "../../store/gaudi-mode/gaudi-mode.actions";
import * as GaudiModeSelectors from "../../store/gaudi-mode/gaudi-mode.selectors";

@Component({
    selector: "app-gaudi-mode-detail",
    standalone: true,
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatSnackBarModule,
    ],
    template: `
        <mat-card class="detail-card">
            <mat-card-header>
                <mat-card-title>{{ gaudiMode.name }}</mat-card-title>
                <mat-card-subtitle>
                    {{ gaudiMode.type === gaudiModeType.LOS ? 'Los-Modus' : 'Mannschaftswertung' }}
                    @if (gaudiMode.type === gaudiModeType.TEAM) {
                        &ndash; {{ gaudiMode.teamSize }} Teilnehmer pro Team
                    }
                </mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>

                @if (gaudiMode.type === gaudiModeType.LOS) {
                    <div class="section-actions">
                        <button mat-raised-button color="primary" (click)="draw()">
                            <mat-icon>casino</mat-icon>
                            {{ (pairing$ | async)?.length ? 'Neu auslosen' : 'Auslosen' }}
                        </button>
                    </div>

                    @if ((pairing$ | async)?.length) {
                        <table mat-table [dataSource]="(pairing$ | async) || []" class="detail-table">
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
                    } @else {
                        <p class="hint">Noch keine Zulosung vorhanden.</p>
                    }
                }

                <div class="section-actions">
                    <button mat-raised-button (click)="loadRanking()">
                        <mat-icon>leaderboard</mat-icon>
                        Wertung anzeigen
                    </button>
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
                </div>

                @if ((ranking$ | async)?.length) {
                    <table mat-table [dataSource]="(ranking$ | async) || []" class="detail-table">
                        <ng-container matColumnDef="place">
                            <th mat-header-cell *matHeaderCellDef>Platz</th>
                            <td mat-cell *matCellDef="let r">{{ r.place }}</td>
                        </ng-container>
                        <ng-container matColumnDef="label">
                            <th mat-header-cell *matHeaderCellDef>
                                {{ gaudiMode.type === gaudiModeType.LOS ? 'Paarung' : 'Mannschaft' }}
                            </th>
                            <td mat-cell *matCellDef="let r">{{ r.label }}</td>
                        </ng-container>
                        <ng-container matColumnDef="time1Ms">
                            <th mat-header-cell *matHeaderCellDef>Zeit 1</th>
                            <td mat-cell *matCellDef="let r">{{ formatDuration(r.time1Ms) }}</td>
                        </ng-container>
                        <ng-container matColumnDef="time2Ms">
                            <th mat-header-cell *matHeaderCellDef>Zeit 2</th>
                            <td mat-cell *matCellDef="let r">{{ formatDuration(r.time2Ms) }}</td>
                        </ng-container>
                        <ng-container matColumnDef="valueMs">
                            <th mat-header-cell *matHeaderCellDef>
                                {{ gaudiMode.type === gaudiModeType.LOS ? 'Ø-Zeit Paar' : 'Gesamtzeit' }}
                            </th>
                            <td mat-cell *matCellDef="let r">{{ formatDuration(r.valueMs) }}</td>
                        </ng-container>
                        <ng-container matColumnDef="referenceMs">
                            <th mat-header-cell *matHeaderCellDef>Ø-Zeit Gesamt</th>
                            <td mat-cell *matCellDef="let r">{{ formatDuration(r.referenceMs) }}</td>
                        </ng-container>
                        <ng-container matColumnDef="diffMs">
                            <th mat-header-cell *matHeaderCellDef>Abweichung</th>
                            <td mat-cell *matCellDef="let r">{{ formatDuration(r.diffMs) }}</td>
                        </ng-container>
                        <tr mat-header-row *matHeaderRowDef="rankingColumns"></tr>
                        <tr mat-row *matRowDef="let row; columns: rankingColumns"></tr>
                    </table>
                } @else {
                    <p class="hint">Noch keine Wertung berechnet.</p>
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

          .section-actions {
            display: flex;
            gap: 10px;
            margin: 16px 0;
          }

          .detail-table {
            width: 100%;
            margin-bottom: 16px;
          }

          .hint {
            color: rgba(0, 0, 0, 0.6);
            font-style: italic;
          }
        `,
    ],
})
export class GaudiModeDetailComponent implements OnChanges, OnDestroy {
    private store = inject(Store);
    private snackBar = inject(MatSnackBar);
    private destroy$ = new Subject<void>();

    @Input({required: true}) gaudiMode!: GaudiMode;

    gaudiModeType = GaudiModeType;
    pairingColumns = ["participant1", "participant2"];
    rankingColumns: string[] = [];

    pairing$: Observable<GaudiLosPairing[]> = this.store.select(GaudiModeSelectors.selectPairing);
    ranking$: Observable<GaudiRankingEntry[]> = this.store.select(GaudiModeSelectors.selectRanking);
    pdfExportLoading$: Observable<boolean> = this.store.select(GaudiModeSelectors.selectGaudiModePdfExportLoading);

    ngOnChanges(): void {
        this.rankingColumns = this.gaudiMode.type === GaudiModeType.LOS
            ? ["place", "label", "time1Ms", "time2Ms", "valueMs", "referenceMs", "diffMs"]
            : ["place", "label", "valueMs"];

        if (this.gaudiMode.type === GaudiModeType.LOS) {
            this.store.dispatch(GaudiModeActions.loadPairing({id: this.gaudiMode.id}));
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    draw(): void {
        this.store.dispatch(GaudiModeActions.drawPairing({id: this.gaudiMode.id}));
        this.snackBar.open("Auslosung wird durchgeführt...", "OK", {duration: 2000});
    }

    loadRanking(): void {
        this.store.dispatch(GaudiModeActions.loadRanking({id: this.gaudiMode.id}));
    }

    exportPdf(): void {
        this.store.dispatch(GaudiModeActions.exportPdf({
            id: this.gaudiMode.id,
            filename: `gaudi_${this.gaudiMode.name.replace(/\s+/g, '_').toLowerCase()}.pdf`
        }));
        this.snackBar.open("PDF Export gestartet", "OK", {duration: 2000});
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
