package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import x.timecontrol.services.RankingViewService;

import java.util.List;

/**
 * A race's live results for one {@link RaceLiveViewType}, served unauthenticated by
 * {@code RaceLiveController} as JSON and as a ready-to-open HTML page. {@code sections} is empty
 * for {@link RaceLiveViewType#STARTLIST}; {@code startList} is empty for every other view.
 */
@Serdeable
public record RaceLiveResponse(
        Long raceId,
        String raceName,
        String date,
        String resultUnitLabel,
        RaceLiveViewType view,
        String viewLabel,
        List<RaceLiveRankingSection> sections,
        List<RankingViewService.DnsRow> notRanked,
        List<RankingViewService.StartListEntry> startList
) {
}
