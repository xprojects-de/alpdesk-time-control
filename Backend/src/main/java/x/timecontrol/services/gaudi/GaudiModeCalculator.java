package x.timecontrol.services.gaudi;

import x.timecontrol.dto.GaudiDnsEntryResponse;
import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Race;
import x.timecontrol.entities.GaudiModeType;
import x.timecontrol.services.RankingService;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Strategy for computing the ranking of one Gaudi-Modus type.
 * To add a new Gaudi-Modus type: add a {@link GaudiModeType} value and register
 * a new {@code @Singleton} implementation of this interface - no controller changes needed.
 */
public interface GaudiModeCalculator {

    GaudiModeType getType();

    /**
     * One referenced race of a Gaudi-Modus instance, in configured order, with its participants
     * and (for Punkte-Mischwertung) the weight its points count with.
     */
    record RaceParticipants(Long raceId, Race race, double weight, List<Participant> participants) {
    }

    List<GaudiRankingEntryResponse> computeRanking(GaudiMode gaudiMode, List<RaceParticipants> races);

    /**
     * Persons referenced by the combined races who were excluded from {@link #computeRanking} for
     * missing a valid result in at least one leg, so a PDF export can list them separately as "nicht
     * gewertet" (DNS) instead of silently dropping them. Implemented by the two calculators that
     * combine several races per person (Zeit-Kombination, Punkte-Mischwertung) and by Los-Modus,
     * which reports whole pairs (label in lastName) with a member lacking a result. Mannschaftswertung
     * keeps this default empty implementation.
     */
    default List<GaudiDnsEntryResponse> computeDnsEntries(GaudiMode gaudiMode, List<RaceParticipants> races) {
        return List.of();
    }

    /**
     * Each race's own within-race places, keyed by raceId then participantId - shared by the two
     * multi-race calculators (Zeit-Kombination, Punkte-Mischwertung) that both need "what place did
     * this participant get in their own race" to build their per-leg breakdown.
     */
    static Map<Long, Map<Long, Integer>> computePlacesByRace(RankingService rankingService, List<RaceParticipants> races) {
        Map<Long, Map<Long, Integer>> placesByRace = new HashMap<>();
        for (RaceParticipants race : races) {
            placesByRace.put(race.raceId(), rankingService.computePlaces(race.race(), race.participants()));
        }
        return placesByRace;
    }

    /**
     * Re-groups every race's participants by person instead of by race - one row per (personId,
     * raceId) - so a multi-race calculator can look up "this person's participant record in race
     * X" while matching people across races. Shared by the two multi-race calculators.
     */
    static Map<Long, Map<Long, Participant>> groupParticipantsByPersonAndRace(List<RaceParticipants> races) {
        Map<Long, Map<Long, Participant>> byPersonAndRace = new LinkedHashMap<>();
        for (RaceParticipants race : races) {
            for (Participant p : race.participants()) {
                byPersonAndRace
                        .computeIfAbsent(p.personId(), _ -> new HashMap<>())
                        .put(race.raceId(), p);
            }
        }
        return byPersonAndRace;
    }
}
