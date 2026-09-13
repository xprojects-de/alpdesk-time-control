package x.timecontrol.listener;

import io.micronaut.context.annotation.Requires;
import io.micronaut.context.annotation.Value;
import io.micronaut.context.event.ApplicationEventListener;
import io.micronaut.runtime.server.event.ServerStartupEvent;
import jakarta.inject.Singleton;
import org.jspecify.annotations.NonNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import x.timecontrol.util.BrowserLauncher;

@Singleton
@Requires(property = "app.openBrowser", value = "true", defaultValue = "true")
public class BrowserStartupListener implements ApplicationEventListener<ServerStartupEvent> {

    private static final Logger LOG = LoggerFactory.getLogger(BrowserStartupListener.class);

    @Value("${micronaut.server.port:18000}")
    private int serverPort;

    @Value("${app.openBrowser:true}")
    private boolean openBrowser;

    @Override
    public void onApplicationEvent(@NonNull ServerStartupEvent event) {

        if (!openBrowser) {
            LOG.info("Browser auto-start disabled via configuration");
            return;
        }

        try {
            String url = "http://localhost:" + serverPort;
            LOG.info("Server started successfully. Opening browser at: {}", url);

            BrowserLauncher.open(url);

            LOG.info("Browser opened successfully");
        } catch (Exception e) {
            LOG.warn("Could not open browser automatically: {}. Please open http://localhost:{} manually.",
                    e.getMessage(), serverPort);
        }
    }
}
