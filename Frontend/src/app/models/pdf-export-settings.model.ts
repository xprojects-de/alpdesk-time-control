/**
 * Layout switches for the result PDFs of a single race. The start list always prints race number
 * and birth year, the Gaudi-Modus exports never do - neither is affected by this setting.
 */
export interface PdfExportSettings {
    showRaceNumberAndBirthYear: boolean;
}
