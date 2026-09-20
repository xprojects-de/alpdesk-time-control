package x.timecontrol.Controller;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.MediaType;
import io.micronaut.core.annotation.Nullable;
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
import x.timecontrol.dto.AgeGroupSeasonsResponse;
import x.timecontrol.dto.CopySeasonRequest;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.services.AgeGroupService;
import x.timecontrol.services.SeasonService;

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

    @Inject
    SeasonService seasonService;

    @Produces(MediaType.APPLICATION_JSON)
    @Get
    @Operation(summary = "List age groups, optionally only those of one season",
            description = "Without a season, every season's age groups are returned - for the configuration UI. Anything resolving a participant's class wants the season of that participant's race instead.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "List of all age groups", content = @Content(schema = @Schema(implementation = AgeGroupResponse.class)))
    public HttpResponse<List<AgeGroupResponse>> list(@Nullable @QueryValue Integer season) {
        Iterable<AgeGroup> ageGroups = season != null ? service.findBySeason(season) : service.findAll();
        List<AgeGroupResponse> response = StreamSupport.stream(ageGroups.spliterator(), false)
                .map(AgeGroupResponse::from)
                .toList();
        return HttpResponse.ok(response);
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Get("/seasons")
    @Operation(summary = "List the seasons the configuration UI offers, newest first",
            description = "The options for the season selector: seasons that have age groups configured, plus seasons that have races but no age groups yet - the latter are exactly the ones whose results come out \"ohne Altersklasse\" and therefore have to be selectable to be fixed. Also reports the season today falls into, which is what a new configuration defaults to.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Configured seasons", content = @Content(schema = @Schema(implementation = AgeGroupSeasonsResponse.class)))
    public HttpResponse<AgeGroupSeasonsResponse> seasons() {
        return HttpResponse.ok(new AgeGroupSeasonsResponse(
                service.findConfiguredSeasons(),
                seasonService.seasonsWithRaces(),
                seasonService.currentSeason()));
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post("/copy-season")
    @Operation(summary = "Roll a season's age groups over to another season",
            description = "Copies every age group of the source season to the target season, shifting the birth years by the difference between the two - \"U14\" 2012-2013 in 2025 becomes \"U14\" 2013-2014 in 2026. The intended way to set up a new season: editing the existing rows instead would re-categorise every race already run under them.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Age groups copied", content = @Content(schema = @Schema(implementation = AgeGroupResponse.class)))
    @ApiResponse(responseCode = "400", description = "Invalid input")
    @ApiResponse(responseCode = "409", description = "Source season is empty, or target season already has age groups")
    public HttpResponse<?> copySeason(@Body CopySeasonRequest request) {
        if (request.fromSeason() == null || request.toSeason() == null) {
            return HttpResponse.badRequest(new x.timecontrol.dto.ErrorResponse("fromSeason and toSeason are required"));
        }
        if (request.fromSeason().equals(request.toSeason())) {
            // A bad request, not a state conflict: nothing about the stored data prevents this,
            // the two values simply have to differ.
            return HttpResponse.badRequest(new x.timecontrol.dto.ErrorResponse("fromSeason and toSeason must differ"));
        }
        try {
            List<AgeGroupResponse> created = service.copySeason(request.fromSeason(), request.toSeason()).stream()
                    .map(AgeGroupResponse::from)
                    .toList();
            return HttpResponse.created(created);
        } catch (IllegalStateException e) {
            return HttpResponse.status(io.micronaut.http.HttpStatus.CONFLICT).body(new x.timecontrol.dto.ErrorResponse(e.getMessage()));
        }
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
    public HttpResponse<AgeGroupResponse> getByName(@PathVariable String name, @Nullable @QueryValue Integer season) {
        // A name alone no longer identifies an age group - "U14" exists once per season - so
        // without an explicit season this answers for the season we are currently in.
        int seasonYear = season != null ? season : seasonService.currentSeason();
        Optional<AgeGroup> ageGroup = service.findByName(name, seasonYear);
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
            return HttpResponse.badRequest(new x.timecontrol.dto.ErrorResponse(
                    "Name, seasonYear, birthYearFrom, birthYearTo (with birthYearFrom <= birthYearTo) and gender are required"));
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
            return HttpResponse.badRequest(new x.timecontrol.dto.ErrorResponse(
                    "Name, seasonYear, birthYearFrom, birthYearTo (with birthYearFrom <= birthYearTo) and gender are required"));
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
                && request.seasonYear() != null
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


