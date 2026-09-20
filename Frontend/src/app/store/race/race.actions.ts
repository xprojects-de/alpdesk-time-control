import {createAction, props} from "@ngrx/store";
import {Race, RaceLiveLink, RaceRequest} from "../../models/race.model";

export const loadRaces = createAction("[Race] Load Races");

export const loadRacesSuccess = createAction("[Race] Load Races Success", props<{races: Race[]}>());

export const loadRacesFailure = createAction("[Race] Load Races Failure", props<{error: string}>());

export const createRace = createAction("[Race] Create Race", props<{race: RaceRequest}>());

export const createRaceSuccess = createAction("[Race] Create Race Success", props<{race: Race}>());

export const createRaceFailure = createAction("[Race] Create Race Failure", props<{error: string}>());

// Full race migration from another instance: creates the race, after which the race list opens
// the participant import mapping dialog for it. Kept separate from createRace so the race list
// can tell the two apart (plain create just shows a snackbar; this one continues into the import).
export const createRaceForResultImport = createAction(
    "[Race] Create Race For Result Import",
    props<{race: RaceRequest}>(),
);

export const createRaceForResultImportSuccess = createAction(
    "[Race] Create Race For Result Import Success",
    props<{race: Race}>(),
);

export const createRaceForResultImportFailure = createAction(
    "[Race] Create Race For Result Import Failure",
    props<{error: string}>(),
);

export const updateRace = createAction("[Race] Update Race", props<{id: number; race: RaceRequest}>());

export const updateRaceSuccess = createAction("[Race] Update Race Success", props<{race: Race}>());

export const updateRaceFailure = createAction("[Race] Update Race Failure", props<{error: string}>());

export const deleteRace = createAction("[Race] Delete Race", props<{id: number; force?: boolean}>());

export const deleteRaceSuccess = createAction("[Race] Delete Race Success", props<{id: number}>());

export const deleteRaceFailure = createAction("[Race] Delete Race Failure", props<{error: string}>());

export const deleteRaceConflict = createAction("[Race] Delete Race Conflict", props<{id: number; message: string}>());

// Public live-results links of one race, shown by the race list's live-links dialog
export const loadLiveLinks = createAction("[Race] Load Live Links", props<{raceId: number}>());

export const loadLiveLinksSuccess = createAction(
    "[Race] Load Live Links Success",
    props<{raceId: number; links: RaceLiveLink[]}>(),
);

export const loadLiveLinksFailure = createAction(
    "[Race] Load Live Links Failure",
    props<{raceId: number; error: string}>(),
);

export const selectRace = createAction("[Race] Select Race", props<{id: number | null}>());
