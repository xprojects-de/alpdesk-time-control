package x.timecontrol.services.gaudi;

import jakarta.inject.Singleton;
import x.timecontrol.dto.GaudiDnsEntryResponse;
import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.dto.GaudiRankingLegResponse;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.GaudiModeType;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.entities.Person;
import x.timecontrol.entities.Team;
import x.timecontrol.services.AgeGroupService;
import x.timecontrol.services.PersonService;
import x.timecontrol.services.RankingService;
import x.timecontrol.services.TeamService;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.StreamSupport;

/**
 * Zeit-Kombination: sums each participant's adjusted time (raw time + penalty, per race sort
 * direction), multiplied by that race's configured weight, across all referenced races.
 * Participants are matched across races by Person; only a person with a valid result in EVERY
 * referenced race is included in the combined ranking.
 */
@Singleton
public class TimeCombinationModeCalculator implements GaudiModeCalculator {

    private final RankingService rankingService;
    private final PersonService personService;
    private final TeamService teamService;
    private final AgeGroupService ageGroupService;

    public TimeCombinationModeCalculator(RankingService rankingService, PersonService personService,
                                          TeamService teamService, AgeGroupService ageGroupService) {
        this.rankingService = rankingService;
        this.personService = personService;
        this.teamService = teamService;
        this.ageGroupService = ageGroupService;
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

        record PersonResult(String label, String externalId, int totalMs, List<GaudiRankingLegResponse> legs, String team) {
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
            // Accumulated as a double and rounded only once at the end (not per leg) - rounding
            // each weighted leg separately compounds error across legs for a non-integer weight
            // (e.g. two legs at weight 0.5 would round 16.5 -> 17 twice instead of the correct 33).
            double weightedTotal = 0;
            for (RaceParticipants race : races) {
                Participant p = byRace.get(race.raceId());
                Integer adjusted = rankingService.adjustedValue(race.race(), p);
                weightedTotal += adjusted * race.weight();
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
            int total = (int) Math.round(weightedTotal);

            Optional<Person> person = personService.findById(personId);
            String label = person.map(personService::displayName).orElse("Unbekannt");
            String externalId = person.map(Person::externalId).orElse(null);
            String team = teamOf(races, byRace);
            results.add(new PersonResult(label, externalId, total, legs, team));
        }

        results.sort(Comparator.comparingInt(PersonResult::totalMs));
        List<Integer> places = rankingService.assignStandardPlaces(results.stream().map(r -> (double) r.totalMs()).toList());

        List<GaudiRankingEntryResponse> entries = new ArrayList<>();
        Integer leaderMs = results.isEmpty() ? null : results.getFirst().totalMs();
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
                    null,
                    r.externalId()
            ));
        }

        return entries;
    }

    /**
     * The complement of {@link #computeRanking}'s completeness filter: every person referenced by at
     * least one leg race who is missing a valid result in at least one other leg, so they never made
     * it into the combined ranking - reported as "nicht gewertet" (DNS) instead of silently dropped.
     */
    @Override
    public List<GaudiDnsEntryResponse> computeDnsEntries(GaudiMode gaudiMode, List<RaceParticipants> races) {
        if (races.isEmpty()) {
            return List.of();
        }

        Map<Long, Map<Long, Participant>> participantByPersonAndRace = GaudiModeCalculator.groupParticipantsByPersonAndRace(races);
        List<AgeGroup> ageGroups = StreamSupport.stream(ageGroupService.findAll().spliterator(), false).toList();

        List<GaudiDnsEntryResponse> dns = new ArrayList<>();
        for (Map.Entry<Long, Map<Long, Participant>> entry : participantByPersonAndRace.entrySet()) {
            Map<Long, Participant> byRace = entry.getValue();

            boolean completeAllLegs = races.stream().allMatch(race -> {
                Participant p = byRace.get(race.raceId());
                return p != null && rankingService.adjustedValue(race.race(), p) != null;
            });
            if (completeAllLegs) {
                continue;
            }

            Optional<Person> person = personService.findById(entry.getKey());
            String lastName = person.map(Person::lastName).orElse("Unbekannt");
            String firstName = person.map(Person::firstName).orElse("");
            String ageGroup = person.map(p -> ageGroupService.calculateAgeGroupName(p.birthDate(), ageGroups)).orElse("Unbekannt");
            String externalId = person.map(Person::externalId).orElse(null);
            String status = rankingService.dnsStatusLabel(byRace.values());
            dns.add(new GaudiDnsEntryResponse(lastName, firstName, teamOf(races, byRace), ageGroup, externalId, status));
        }

        dns.sort(Comparator.comparing(GaudiDnsEntryResponse::lastName, Comparator.nullsLast(String.CASE_INSENSITIVE_ORDER))
                .thenComparing(GaudiDnsEntryResponse::firstName, Comparator.nullsLast(String.CASE_INSENSITIVE_ORDER)));
        return dns;
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
