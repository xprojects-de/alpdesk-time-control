package x.timecontrol.listener;

import io.micronaut.context.annotation.Value;
import io.micronaut.context.event.BeanCreatedEvent;
import io.micronaut.context.event.BeanCreatedEventListener;
import io.micronaut.flyway.FlywayConfigurationProperties;
import jakarta.inject.Singleton;
import org.flywaydb.core.Flyway;
import org.flywaydb.core.api.MigrationInfoService;
import org.jspecify.annotations.NonNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.nio.file.Files;
import java.nio.file.Path;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * Copies the database aside before Flyway applies anything, because a migration is the one
 * operation here that cannot be undone: V4 rebuilds the age_group table (rename, create, copy,
 * drop) on a database holding a club's whole race history, and it runs exactly once. The
 * installation docs describe backing up as a manual step before an update - this is the same thing,
 * done by the app itself, for the update where someone forgot.
 * <p>
 * Hooked onto the creation of {@link FlywayConfigurationProperties} because micronaut-flyway offers
 * nothing closer: it publishes only a {@code MigrationFinishedEvent} (by then the old schema is
 * gone) and never exposes the {@code Flyway} instance as a bean - {@code AbstractFlywayMigration}
 * builds it internally - so there is no {@code BeanCreatedEventListener<Flyway>} to write. These
 * properties are a constructor dependency of that migration runner, so this listener necessarily
 * runs before it, while staying out of {@code Application.main()} and out of Micronaut's own
 * configuration handling.
 * <p>
 * Deliberately {@code VACUUM INTO} rather than copying the file: the database runs in WAL mode (see
 * the JDBC URL in application.properties), so recent commits can still live in
 * {@code time-control.db-wal}, and a copy of the {@code .db} alone would silently lose them. VACUUM
 * INTO writes one self-contained, consistent file that opens on its own.
 * <p>
 * Backups are never deleted by the app - they are small, a migration happens at most once per
 * release, and silently removing the only copy of a season's results is exactly the kind of
 * helpfulness nobody wants. Old ones can be deleted by hand.
 */
@Singleton
public class DatabaseBackupListener implements BeanCreatedEventListener<FlywayConfigurationProperties> {

    private static final Logger LOG = LoggerFactory.getLogger(DatabaseBackupListener.class);
    private static final DateTimeFormatter STAMP = DateTimeFormatter.ofPattern("yyyy-MM-dd_HH-mm-ss");

    /**
     * Resolved by Micronaut, so an override via the {@code DATASOURCES_DEFAULT_URL} environment
     * variable or the system property the packaged build sets is already applied here - unlike a
     * path this class would piece together from the data directory itself.
     */
    private final String jdbcUrl;

    public DatabaseBackupListener(@Value("${datasources.default.url}") String jdbcUrl) {
        this.jdbcUrl = jdbcUrl;
    }

    @Override
    @NonNull
    public FlywayConfigurationProperties onCreated(@NonNull BeanCreatedEvent<FlywayConfigurationProperties> event) {
        FlywayConfigurationProperties configuration = event.getBean();
        if (configuration.isEnabled()) {
            backupIfMigrationsPending();
        }
        return configuration;
    }

    private void backupIfMigrationsPending() {
        Path database = databaseFile();
        if (database == null || !Files.exists(database) || !needsBackup()) {
            return;
        }
        Path target = database.toAbsolutePath().getParent()
                .resolve("backups")
                .resolve("time-control_" + LocalDateTime.now().format(STAMP) + ".db");
        try {
            Files.createDirectories(target.getParent());
            try (Connection connection = DriverManager.getConnection(jdbcUrl);
                 Statement statement = connection.createStatement()) {
                // Single-quoted SQL literal: the path is ours (derived from the configured
                // datasource URL), not user input, but a quote in it would still break the
                // statement.
                statement.execute("VACUUM INTO '" + target.toString().replace("'", "''") + "'");
            }
            LOG.info("Database migration pending - backup written to {}", target);
        } catch (Exception e) {
            // Refuse to start rather than run an irreversible migration with no copy to fall back
            // on: a failed backup is fixable (disk space, permissions), a failed migration on an
            // unbacked-up race history is not.
            throw new IllegalStateException(
                    "Could not back up the database to " + target + " before applying pending migrations. "
                            + "Refusing to migrate without a backup - free up disk space or fix the directory's "
                            + "permissions and start again.", e);
        }
    }

    /**
     * Whether there is both something to lose and something about to happen. Built from the same
     * default location (classpath:db/migration) micronaut-flyway uses, since application.properties
     * configures no other one.
     * <p>
     * {@code applied()} is the check for "something to lose", not the existence of the database
     * file: by the time this runs the file is already there, created empty by the driver, so a
     * fresh installation would otherwise get a 4 KB backup of a database with no tables in it on
     * its very first start.
     * <p>
     * Any failure to find out - an unreadable history table, or a hand-written one as the e2e
     * fixtures use - is answered with "yes": an extra backup costs a file, a missing one costs the
     * race history.
     */
    private boolean needsBackup() {
        try {
            MigrationInfoService info = Flyway.configure().dataSource(jdbcUrl, null, null).load().info();
            return info.applied().length > 0 && info.pending().length > 0;
        } catch (Exception e) {
            LOG.warn("Could not determine whether migrations are pending ({}) - backing up anyway", e.toString());
            return true;
        }
    }

    /**
     * The file a {@code jdbc:sqlite:<path>?<params>} URL points at, or null if it names no file.
     * Package-private so {@code DatabaseBackupListenerSpec} can cover the URL shapes the
     * end-to-end scenarios never produce (in-memory, no query string, a non-SQLite datasource).
     */
    Path databaseFile() {
        String prefix = "jdbc:sqlite:";
        if (!jdbcUrl.startsWith(prefix)) {
            return null;
        }
        String path = jdbcUrl.substring(prefix.length());
        int query = path.indexOf('?');
        if (query >= 0) {
            path = path.substring(0, query);
        }
        // ":memory:" and an empty (temporary) database name no file to back up.
        return path.isBlank() || path.startsWith(":") ? null : Path.of(path);
    }
}
