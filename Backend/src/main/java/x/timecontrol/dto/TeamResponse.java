package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.Team;

@Serdeable
@Schema(description = "Response object containing team information")
public record TeamResponse(
        @Schema(description = "Unique identifier of the team", example = "1")
        Long id,

        @Schema(description = "Name of the team", example = "SC Musterhausen")
        String name
) {
    public static TeamResponse from(Team team) {
        return new TeamResponse(team.id(), team.name());
    }
}
