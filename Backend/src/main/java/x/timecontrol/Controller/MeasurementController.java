package x.timecontrol.Controller;

import x.timecontrol.dto.AutoAssignEnableRequest;
import x.timecontrol.dto.AutoAssignSetNextRequest;
import x.timecontrol.dto.AutoAssignStatusResponse;
import x.timecontrol.dto.ErrorResponse;
import x.timecontrol.dto.MeasurementImportResponse;
import x.timecontrol.dto.MeasurementRequest;
import x.timecontrol.dto.MeasurementResponse;
import x.timecontrol.entities.Measurement;
import x.timecontrol.services.AutoAssignService;
import x.timecontrol.services.DeviceCapability;
import x.timecontrol.services.DeviceImportGate;
import x.timecontrol.services.MeasurementService;
import x.timecontrol.services.ParticipantService;
import x.timecontrol.services.PollingTimingImporter;
import x.timecontrol.services.RaceService;
import x.timecontrol.services.TimingDataImporter;
import x.timecontrol.services.TimingProviderRegistry;
import io.micronaut.data.exceptions.DataAccessException;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpHeaders;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.*;
import io.micronaut.http.multipart.CompletedFileUpload;
import io.micronaut.json.JsonMapper;
import io.micronaut.scheduling.TaskExecutors;
import io.micronaut.scheduling.annotation.ExecuteOn;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;
import io.swagger.v3.oas.annotations.Operation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.inject.Inject;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/measurements")
@ExecuteOn(TaskExecutors.BLOCKING)
@Tag(name = "Measurement")
public class MeasurementController {

    private static final Logger LOG = LoggerFactory.getLogger(MeasurementController.class);

    @Inject
    MeasurementService service;

    @Inject
    TimingProviderRegistry timingProviderRegistry;

    @Inject
    DeviceImportGate importGate;

    @Inject
    ParticipantService participantService;

    @Inject
    AutoAssignService autoAssignService;

    @Inject
    RaceService raceService;

    @Inject
    JsonMapper jsonMapper;


