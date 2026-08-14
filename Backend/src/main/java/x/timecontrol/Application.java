package x.timecontrol;

import io.micronaut.context.ApplicationContext;
import io.micronaut.context.env.Environment;
import io.micronaut.runtime.Micronaut;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.awt.Desktop;
import java.net.URI;

@OpenAPIDefinition(
        info = @Info(title = "Time-Control", version = "1.0")
        //servers = @Server(url = "https://guides.micronaut.io")
)
@SecurityScheme(
        name = "BearerAuth",
        type = SecuritySchemeType.HTTP,
        scheme = "bearer",
        bearerFormat = "JWT",
        description = "JWT Token Authentication"
)
public class Application {

    private static final Logger LOG = LoggerFactory.getLogger(Application.class);

    static void main(String[] args) {
        ApplicationContext context = Micronaut.run(Application.class, args);
        openBrowserOnStartup(context);
    }

    private static void openBrowserOnStartup(ApplicationContext context) {

        try {

            Environment env = context.getEnvironment();
            boolean openBrowser = env.getProperty("app.openBrowser", Boolean.class, true);

            if (openBrowser && Desktop.isDesktopSupported()) {

                int port = env.getProperty("micronaut.server.port", Integer.class, 18000);
                String url = "http://localhost:" + port;
                Thread.sleep(2000);

                LOG.info("Opening browser at: {}", url);
                Desktop.getDesktop().browse(new URI(url));
            }
        } catch (Exception e) {
            LOG.warn("Could not open browser: {}", e.getMessage());
        }
    }
}