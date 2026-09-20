import {NativeDateAdapter} from '@angular/material/core';
import {Injectable} from '@angular/core';

@Injectable()
export class GermanDateAdapter extends NativeDateAdapter {
    override parse(value: any): Date | null {
        if (typeof value === 'string' && value.trim()) {

            const parts = value.trim().split('.');
            if (parts.length === 3) {
                const day = parseInt(parts[0], 10);
                const month = parseInt(parts[1], 10) - 1; // Monate sind 0-basiert
                let year = parseInt(parts[2], 10);


                if (year < 100) {
                    year += year <= 50 ? 2000 : 1900;
                }

                const date = new Date(year, month, day);


                if (
                    date.getFullYear() === year &&
                    date.getMonth() === month &&
                    date.getDate() === day
                ) {
                    return date;
                }
            }
        }
        return super.parse(value);
    }

    // `Object` (not `object`) on purpose: it mirrors Angular Material's own NativeDateAdapter
    // signature, and the value actually passed here is the string "input" from DE_DATE_FORMATS in
    // app.config.ts - assignable to `Object` but not to `object`, so narrowing the type breaks the
    // comparison below (TS2367) and with it the build. The disable keeps `ng lint --fix` from
    // "fixing" it again.
    // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
    override format(date: Date, displayFormat: Object): string {
        if (displayFormat === 'input') {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return `${this._to2digit(day)}.${this._to2digit(month)}.${year}`;
        }
        return super.format(date, displayFormat);
    }

    private _to2digit(n: number): string {
        return ('00' + n).slice(-2);
    }

    override getFirstDayOfWeek(): number {
        return 1;
    }
}

