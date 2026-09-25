/**
 * Layout switches for the result PDFs of a single race and of every Gaudi-Modus, and for the public
 * live view, each column on its
 * own. The start list follows the birth year switch only - it always prints the race number.
 */
export interface PdfExportSettings {
    showRaceNumber: boolean;
    showBirthYear: boolean;
}
