package x.timecontrol.listener;

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
 * console. Shown for every launch mode (jpackage installers as well as plain `gradlew run`) -
 * skipped only for a GraalVM native-image build (via --java-options -Dapp.graalPackage=true),
 * since that build launches from a terminal and its reachability analysis should not have to
 * deal with AWT/Swing.
 */
@Singleton
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

    @Value("${app.graalPackage:false}")
    private boolean graalPackage;

    @Override
    public void onApplicationEvent(@NonNull ServerStartupEvent event) {
        if (graalPackage) {
            LOG.info("app.graalPackage is enabled - skipping status window");
            return;
        }

        if (GraphicsEnvironment.isHeadless()) {
            LOG.warn("environment is headless - skipping status window");
            return;
        }

        String url = "http://localhost:" + serverPort;
        SwingUtilities.invokeLater(() -> DesktopStatusWindow.show(appTitle, version, url, appUsername, appPassword));
    }
}
