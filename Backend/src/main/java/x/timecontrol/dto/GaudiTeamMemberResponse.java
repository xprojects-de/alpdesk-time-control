package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "One member's individual result within a Mannschaftswertung team or a Los-Modus pair")
public record GaudiTeamMemberResponse(
        @Schema(description = "Member's display name", example = "Doe John")
        String label,

        @Nullable
        @Schema(description = "Member's individual adjusted result in milliseconds", example = "65000", nullable = true)
        Integer valueMs,

        @Nullable
        @Schema(description = "Member's own team (Los-Modus only - in a Mannschaftswertung the entry itself is the team)", example = "SC Musterhausen", nullable = true)
        String team,

        @Nullable
        @Schema(description = "Member's race number in this race", example = "17", nullable = true)
        Integer raceNumber,

        @Nullable
        @Schema(description = "Member's birth year", example = "2012", nullable = true)
        Integer birthYear,

        @Nullable
        @Schema(description = "Member's category in this race (Los-Modus only)", example = "Snowboard", nullable = true)
        String category
) {
}
