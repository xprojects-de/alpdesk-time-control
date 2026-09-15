package x.timecontrol.dto;

/**
 * How a raw time value in a result-import file is encoded, so {@code
 * ParticipantService#importResultsByRaceNumber} knows how to turn it into a durationMs. Different
 * timing providers export results differently (raw milliseconds, decimal seconds, or a race-clock
 * string) - the user picks the matching format in the import dialog rather than us guessing.
 */
public enum ResultTimeFormat {
    /** Raw integer milliseconds, e.g. "83680". */
    MILLISECONDS,
    /** Decimal seconds (dot or comma as separator), e.g. "83.68" or "83,68". */
    SECONDS,
    /** Race-clock format "[[hh:]mm:]ss[.,fraction]", e.g. "1:23,68" or "01:02:03.450". */
    CLOCK
}
