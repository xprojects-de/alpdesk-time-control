package x.timecontrol;

import io.micronaut.runtime.Micronaut;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityScheme;

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

    private static final String JWT_SECRET_ENV_KEY = "JWT_GENERATOR_SIGNATURE_SECRET";
    private static final Path JWT_SECRET_FILE = Path.of("database", "jwt-secret.txt");

    static void main(String[] args) {
        ensureJwtSecret();
        Micronaut.run(Application.class, args);
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
            String secret;
            if (Files.exists(JWT_SECRET_FILE)) {
                secret = Files.readString(JWT_SECRET_FILE).trim();
            } else {
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
}