    @Produces(MediaType.APPLICATION_JSON)
    @Get
    @Operation(summary = "List all measurements", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "List of all measurements", content = @Content(schema = @Schema(implementation = MeasurementResponse.class)))
    public HttpResponse<List<MeasurementResponse>> list() {
        Iterable<Measurement> measurements = service.findAll();
        List<MeasurementResponse> response = StreamSupport.stream(measurements.spliterator(), false)
                .map(MeasurementResponse::from)
                .toList();
        return HttpResponse.ok(response);
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/participant/{participantId}")
    @Operation(summary = "List measurements by participant ID", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "List of measurements for the participant", content = @Content(schema = @Schema(implementation = MeasurementResponse.class)))
    public HttpResponse<List<MeasurementResponse>> listByParticipant(@PathVariable Long participantId) {
        List<Measurement> measurements = service.findByParticipantId(participantId);
        List<MeasurementResponse> response = measurements.stream()
                .map(MeasurementResponse::from)
                .toList();
        return HttpResponse.ok(response);
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/{id}")
    @Operation(summary = "Get measurement by ID", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Measurement found", content = @Content(schema = @Schema(implementation = MeasurementResponse.class)))
    @ApiResponse(responseCode = "404", description = "Measurement not found")
    public HttpResponse<MeasurementResponse> getById(@PathVariable Long id) {
        Optional<Measurement> measurement = service.findById(id);
        return measurement.map(m -> HttpResponse.ok(MeasurementResponse.from(m)))
                .orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post
    @Operation(summary = "Create a new measurement", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Measurement created", content = @Content(schema = @Schema(implementation = MeasurementResponse.class)))
    @ApiResponse(responseCode = "400", description = "Invalid input")
    @ApiResponse(responseCode = "409", description = "Participant is already assigned to another measurement")
    public HttpResponse<?> add(@Body MeasurementRequest request) {
        HttpResponse<?> validationError = validateParticipantId(request.participantId());
        if (validationError != null) {
            return validationError;
        }
        validationError = validateDurationMs(request.durationMs());
        if (validationError != null) {
            return validationError;
        }
        Measurement measurement = new Measurement(
                null,
                null,
                request.participantId(),
                request.durationMs(),
                request.measuredAt()
        );
        try {
            Measurement created = service.create(measurement);
            return HttpResponse.created(MeasurementResponse.from(created));
        } catch (IllegalStateException e) {
            return HttpResponse.status(HttpStatus.CONFLICT).body(new ErrorResponse(e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/{id}")
    @Operation(summary = "Update an existing measurement", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Measurement updated", content = @Content(schema = @Schema(implementation = MeasurementResponse.class)))
    @ApiResponse(responseCode = "404", description = "Measurement not found")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    @ApiResponse(responseCode = "409", description = "Participant is already assigned to another measurement")
    public HttpResponse<?> update(@PathVariable Long id, @Body MeasurementRequest request) {
        if (service.findById(id).isEmpty()) {
            return HttpResponse.notFound();
        }
        HttpResponse<?> validationError = validateParticipantId(request.participantId());
        if (validationError != null) {
            return validationError;
        }
        validationError = validateDurationMs(request.durationMs());
        if (validationError != null) {
            return validationError;
        }
        Measurement measurement = new Measurement(
                null,
                // Ignored by MeasurementService#update, which always carries the existing row's
                // deviceMeasurementId forward instead - passed as null here only to satisfy the
                // constructor.
                null,
                request.participantId(),
                request.durationMs(),
                request.measuredAt()
        );
        try {
            Optional<Measurement> updated = service.update(id, measurement);
            return updated.map(m -> HttpResponse.ok((Object) MeasurementResponse.from(m)))
                    .orElse(HttpResponse.notFound());
        } catch (IllegalStateException e) {
            return HttpResponse.status(HttpStatus.CONFLICT).body(new ErrorResponse(e.getMessage()));
        }
    }

    /**
     * @return a 400 HttpResponse if participantId is set but doesn't reference an existing
     * participant, otherwise null (shared by add() and update(), which both accept participantId).
     */
    private HttpResponse<?> validateParticipantId(Long participantId) {
        if (participantId != null && participantService.findById(participantId).isEmpty()) {
            return HttpResponse.badRequest(new ErrorResponse("Participant with id " + participantId + " does not exist"));
        }
        return null;
    }

    /**
     * @return a 400 HttpResponse if durationMs is negative, otherwise null. Without this, a
     * negative value floors to 0 in RankingService.adjustedValue() and ranks that participant
     * first once synced - the same class of bug ParticipantService.validate()/importRow() already
     * guard against on the participant side.
     */
    private HttpResponse<?> validateDurationMs(Integer durationMs) {
        if (durationMs != null && durationMs < 0) {
            return HttpResponse.badRequest(new ErrorResponse("durationMs must not be negative"));
        }
        return null;
    }

    private static HttpResponse<ErrorResponse> noTimingProviderConfigured() {
        return HttpResponse.status(HttpStatus.CONFLICT)
                .body(new ErrorResponse(TimingDataImporter.NOT_CONFIGURED_MESSAGE));
    }

    /**
     * For a device that is configured but does not offer this command at all (see
     * {@link DeviceCapability}) - a different 409 from "no device configured", so the operator can
     * tell "I have not set up a timing device" apart from "this timing device cannot do that".
     */
    private static HttpResponse<ErrorResponse> notSupportedByDevice() {
        return HttpResponse.status(HttpStatus.CONFLICT)
                .body(new ErrorResponse(TimingDataImporter.NOT_SUPPORTED_MESSAGE));
    }

    @Delete("/{id}")
    @Operation(summary = "Delete a measurement", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "204", description = "Measurement deleted")
    @ApiResponse(responseCode = "404", description = "Measurement not found")
    public HttpResponse<Void> delete(@PathVariable Long id) {
        Optional<Measurement> measurement = service.findById(id);
        if (measurement.isPresent()) {
            service.delete(id);
            return HttpResponse.noContent();
        }
        return HttpResponse.notFound();
    }

    @Delete("/reset")
    @Operation(summary = "Delete all measurements and optionally reset device",
            description = "Deletes all measurements from the database and optionally resets the SKitiming Controller device at http://192.168.4.1/reset. If resetDevice=true, any pending measurements are pulled from the device first, then the device is reset. If the pull or the device reset fails (e.g. device unreachable), database is not deleted.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Measurements deleted successfully")
    @ApiResponse(responseCode = "500", description = "Reset failed")
    public HttpResponse<?> resetAll(@QueryValue(defaultValue = "true") boolean resetDevice) {
        return importGate.pauseDuring(() -> {
            try {
                // If device reset is requested AND a timing device is actually configured, do it
                // first before deleting the database. No configured device just means there's
                // nothing to reset - deleting measurements is a pure local-DB operation and must
                // keep working in evaluation-only (NONE) mode, so this is not an error condition.
                boolean deviceResetPerformed = false;
                if (resetDevice) {
                    Optional<TimingDataImporter> importerOpt = timingProviderRegistry.getActiveImporter()
                            // A device without a reset command (an ALGE clock on a serial line has
                            // none) is treated exactly like no device: there is nothing to reset, so
                            // the local wipe below proceeds instead of failing with a device error.
                            .filter(i -> i.capabilities().contains(DeviceCapability.RESET));
                    if (importerOpt.isPresent()) {
                        TimingDataImporter importer = importerOpt.get();
                        // Same reasoning as RaceController#archiveMeasurements: pull in anything the
                        // device recorded since the last scheduled poll before wiping it, or that data
                        // is silently lost - resetDevice() only sends the reset command, it never reads
                        // data itself. Nothing to pull for a streaming provider: whatever the device
                        // recorded has already been pushed and written.
                        if (importer instanceof PollingTimingImporter polling) {
                            polling.importDataFromDevice();
                        }
                        boolean deviceReset = importer.resetDevice();
                        if (!deviceReset) {
                            return HttpResponse.serverError()
                                    .body(new ErrorResponse("Failed to reset device. Database was not modified."));
                        }
                        deviceResetPerformed = true;
                    }
                }

                // Only delete database if device reset was successful (or not requested/not applicable)
                service.deleteAll();

                if (deviceResetPerformed) {
                    // Frontend contract: measurement-list.component.ts's deviceWasResetFromMessage()
                    // decides which confirmation to show by checking this message for the phrase
                    // "device reset" (case-insensitive) - keep it if rewording this string.
                    return HttpResponse.ok("Device reset and all measurements deleted successfully");
                } else {
                    return HttpResponse.ok("All measurements deleted successfully");
                }
            } catch (DataAccessException e) {
                throw e; // let GlobalExceptionHandler produce a consistent, non-leaking response
            } catch (Exception e) {
                return HttpResponse.serverError()
                        .body(new ErrorResponse("Error during reset operation: " + e.getMessage()));
            }
        });
    }

    @Put("/continuous-mode")
    @Operation(summary = "Enable or disable continuous mode on device",
            description = "Enables or disables continuous mode on the SKitiming Controller device. When enabled, the device will continuously measure. When disabled, manual triggering is required.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Continuous mode set successfully")
    @ApiResponse(responseCode = "409", description = "No timing device configured, or the configured one has no continuous mode")
    @ApiResponse(responseCode = "500", description = "Failed to set continuous mode")
    public HttpResponse<?> setContinuousMode(@QueryValue(defaultValue = "true") boolean enable) {
        try {
            Optional<TimingDataImporter> importerOpt = timingProviderRegistry.getActiveImporter();
            if (importerOpt.isEmpty()) {
                return noTimingProviderConfigured();
            }
            if (!importerOpt.get().capabilities().contains(DeviceCapability.CONTINUOUS_MODE)) {
                return notSupportedByDevice();
            }
            boolean success = importerOpt.get().continuousMode(enable);
            if (!success) {
                return HttpResponse.serverError()
                        .body(new ErrorResponse("Failed to set continuous mode on device"));
            }

            if (enable) {
                return HttpResponse.ok("Continuous mode enabled successfully");
            } else {
                return HttpResponse.ok("Continuous mode disabled successfully");
            }
        } catch (Exception e) {
            return HttpResponse.serverError()
                    .body(new ErrorResponse("Error during continuous mode operation: " + e.getMessage()));
        }
    }

    @Get("/device-status")
    @Operation(summary = "Get device status",
            description = "Returns the current mode of the SKitiming Controller device ('continuous' or 'normal')",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Device status retrieved successfully")
    @ApiResponse(responseCode = "500", description = "Failed to get device status")
    public HttpResponse<?> getDeviceStatus() {
        try {
            Optional<TimingDataImporter> importerOpt = timingProviderRegistry.getActiveImporter();
            if (importerOpt.isEmpty()) {
                return noTimingProviderConfigured();
            }
            String status = importerOpt.get().getDeviceStatus();
            if (status == null) {
                return HttpResponse.serverError()
                        .body(new ErrorResponse("Failed to get device status"));
            }
            return HttpResponse.ok(status);
        } catch (Exception e) {
            return HttpResponse.serverError()
                    .body(new ErrorResponse("Error getting device status: " + e.getMessage()));
        }
    }

    @Get("/device-connection")
    @Operation(summary = "Check device connection",
            description = "Checks if the SKitiming Controller device is reachable and returns the connection status via HTTP status code",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Device is connected")
    @ApiResponse(responseCode = "503", description = "Device is not connected")
    @ApiResponse(responseCode = "409", description = "No timing device configured")
    @ApiResponse(responseCode = "500", description = "Error checking device connection")
    public HttpResponse<?> checkDeviceConnection() {
        try {
            Optional<TimingDataImporter> importerOpt = timingProviderRegistry.getActiveImporter();
            if (importerOpt.isEmpty()) {
                return noTimingProviderConfigured();
            }
            boolean isConnected = importerOpt.get().isDeviceConnected();
            if (isConnected) {
                return HttpResponse.ok();
            } else {
                return HttpResponse.status(io.micronaut.http.HttpStatus.SERVICE_UNAVAILABLE);
            }
        } catch (Exception e) {
            LOG.warn("Error checking device connection: {}", e.getMessage(), e);
            return HttpResponse.serverError();
        }
    }

    @Post("/discard")
    @Operation(summary = "Discard oldest start from device queue",
            description = "Discards the oldest start from the device's internal queue. Only works in normal mode (not in continuous mode)",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Oldest start discarded successfully")
    @ApiResponse(responseCode = "400", description = "Queue empty or not applicable in continuous mode")
    @ApiResponse(responseCode = "409", description = "No timing device configured, or the configured one has no start queue")
    @ApiResponse(responseCode = "500", description = "Failed to discard oldest start")
    public HttpResponse<?> discardOldestStart() {
        try {
            Optional<TimingDataImporter> importerOpt = timingProviderRegistry.getActiveImporter();
            if (importerOpt.isEmpty()) {
                return noTimingProviderConfigured();
            }
            if (!importerOpt.get().capabilities().contains(DeviceCapability.DISCARD_OLDEST_START)) {
                return notSupportedByDevice();
            }
            boolean success = importerOpt.get().discardOldestStart();
            if (!success) {
                return HttpResponse.badRequest()
                        .body(new ErrorResponse("Failed to discard oldest start. Queue may be empty or device is in continuous mode."));
            }
            // The discarded start is exactly the racer the auto-assign cursor is currently waiting
            // on (both sides assume arrival order equals start order) - advance it too, or the next
            // arriving measurement would get wrongly attributed to whoever fell. Enforced here rather
            // than by the caller so it holds regardless of which client calls this endpoint.
            try {
                autoAssignService.skip();
            } catch (IllegalStateException ignored) {
                // Auto-assign mode isn't active for any race right now - nothing to advance.
            }
            return HttpResponse.ok("Oldest start discarded successfully");
        } catch (Exception e) {
            return HttpResponse.serverError()
                    .body(new ErrorResponse("Error discarding oldest start: " + e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Post("/import")
    @Operation(summary = "Import measurements from external device",
            description = "Fetches timing data from http://192.168.4.1/data and creates measurements",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Measurements imported successfully",
            content = @Content(schema = @Schema(implementation = MeasurementResponse.class)))
    @ApiResponse(responseCode = "409", description = "No timing device configured, or the configured one pushes its data instead of being polled")
    @ApiResponse(responseCode = "500", description = "Import failed")
    public HttpResponse<?> importFromDevice() {
        try {
            Optional<TimingDataImporter> importerOpt = timingProviderRegistry.getActiveImporter();
            if (importerOpt.isEmpty()) {
                return noTimingProviderConfigured();
            }
            // Only a polling device can be asked. A streaming one has already delivered everything
            // it has over its own connection, so there is nothing this endpoint could fetch. Checked
            // on the already-resolved provider rather than by resolving it a second time through
            // getActivePollingImporter(), which would re-read the settings and re-apply the device
            // config for a question this object can answer itself.
            if (!(importerOpt.get() instanceof PollingTimingImporter polling)) {
                return notSupportedByDevice();
            }
            List<Measurement> imported = polling.importDataFromDevice();
            List<MeasurementResponse> response = imported.stream()
                    .map(MeasurementResponse::from)
                    .toList();
            return HttpResponse.created(response);
        } catch (Exception e) {
            LOG.warn("Error importing measurements from device: {}", e.getMessage(), e);
            return HttpResponse.serverError();
        }
    }

    @Put("/scheduled-import")
    @Operation(summary = "Enable or disable scheduled data import",
            description = "Enables or disables the automatic data import that runs every 5 seconds. When enabled, the system will automatically fetch new measurements from the device.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Scheduled import status set successfully")
    public HttpResponse<String> setScheduledImport(@QueryValue(defaultValue = "true") boolean enable) {
        importGate.setScheduledImportActive(enable);

        if (enable) {
            return HttpResponse.ok("Scheduled data import enabled successfully");
        } else {
            return HttpResponse.ok("Scheduled data import disabled successfully");
        }
    }

    @Get("/scheduled-import/status")
    @Operation(summary = "Get scheduled import status",
            description = "Returns whether the automatic data import is currently enabled or disabled",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Scheduled import status")
    public HttpResponse<Boolean> getScheduledImportStatus() {
        return HttpResponse.ok(importGate.isScheduledImportActive());
    }


    @Produces("text/csv")
    @Get("/export/csv")
    @Operation(summary = "Export all measurements as CSV download",
            description = "Exports every measurement as CSV, using our own field names (participantId, durationMs, measuredAt) as the header row, so re-importing it via import-mapped needs no manual mapping.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Measurements exported successfully")
    public HttpResponse<?> exportMeasurementsCsv() {
        String csv = service.exportCsv();
        return HttpResponse.ok(csv.getBytes(StandardCharsets.UTF_8))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"measurements.csv\"");
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Post("/import-preview")
    @Operation(summary = "Preview a measurement import file", description = "Parses a CSV (any delimiter) and returns the detected source fields, a best-effort suggested mapping onto our measurement fields, and a few sample rows - for building a column-mapping UI. Nothing is saved.", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Preview generated", content = @Content(schema = @Schema(implementation = x.timecontrol.dto.MeasurementImportPreviewResponse.class)))
    @ApiResponse(responseCode = "400", description = "Unreadable file")
    public HttpResponse<?> importPreview(@Part("file") CompletedFileUpload file,
                                          @Part("delimiter") Optional<String> delimiter) {
        Character delim = delimiter.filter(d -> !d.isBlank()).map(d -> d.charAt(0)).orElse(null);

        try {
            byte[] bytes = file.getBytes();
            return HttpResponse.ok(service.previewImport(bytes, delim));
        } catch (IOException e) {
            return HttpResponse.badRequest(new ErrorResponse("Failed to read/parse the uploaded file: " + e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Post("/import-mapped")
    @Operation(summary = "Import measurements with a custom column mapping", description = "Imports a CSV (any delimiter), using an explicit mapping from our fields (participantId, durationMs, measuredAt) onto the file's source columns. A field left out of the mapping is not imported. If mapping is omitted, the auto-suggested mapping (see /import-preview) is used. Existing measurements are kept; rows that fail validation are skipped and reported rather than rejecting the whole file.", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Import finished", content = @Content(schema = @Schema(implementation = MeasurementImportResponse.class)))
    @ApiResponse(responseCode = "400", description = "Invalid mapping JSON or unreadable file")
    public HttpResponse<?> importMapped(@Part("file") CompletedFileUpload file,
                                         @Part("delimiter") Optional<String> delimiter,
                                         @Part("mapping") Optional<String> mappingJson) {
        Map<String, String> mapping = null;
        if (mappingJson.isPresent() && !mappingJson.get().isBlank()) {
            try {
                Map<?, ?> raw = jsonMapper.readValue(mappingJson.get(), Map.class);
                mapping = new HashMap<>();
                for (Map.Entry<?, ?> entry : raw.entrySet()) {
                    if (entry.getValue() != null) {
                        mapping.put(String.valueOf(entry.getKey()), String.valueOf(entry.getValue()));
                    }
                }
            } catch (IOException e) {
                return HttpResponse.badRequest(new ErrorResponse("Invalid mapping JSON: " + e.getMessage()));
            }
        }

        Character delim = delimiter.filter(d -> !d.isBlank()).map(d -> d.charAt(0)).orElse(null);

        try {
            byte[] bytes = file.getBytes();
            MeasurementService.MeasurementImportResult result = service.importMapped(bytes, delim, mapping);
            List<MeasurementResponse> imported = result.imported().stream().map(MeasurementResponse::from).toList();
            return HttpResponse.ok(new MeasurementImportResponse(imported.size(), result.errors().size(), imported, result.errors()));
        } catch (IOException e) {
            return HttpResponse.badRequest(new ErrorResponse("Failed to read/parse the uploaded file: " + e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/auto-assign/status")
    @Operation(summary = "Get the current live auto-assign status", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Current auto-assign status", content = @Content(schema = @Schema(implementation = AutoAssignStatusResponse.class)))
    public HttpResponse<AutoAssignStatusResponse> autoAssignStatus() {
        return HttpResponse.ok(AutoAssignStatusResponse.from(autoAssignService.getStatus()));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post("/auto-assign/enable")
    @Operation(summary = "Enable live auto-assign mode for a race", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Auto-assign mode enabled", content = @Content(schema = @Schema(implementation = AutoAssignStatusResponse.class)))
    @ApiResponse(responseCode = "400", description = "Race does not exist, or startRaceNumber does not belong to any participant in it")
    public HttpResponse<?> enableAutoAssign(@Body AutoAssignEnableRequest request) {
        if (request.raceId() == null || raceService.findById(request.raceId()).isEmpty()) {
            return HttpResponse.badRequest(new ErrorResponse("Race with id " + request.raceId() + " does not exist"));
        }
        try {
            return HttpResponse.ok(AutoAssignStatusResponse.from(autoAssignService.enable(request.raceId(), request.startRaceNumber())));
        } catch (IllegalArgumentException e) {
            return HttpResponse.badRequest(new ErrorResponse(e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Post("/auto-assign/disable")
    @Operation(summary = "Disable live auto-assign mode", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Auto-assign mode disabled", content = @Content(schema = @Schema(implementation = AutoAssignStatusResponse.class)))
    public HttpResponse<AutoAssignStatusResponse> disableAutoAssign() {
        return HttpResponse.ok(AutoAssignStatusResponse.from(autoAssignService.disable()));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Post("/auto-assign/skip")
    @Operation(summary = "Skip the currently expected race number without assigning it (e.g. a starter that did not start)", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Race number skipped", content = @Content(schema = @Schema(implementation = AutoAssignStatusResponse.class)))
    @ApiResponse(responseCode = "400", description = "Auto-assign mode is not active")
    public HttpResponse<?> skipAutoAssign() {
        try {
            return HttpResponse.ok(AutoAssignStatusResponse.from(autoAssignService.skip()));
        } catch (IllegalStateException e) {
            return HttpResponse.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse(e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post("/auto-assign/set-next")
    @Operation(summary = "Manually set the next expected race number (e.g. after a correction)", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Next race number updated", content = @Content(schema = @Schema(implementation = AutoAssignStatusResponse.class)))
    @ApiResponse(responseCode = "400", description = "Auto-assign mode is not active, or raceNumber does not belong to any participant in the active race")
    @ApiResponse(responseCode = "409", description = "That race number already has a measurement; retry with force=true to discard it and time it again")
    public HttpResponse<?> setNextAutoAssignRaceNumber(@Body AutoAssignSetNextRequest request) {
        try {
            AutoAssignService.Status status =
                    autoAssignService.setNextRaceNumber(request.raceNumber(), Boolean.TRUE.equals(request.force()));
            return HttpResponse.ok(AutoAssignStatusResponse.from(status));
        } catch (AutoAssignService.AlreadyTimedException e) {
            return HttpResponse.status(HttpStatus.CONFLICT).body(new ErrorResponse(e.getMessage()));
        } catch (IllegalStateException | IllegalArgumentException e) {
            return HttpResponse.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse(e.getMessage()));
        }
    }
}

