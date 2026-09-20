package x.timecontrol;

import io.micronaut.runtime.Micronaut;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.security.SecureRandom;
import java.util.Base64;

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
    private static final String JWT_SECRET_ENV_KEY = "JWT_GENERATOR_SIGNATURE_SECRET";
    private static final String APP_USERNAME_ENV_KEY = "APP_USERNAME";
    private static final String APP_PASSWORD_ENV_KEY = "APP_PASSWORD";
    private static final String DEFAULT_APP_USERNAME = "time-control";

    // The app's identifying slug, used for the packaged build's data directory name below. This is
    // independent of the jpackage installer's own display name/vendor (`--name`/`--vendor` in
    // build.gradle's jpackageArgs) - those two are cosmetic and can be rebranded freely, but a
    // change to APP_ID silently orphans any existing packaged install's data directory (no
    // migration is performed - see the javadoc on ensureAppPassword/ensureJwtSecret). If you rename
    // this, also update the path mentioned in README.md's "Wo liegt die Datenbank?" section.
    private static final String APP_ID = "alpdesk-time-control";

    // When launched as a jpackage app bundle (double-click on macOS/Windows/Linux), the
    // process's working directory is unreliable - e.g. macOS sets it to "/" for apps started
    // via Finder/LaunchServices, which is a read-only system volume. "user.home" is correct
    // regardless of how the process was started, so packaged builds anchor their data there
    // instead of using a plain-relative path. Plain `./gradlew run` (jpackageArgs sets
    // -Dapp.packaged=true only for the packaged build) keeps using the project-relative
    // "database" directory unchanged.
    private static final boolean PACKAGED = Boolean.getBoolean("app.packaged");
    private static final Path APP_DATA_DIR = PACKAGED
            ? Path.of(System.getProperty("user.home"), APP_ID)
            : Path.of("database");
    private static final Path JWT_SECRET_FILE = APP_DATA_DIR.resolve("jwt-secret.txt");
    private static final Path APP_PASSWORD_FILE = APP_DATA_DIR.resolve("app-password.txt");

    static void main(String[] args) {
        if (PACKAGED) {
            System.setProperty("datasources.default.url", "jdbc:sqlite:"
                    + APP_DATA_DIR.resolve("time-control.db")
                    + "?foreign_keys=true&journal_mode=WAL&busy_timeout=5000");
        }
        ensureJwtSecret();
        String appPassword = ensureAppPassword();
        String appUsername = resolvedAppUsername();
        LOG.info("Login-Zugangsdaten: Benutzer='{}', Passwort='{}'", appUsername, appPassword);
        Micronaut.run(Application.class, args);
    }

    private static String resolvedAppUsername() {
        String username = System.getenv(APP_USERNAME_ENV_KEY);
        if (username == null) {
            username = System.getProperty(APP_USERNAME_ENV_KEY);
        }
        return username != null ? username : DEFAULT_APP_USERNAME;
    }

    /**
     * The JWT signing secret must never fall back to the public default that ships in
     * application.properties (anyone on the network could forge tokens with it). If no
     * explicit override is configured, generate a random secret once and persist it next
     * to the SQLite database so it survives restarts.
     */
    private static void ensureJwtSecret() {
        if (System.getenv(JWT_SECRET_ENV_KEY) != null || System.getProperty(JWT_SECRET_ENV_KEY) != null) {
            return;
        }
        try {
            String secret = Files.exists(JWT_SECRET_FILE) ? Files.readString(JWT_SECRET_FILE).trim() : "";
            // isBlank, not just "file missing": a start that died mid-write (crash, full disk)
            // leaves a 0-byte file behind. Reading it would set an EMPTY secret - which counts as
            // configured and therefore beats the default in application.properties, while HS256
            // rejects it outright. The app would never start again, and in the packaged build
            // nobody would see why. Regenerating costs nothing: a secret nobody could read cannot
            // have signed a token that is still valid.
            if (secret.isBlank()) {
                secret = generateSecret();
                Files.createDirectories(JWT_SECRET_FILE.getParent());
                Files.writeString(JWT_SECRET_FILE, secret);
            }
            System.setProperty(JWT_SECRET_ENV_KEY, secret);
        } catch (IOException e) {
            throw new IllegalStateException("Could not initialize JWT signing secret", e);
        }
    }

    private static String generateSecret() {
        byte[] bytes = new byte[64];
        new SecureRandom().nextBytes(bytes);
        return Base64.getUrlEncoder().withoutPadding().encodeToString(bytes);
    }

    /**
     * The login password must never silently fall back to the public example value that ships
     * in application.properties (time-control/time-control). If no explicit override is
     * configured, generate a random password once and persist it next to the SQLite database
     * so it survives restarts - it is also logged and shown in the desktop status window so an
     * on-site operator can actually use it to log in.
     */
    private static String ensureAppPassword() {
        String existing = System.getenv(APP_PASSWORD_ENV_KEY);
        if (existing == null) {
            existing = System.getProperty(APP_PASSWORD_ENV_KEY);
        }
        if (existing != null) {
            return existing;
        }
        try {
            String password = Files.exists(APP_PASSWORD_FILE) ? Files.readString(APP_PASSWORD_FILE).trim() : "";
            // See ensureJwtSecret: an empty file would otherwise become an empty password, and
            // nobody could log in. A fresh one is logged and shown in the status window, so the
            // operator learns it the same way they did the first time.
            if (password.isBlank()) {
                password = generatePassword();
                Files.createDirectories(APP_PASSWORD_FILE.getParent());
                Files.writeString(APP_PASSWORD_FILE, password);
            }
            System.setProperty(APP_PASSWORD_ENV_KEY, password);
            return password;
        } catch (IOException e) {
            throw new IllegalStateException("Could not initialize app password", e);
        }
    }

    private static String generatePassword() {
        String letters = "abcdefghijklmnopqrstuvwxyz";
        String digits = "0123456789";
        SecureRandom random = new SecureRandom();
        StringBuilder password = new StringBuilder(8);
        for (int i = 0; i < 4; i++) {
            password.append(letters.charAt(random.nextInt(letters.length())));
        }
        for (int i = 0; i < 4; i++) {
            password.append(digits.charAt(random.nextInt(digits.length())));
        }
        return password.toString();
    }
}