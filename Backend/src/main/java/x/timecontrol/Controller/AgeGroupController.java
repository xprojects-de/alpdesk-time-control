package x.timecontrol.Controller;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpStatus;
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
import x.timecontrol.dto.AgeGroupVariantResponse;
import x.timecontrol.dto.AgeGroupVariantsResponse;
import x.timecontrol.dto.CopySeasonRequest;
import x.timecontrol.dto.ErrorResponse;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.services.AgeGroupService;
import x.timecontrol.services.SeasonService;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/age-groups")
@ExecuteOn(TaskExecutors.BLOCKING)
@Tag(name = "Age Group")
public class AgeGroupController {

    /**
     * Plausible range for a season year, matching the birth-year range the age-group dialog offers.
     * A season outside it is a typo or a broken client, and the row it would create matches nobody
     * while cluttering the season selector for good. Enforced here rather than only in the UI: the
     * dialog no longer lets the season be typed at all, so this endpoint is the only guard left.
     */
    private static final int MIN_SEASON_YEAR = 1900;
    private static final int MAX_SEASON_YEAR = 2100;

    @Inject
    AgeGroupService service;

    @Inject
    SeasonService seasonService;

    @Produces(MediaType.APPLICATION_JSON)
    @Get
    @Operation(summary = "List age groups, optionally only those of one season and variant",
            description = "Without a season, every season's age groups are returned - for the configuration UI. With a season, only those of the given variant (omitted: the standard variant). Anything resolving a participant's class wants the season and variant of that participant's race instead.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "List of all age groups", content = @Content(schema = @Schema(implementation = AgeGroupResponse.class)))
    public HttpResponse<List<AgeGroupResponse>> list(@Nullable @QueryValue Integer season, @Nullable @QueryValue String variant) {
        Iterable<AgeGroup> ageGroups = season != null
                ? service.findBySeasonAndVariant(season, AgeGroupService.normalizeVariant(variant))
                : service.findAll();
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
    @Get("/variants")
    @Operation(summary = "List the age-group variants of one season, standard first",
            description = "The options for the variant selectors, each with the names of the races of that season categorised with it. The season is given directly (age-group page) or as a date the season is derived from (race dialog - the season boundary is the backend's to apply). The standard variant (empty name) is always listed, as is a variant that only races still refer to.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "200", description = "Variants of the season", content = @Content(schema = @Schema(implementation = AgeGroupVariantsResponse.class)))
    @ApiResponse(responseCode = "400", description = "Neither a plausible season nor a date given")
    public HttpResponse<?> variants(@Nullable @QueryValue Integer season, @Nullable @QueryValue LocalDate date) {
        Integer seasonYear = date != null ? Integer.valueOf(seasonService.seasonOf(date)) : season;
        if (!isPlausibleSeason(seasonYear)) {
            return HttpResponse.badRequest(new ErrorResponse(
                    "season (" + MIN_SEASON_YEAR + "-" + MAX_SEASON_YEAR + ") or date is required"));
        }
        List<AgeGroupVariantResponse> variants = service.findVariants(seasonYear).stream()
                .map(AgeGroupVariantResponse::from)
                .toList();
        return HttpResponse.ok(new AgeGroupVariantsResponse(seasonYear, variants));
    }

    @Delete("/variants")
    @Operation(summary = "Delete every age group of one variant of a season",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "204", description = "Variant deleted")
    @ApiResponse(responseCode = "400", description = "Invalid season, or the standard variant")
    @ApiResponse(responseCode = "409", description = "Races of that season still use the variant")
    public HttpResponse<?> deleteVariant(@QueryValue Integer season, @QueryValue String variant) {
        if (!isPlausibleSeason(season)) {
            return HttpResponse.badRequest(new ErrorResponse(
                    "season must be between " + MIN_SEASON_YEAR + " and " + MAX_SEASON_YEAR));
        }
        try {
            service.deleteVariant(season, AgeGroupService.normalizeVariant(variant));
            return HttpResponse.noContent();
        } catch (IllegalArgumentException e) {
            return HttpResponse.badRequest(new ErrorResponse(e.getMessage()));
        } catch (IllegalStateException e) {
            return HttpResponse.status(HttpStatus.CONFLICT).body(new ErrorResponse(e.getMessage()));
        }
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Post("/copy-season")
    @Operation(summary = "Copy one variant's age groups to another season and/or variant",
            description = "Copies every age group of the source season's variant to the target, shifting the birth years by the difference between the two seasons - \"U14\" 2012-2013 in 2025 becomes \"U14\" 2013-2014 in 2026. Rolls a season over (the intended way to set up a new one: editing the existing rows instead would re-categorise every race already run under them) or, within one season, starts a new variant from an existing one.",
            security = @SecurityRequirement(name = "BearerAuth"))
    @ApiResponse(responseCode = "201", description = "Age groups copied", content = @Content(schema = @Schema(implementation = AgeGroupResponse.class)))
    @ApiResponse(responseCode = "400", description = "Invalid input, or source and target are the same")
    @ApiResponse(responseCode = "409", description = "Source is empty, or target already has age groups")
    public HttpResponse<?> copySeason(@Body CopySeasonRequest request) {
        if (!isPlausibleSeason(request.fromSeason()) || !isPlausibleSeason(request.toSeason())) {
            return HttpResponse.badRequest(new ErrorResponse(
                    "fromSeason and toSeason are required and must be between "
                            + MIN_SEASON_YEAR + " and " + MAX_SEASON_YEAR));
        }
        try {
            List<AgeGroupResponse> created = service.copyVariant(
                            request.fromSeason(), AgeGroupService.normalizeVariant(request.fromVariant()),
                            request.toSeason(), AgeGroupService.normalizeVariant(request.toVariant()))
                    .stream()
                    .map(AgeGroupResponse::from)
                    .toList();
            return HttpResponse.created(created);
        } catch (IllegalArgumentException e) {
            return HttpResponse.badRequest(new ErrorResponse(e.getMessage()));
        } catch (IllegalStateException e) {
            return HttpResponse.status(HttpStatus.CONFLICT).body(new ErrorResponse(e.getMessage()));
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
    public HttpResponse<AgeGroupResponse> getByName(@PathVariable String name, @Nullable @QueryValue Integer season,
                                                    @Nullable @QueryValue String variant) {
        // A name alone no longer identifies an age group - "U14" exists once per season and
        // variant - so without an explicit season this answers for the season we are currently
        // in, and without a variant for its standard one.
        int seasonYear = season != null ? season : seasonService.currentSeason();
        Optional<AgeGroup> ageGroup = service.findByName(name, seasonYear, AgeGroupService.normalizeVariant(variant));
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
            return HttpResponse.badRequest(new ErrorResponse(
                    "Name, seasonYear (" + MIN_SEASON_YEAR + "-" + MAX_SEASON_YEAR
                            + "), birthYearFrom, birthYearTo (with birthYearFrom <= birthYearTo) and gender are required"));
        }
        AgeGroup ageGroup = service.createFromRequest(request);
        try {
            AgeGroup created = service.create(ageGroup);
            return HttpResponse.created(AgeGroupResponse.from(created));
        } catch (IllegalArgumentException e) {
            return HttpResponse.badRequest(new ErrorResponse(e.getMessage()));
        } catch (IllegalStateException e) {
            return HttpResponse.status(HttpStatus.CONFLICT).body(new ErrorResponse(e.getMessage()));
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
            return HttpResponse.badRequest(new ErrorResponse(
                    "Name, seasonYear (" + MIN_SEASON_YEAR + "-" + MAX_SEASON_YEAR
                            + "), birthYearFrom, birthYearTo (with birthYearFrom <= birthYearTo) and gender are required"));
        }
        AgeGroup ageGroup = service.createFromRequest(request);
        Optional<AgeGroup> updated;
        try {
            updated = service.update(id, ageGroup);
        } catch (IllegalArgumentException e) {
            return HttpResponse.badRequest(new ErrorResponse(e.getMessage()));
        } catch (IllegalStateException e) {
            return HttpResponse.status(HttpStatus.CONFLICT).body(new ErrorResponse(e.getMessage()));
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
                && isPlausibleSeason(request.seasonYear())
                && request.birthYearFrom() != null
                && request.birthYearTo() != null
                && request.birthYearFrom() <= request.birthYearTo()
                && request.gender() != null;
    }

    private static boolean isPlausibleSeason(Integer seasonYear) {
        return seasonYear != null && seasonYear >= MIN_SEASON_YEAR && seasonYear <= MAX_SEASON_YEAR;
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


