package x.timecontrol.listener;

import io.micronaut.context.annotation.Context;
import io.micronaut.context.annotation.Value;
import io.micronaut.core.annotation.Order;
import io.micronaut.core.order.Ordered;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;

/**
 * Initializes the database directory before the DataSource is created.
 * <p>
 * Uses @Context to ensure this bean is created eagerly at startup - Micronaut instantiates
 * Context beans during ApplicationContext.start(), before request-scoped/lazy beans like the
 * SQLite DataSource. @Order(HIGHEST_PRECEDENCE) additionally pins this bean first *among*
 * Context beans specifically: without it, relative ordering between independent @Context beans
 * is otherwise unspecified (works today only because this happens to be the only one), so any
 * future @Context/eager bean added elsewhere could otherwise end up running before this one and
 * hit a SQLite open failure on a machine where the app data directory doesn't exist yet (e.g.
 * first launch of the packaged app on a clean machine - see Application#APP_DATA_DIR for the
 * actual path).
 */
@Context
@Order(Ordered.HIGHEST_PRECEDENCE)
public class DatabaseDirectoryInitializer {

    private static final Logger LOG = LoggerFactory.getLogger(DatabaseDirectoryInitializer.class);

    @Value("${datasources.default.url}")
    private String databaseUrl;

    @PostConstruct
    public void initialize() {
        try {
            // Extract the file path from the JDBC URL
            // Format: jdbc:sqlite:database/time-control.db
            String filePath = databaseUrl.replace("jdbc:sqlite:", "");

            // Get the parent directory
            File dbFile = new File(filePath);
            File parentDir = dbFile.getParentFile();

            if (parentDir != null && !parentDir.exists()) {
                LOG.info("Creating database directory: {}", parentDir.getAbsolutePath());

                if (parentDir.mkdirs()) {
                    LOG.info("Successfully created database directory: {}", parentDir.getAbsolutePath());
                } else {
                    LOG.warn("Failed to create database directory: {}", parentDir.getAbsolutePath());
                }
            } else if (parentDir != null) {
                LOG.debug("Database directory already exists: {}", parentDir.getAbsolutePath());
            }

        } catch (Exception e) {
            LOG.error("Error while initializing database directory", e);
            // Don't throw exception here - let the DataSource initialization handle the error
        }
    }
}


