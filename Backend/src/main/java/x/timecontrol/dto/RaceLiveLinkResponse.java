package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "One discoverable public live-results view for a race")
public record RaceLiveLinkResponse(
        @Schema(description = "Display label for this view", example = "Gesamtwertung")
        String label,

        @Schema(description = "Path (relative to this backend's own origin) for this view - the frontend prepends its own known origin/apiUrl to get an absolute, shareable URL, rather than the backend guessing its own externally-reachable address (which a reverse proxy could change).", example = "/public/races/3fa85f64-5717-4562-b3fc-2c963f66afa6/results-html?view=OVERALL")
        String path
) {
}
