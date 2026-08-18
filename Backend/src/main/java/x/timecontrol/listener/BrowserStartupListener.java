package x.timecontrol.listener;

import io.micronaut.context.annotation.Requires;
import io.micronaut.context.annotation.Value;
import io.micronaut.context.event.ApplicationEventListener;
import io.micronaut.runtime.server.event.ServerStartupEvent;
import jakarta.inject.Singleton;
import org.jspecify.annotations.NonNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

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

            openBrowserNative(url);

            LOG.info("Browser opened successfully");
        } catch (Exception e) {
            LOG.warn("Could not open browser automatically: {}. Please open http://localhost:{} manually.",
                    e.getMessage(), serverPort);
        }
    }

    /**
     * Opens a URL in the default browser using platform-specific commands.
     * This method works in GraalVM Native Images without requiring AWT libraries.
     *
     * @param url the URL to open
     * @throws Exception if the browser cannot be opened
     */
    private void openBrowserNative(String url) throws Exception {
        String os = System.getProperty("os.name").toLowerCase();
        ProcessBuilder processBuilder;

        if (os.contains("mac") || os.contains("darwin")) {
            // macOS
            processBuilder = new ProcessBuilder("open", url);
        } else if (os.contains("win")) {
            // Windows
            processBuilder = new ProcessBuilder("cmd", "/c", "start", url);
        } else if (os.contains("nix") || os.contains("nux") || os.contains("aix")) {
            // Linux/Unix
            processBuilder = new ProcessBuilder("xdg-open", url);
        } else {
            throw new UnsupportedOperationException("Unsupported operating system: " + os);
        }

        processBuilder.start();
    }
}

