package x.timecontrol.services.gaudi;

import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.GaudiModeType;
import x.timecontrol.entities.Participant;

import java.util.List;

/**
 * Strategy for computing the ranking of one Gaudi-Modus type.
 * To add a new Gaudi-Modus type: add a {@link GaudiModeType} value and register
 * a new {@code @Singleton} implementation of this interface - no controller changes needed.
 */
public interface GaudiModeCalculator {

    GaudiModeType getType();

    List<GaudiRankingEntryResponse> computeRanking(GaudiMode gaudiMode, List<Participant> raceParticipants);
}
