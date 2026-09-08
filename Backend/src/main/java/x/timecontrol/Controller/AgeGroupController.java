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
import x.timecontrol.dto.AgeGroupRequest;
import x.timecontrol.dto.AgeGroupResponse;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.services.AgeGroupService;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/age-groups")
@ExecuteOn(TaskExecutors.BLOCKING)
@Tag(name = "Age Group")
public class AgeGroupController {

    @Inject
    AgeGroupService service;

    @Produces(MediaType.APPLICATION_JSON)
    @Get
    @Operation(summary = "List all age groups", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "List of all age groups", content = @Content(schema = @Schema(implementation = AgeGroupResponse.class)))
    public HttpResponse<List<AgeGroupResponse>> list() {
        Iterable<AgeGroup> ageGroups = service.findAll();
        List<AgeGroupResponse> response = StreamSupport.stream(ageGroups.spliterator(), false)
                .map(AgeGroupResponse::from)
                .toList();
        return HttpResponse.ok(response);
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/{id}")
    @Operation(summary = "Get age group by ID", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Age group found", content = @Content(schema = @Schema(implementation = AgeGroupResponse.class)))
    @ApiResponse(responseCode = "404", description = "Age group not found")
    public HttpResponse<AgeGroupResponse> getById(@PathVariable Long id) {
        Optional<AgeGroup> ageGroup = service.findById(id);
        return ageGroup.map(ag -> HttpResponse.ok(AgeGroupResponse.from(ag)))
                .orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/by-name/{name}")
    @Operation(summary = "Get age group by name", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Age group found", content = @Content(schema = @Schema(implementation = AgeGroupResponse.class)))
    @ApiResponse(responseCode = "404", description = "Age group not found")
    public HttpResponse<AgeGroupResponse> getByName(@PathVariable String name) {
        Optional<AgeGroup> ageGroup = service.findByName(name);
        return ageGroup.map(ag -> HttpResponse.ok(AgeGroupResponse.from(ag)))
                .orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post
    @Operation(summary = "Create a new age group", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Age group created", content = @Content(schema = @Schema(implementation = AgeGroupResponse.class)))
    @ApiResponse(responseCode = "400", description = "Invalid input")
    @ApiResponse(responseCode = "409", description = "An age group with this name already exists")
    public HttpResponse<?> add(@Body AgeGroupRequest request) {
        if (!isValid(request)) {
            return HttpResponse.badRequest();
        }
        AgeGroup ageGroup = service.createFromRequest(request);
        try {
            AgeGroup created = service.create(ageGroup);
            return HttpResponse.created(AgeGroupResponse.from(created));
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new x.timecontrol.dto.ErrorResponse(e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/{id}")
    @Operation(summary = "Update an existing age group", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Age group updated", content = @Content(schema = @Schema(implementation = AgeGroupResponse.class)))
    @ApiResponse(responseCode = "404", description = "Age group not found")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    @ApiResponse(responseCode = "409", description = "An age group with this name already exists")
    public HttpResponse<?> update(@PathVariable Long id, @Body AgeGroupRequest request) {
        if (!isValid(request)) {
            return HttpResponse.badRequest();
        }
        AgeGroup ageGroup = service.createFromRequest(request);
        Optional<AgeGroup> updated;
        try {
            updated = service.update(id, ageGroup);
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new x.timecontrol.dto.ErrorResponse(e.getMessage()));
        }
        return updated.map(ag -> HttpResponse.ok((Object) AgeGroupResponse.from(ag)))
                .orElse(HttpResponse.notFound());
    }

    /**
     * Manual validation (no bean-validation framework is wired up in this codebase): missing
     * required fields would otherwise persist as null and NPE later, e.g. when
     * ParticipantService.findMatchingAgeGroup unboxes birthYearFrom/birthYearTo.
     */
    private boolean isValid(AgeGroupRequest request) {
        return request.name() != null && !request.name().isBlank()
                && request.birthYearFrom() != null
                && request.birthYearTo() != null
                && request.birthYearFrom() <= request.birthYearTo()
                && request.gender() != null;
    }

    @Delete("/{id}")
    @Operation(summary = "Delete an age group", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "204", description = "Age group deleted")
    @ApiResponse(responseCode = "404", description = "Age group not found")
    public HttpResponse<Void> delete(@PathVariable Long id) {
        Optional<AgeGroup> ageGroup = service.findById(id);
        if (ageGroup.isPresent()) {
            service.delete(id);
            return HttpResponse.noContent();
        }
        return HttpResponse.notFound();
    }
}


