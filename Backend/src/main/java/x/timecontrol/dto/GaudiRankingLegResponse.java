package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "One race's contribution to a combined ranking entry (Zeit-Kombination / Punkte-Mischwertung)")
public record GaudiRankingLegResponse(
        @Schema(description = "ID of the race this leg refers to", example = "1")
        Long raceId,

        @Schema(description = "Name of the race this leg refers to", example = "Riesenslalom")
        String raceName,

        @Nullable
        @Schema(description = "Raw recorded result for this race (ms for a TIME race, the race's unit otherwise); null if the participant has no result in this race", example = "65000", nullable = true)
        Integer rawValue,

        @Nullable
        @Schema(description = "Penalty applied in this race", example = "2000", nullable = true)
        Integer penalty,

        @Nullable
        @Schema(description = "Raw value adjusted by the penalty, in the race's sort direction", example = "67000", nullable = true)
        Integer adjustedValue,

        @Nullable
        @Schema(description = "Place within this race alone", example = "1", nullable = true)
        Integer place,

        @Nullable
        @Schema(description = "Points earned in this race (Punkte-Mischwertung only, already weighted)", example = "100", nullable = true)
        Integer points,

        @Nullable
        @Schema(description = "The participant's explicit DSQ/DNF/DNS status in this race, if any; null for a normal result", example = "DNF", nullable = true)
        String status,

        @Nullable
        @Schema(description = "Start-group block-start offset (ms) netted out of rawValue for this race, if any - TIME races only", example = "600000", nullable = true)
        Integer startGroupOffsetMs
) {
}
