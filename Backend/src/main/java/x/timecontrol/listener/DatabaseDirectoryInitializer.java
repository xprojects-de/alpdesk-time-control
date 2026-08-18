package x.timecontrol.listener;

import io.micronaut.context.annotation.Context;
import io.micronaut.context.annotation.Value;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;

/**
 * Initializes the database directory before the DataSource is created.
 * Uses @Context to ensure this bean is created eagerly at startup.
 */
@Context
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


