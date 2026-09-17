export interface StartGroupTemplate {
    id: number;
    label: string;
    color: string;
    position: number;
    offsetSeconds?: number | null;
}

export interface StartGroupTemplateRequest {
    label: string;
    color: string;
    position: number;
    offsetSeconds?: number | null;
}

/** One entry of a race's start-group assignment - see ParticipantService#applyStartGroupAssignment. */
export interface StartGroupAssignmentEntry {
    participantId: number;
    startGroupId: number | null;
    startSequence: number | null;
}

export interface StartGroupCopyRequest {
    sourceRaceId: number;
    targetRaceIds: number[];
}

/**
 * Fixed 10-color palette for start groups, curated so every color stays clearly distinguishable
 * on a printed hall sign - not a free-form picker. Grün/Orange/Blau match the club's existing
 * Kondi-Wettkampf hall color-coding (Halle 1/2/3).
 */
export const START_GROUP_COLOR_PALETTE: { label: string; hex: string }[] = [
    {label: 'Grün', hex: '#92D050'},
    {label: 'Orange', hex: '#FFC000'},
    {label: 'Blau', hex: '#00B0F0'},
    {label: 'Rot', hex: '#E53935'},
    {label: 'Lila', hex: '#8E5FD6'},
    {label: 'Türkis', hex: '#26A69A'},
    {label: 'Gelb', hex: '#FDD835'},
    {label: 'Pink', hex: '#EC407A'},
    {label: 'Braun', hex: '#8D6E63'},
    {label: 'Grau', hex: '#78909C'},
];
