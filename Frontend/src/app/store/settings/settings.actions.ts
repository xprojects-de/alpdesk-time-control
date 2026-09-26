import {createAction, props} from "@ngrx/store";
import {SeasonSettings, SeasonSettingsRequest} from "../../models/season-settings.model";
import {PdfExportSettings} from "../../models/pdf-export-settings.model";
import {TimingProviderSettings, TimingProviderSettingsRequest} from "../../models/timing-provider.model";

export const loadTimingProvider = createAction("[Settings] Load Timing Provider");
export const loadTimingProviderSuccess = createAction(
    "[Settings] Load Timing Provider Success",
    props<{settings: TimingProviderSettings}>(),
);
export const loadTimingProviderFailure = createAction(
    "[Settings] Load Timing Provider Failure",
    props<{error: string}>(),
);

export const updateTimingProvider = createAction(
    "[Settings] Update Timing Provider",
    props<{request: TimingProviderSettingsRequest}>(),
);
export const updateTimingProviderSuccess = createAction(
    "[Settings] Update Timing Provider Success",
    props<{settings: TimingProviderSettings}>(),
);
export const updateTimingProviderFailure = createAction(
    "[Settings] Update Timing Provider Failure",
    props<{error: string}>(),
);

// Season boundary - which date a season year starts on, and with it which age groups apply to a
// race. Kept in this slice (not the age-group one) because it is an app-wide setting, not a
// property of any single age group.
export const loadSeason = createAction("[Settings] Load Season");
export const loadSeasonSuccess = createAction("[Settings] Load Season Success", props<{season: SeasonSettings}>());
export const loadSeasonFailure = createAction("[Settings] Load Season Failure", props<{error: string}>());

export const updateSeason = createAction("[Settings] Update Season", props<{request: SeasonSettingsRequest}>());
export const updateSeasonSuccess = createAction("[Settings] Update Season Success", props<{season: SeasonSettings}>());
export const updateSeasonFailure = createAction("[Settings] Update Season Failure", props<{error: string}>());

// Race number / birth year columns of the result PDFs (single race and Gaudi-Modus) and the live view.
export const loadPdfExport = createAction("[Settings] Load Pdf Export");
export const loadPdfExportSuccess = createAction(
    "[Settings] Load Pdf Export Success",
    props<{pdfExport: PdfExportSettings}>(),
);
export const loadPdfExportFailure = createAction("[Settings] Load Pdf Export Failure", props<{error: string}>());

export const updatePdfExport = createAction("[Settings] Update Pdf Export", props<{request: PdfExportSettings}>());
export const updatePdfExportSuccess = createAction(
    "[Settings] Update Pdf Export Success",
    props<{pdfExport: PdfExportSettings}>(),
);
export const updatePdfExportFailure = createAction("[Settings] Update Pdf Export Failure", props<{error: string}>());
