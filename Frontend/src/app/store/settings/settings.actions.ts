import {createAction, props} from '@ngrx/store';
import {TimingProviderSettings, TimingProviderSettingsRequest} from '../../models/timing-provider.model';

export const loadTimingProvider = createAction('[Settings] Load Timing Provider');
export const loadTimingProviderSuccess = createAction(
    '[Settings] Load Timing Provider Success',
    props<{ settings: TimingProviderSettings }>()
);
export const loadTimingProviderFailure = createAction(
    '[Settings] Load Timing Provider Failure',
    props<{ error: string }>()
);

export const updateTimingProvider = createAction(
    '[Settings] Update Timing Provider',
    props<{ request: TimingProviderSettingsRequest }>()
);
export const updateTimingProviderSuccess = createAction(
    '[Settings] Update Timing Provider Success',
    props<{ settings: TimingProviderSettings }>()
);
export const updateTimingProviderFailure = createAction(
    '[Settings] Update Timing Provider Failure',
    props<{ error: string }>()
);
