/**
 * The season boundary: which day a season year starts on. The default 1 January makes a season a
 * calendar year; a club whose season spans the turn of the year (a ski winter, where a December and
 * a January race belong together) can move it to e.g. 1 July, after which a race before that date
 * counts towards the previous season year.
 */
export interface SeasonSettings {
    seasonStartMonth: number;
    seasonStartDay: number;
    currentSeason: number;
    currentSeasonStart: string;
    currentSeasonEnd: string;
}

export interface SeasonSettingsRequest {
    seasonStartMonth: number;
    seasonStartDay: number;
}
