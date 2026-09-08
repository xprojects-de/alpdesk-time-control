package x.timecontrol.Controller;

import x.timecontrol.dto.RaceMeasurementRequest;
import x.timecontrol.dto.RaceMeasurementResponse;
import x.timecontrol.dto.SyncMeasurementsResponse;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.RaceMeasurement;
import x.timecontrol.services.ParticipantService;
import x.timecontrol.services.RaceMeasurementService;
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

import java.util.List;
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
    public HttpResponse<RaceMeasurementResponse> update(@PathVariable Long id, @Body RaceMeasurementRequest request) {
        RaceMeasurement raceMeasurement = new RaceMeasurement(
                null,
                null,
                null,
                request.participantId(),
                request.durationMs(),
                request.measuredAt()
        );
        Optional<RaceMeasurement> updated = service.update(id, raceMeasurement);
        return updated.map(m -> HttpResponse.ok(RaceMeasurementResponse.from(m)))
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
            int syncedCount = 0;
            int skippedCount = 0;

            for (RaceMeasurement raceMeasurement : raceMeasurements) {

                if (raceMeasurement.participantId() != null) {
                    Optional<Participant> participantOpt = participantService.findById(raceMeasurement.participantId());

                    if (participantOpt.isPresent()) {
                        Participant participant = participantOpt.get();

                        Participant updatedParticipant = new Participant(
                                participant.id(),
                                participant.raceId(),
                                participant.personId(),
                                participant.raceNumber(),
                                participant.teamId(),
                                participant.categoryId(),
                                raceMeasurement.durationMs(),
                                participant.penalty(),
                                raceMeasurement.measuredAt()
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
