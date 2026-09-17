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
import {Observable, Subject} from "rxjs";
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
import {StartGroupTemplate} from "../../models/start-group.model";
import * as StartGroupTemplateActions from "../../store/start-group-template/start-group-template.actions";
import * as StartGroupTemplateSelectors from "../../store/start-group-template/start-group-template.selectors";
import {StartGroupTemplateDialogComponent} from "./start-group-template-dialog.component";
import {ConfirmDialogComponent} from "../shared/confirm-dialog/confirm-dialog.component";
import {takeUntil} from "rxjs/operators";
import {Actions, ofType} from "@ngrx/effects";

@Component({
    selector: "app-start-group-template-list",
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
    ],
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>Startgruppen</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <p class="hint">
                    Wiederverwendbare Vorlagen (Label/Farbe/Reihenfolge) für Blockstart-Gruppen -
                    die Zuordnung von Teilnehmern zu einer Gruppe erfolgt pro Rennen unter
                    "Teilnehmer" &gt; "Startgruppen".
                </p>
                <div class="header-actions">
                    <button
                            mat-raised-button
                            color="primary"
                            (click)="openCreateDialog()"
                    >
                        <mat-icon>add</mat-icon>
                        Neue Startgruppe
                    </button>
                    <button
                            mat-raised-button
                            (click)="refreshData()"
                            matTooltip="Daten aktualisieren"
                    >
                        <mat-icon>refresh</mat-icon>
                        Aktualisieren
                    </button>
                </div>

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
                        class="start-group-table"
                        [class.hidden]="loading$ | async"
                >
                    <ng-container matColumnDef="color">
                        <th mat-header-cell *matHeaderCellDef>Farbe</th>
                        <td mat-cell *matCellDef="let template">
                            <span class="swatch" [style.background]="template.color"></span>
                        </td>
                    </ng-container>

                    <ng-container matColumnDef="label">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Label</th>
                        <td mat-cell *matCellDef="let template">{{ template.label }}</td>
                    </ng-container>

                    <ng-container matColumnDef="position">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Position</th>
                        <td mat-cell *matCellDef="let template">{{ template.position }}</td>
                    </ng-container>

                    <ng-container matColumnDef="offsetSeconds">
                        <th mat-header-cell *matHeaderCellDef>Zeitversatz</th>
                        <td mat-cell *matCellDef="let template">
                            {{ formatOffset(template.offsetSeconds) }}
                        </td>
                    </ng-container>

                    <ng-container matColumnDef="actions">
                        <th mat-header-cell *matHeaderCellDef>Aktionen</th>
                        <td mat-cell *matCellDef="let template">
                            <button
                                    mat-icon-button
                                    (click)="openEditDialog(template)"
                                    matTooltip="Bearbeiten"
                            >
                                <mat-icon>edit</mat-icon>
                            </button>
                            <button
                                    mat-icon-button
                                    color="warn"
                                    (click)="deleteTemplate(template)"
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
            </mat-card-content>
        </mat-card>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
          .header-actions {
            margin-top: 20px;
            margin-bottom: 20px;
            display: flex;
            gap: 10px;
          }

          .hint {
            font-size: 13px;
            color: rgba(0, 0, 0, 0.6);
            margin-top: 0;
          }

          .loading-container {
            display: flex;
            justify-content: center;
            padding: 40px;
          }

          .start-group-table {
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

          .swatch {
            display: inline-block;
            width: 20px;
            height: 20px;
            border-radius: 50%;
          }
        `,
    ],
})
export class StartGroupTemplateListComponent implements AfterViewInit, OnDestroy {
    private store = inject(Store);
    private dialog = inject(MatDialog);
    private snackBar = inject(MatSnackBar);
    private actions$ = inject(Actions);
    private destroy$ = new Subject<void>();

    templates$: Observable<StartGroupTemplate[]>;
    loading$: Observable<boolean>;
    displayedColumns = ["color", "label", "position", "offsetSeconds", "actions"];
    dataSource = new MatTableDataSource<StartGroupTemplate>([]);
    trackById = (_index: number, template: StartGroupTemplate) => template.id;
    private sortInitialized = false;
    private paginatorInitialized = false;

    sort = viewChild.required(MatSort);
    paginator = viewChild.required(MatPaginator);

    constructor() {
        this.templates$ = this.store.select(StartGroupTemplateSelectors.selectAllStartGroupTemplates);
        this.loading$ = this.store.select(StartGroupTemplateSelectors.selectStartGroupTemplateLoading);

        this.actions$.pipe(
            ofType(StartGroupTemplateActions.createStartGroupTemplateSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Startgruppe erfolgreich erstellt", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(StartGroupTemplateActions.createStartGroupTemplateFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Erstellen der Startgruppe: ${error}`, "OK", {duration: 5000});
        });

        this.actions$.pipe(
            ofType(StartGroupTemplateActions.updateStartGroupTemplateSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Startgruppe erfolgreich aktualisiert", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(StartGroupTemplateActions.updateStartGroupTemplateFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Aktualisieren der Startgruppe: ${error}`, "OK", {duration: 5000});
        });

        this.actions$.pipe(
            ofType(StartGroupTemplateActions.deleteStartGroupTemplateSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Startgruppe erfolgreich gelöscht", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(StartGroupTemplateActions.deleteStartGroupTemplateFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Löschen der Startgruppe: ${error}`, "OK", {duration: 5000});
        });
        this.actions$.pipe(
            ofType(StartGroupTemplateActions.deleteStartGroupTemplateConflict),
            takeUntil(this.destroy$),
        ).subscribe(({id, message}) => {
            this.dialog.open(ConfirmDialogComponent, {
                width: '450px',
                data: {message, confirmLabel: 'Löschen', confirmColor: 'warn'},
            })
                .afterClosed()
                .pipe(takeUntil(this.destroy$))
                .subscribe((confirmed) => {
                    if (confirmed) {
                        this.store.dispatch(StartGroupTemplateActions.deleteStartGroupTemplate({id, force: true}));
                    }
                });
        });

        effect(() => {
            const sortInstance = this.sort();
            if (sortInstance && !this.sortInitialized) {
                setTimeout(() => {
                    this.dataSource.sort = sortInstance;
                    this.sortInitialized = true;
                }, 100);
            }
        });

        effect(() => {
            const paginatorInstance = this.paginator();
            if (paginatorInstance && !this.paginatorInitialized) {
                setTimeout(() => {
                    this.dataSource.paginator = paginatorInstance;
                    this.paginatorInitialized = true;
                }, 100);
            }
        });
    }

    ngAfterViewInit(): void {
        this.store.dispatch(StartGroupTemplateActions.loadStartGroupTemplates());
        this.templates$
            .pipe(takeUntil(this.destroy$))
            .subscribe((templates) => {
                this.dataSource.data = templates;
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    openCreateDialog(): void {
        const dialogRef = this.dialog.open(StartGroupTemplateDialogComponent, {
            width: "500px",
        });

        dialogRef
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(StartGroupTemplateActions.createStartGroupTemplate({template: result}));
                }
            });
    }

    openEditDialog(template: StartGroupTemplate): void {
        const dialogRef = this.dialog.open(StartGroupTemplateDialogComponent, {
            width: "500px",
            data: template,
        });

        dialogRef.afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(
                        StartGroupTemplateActions.updateStartGroupTemplate({id: template.id, template: result}),
                    );
                }
            });
    }

    deleteTemplate(template: StartGroupTemplate): void {
        this.dialog.open(ConfirmDialogComponent, {
            width: '450px',
            data: {
                message: `Möchten Sie die Startgruppe "${template.label}" wirklich löschen?`,
                confirmLabel: 'Löschen',
                confirmColor: 'warn',
            },
        })
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((confirmed) => {
                if (confirmed) {
                    this.store.dispatch(StartGroupTemplateActions.deleteStartGroupTemplate({id: template.id}));
                }
            });
    }

    refreshData(): void {
        this.store.dispatch(StartGroupTemplateActions.loadStartGroupTemplates());
        this.snackBar.open("Daten werden aktualisiert...", "OK", {
            duration: 2000,
        });
    }

    formatOffset(offsetSeconds: number | null | undefined): string {
        if (offsetSeconds == null) {
            return "-";
        }
        const minutes = Math.floor(offsetSeconds / 60);
        const seconds = offsetSeconds % 60;
        return minutes > 0 ? `${minutes} min ${seconds} s` : `${seconds} s`;
    }
}
