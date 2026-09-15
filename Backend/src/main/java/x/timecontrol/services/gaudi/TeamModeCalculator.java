package x.timecontrol.services.gaudi;

import jakarta.inject.Singleton;
import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.dto.GaudiTeamMemberResponse;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.GaudiModeType;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Person;
import x.timecontrol.entities.Race;
import x.timecontrol.entities.SortDirection;
import x.timecontrol.entities.Team;
import x.timecontrol.services.PersonService;
import x.timecontrol.services.RankingService;
import x.timecontrol.services.TeamService;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Mannschaftswertung: a configurable number of the fastest/best participants per team are summed
 * up, using each participant's penalty-adjusted result and respecting the race's sort direction.
 * Teams with fewer qualifying participants than the configured team size do not qualify.
 */
@Singleton
public class TeamModeCalculator implements GaudiModeCalculator {

    private final TeamService teamService;
    private final RankingService rankingService;
    private final PersonService personService;

    public TeamModeCalculator(TeamService teamService, RankingService rankingService, PersonService personService) {
        this.teamService = teamService;
        this.rankingService = rankingService;
        this.personService = personService;
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
        Race race = races.getFirst().race();
        List<Participant> raceParticipants = races.getFirst().participants();
        int teamSize = gaudiMode.teamSize() != null ? gaudiMode.teamSize() : 1;

        Map<Long, List<Participant>> membersByTeam = raceParticipants.stream()
                .filter(p -> p.teamId() != null && rankingService.adjustedValue(race, p) != null)
                .collect(Collectors.groupingBy(Participant::teamId));

        // Batch-loaded once for the whole race instead of one findById() per team member / per team.
        Map<Long, Person> personsById = personService.findByIds(
                raceParticipants.stream().map(Participant::personId).collect(Collectors.toSet()));
        Map<Long, Team> teamsById = teamService.findByIds(membersByTeam.keySet());

        record TeamResult(String label, long totalValue, List<GaudiTeamMemberResponse> members) {
        }

        Comparator<Participant> byBestFirst = rankingService.comparator(race);

        List<TeamResult> results = new ArrayList<>();

        for (Map.Entry<Long, List<Participant>> entry : membersByTeam.entrySet()) {
            List<Participant> members = entry.getValue();
            if (members.size() < teamSize) {
                continue;
            }

            // Only the counted teamSize best members are ever shown - an organizer reading the
            // result should see exactly who made up the team's scored total, not a roster
            // padded with extra squad members who didn't count towards it.
            List<Participant> countedMembers = members.stream().sorted(byBestFirst).limit(teamSize).toList();
            long totalValue = countedMembers.stream()
                    .mapToLong(p -> rankingService.adjustedValue(race, p))
                    .sum();

            List<GaudiTeamMemberResponse> memberResponses = countedMembers.stream()
                    .map(p -> new GaudiTeamMemberResponse(formatName(p, personsById), rankingService.adjustedValue(race, p)))
                    .toList();

            Team team = teamsById.get(entry.getKey());
            String teamName = team != null ? team.name() : "Team " + entry.getKey();

            results.add(new TeamResult(teamName, totalValue, memberResponses));
        }

        Comparator<TeamResult> byTotalAscending = Comparator.comparingLong(TeamResult::totalValue);
        results.sort(race.sortDirection() == SortDirection.DESC ? byTotalAscending.reversed() : byTotalAscending);
        List<Integer> places = rankingService.assignStandardPlaces(results.stream().map(r -> (double) r.totalValue()).toList());

        List<GaudiRankingEntryResponse> ranking = new ArrayList<>();
        for (int i = 0; i < results.size(); i++) {
            TeamResult r = results.get(i);
            ranking.add(new GaudiRankingEntryResponse(
                    places.get(i),
                    r.label(),
                    null,
                    null,
                    (int) r.totalValue(),
                    null,
                    null,
                    null,
                    null,
                    null,
                    r.members(),
                    null,
                    null
            ));
        }

        return ranking;
    }

    private String formatName(Participant p, Map<Long, Person> personsById) {
        Person person = personsById.get(p.personId());
        return person != null ? personService.displayName(person) : "Unbekannt";
    }
}
