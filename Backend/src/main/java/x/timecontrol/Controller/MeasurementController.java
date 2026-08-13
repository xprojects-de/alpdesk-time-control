package x.timecontrol.Controller;

import x.timecontrol.dto.MeasurementRequest;
import x.timecontrol.dto.MeasurementResponse;
import x.timecontrol.entities.Measurement;
import x.timecontrol.services.MeasurementService;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.*;
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
import java.util.stream.StreamSupport;

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/measurements")
@Tag(name = "Measurement")
public class MeasurementController {

    @Inject
    MeasurementService service;

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

}

