package x.timecontrol.Controller;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.*;
import io.micronaut.scheduling.TaskExecutors;
import io.micronaut.scheduling.annotation.ExecuteOn;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.inject.Inject;
import x.timecontrol.dto.ErrorResponse;
import x.timecontrol.dto.TimingProviderSettingsRequest;
import x.timecontrol.dto.TimingProviderSettingsResponse;
import x.timecontrol.entities.AppSettings;
import x.timecontrol.services.SettingsService;
import x.timecontrol.services.TimingProviderRegistry;

import java.util.Map;

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/settings")
@ExecuteOn(TaskExecutors.BLOCKING)
@Tag(name = "Settings")
public class SettingsController {

    // Generic bounds on the config map, since it has no per-provider schema at this layer (only
    // each TimingDataImporter knows which keys it actually reads) - just enough to stop arbitrary
    // junk/oversized values from being persisted unbounded now that the DB has no CHECK constraint
    // to fall back on either.
    private static final int MAX_CONFIG_ENTRIES = 20;
    private static final int MAX_CONFIG_VALUE_LENGTH = 2000;

    @Inject
    SettingsService settingsService;

    @Inject
    TimingProviderRegistry timingProviderRegistry;

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/timing-provider")
    @Operation(summary = "Get the active timing provider and its config", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Active timing provider", content = @Content(schema = @Schema(implementation = TimingProviderSettingsResponse.class)))
    public HttpResponse<?> getTimingProvider() {
        try {
            AppSettings settings = settingsService.getSettings();
            return HttpResponse.ok(toResponse(settings));
        } catch (IllegalStateException e) {
            return HttpResponse.serverError(new ErrorResponse(e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/timing-provider")
    @Operation(summary = "Select the active timing provider and save its config",
            description = "Switches which TimingDataImporter the scheduled import and measurement/race device endpoints use, and stores its config (e.g. device URL) for future requests.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Timing provider updated", content = @Content(schema = @Schema(implementation = TimingProviderSettingsResponse.class)))
    @ApiResponse(responseCode = "400", description = "Unknown timing provider type")
    public HttpResponse<?> updateTimingProvider(@Body TimingProviderSettingsRequest request) {
        if (request.type() == null) {
            return HttpResponse.badRequest(new ErrorResponse("type is required"));
        }
        if (!timingProviderRegistry.availableTypes().contains(request.type())) {
            return HttpResponse.badRequest(new ErrorResponse("Unknown timing provider type: " + request.type()));
        }
        Map<String, String> config = request.config() != null ? request.config() : Map.of();
        if (config.size() > MAX_CONFIG_ENTRIES) {
            return HttpResponse.badRequest(new ErrorResponse("Too many config entries (max " + MAX_CONFIG_ENTRIES + ")"));
        }
        for (String value : config.values()) {
            if (value != null && value.length() > MAX_CONFIG_VALUE_LENGTH) {
                return HttpResponse.badRequest(new ErrorResponse("Config value too long (max " + MAX_CONFIG_VALUE_LENGTH + " characters)"));
            }
        }
        try {
            AppSettings updated = settingsService.updateTimingProvider(request.type(), config);
            return HttpResponse.ok(toResponse(updated));
        } catch (IllegalStateException e) {
            return HttpResponse.serverError(new ErrorResponse(e.getMessage()));
        }
    }

    private TimingProviderSettingsResponse toResponse(AppSettings settings) {
        return new TimingProviderSettingsResponse(
                settings.timingProviderType(),
                settingsService.getProviderConfig(settings),
                timingProviderRegistry.availableTypes()
        );
    }
}
