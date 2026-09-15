package x.timecontrol.services;

/**
 * Shared predicates for validation rules that are checked from several independent code paths
 * (e.g. {@link ParticipantService#validate}, its row-by-row import paths, and
 * {@link MeasurementService#importMapped}) so the rule itself can't drift between call sites.
 */
final class ValidationUtils {

    private ValidationUtils() {
    }

    /**
     * True if {@code value} is present and negative. Used for durationMs/penalty: a negative value
     * floors to 0 in RankingService.adjustedValue() and would otherwise silently win the ranking, so
     * every entry point that accepts one of these fields from user input must reject it.
     */
    static boolean isNegative(Integer value) {
        return value != null && value < 0;
    }
}
