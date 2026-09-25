import {Component, inject, OnInit} from "@angular/core";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {CommonModule} from "@angular/common";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Actions, ofType} from "@ngrx/effects";
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggleChange, MatSlideToggleModule} from "@angular/material/slide-toggle";
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
                    Gilt für alle Ergebnis-PDFs eines Rennens. Die Startliste enthält Startnummer und Jahrgang immer,
                    die Gaudi-Modus-Auswertungen nie.
                </p>
                @if (pdfExport$ | async; as pdfExport) {
                    <mat-slide-toggle
                        [checked]="pdfExport.showRaceNumberAndBirthYear"
                        [disabled]="(saving$ | async) === true"
                        (change)="toggle($event)"
                    >
                        Startnummer und Jahrgang anzeigen
                    </mat-slide-toggle>
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

    constructor() {
        this.actions$.pipe(ofType(SettingsActions.updatePdfExportSuccess), takeUntilDestroyed()).subscribe(() => {
            this.snackBar.open("PDF-Einstellungen gespeichert", "OK", {duration: 3000});
        });
        this.actions$
            .pipe(ofType(SettingsActions.updatePdfExportFailure), takeUntilDestroyed())
            .subscribe(({error}) => {
                // Reload so the toggle falls back to what is actually stored instead of showing the
                // position the operator flipped it to.
                this.store.dispatch(SettingsActions.loadPdfExport());
                this.snackBar.open(`FEHLER beim Speichern der PDF-Einstellungen: ${error}`, "OK", {duration: 5000});
            });
        this.actions$.pipe(ofType(SettingsActions.loadPdfExportFailure), takeUntilDestroyed()).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Laden der PDF-Einstellungen: ${error}`, "OK", {duration: 5000});
        });
    }

    ngOnInit(): void {
        this.store.dispatch(SettingsActions.loadPdfExport());
    }

    toggle(event: MatSlideToggleChange): void {
        this.store.dispatch(SettingsActions.updatePdfExport({request: {showRaceNumberAndBirthYear: event.checked}}));
    }
}
