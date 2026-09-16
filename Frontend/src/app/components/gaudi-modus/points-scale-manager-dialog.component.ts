import {Component, inject, ChangeDetectionStrategy, OnDestroy, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatDialogRef, MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {Store} from "@ngrx/store";
import {Actions, ofType} from "@ngrx/effects";
import {Observable, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {PointsScale} from "../../models/points-scale.model";
import * as PointsScaleActions from "../../store/points-scale/points-scale.actions";
import * as PointsScaleSelectors from "../../store/points-scale/points-scale.selectors";
import {PointsScaleDialogComponent} from "./points-scale-dialog.component";

@Component({
    selector: "app-points-scale-manager-dialog",
    standalone: true,
    imports: [
        CommonModule,
        MatDialogModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
    ],
    template: `
        <h2 mat-dialog-title>Punkteschemata verwalten</h2>
        <mat-dialog-content>
            @if (loading$ | async) {
                <div class="loading-container">
                    <mat-spinner diameter="32"></mat-spinner>
                </div>
            } @else {
                <table mat-table [dataSource]="(pointsScales$ | async) ?? []" class="scales-table">
                    <ng-container matColumnDef="name">
                        <th mat-header-cell *matHeaderCellDef>Name</th>
                        <td mat-cell *matCellDef="let s">{{ s.name }}</td>
                    </ng-container>

                    <ng-container matColumnDef="points">
                        <th mat-header-cell *matHeaderCellDef>Punkte</th>
                        <td mat-cell *matCellDef="let s">{{ s.points.join(", ") }}</td>
                    </ng-container>

                    <ng-container matColumnDef="actions">
                        <th mat-header-cell *matHeaderCellDef></th>
                        <td mat-cell *matCellDef="let s">
                            <button mat-icon-button (click)="edit(s)" matTooltip="Bearbeiten">
                                <mat-icon>edit</mat-icon>
                            </button>
                            <button mat-icon-button color="warn" (click)="delete(s)" matTooltip="Löschen">
                                <mat-icon>delete</mat-icon>
                            </button>
                        </td>
                    </ng-container>

                    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                    <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
                </table>
            }
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button (click)="createNew()">
                <mat-icon>add</mat-icon>
                Neu
            </button>
            <button mat-raised-button color="primary" (click)="close()">Schließen</button>
        </mat-dialog-actions>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
          .scales-table {
            width: 100%;
            min-width: 420px;
          }

          .loading-container {
            display: flex;
            justify-content: center;
            padding: 24px;
          }
        `,
    ],
})
export class PointsScaleManagerDialogComponent implements OnInit, OnDestroy {
    private dialogRef = inject(MatDialogRef<PointsScaleManagerDialogComponent>);
    private dialog = inject(MatDialog);
    private store = inject(Store);
    private actions$ = inject(Actions);
    private snackBar = inject(MatSnackBar);
    private destroy$ = new Subject<void>();

    pointsScales$: Observable<PointsScale[]> = this.store.select(PointsScaleSelectors.selectAllPointsScales);
    loading$: Observable<boolean> = this.store.select(PointsScaleSelectors.selectPointsScaleLoading);
    displayedColumns = ["name", "points", "actions"];

    ngOnInit(): void {
        this.store.dispatch(PointsScaleActions.loadPointsScales());

        this.actions$.pipe(
            ofType(PointsScaleActions.createPointsScaleSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Punkteschema erfolgreich erstellt", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(PointsScaleActions.createPointsScaleFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(error, "OK", {duration: 5000, panelClass: "error-snackbar"});
        });

        this.actions$.pipe(
            ofType(PointsScaleActions.updatePointsScaleSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Punkteschema erfolgreich aktualisiert", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(PointsScaleActions.updatePointsScaleFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(error, "OK", {duration: 5000, panelClass: "error-snackbar"});
        });

        this.actions$.pipe(
            ofType(PointsScaleActions.deletePointsScaleSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Punkteschema erfolgreich gelöscht", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(PointsScaleActions.deletePointsScaleFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(error, "OK", {duration: 5000, panelClass: "error-snackbar"});
        });
        this.actions$.pipe(
            ofType(PointsScaleActions.deletePointsScaleConflict),
            takeUntil(this.destroy$),
        ).subscribe(({id, message}) => {
            // Backend rejects with 409 when a Gaudi-Modus still references this scale unless
            // force=true - surface its message (which already asks "delete anyway?") as a second
            // confirmation instead of a dead-end error.
            if (confirm(message)) {
                this.store.dispatch(PointsScaleActions.deletePointsScale({id, force: true}));
            }
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    createNew(): void {
        this.dialog.open(PointsScaleDialogComponent, {width: "480px"})
            .afterClosed()
            .subscribe(result => {
                if (!result) {
                    return;
                }
                this.store.dispatch(PointsScaleActions.createPointsScale({pointsScale: result}));
            });
    }

    edit(scale: PointsScale): void {
        this.dialog.open(PointsScaleDialogComponent, {width: "480px", data: scale})
            .afterClosed()
            .subscribe(result => {
                if (!result) {
                    return;
                }
                this.store.dispatch(PointsScaleActions.updatePointsScale({id: scale.id, pointsScale: result}));
            });
    }

    delete(scale: PointsScale): void {
        if (!confirm(`Punkteschema "${scale.name}" wirklich löschen?`)) {
            return;
        }
        this.store.dispatch(PointsScaleActions.deletePointsScale({id: scale.id}));
    }

    close(): void {
        this.dialogRef.close();
    }
}
