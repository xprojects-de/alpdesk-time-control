package x.timecontrol.Controller;

import x.timecontrol.dto.MeasurementRequest;
import x.timecontrol.dto.MeasurementResponse;
import x.timecontrol.dto.SyncMeasurementsResponse;
import x.timecontrol.entities.Measurement;
import x.timecontrol.entities.Participant;
import x.timecontrol.services.DataImportScheduler;
import x.timecontrol.services.DataImportService;
import x.timecontrol.services.MeasurementService;
import x.timecontrol.services.ParticipantService;
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
import x.timecontrol.services.PdfExportService;
import x.timecontrol.services.RaceService;
import x.timecontrol.entities.Race;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/measurements")
@Tag(name = "Measurement")
public class MeasurementController {

    @Inject
    MeasurementService service;

    @Inject
    DataImportService dataImportService;

    @Inject
    DataImportScheduler dataImportScheduler;

    @Inject
    PdfExportService pdfExportService;

    @Inject
    ParticipantService participantService;

    @Inject
    RaceService raceService;

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
    public HttpResponse<MeasurementResponse> add(@Body MeasurementRequest request) {
        Measurement measurement = new Measurement(
                null,
                request.participantId(),
                request.durationMs(),
                request.measuredAt()
        );
        Measurement created = service.create(measurement);
        return HttpResponse.created(MeasurementResponse.from(created));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/{id}")
    @Operation(summary = "Update an existing measurement", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Measurement updated", content = @Content(schema = @Schema(implementation = MeasurementResponse.class)))
    @ApiResponse(responseCode = "404", description = "Measurement not found")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public HttpResponse<MeasurementResponse> update(@PathVariable Long id, @Body MeasurementRequest request) {
        Measurement measurement = new Measurement(
                null,
                request.participantId(),
                request.durationMs(),
                request.measuredAt()
        );
        Optional<Measurement> updated = service.update(id, measurement);
        return updated.map(m -> HttpResponse.ok(MeasurementResponse.from(m)))
                .orElse(HttpResponse.notFound());
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
    @ExecuteOn(TaskExecutors.BLOCKING)
    @Operation(summary = "Delete all measurements and optionally reset device",
            description = "Deletes all measurements from the database and optionally resets the SKitiming Controller device at http://192.168.4.1/reset. If resetDevice=true, the device is reset first. If device reset fails, database is not deleted.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Measurements deleted successfully")
    @ApiResponse(responseCode = "500", description = "Reset failed")
    public HttpResponse<String> resetAll(@QueryValue(defaultValue = "true") boolean resetDevice) {
        try {
            // If device reset is requested, do it first before deleting database
            if (resetDevice) {
                boolean deviceReset = dataImportService.resetDevice();
                if (!deviceReset) {
                    return HttpResponse.serverError()
                            .body("Failed to reset device. Database was not modified.");
                }
            }

            // Only delete database if device reset was successful (or not requested)
            service.deleteAll();

            if (resetDevice) {
                return HttpResponse.ok("Device reset and all measurements deleted successfully");
            } else {
                return HttpResponse.ok("All measurements deleted successfully");
            }
        } catch (Exception e) {
            return HttpResponse.serverError()
                    .body("Error during reset operation: " + e.getMessage());
        }
    }

    @Put("/continuous-mode")
    @ExecuteOn(TaskExecutors.BLOCKING)
    @Operation(summary = "Enable or disable continuous mode on device",
            description = "Enables or disables continuous mode on the SKitiming Controller device. When enabled, the device will continuously measure. When disabled, manual triggering is required.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Continuous mode set successfully")
    @ApiResponse(responseCode = "500", description = "Failed to set continuous mode")
    public HttpResponse<String> setContinuousMode(@QueryValue(defaultValue = "true") boolean enable) {
        try {
            boolean success = dataImportService.continuousMode(enable);
            if (!success) {
                return HttpResponse.serverError()
                        .body("Failed to set continuous mode on device");
            }

            if (enable) {
                return HttpResponse.ok("Continuous mode enabled successfully");
            } else {
                return HttpResponse.ok("Continuous mode disabled successfully");
            }
        } catch (Exception e) {
            return HttpResponse.serverError()
                    .body("Error during continuous mode operation: " + e.getMessage());
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Post("/import")
    @ExecuteOn(TaskExecutors.BLOCKING)
    @Operation(summary = "Import measurements from external device",
            description = "Fetches timing data from http://192.168.4.1/data and creates measurements",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Measurements imported successfully",
            content = @Content(schema = @Schema(implementation = MeasurementResponse.class)))
    @ApiResponse(responseCode = "500", description = "Import failed")
    public HttpResponse<List<MeasurementResponse>> importFromDevice() {
        try {
            List<Measurement> imported = dataImportService.importDataFromDevice();
            List<MeasurementResponse> response = imported.stream()
                    .map(MeasurementResponse::from)
                    .toList();
            return HttpResponse.created(response);
        } catch (Exception e) {
            return HttpResponse.serverError();
        }
    }

    @Put("/scheduled-import")
    @Operation(summary = "Enable or disable scheduled data import",
            description = "Enables or disables the automatic data import that runs every 5 seconds. When enabled, the system will automatically fetch new measurements from the device.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Scheduled import status set successfully")
    public HttpResponse<String> setScheduledImport(@QueryValue(defaultValue = "true") boolean enable) {
        dataImportScheduler.setScheduledImportActive(enable);

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
        return HttpResponse.ok(dataImportScheduler.isScheduledImportActive());
    }

    @Produces("application/pdf")
    @Get("/export/pdf/all/{raceId}")
    @Operation(summary = "Export all measurements as PDF",
            description = "Generates a PDF with all measurements sorted by time (fastest to slowest) for a specific race",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<byte[]> exportAllToPdf(@PathVariable Long raceId) {
        try {
            Optional<Race> race = raceService.findById(raceId);
            if (race.isEmpty()) {
                return HttpResponse.notFound();
            }

            Iterable<Measurement> measurements = service.findAll();
            Iterable<Participant> participants = participantService.findByRaceId(raceId);

            byte[] pdfBytes = pdfExportService.generateOverallRanking(measurements, participants, race.get());
            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=gesamtwertung.pdf");
        } catch (IllegalArgumentException e) {
            return HttpResponse.serverError().body(e.getMessage().getBytes());
        } catch (Exception e) {
            return HttpResponse.serverError();
        }
    }

    @Produces("application/pdf")
    @Get("/export/pdf/gender/{gender}/{raceId}")
    @Operation(summary = "Export measurements by gender as PDF",
            description = "Generates a PDF with measurements filtered by gender, sorted by time for a specific race",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<byte[]> exportByGenderToPdf(@PathVariable String gender, @PathVariable Long raceId) {
        try {
            Optional<Race> race = raceService.findById(raceId);
            if (race.isEmpty()) {
                return HttpResponse.notFound();
            }

            Iterable<Measurement> measurements = service.findAll();
            Iterable<Participant> participants = participantService.findByRaceId(raceId);

            byte[] pdfBytes = pdfExportService.generateGenderRanking(measurements, participants, gender, race.get());
            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=wertung_" + gender.toLowerCase() + ".pdf");
        } catch (IllegalArgumentException e) {
            return HttpResponse.serverError().body(e.getMessage().getBytes());
        } catch (Exception e) {
            return HttpResponse.serverError();
        }
    }

    @Produces("application/pdf")
    @Get("/export/pdf/agegroup/{ageGroup}/gender/{gender}/{raceId}")
    @Operation(summary = "Export measurements by age group and gender as PDF",
            description = "Generates a PDF with measurements filtered by age group and gender, sorted by time for a specific race",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<byte[]> exportByAgeGroupAndGenderToPdf(@PathVariable String ageGroup, @PathVariable String gender, @PathVariable Long raceId) {
        try {
            Optional<Race> race = raceService.findById(raceId);
            if (race.isEmpty()) {
                return HttpResponse.notFound();
            }

            Iterable<Measurement> measurements = service.findAll();
            Iterable<Participant> participants = participantService.findByRaceId(raceId);

            byte[] pdfBytes = pdfExportService.generateAgeGroupGenderRanking(measurements, participants, ageGroup, gender, race.get());
            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=wertung_" + ageGroup.toLowerCase() + "_" + gender.toLowerCase() + ".pdf");
        } catch (IllegalArgumentException e) {
            return HttpResponse.serverError().body(e.getMessage().getBytes());
        } catch (Exception e) {
            return HttpResponse.serverError();
        }
    }

    @Produces("application/pdf")
    @Get("/export/pdf/agegroups/all/{raceId}")
    @Operation(summary = "Export all age groups separated by gender as PDF",
            description = "Generates a PDF with all age groups, each split by gender (male/female), starting from youngest for a specific race",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "PDF generated successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "PDF generation failed")
    public HttpResponse<byte[]> exportAllAgeGroupsToPdf(@PathVariable Long raceId) {
        try {
            Optional<Race> race = raceService.findById(raceId);
            if (race.isEmpty()) {
                return HttpResponse.notFound();
            }

            Iterable<Measurement> measurements = service.findAll();
            Iterable<Participant> participants = participantService.findByRaceId(raceId);

            byte[] pdfBytes = pdfExportService.generateAllAgeGroupsRanking(measurements, participants, race.get());
            return HttpResponse.ok(pdfBytes)
                    .header("Content-Disposition", "attachment; filename=wertung_altersklassen.pdf");
        } catch (IllegalArgumentException e) {
            return HttpResponse.serverError().body(e.getMessage().getBytes());
        } catch (Exception e) {
            return HttpResponse.serverError();
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Post("/sync-to-participants")
    @Operation(summary = "Sync measurements to participants",
            description = "Transfers measurement data (duration_ms and measured_at) to participant records for all measurements that have a participant_id assigned",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Measurements synced successfully")
    @ApiResponse(responseCode = "500", description = "Sync failed")
    public HttpResponse<SyncMeasurementsResponse> syncMeasurementsToParticipants() {
        try {
            Iterable<Measurement> allMeasurements = service.findAll();
            int syncedCount = 0;
            int skippedCount = 0;

            for (Measurement measurement : allMeasurements) {

                if (measurement.participantId() != null) {
                    Optional<Participant> participantOpt = participantService.findById(measurement.participantId());

                    if (participantOpt.isPresent()) {
                        Participant participant = participantOpt.get();

                        Participant updatedParticipant = new Participant(
                            participant.id(),
                            participant.raceId(),
                            participant.firstName(),
                            participant.lastName(),
                            participant.birthDate(),
                            participant.gender(),
                            participant.raceNumber(),
                            participant.association(),
                            measurement.durationMs(),
                            measurement.measuredAt()
                        );

                        participantService.update(participant.id(), updatedParticipant);
                        syncedCount++;
                    } else {
                        skippedCount++;
                    }
                } else {
                    skippedCount++;
                }
            }

            SyncMeasurementsResponse response = SyncMeasurementsResponse.of(syncedCount, skippedCount);
            return HttpResponse.ok(response);
        } catch (Exception e) {
            SyncMeasurementsResponse errorResponse = new SyncMeasurementsResponse(
                    0, 0, 0, "Sync failed: " + e.getMessage()
            );
            return HttpResponse.serverError().body(errorResponse);
        }
    }

}

