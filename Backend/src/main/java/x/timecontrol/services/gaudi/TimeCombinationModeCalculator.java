package x.timecontrol.services.gaudi;

import jakarta.inject.Singleton;
import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.dto.GaudiRankingLegResponse;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.GaudiModeType;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Team;
import x.timecontrol.services.PersonService;
import x.timecontrol.services.RankingService;
import x.timecontrol.services.TeamService;

import java.util.ArrayList;
import java.util.Comparator;
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
    private final TeamService teamService;

    public TimeCombinationModeCalculator(RankingService rankingService, PersonService personService, TeamService teamService) {
        this.rankingService = rankingService;
        this.personService = personService;
        this.teamService = teamService;
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

        Map<Long, Map<Long, Integer>> placesByRace = GaudiModeCalculator.computePlacesByRace(rankingService, races);
        Map<Long, Map<Long, Participant>> participantByPersonAndRace = GaudiModeCalculator.groupParticipantsByPersonAndRace(races);

        record PersonResult(String label, int totalMs, List<GaudiRankingLegResponse> legs, String team) {
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
            String team = teamOf(races, byRace);
            results.add(new PersonResult(label, total, legs, team));
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
                    r.legs(),
                    r.team(),
                    null,
                    null
            ));
        }

        return entries;
    }

    /**
     * A person's team is expected to stay the same across the referenced races; picks the first
     * race (in the given order) where the person has a resolvable team, rather than requiring it
     * to be repeated identically on every leg.
     */
    private String teamOf(List<RaceParticipants> races, Map<Long, Participant> byRace) {
        for (RaceParticipants race : races) {
            Participant p = byRace.get(race.raceId());
            if (p != null && p.teamId() != null) {
                String name = teamService.findById(p.teamId()).map(Team::name).orElse(null);
                if (name != null) {
                    return name;
                }
            }
        }
        return null;
    }
}
