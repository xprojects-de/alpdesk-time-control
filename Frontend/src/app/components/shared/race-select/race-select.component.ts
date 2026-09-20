import {Component, ElementRef, computed, effect, inject, input, output, signal, viewChild} from "@angular/core";
import {ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {Race} from "../../../models/race.model";
import {formatRaceDate, raceLabel} from "../../../utils/race-label.util";

/** A single race id (or null) in single mode, the list of selected ids in multiple mode. */
export type RaceSelectValue = number | number[] | null;

/**
 * The one race picker used everywhere a race is chosen. Wraps a mat-select and adds a search field
 * inside its panel, which is what makes the picker usable once a club has collected a few hundred
 * races - scrolling an unfiltered list of that size is not.
 *
 * Works both with reactive forms (`formControlName`, via ControlValueAccessor) and as a plain
 * `[value]`/`(valueChange)` binding, because the call sites are split between the two and
 * converting them all would have been a much bigger change than adding the search.
 */
@Component({
    selector: "app-race-select",
    imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatIconModule],
    template: `
        <mat-form-field appearance="outline">
            <mat-label>{{ label() }}</mat-label>
            <mat-select
                [formControl]="innerControl"
                [multiple]="multiple()"
                [required]="required()"
                (selectionChange)="onSelectionChange($event.value)"
                (openedChange)="onOpenedChange($event)"
                panelClass="race-select-panel"
                [panelWidth]="null"
            >
                @if (multiple() && selectedIds().length > 0) {
                    <mat-select-trigger>{{ triggerLabel() }}</mat-select-trigger>
                }

                <div class="race-select-search">
                    <mat-icon>search</mat-icon>
                    <input
                        #searchInput
                        type="text"
                        autocomplete="off"
                        placeholder="Rennen suchen (Name oder Datum)"
                        [value]="search()"
                        (input)="onSearchInput($event)"
                        (keydown)="onSearchKeydown($event)"
                    />
                    @if (search()) {
                        <button type="button" aria-label="Suche zurücksetzen" (click)="clearSearch($event)">
                            <mat-icon>close</mat-icon>
                        </button>
                    }
                </div>

                @if (showEmptyOption()) {
                    <mat-option [value]="null">{{ emptyOptionLabel() }}</mat-option>
                }
                @for (race of visibleRaces(); track race.id) {
                    <mat-option [value]="race.id">
                        {{ race.name }}
                        @if (formatRaceDate(race.date); as date) {
                            <span class="race-select-date">· {{ date }}</span>
                        }
                    </mat-option>
                }
                @if (visibleRaces().length === 0) {
                    <div class="race-select-empty">Kein Rennen gefunden</div>
                }
            </mat-select>
            @if (hint()) {
                <mat-hint>{{ hint() }}</mat-hint>
            }
            @if (hasError()) {
                <mat-error>{{ errorMessage() }}</mat-error>
            }
        </mat-form-field>
    `,
    styles: [
        `
            :host {
                display: block;
            }

            mat-form-field {
                width: 100%;
            }

            /*
             * Projected into mat-select's panel, so it carries this component's style scope but
             * lives in the overlay. Sticky keeps it visible while scrolling the results; the
             * panel's own top padding is removed globally via .race-select-panel (styles.scss),
             * otherwise options scroll through the gap above this row.
             */
            .race-select-search {
                position: sticky;
                top: 0;
                z-index: 1;
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px 16px;
                background: var(--mat-sys-surface-container);
                border-bottom: 1px solid var(--mat-sys-outline-variant);
            }

            .race-select-search input {
                flex: 1;
                min-width: 0;
                border: none;
                outline: none;
                background: transparent;
                color: var(--mat-sys-on-surface);
                font: var(--mat-sys-body-medium);
            }

            .race-select-search button {
                display: flex;
                border: none;
                padding: 0;
                background: transparent;
                color: var(--mat-sys-on-surface-variant);
                cursor: pointer;
            }

            .race-select-search mat-icon {
                color: var(--mat-sys-on-surface-variant);
            }

            /*
             * The date is what tells two races of the same name apart, so it has to be readable -
             * but the name is what you scan for, so the date stays visually secondary. Deliberately
             * on the same line rather than a second one: a two-line option nearly halves how many
             * races fit on screen, which works against the very problem the search solves.
             */
            .race-select-date {
                margin-left: 4px;
                color: var(--mat-sys-on-surface-variant);
                font-size: 0.9em;
                /* Keeps the separator glued to the date, so it never dangles at a line break. */
                white-space: nowrap;
            }

            .race-select-empty {
                padding: 12px 16px;
                color: var(--mat-sys-on-surface-variant);
                font: var(--mat-sys-body-medium);
            }
        `,
    ],
})
export class RaceSelectComponent implements ControlValueAccessor {
    /**
     * Keys mat-select has to keep handling while the search field has focus: the arrow keys move
     * through the results, ENTER picks the active one, ESC/TAB close the panel. Everything else
     * is kept inside the search field - see onSearchKeydown.
     */
    private static readonly NAVIGATION_KEYS = ["ArrowDown", "ArrowUp", "Enter", "Escape", "Tab", "PageUp", "PageDown"];

