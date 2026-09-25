/**
 * Layout switches for the result PDFs of a single race, each column on its own. The start list
 * always prints race number and birth year, the Gaudi-Modus exports never do - neither is affected
 * by these settings.
 */
export interface PdfExportSettings {
    showRaceNumber: boolean;
    showBirthYear: boolean;
}
