package x.timecontrol.Controller;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpStatus;
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
import x.timecontrol.dto.StartGroupTemplateRequest;
import x.timecontrol.dto.StartGroupTemplateResponse;
import x.timecontrol.entities.StartGroupTemplate;
import x.timecontrol.services.StartGroupTemplateService;

import java.util.List;
import java.util.Optional;

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/start-group-templates")
@ExecuteOn(TaskExecutors.BLOCKING)
@Tag(name = "StartGroupTemplate")
public class StartGroupTemplateController {

    @Inject
    StartGroupTemplateService service;

    @Produces(MediaType.APPLICATION_JSON)
    @Get
    @Operation(summary = "List all start-group templates, ordered by position", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "List of all start-group templates", content = @Content(schema = @Schema(implementation = StartGroupTemplateResponse.class)))
    public HttpResponse<List<StartGroupTemplateResponse>> list() {
        List<StartGroupTemplateResponse> response = service.findAll().stream().map(StartGroupTemplateResponse::from).toList();
        return HttpResponse.ok(response);
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/{id}")
    @Operation(summary = "Get a start-group template by ID", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Start-group template found", content = @Content(schema = @Schema(implementation = StartGroupTemplateResponse.class)))
    @ApiResponse(responseCode = "404", description = "Start-group template not found")
    public HttpResponse<StartGroupTemplateResponse> getById(@PathVariable Long id) {
        Optional<StartGroupTemplate> template = service.findById(id);
        return template.map(t -> HttpResponse.ok(StartGroupTemplateResponse.from(t)))
                .orElse(HttpResponse.notFound());
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post
    @Operation(summary = "Create a new start-group template", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Start-group template created", content = @Content(schema = @Schema(implementation = StartGroupTemplateResponse.class)))
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public HttpResponse<?> add(@Body StartGroupTemplateRequest request) {
        if (!isValid(request)) {
            return HttpResponse.badRequest(new ErrorResponse("label and color are required"));
        }
        StartGroupTemplate created = service.create(service.createFromRequest(request));
        return HttpResponse.created(StartGroupTemplateResponse.from(created));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Put("/{id}")
    @Operation(summary = "Update an existing start-group template", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Start-group template updated", content = @Content(schema = @Schema(implementation = StartGroupTemplateResponse.class)))
    @ApiResponse(responseCode = "404", description = "Start-group template not found")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    public HttpResponse<?> update(@PathVariable Long id, @Body StartGroupTemplateRequest request) {
        if (!isValid(request)) {
            return HttpResponse.badRequest(new ErrorResponse("label and color are required"));
        }
        Optional<StartGroupTemplate> updated = service.update(id, service.createFromRequest(request));
        return updated.map(t -> HttpResponse.ok((Object) StartGroupTemplateResponse.from(t)))
                .orElse(HttpResponse.notFound());
    }

    private boolean isValid(StartGroupTemplateRequest request) {
        return request.label() != null && !request.label().isBlank()
                && request.color() != null && !request.color().isBlank();
    }

    @Delete("/{id}")
    @Operation(summary = "Delete a start-group template", security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "204", description = "Start-group template deleted")
    @ApiResponse(responseCode = "404", description = "Start-group template not found")
    @ApiResponse(responseCode = "409", description = "Template still has participants assigned; retry with force=true to proceed")
    public HttpResponse<?> delete(@PathVariable Long id, @QueryValue(defaultValue = "false") boolean force) {
        Optional<StartGroupTemplate> template = service.findById(id);
        if (template.isEmpty()) {
            return HttpResponse.notFound();
        }
        try {
            service.delete(id, force);
        } catch (IllegalStateException e) {
            return HttpResponse.status(HttpStatus.CONFLICT).body(new ErrorResponse(e.getMessage()));
        }
        return HttpResponse.noContent();
    }
}
