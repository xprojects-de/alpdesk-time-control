package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.TimingProviderType;

import java.util.Map;

@Serdeable
@Schema(description = "Request object for selecting the active timing provider and its config")
public record TimingProviderSettingsRequest(
        @Schema(description = "Timing provider to activate", example = "ALPDESK_TIMECONTROL", requiredMode = Schema.RequiredMode.REQUIRED)
        TimingProviderType type,

        @Nullable
        @Schema(description = "Provider-specific config overrides (e.g. device URL, COM port). Keys are provider-specific.",
                example = "{\"dataUrl\": \"http://192.168.4.1/data\"}")
        Map<String, String> config
) {
}
