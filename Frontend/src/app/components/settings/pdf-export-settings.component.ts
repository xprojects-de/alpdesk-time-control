import {Component, inject, OnInit, viewChild} from "@angular/core";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {CommonModule} from "@angular/common";
import {Store} from "@ngrx/store";
import {Observable, take} from "rxjs";
import {Actions, ofType} from "@ngrx/effects";
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggle, MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {PdfExportSettings} from "../../models/pdf-export-settings.model";
import * as SettingsActions from "../../store/settings/settings.actions";
import * as SettingsSelectors from "../../store/settings/settings.selectors";

/**
 * Saved straight on toggle rather than behind a "Speichern" button: the switch only changes the
 * layout of the next PDF export, nothing already stored, so there is nothing to confirm.
 */
@Component({
    selector: "app-pdf-export-settings",
    imports: [CommonModule, MatCardModule, MatSlideToggleModule, MatSnackBarModule],
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>PDF-Auswertungen</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <p class="pdf-export-hint">
                    Gilt für alle Ergebnis-PDFs eines Rennens, alle Gaudi-Modus-Auswertungen und die öffentliche
                    Live-Ansicht. Die Startliste richtet sich nur nach dem Jahrgang - die Startnummer steht dort immer.
                </p>
                @if (pdfExport$ | async; as pdfExport) {
                    <div class="toggles">
                        <mat-slide-toggle
                            #raceNumberToggle
                            [checked]="pdfExport.showRaceNumber"
                            [disabled]="(saving$ | async) === true"
                            (change)="save(pdfExport, {showRaceNumber: $event.checked})"
                        >
                            Startnummer anzeigen
                        </mat-slide-toggle>
                        <mat-slide-toggle
                            #birthYearToggle
                            [checked]="pdfExport.showBirthYear"
                            [disabled]="(saving$ | async) === true"
                            (change)="save(pdfExport, {showBirthYear: $event.checked})"
                        >
                            Jahrgang anzeigen
                        </mat-slide-toggle>
                    </div>
                }
            </mat-card-content>
        </mat-card>
    `,
    styles: [
        `
            mat-card {
                margin: 20px;
                max-width: 640px;
            }

            .toggles {
                display: flex;
                flex-direction: column;
                gap: 12px;
            }

            .pdf-export-hint {
                color: rgba(0, 0, 0, 0.6);
                font-size: 13px;
                margin: 8px 0 16px;
            }

            @media (max-width: 768px) {
                mat-card {
                    margin: 8px;
                }
            }
        `,
    ],
})
export class PdfExportSettingsComponent implements OnInit {
    private store = inject(Store);
    private snackBar = inject(MatSnackBar);
    private actions$ = inject(Actions);

    pdfExport$: Observable<PdfExportSettings | null> = this.store.select(SettingsSelectors.selectPdfExportSettings);
    saving$: Observable<boolean> = this.store.select(SettingsSelectors.selectPdfExportSaving);

    private raceNumberToggle = viewChild<MatSlideToggle>("raceNumberToggle");
    private birthYearToggle = viewChild<MatSlideToggle>("birthYearToggle");

    constructor() {
        this.actions$.pipe(ofType(SettingsActions.updatePdfExportSuccess), takeUntilDestroyed()).subscribe(() => {
            this.snackBar.open("PDF-Einstellungen gespeichert", "OK", {duration: 3000});
        });
        this.actions$
            .pipe(ofType(SettingsActions.updatePdfExportFailure), takeUntilDestroyed())
            .subscribe(({error}) => {
                // Put the toggles back to what is actually stored. A failed save leaves the store -
                // and with it the [checked] binding - unchanged, so the binding alone would never
                // move a toggle the operator already flipped.
                this.pdfExport$.pipe(take(1)).subscribe(stored => {
                    if (stored) {
                        const raceNumberToggle = this.raceNumberToggle();
                        const birthYearToggle = this.birthYearToggle();
                        if (raceNumberToggle) raceNumberToggle.checked = stored.showRaceNumber;
                        if (birthYearToggle) birthYearToggle.checked = stored.showBirthYear;
                    }
                });
                this.snackBar.open(`FEHLER beim Speichern der PDF-Einstellungen: ${error}`, "OK", {duration: 5000});
            });
        this.actions$.pipe(ofType(SettingsActions.loadPdfExportFailure), takeUntilDestroyed()).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Laden der PDF-Einstellungen: ${error}`, "OK", {duration: 5000});
        });
    }

    ngOnInit(): void {
        this.store.dispatch(SettingsActions.loadPdfExport());
    }

    /**
     * Sends both switches, the untouched one from the current state: the endpoint replaces the
     * whole setting, so a request with only the flipped one would be rejected.
     */
    save(current: PdfExportSettings, change: Partial<PdfExportSettings>): void {
        this.store.dispatch(SettingsActions.updatePdfExport({request: {...current, ...change}}));
    }
}
