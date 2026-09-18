package x.timecontrol.services.gaudi;

import jakarta.inject.Singleton;
import x.timecontrol.dto.GaudiDnsEntryResponse;
import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.dto.GaudiRankingLegResponse;
import x.timecontrol.entities.DisqualificationStatus;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.GaudiModeType;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.entities.Person;
import x.timecontrol.entities.PointsScale;
import x.timecontrol.entities.Team;
import x.timecontrol.services.AgeGroupService;
import x.timecontrol.services.PersonService;
import x.timecontrol.services.PointsScaleService;
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
 * Punkte-Mischwertung: per race, each participant's place is looked up in a Punkteschema
 * (place -> points), multiplied by that race's weight. Participants are matched across races by
 * Person; points are summed across races - highest total wins. By default only a person with a
 * valid, ranked result in EVERY referenced race is included; {@link GaudiMode#keepDnsInRanking()}/
 * {@link GaudiMode#keepDnfInRanking()}/{@link GaudiMode#keepDsqInRanking()} each independently
 * relax that for a leg of their specific status (see {@link #isEligibleForRanking}).
 */
@Singleton
public class PointsCombinationModeCalculator implements GaudiModeCalculator {

    private static final String DEFAULT_SCALE_NAME = "FIS-Schema";

    private final RankingService rankingService;
    private final PersonService personService;
    private final PointsScaleService pointsScaleService;
    private final TeamService teamService;
    private final AgeGroupService ageGroupService;

    public PointsCombinationModeCalculator(RankingService rankingService, PersonService personService,
                                            PointsScaleService pointsScaleService, TeamService teamService,
                                            AgeGroupService ageGroupService) {
        this.rankingService = rankingService;
        this.personService = personService;
        this.pointsScaleService = pointsScaleService;
        this.teamService = teamService;
        this.ageGroupService = ageGroupService;
    }

    @Override
    public GaudiModeType getType() {
        return GaudiModeType.POINTS_COMBINATION;
    }

    @Override
    public List<GaudiRankingEntryResponse> computeRanking(GaudiMode gaudiMode, List<RaceParticipants> races) {
        if (races.isEmpty()) {
            return List.of();
        }

        PointsScale scale = Optional.ofNullable(gaudiMode.pointsScaleId())
                .flatMap(pointsScaleService::findById)
                .or(() -> pointsScaleService.findByName(DEFAULT_SCALE_NAME))
                .orElse(null);
        if (scale == null) {
            return List.of();
        }

        Map<Long, Map<Long, Integer>> placesByRace = GaudiModeCalculator.computePlacesByRace(rankingService, races);
        Map<Long, Map<Long, Participant>> participantByPersonAndRace = GaudiModeCalculator.groupParticipantsByPersonAndRace(races);
        // Parsed once here rather than inside pointsForPlace() on every call below (person x race).
        List<Integer> scalePoints = pointsScaleService.parsePoints(scale);
        // Batch-loaded once for all persons/teams referenced by any leg race, instead of one
        // findById() per person and per race-x-person team lookup in the loop below.
        Map<Long, Person> personsById = personService.findByIds(participantByPersonAndRace.keySet());
        Map<Long, Team> teamsById = teamService.findByIds(collectTeamIds(participantByPersonAndRace));

        record PersonResult(Long personId, String label, String externalId, int totalPoints, List<GaudiRankingLegResponse> legs, String team) {
        }

        List<PersonResult> results = new ArrayList<>();

        for (Map.Entry<Long, Map<Long, Participant>> entry : participantByPersonAndRace.entrySet()) {
            Long personId = entry.getKey();
            Map<Long, Participant> byRace = entry.getValue();

            if (!isEligibleForRanking(gaudiMode, races, byRace, placesByRace)) {
                continue;
            }

            List<GaudiRankingLegResponse> legs = new ArrayList<>();
            // Each leg's weighted points are kept as a double and only the total is rounded below -
            // rounding every leg separately compounds error across legs for a non-integer weight
            // (e.g. two legs at weight 0.5 would round 16.5 -> 17 twice instead of the correct 33),
            // which would otherwise flip close placings. Per-leg points shown in the response are
            // still rounded individually - only for display, the total below is not derived from them.
            double weightedTotal = 0;
            for (RaceParticipants race : races) {
                Participant p = byRace.get(race.raceId());
                Integer place = p != null ? placesByRace.get(race.raceId()).get(p.id()) : null;
                Integer adjusted = p != null ? rankingService.adjustedValue(race.race(), p) : null;
                double weightedPoints = place != null ? pointsScaleService.pointsForPlace(scalePoints, place) * race.weight() : 0;
                weightedTotal += weightedPoints;
                // A leg without a place shows its effective DSQ/DNF/DNS status (falling back to the
                // generic "DNS" for a missing Participant record or a status-less missing result) -
                // only reachable here at all when that status's own keep*InRanking flag kept the
                // person in the ranking despite this leg, since a null place otherwise means
                // isEligibleForRanking excluded them entirely.
                String legStatus = place != null ? null : effectiveStatus(p).name();
                legs.add(new GaudiRankingLegResponse(
                        race.raceId(),
                        race.race().name(),
                        p != null ? p.durationMs() : null,
                        p != null ? p.penalty() : null,
                        adjusted,
                        place,
                        (int) Math.round(weightedPoints),
                        legStatus,
                        p != null ? rankingService.startGroupOffsetMs(race.race(), p) : null
                ));
            }
            int totalPoints = (int) Math.round(weightedTotal);

            Optional<Person> person = Optional.ofNullable(personsById.get(personId));
            String label = person.map(personService::displayName).orElse("Unbekannt");
            String externalId = person.map(Person::externalId).orElse(null);
            String team = teamOf(races, byRace, teamsById);
            results.add(new PersonResult(personId, label, externalId, totalPoints, legs, team));
        }

        results.sort(Comparator.comparingInt(PersonResult::totalPoints).reversed());
        List<Integer> places = rankingService.assignStandardPlaces(results.stream().map(r -> (double) r.totalPoints()).toList());

        List<GaudiRankingEntryResponse> entries = new ArrayList<>();
        for (int i = 0; i < results.size(); i++) {
            PersonResult r = results.get(i);
            entries.add(new GaudiRankingEntryResponse(
                    places.get(i),
                    r.label(),
                    null,
                    null,
                    null,
                    null,
                    null,
                    r.totalPoints(),
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
     * The complement of {@link #computeRanking}'s {@link #isEligibleForRanking} filter: every person
     * referenced by at least one leg race who wasn't included in the combined ranking, reported as
     * "nicht gewertet" (DNS) instead of silently dropped.
     */
    @Override
    public List<GaudiDnsEntryResponse> computeDnsEntries(GaudiMode gaudiMode, List<RaceParticipants> races) {
        if (races.isEmpty()) {
            return List.of();
        }

        Map<Long, Map<Long, Integer>> placesByRace = GaudiModeCalculator.computePlacesByRace(rankingService, races);
        Map<Long, Map<Long, Participant>> participantByPersonAndRace = GaudiModeCalculator.groupParticipantsByPersonAndRace(races);
        List<AgeGroup> ageGroups = StreamSupport.stream(ageGroupService.findAll().spliterator(), false).toList();
        Map<Long, Person> personsById = personService.findByIds(participantByPersonAndRace.keySet());
        Map<Long, Team> teamsById = teamService.findByIds(collectTeamIds(participantByPersonAndRace));

        List<GaudiDnsEntryResponse> dns = new ArrayList<>();
        for (Map.Entry<Long, Map<Long, Participant>> entry : participantByPersonAndRace.entrySet()) {
            Map<Long, Participant> byRace = entry.getValue();

            if (isEligibleForRanking(gaudiMode, races, byRace, placesByRace)) {
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
     * Whether a person is included in the combined ranking, considering only races that actually
     * count towards the total (weight != 0 - a race weighted 0 is meant to be ignored, not to
     * disqualify a person who has no result there, regardless of the rest of this method).
     *
     * <p>Every counted race must either have a valid, ranked result, or be a "bad" leg (no
     * {@link Participant} record, or one with no place because of DSQ/DNF/DNS) whose specific status
     * is tolerated by the matching {@link GaudiMode#keepDnsInRanking()}/{@link GaudiMode#keepDnfInRanking()}/
     * {@link GaudiMode#keepDsqInRanking()} flag - a bad leg whose flag is off still drops the person
     * entirely, exactly like before those flags existed (they are reported by
     * {@link #computeDnsEntries} instead). A tolerated bad leg gives 0 points instead (see
     * {@link #computeRanking}).
     *
     * <p>Independently of the flags, a person with NO valid result in any counted race is always
     * excluded - someone who never actually raced doesn't belong in a "combined" ranking with 0
     * points just because every status happens to be tolerated, they belong in "nicht gewertet".
     */
    private boolean isEligibleForRanking(GaudiMode gaudiMode, List<RaceParticipants> races,
                                          Map<Long, Participant> byRace, Map<Long, Map<Long, Integer>> placesByRace) {
        List<RaceParticipants> requiredRaces = races.stream().filter(race -> race.weight() != 0).toList();
        if (requiredRaces.isEmpty()) {
            return true;
        }
        boolean anyValid = requiredRaces.stream().anyMatch(race -> hasValidPlace(race, byRace, placesByRace));
        if (!anyValid) {
            return false;
        }
        return requiredRaces.stream().allMatch(race ->
                hasValidPlace(race, byRace, placesByRace) || isTolerated(gaudiMode, effectiveStatus(byRace.get(race.raceId()))));
    }

    private static boolean hasValidPlace(RaceParticipants race, Map<Long, Participant> byRace,
                                          Map<Long, Map<Long, Integer>> placesByRace) {
        Participant p = byRace.get(race.raceId());
        return p != null && placesByRace.get(race.raceId()).get(p.id()) != null;
    }

    /**
     * The status that explains why a leg has no place: the participant's explicit DSQ/DNF/DNS
     * status if one was recorded, otherwise the generic DNS fallback - for a missing
     * {@link Participant} record (never entered that race) or one simply missing a measured result
     * with no recorded reason, exactly mirroring {@link RankingService#dnsStatusLabel(Participant)}.
     */
    private static DisqualificationStatus effectiveStatus(Participant p) {
        DisqualificationStatus status = p != null ? p.status() : null;
        return status != null && status != DisqualificationStatus.NONE ? status : DisqualificationStatus.DNS;
    }

    private static boolean isTolerated(GaudiMode gaudiMode, DisqualificationStatus status) {
        return switch (status) {
            case DNS -> gaudiMode.keepDnsInRanking();
            case DNF -> gaudiMode.keepDnfInRanking();
            case DSQ -> gaudiMode.keepDsqInRanking();
            case NONE -> true;
        };
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
