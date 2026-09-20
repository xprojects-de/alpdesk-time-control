import {createAction, props} from "@ngrx/store";
import {StartGroupTemplate, StartGroupTemplateRequest} from "../../models/start-group.model";

export const loadStartGroupTemplates = createAction("[StartGroupTemplate] Load Start Group Templates");
export const loadStartGroupTemplatesSuccess = createAction(
    "[StartGroupTemplate] Load Start Group Templates Success",
    props<{templates: StartGroupTemplate[]}>(),
);
export const loadStartGroupTemplatesFailure = createAction(
    "[StartGroupTemplate] Load Start Group Templates Failure",
    props<{error: string}>(),
);

export const createStartGroupTemplate = createAction(
    "[StartGroupTemplate] Create Start Group Template",
    props<{template: StartGroupTemplateRequest}>(),
);
export const createStartGroupTemplateSuccess = createAction(
    "[StartGroupTemplate] Create Start Group Template Success",
    props<{template: StartGroupTemplate}>(),
);
export const createStartGroupTemplateFailure = createAction(
    "[StartGroupTemplate] Create Start Group Template Failure",
    props<{error: string}>(),
);

export const updateStartGroupTemplate = createAction(
    "[StartGroupTemplate] Update Start Group Template",
    props<{id: number; template: StartGroupTemplateRequest}>(),
);
export const updateStartGroupTemplateSuccess = createAction(
    "[StartGroupTemplate] Update Start Group Template Success",
    props<{template: StartGroupTemplate}>(),
);
export const updateStartGroupTemplateFailure = createAction(
    "[StartGroupTemplate] Update Start Group Template Failure",
    props<{error: string}>(),
);

export const deleteStartGroupTemplate = createAction(
    "[StartGroupTemplate] Delete Start Group Template",
    props<{id: number; force?: boolean}>(),
);
export const deleteStartGroupTemplateSuccess = createAction(
    "[StartGroupTemplate] Delete Start Group Template Success",
    props<{id: number}>(),
);
export const deleteStartGroupTemplateFailure = createAction(
    "[StartGroupTemplate] Delete Start Group Template Failure",
    props<{error: string}>(),
);
export const deleteStartGroupTemplateConflict = createAction(
    "[StartGroupTemplate] Delete Start Group Template Conflict",
    props<{id: number; message: string}>(),
);
