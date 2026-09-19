import {createAction, props} from '@ngrx/store';
import {
    GaudiCsvExportVariant,
    GaudiLosPairing,
    GaudiMode,
    GaudiModeRequest,
    GaudiNotRankedEntry,
    GaudiRankingEntry,
} from '../../models/gaudi-mode.model';

export const loadGaudiModes = createAction(
    '[GaudiMode] Load GaudiModes',
    props<{ raceId?: number }>()
);
export const loadGaudiModesSuccess = createAction(
    '[GaudiMode] Load GaudiModes Success',
    props<{ gaudiModes: GaudiMode[] }>()
);
export const loadGaudiModesFailure = createAction(
    '[GaudiMode] Load GaudiModes Failure',
    props<{ error: string }>()
);

export const createGaudiMode = createAction(
    '[GaudiMode] Create GaudiMode',
    props<{ gaudiMode: GaudiModeRequest }>()
);
export const createGaudiModeSuccess = createAction(
    '[GaudiMode] Create GaudiMode Success',
    props<{ gaudiMode: GaudiMode }>()
);
export const createGaudiModeFailure = createAction(
    '[GaudiMode] Create GaudiMode Failure',
    props<{ error: string }>()
);

export const updateGaudiMode = createAction(
    '[GaudiMode] Update GaudiMode',
    props<{ id: number; gaudiMode: GaudiModeRequest }>()
);
export const updateGaudiModeSuccess = createAction(
    '[GaudiMode] Update GaudiMode Success',
    props<{ gaudiMode: GaudiMode }>()
);
export const updateGaudiModeFailure = createAction(
    '[GaudiMode] Update GaudiMode Failure',
    props<{ error: string }>()
);

export const deleteGaudiMode = createAction(
    '[GaudiMode] Delete GaudiMode',
    props<{ id: number }>()
);
export const deleteGaudiModeSuccess = createAction(
    '[GaudiMode] Delete GaudiMode Success',
    props<{ id: number }>()
);
export const deleteGaudiModeFailure = createAction(
    '[GaudiMode] Delete GaudiMode Failure',
    props<{ error: string }>()
);

export const selectGaudiMode = createAction(
    '[GaudiMode] Select GaudiMode',
    props<{ id: number | null }>()
);

// Los-Modus pairing
export const drawPairing = createAction(
    '[GaudiMode] Draw Pairing',
    props<{ id: number }>()
);
export const loadPairing = createAction(
    '[GaudiMode] Load Pairing',
    props<{ id: number }>()
);
export const pairingSuccess = createAction(
    '[GaudiMode] Pairing Success',
    props<{ pairing: GaudiLosPairing[] }>()
);
export const pairingFailure = createAction(
    '[GaudiMode] Pairing Failure',
    props<{ error: string }>()
);

// Ranking
export const loadRanking = createAction(
    '[GaudiMode] Load Ranking',
    props<{ id: number }>()
);
export const loadRankingSuccess = createAction(
    '[GaudiMode] Load Ranking Success',
    props<{ ranking: GaudiRankingEntry[]; notRanked: GaudiNotRankedEntry[] }>()
);
export const loadRankingFailure = createAction(
    '[GaudiMode] Load Ranking Failure',
    props<{ error: string }>()
);

// PDF export
export const exportPdf = createAction(
    '[GaudiMode] Export Pdf',
    props<{ id: number; filename: string }>()
);
export const exportPdfSuccess = createAction(
    '[GaudiMode] Export Pdf Success',
    props<{ blob: Blob; filename: string }>()
);
export const exportPdfFailure = createAction(
    '[GaudiMode] Export Pdf Failure',
    props<{ error: string }>()
);

// PDF export (Punkte-Mischwertung only) - filtered by gender
export const exportPdfByGender = createAction(
    '[GaudiMode] Export Pdf By Gender',
    props<{ id: number; gender: string; filename: string }>()
);
export const exportPdfByGenderSuccess = createAction(
    '[GaudiMode] Export Pdf By Gender Success',
    props<{ blob: Blob; filename: string }>()
);
export const exportPdfByGenderFailure = createAction(
    '[GaudiMode] Export Pdf By Gender Failure',
    props<{ error: string }>()
);

// PDF export (Punkte-Mischwertung only) - split into all age groups x gender
export const exportPdfAllAgeGroups = createAction(
    '[GaudiMode] Export Pdf All Age Groups',
    props<{ id: number; filename: string }>()
);
export const exportPdfAllAgeGroupsSuccess = createAction(
    '[GaudiMode] Export Pdf All Age Groups Success',
    props<{ blob: Blob; filename: string }>()
);
export const exportPdfAllAgeGroupsFailure = createAction(
    '[GaudiMode] Export Pdf All Age Groups Failure',
    props<{ error: string }>()
);

// CSV export (Zeit-Kombination / Punkte-Mischwertung)
export const exportCsv = createAction(
    '[GaudiMode] Export Csv',
    props<{ id: number; variant: GaudiCsvExportVariant; filename: string }>()
);
export const exportCsvSuccess = createAction(
    '[GaudiMode] Export Csv Success',
    props<{ blob: Blob; filename: string }>()
);
export const exportCsvFailure = createAction(
    '[GaudiMode] Export Csv Failure',
    props<{ error: string }>()
);
