import {Component, inject, ChangeDetectionStrategy, ChangeDetectorRef, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialogRef, MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {PointsScale} from "../../models/points-scale.model";
import {PointsScaleService} from "../../services/points-scale.service";
import {PointsScaleDialogComponent} from "./points-scale-dialog.component";
import {extractErrorMessage} from "../../utils/http-error.util";

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
            @if (loading) {
                <div class="loading-container">
                    <mat-spinner diameter="32"></mat-spinner>
                </div>
            } @else {
                <table mat-table [dataSource]="scales" class="scales-table">
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
export class PointsScaleManagerDialogComponent implements OnInit {
    private dialogRef = inject(MatDialogRef<PointsScaleManagerDialogComponent>);
    private dialog = inject(MatDialog);
    private pointsScaleService = inject(PointsScaleService);
    private snackBar = inject(MatSnackBar);
    private cdr = inject(ChangeDetectorRef);

    scales: PointsScale[] = [];
    loading = false;
    displayedColumns = ["name", "points", "actions"];

    ngOnInit(): void {
        this.load();
    }

    createNew(): void {
        this.dialog.open(PointsScaleDialogComponent, {width: "480px"})
            .afterClosed()
            .subscribe(result => {
                if (!result) {
                    return;
                }
                this.pointsScaleService.create(result).subscribe({
                    next: () => {
                        this.snackBar.open("Punkteschema erfolgreich erstellt", "OK", {duration: 3000});
                        this.load();
                    },
                    error: err => this.showError(err, "Punkteschema konnte nicht erstellt werden"),
                });
            });
    }

    edit(scale: PointsScale): void {
        this.dialog.open(PointsScaleDialogComponent, {width: "480px", data: scale})
            .afterClosed()
            .subscribe(result => {
                if (!result) {
                    return;
                }
                this.pointsScaleService.update(scale.id, result).subscribe({
                    next: () => {
                        this.snackBar.open("Punkteschema erfolgreich aktualisiert", "OK", {duration: 3000});
                        this.load();
                    },
                    error: err => this.showError(err, "Punkteschema konnte nicht aktualisiert werden"),
                });
            });
    }

    delete(scale: PointsScale, force = false): void {
        if (!force && !confirm(`Punkteschema "${scale.name}" wirklich löschen?`)) {
            return;
        }
        this.pointsScaleService.delete(scale.id, force).subscribe({
            next: () => {
                this.snackBar.open("Punkteschema erfolgreich gelöscht", "OK", {duration: 3000});
                this.load();
            },
            error: (err: HttpErrorResponse) => {
                // Backend rejects with 409 when a Gaudi-Modus still references this scale unless
                // force=true - surface its message (which already asks "delete anyway?") as a
                // second confirmation instead of a dead-end error.
                if (err.status === 409 && confirm(extractErrorMessage(err, "Punkteschema wird noch verwendet."))) {
                    this.delete(scale, true);
                    return;
                }
                this.showError(err, "Punkteschema konnte nicht gelöscht werden");
            },
        });
    }

    close(): void {
        this.dialogRef.close();
    }

    private load(): void {
        this.loading = true;
        this.pointsScaleService.getAll().subscribe({
            next: scales => {
                this.scales = scales;
                this.loading = false;
                this.cdr.markForCheck();
            },
            error: err => {
                this.loading = false;
                this.cdr.markForCheck();
                this.showError(err, "Punkteschemata konnten nicht geladen werden");
            },
        });
    }

    private showError(err: unknown, fallback: string): void {
        this.snackBar.open(extractErrorMessage(err, fallback), "OK", {duration: 5000, panelClass: "error-snackbar"});
    }
}
