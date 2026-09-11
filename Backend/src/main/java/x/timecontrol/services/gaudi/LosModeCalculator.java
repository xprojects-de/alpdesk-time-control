package x.timecontrol.services.gaudi;

import jakarta.inject.Singleton;
import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.entities.GaudiLosPairing;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.GaudiModeType;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Race;
import x.timecontrol.entities.Team;
import x.timecontrol.repositories.GaudiLosPairingRepository;
import x.timecontrol.services.PersonService;
import x.timecontrol.services.RankingService;
import x.timecontrol.services.TeamService;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
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

        record PairResult(String label, Integer value1, Integer value2, double pairAverage, double diff, String team) {
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

            String label = (value2 != null)
                    ? formatName(p1) + " & " + formatName(p2)
                    : formatName(p1) + " (Einzel)";

            results.add(new PairResult(
                    label,
                    value1,
                    value2,
                    pairAverage,
                    Math.abs(pairAverage - overallAverage),
                    formatTeam(p1, p2)
            ));
        }

        results.sort(Comparator.comparingDouble(PairResult::diff));
        List<Integer> places = rankingService.assignStandardPlaces(results.stream().map(PairResult::diff).toList());

        List<GaudiRankingEntryResponse> entries = new ArrayList<>();
        for (int i = 0; i < results.size(); i++) {
            PairResult r = results.get(i);
            entries.add(new GaudiRankingEntryResponse(
                    places.get(i),
                    r.label(),
                    r.value1(),
                    r.value2(),
                    (int) Math.round(r.pairAverage()),
                    (int) Math.round(overallAverage),
                    (int) Math.round(r.diff()),
                    null,
                    null,
                    r.team(),
                    null,
                    null
            ));
        }

        return entries;
    }

    private String formatName(Participant p) {
        return personService.findById(p.personId())
                .map(personService::displayName)
                .orElse("Unbekannt");
    }

    /**
     * Combines both pairing members' teams into one label; when they share a team (or the second
     * member doesn't exist, e.g. a self-paired leftover), that single team name is used instead.
     */
    private String formatTeam(Participant p1, Participant p2) {
        String team1 = teamNameOf(p1);
        String team2 = p2 != null ? teamNameOf(p2) : null;
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

    private String teamNameOf(Participant p) {
        return p.teamId() != null ? teamService.findById(p.teamId()).map(Team::name).orElse(null) : null;
    }
}
