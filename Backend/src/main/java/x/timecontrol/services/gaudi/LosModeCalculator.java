package x.timecontrol.services.gaudi;

import jakarta.inject.Singleton;
import x.timecontrol.dto.GaudiDnsEntryResponse;
import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.entities.GaudiLosPairing;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.GaudiModeType;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Person;
import x.timecontrol.entities.Race;
import x.timecontrol.entities.Team;
import x.timecontrol.repositories.GaudiLosPairingRepository;
import x.timecontrol.services.PersonService;
import x.timecontrol.services.RankingService;
import x.timecontrol.services.TeamService;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * Los-Modus: participants are drawn into random pairs before the race. The pair whose
 * average (penalty-adjusted) result is closest to the overall average of the race wins.
 */
@Singleton
public class LosModeCalculator implements GaudiModeCalculator {

    private final GaudiLosPairingRepository pairingRepository;
    private final PersonService personService;
    private final RankingService rankingService;
    private final TeamService teamService;

    public LosModeCalculator(GaudiLosPairingRepository pairingRepository, PersonService personService, RankingService rankingService, TeamService teamService) {
        this.pairingRepository = pairingRepository;
        this.personService = personService;
        this.rankingService = rankingService;
        this.teamService = teamService;
    }

    @Override
    public GaudiModeType getType() {
        return GaudiModeType.LOS;
    }

    @Override
    public List<GaudiRankingEntryResponse> computeRanking(GaudiMode gaudiMode, List<RaceParticipants> races) {
        if (races.isEmpty()) {
            return List.of();
        }
        Race race = races.getFirst().race();
        List<Participant> raceParticipants = races.getFirst().participants();

        Map<Long, Participant> participantsById = new HashMap<>();
        for (Participant p : raceParticipants) {
            participantsById.put(p.id(), p);
        }

        // Batch-loaded once for the whole race instead of one findById() per pairing member in the
        // formatName()/teamNameOf() calls below.
        Set<Long> personIds = raceParticipants.stream().map(Participant::personId).collect(Collectors.toSet());
        Set<Long> teamIds = raceParticipants.stream().map(Participant::teamId).filter(Objects::nonNull).collect(Collectors.toSet());
        Map<Long, Person> personsById = personService.findByIds(personIds);
        Map<Long, Team> teamsById = teamService.findByIds(teamIds);

        List<GaudiLosPairing> pairings = StreamSupport
                .stream(pairingRepository.findByGaudiModeId(gaudiMode.id()).spliterator(), false)
                .toList();

        List<Integer> allValues = raceParticipants.stream()
                .map(p -> rankingService.adjustedValue(race, p))
                .filter(Objects::nonNull)
                .toList();

        if (allValues.isEmpty() || pairings.isEmpty()) {
            return List.of();
        }

        double overallAverage = allValues.stream().mapToInt(Integer::intValue).average().orElse(0);
        // Rounded once, straight from the raw average to the printed precision of the "Ø-Wert
        // Gesamt"/"Ø-Wert Paar" columns (RankingService#roundForDisplay) - rounding to a whole ms
        // first would round twice and can land a printed hundredth off. That same rounded value is
        // both what's returned/printed and what "Abweichung" is derived from, instead of
        // independently rounding the raw gap: rounding does not distribute over subtraction, so a
        // diff computed from the raw values first and rounded once at the end can differ by a
        // printed hundredth from the difference of the two already-rounded printed values.
        int overallAverageDisplay = rankingService.roundForDisplay(race, overallAverage);

        record PairResult(String label, Integer value1, Integer value2, int pairAverageDisplay, int diffDisplay, String team) {
        }

        List<PairResult> results = new ArrayList<>();

        for (GaudiLosPairing pairing : pairings) {
            Participant p1 = participantsById.get(pairing.participant1Id());
            Participant p2 = pairing.participant2Id() != null ? participantsById.get(pairing.participant2Id()) : null;

            Integer value1 = p1 != null ? rankingService.adjustedValue(race, p1) : null;
            Integer value2 = p2 != null ? rankingService.adjustedValue(race, p2) : null;

            if (value1 == null) {
                continue;
            }
            if (pairing.participant2Id() != null && value2 == null) {
                continue;
            }

            double pairAverage = (value2 != null)
                    ? (value1 + value2) / 2.0
                    : value1;
            int pairAverageDisplay = rankingService.roundForDisplay(race, pairAverage);
            int diffDisplay = Math.abs(pairAverageDisplay - overallAverageDisplay);

            String label = (value2 != null)
                    ? formatName(p1, personsById) + " & " + formatName(p2, personsById)
                    : formatName(p1, personsById) + " (Einzel)";

            results.add(new PairResult(
                    label,
                    value1,
                    value2,
                    pairAverageDisplay,
                    diffDisplay,
                    formatTeam(p1, p2, teamsById)
            ));
        }

        results.sort(Comparator.comparingInt(PairResult::diffDisplay));
        List<Integer> places = rankingService.assignStandardPlaces(
                results.stream().map(r -> (double) r.diffDisplay()).toList(), race.resultUnit());

        List<GaudiRankingEntryResponse> entries = new ArrayList<>();
        for (int i = 0; i < results.size(); i++) {
            PairResult r = results.get(i);
            entries.add(new GaudiRankingEntryResponse(
                    places.get(i),
                    r.label(),
                    r.value1(),
                    r.value2(),
                    r.pairAverageDisplay(),
                    overallAverageDisplay,
                    r.diffDisplay(),
                    null,
                    null,
                    r.team(),
                    null,
                    null,
                    null
            ));
        }

        return entries;
    }

