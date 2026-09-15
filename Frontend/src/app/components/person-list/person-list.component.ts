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
import {MatChipsModule} from "@angular/material/chips";
import {Gender, GenderLabels} from "../../models/gender.model";
import * as PersonActions from "../../store/person/person.actions";
import * as PersonSelectors from "../../store/person/person.selectors";
import * as ParticipantActions from "../../store/participant/participant.actions";
import {PersonWithActiveRaces} from "../../store/person/person.selectors";
import {PersonDialogComponent} from "./person-dialog.component";
import {map, take, takeUntil} from "rxjs/operators";
import {Actions, ofType} from "@ngrx/effects";

@Component({
    selector: "app-person-list",
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
        MatChipsModule,
    ],
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>Personen</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <div class="header-actions">
                    <button
                            mat-raised-button
                            color="primary"
                            (click)="openCreateDialog()"
                    >
                        <mat-icon>add</mat-icon>
                        Neue Person
                    </button>
                    <button
                            mat-raised-button
                            (click)="refreshData()"
                            matTooltip="Daten aktualisieren"
                    >
                        <mat-icon>refresh</mat-icon>
                        Aktualisieren
                    </button>
                    <button
                            mat-raised-button
                            color="warn"
                            [disabled]="!(unusedPersonCount$ | async)"
                            (click)="deleteUnusedPersons()"
                            matTooltip="Löscht alle Personen, die keinem Rennen / Teilnehmer zugewiesen sind"
                    >
                        <mat-icon>delete_sweep</mat-icon>
                        Ungenutzte Personen löschen ({{ unusedPersonCount$ | async }})
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
                        class="person-table"
                        [class.hidden]="loading$ | async"
                >
                    <ng-container matColumnDef="id">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>
                        <td mat-cell *matCellDef="let person">{{ person.id }}</td>
                    </ng-container>

                    <ng-container matColumnDef="lastName">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Nachname</th>
                        <td mat-cell *matCellDef="let person">{{ person.lastName }}</td>
                    </ng-container>

                    <ng-container matColumnDef="firstName">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Vorname</th>
                        <td mat-cell *matCellDef="let person">{{ person.firstName }}</td>
                    </ng-container>

                    <ng-container matColumnDef="birthDate">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Geburtsdatum</th>
                        <td mat-cell *matCellDef="let person">{{ formatRaceDate(person.birthDate) }}</td>
                    </ng-container>

                    <ng-container matColumnDef="gender">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Geschlecht</th>
                        <td mat-cell *matCellDef="let person">{{ getGenderLabel(person.gender) }}</td>
                    </ng-container>

                    <ng-container matColumnDef="externalId">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Externe ID</th>
                        <td mat-cell *matCellDef="let person">{{ person.externalId || '-' }}</td>
                    </ng-container>

                    <ng-container matColumnDef="activeRaces">
                        <th mat-header-cell *matHeaderCellDef>Aktiv bei Rennen</th>
                        <td mat-cell *matCellDef="let person">
                            @if (person.activeRaces.length) {
                                <mat-chip-set>
                                    @for (race of person.activeRaces; track race.id) {
                                        <mat-chip>{{ race.name }}</mat-chip>
                                    }
                                </mat-chip-set>
                            } @else {
                                <span class="no-races">-</span>
                            }
                        </td>
                    </ng-container>

                    <ng-container matColumnDef="actions">
                        <th mat-header-cell *matHeaderCellDef>Aktionen</th>
                        <td mat-cell *matCellDef="let person">
                            <button
                                    mat-icon-button
                                    (click)="openEditDialog(person)"
                                    matTooltip="Bearbeiten"
                            >
                                <mat-icon>edit</mat-icon>
                            </button>
                            <button
                                    mat-icon-button
                                    color="warn"
                                    [disabled]="person.activeRaces.length > 0"
                                    (click)="deletePerson(person)"
                                    [matTooltip]="person.activeRaces.length > 0
                                        ? 'Kann nicht gelöscht werden, solange die Person einem Rennen zugeordnet ist'
                                        : 'Löschen'"
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

          .person-table {
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

          .no-races {
            color: rgba(0, 0, 0, 0.4);
          }

          mat-chip-set {
            max-width: 320px;
          }
        `,
    ],
})
export class PersonListComponent implements AfterViewInit, OnDestroy {
    private store = inject(Store);
    private dialog = inject(MatDialog);
    private snackBar = inject(MatSnackBar);
    private actions$ = inject(Actions);
    private destroy$ = new Subject<void>();

    persons$: Observable<PersonWithActiveRaces[]>;
    loading$: Observable<boolean>;
    unusedPersonCount$: Observable<number>;
    displayedColumns = ["id", "lastName", "firstName", "birthDate", "gender", "externalId", "activeRaces", "actions"];
    dataSource = new MatTableDataSource<PersonWithActiveRaces>([]);
    trackById = (_index: number, person: PersonWithActiveRaces) => person.id;
    private sortInitialized = false;
    private paginatorInitialized = false;

    sort = viewChild.required(MatSort);
    paginator = viewChild.required(MatPaginator);

    constructor() {
        this.persons$ = this.store.select(PersonSelectors.selectPersonsWithActiveRaces);
        this.loading$ = this.store.select(PersonSelectors.selectPersonLoading);
        this.unusedPersonCount$ = this.persons$.pipe(
            map(persons => persons.filter(p => p.activeRaces.length === 0).length)
        );

        this.actions$.pipe(
            ofType(PersonActions.createPersonSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Person erfolgreich erstellt", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(PersonActions.createPersonFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Erstellen der Person: ${error}`, "OK", {duration: 5000});
        });

        this.actions$.pipe(
            ofType(PersonActions.updatePersonSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Person erfolgreich aktualisiert", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(PersonActions.updatePersonFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Aktualisieren der Person: ${error}`, "OK", {duration: 5000});
        });

        this.actions$.pipe(
            ofType(PersonActions.deletePersonSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Person erfolgreich gelöscht", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(PersonActions.deletePersonFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Löschen der Person: ${error}`, "OK", {duration: 5000});
        });

        this.actions$.pipe(
            ofType(PersonActions.deleteUnusedPersonsSuccess),
            takeUntil(this.destroy$),
        ).subscribe(({deletedCount}) => {
            this.snackBar.open(`${deletedCount} ungenutzte Person(en) gelöscht`, "OK", {duration: 3000});
            this.store.dispatch(PersonActions.loadPersons());
        });
        this.actions$.pipe(
            ofType(PersonActions.deleteUnusedPersonsFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Löschen der ungenutzten Personen: ${error}`, "OK", {duration: 5000});
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
        this.store.dispatch(PersonActions.loadPersons());
        // Needed for selectPersonsWithActiveRaces to know which races each person is currently
        // registered for - not loaded by the Person store itself, and this page can now be opened
        // without ever having visited "Teilnehmer" first.
        this.store.dispatch(ParticipantActions.loadParticipants());
        this.persons$
            .pipe(takeUntil(this.destroy$))
            .subscribe((persons) => {
                this.dataSource.data = persons;
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    openCreateDialog(): void {
        const dialogRef = this.dialog.open(PersonDialogComponent, {
            width: "500px",
        });

        dialogRef
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(PersonActions.createPerson({person: result}));
                }
            });
    }

    openEditDialog(person: PersonWithActiveRaces): void {
        const dialogRef = this.dialog.open(PersonDialogComponent, {
            width: "500px",
            data: person,
        });

        dialogRef.afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(
                        PersonActions.updatePerson({id: person.id, person: result}),
                    );
                }
            });
    }

    deletePerson(person: PersonWithActiveRaces): void {
        if (person.activeRaces.length > 0) {
            return;
        }
        if (confirm(`Möchten Sie die Person "${person.lastName} ${person.firstName}" wirklich löschen?`)) {
            this.store.dispatch(PersonActions.deletePerson({id: person.id}));
        }
    }

    deleteUnusedPersons(): void {
        this.unusedPersonCount$.pipe(take(1)).subscribe(count => {
            if (count === 0) {
                return;
            }
            if (confirm(`Möchten Sie wirklich alle ${count} Person(en) löschen, die keinem Rennen / Teilnehmer zugewiesen sind?`)) {
                this.store.dispatch(PersonActions.deleteUnusedPersons());
            }
        });
    }

    refreshData(): void {
        this.store.dispatch(PersonActions.loadPersons());
        this.store.dispatch(ParticipantActions.loadParticipants());
        this.snackBar.open("Daten werden aktualisiert...", "OK", {
            duration: 2000,
        });
    }

    getGenderLabel(gender: Gender | null | undefined): string {
        if (!gender) {
            return "—";
        }
        return GenderLabels[gender] || gender;
    }

    formatRaceDate(dateString: string): string {
        const parts = dateString.split("-");
        if (parts.length === 3) {
            const year = parts[0];
            const month = parts[1];
            const day = parts[2];
            return `${day}.${month}.${year}`;
        }
        return dateString;
    }
}
