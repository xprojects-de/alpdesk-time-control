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
import x.timecontrol.dto.PointsScaleRequest;
import x.timecontrol.dto.PointsScaleResponse;
import x.timecontrol.entities.PointsScale;
import x.timecontrol.services.PointsScaleService;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/points-scales")
@ExecuteOn(TaskExecutors.BLOCKING)
@Tag(name = "Points-Scale")
public class PointsScaleController {

    @Inject
    PointsScaleService service;

    @Produces(MediaType.APPLICATION_JSON)
    @Get
    @Operation(summary = "List all points scales", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "List of all points scales", content = @Content(schema = @Schema(implementation = PointsScaleResponse.class)))
    public HttpResponse<List<PointsScaleResponse>> list() {
        Iterable<PointsScale> pointsScales = service.findAll();
        List<PointsScaleResponse> response = StreamSupport.stream(pointsScales.spliterator(), false)
                .map(PointsScaleResponse::from)
                .toList();
        return HttpResponse.ok(response);
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/{id}")
    @Operation(summary = "Get points scale by ID", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Points scale found", content = @Content(schema = @Schema(implementation = PointsScaleResponse.class)))
    @ApiResponse(responseCode = "404", description = "Points scale not found")
    public HttpResponse<PointsScaleResponse> getById(@PathVariable Long id) {
        Optional<PointsScale> pointsScale = service.findById(id);
        return pointsScale.map(p -> HttpResponse.ok(PointsScaleResponse.from(p)))
                .orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post
    @Operation(summary = "Create a new points scale", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Points scale created", content = @Content(schema = @Schema(implementation = PointsScaleResponse.class)))
    @ApiResponse(responseCode = "400", description = "Invalid input")
    @ApiResponse(responseCode = "409", description = "A points scale with this name already exists")
    public HttpResponse<?> add(@Body PointsScaleRequest request) {
        if (!isValid(request)) {
            return HttpResponse.badRequest(new ErrorResponse("name and a non-empty points list are required"));
        }
        PointsScale pointsScale = service.createFromRequest(request);
        try {
            PointsScale created = service.create(pointsScale);
            return HttpResponse.created(PointsScaleResponse.from(created));
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new ErrorResponse(e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/{id}")
    @Operation(summary = "Update an existing points scale", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Points scale updated", content = @Content(schema = @Schema(implementation = PointsScaleResponse.class)))
    @ApiResponse(responseCode = "404", description = "Points scale not found")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    @ApiResponse(responseCode = "409", description = "A points scale with this name already exists")
    public HttpResponse<?> update(@PathVariable Long id, @Body PointsScaleRequest request) {
        if (!isValid(request)) {
            return HttpResponse.badRequest(new ErrorResponse("name and a non-empty points list are required"));
        }
        PointsScale pointsScale = service.createFromRequest(request);
        Optional<PointsScale> updated;
        try {
            updated = service.update(id, pointsScale);
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new ErrorResponse(e.getMessage()));
        }
        return updated.map(p -> HttpResponse.ok((Object) PointsScaleResponse.from(p)))
                .orElse(HttpResponse.notFound());
    }

    /**
     * An empty/missing points list would otherwise crash later: toCsv([]) persists an empty
     * string, and re-parsing "" via split(",") yields [""], which throws NumberFormatException.
     * A null entry (JSON allows "points": [100, null, 60]) is rejected for the same reason:
     * toCsv() would render it as the literal string "null", which fails to parse just as badly
     * the next time a ranking is computed against this scale - see PointsScaleService#parsePoints.
     */
    private boolean isValid(PointsScaleRequest request) {
        return request.name() != null && !request.name().isBlank()
                && request.points() != null && !request.points().isEmpty()
                && request.points().stream().noneMatch(java.util.Objects::isNull);
    }

    @Delete("/{id}")
    @Operation(summary = "Delete a points scale", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "204", description = "Points scale deleted")
    @ApiResponse(responseCode = "404", description = "Points scale not found")
    public HttpResponse<Void> delete(@PathVariable Long id) {
        Optional<PointsScale> pointsScale = service.findById(id);
        if (pointsScale.isPresent()) {
            service.delete(id);
            return HttpResponse.noContent();
        }
        return HttpResponse.notFound();
    }
}
