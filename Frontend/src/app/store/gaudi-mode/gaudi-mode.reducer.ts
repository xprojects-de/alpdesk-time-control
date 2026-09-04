import {createReducer, on} from '@ngrx/store';
import {GaudiLosPairing, GaudiMode, GaudiRankingEntry} from '../../models/gaudi-mode.model';
import * as GaudiModeActions from './gaudi-mode.actions';

export interface GaudiModeState {
    gaudiModes: GaudiMode[];
    selectedGaudiModeId: number | null;
    pairing: GaudiLosPairing[];
    ranking: GaudiRankingEntry[];
    loading: boolean;
    pdfExportLoading: boolean;
    error: string | null;
}

export const initialState: GaudiModeState = {
    gaudiModes: [],
    selectedGaudiModeId: null,
    pairing: [],
    ranking: [],
    loading: false,
    pdfExportLoading: false,
    error: null
};

export const gaudiModeReducer = createReducer(
    initialState,

    on(GaudiModeActions.loadGaudiModes, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(GaudiModeActions.loadGaudiModesSuccess, (state, {gaudiModes}) => ({
        ...state,
        gaudiModes,
        loading: false
    })),
    on(GaudiModeActions.loadGaudiModesFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    on(GaudiModeActions.createGaudiMode, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(GaudiModeActions.createGaudiModeSuccess, (state, {gaudiMode}) => ({
        ...state,
        gaudiModes: [...state.gaudiModes, gaudiMode],
        loading: false
    })),
    on(GaudiModeActions.createGaudiModeFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    on(GaudiModeActions.updateGaudiMode, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(GaudiModeActions.updateGaudiModeSuccess, (state, {gaudiMode}) => ({
        ...state,
        gaudiModes: state.gaudiModes.map(g => g.id === gaudiMode.id ? gaudiMode : g),
        loading: false
    })),
    on(GaudiModeActions.updateGaudiModeFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    on(GaudiModeActions.deleteGaudiMode, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(GaudiModeActions.deleteGaudiModeSuccess, (state, {id}) => ({
        ...state,
        gaudiModes: state.gaudiModes.filter(g => g.id !== id),
        selectedGaudiModeId: state.selectedGaudiModeId === id ? null : state.selectedGaudiModeId,
        loading: false
    })),
    on(GaudiModeActions.deleteGaudiModeFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    on(GaudiModeActions.selectGaudiMode, (state, {id}) => ({
        ...state,
        selectedGaudiModeId: id,
        pairing: [],
        ranking: []
    })),

    on(GaudiModeActions.drawPairing, GaudiModeActions.loadPairing, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(GaudiModeActions.pairingSuccess, (state, {pairing}) => ({
        ...state,
        pairing,
        loading: false
    })),
    on(GaudiModeActions.pairingFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    on(GaudiModeActions.loadRanking, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(GaudiModeActions.loadRankingSuccess, (state, {ranking}) => ({
        ...state,
        ranking,
        loading: false
    })),
    on(GaudiModeActions.loadRankingFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    on(GaudiModeActions.exportPdf, state => ({
        ...state,
        pdfExportLoading: true
    })),
    on(GaudiModeActions.exportPdfSuccess, state => ({
        ...state,
        pdfExportLoading: false
    })),
    on(GaudiModeActions.exportPdfFailure, (state, {error}) => ({
        ...state,
        pdfExportLoading: false,
        error
    }))
);
