import {Component, OnDestroy, OnInit, viewChild, inject, ChangeDetectionStrategy} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Store} from "@ngrx/store";
import {Observable, Subject, combineLatest, firstValueFrom} from "rxjs";
import {map, takeUntil} from "rxjs/operators";
import {HasUnsavedChanges} from "../../guards/unsaved-changes.guard";
import {
    DragDropModule,
    CdkDragDrop,
    moveItemInArray,
    transferArrayItem,
} from "@angular/cdk/drag-drop";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {Actions, ofType} from "@ngrx/effects";
import {Participant} from "../../models/participant.model";
import {formatPersonName} from "../../utils/person-name.util";
import {Gender} from "../../models/gender.model";
import {Race} from "../../models/race.model";
import {StartGroupTemplate, StartGroupAssignmentEntry} from "../../models/start-group.model";
import * as ParticipantActions from "../../store/participant/participant.actions";
import * as ParticipantSelectors from "../../store/participant/participant.selectors";
import * as RaceActions from "../../store/race/race.actions";
import * as RaceSelectors from "../../store/race/race.selectors";
import * as StartGroupTemplateActions from "../../store/start-group-template/start-group-template.actions";
import * as StartGroupTemplateSelectors from "../../store/start-group-template/start-group-template.selectors";
import {ConfirmDialogComponent} from "../shared/confirm-dialog/confirm-dialog.component";
import {StartGroupCopyDialogComponent, StartGroupCopyDialogData} from "./start-group-copy-dialog.component";

interface DraftEntry {
    participant: Participant;
    startGroupId: number | null;
    startSequence: number | null;
}

interface BoardColumn {
    id: number | null;
    label: string;
    color: string;
    target: number | null;
    entries: DraftEntry[];
}

