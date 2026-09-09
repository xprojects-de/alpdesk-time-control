package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Serdeable
@Schema(description = "One row of a computed Gaudi-Modus ranking. Generic across mode types: " +
        "fields not relevant for a given mode (e.g. referenceMs/diffMs for team scoring) are null.")
public record GaudiRankingEntryResponse(
        @Schema(description = "Place in the ranking, starting at 1", example = "1")
        int place,

        @Schema(description = "Human readable label for this entry (e.g. pairing of two names, or a team name)", example = "Doe John & Mustermann Max")
        String label,

        @Nullable
        @Schema(description = "Individual time of the first participant in milliseconds (Los-Modus only)", example = "120000", nullable = true)
        Integer time1Ms,

        @Nullable
        @Schema(description = "Individual time of the second participant in milliseconds (Los-Modus only, null for a self-paired leftover)", example = "130000", nullable = true)
        Integer time2Ms,

        @Nullable
        @Schema(description = "The computed metric for this entry in milliseconds (e.g. pair average time, team total time, or Zeit-Kombination total time)", example = "125000", nullable = true)
        Integer valueMs,

        @Nullable
        @Schema(description = "Reference value this entry was compared against, in milliseconds (e.g. overall average for Los-Modus)", example = "120000", nullable = true)
        Integer referenceMs,

        @Nullable
        @Schema(description = "Absolute difference between valueMs and referenceMs in milliseconds, used for ranking where applicable", example = "5000", nullable = true)
        Integer diffMs,

        @Nullable
        @Schema(description = "Total points (Punkte-Mischwertung only)", example = "360", nullable = true)
        Integer totalPoints,

        @Nullable
        @Schema(description = "Per-race breakdown (Zeit-Kombination / Punkte-Mischwertung only)", nullable = true)
        List<GaudiRankingLegResponse> legs,

        @Nullable
        @Schema(description = "Team name (not set for Mannschaftswertung, where label already is the team name)", example = "SC Musterhausen", nullable = true)
        String team
) {
}
