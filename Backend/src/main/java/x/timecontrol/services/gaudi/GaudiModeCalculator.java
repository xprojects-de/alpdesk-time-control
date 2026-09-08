package x.timecontrol.services.gaudi;

import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Race;
import x.timecontrol.entities.GaudiModeType;

import java.util.List;

/**
 * Strategy for computing the ranking of one Gaudi-Modus type.
 * To add a new Gaudi-Modus type: add a {@link GaudiModeType} value and register
 * a new {@code @Singleton} implementation of this interface - no controller changes needed.
 */
public interface GaudiModeCalculator {

    GaudiModeType getType();

    /**
     * One referenced race of a Gaudi-Modus instance, in configured order, with its participants
     * and (for Punkte-Mischwertung) the weight its points count with.
     */
    record RaceParticipants(Long raceId, Race race, double weight, List<Participant> participants) {
    }

    List<GaudiRankingEntryResponse> computeRanking(GaudiMode gaudiMode, List<RaceParticipants> races);
}
