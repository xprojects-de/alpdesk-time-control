package x.timecontrol.Controller;

import x.timecontrol.dto.ErrorResponse;
import x.timecontrol.dto.MeasurementImportPreviewResponse;
import x.timecontrol.dto.RaceMeasurementDeleteResponse;
import x.timecontrol.dto.RaceMeasurementImportResponse;
import x.timecontrol.dto.RaceMeasurementRequest;
import x.timecontrol.dto.RaceMeasurementResponse;
import x.timecontrol.dto.SyncMeasurementsResponse;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.RaceMeasurement;
import x.timecontrol.services.ParticipantService;
import x.timecontrol.services.RaceMeasurementCsvService;
import x.timecontrol.services.RaceMeasurementService;
import x.timecontrol.services.RaceService;
import io.micronaut.http.HttpHeaders;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.*;
import io.micronaut.http.multipart.CompletedFileUpload;
import io.micronaut.json.JsonMapper;
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

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/race-measurements")
@ExecuteOn(TaskExecutors.BLOCKING)
@Tag(name = "RaceMeasurement")
public class RaceMeasurementController {

    @Inject
    RaceMeasurementService service;

    @Inject
    ParticipantService participantService;

    @Inject
    RaceMeasurementCsvService csvService;

    @Inject
    RaceService raceService;

