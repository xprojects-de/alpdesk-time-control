import {createAction, props} from '@ngrx/store';
import {PointsScale, PointsScaleRequest} from '../../models/points-scale.model';

export const loadPointsScales = createAction('[PointsScale] Load PointsScales');
export const loadPointsScalesSuccess = createAction(
    '[PointsScale] Load PointsScales Success',
    props<{ pointsScales: PointsScale[] }>()
);
export const loadPointsScalesFailure = createAction(
    '[PointsScale] Load PointsScales Failure',
    props<{ error: string }>()
);

export const createPointsScale = createAction(
    '[PointsScale] Create PointsScale',
    props<{ pointsScale: PointsScaleRequest }>()
);
export const createPointsScaleSuccess = createAction(
    '[PointsScale] Create PointsScale Success',
    props<{ pointsScale: PointsScale }>()
);
export const createPointsScaleFailure = createAction(
    '[PointsScale] Create PointsScale Failure',
    props<{ error: string }>()
);

export const updatePointsScale = createAction(
    '[PointsScale] Update PointsScale',
    props<{ id: number; pointsScale: PointsScaleRequest }>()
);
export const updatePointsScaleSuccess = createAction(
    '[PointsScale] Update PointsScale Success',
    props<{ pointsScale: PointsScale }>()
);
export const updatePointsScaleFailure = createAction(
    '[PointsScale] Update PointsScale Failure',
    props<{ error: string }>()
);

export const deletePointsScale = createAction(
    '[PointsScale] Delete PointsScale',
    props<{ id: number; force?: boolean }>()
);
export const deletePointsScaleSuccess = createAction(
    '[PointsScale] Delete PointsScale Success',
    props<{ id: number }>()
);
export const deletePointsScaleFailure = createAction(
    '[PointsScale] Delete PointsScale Failure',
    props<{ error: string }>()
);
export const deletePointsScaleConflict = createAction(
    '[PointsScale] Delete PointsScale Conflict',
    props<{ id: number; message: string }>()
);
