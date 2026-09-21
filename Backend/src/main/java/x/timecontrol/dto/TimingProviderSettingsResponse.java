package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.TimingProviderType;
import x.timecontrol.services.DeviceCapability;

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
        List<TimingProviderType> availableTypes,

        @Schema(description = "Whether the active provider can be asked for data on demand. False for no device and for one that pushes its measurements by itself - the UI's 'fetch from device' action is hidden in both cases.", example = "true")
        boolean supportsManualImport,

        @Schema(description = "Optional device commands the active provider supports; anything not listed here is hidden/disabled in the UI instead of failing at the device")
        List<DeviceCapability> capabilities
) {
}
