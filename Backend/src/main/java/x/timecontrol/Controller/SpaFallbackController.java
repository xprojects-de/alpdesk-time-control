package x.timecontrol.Controller;

import io.micronaut.core.io.ResourceResolver;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.server.types.files.StreamedFile;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;
import jakarta.inject.Inject;

import java.net.URL;
import java.util.Optional;

/**
 * The Angular app uses path-based (HTML5) routing, so a browser reload on a deep link like
 * /dashboard/races requests that literal path from the server instead of replaying client-side
 * navigation. There is no backend route and no matching file under the bundled Angular build for
 * such a path, so it would otherwise 404 - this serves the SPA shell (index.html) instead for the
 * app's known top-level routes (see Frontend/src/app/app.routes.ts), letting Angular's router
 * take over exactly as it did on the original in-app navigation. These are real, explicitly
 * anonymous routes (rather than a status-404 error handler) so normal @Secured evaluation applies
 * cleanly, independent of micronaut.security.reject-not-found's handling of unmatched routes.
 */
@Secured(SecurityRule.IS_ANONYMOUS)
@Controller
public class SpaFallbackController {

    @Inject
    ResourceResolver resourceResolver;

    @Get("/login")
    public HttpResponse<?> login() {
        return spaShell();
    }

    @Get("/dashboard")
    public HttpResponse<?> dashboardRoot() {
        return spaShell();
    }

    @Get("/dashboard/{+path}")
    public HttpResponse<?> dashboardChild(String path) {
        return spaShell();
    }

    private HttpResponse<?> spaShell() {
        Optional<URL> indexHtml = resourceResolver.getResource("classpath:public/index.html");
        return indexHtml.<HttpResponse<?>>map(url -> HttpResponse.ok(new StreamedFile(url)))
                .orElseGet(HttpResponse::notFound);
    }
}
