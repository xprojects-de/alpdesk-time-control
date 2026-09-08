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
    public HttpResponse<PointsScaleResponse> add(@Body PointsScaleRequest request) {
        PointsScale pointsScale = service.createFromRequest(request);
        PointsScale created = service.create(pointsScale);
        return HttpResponse.created(PointsScaleResponse.from(created));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/{id}")
    @Operation(summary = "Update an existing points scale", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Points scale updated", content = @Content(schema = @Schema(implementation = PointsScaleResponse.class)))
    @ApiResponse(responseCode = "404", description = "Points scale not found")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public HttpResponse<PointsScaleResponse> update(@PathVariable Long id, @Body PointsScaleRequest request) {
        PointsScale pointsScale = service.createFromRequest(request);
        Optional<PointsScale> updated = service.update(id, pointsScale);
        return updated.map(p -> HttpResponse.ok(PointsScaleResponse.from(p)))
                .orElse(HttpResponse.notFound());
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