    /**
     * The complement of {@link #computeRanking}'s "both members need a result" rule: a pair in which
     * a member exists in the race but has no valid result (DNS/DNF/DSQ, or simply no time yet) is
     * not ranked at all - it's listed here as "nicht gewertet" instead of silently disappearing, with
     * the status of the member(s) that didn't finish. A pairing whose first member no longer exists
     * in the race (e.g. a stale pairing) is skipped, since there's nobody left to report.
     */
    @Override
    public List<GaudiDnsEntryResponse> computeDnsEntries(GaudiMode gaudiMode, List<RaceParticipants> races) {
        if (races.isEmpty()) {
            return List.of();
        }
        Race race = races.getFirst().race();
        Map<Long, Participant> participantsById = races.getFirst().participants().stream()
                .collect(Collectors.toMap(Participant::id, p -> p));

        List<Participant[]> excludedPairs = new ArrayList<>();
        Set<Long> drawnIds = new HashSet<>();
        for (GaudiLosPairing pairing : pairingRepository.findByGaudiModeId(gaudiMode.id())) {
            drawnIds.add(pairing.participant1Id());
            if (pairing.participant2Id() != null) {
                drawnIds.add(pairing.participant2Id());
            }
            Participant p1 = participantsById.get(pairing.participant1Id());
            Participant p2 = pairing.participant2Id() != null ? participantsById.get(pairing.participant2Id()) : null;
            if (p1 == null) {
                continue;
            }
            boolean p1Missing = rankingService.adjustedValue(race, p1) == null;
            boolean p2Missing = p2 != null && rankingService.adjustedValue(race, p2) == null;
            if (p1Missing || p2Missing) {
                excludedPairs.add(new Participant[]{p1, p2});
            }
        }

        // Entered but never drawn: GaudiModeService#drawLosPairing leaves out anyone already marked
        // DNS/DNF/DSQ at draw time, since pairing a known non-starter costs their partner a placing.
        // They still belong on this list - they are on the start list, and a reader who finds them
        // nowhere in the document cannot tell whether they were left out on purpose or forgotten.
        // Listed one by one rather than as a pair, because there is no partner they cost anything.
        List<Participant> notDrawn = races.getFirst().participants().stream()
                .filter(p -> !drawnIds.contains(p.id()))
                .filter(p -> rankingService.adjustedValue(race, p) == null)
                .toList();

        if (excludedPairs.isEmpty() && notDrawn.isEmpty()) {
            return List.of();
        }

        Set<Long> personIds = new HashSet<>();
        Set<Long> teamIds = new HashSet<>();
        for (Participant[] pair : excludedPairs) {
            for (Participant p : pair) {
                if (p != null) {
                    personIds.add(p.personId());
                    if (p.teamId() != null) {
                        teamIds.add(p.teamId());
                    }
                }
            }
        }
        for (Participant p : notDrawn) {
            personIds.add(p.personId());
            if (p.teamId() != null) {
                teamIds.add(p.teamId());
            }
        }
        Map<Long, Person> personsById = personService.findByIds(personIds);
        Map<Long, Team> teamsById = teamService.findByIds(teamIds);

        List<GaudiDnsEntryResponse> dns = new ArrayList<>();
        for (Participant[] pair : excludedPairs) {
            Participant p1 = pair[0];
            Participant p2 = pair[1];
            String label = p2 != null
                    ? formatName(p1, personsById) + " & " + formatName(p2, personsById)
                    : formatName(p1, personsById) + " (Einzel)";
            List<Participant> withoutResult = new ArrayList<>();
            for (Participant p : pair) {
                if (p != null && rankingService.adjustedValue(race, p) == null) {
                    withoutResult.add(p);
                }
            }
            // Pairs aren't persons, so lastName carries the whole pair label (PdfExportService joins
            // lastName + firstName into the printed name) and there's no single age group to show.
            dns.add(new GaudiDnsEntryResponse(label, "", formatTeam(p1, p2, teamsById), "-", null,
                    rankingService.dnsStatusLabel(withoutResult)));
        }
        for (Participant p : notDrawn) {
            dns.add(new GaudiDnsEntryResponse(formatName(p, personsById), "", formatTeam(p, null, teamsById),
                    "-", null, rankingService.dnsStatusLabel(List.of(p))));
        }
        dns.sort(Comparator.comparing(GaudiDnsEntryResponse::lastName, String.CASE_INSENSITIVE_ORDER));
        return dns;
    }

    private String formatName(Participant p, Map<Long, Person> personsById) {
        Person person = personsById.get(p.personId());
        return person != null ? personService.displayName(person) : "Unbekannt";
    }

    /**
     * Combines both pairing members' teams into one label; when they share a team (or the second
     * member doesn't exist, e.g. a self-paired leftover), that single team name is used instead.
     */
    private String formatTeam(Participant p1, Participant p2, Map<Long, Team> teamsById) {
        String team1 = teamNameOf(p1, teamsById);
        String team2 = p2 != null ? teamNameOf(p2, teamsById) : null;
        if (p2 == null || Objects.equals(p1.teamId(), p2.teamId())) {
            return team1;
        }
        if (team1 == null) {
            return team2;
        }
        if (team2 == null) {
            return team1;
        }
        return team1 + " / " + team2;
    }

    private String teamNameOf(Participant p, Map<Long, Team> teamsById) {
        if (p.teamId() == null) {
            return null;
        }
        Team team = teamsById.get(p.teamId());
        return team != null ? team.name() : null;
    }
}
