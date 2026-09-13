package x.timecontrol.entities;

/**
 * A participant's status with respect to being ranked. NONE is a normal, rankable result;
 * every other value excludes the participant from every ranking/place calculation
 * ({@link x.timecontrol.services.RankingService#adjustedValue}) regardless of whether a
 * durationMs was measured - e.g. a disqualified skier may well have crossed the finish line
 * with a time, but that time must not count.
 */
public enum DisqualificationStatus {
    NONE,
    DNS,
    DNF,
    DSQ
}
