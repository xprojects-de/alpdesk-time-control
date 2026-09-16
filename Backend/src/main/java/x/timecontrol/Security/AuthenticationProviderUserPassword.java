package x.timecontrol.Security;

import io.micronaut.context.annotation.Value;
import io.micronaut.core.annotation.NonNull;
import io.micronaut.core.annotation.Nullable;
import io.micronaut.http.HttpRequest;
import io.micronaut.security.authentication.AuthenticationFailureReason;
import io.micronaut.security.authentication.AuthenticationRequest;
import io.micronaut.security.authentication.AuthenticationResponse;
import io.micronaut.security.authentication.provider.HttpRequestAuthenticationProvider;
import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.time.Duration;
import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicReference;

@Singleton
class AuthenticationProviderUserPassword<B> implements HttpRequestAuthenticationProvider<B> {

    private static final Logger LOG = LoggerFactory.getLogger(AuthenticationProviderUserPassword.class);

    // There is only ever one account, but the app is reached over the event WiFi by several
    // devices, so lockout is tracked per client IP rather than one shared JVM-wide counter -
    // otherwise a single misbehaving/malicious client on the network could lock out every other
    // device, including the operator's, indefinitely.
    private static final int MAX_CONSECUTIVE_FAILURES = 5;
    private static final Duration LOCKOUT_DURATION = Duration.ofMinutes(1);
    private static final String UNKNOWN_CLIENT_KEY = "unknown";

    private final Map<String, LoginAttemptState> attemptsByClient = new ConcurrentHashMap<>();

    @Value("${app.username}")
    private String expectedUsername;

    @Value("${app.password}")
    private String expectedPassword;

    @org.jspecify.annotations.NonNull
    @Override
    public AuthenticationResponse authenticate(
            @Nullable HttpRequest<B> httpRequest,
            @NonNull @org.jspecify.annotations.NonNull AuthenticationRequest<String, String> authenticationRequest
    ) {
        LoginAttemptState state = attemptsByClient.computeIfAbsent(clientKey(httpRequest), _ -> new LoginAttemptState());

        Instant now = Instant.now();
        if (now.isBefore(state.lockedUntil.get())) {
            return AuthenticationResponse.failure(AuthenticationFailureReason.CREDENTIALS_DO_NOT_MATCH);
        }

        String username = authenticationRequest.getIdentity();
        String password = authenticationRequest.getSecret();

        if (constantTimeEquals(username, expectedUsername) && constantTimeEquals(password, expectedPassword)) {
            state.consecutiveFailures.set(0);
            return AuthenticationResponse.success(authenticationRequest.getIdentity(), List.of("ROLE_USER"));
        }

        if (state.consecutiveFailures.incrementAndGet() >= MAX_CONSECUTIVE_FAILURES) {
            state.lockedUntil.set(now.plus(LOCKOUT_DURATION));
            state.consecutiveFailures.set(0);
            LOG.warn("Too many failed login attempts from {}, locking out login for {}", clientKey(httpRequest), LOCKOUT_DURATION);
        }

        return AuthenticationResponse.failure(AuthenticationFailureReason.CREDENTIALS_DO_NOT_MATCH);

    }

    private static String clientKey(@Nullable HttpRequest<?> httpRequest) {
        if (httpRequest == null) {
            return UNKNOWN_CLIENT_KEY;
        }
        try {
            return httpRequest.getRemoteAddress().getAddress().getHostAddress();
        } catch (Exception e) {
            return UNKNOWN_CLIENT_KEY;
        }
    }

    private static boolean constantTimeEquals(String a, String b) {
        if (a == null || b == null) {
            return false;
        }
        return MessageDigest.isEqual(a.getBytes(StandardCharsets.UTF_8), b.getBytes(StandardCharsets.UTF_8));
    }

    private static final class LoginAttemptState {
        private final AtomicInteger consecutiveFailures = new AtomicInteger(0);
        private final AtomicReference<Instant> lockedUntil = new AtomicReference<>(Instant.MIN);
    }
}
