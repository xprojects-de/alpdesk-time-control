import {Component, OnInit, inject, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {Race, RaceLiveLink} from '../../models/race.model';
import {RaceService} from '../../services/race.service';

export interface RaceLiveLinksDialogData {
    race: Race;
}

/** Lists every public live-results view for a race (menu page, fixed top-level views, one per
 * category) as ready-to-open/copy links - fetched entirely from the backend (RaceService.getLiveLinks)
 * so this dialog never has to know or reconstruct any part of a live-results URL itself. */
@Component({
    selector: 'app-race-live-links-dialog',
    standalone: true,
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
    ],
    template: `
        <h2 mat-dialog-title>Live-Ergebnisse: {{ data.race.name }}</h2>
        <mat-dialog-content>
            @if (loading) {
                <div class="spinner-row">
                    <mat-spinner diameter="32"></mat-spinner>
                </div>
            } @else {
                <mat-list>
                    @for (link of links; track link.path) {
                        <mat-list-item>
                            <span matListItemTitle>{{ link.label }}</span>
                            <span matListItemLine class="url">{{ absoluteUrl(link) }}</span>
                            <div matListItemMeta>
                                <button mat-icon-button (click)="open(link)" matTooltip="Öffnen">
                                    <mat-icon>open_in_new</mat-icon>
                                </button>
                                <button mat-icon-button (click)="copy(link)" matTooltip="Kopieren">
                                    <mat-icon>content_copy</mat-icon>
                                </button>
                            </div>
                        </mat-list-item>
                    }
                </mat-list>
            }
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button mat-dialog-close>Schließen</button>
        </mat-dialog-actions>
    `,
    styles: [`
        .spinner-row {
            display: flex;
            justify-content: center;
            padding: 24px;
        }

        .url {
            color: rgba(0, 0, 0, 0.6);
            font-size: 0.85em;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        mat-dialog-content {
            min-width: 420px;
            max-width: 80vw;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaceLiveLinksDialogComponent implements OnInit {
    private raceService = inject(RaceService);
    private snackBar = inject(MatSnackBar);
    private cdr = inject(ChangeDetectorRef);
    dialogRef = inject(MatDialogRef<RaceLiveLinksDialogComponent>);
    data = inject<RaceLiveLinksDialogData>(MAT_DIALOG_DATA);

    loading = true;
    links: RaceLiveLink[] = [];

    ngOnInit(): void {
        this.raceService.getLiveLinks(this.data.race.id).subscribe({
            next: (links) => {
                this.links = links;
                this.loading = false;
                this.cdr.markForCheck();
            },
            error: () => {
                this.loading = false;
                this.snackBar.open('Live-Links konnten nicht geladen werden', 'OK', {duration: 3000});
                this.cdr.markForCheck();
            },
        });
    }

    absoluteUrl(link: RaceLiveLink): string {
        return this.raceService.toAbsoluteUrl(link.path);
    }

    open(link: RaceLiveLink): void {
        window.open(this.absoluteUrl(link), '_blank');
    }

    async copy(link: RaceLiveLink): Promise<void> {
        try {
            await navigator.clipboard.writeText(this.absoluteUrl(link));
            this.snackBar.open(`"${link.label}"-Link kopiert`, 'OK', {duration: 2000});
        } catch {
            // Clipboard write can fail (permission denied, insecure context, ...) - the user
            // still needs feedback instead of a click that silently does nothing.
            this.snackBar.open('Kopieren nicht möglich - Link steht oben zum manuellen Markieren', 'OK', {duration: 4000});
        }
    }
}