@Component({
    selector: "app-start-group-board",
    standalone: true,
    imports: [
        CommonModule,
        DragDropModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        MatFormFieldModule,
        MatMenuModule,
        MatTooltipModule,
        MatDialogModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
    ],
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>Startgruppen-Zuordnung</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <div class="filter-section">
                    <mat-form-field appearance="outline">
                        <mat-label>Rennen</mat-label>
                        <mat-select #raceSelect="matSelect" [value]="selectedRaceId$ | async"
                                    (selectionChange)="onRaceChange($event.value)">
                            <mat-option [value]="null">Rennen auswählen...</mat-option>
                            @for (race of races$ | async; track race.id) {
                                <mat-option [value]="race.id">{{ race.name }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>

                @if ((selectedRaceId$ | async) === null) {
                    <p class="hint">Bitte ein Rennen auswählen.</p>
                } @else {
                    <div class="header-actions">
                        <mat-form-field appearance="outline" class="template-select">
                            <mat-label>Aktive Gruppen</mat-label>
                            <mat-select [value]="activeTemplateIds" multiple
                                        (selectionChange)="onActiveTemplatesChange($event.value)">
                                @for (template of templates$ | async; track template.id) {
                                    <mat-option [value]="template.id">
                                        <span class="option-dot" [style.background]="template.color"></span>
                                        {{ template.label }}
                                    </mat-option>
                                }
                            </mat-select>
                            @if ((templates$ | async)?.length === 0) {
                                <mat-hint>Keine Vorlagen vorhanden - unter "Startgruppen" anlegen</mat-hint>
                            }
                        </mat-form-field>

                        <button mat-raised-button [matMenuTriggerFor]="autoMenu"
                                [disabled]="groupColumns.length === 0"
                                matTooltip="Teilnehmer automatisch auf die aktiven Gruppen verteilen (überschreibt die aktuelle Zuordnung)">
                            <mat-icon>auto_fix_high</mat-icon>
                            Automatisch vorschlagen
                            <mat-icon>arrow_drop_down</mat-icon>
                        </button>
                        <mat-menu #autoMenu="matMenu">
                            <button mat-menu-item (click)="confirmAutoSuggest('blocks')">
                                <span>Nach Startnummer (Blöcke)</span>
                            </button>
                            <button mat-menu-item (click)="confirmAutoSuggest('genderAge')">
                                <span>Nach Geschlecht und Alter</span>
                            </button>
                            <button mat-menu-item (click)="confirmAutoSuggest('ageGroupGender')">
                                <span>Nach Altersklasse und Geschlecht</span>
                            </button>
                            <button mat-menu-item (click)="confirmAutoSuggest('club')">
                                <span>Nach Verein</span>
                            </button>
                            <button mat-menu-item (click)="confirmAutoSuggest('clubShuffled')">
                                <span>Nach Verein (zufällig gewürfelt)</span>
                            </button>
                            <button mat-menu-item (click)="confirmAutoSuggest('category')">
                                <span>Nach Kategorie</span>
                            </button>
                        </mat-menu>

                        <button mat-raised-button (click)="openCopyDialog()"
                                [disabled]="dirty"
                                [matTooltip]="dirty ? 'Erst speichern, dann übernehmen' : 'Gespeicherte Zuordnung in andere Rennen übernehmen'">
                            <mat-icon>content_copy</mat-icon>
                            Von Rennen übernehmen
                        </button>

                        <button mat-raised-button (click)="generateRaceNumbers()"
                                [disabled]="dirty || hasResults"
                                [matTooltip]="dirty ? 'Erst speichern' : hasResults ? 'Das Rennen hat bereits Ergebnisse' : 'Startnummern aus der Gruppenreihenfolge vergeben'">
                            <mat-icon>format_list_numbered</mat-icon>
                            Startnummern aus Gruppierung vergeben
                        </button>

                        <span class="spacer"></span>

                        @if (dirty) {
                            <span class="dirty-hint">Ungespeicherte Änderungen</span>
                        }
                        <button mat-raised-button color="primary" (click)="save()" [disabled]="!dirty || (saving$ | async)">
                            @if (saving$ | async) {
                                <mat-spinner diameter="20" style="display: inline-block; margin-right: 8px;"></mat-spinner>
                            } @else {
                                <mat-icon>save</mat-icon>
                            }
                            Speichern
                        </button>
                    </div>

                    <div class="column-headers" cdkDropList cdkDropListOrientation="horizontal"
                         [cdkDropListData]="groupColumns" (cdkDropListDropped)="onColumnDrop($event)">
                        <div class="column-header unassigned">
                            {{ unassignedColumn.label }} ({{ unassignedColumn.entries.length }})
                        </div>
                        @for (column of groupColumns; track column.id) {
                            <div class="column-header" cdkDrag [style.borderTopColor]="column.color">
                                <span class="dot" [style.background]="column.color"></span>
                                {{ column.label }}
                                <span [class.mismatch]="column.entries.length !== column.target">
                                    ({{ column.entries.length }} / {{ column.target }})
                                </span>
                            </div>
                        }
                    </div>

                    <div class="board">
                        <div class="column">
                            <div class="column-list" cdkDropList
                                 [cdkDropListData]="unassignedColumn.entries"
                                 [cdkDropListConnectedTo]="allListIds"
                                 [id]="listId(null)"
                                 (cdkDropListDropped)="onCardDrop($event, null)">
                                @for (entry of unassignedColumn.entries; track entry.participant.id) {
                                    <div class="card" cdkDrag>
                                        <span class="grip" cdkDragHandle>
                                            <mat-icon>drag_indicator</mat-icon>
                                        </span>
                                        <span class="bib">{{ entry.participant.raceNumber ?? '-' }}</span>
                                        <div class="name-meta">
                                            <div class="name">{{ personName(entry.participant) }}</div>
                                            <div class="meta">{{ participantMeta(entry.participant) }}</div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        @for (column of groupColumns; track column.id) {
                            <div class="column">
                                <div class="column-list" cdkDropList
                                     [cdkDropListData]="column.entries"
                                     [cdkDropListConnectedTo]="allListIds"
                                     [id]="listId(column.id)"
                                     (cdkDropListDropped)="onCardDrop($event, column.id)">
                                    @for (entry of column.entries; track entry.participant.id) {
                                        <div class="card" cdkDrag>
                                            <span class="grip" cdkDragHandle>
                                                <mat-icon>drag_indicator</mat-icon>
                                            </span>
                                            <span class="bib">{{ entry.participant.raceNumber ?? '-' }}</span>
                                            <div class="name-meta">
                                                <div class="name">{{ personName(entry.participant) }}</div>
                                                <div class="meta">{{ participantMeta(entry.participant) }}</div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                }
            </mat-card-content>
        </mat-card>
    `,
    // Eager on purpose: the board state (groupColumns, dirty, hasResults, ...) is plain fields
    // mutated from store subscriptions and dialog callbacks, which OnPush wouldn't pick up.
    changeDetection: ChangeDetectionStrategy.Eager,
    host: {'(window:beforeunload)': 'onBeforeUnload($event)'},
    styles: [
        `
          mat-card {
            margin: 20px;
          }

          .filter-section {
            margin-top: 20px;
            margin-bottom: 12px;
            display: flex;
            gap: 12px;
            align-items: center;
          }

          .hint {
            color: rgba(0, 0, 0, 0.6);
          }

          .header-actions {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 16px;
          }

          .template-select {
            min-width: 240px;
          }

          .option-dot, .dot {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 6px;
            vertical-align: middle;
          }

          .spacer {
            flex: 1 1 auto;
          }

          .dirty-hint {
            color: #b26a00;
            font-size: 13px;
          }

          .column-headers {
            display: flex;
            gap: 10px;
            margin-bottom: 6px;
          }

          .column-header {
            flex: 1 1 0;
            min-width: 160px;
            background: #f5f5f5;
            border-top: 4px solid transparent;
            border-radius: 4px;
            padding: 8px 10px;
            font-weight: 500;
            font-size: 13px;
            cursor: grab;
          }

          .column-header.unassigned {
            cursor: default;
            background: #eeeeee;
          }

          .column-header .mismatch {
            color: #b26a00;
            font-weight: 400;
          }

          .board {
            display: flex;
            gap: 10px;
            align-items: flex-start;
          }

          .column {
            flex: 1 1 0;
            min-width: 160px;
          }

          .column-list {
            display: flex;
            flex-direction: column;
            gap: 6px;
            min-height: 60px;
            background: #fafafa;
            border-radius: 4px;
            padding: 6px;
          }

          .card {
            display: flex;
            align-items: center;
            gap: 6px;
            background: white;
            border: 1px solid rgba(0, 0, 0, 0.12);
            border-radius: 4px;
            padding: 6px 8px;
            cursor: grab;
          }

          .grip {
            display: flex;
            color: rgba(0, 0, 0, 0.4);
          }

          .bib {
            font-weight: 500;
            font-size: 12px;
            min-width: 22px;
            color: rgba(0, 0, 0, 0.6);
          }

          .name-meta {
            min-width: 0;
            overflow: hidden;
          }

          .name {
            font-size: 13px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .meta {
            font-size: 11px;
            color: rgba(0, 0, 0, 0.5);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .cdk-drag-preview {
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
          }

          .cdk-drag-placeholder {
            opacity: 0.3;
          }
        `,
    ],
})
export class StartGroupBoardComponent implements OnInit, OnDestroy, HasUnsavedChanges {
    private store = inject(Store);
    private dialog = inject(MatDialog);
    private snackBar = inject(MatSnackBar);
    private actions$ = inject(Actions);
    private destroy$ = new Subject<void>();

    selectedRaceId$: Observable<number | null>;
    races$: Observable<Race[]>;
    templates$: Observable<StartGroupTemplate[]>;
    saving$: Observable<boolean>;

    unassignedColumn: BoardColumn = {id: null, label: 'Nicht zugeordnet', color: '#9e9e9e', target: null, entries: []};
    groupColumns: BoardColumn[] = [];
    activeTemplateIds: number[] = [];
    allListIds: string[] = [];
    dirty = false;
    hasResults = false;

    raceSelect = viewChild<MatSelect>('raceSelect');

    private currentRaceId: number | null = null;
    private latestTemplates: StartGroupTemplate[] = [];

    constructor() {
        this.selectedRaceId$ = this.store.select(RaceSelectors.selectSelectedRaceId);
        this.races$ = this.store.select(RaceSelectors.selectAllRaces);
        this.templates$ = this.store.select(StartGroupTemplateSelectors.selectAllStartGroupTemplates);
        this.saving$ = this.store.select(ParticipantSelectors.selectParticipantLoading);

        this.actions$.pipe(
            ofType(ParticipantActions.saveStartGroupAssignmentSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.dirty = false;
            this.snackBar.open("Startgruppen-Zuordnung gespeichert", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(ParticipantActions.saveStartGroupAssignmentFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Speichern: ${error}`, "OK", {duration: 5000});
        });
        this.actions$.pipe(
            ofType(ParticipantActions.copyStartGroupAssignmentSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Zuordnung übernommen", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(ParticipantActions.copyStartGroupAssignmentFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER beim Übernehmen: ${error}`, "OK", {duration: 5000});
        });
        this.actions$.pipe(
            ofType(ParticipantActions.generateRaceNumbersFromStartGroupsSuccess),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.snackBar.open("Startnummern vergeben", "OK", {duration: 3000});
        });
        this.actions$.pipe(
            ofType(ParticipantActions.generateRaceNumbersFromStartGroupsFailure),
            takeUntil(this.destroy$),
        ).subscribe(({error}) => {
            this.snackBar.open(`FEHLER: ${error}`, "OK", {duration: 5000});
        });
    }

    confirmDiscardChanges(): boolean | Observable<boolean> {
        if (!this.dirty) {
            return true;
        }
        return this.dialog.open(ConfirmDialogComponent, {
            width: '450px',
            data: {
                message: 'Es gibt ungespeicherte Änderungen an der Startgruppen-Zuordnung. Beim Verlassen der Seite gehen sie verloren. Fortfahren?',
                confirmLabel: 'Verlassen',
            },
        }).afterClosed().pipe(map(confirmed => !!confirmed));
    }

    onBeforeUnload(event: BeforeUnloadEvent): void {
        if (this.dirty) {
            event.preventDefault();
        }
    }

    ngOnInit(): void {
        this.store.dispatch(RaceActions.loadRaces());
        this.store.dispatch(StartGroupTemplateActions.loadStartGroupTemplates());
        this.store.dispatch(ParticipantActions.loadParticipants());

        combineLatest([
            this.selectedRaceId$,
            this.store.select(ParticipantSelectors.selectFilteredParticipants),
            this.templates$,
        ]).pipe(takeUntil(this.destroy$)).subscribe(([raceId, participants, templates]) => {
            this.latestTemplates = templates;
            if (raceId !== this.currentRaceId) {
                this.currentRaceId = raceId;
                this.rebuildFromParticipants(participants, templates);
                return;
            }
            if (!this.dirty) {
                this.rebuildFromParticipants(participants, templates);
            }
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onRaceChange(raceId: number | null): void {
        if (!this.dirty) {
            this.store.dispatch(RaceActions.selectRace({id: raceId}));
            return;
        }
        this.dialog.open(ConfirmDialogComponent, {
            width: '450px',
            data: {
                message: 'Es gibt ungespeicherte Änderungen an der Startgruppen-Zuordnung. Beim Wechsel des Rennens gehen sie verloren. Fortfahren?',
                confirmLabel: 'Wechseln',
            },
        }).afterClosed().pipe(takeUntil(this.destroy$)).subscribe(confirmed => {
            if (confirmed) {
                this.store.dispatch(RaceActions.selectRace({id: raceId}));
            } else {
                // mat-select already updated its own displayed selection to the clicked race on
                // the (selectionChange) event, independently of the [value] binding. Since we
                // never dispatch here, selectedRaceId$ never re-emits, so the binding's own
                // value/reference is unchanged from Angular's point of view and it wouldn't push
                // a "new" value back into mat-select - writeValue bypasses that and forces it to
                // redisplay the still-current race directly.
                this.raceSelect()?.writeValue(this.currentRaceId ?? null);
            }
        });
    }

    personName(participant: Participant): string {
        return formatPersonName(participant.person, '-');
    }

    participantMeta(participant: Participant): string {
        const ageGroup = participant.ageGroup?.name;
        const team = participant.team?.name;
        if (ageGroup && team) {
            return `${ageGroup} · ${team}`;
        }
        return ageGroup || team || '';
    }

    listId(templateId: number | null): string {
        return `start-group-column-${templateId ?? 'unassigned'}`;
    }

    private rebuildFromParticipants(participants: Participant[], templates: StartGroupTemplate[]): void {
        this.hasResults = participants.some(p => p.durationMs != null || p.measuredAt != null);

        const usedTemplateIds = new Set<number>();
        // Reconstructs each group's display order from the actual per-race startSequence already
        // saved for it (its lowest member's sequence), not the template's global position - that
        // position is shared across every race, so using it here would silently discard a
        // per-race column reorder on the next load (and re-save it away entirely on the next
        // "Speichern"). Falls back to position only while a group has no sequence yet at all.
        const minSequenceByTemplateId = new Map<number, number>();
        for (const p of participants) {
            if (p.startGroup) {
                usedTemplateIds.add(p.startGroup.id);
                if (p.startSequence != null) {
                    const current = minSequenceByTemplateId.get(p.startGroup.id);
                    if (current === undefined || p.startSequence < current) {
                        minSequenceByTemplateId.set(p.startGroup.id, p.startSequence);
                    }
                }
            }
        }
        // Sorted after every real sequence number (a race realistically never has anywhere near
        // 1,000,000 participants) while staying a precise integer, unlike offsetting
        // Number.MAX_SAFE_INTEGER itself.
        const NO_SEQUENCE_YET = 1_000_000;
        const activeTemplates = templates
            .filter(t => usedTemplateIds.has(t.id))
            .sort((a, b) =>
                (minSequenceByTemplateId.get(a.id) ?? NO_SEQUENCE_YET + a.position)
                - (minSequenceByTemplateId.get(b.id) ?? NO_SEQUENCE_YET + b.position));

        this.groupColumns = activeTemplates.map(t => this.toColumn(t));
        this.unassignedColumn = {id: null, label: 'Nicht zugeordnet', color: '#9e9e9e', target: null, entries: []};

        for (const p of participants) {
            const entry: DraftEntry = {
                participant: p,
                startGroupId: p.startGroup?.id ?? null,
                startSequence: p.startSequence ?? null,
            };
            const column = entry.startGroupId !== null
                ? this.groupColumns.find(c => c.id === entry.startGroupId)
                : undefined;
            // A group whose template isn't (or no longer) loaded lands in "Nicht zugeordnet" -
            // its id must go too, or the next save would write the stale group back.
            entry.startGroupId = column?.id ?? null;
            (column ?? this.unassignedColumn).entries.push(entry);
        }

        const bySeqOrBib = (a: DraftEntry, b: DraftEntry) =>
            (a.startSequence ?? a.participant.raceNumber ?? 0) - (b.startSequence ?? b.participant.raceNumber ?? 0);
        this.groupColumns.forEach(c => c.entries.sort(bySeqOrBib));
        this.unassignedColumn.entries.sort(bySeqOrBib);

        this.activeTemplateIds = this.groupColumns.map(c => c.id as number);
        this.updateAllListIds();
        this.recomputeTargets();
        this.recomputeSequences();
        this.dirty = false;
    }

    private toColumn(template: StartGroupTemplate): BoardColumn {
        return {id: template.id, label: template.label, color: template.color, target: null, entries: []};
    }

    private updateAllListIds(): void {
        this.allListIds = [this.listId(null), ...this.groupColumns.map(c => this.listId(c.id))];
    }

    onActiveTemplatesChange(newIds: number[]): void {
        const removed = this.groupColumns.filter(c => !newIds.includes(c.id as number));
        for (const col of removed) {
            col.entries.forEach(e => e.startGroupId = null);
            this.unassignedColumn.entries.push(...col.entries);
        }
        this.groupColumns = this.groupColumns.filter(c => newIds.includes(c.id as number));

        const added = newIds.filter(id => !this.groupColumns.some(c => c.id === id));
        for (const id of added) {
            const template = this.latestTemplates.find(t => t.id === id);
            if (template) {
                this.groupColumns.push(this.toColumn(template));
            }
        }

        this.activeTemplateIds = newIds;
        this.updateAllListIds();
        this.recomputeTargets();
        this.recomputeSequences();
        this.dirty = true;
    }

    onColumnDrop(event: CdkDragDrop<BoardColumn[]>): void {
        moveItemInArray(this.groupColumns, event.previousIndex, event.currentIndex);
        this.recomputeSequences();
        this.dirty = true;
    }

    onCardDrop(event: CdkDragDrop<DraftEntry[]>, targetGroupId: number | null): void {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            event.container.data[event.currentIndex].startGroupId = targetGroupId;
        }
        this.recomputeSequences();
        this.dirty = true;
    }

    private recomputeTargets(): void {
        const total = this.groupColumns.reduce((sum, c) => sum + c.entries.length, 0) + this.unassignedColumn.entries.length;
        const n = this.groupColumns.length;
        if (n === 0) {
            return;
        }
        const base = Math.floor(total / n);
        const remainder = total % n;
        this.groupColumns.forEach((c, i) => c.target = base + (i < remainder ? 1 : 0));
    }

    private recomputeSequences(): void {
        let sequence = 1;
        for (const column of this.groupColumns) {
            for (const entry of column.entries) {
                entry.startSequence = sequence++;
            }
        }
        // Once any group exists, unassigned participants continue the sequence after the last
        // group instead of falling back to their bib - otherwise the backend's start order
        // (startSequence ?? raceNumber) would interleave bibs with the groups' 1..n sequence.
        const hasGroups = this.groupColumns.length > 0;
        for (const entry of this.unassignedColumn.entries) {
            entry.startSequence = hasGroups ? sequence++ : null;
        }
    }

    confirmAutoSuggest(mode: 'blocks' | 'genderAge' | 'ageGroupGender' | 'club' | 'clubShuffled' | 'category'): void {
        this.dialog.open(ConfirmDialogComponent, {
            width: '450px',
            data: {
                message: 'Die aktuelle Zuordnung wird überschrieben und neu auf die aktiven Gruppen verteilt. Fortfahren?',
                confirmLabel: 'Verteilen',
            },
        }).afterClosed().pipe(takeUntil(this.destroy$)).subscribe(confirmed => {
            if (!confirmed) {
                return;
            }
            switch (mode) {
                case 'blocks':
                    this.applyAutoSuggestByRaceNumberBlocks();
                    break;
                case 'genderAge':
                    this.applyAutoSuggestByGenderAgeBlocks();
                    break;
                case 'ageGroupGender':
                    this.applyAutoSuggestByAgeGroupGenderBlocks();
                    break;
                case 'club':
                    this.applyAutoSuggestByClubBlocks();
                    break;
                case 'clubShuffled':
                    this.applyAutoSuggestByClubShuffledBlocks();
                    break;
                case 'category':
                    this.applyAutoSuggestByCategoryBlocks();
                    break;
            }
        });
    }

    private allEntries(): DraftEntry[] {
        return [...this.unassignedColumn.entries, ...this.groupColumns.flatMap(c => c.entries)];
    }

    private static readonly GENDER_RANK = (participant: Participant): number =>
        participant.person?.gender === Gender.FEMALE ? 0 : 1;

    private applyAutoSuggestByRaceNumberBlocks(): void {
        this.applyAutoSuggestBlocks((a, b) => (a.participant.raceNumber ?? 0) - (b.participant.raceNumber ?? 0));
    }

    /**
     * Female block first, then male block (the female-before-male convention used throughout the
     * backend); within each gender block, youngest first - birthDate is a "yyyy-MM-dd" string, so
     * a later (larger) date sorts first via descending string comparison.
     */
    private applyAutoSuggestByGenderAgeBlocks(): void {
        this.applyAutoSuggestBlocks((a, b) => {
            const genderDiff = StartGroupBoardComponent.GENDER_RANK(a.participant) - StartGroupBoardComponent.GENDER_RANK(b.participant);
            if (genderDiff !== 0) {
                return genderDiff;
            }
            const ad = a.participant.person?.birthDate ?? '';
            const bd = b.participant.person?.birthDate ?? '';
            return bd.localeCompare(ad);
        });
    }

    /**
     * Youngest age group first (higher birthYearTo sorts first); within each age group, girls
     * block then boys block.
     */
    private applyAutoSuggestByAgeGroupGenderBlocks(): void {
        this.applyAutoSuggestBlocks((a, b) => {
            const ay = a.participant.ageGroup?.birthYearTo ?? -Infinity;
            const by = b.participant.ageGroup?.birthYearTo ?? -Infinity;
            if (ay !== by) {
                return by - ay;
            }
            return StartGroupBoardComponent.GENDER_RANK(a.participant) - StartGroupBoardComponent.GENDER_RANK(b.participant);
        });
    }

    /**
     * Sorted by club name alphabetically (participants without a club last) - contiguous blocks
     * keep every club's members together instead of spreading them across groups.
     */
    private applyAutoSuggestByClubBlocks(): void {
        this.applyAutoSuggestBlocks((a, b) => this.compareByClubName(a, b, (x, y) => x.localeCompare(y)));
    }

    /**
     * Same club-block shape as above, but the block order itself is randomized per club instead
     * of alphabetical - drawn once per invocation so every club's members still land contiguously.
     */
    private applyAutoSuggestByClubShuffledBlocks(): void {
        const clubNames = [...new Set(this.allEntries().map(e => e.participant.team?.name).filter((n): n is string => !!n))];
        for (let i = clubNames.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [clubNames[i], clubNames[j]] = [clubNames[j], clubNames[i]];
        }
        const order = new Map(clubNames.map((name, index) => [name, index]));
        this.applyAutoSuggestBlocks((a, b) => this.compareByClubName(a, b, (x, y) => (order.get(x) ?? Infinity) - (order.get(y) ?? Infinity)));
    }

    private compareByClubName(a: DraftEntry, b: DraftEntry, compare: (x: string, y: string) => number): number {
        const ac = a.participant.team?.name;
        const bc = b.participant.team?.name;
        // Falls back to raceNumber so two participants of the same club (or both without one) get
        // a deterministic order instead of keeping whatever position they happened to be in on the
        // board before this sort - otherwise re-running the same suggestion after an unrelated
        // board change (a manual drag, a different auto-suggest) would reshuffle same-club members
        // relative to each other for no reason.
        if (ac == null && bc == null) return (a.participant.raceNumber ?? 0) - (b.participant.raceNumber ?? 0);
        if (ac == null) return 1;
        if (bc == null) return -1;
        const byName = compare(ac, bc);
        return byName !== 0 ? byName : (a.participant.raceNumber ?? 0) - (b.participant.raceNumber ?? 0);
    }

    /**
     * Sorted by category name (participants without a category last) - contiguous blocks keep
     * every category's field together in one group instead of spreading it evenly (round-robin)
     * across all active groups.
     */
    private applyAutoSuggestByCategoryBlocks(): void {
        this.applyAutoSuggestBlocks((a, b) => {
            const ac = a.participant.category?.name;
            const bc = b.participant.category?.name;
            if (ac !== bc) {
                if (ac == null) return 1;
                if (bc == null) return -1;
                return ac.localeCompare(bc);
            }
            return (a.participant.raceNumber ?? 0) - (b.participant.raceNumber ?? 0);
        });
    }

    private applyAutoSuggestBlocks(comparator: (a: DraftEntry, b: DraftEntry) => number): void {
        const sorted = this.allEntries().sort(comparator);
        this.distributeContiguous(sorted);
    }

    private distributeContiguous(sorted: DraftEntry[]): void {
        const n = this.groupColumns.length;
        const base = Math.floor(sorted.length / n);
        const remainder = sorted.length % n;
        let index = 0;
        this.groupColumns.forEach((column, i) => {
            const size = base + (i < remainder ? 1 : 0);
            column.entries = sorted.slice(index, index + size);
            column.entries.forEach(e => e.startGroupId = column.id);
            index += size;
        });
        this.unassignedColumn.entries = [];
        this.updateAllListIds();
        this.recomputeTargets();
        this.recomputeSequences();
        this.dirty = true;
    }

    save(): void {
        if (this.currentRaceId === null) {
            return;
        }
        const assignments: StartGroupAssignmentEntry[] = this.allEntries().map(e => ({
            participantId: e.participant.id,
            startGroupId: e.startGroupId,
            startSequence: e.startSequence,
        }));
        this.store.dispatch(ParticipantActions.saveStartGroupAssignment({raceId: this.currentRaceId, assignments}));
    }

    async openCopyDialog(): Promise<void> {
        if (this.currentRaceId === null) {
            return;
        }
        const races = await firstValueFrom(this.races$);
        const data: StartGroupCopyDialogData = {sourceRaceId: this.currentRaceId, races};
        this.dialog.open(StartGroupCopyDialogComponent, {width: '500px', data})
            .afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((targetRaceIds: number[] | undefined) => {
                if (targetRaceIds && targetRaceIds.length > 0 && this.currentRaceId !== null) {
                    this.store.dispatch(ParticipantActions.copyStartGroupAssignment({
                        request: {sourceRaceId: this.currentRaceId, targetRaceIds}
                    }));
                }
            });
    }

    generateRaceNumbers(): void {
        if (this.currentRaceId === null) {
            return;
        }
        this.dialog.open(ConfirmDialogComponent, {
            width: '450px',
            data: {
                message: 'Startnummern werden aus der aktuellen Gruppenreihenfolge neu vergeben. Bereits vergebene Startnummern werden überschrieben. Fortfahren?',
                confirmLabel: 'Vergeben',
                confirmColor: 'warn',
            },
        }).afterClosed().pipe(takeUntil(this.destroy$)).subscribe(confirmed => {
            if (confirmed) {
                this.store.dispatch(ParticipantActions.generateRaceNumbersFromStartGroups({raceId: this.currentRaceId as number}));
            }
        });
    }
}
