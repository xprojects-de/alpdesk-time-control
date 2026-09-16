package x.timecontrol.entities;

/**
 * How a race's start order ({@code startSequence}, never the {@code raceNumber} bib) is derived
 * from its linked {@code previousRaceId} race - see
 * {@link x.timecontrol.services.ParticipantService#applyStartOrderFromPreviousRace}. Only one
 * mode exists today; kept as an enum (rather than a boolean flag) so further derivation rules can
 * be added later without another migration.
 */
public enum StartOrderMode {
    /**
     * Per age group (independent of Category): the top {@code startOrderReverseTopCount} placed
     * participants of the previous race start in reverse order, followed by the rest in normal
     * placement order.
     */
    REVERSE_TOP_N
}
