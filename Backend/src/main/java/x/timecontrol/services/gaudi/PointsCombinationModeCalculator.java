package x.timecontrol.services.gaudi;

import jakarta.inject.Singleton;
import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.dto.GaudiRankingLegResponse;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.GaudiModeType;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.PointsScale;
import x.timecontrol.services.PersonService;
import x.timecontrol.services.PointsScaleService;
import x.timecontrol.services.RankingService;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;

/**
 * Punkte-Mischwertung: per race, each participant's place is looked up in a Punkteschema
 * (place -> points), multiplied by that race's weight. Participants are matched across races by
 * Person; only a person with a valid, ranked result in EVERY referenced race is included, and
 * points are summed across races - highest total wins.
 */
@Singleton
public class PointsCombinationModeCalculator implements GaudiModeCalculator {

    private static final String DEFAULT_SCALE_NAME = "FIS-Schema";

    private final RankingService rankingService;
    private final PersonService personService;
    private final PointsScaleService pointsScaleService;

    public PointsCombinationModeCalculator(RankingService rankingService, PersonService personService, PointsScaleService pointsScaleService) {
        this.rankingService = rankingService;
        this.personService = personService;
        this.pointsScaleService = pointsScaleService;
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

        PointsScale scale = (gaudiMode.pointsScaleId() != null ? pointsScaleService.findById(gaudiMode.pointsScaleId()) : null)
                .or(() -> pointsScaleService.findByName(DEFAULT_SCALE_NAME))
                .orElse(null);
        if (scale == null) {
            return List.of();
        }

        Map<Long, Map<Long, Integer>> placesByRace = GaudiModeCalculator.computePlacesByRace(rankingService, races);
        Map<Long, Map<Long, Participant>> participantByPersonAndRace = GaudiModeCalculator.groupParticipantsByPersonAndRace(races);
        // Parsed once here rather than inside pointsForPlace() on every call below (person x race).
        List<Integer> scalePoints = pointsScaleService.parsePoints(scale);

        record PersonResult(String label, int totalPoints, List<GaudiRankingLegResponse> legs) {
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
                        return p != null && placesByRace.get(race.raceId()).get(p.id()) != null;
                    });
            if (!completeRequiredLegs) {
                continue;
            }

            List<GaudiRankingLegResponse> legs = new ArrayList<>();
            int totalPoints = 0;
            for (RaceParticipants race : races) {
                Participant p = byRace.get(race.raceId());
                Integer place = p != null ? placesByRace.get(race.raceId()).get(p.id()) : null;
                Integer adjusted = p != null ? rankingService.adjustedValue(race.race(), p) : null;
                int points = place != null ? (int) Math.round(pointsScaleService.pointsForPlace(scalePoints, place) * race.weight()) : 0;
                totalPoints += points;
                legs.add(new GaudiRankingLegResponse(
                        race.raceId(),
                        race.race().name(),
                        p != null ? p.durationMs() : null,
                        p != null ? p.penalty() : null,
                        adjusted,
                        place,
                        points
                ));
            }

            String label = personService.findById(personId).map(personService::displayName).orElse("Unbekannt");
            results.add(new PersonResult(label, totalPoints, legs));
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
                    r.legs()
            ));
        }

        return entries;
    }
}
