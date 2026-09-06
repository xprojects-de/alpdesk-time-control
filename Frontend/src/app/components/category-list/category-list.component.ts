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
import {Category} from "../../models/category.model";
import * as CategoryActions from "../../store/category/category.actions";
import * as CategorySelectors from "../../store/category/category.selectors";
import {CategoryDialogComponent} from "./category-dialog.component";
import {takeUntil} from "rxjs/operators";

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

                <table
                        mat-table
                        [dataSource]="dataSource"
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
    private destroy$ = new Subject<void>();

    categories$: Observable<Category[]>;
    loading$: Observable<boolean>;
    displayedColumns = ["id", "name", "actions"];
    dataSource = new MatTableDataSource<Category>([]);
    private sortInitialized = false;

    sort = viewChild.required(MatSort);

    constructor() {
        this.categories$ = this.store.select(CategorySelectors.selectAllCategories);
        this.loading$ = this.store.select(CategorySelectors.selectCategoryLoading);

        effect(() => {
            const sortInstance = this.sort();
            if (sortInstance && !this.sortInitialized) {
                setTimeout(() => {
                    this.dataSource.sort = sortInstance;
                    this.sortInitialized = true;
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
                    this.snackBar.open("Kategorie erfolgreich erstellt", "OK", {
                        duration: 3000,
                    });
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
                    this.snackBar.open("Kategorie erfolgreich aktualisiert", "OK", {
                        duration: 3000,
                    });
                }
            });
    }

    deleteCategory(category: Category): void {
        if (confirm(`Möchten Sie die Kategorie "${category.name}" wirklich löschen?`)) {
            this.store.dispatch(CategoryActions.deleteCategory({id: category.id}));
            this.snackBar.open("Kategorie erfolgreich gelöscht", "OK", {
                duration: 3000,
            });
        }
    }

    refreshData(): void {
        this.store.dispatch(CategoryActions.loadCategories());
        this.snackBar.open("Daten werden aktualisiert...", "OK", {
            duration: 2000,
        });
    }
}
