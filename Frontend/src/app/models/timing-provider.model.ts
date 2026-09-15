// Add a new provider here (and to TimingProviderLabels) once the backend registers a matching
// TimingDataImporter - the settings component reads `availableTypes` from the backend and only
// needs a new `@case` in its provider-config switch, no other change.
// NONE means no timing device is configured (evaluation/results only) - always selectable, not
// backed by a TimingDataImporter bean on the backend.
export type TimingProviderType = 'NONE' | 'ALPDESK_TIMECONTROL';

export const TimingProviderLabels: Record<TimingProviderType, string> = {
    NONE: 'Keine Zeitmessung (nur Auswertung)',
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
