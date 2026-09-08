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
import x.timecontrol.dto.RaceRequest;
import x.timecontrol.dto.RaceResponse;
import x.timecontrol.entities.Race;
import x.timecontrol.services.DataImportScheduler;
import x.timecontrol.services.DataImportService;
import x.timecontrol.services.RaceMeasurementService;
import x.timecontrol.services.RaceService;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/races")
@ExecuteOn(TaskExecutors.BLOCKING)
@Tag(name = "Race")
public class RaceController {

    @Inject
    RaceService service;

    @Inject
    RaceMeasurementService raceMeasurementService;

    @Inject
    DataImportService dataImportService;

    @Inject
    DataImportScheduler dataImportScheduler;

    @Produces(MediaType.APPLICATION_JSON)
    @Get
    @Operation(summary = "List all races", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "List of all races", content = @Content(schema = @Schema(implementation = RaceResponse.class)))
    public HttpResponse<List<RaceResponse>> list() {
        Iterable<Race> races = service.findAll();
        List<RaceResponse> response = StreamSupport.stream(races.spliterator(), false)
                .map(RaceResponse::from)
                .toList();
        return HttpResponse.ok(response);
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/{id}")
    @Operation(summary = "Get race by ID", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Race found", content = @Content(schema = @Schema(implementation = RaceResponse.class)))
    @ApiResponse(responseCode = "404", description = "Race not found")
    public HttpResponse<RaceResponse> getById(@PathVariable Long id) {
        Optional<Race> race = service.findById(id);
        return race.map(r -> HttpResponse.ok(RaceResponse.from(r)))
                .orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/by-name/{name}")
    @Operation(summary = "Get race by name", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Race found", content = @Content(schema = @Schema(implementation = RaceResponse.class)))
    @ApiResponse(responseCode = "404", description = "Race not found")
    public HttpResponse<RaceResponse> getByName(@PathVariable String name) {
        Optional<Race> race = service.findByName(name);
        return race.map(r -> HttpResponse.ok(RaceResponse.from(r)))
                .orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post
    @Operation(summary = "Create a new race", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Race created", content = @Content(schema = @Schema(implementation = RaceResponse.class)))
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public HttpResponse<RaceResponse> add(@Body RaceRequest request) {
        Race race = service.createFromRequest(request);
        Race created = service.create(race);
        return HttpResponse.created(RaceResponse.from(created));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/{id}")
    @Operation(summary = "Update an existing race", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Race updated", content = @Content(schema = @Schema(implementation = RaceResponse.class)))
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public HttpResponse<RaceResponse> update(@PathVariable Long id, @Body RaceRequest request) {
        Race race = service.createFromRequest(request);
        Optional<Race> updated = service.update(id, race);
        return updated.map(r -> HttpResponse.ok(RaceResponse.from(r)))
                .orElse(HttpResponse.notFound());
    }

    @Delete("/{id}")
    @Operation(summary = "Delete a race", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "204", description = "Race deleted")
    @ApiResponse(responseCode = "404", description = "Race not found")
    public HttpResponse<Void> delete(@PathVariable Long id) {
        Optional<Race> race = service.findById(id);
        if (race.isPresent()) {
            service.delete(id);
            return HttpResponse.noContent();
        }
        return HttpResponse.notFound();
    }

    @Post("/{raceId}/archive-measurements")
    @Operation(summary = "Archive current measurements into this race, optionally clearing the measurement table",
            description = "Copies all rows from the measurement table into race_measurement (tagged with this race's ID, using their own independent IDs). If clearAfterArchive is true (default), the measurement table is cleared afterwards so a new race can be measured right away, optionally resetting the SKitiming Controller device at http://192.168.4.1/reset first (if device reset fails, no data is copied or deleted). If clearAfterArchive is false, the measurement table and device are left untouched and can be cleared/reset manually later; resetDevice is ignored in that case.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Measurements archived successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "Archive failed")
    public HttpResponse<String> archiveMeasurements(@PathVariable Long raceId,
                                                      @QueryValue(defaultValue = "true") boolean resetDevice,
                                                      @QueryValue(defaultValue = "true") boolean clearAfterArchive) {
        if (service.findById(raceId).isEmpty()) {
            return HttpResponse.notFound();
        }

        // Pausing the scheduled device import for the duration of a clearing archive closes most of
        // the window where a scheduled fetch, already in flight when the device is reset, would
        // otherwise write stale pre-reset data into the measurement table right after it was cleared.
        boolean pauseScheduledImport = clearAfterArchive && dataImportScheduler.isScheduledImportActive();
        if (pauseScheduledImport) {
            dataImportScheduler.setScheduledImportActive(false);
        }
        try {
            if (clearAfterArchive && resetDevice) {
                boolean deviceReset = dataImportService.resetDevice();
                if (!deviceReset) {
                    return HttpResponse.serverError()
                            .body("Failed to reset device. Measurements were not archived.");
                }
            }

            if (clearAfterArchive) {
                raceMeasurementService.archiveMeasurements(raceId);
                if (resetDevice) {
                    return HttpResponse.ok("Measurements archived and device reset successfully");
                } else {
                    return HttpResponse.ok("Measurements archived successfully");
                }
            } else {
                raceMeasurementService.copyMeasurements(raceId);
                return HttpResponse.ok("Measurements archived successfully (database and device left unchanged)");
            }
        } catch (Exception e) {
            return HttpResponse.serverError()
                    .body("Error during archive operation: " + e.getMessage());
        } finally {
            if (pauseScheduledImport) {
                dataImportScheduler.setScheduledImportActive(true);
            }
        }
    }
}