    @Inject
    JsonMapper jsonMapper;

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/race/{raceId}")
    @Operation(summary = "List archived measurements for a race", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "List of archived measurements for the race", content = @Content(schema = @Schema(implementation = RaceMeasurementResponse.class)))
    public HttpResponse<List<RaceMeasurementResponse>> listByRace(@PathVariable Long raceId) {
        List<RaceMeasurementResponse> response = service.findByRaceId(raceId).stream()
                .map(RaceMeasurementResponse::from)
                .toList();
        return HttpResponse.ok(response);
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/{id}")
    @Operation(summary = "Get an archived race measurement by ID", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Race measurement found", content = @Content(schema = @Schema(implementation = RaceMeasurementResponse.class)))
    @ApiResponse(responseCode = "404", description = "Race measurement not found")
    public HttpResponse<RaceMeasurementResponse> getById(@PathVariable Long id) {
        Optional<RaceMeasurement> raceMeasurement = service.findById(id);
        return raceMeasurement.map(m -> HttpResponse.ok(RaceMeasurementResponse.from(m)))
                .orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/{id}")
    @Operation(summary = "Update an archived race measurement (e.g. assign a participant)", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Race measurement updated", content = @Content(schema = @Schema(implementation = RaceMeasurementResponse.class)))
    @ApiResponse(responseCode = "404", description = "Race measurement not found")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    @ApiResponse(responseCode = "409", description = "Participant is already assigned to another measurement in this race")
    public HttpResponse<?> update(@PathVariable Long id, @Body RaceMeasurementRequest request) {
        Optional<RaceMeasurement> existing = service.findById(id);
        if (existing.isEmpty()) {
            return HttpResponse.notFound();
        }
        if (request.participantId() != null) {
            Optional<Participant> participant = participantService.findById(request.participantId());
            if (participant.isEmpty()) {
                return HttpResponse.badRequest(new x.timecontrol.dto.ErrorResponse("Participant with id " + request.participantId() + " does not exist"));
            }
            if (!participant.get().raceId().equals(existing.get().raceId())) {
                return HttpResponse.badRequest(new x.timecontrol.dto.ErrorResponse("Participant does not belong to this race"));
            }
        }
        if (request.durationMs() != null && request.durationMs() < 0) {
            // Mirrors MeasurementController's check - a negative value floors to 0 in
            // RankingService.adjustedValue() and would rank this row first once synced.
            return HttpResponse.badRequest(new x.timecontrol.dto.ErrorResponse("durationMs must not be negative"));
        }
        RaceMeasurement raceMeasurement = new RaceMeasurement(
                null,
                null,
                null,
                request.participantId(),
                request.durationMs(),
                request.measuredAt()
        );
        Optional<RaceMeasurement> updated;
        try {
            updated = service.update(id, raceMeasurement);
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new x.timecontrol.dto.ErrorResponse(e.getMessage()));
        }
        return updated.map(m -> HttpResponse.ok((Object) RaceMeasurementResponse.from(m)))
                .orElse(HttpResponse.notFound());
    }

    @Delete("/{id}")
    @Operation(summary = "Delete an archived race measurement", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "204", description = "Race measurement deleted")
    @ApiResponse(responseCode = "404", description = "Race measurement not found")
    public HttpResponse<Void> delete(@PathVariable Long id) {
        Optional<RaceMeasurement> raceMeasurement = service.findById(id);
        if (raceMeasurement.isPresent()) {
            service.delete(id);
            return HttpResponse.noContent();
        }
        return HttpResponse.notFound();
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Post("/race/{raceId}/sync-to-participants")
    @Operation(summary = "Sync archived race measurements to participants",
            description = "Transfers measurement data (duration_ms and measured_at) from archived race measurements to participant records, for all race measurements of this race that have a participant_id assigned",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Race measurements synced successfully")
    @ApiResponse(responseCode = "500", description = "Sync failed")
    public HttpResponse<SyncMeasurementsResponse> syncMeasurementsToParticipants(@PathVariable Long raceId) {
        try {
            List<RaceMeasurement> raceMeasurements = service.findByRaceId(raceId);
            ParticipantService.SyncMeasurementsResult result = participantService.syncMeasurementsToParticipants(raceMeasurements);
            return HttpResponse.ok(SyncMeasurementsResponse.of(result.synced(), result.skipped()));
        } catch (io.micronaut.data.exceptions.DataAccessException e) {
            throw e; // let GlobalExceptionHandler produce a consistent, non-leaking response
        } catch (Exception e) {
            SyncMeasurementsResponse errorResponse = new SyncMeasurementsResponse(
                    0, 0, 0, "Sync failed: " + e.getMessage()
            );
            return HttpResponse.serverError().body(errorResponse);
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Delete("/race/{raceId}")
    @Operation(summary = "Delete all archived measurements of a race",
            description = "Deletes every archived measurement of the race, e.g. to archive it again from the measurement table or to restore a CSV backup. The participants' synced results are left unchanged.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Archived measurements deleted", content = @Content(schema = @Schema(implementation = RaceMeasurementDeleteResponse.class)))
    @ApiResponse(responseCode = "404", description = "Race not found")
    public HttpResponse<RaceMeasurementDeleteResponse> deleteAllOfRace(@PathVariable Long raceId) {
        if (!raceService.existsById(raceId)) {
            return HttpResponse.notFound();
        }
        return HttpResponse.ok(new RaceMeasurementDeleteResponse(service.deleteByRaceId(raceId)));
    }

    @Produces("text/csv")
    @Get("/race/{raceId}/export/csv")
    @Operation(summary = "Export a race's archived measurements as CSV",
            description = "Backup of the race's archived measurements with the columns deviceMeasurementId, raceNumber, lastName, firstName, durationMs, measuredAt. lastName/firstName are informational only. Restore it via POST /race-measurements/race/{raceId}/import-csv.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "CSV generated")
    @ApiResponse(responseCode = "404", description = "Race not found")
    public HttpResponse<?> exportCsv(@PathVariable Long raceId) {
        if (!raceService.existsById(raceId)) {
            return HttpResponse.notFound();
        }
        return HttpResponse.ok(csvService.exportCsv(raceId).getBytes(StandardCharsets.UTF_8))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"renn-messungen_" + raceId + ".csv\"");
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Post("/race/{raceId}/import-preview")
    @Operation(summary = "Preview a CSV of archived measurements for a race",
            description = "Parses a CSV (any delimiter) and returns the detected source fields, a suggested mapping onto our fields (deviceMeasurementId, raceNumber, durationMs, measuredAt) and a few sample rows - for the column-mapping dialog. Nothing is saved.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Preview generated", content = @Content(schema = @Schema(implementation = MeasurementImportPreviewResponse.class)))
    @ApiResponse(responseCode = "400", description = "Unreadable file")
    @ApiResponse(responseCode = "404", description = "Race not found")
    public HttpResponse<?> importPreview(@PathVariable Long raceId, @Part("file") CompletedFileUpload file,
                                         @Part("delimiter") Optional<String> delimiter) {
        if (!raceService.existsById(raceId)) {
            return HttpResponse.notFound();
        }
        try {
            return HttpResponse.ok(csvService.previewImport(file.getBytes(), delimiterOf(delimiter)));
        } catch (IOException e) {
            return HttpResponse.badRequest(new ErrorResponse("Failed to read the uploaded file: " + e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Post("/race/{raceId}/import-mapped")
    @Operation(summary = "Replace a race's archived measurements with a CSV, using a column mapping",
            description = "Deletes every archived measurement of the race and imports the rows of a CSV (any delimiter), reading our fields (deviceMeasurementId, raceNumber, durationMs, measuredAt) from the columns the mapping names; only durationMs is required. If mapping is omitted, the suggested mapping (see import-preview) is used - a file exported via export/csv maps itself. Participants are matched by raceNumber; a race number that matches nobody in the race is imported without participant and reported as a warning. The whole file is validated first: an invalid row rejects the import with 400 and leaves the race unchanged. The participants' synced results are not touched - sync afterwards.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Archived measurements replaced", content = @Content(schema = @Schema(implementation = RaceMeasurementImportResponse.class)))
    @ApiResponse(responseCode = "400", description = "Unreadable file, invalid mapping or invalid row - nothing was changed")
    @ApiResponse(responseCode = "404", description = "Race not found")
    public HttpResponse<?> importMapped(@PathVariable Long raceId, @Part("file") CompletedFileUpload file,
                                        @Part("delimiter") Optional<String> delimiter,
                                        @Part("mapping") Optional<String> mappingJson) {
        if (!raceService.existsById(raceId)) {
            return HttpResponse.notFound();
        }
        try {
            RaceMeasurementCsvService.ImportResult result = csvService.importMapped(
                    raceId, file.getBytes(), delimiterOf(delimiter), mappingOf(mappingJson));
            return HttpResponse.ok(new RaceMeasurementImportResponse(
                    result.importedCount(), result.withoutParticipantCount(), result.warnings()));
        } catch (IllegalArgumentException e) {
            return HttpResponse.badRequest(new ErrorResponse(e.getMessage()));
        } catch (IOException e) {
            return HttpResponse.badRequest(new ErrorResponse("Failed to read the uploaded file: " + e.getMessage()));
        }
    }

    private static Character delimiterOf(Optional<String> delimiter) {
        return delimiter.filter(d -> !d.isEmpty()).map(d -> d.charAt(0)).orElse(null);
    }

    /**
     * An omitted mapping means "use the suggested one" (null); an explicitly empty one maps nothing -
     * the same distinction as MeasurementController#importMapped.
     *
     * @throws IllegalArgumentException if the mapping part is not a JSON object
     */
    private Map<String, String> mappingOf(Optional<String> mappingJson) {
        if (mappingJson.isEmpty() || mappingJson.get().isBlank()) {
            return null;
        }
        Map<?, ?> raw;
        try {
            raw = jsonMapper.readValue(mappingJson.get(), Map.class);
        } catch (IOException e) {
            throw new IllegalArgumentException("Invalid mapping JSON: " + e.getMessage());
        }
        Map<String, String> mapping = new HashMap<>();
        for (Map.Entry<?, ?> entry : raw.entrySet()) {
            if (entry.getValue() != null) {
                mapping.put(String.valueOf(entry.getKey()), String.valueOf(entry.getValue()));
            }
        }
        return mapping;
    }
}
