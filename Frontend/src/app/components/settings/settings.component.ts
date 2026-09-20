import {Component, inject, OnInit} from "@angular/core";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Observable, combineLatest} from "rxjs";
import {map} from "rxjs/operators";
import {Actions, ofType} from "@ngrx/effects";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {TimingProviderLabels, TimingProviderSettings, TimingProviderType} from "../../models/timing-provider.model";
import * as SettingsActions from "../../store/settings/settings.actions";
import * as SettingsSelectors from "../../store/settings/settings.selectors";

const ALPDESK_CONFIG_FIELDS: {key: string; label: string; placeholder: string}[] = [
    {key: "baseUrl", label: "Basis-URL des Geräts", placeholder: "http://192.168.4.1"},
];

@Component({
    selector: "app-settings",
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
    ],
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>Zeitmessung</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                @if (loading$ | async) {
                    <div class="loading-container">
                        <mat-spinner diameter="30"></mat-spinner>
                    </div>
                } @else {
                    <form [formGroup]="form" class="settings-form">
                        <mat-form-field appearance="outline">
                            <mat-label>Zeitmess-System</mat-label>
                            <mat-select formControlName="type">
                                @for (type of availableTypes; track type) {
                                    <mat-option [value]="type">{{ typeLabel(type) }}</mat-option>
                                }
                            </mat-select>
                            <mat-hint>Legt fest, welches Gerät der geplante Import abfragt</mat-hint>
                        </mat-form-field>

                        @switch (form.get("type")?.value) {
                            @case ("ALPDESK_TIMECONTROL") {
                                <div class="provider-config" formGroupName="config">
                                    <p class="provider-config-hint">
                                        Leer lassen, um den Standardwert aus der Server-Konfiguration zu verwenden.
                                    </p>
                                    @for (field of alpdeskFields; track field.key) {
                                        <mat-form-field appearance="outline">
                                            <mat-label>{{ field.label }}</mat-label>
                                            <input
                                                matInput
                                                [formControlName]="field.key"
                                                [placeholder]="field.placeholder"
                                            />
                                        </mat-form-field>
                                    }
                                </div>
                            }
                        }

                        <div class="actions">
                            <button
                                mat-raised-button
                                color="primary"
                                type="button"
                                [disabled]="!(canSave$ | async)"
                                (click)="save()"
                            >
                                @if (saving$ | async) {
                                    Speichern...
                                } @else {
                                    Speichern
                                }
                            </button>
                        </div>
                    </form>
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

            .loading-container {
                display: flex;
                justify-content: center;
                padding: 8px;
            }

            .settings-form {
                display: flex;
                flex-direction: column;
                gap: 4px;
                margin-top: 20px;
            }

            .provider-config {
                display: flex;
                flex-direction: column;
            }

            .provider-config-hint {
                color: rgba(0, 0, 0, 0.6);
                font-size: 13px;
                margin: 0 0 8px;
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
            }
        `,
    ],
})
export class SettingsComponent implements OnInit {
    private store = inject(Store);
    private fb = inject(FormBuilder);
    private snackBar = inject(MatSnackBar);
    private actions$ = inject(Actions);

    loading$: Observable<boolean>;
    saving$: Observable<boolean>;
    timingProviderSettings$: Observable<TimingProviderSettings | null>;
    // Blocks saving until the real settings have actually loaded at least once - without this, a
    // failed initial load leaves the form showing its hardcoded NONE/blank defaults (see the
    // subscription below), and clicking Speichern would silently overwrite a real, working
    // configuration (e.g. a live race's device settings) with those defaults.
    canSave$: Observable<boolean>;

    availableTypes: TimingProviderType[] = ["NONE", "ALPDESK_TIMECONTROL"];
    alpdeskFields = ALPDESK_CONFIG_FIELDS;

    form: FormGroup = this.fb.group({
        type: ["NONE", Validators.required],
        config: this.fb.group(Object.fromEntries(ALPDESK_CONFIG_FIELDS.map(f => [f.key, [""]]))),
    });

    constructor() {
        this.loading$ = this.store.select(SettingsSelectors.selectSettingsLoading);
        this.saving$ = this.store.select(SettingsSelectors.selectSettingsSaving);
        this.timingProviderSettings$ = this.store.select(SettingsSelectors.selectTimingProviderSettings);
        this.canSave$ = combineLatest([this.saving$, this.timingProviderSettings$]).pipe(
            map(([saving, settings]) => !saving && settings !== null),
        );

        this.timingProviderSettings$.pipe(takeUntilDestroyed()).subscribe(settings => {
            if (!settings) {
                return;
            }
            this.availableTypes = settings.availableTypes;
            this.form.patchValue({
                type: settings.type,
                config: {
                    ...Object.fromEntries(ALPDESK_CONFIG_FIELDS.map(f => [f.key, ""])),
                    ...settings.config,
                },
            });
        });

        this.actions$.pipe(ofType(SettingsActions.updateTimingProviderSuccess), takeUntilDestroyed()).subscribe(() => {
            this.snackBar.open("Einstellungen gespeichert", "OK", {duration: 3000});
        });
        this.actions$
            .pipe(ofType(SettingsActions.updateTimingProviderFailure), takeUntilDestroyed())
            .subscribe(({error}) => {
                this.snackBar.open(`FEHLER beim Speichern: ${error}`, "OK", {duration: 5000});
            });
        this.actions$
            .pipe(ofType(SettingsActions.loadTimingProviderFailure), takeUntilDestroyed())
            .subscribe(({error}) => {
                this.snackBar.open(`FEHLER beim Laden: ${error}`, "OK", {duration: 5000});
            });
    }

    ngOnInit(): void {
        this.store.dispatch(SettingsActions.loadTimingProvider());
    }

    typeLabel(type: TimingProviderType): string {
        return TimingProviderLabels[type] ?? type;
    }

    save(): void {
        // Config values are optional overrides: drop blanks so an emptied field reverts to the
        // server-side default instead of being saved as an empty-string override.
        const rawConfig = this.form.value.config as Record<string, string>;
        const config = Object.fromEntries(
            Object.entries(rawConfig).filter(([, value]) => value != null && value.trim() !== ""),
        );
        this.store.dispatch(
            SettingsActions.updateTimingProvider({
                request: {
                    type: this.form.value.type,
                    config,
                },
            }),
        );
    }
}
