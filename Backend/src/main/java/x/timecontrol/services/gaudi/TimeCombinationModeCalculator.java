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
import x.timecontrol.entities.Race;
import x.timecontrol.entities.SortDirection;
import x.timecontrol.entities.Team;
import x.timecontrol.services.AgeGroupService;
import x.timecontrol.services.PersonService;
import x.timecontrol.services.RankingService;
import x.timecontrol.services.TeamService;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * Zeit-Kombination: sums each participant's adjusted time (raw time + penalty, per race sort
 * direction), multiplied by that race's configured weight, across all referenced races.
 * Participants are matched across races by Person; a race weighted 0 is treated as optional (it
 * contributes nothing to the total), so only a person with a valid result in every race weighted
 * non-zero is included in the combined ranking.
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
        // Batch-loaded once for all persons/teams referenced by any leg race, instead of one
        // findById() per person and per race-x-person team lookup in the loop below.
        Map<Long, Person> personsById = personService.findByIds(participantByPersonAndRace.keySet());
        Map<Long, Team> teamsById = teamService.findByIds(collectTeamIds(participantByPersonAndRace));

        record PersonResult(Long personId, String label, String externalId, int totalMs, List<GaudiRankingLegResponse> legs,
                            String team) {
        }

        List<PersonResult> results = new ArrayList<>();

        for (Map.Entry<Long, Map<Long, Participant>> entry : participantByPersonAndRace.entrySet()) {
            Long personId = entry.getKey();
            Map<Long, Participant> byRace = entry.getValue();

            // A race weighted 0 is meant to be ignored, not to disqualify a person who has no
            // result there - only races that actually count towards the total require completeness.
            boolean completeRequiredLegs = races.stream()
                    .filter(race -> race.weight() != 0)
                    .allMatch(race -> {
                        Participant p = byRace.get(race.raceId());
                        return p != null && rankingService.adjustedValue(race.race(), p) != null;
                    });
            if (!completeRequiredLegs) {
                continue;
            }

            List<GaudiRankingLegResponse> legs = new ArrayList<>();
            // Each leg counts with the value its own race prints and ranks on (rounded to the
            // hundredth for TIME races, RankingService#roundForDisplay) - summing the raw ms
            // instead would let the combined total disagree with the printed legs: 10.004s four
            // times prints as 10.00 each but sums to 40.016 -> 40.02, tying someone who printed
            // 10.01 four times. The weighted sum is accumulated as a double and rounded only once
            // at the end (not per leg) - rounding each weighted leg separately compounds error
            // across legs for a non-integer weight (e.g. two legs at weight 0.5 would round
            // 16.5 -> 17 twice instead of the correct 33).
            double weightedTotal = 0;
            for (RaceParticipants race : races) {
                Participant p = byRace.get(race.raceId());
                Integer adjusted = p != null ? rankingService.adjustedValue(race.race(), p) : null;
                if (adjusted != null) {
                    weightedTotal += rankingService.roundForDisplay(race.race(), adjusted) * race.weight();
                }
                legs.add(new GaudiRankingLegResponse(
                        race.raceId(),
                        race.race().name(),
                        p != null ? p.durationMs() : null,
                        p != null ? p.penalty() : null,
                        adjusted,
                        p != null ? placesByRace.get(race.raceId()).get(p.id()) : null,
                        null,
                        null,
                        p != null ? rankingService.startGroupOffsetMs(race.race(), p) : null
                ));
            }
            int total = (int) Math.round(weightedTotal);

            Optional<Person> person = Optional.ofNullable(personsById.get(personId));
            String label = person.map(personService::displayName).orElse("Unbekannt");
            String externalId = person.map(Person::externalId).orElse(null);
            String team = teamOf(races, byRace, teamsById);
            results.add(new PersonResult(personId, label, externalId, total, legs, team));
        }

        // GaudiModeService.validate() guarantees every combined race shares the same sortDirection,
        // so the first race's direction applies to the combined total too - without this, a
        // TIME_COMBINATION over DESC (higher-is-better, e.g. points) races would always rank
        // ascending and award the win to the worst total instead of the best, mirroring the
        // direction-aware sort TeamModeCalculator already applies.
        Race combinedRace = races.getFirst().race();
        SortDirection sortDirection = combinedRace.sortDirection();
        Comparator<PersonResult> byTotalAscending = Comparator.comparingInt(PersonResult::totalMs);
        results.sort(sortDirection == SortDirection.DESC ? byTotalAscending.reversed() : byTotalAscending);
        List<Integer> places = rankingService.assignStandardPlaces(results.stream().map(r -> (double) r.totalMs()).toList(), combinedRace.resultUnit());

        List<GaudiRankingEntryResponse> entries = new ArrayList<>();
        // Diffed from the already-rounded display value (not the raw totalMs) so a printed
        // "Rückstand" always equals the difference of the two printed "Gesamt" totals - see
        // RankingService#roundForDisplay.
        Integer leaderDisplayMs = results.isEmpty() ? null : rankingService.roundForDisplay(combinedRace, results.getFirst().totalMs());
        for (int i = 0; i < results.size(); i++) {
            PersonResult r = results.get(i);
            Integer displayMs = rankingService.roundForDisplay(combinedRace, r.totalMs());
            entries.add(new GaudiRankingEntryResponse(
                    places.get(i),
                    r.label(),
                    null,
                    null,
                    r.totalMs(),
                    leaderDisplayMs,
                    displayMs.equals(leaderDisplayMs) ? null : displayMs - leaderDisplayMs,
                    null,
                    r.legs(),
                    r.team(),
                    null,
                    r.personId(),
                    r.externalId()
            ));
        }

        return entries;
    }

    /**
     * The complement of {@link #computeRanking}'s completeness filter: every person referenced by at
     * least one leg race who lacks a valid result in at least one other required (non-zero-weight)
     * leg, so they never made it into the combined ranking - reported as "nicht gewertet" (DNS)
     * instead of silently dropped.
     */
    @Override
    public List<GaudiDnsEntryResponse> computeDnsEntries(GaudiMode gaudiMode, List<RaceParticipants> races) {
        if (races.isEmpty()) {
            return List.of();
        }

        Map<Long, Map<Long, Participant>> participantByPersonAndRace = GaudiModeCalculator.groupParticipantsByPersonAndRace(races);
        List<AgeGroup> ageGroups = StreamSupport.stream(ageGroupService.findAll().spliterator(), false).toList();
        Map<Long, Person> personsById = personService.findByIds(participantByPersonAndRace.keySet());
        Map<Long, Team> teamsById = teamService.findByIds(collectTeamIds(participantByPersonAndRace));

        List<GaudiDnsEntryResponse> dns = new ArrayList<>();
        for (Map.Entry<Long, Map<Long, Participant>> entry : participantByPersonAndRace.entrySet()) {
            Map<Long, Participant> byRace = entry.getValue();

            boolean completeRequiredLegs = races.stream()
                    .filter(race -> race.weight() != 0)
                    .allMatch(race -> {
                        Participant p = byRace.get(race.raceId());
                        return p != null && rankingService.adjustedValue(race.race(), p) != null;
                    });
            if (completeRequiredLegs) {
                continue;
            }

            Optional<Person> person = Optional.ofNullable(personsById.get(entry.getKey()));
            String lastName = person.map(Person::lastName).orElse("Unbekannt");
            String firstName = person.map(Person::firstName).orElse("");
            String ageGroup = person.map(p -> ageGroupService.calculateAgeGroupName(p.birthDate(), p.gender(), ageGroups)).orElse("Unbekannt");
            String externalId = person.map(Person::externalId).orElse(null);
            String status = rankingService.dnsStatusLabel(byRace.values());
            dns.add(new GaudiDnsEntryResponse(lastName, firstName, teamOf(races, byRace, teamsById), ageGroup, externalId, status));
        }

        dns.sort(Comparator.comparing(GaudiDnsEntryResponse::lastName, Comparator.nullsLast(String.CASE_INSENSITIVE_ORDER))
                .thenComparing(GaudiDnsEntryResponse::firstName, Comparator.nullsLast(String.CASE_INSENSITIVE_ORDER)));
        return dns;
    }

    /**
     * All team ids referenced by any participant across any leg race, for a single batched
     * {@link TeamService#findByIds} lookup instead of one findById() per race x person.
     */
    private Set<Long> collectTeamIds(Map<Long, Map<Long, Participant>> participantByPersonAndRace) {
        return participantByPersonAndRace.values().stream()
                .flatMap(byRace -> byRace.values().stream())
                .map(Participant::teamId)
                .filter(Objects::nonNull)
                .collect(Collectors.toSet());
    }

    /**
     * A person's team is expected to stay the same across the referenced races; picks the first
     * race (in the given order) where the person has a resolvable team, rather than requiring it
     * to be repeated identically on every leg.
     */
    private String teamOf(List<RaceParticipants> races, Map<Long, Participant> byRace, Map<Long, Team> teamsById) {
        for (RaceParticipants race : races) {
            Participant p = byRace.get(race.raceId());
            if (p != null && p.teamId() != null) {
                Team team = teamsById.get(p.teamId());
                if (team != null) {
                    return team.name();
                }
            }
        }
        return null;
    }
}
