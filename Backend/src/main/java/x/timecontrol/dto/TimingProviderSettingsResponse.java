package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.TimingProviderType;

import java.util.List;
import java.util.Map;

@Serdeable
@Schema(description = "Response object describing the active timing provider and its config")
public record TimingProviderSettingsResponse(
        @Schema(description = "Currently active timing provider", example = "ALPDESK_TIMECONTROL")
        TimingProviderType type,

        @Schema(description = "Config currently stored for the active provider")
        Map<String, String> config,

        @Schema(description = "All timing provider types this backend can currently switch to")
        List<TimingProviderType> availableTypes
) {
}
