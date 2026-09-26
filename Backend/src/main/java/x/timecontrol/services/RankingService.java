package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.entities.DisqualificationStatus;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Race;
import x.timecontrol.entities.ResultUnit;
import x.timecontrol.entities.SortDirection;
import x.timecontrol.entities.StartGroupTemplate;

import java.util.ArrayList;
import java.util.Collection;
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

    private final StartGroupTemplateService startGroupTemplateService;

    public RankingService(StartGroupTemplateService startGroupTemplateService) {
        this.startGroupTemplateService = startGroupTemplateService;
    }

    /**
     * The value that actually counts for ranking: the raw measured result, first netted of the
     * participant's start-group offset (if any - see {@link StartGroupTemplate#offsetSeconds()},
     * resolved live via {@link Participant#startGroupId()} so editing a template's offset applies
     * to every result already recorded under it), then adjusted by the penalty. A penalty always
     * makes the result worse, regardless of sort direction. Null if no result was measured.
     */
    public Integer adjustedValue(Race race, Participant participant) {
        // A DSQ/DNF/DNS participant may well have a measured durationMs (e.g. disqualified after
        // crossing the finish line) - that result must never count towards a ranking/place.
        if (participant.durationMs() == null
                || (participant.status() != null && participant.status() != DisqualificationStatus.NONE)) {
            return null;
        }
        int durationMs = netDurationMs(race, participant);
        int penalty = participant.penalty() != null ? participant.penalty() : 0;
        int adjusted = race.sortDirection() == SortDirection.DESC
                ? durationMs - penalty
                : durationMs + penalty;
        // A penalty larger than the raw result on a DESC race (higher-is-better, e.g. points), or
        // a start-group offset larger than the raw result (e.g. a mismeasured or misconfigured
        // offset), would otherwise go negative here; formatTime()/formatDuration() render a
        // negative value as a garbled string (e.g. "-1:-05.-500") rather than failing loudly.
        // Floor at 0 to keep that impossible regardless of which direction the caller's race sorts
        // in.
        return Math.max(0, adjusted);
    }

    /**
     * The raw measured result netted of the participant's start-group offset (TIME races only),
     * before any penalty - what a "Zeit" column must show so that Zeit + Strafe = Gesamt holds for
     * block-start groups too. Null if no result was measured; floored at 0.
     */
    public Integer netDurationMs(Race race, Participant participant) {
        if (participant.durationMs() == null) {
            return null;
        }
        Integer offsetMs = startGroupOffsetMs(race, participant);
        return Math.max(0, participant.durationMs() - (offsetMs != null ? offsetMs : 0));
    }

    /**
     * The head start (in ms) a staggered block-start signal gave this participant's start group
     * against a single shared race clock - null for a points race (no notion of a start-time
     * offset), for a participant without a start group, or for a group without an offset.
     */
    public Integer startGroupOffsetMs(Race race, Participant participant) {
        if (race.resultUnit() != ResultUnit.TIME || participant.startGroupId() == null) {
            return null;
        }
        return startGroupTemplateService.findById(participant.startGroupId())
                .map(StartGroupTemplate::offsetSeconds)
                .map(seconds -> seconds * 1000)
                .orElse(null);
    }

    /**
     * The label to show for a participant excluded from a ranking ("nicht gewertet" section of a
     * PDF export): the explicit DSQ/DNF/DNS status if one was recorded, otherwise the generic
     * "DNS" fallback for someone who is simply missing a measured result with no recorded reason.
     */
    public String dnsStatusLabel(Participant participant) {
        DisqualificationStatus status = participant.status();
        return status != null && status != DisqualificationStatus.NONE ? status.name() : "DNS";
    }

    /**
     * Same as {@link #dnsStatusLabel(Participant)}, but for a Gaudi-Modus person who is excluded
     * for missing a valid result in at least one of several combined races: reports the first leg
     * that actually carries an explicit status (DSQ/DNF/DNS), since a single person can only be
     * shown with one label even though the reason may differ per leg. Falls back to the generic
     * "DNS" when none of their legs has an explicit status.
     */
    public String dnsStatusLabel(Collection<Participant> legParticipants) {
        for (Participant participant : legParticipants) {
            DisqualificationStatus status = participant.status();
            if (status != null && status != DisqualificationStatus.NONE) {
                return status.name();
            }
        }
        return "DNS";
    }

    /**
     * A raw/adjusted value rounded to the precision actually printed for this race: unchanged for
     * POINTS races (whose stored value already is that precision), rounded to the nearest 10ms
     * (hundredth of a second) for TIME races - matching {@code RankingViewService#formatTime}.
     * Used both to detect place ties (see {@link #placeTieValue}) and to compute a "Rückstand" (gap
     * to the leader) that is guaranteed to equal the difference of the two printed totals: taking
     * the difference of the raw, unrounded values and only then rounding that result independently
     * can be off from that by up to one printed hundredth, since rounding does not distribute over
     * subtraction (e.g. 4083ms and 33525ms print as 0:04.08 and 0:33.53, a difference of 0:29.45 -
     * but the raw gap 33525-4083=29442ms rounds to 0:29.44 on its own).
     */
    public Integer roundForDisplay(Race race, Integer rawValue) {
        if (rawValue == null || race.resultUnit() != ResultUnit.TIME) {
            return rawValue;
        }
        return (int) roundToTensOfMs(rawValue);
    }

    /**
     * Same as {@link #roundForDisplay(Race, Integer)}, but for a not-yet-integral value such as an
     * average - rounded exactly once, straight to the printed precision (nearest 10ms for TIME
     * races, nearest stored hundredth for POINTS races). Rounding to a whole ms first and only then
     * to the printed precision can land a printed hundredth off: 10004.5ms would become 10005ms and
     * then print as 0:10.01, although the value itself is closer to 0:10.00.
     */
    public int roundForDisplay(Race race, double rawValue) {
        return race.resultUnit() == ResultUnit.TIME
                ? (int) roundToTensOfMs(rawValue)
                : (int) Math.round(rawValue);
    }

    /**
     * The value participants are considered tied on for place assignment - see
     * {@link #roundForDisplay}: two participants whose raw results differ only in the millisecond
     * digit that rounding erases must show the same time and therefore share a place; ranking on
     * the unrounded value would otherwise give them different places despite an identical printed
     * result, which reads as a timing/ranking bug to race officials.
     */
    private Integer placeTieValue(Race race, Participant participant) {
        return roundForDisplay(race, adjustedValue(race, participant));
    }

    static double roundToTensOfMs(double valueMs) {
        return Math.round(valueMs / 10.0) * 10.0;
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
            Integer value = placeTieValue(race, participant);
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

    /**
     * Same as {@link #assignStandardPlaces(List)}, but for a time-based race, first rounds every
     * value to the nearest 10ms (hundredth of a second) - the same display-precision tie rounding
     * {@link #placeTieValue} applies to a single race's places - before comparing for ties. Without
     * this, a combined Gaudi-Modus total (Zeit-Kombination/Mannschaftswertung's summed times,
     * Los-Verfahren's average-deviation) that differs from another only in a millisecond digit the
     * PDF rounds away would still be assigned a different place despite printing an identical value.
     * A non-time result (e.g. a points total) is passed through unrounded, since its stored value is
     * already at the precision it's printed at.
     */
    public List<Integer> assignStandardPlaces(List<Double> valuesBestToWorst, ResultUnit resultUnit) {
        List<Double> tieValues = resultUnit == ResultUnit.TIME
                ? valuesBestToWorst.stream().map(RankingService::roundToTensOfMs).toList()
                : valuesBestToWorst;
        return assignStandardPlaces(tieValues);
    }
}
