package x.timecontrol.Controller;

import io.micronaut.data.exceptions.DataAccessException;
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
import x.timecontrol.dto.RaceRequest;
import x.timecontrol.dto.RaceResponse;
import x.timecontrol.entities.Race;
import x.timecontrol.services.DataImportScheduler;
import x.timecontrol.services.RaceMeasurementService;
import x.timecontrol.services.RaceService;
import x.timecontrol.services.TimingProviderRegistry;

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
    TimingProviderRegistry timingProviderRegistry;

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
    @ApiResponse(responseCode = "409", description = "A race with this name already exists")
    public HttpResponse<?> add(@Body RaceRequest request) {
        if (!isValid(request)) {
            return HttpResponse.badRequest(new x.timecontrol.dto.ErrorResponse("name and date are required"));
        }
        Race race = service.createFromRequest(request);
        try {
            Race created = service.create(race);
            return HttpResponse.created(RaceResponse.from(created));
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new x.timecontrol.dto.ErrorResponse(e.getMessage()));
        }
    }

    private boolean isValid(RaceRequest request) {
        return request.name() != null && !request.name().isBlank() && request.date() != null;
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/{id}")
    @Operation(summary = "Update an existing race", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Race updated", content = @Content(schema = @Schema(implementation = RaceResponse.class)))
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    @ApiResponse(responseCode = "409", description = "A race with this name already exists")
    public HttpResponse<?> update(@PathVariable Long id, @Body RaceRequest request) {
        if (!isValid(request)) {
            return HttpResponse.badRequest(new x.timecontrol.dto.ErrorResponse("name and date are required"));
        }
        Race race = service.createFromRequest(request);
        Optional<Race> updated;
        try {
            updated = service.update(id, race);
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new x.timecontrol.dto.ErrorResponse(e.getMessage()));
        }
        return updated.map(r -> HttpResponse.ok((Object) RaceResponse.from(r)))
                .orElse(HttpResponse.notFound());
    }

    @Delete("/{id}")
    @Operation(summary = "Delete a race", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "204", description = "Race deleted")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "409", description = "Race still has participants assigned; retry with force=true to proceed")
    public HttpResponse<?> delete(@PathVariable Long id, @QueryValue(defaultValue = "false") boolean force) {
        Optional<Race> race = service.findById(id);
        if (race.isEmpty()) {
            return HttpResponse.notFound();
        }
        try {
            service.delete(id, force);
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new x.timecontrol.dto.ErrorResponse(e.getMessage()));
        }
        return HttpResponse.noContent();
    }

    @Post("/{raceId}/archive-measurements")
    @Operation(summary = "Archive current measurements into this race, optionally clearing the measurement table",
            description = "Copies all rows from the measurement table into race_measurement (tagged with this race's ID, using their own independent IDs). If clearAfterArchive is true (default), the measurement table is cleared afterwards so a new race can be measured right away, optionally resetting the SKitiming Controller device at http://192.168.4.1/reset first (if device reset fails, no data is copied or deleted). If clearAfterArchive is false, the measurement table and device are left untouched and can be cleared/reset manually later; resetDevice is ignored in that case.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Measurements archived successfully")
    @ApiResponse(responseCode = "404", description = "Race not found")
    @ApiResponse(responseCode = "500", description = "Archive failed")
    public HttpResponse<?> archiveMeasurements(@PathVariable Long raceId,
                                                      @QueryValue(defaultValue = "true") boolean resetDevice,
                                                      @QueryValue(defaultValue = "true") boolean clearAfterArchive) {
        if (service.findById(raceId).isEmpty()) {
            return HttpResponse.notFound();
        }

        // Only a clearing archive resets the device, so only that case needs the pause; skip the
        // no-op pause/resume for a non-clearing archive.
        if (!clearAfterArchive) {
            try {
                raceMeasurementService.copyMeasurements(raceId);
                return HttpResponse.ok("Measurements archived successfully (database and device left unchanged)");
            } catch (DataAccessException e) {
                throw e; // let GlobalExceptionHandler produce a consistent, non-leaking response
            } catch (Exception e) {
                return HttpResponse.serverError().body(new ErrorResponse("Error during archive operation: " + e.getMessage()));
            }
        }

        return dataImportScheduler.pauseDuring(() -> {
            try {
                if (resetDevice) {
                    // Pulls in anything the device recorded since the last scheduled poll (up to a
                    // few seconds' worth) before wiping it - resetDevice() only sends the reset
                    // command, it never reads data itself, and pausing the scheduler above stops
                    // future polls but doesn't retroactively catch up on the last cycle. Without
                    // this, a finish/start that arrived in that last window is deleted from the
                    // device by the reset below and never makes it into the local measurement table
                    // at all - permanent, silent data loss on the primary archive workflow.
                    var importer = timingProviderRegistry.getActiveImporter();
                    importer.importDataFromDevice();
                    boolean deviceReset = importer.resetDevice();
                    if (!deviceReset) {
                        return HttpResponse.serverError()
                                .body(new ErrorResponse("Failed to reset device. Measurements were not archived."));
                    }
                }

                raceMeasurementService.archiveMeasurements(raceId);
                if (resetDevice) {
                    return HttpResponse.ok("Measurements archived and device reset successfully");
                } else {
                    return HttpResponse.ok("Measurements archived successfully");
                }
            } catch (DataAccessException e) {
                throw e; // let GlobalExceptionHandler produce a consistent, non-leaking response
            } catch (Exception e) {
                return HttpResponse.serverError()
                        .body(new ErrorResponse("Error during archive operation: " + e.getMessage()));
            }
        });
    }
}

