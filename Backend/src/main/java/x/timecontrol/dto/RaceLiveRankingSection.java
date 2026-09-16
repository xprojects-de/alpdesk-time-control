package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import x.timecontrol.services.RankingViewService;

import java.util.List;

/**
 * One named group of ranked entries within a {@link RaceLiveResponse} - most views produce exactly
 * one section, but the by-age-group/by-category views produce one per non-empty combination, the
 * same way their PDF-export counterparts in {@code PdfExportService} draw one section each.
 */
@Serdeable
public record RaceLiveRankingSection(String title, List<RankingViewService.RankingEntry> entries) {
}
