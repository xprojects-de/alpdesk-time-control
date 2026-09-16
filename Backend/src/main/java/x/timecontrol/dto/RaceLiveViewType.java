package x.timecontrol.dto;

/**
 * The set of race-results views the live results page offers, mirroring
 * {@code PdfExportService}'s PDF export variants one for one.
 */
public enum RaceLiveViewType {
    STARTLIST,
    OVERALL,
    GENDER,
    AGEGROUP_GENDER,
    ALL_AGEGROUPS,
    OVERALL_BY_CATEGORY,
    GENDER_BY_CATEGORY,
    ALL_AGEGROUPS_BY_CATEGORY,
    CATEGORY
}
