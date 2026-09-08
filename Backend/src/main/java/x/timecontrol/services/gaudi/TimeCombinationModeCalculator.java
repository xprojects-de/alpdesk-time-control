package x.timecontrol.services.gaudi;

import jakarta.inject.Singleton;
import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.dto.GaudiRankingLegResponse;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.GaudiModeType;
import x.timecontrol.entities.Participant;
import x.timecontrol.services.PersonService;
import x.timecontrol.services.RankingService;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Zeit-Kombination: sums each participant's adjusted time (raw time + penalty, per race sort
 * direction) across all referenced races. Participants are matched across races by Person; only
 * a person with a valid result in EVERY referenced race is included in the combined ranking.
 */
@Singleton
public class TimeCombinationModeCalculator implements GaudiModeCalculator {

    private final RankingService rankingService;
    private final PersonService personService;

    public TimeCombinationModeCalculator(RankingService rankingService, PersonService personService) {
        this.rankingService = rankingService;
        this.personService = personService;
    }

    @Override
    public GaudiModeType getType() {
        return GaudiModeType.TIME_COMBINATION;
    }

    @Override
    public List<GaudiRankingEntryResponse> computeRanking(GaudiMode gaudiMode, List<RaceParticipants> races) {
        if (races.isEmpty()) {
            return List.of();
        }

        Map<Long, Map<Long, Integer>> placesByRace = new HashMap<>();
        for (RaceParticipants race : races) {
            placesByRace.put(race.raceId(), rankingService.computePlaces(race.race(), race.participants()));
        }

        // one participant row per (personId, raceId), so a leg can be looked up per person
        Map<Long, Map<Long, Participant>> participantByPersonAndRace = new LinkedHashMap<>();
        for (RaceParticipants race : races) {
            for (Participant p : race.participants()) {
                participantByPersonAndRace
                        .computeIfAbsent(p.personId(), k -> new HashMap<>())
                        .put(race.raceId(), p);
            }
        }

        record PersonResult(String label, int totalMs, List<GaudiRankingLegResponse> legs) {
        }

        List<PersonResult> results = new ArrayList<>();

        for (Map.Entry<Long, Map<Long, Participant>> entry : participantByPersonAndRace.entrySet()) {
            Long personId = entry.getKey();
            Map<Long, Participant> byRace = entry.getValue();

            boolean completeAllLegs = races.stream().allMatch(race -> {
                Participant p = byRace.get(race.raceId());
                return p != null && rankingService.adjustedValue(race.race(), p) != null;
            });
            if (!completeAllLegs) {
                continue;
            }

            List<GaudiRankingLegResponse> legs = new ArrayList<>();
            int total = 0;
            for (RaceParticipants race : races) {
                Participant p = byRace.get(race.raceId());
                Integer adjusted = rankingService.adjustedValue(race.race(), p);
                total += adjusted;
                legs.add(new GaudiRankingLegResponse(
                        race.raceId(),
                        race.race().name(),
                        p.durationMs(),
                        p.penalty(),
                        adjusted,
                        placesByRace.get(race.raceId()).get(p.id()),
                        null
                ));
            }

            String label = personService.findById(personId).map(personService::displayName).orElse("Unbekannt");
            results.add(new PersonResult(label, total, legs));
        }

        results.sort(Comparator.comparingInt(PersonResult::totalMs));
        List<Integer> places = rankingService.assignStandardPlaces(results.stream().map(r -> (double) r.totalMs()).toList());

        List<GaudiRankingEntryResponse> entries = new ArrayList<>();
        Integer leaderMs = results.isEmpty() ? null : results.get(0).totalMs();
        for (int i = 0; i < results.size(); i++) {
            PersonResult r = results.get(i);
            entries.add(new GaudiRankingEntryResponse(
                    places.get(i),
                    r.label(),
                    null,
                    null,
                    r.totalMs(),
                    leaderMs,
                    r.totalMs() == leaderMs ? null : r.totalMs() - leaderMs,
                    null,
                    r.legs()
            ));
        }

        return entries;
    }
}
