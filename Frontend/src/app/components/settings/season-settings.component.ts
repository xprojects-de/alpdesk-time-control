import {Component, DestroyRef, inject, OnInit} from "@angular/core";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Actions, ofType} from "@ngrx/effects";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {SeasonSettings} from "../../models/season-settings.model";
import {ConfirmDialogComponent} from "../shared/confirm-dialog/confirm-dialog.component";
import * as SettingsActions from "../../store/settings/settings.actions";
import * as SettingsSelectors from "../../store/settings/settings.selectors";

const MONTHS = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
];

@Component({
    selector: "app-season-settings",
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatDialogModule,
        MatSnackBarModule,
    ],
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>Saison</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <p class="season-hint">
                    Altersklassen gelten jeweils für eine Saison, und welcher Saison ein Rennen angehört, ergibt sich
                    aus seinem Datum. Mit dem 1. Januar entspricht eine Saison genau dem Kalenderjahr. Wenn bei euch ein
                    Winter über den Jahreswechsel geht, verschiebe den Saisonstart z.B. auf den 1. Juli - dann zählen
                    ein Dezember- und ein Januar-Rennen zur selben Saison.
                </p>

                <form [formGroup]="form" class="season-form">
                    <mat-form-field appearance="outline">
                        <mat-label>Saisonstart Tag</mat-label>
                        <input matInput type="number" formControlName="seasonStartDay" required min="1" max="31" />
                        @if (form.get("seasonStartDay")?.invalid && form.get("seasonStartDay")?.touched) {
                            <mat-error>Tag muss zwischen 1 und 31 liegen</mat-error>
                        }
                    </mat-form-field>

                    <mat-form-field appearance="outline">
                        <mat-label>Saisonstart Monat</mat-label>
                        <mat-select formControlName="seasonStartMonth" required>
                            @for (month of months; track month.value) {
                                <mat-option [value]="month.value">{{ month.label }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </form>

                @if (season$ | async; as season) {
                    <p class="season-current">
                        Aktuelle Saison: <strong>{{ season.currentSeason }}</strong> ({{
                            season.currentSeasonStart | date: "dd.MM.yyyy"
                        }}
                        – {{ season.currentSeasonEnd | date: "dd.MM.yyyy" }})
                    </p>
                }

                <div class="actions">
                    <button
                        mat-raised-button
                        color="primary"
                        (click)="save()"
                        [disabled]="form.invalid || (saving$ | async) || (season$ | async) === null"
                    >
                        Speichern
                    </button>
                </div>
            </mat-card-content>
        </mat-card>
    `,
    styles: [
        `
            mat-card {
                margin: 20px;
                max-width: 640px;
            }

            .season-hint {
                color: rgba(0, 0, 0, 0.6);
                font-size: 13px;
                margin: 8px 0 16px;
            }

            .season-form {
                display: flex;
                gap: 16px;
            }

            .season-form mat-form-field {
                flex: 1;
            }

            .season-current {
                margin: 0 0 8px;
                font-size: 14px;
            }

            .actions {
                display: flex;
                justify-content: flex-end;
                margin-top: 8px;
            }

            @media (max-width: 768px) {
                mat-card {
                    margin: 8px;
                }

                .season-form {
                    flex-direction: column;
                    gap: 4px;
                }
            }
        `,
    ],
})
export class SeasonSettingsComponent implements OnInit {
    private store = inject(Store);
    private fb = inject(FormBuilder);
    private snackBar = inject(MatSnackBar);
    private dialog = inject(MatDialog);
    private actions$ = inject(Actions);
    // save() runs outside an injection context, so takeUntilDestroyed needs the ref explicitly.
    private destroyRef = inject(DestroyRef);

    months = MONTHS.map((label, index) => ({value: index + 1, label}));
    season$: Observable<SeasonSettings | null>;
    saving$: Observable<boolean>;

    form: FormGroup = this.fb.group({
        seasonStartDay: [1, [Validators.required, Validators.min(1), Validators.max(31)]],
        seasonStartMonth: [1, Validators.required],
    });

    constructor() {
        this.season$ = this.store.select(SettingsSelectors.selectSeasonSettings);
        this.saving$ = this.store.select(SettingsSelectors.selectSeasonSaving);

        this.season$.pipe(takeUntilDestroyed()).subscribe(season => {
            if (season) {
                this.form.patchValue(
                    {seasonStartDay: season.seasonStartDay, seasonStartMonth: season.seasonStartMonth},
                    {emitEvent: false},
                );
            }
        });

        this.actions$.pipe(ofType(SettingsActions.updateSeasonSuccess), takeUntilDestroyed()).subscribe(({season}) => {
            this.snackBar.open(`Saisonstart gespeichert - aktuelle Saison ist ${season.currentSeason}`, "OK", {
                duration: 4000,
            });
        });
        this.actions$.pipe(ofType(SettingsActions.updateSeasonFailure), takeUntilDestroyed()).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Speichern der Saison-Grenze: ${error}`, "OK", {duration: 5000});
        });
        this.actions$.pipe(ofType(SettingsActions.loadSeasonFailure), takeUntilDestroyed()).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Laden der Saison-Einstellungen: ${error}`, "OK", {duration: 5000});
        });
    }

    ngOnInit(): void {
        this.store.dispatch(SettingsActions.loadSeason());
    }

    /**
     * Confirmed rather than saved straight away: moving the boundary re-assigns existing races to
     * other seasons, and a race that lands in a season without age groups is evaluated without any
     * - a change that is invisible until someone looks at a ranking.
     */
    save(): void {
        const request = {
            seasonStartMonth: Number(this.form.value.seasonStartMonth),
            seasonStartDay: Number(this.form.value.seasonStartDay),
        };
        this.dialog
            .open(ConfirmDialogComponent, {
                width: "520px",
                data: {
                    message:
                        "Saisonstart wirklich ändern? Bestehende Rennen können dadurch einer anderen Saison " +
                        "zugeordnet werden und damit anderen Altersklassen unterliegen. Rennen, deren neue Saison " +
                        "keine Altersklassen hat, werden ohne Altersklasse ausgewertet.",
                    confirmLabel: "Ändern",
                },
            })
            .afterClosed()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(confirmed => {
                if (confirmed) {
                    this.store.dispatch(SettingsActions.updateSeason({request}));
                }
            });
    }
}