    races = input.required<Race[]>();
    label = input("Rennen");
    multiple = input(false);
    required = input(false);
    /** Label of a leading "no race" option (single mode only); null means the select has none. */
    emptyOptionLabel = input<string | null>(null);
    hint = input<string | null>(null);
    /** Shown as a mat-error once the bound form control is both invalid and touched. */
    errorMessage = input<string | null>(null);

    value = input<RaceSelectValue>(null);
    disabled = input(false);

    /**
     * Emitted only when the *user* changes the selection, never when a new value is pushed in from
     * the outside - neither through the [value] binding nor through writeValue. That mirrors
     * mat-select's own (selectionChange), which is what every call site was written against, and it
     * matters: the start group board calls writeValue() from inside its own (valueChange) handler
     * to snap the display back when the operator cancels a race switch. If writeValue emitted, that
     * would re-enter the handler and re-open the "unsaved changes" dialog in a loop.
     */
    valueChange = output<RaceSelectValue>();

    search = signal("");

    /** The value actually displayed; fed by the [value] binding, by writeValue and by the user. */
    private selectedValue = signal<RaceSelectValue>(null);
    /** Same split for the disabled state, which reactive forms set through setDisabledState. */
    private disabledState = signal(false);

    /**
     * The wrapped mat-select needs a form control of its own: mat-select only recomputes its error
     * state in ngDoCheck when it has one (see _ErrorStateTracker), so without it mat-form-field
     * would never enter the error state and would swallow the mat-error entirely. It mirrors the
     * outer control this component is the accessor for - kept in sync by the effects below - and
     * carries the same required validator, which is the only error any of the call sites reports.
     */
    readonly innerControl = new FormControl<RaceSelectValue>(null);

    private searchInput = viewChild<ElementRef<HTMLInputElement>>("searchInput");
    private ngControl = inject(NgControl, {self: true, optional: true});
    private onChange: (value: RaceSelectValue) => void = () => undefined;
    private onTouched: () => void = () => undefined;

    constructor() {
        if (this.ngControl) {
            // Registering as the accessor here rather than through NG_VALUE_ACCESSOR avoids the
            // circular dependency that providing the component to itself would create.
            this.ngControl.valueAccessor = this;
        }
        effect(() => this.selectedValue.set(this.value()));
        effect(() => this.disabledState.set(this.disabled()));
        effect(() => this.innerControl.setValue(this.selectedValue(), {emitEvent: false}));
        effect(() => {
            this.innerControl.setValidators(this.required() ? [Validators.required] : []);
            this.innerControl.updateValueAndValidity({emitEvent: false});
        });
        effect(() => (this.disabledState() ? this.innerControl.disable() : this.innerControl.enable()));
    }

    selectedIds = computed<number[]>(() => {
        const value = this.selectedValue();
        if (Array.isArray(value)) {
            return value;
        }
        return value === null || value === undefined ? [] : [value];
    });

