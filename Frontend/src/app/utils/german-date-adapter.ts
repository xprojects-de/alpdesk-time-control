import { NativeDateAdapter } from '@angular/material/core';
import { Injectable } from '@angular/core';

@Injectable()
export class GermanDateAdapter extends NativeDateAdapter {
  override parse(value: any): Date | null {
    if (typeof value === 'string' && value.trim()) {
      // Unterstütze deutsches Format: DD.MM.YYYY, D.M.YYYY, DD.MM.YY, D.M.YY
      const parts = value.trim().split('.');
      if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // Monate sind 0-basiert
        let year = parseInt(parts[2], 10);

        // Zweistellige Jahre: 00-50 -> 2000-2050, 51-99 -> 1951-1999
        if (year < 100) {
          year += year <= 50 ? 2000 : 1900;
        }

        const date = new Date(year, month, day);

        // Prüfe ob das Datum gültig ist
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

  override format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      // Formatiere als DD.MM.YYYY
      return `${this._to2digit(day)}.${this._to2digit(month)}.${year}`;
    }
    return super.format(date, displayFormat);
  }

  private _to2digit(n: number): string {
    return ('00' + n).slice(-2);
  }

  override getFirstDayOfWeek(): number {
    // Montag ist der erste Tag der Woche in Deutschland
    return 1;
  }
}

