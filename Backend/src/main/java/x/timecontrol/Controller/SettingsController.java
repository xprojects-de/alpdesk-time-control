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
import x.timecontrol.dto.PdfExportSettingsRequest;
import x.timecontrol.dto.PdfExportSettingsResponse;
import x.timecontrol.dto.SeasonSettingsRequest;
import x.timecontrol.dto.SeasonSettingsResponse;
import x.timecontrol.dto.TimingProviderSettingsRequest;
import x.timecontrol.dto.TimingProviderSettingsResponse;
import x.timecontrol.entities.AppSettings;
import x.timecontrol.services.SeasonService;
import x.timecontrol.services.SettingsService;
import x.timecontrol.services.TimingProviderLifecycle;
import x.timecontrol.services.TimingProviderRegistry;

import java.time.MonthDay;
import java.util.List;
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

    @Inject
    TimingProviderLifecycle timingProviderLifecycle;

    @Inject
    SeasonService seasonService;

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/season")
    @Operation(summary = "Get the season boundary and the season today falls into",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Season settings", content = @Content(schema = @Schema(implementation = SeasonSettingsResponse.class)))
    public HttpResponse<SeasonSettingsResponse> getSeason() {
        return HttpResponse.ok(seasonSettingsResponse());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/season")
    @Operation(summary = "Move the season boundary",
            description = "Which date a season year starts on, and with it which age groups apply to a race. The default 1/1 makes a season a calendar year; a club whose season spans the turn of the year can move it to e.g. 1 July so a December and a January race count as one season. Changing this re-assigns existing races to different seasons, so the UI confirms first.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Season boundary updated", content = @Content(schema = @Schema(implementation = SeasonSettingsResponse.class)))
    @ApiResponse(responseCode = "400", description = "Not a valid month/day combination")
    public HttpResponse<?> updateSeason(@Body SeasonSettingsRequest request) {
        if (request.seasonStartMonth() == null || request.seasonStartDay() == null) {
            return HttpResponse.badRequest(new ErrorResponse("seasonStartMonth and seasonStartDay are required"));
        }
        MonthDay seasonStart;
        try {
            // MonthDay itself rejects an impossible combination such as 31 June, which would be a
            // boundary that exists in no year at all.
            seasonStart = MonthDay.of(request.seasonStartMonth(), request.seasonStartDay());
        } catch (RuntimeException e) {
            return HttpResponse.badRequest(new ErrorResponse(
                    "Not a valid date: " + request.seasonStartDay() + "." + request.seasonStartMonth() + "."));
        }
        settingsService.updateSeasonStart(seasonStart);
        return HttpResponse.ok(seasonSettingsResponse());
    }

    private SeasonSettingsResponse seasonSettingsResponse() {
        MonthDay seasonStart = seasonService.seasonStart();
        int currentSeason = seasonService.currentSeason();
        return new SeasonSettingsResponse(
                seasonStart.getMonthValue(),
                seasonStart.getDayOfMonth(),
                currentSeason,
                seasonService.seasonStartDate(currentSeason),
                seasonService.seasonEndDate(currentSeason));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/pdf-export")
    @Operation(summary = "Get the result PDF layout settings", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF export settings", content = @Content(schema = @Schema(implementation = PdfExportSettingsResponse.class)))
    public HttpResponse<PdfExportSettingsResponse> getPdfExport() {
        return HttpResponse.ok(toPdfExportResponse(settingsService.getSettings()));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/pdf-export")
    @Operation(summary = "Change the result PDF layout settings",
            description = "Switches the race number and birth year columns of the result PDFs - a single race's and the Gaudi-Modus ones - and of the public live view on or off, each on its own. The start list follows the birth year switch only; it always shows the race number.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF export settings updated", content = @Content(schema = @Schema(implementation = PdfExportSettingsResponse.class)))
    @ApiResponse(responseCode = "400", description = "showRaceNumber or showBirthYear missing")
    public HttpResponse<?> updatePdfExport(@Body PdfExportSettingsRequest request) {
        if (request.showRaceNumber() == null || request.showBirthYear() == null) {
            return HttpResponse.badRequest(new ErrorResponse("showRaceNumber and showBirthYear are required"));
        }
        AppSettings updated = settingsService.updatePdfExport(request.showRaceNumber(), request.showBirthYear());
        return HttpResponse.ok(toPdfExportResponse(updated));
    }

    private static PdfExportSettingsResponse toPdfExportResponse(AppSettings settings) {
        return new PdfExportSettingsResponse(settings.pdfShowRaceNumber(), settings.pdfShowBirthYear());
    }

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
            // A streaming provider's connection is opened/closed/reconnected here, not on the next
            // poll: this is the only moment the selection or its config can change. Never throws,
            // so a device that refuses to connect still leaves the setting saved (the operator
            // fixes the hostname and saves again) - see TimingProviderLifecycle#syncWithSettings.
            timingProviderLifecycle.syncWithSettings();
            return HttpResponse.ok(toResponse(updated));
        } catch (IllegalStateException e) {
            return HttpResponse.serverError(new ErrorResponse(e.getMessage()));
        }
    }

    private TimingProviderSettingsResponse toResponse(AppSettings settings) {
        return new TimingProviderSettingsResponse(
                settings.timingProviderType(),
                settingsService.getProviderConfig(settings),
                timingProviderRegistry.availableTypes(),
                // Of the ACTIVE provider, so the UI can hide controls its device does not have
                // (a manual "fetch from device", continuous mode, discarding a start). Read from
                // the registry rather than from the request: for NONE there is no provider to ask,
                // and the answer is then simply "nothing supported".
                // Both from the SAME settings object as type/config above: reading the selection
                // again here would let a concurrent provider switch slip in between, and the
                // response would describe one provider's type with another's capabilities.
                timingProviderRegistry.activeSupportsManualImport(settings),
                List.copyOf(timingProviderRegistry.activeCapabilities(settings))
        );
    }
}
