package x.timecontrol.Controller;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.PathVariable;
import io.micronaut.http.annotation.Produces;
import io.micronaut.http.annotation.QueryValue;
import io.micronaut.scheduling.TaskExecutors;
import io.micronaut.scheduling.annotation.ExecuteOn;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.inject.Inject;
import x.timecontrol.dto.ErrorResponse;
import x.timecontrol.dto.RaceLiveViewType;
import x.timecontrol.entities.Category;
import x.timecontrol.entities.Race;
import x.timecontrol.services.CategoryService;
import x.timecontrol.services.RaceLiveService;
import x.timecontrol.services.RaceService;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

/**
 * Public, unauthenticated live results for a race - reachable by URL alone (venue screen, another
 * site) independent of the Angular SPA, mirroring the same set of views {@code PdfExportService}
 * offers as PDF exports. No participant data beyond name/team/category/result is exposed here.
 * <p>
 * Routes are keyed by {@link Race#liveToken()}, not the numeric race id - an id would let anyone
 * walk every race in the system just by incrementing a number in the URL, which a plain
 * unauthenticated GET wouldn't otherwise stop.
 */
@Secured(SecurityRule.IS_ANONYMOUS)
@Controller("/public/races")
@ExecuteOn(TaskExecutors.BLOCKING)
@Tag(name = "RaceLive")
public class RaceLiveController {

    @Inject
    RaceLiveService raceLiveService;

    @Inject
    RaceService raceService;

    @Inject
    CategoryService categoryService;

    @Get("/{liveToken}/live")
    @Produces(MediaType.TEXT_HTML)
    @Operation(summary = "Live results menu", description = "A self-contained HTML page listing every available live results view for this race.")
    public HttpResponse<?> liveMenu(@PathVariable String liveToken) {
        Optional<Race> race = raceService.findByLiveToken(liveToken);
        if (race.isEmpty()) {
            return HttpResponse.notFound();
        }
        List<Category> categories = StreamSupport.stream(categoryService.findAll().spliterator(), false).toList();
        return HttpResponse.ok(raceLiveService.renderIndexHtml(race.get(), categories));
    }

    @Get("/{liveToken}/results")
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = "Live results as JSON", description = "Unauthenticated race results for one view, computed on demand (not cached).")
    public HttpResponse<?> resultsJson(@PathVariable String liveToken,
                                        @QueryValue(defaultValue = "OVERALL") RaceLiveViewType view,
                                        @QueryValue("gender") Optional<String> gender,
                                        @QueryValue("ageGroup") Optional<String> ageGroup,
                                        @QueryValue("categoryId") Optional<Long> categoryId) {
        Optional<Race> race = raceService.findByLiveToken(liveToken);
        if (race.isEmpty()) {
            return HttpResponse.notFound();
        }
        try {
            return HttpResponse.ok(raceLiveService.buildResponse(race.get(), view, gender.orElse(null), ageGroup.orElse(null), categoryId.orElse(null)));
        } catch (IllegalArgumentException e) {
            return HttpResponse.badRequest(new ErrorResponse(e.getMessage()));
        }
    }

    @Get("/{liveToken}/results-html")
    @Produces(MediaType.TEXT_HTML)
    @Operation(summary = "Live results as a ready-to-open, auto-refreshing HTML page")
    public HttpResponse<?> resultsHtml(@PathVariable String liveToken,
                                        @QueryValue(defaultValue = "OVERALL") RaceLiveViewType view,
                                        @QueryValue("gender") Optional<String> gender,
                                        @QueryValue("ageGroup") Optional<String> ageGroup,
                                        @QueryValue("categoryId") Optional<Long> categoryId) {
        Optional<Race> race = raceService.findByLiveToken(liveToken);
        if (race.isEmpty()) {
            return HttpResponse.notFound();
        }
        try {
            var response = raceLiveService.buildResponse(race.get(), view, gender.orElse(null), ageGroup.orElse(null), categoryId.orElse(null));
            return HttpResponse.ok(raceLiveService.renderHtml(response));
        } catch (IllegalArgumentException e) {
            // The route declares text/html, so the error body must be HTML too - an ErrorResponse
            // DTO (JSON) can't be encoded for this route's media type and would 500 instead of 400.
            // The message can echo back raw query input (e.g. "Invalid gender: <value>"), so it
            // must be escaped here the same as any other value embedded in this hand-built HTML.
            return HttpResponse.badRequest("<!DOCTYPE html><html lang=\"de\"><body><p>"
                    + RaceLiveService.escapeHtml(e.getMessage()) + "</p></body></html>");
        }
    }
}
