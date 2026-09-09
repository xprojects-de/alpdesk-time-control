package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "One team member's individual result within a Mannschaftswertung (Gaudimodus TEAM mode) team")
public record GaudiTeamMemberResponse(
        @Schema(description = "Member's display name", example = "Doe John")
        String label,

        @Nullable
        @Schema(description = "Member's individual adjusted result in milliseconds", example = "65000", nullable = true)
        Integer valueMs,

        @Schema(description = "Whether this member's result counted towards the team's total (the fastest teamSize members of the team count)", example = "true")
        boolean counted
) {
}
