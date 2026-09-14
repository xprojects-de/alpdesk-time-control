package x.timecontrol.listener;

import io.micronaut.context.annotation.Requires;
import io.micronaut.context.annotation.Value;
import io.micronaut.context.event.ApplicationEventListener;
import io.micronaut.runtime.server.event.ServerStartupEvent;
import jakarta.inject.Singleton;
import org.jspecify.annotations.NonNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.swing.SwingUtilities;
import java.awt.GraphicsEnvironment;

/**
 * Shows a small always-on control window (name, version, link, quit button) instead of a
 * console. Off by default: only the jpackage installers enable it (via
 * --java-options -Dapp.packaged=true), because the GraalVM native-image build launches from a
 * terminal and its reachability analysis should not have to deal with AWT/Swing.
 */
@Singleton
@Requires(property = "app.packaged", value = "true", defaultValue = "false")
public class DesktopWindowStartupListener implements ApplicationEventListener<ServerStartupEvent> {

    private static final Logger LOG = LoggerFactory.getLogger(DesktopWindowStartupListener.class);

    @Value("${micronaut.server.port:18000}")
    private int serverPort;

    @Value("${app.version}")
    private String version;

    @Value("${app.launcher.title}")
    private String appTitle;

    @Value("${app.username}")
    private String appUsername;

    @Value("${app.password}")
    private String appPassword;

    @Override
    public void onApplicationEvent(@NonNull ServerStartupEvent event) {
        if (GraphicsEnvironment.isHeadless()) {
            LOG.warn("app.packaged is enabled but this environment is headless - skipping status window");
            return;
        }

        String url = "http://localhost:" + serverPort;
        SwingUtilities.invokeLater(() -> DesktopStatusWindow.show(appTitle, version, url, appUsername, appPassword));
    }
}
