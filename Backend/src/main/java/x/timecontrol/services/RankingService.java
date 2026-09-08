package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Race;
import x.timecontrol.entities.SortDirection;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Central place for ranking logic that needs to respect a Race's result unit/sort direction and a
 * Participant's penalty: which raw value actually counts, how participants of one race compare, and
 * standard competition ("1224") place assignment where tied participants share a place and the next
 * distinct value's place is skipped accordingly.
 */
@Singleton
public class RankingService {

    /**
     * The value that actually counts for ranking: the raw measured result adjusted by the penalty.
     * A penalty always makes the result worse, regardless of sort direction. Null if no result was measured.
     */
    public Integer adjustedValue(Race race, Participant participant) {
        if (participant.durationMs() == null) {
            return null;
        }
        int penalty = participant.penalty() != null ? participant.penalty() : 0;
        return race.sortDirection() == SortDirection.DESC
                ? participant.durationMs() - penalty
                : participant.durationMs() + penalty;
    }

    public Comparator<Participant> comparator(Race race) {
        Comparator<Participant> ascending = Comparator.comparing(
                p -> adjustedValue(race, p),
                Comparator.nullsLast(Comparator.naturalOrder())
        );
        return race.sortDirection() == SortDirection.DESC ? ascending.reversed() : ascending;
    }

    /**
     * Standard competition ranking (place 1, 2, 2, 4, ...): participants without a result are excluded.
     */
    public Map<Long, Integer> computePlaces(Race race, List<Participant> participants) {
        List<Participant> ranked = new ArrayList<>(participants.stream()
                .filter(p -> adjustedValue(race, p) != null)
                .toList());
        ranked.sort(comparator(race));

        Map<Long, Integer> places = new HashMap<>();
        Integer previousValue = null;
        int place = 0;
        for (int i = 0; i < ranked.size(); i++) {
            Participant participant = ranked.get(i);
            Integer value = adjustedValue(race, participant);
            if (previousValue == null || !value.equals(previousValue)) {
                place = i + 1;
            }
            places.put(participant.id(), place);
            previousValue = value;
        }
        return places;
    }

    /**
     * Standard competition ranking (1, 2, 2, 4, ...) for values already sorted best-to-worst:
     * equal values share a place and the next distinct value's place is skipped accordingly.
     * Shared by the Gaudi-Modus calculators, each of which ranks a different metric (pair-average
     * deviation, team total, combined time/points) but must all break ties the same way.
     */
    public List<Integer> assignStandardPlaces(List<Double> valuesBestToWorst) {
        List<Integer> places = new ArrayList<>(valuesBestToWorst.size());
        Double previousValue = null;
        int place = 0;
        for (int i = 0; i < valuesBestToWorst.size(); i++) {
            Double value = valuesBestToWorst.get(i);
            if (previousValue == null || !value.equals(previousValue)) {
                place = i + 1;
            }
            places.add(place);
            previousValue = value;
        }
        return places;
    }
}