    visibleRaces = computed<Race[]>(() => {
        // Every whitespace-separated word has to match somewhere, in any order - "kondi 2021"
        // has to find "Kondi-Cup 2021", which a single contiguous substring search would miss.
        const terms = this.search().toLowerCase().split(/\s+/).filter(Boolean);
        const races = this.byDateDescending(this.races());
        if (terms.length === 0) {
            return races;
        }
        // An already selected race always stays in the list. mat-select tracks its selection
        // through the options actually rendered, so filtering a selected one out would drop it
        // from the value on the next selection change - silently, and in the Gaudi dialog that
        // would mean losing a leg of a saved combination.
        const selected = new Set(this.selectedIds());
        return races.filter(race => selected.has(race.id) || this.matches(race, terms));
    });

    showEmptyOption = computed(
        () =>
            this.emptyOptionLabel() !== null &&
            !this.multiple() &&
            (!this.search().trim() || this.selectedValue() === null),
    );

    triggerLabel = computed(() => {
        const ids = this.selectedIds();
        const first = this.races().find(race => race.id === ids[0]);
        const firstLabel = first ? raceLabel(first) : String(ids[0] ?? "");
        return ids.length > 1 ? `${firstLabel} (+${ids.length - 1} weitere)` : firstLabel;
    });

    onSelectionChange(selection: RaceSelectValue): void {
        let next = selection;
        if (this.multiple()) {
            const emitted = (selection as number[] | null) ?? [];
            const current = this.selectedIds();
            // mat-select emits its values in the DOM order of the options currently rendered, so
            // with an active search the emitted order is whatever happened to be on screen. That
            // order is not cosmetic: the Gaudi dialog maps it straight onto the races' sortOrder,
            // i.e. the order of the legs in the combined ranking. Keep the order already
            // established and append newly picked races at the end.
            next = [...current.filter(id => emitted.includes(id)), ...emitted.filter(id => !current.includes(id))];
        }
        this.selectedValue.set(next);
        this.valueChange.emit(next);
        this.onChange(next);
    }

    onOpenedChange(opened: boolean): void {
        this.search.set("");
        if (opened) {
            // The panel's content only exists once it is open, so the input can't be focused
            // before the overlay has rendered.
            setTimeout(() => this.searchInput()?.nativeElement.focus());
        } else {
            this.onTouched();
        }
    }

    onSearchInput(event: Event): void {
        this.search.set((event.target as HTMLInputElement).value);
    }

    /**
     * The panel renders inside the mat-select element, so every key pressed in this search field
     * reaches the select's own keydown handler by bubbling. Its type-ahead would then jump to an
     * option on every printable character and SPACE would toggle the active one, neither of which
     * lets a search term be typed - so everything but the navigation keys stops here.
     */
    onSearchKeydown(event: KeyboardEvent): void {
        if (!RaceSelectComponent.NAVIGATION_KEYS.includes(event.key)) {
            event.stopPropagation();
        }
    }

    clearSearch(event: Event): void {
        event.stopPropagation();
        event.preventDefault();
        this.search.set("");
        this.searchInput()?.nativeElement.focus();
    }

    hasError(): boolean {
        const control = this.ngControl?.control;
        return !!this.errorMessage() && !!control && control.invalid && control.touched;
    }

    writeValue(value: RaceSelectValue): void {
        this.selectedValue.set(value ?? null);
    }

    registerOnChange(fn: (value: RaceSelectValue) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabledState.set(isDisabled);
    }

    /**
     * Newest race first. The callers hand this component the order the backend returns, and
     * RaceRepository.findAll() has no ORDER BY - that is insertion order, which buries the race
     * just created for today's event at the very bottom of every dropdown. Sorting by date rather
     * than by id also puts a race entered late for an earlier event where it belongs. ISO dates
     * compare correctly as plain strings; equal dates fall back to the name.
     */
    private byDateDescending(races: Race[]): Race[] {
        return [...races].sort((a, b) => b.date.localeCompare(a.date) || a.name.localeCompare(b.name));
    }

    /** Exposed for the option template, which renders name and date as separate elements. */
    protected readonly formatRaceDate = formatRaceDate;

    private matches(race: Race, terms: string[]): boolean {
        const haystack = `${race.name.toLowerCase()} ${race.date} ${formatRaceDate(race.date)}`;
        return terms.every(term => haystack.includes(term));
    }
}
