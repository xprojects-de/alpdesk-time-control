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
import {Category} from "../../models/category.model";
import * as CategoryActions from "../../store/category/category.actions";
import * as CategorySelectors from "../../store/category/category.selectors";
import {CategoryDialogComponent} from "./category-dialog.component";
import {ConfirmDialogComponent} from "../shared/confirm-dialog/confirm-dialog.component";
import {takeUntil} from "rxjs/operators";
import {Actions, ofType} from "@ngrx/effects";

@Component({
    selector: "app-category-list",
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
                <mat-card-title>Kategorien</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <div class="header-actions">
                    <button
                            mat-raised-button
                            color="primary"
                            (click)="openCreateDialog()"
                    >
                        <mat-icon>add</mat-icon>
                        Neue Kategorie
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
                        class="category-table"
                        [class.hidden]="loading$ | async"
                >
                    <ng-container matColumnDef="id">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>
                        <td mat-cell *matCellDef="let category">{{ category.id }}</td>
                    </ng-container>

                    <ng-container matColumnDef="name">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
                        <td mat-cell *matCellDef="let category">
                            {{ category.name }}
                        </td>
                    </ng-container>

                    <ng-container matColumnDef="actions">
                        <th mat-header-cell *matHeaderCellDef>Aktionen</th>
                        <td mat-cell *matCellDef="let category">
                            <button
                                    mat-icon-button
                                    (click)="openEditDialog(category)"
                                    matTooltip="Bearbeiten"
                            >
                                <mat-icon>edit</mat-icon>
                            </button>
                            <button
                                    mat-icon-button
                                    color="warn"
                                    (click)="deleteCategory(category)"
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

          .loading-container {
            display: flex;
            justify-content: center;
            padding: 40px;
          }

          .category-table {
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
        `,
    ],
})
export class CategoryListComponent implements AfterViewInit, OnDestroy {
    private store = inject(Store);
    private dialog = inject(MatDialog);
    private snackBar = inject(MatSnackBar);
    private actions$ = inject(Actions);
    private destroy$ = new Subject<void>();

    categories$: Observable<Category[]>;
    loading$: Observable<boolean>;
    displayedColumns = ["id", "name", "actions"];
    dataSource = new MatTableDataSource<Category>([]);
    trackById = (_index: number, category: Category) => category.id;
    private sortInitialized = false;
    private paginatorInitialized = false;

    sort = viewChild.required(MatSort);
    paginator = viewChild.required(MatPaginator);

    constructor() {
        this.categories$ = this.store.select(CategorySelectors.selectAllCategories);
        this.loading$ = this.store.select(CategorySelectors.selectCategoryLoading);

        this.actions$.pipe(
            ofType(CategoryActions.createCategorySuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Kategorie erfolgreich erstellt", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(CategoryActions.createCategoryFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Erstellen der Kategorie: ${error}`, "OK", {duration: 5000});
        });

        this.actions$.pipe(
            ofType(CategoryActions.updateCategorySuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Kategorie erfolgreich aktualisiert", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(CategoryActions.updateCategoryFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Aktualisieren der Kategorie: ${error}`, "OK", {duration: 5000});
        });

        this.actions$.pipe(
            ofType(CategoryActions.deleteCategorySuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Kategorie erfolgreich gelöscht", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(CategoryActions.deleteCategoryFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Löschen der Kategorie: ${error}`, "OK", {duration: 5000});
        });
        this.actions$.pipe(
            ofType(CategoryActions.deleteCategoryConflict),
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
                        this.store.dispatch(CategoryActions.deleteCategory({id, force: true}));
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
        this.store.dispatch(CategoryActions.loadCategories());
        this.categories$
            .pipe(takeUntil(this.destroy$))
            .subscribe((categories) => {
                this.dataSource.data = categories;
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    openCreateDialog(): void {
        const dialogRef = this.dialog.open(CategoryDialogComponent, {
            width: "500px",
        });

        dialogRef
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(CategoryActions.createCategory({category: result}));
                }
            });
    }

    openEditDialog(category: Category): void {
        const dialogRef = this.dialog.open(CategoryDialogComponent, {
            width: "500px",
            data: category,
        });

        dialogRef.afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(
                        CategoryActions.updateCategory({id: category.id, category: result}),
                    );
                }
            });
    }

    deleteCategory(category: Category): void {
        this.dialog.open(ConfirmDialogComponent, {
            width: '450px',
            data: {
                message: `Möchten Sie die Kategorie "${category.name}" wirklich löschen?`,
                confirmLabel: 'Löschen',
                confirmColor: 'warn',
            },
        })
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((confirmed) => {
                if (confirmed) {
                    this.store.dispatch(CategoryActions.deleteCategory({id: category.id}));
                }
            });
    }

    refreshData(): void {
        this.store.dispatch(CategoryActions.loadCategories());
        this.snackBar.open("Daten werden aktualisiert...", "OK", {
            duration: 2000,
        });
    }
}
