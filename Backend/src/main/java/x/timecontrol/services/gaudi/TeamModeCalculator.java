package x.timecontrol.services.gaudi;

import jakarta.inject.Singleton;
import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.GaudiModeType;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Team;
import x.timecontrol.repositories.TeamRepository;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Mannschaftswertung: a configurable number of the fastest participants per team are summed up.
 * Teams with fewer participants than the configured team size do not qualify.
 */
@Singleton
public class TeamModeCalculator implements GaudiModeCalculator {

    private final TeamRepository teamRepository;

    public TeamModeCalculator(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    @Override
    public GaudiModeType getType() {
        return GaudiModeType.TEAM;
    }

    @Override
    public List<GaudiRankingEntryResponse> computeRanking(GaudiMode gaudiMode, List<RaceParticipants> races) {
        if (races.isEmpty()) {
            return List.of();
        }
        List<Participant> raceParticipants = races.get(0).participants();
        int teamSize = gaudiMode.teamSize() != null ? gaudiMode.teamSize() : 1;

        Map<Long, List<Participant>> membersByTeam = raceParticipants.stream()
                .filter(p -> p.teamId() != null && p.durationMs() != null)
                .collect(Collectors.groupingBy(Participant::teamId));

        record TeamResult(String label, long totalMs) {
        }

        List<TeamResult> results = new ArrayList<>();

        for (Map.Entry<Long, List<Participant>> entry : membersByTeam.entrySet()) {
            List<Participant> members = entry.getValue();
            if (members.size() < teamSize) {
                continue;
            }

            long totalMs = members.stream()
                    .map(Participant::durationMs)
                    .sorted()
                    .limit(teamSize)
                    .mapToLong(Integer::longValue)
                    .sum();

            String teamName = teamRepository.findById(entry.getKey())
                    .map(Team::name)
                    .orElse("Team " + entry.getKey());

            results.add(new TeamResult(teamName, totalMs));
        }

        results.sort(Comparator.comparingLong(TeamResult::totalMs));

        List<GaudiRankingEntryResponse> ranking = new ArrayList<>();
        for (int i = 0; i < results.size(); i++) {
            TeamResult r = results.get(i);
            ranking.add(new GaudiRankingEntryResponse(
                    i + 1,
                    r.label(),
                    null,
                    null,
                    (int) r.totalMs(),
                    null,
                    null,
                    null,
                    null
            ));
        }

        return ranking;
    }
}
