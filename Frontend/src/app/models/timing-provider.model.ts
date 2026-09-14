// Add a new provider here (and to TimingProviderLabels) once the backend registers a matching
// TimingDataImporter - the settings component reads `availableTypes` from the backend and only
// needs a new `@case` in its provider-config switch, no other change.
export type TimingProviderType = 'ALPDESK_TIMECONTROL';

export const TimingProviderLabels: Record<TimingProviderType, string> = {
    ALPDESK_TIMECONTROL: 'Alpdesk TimeControl',
};

export interface TimingProviderSettings {
    type: TimingProviderType;
    config: Record<string, string>;
    availableTypes: TimingProviderType[];
}

export interface TimingProviderSettingsRequest {
    type: TimingProviderType;
    config: Record<string, string>;
}
