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

import java.util.List;

@Singleton
class AuthenticationProviderUserPassword<B> implements HttpRequestAuthenticationProvider<B> {

    @Value("${app.username}")
    private String expectedUsername;

    @Value("${app.password}")
    private String expectedPassword;

    @Override
    public AuthenticationResponse authenticate(
            @Nullable HttpRequest<B> httpRequest,
            @NonNull AuthenticationRequest<String, String> authenticationRequest
    ) {

        String username = authenticationRequest.getIdentity();
        String password = authenticationRequest.getSecret();

        if (username.equals(expectedUsername) && password.equals(expectedPassword)) {
            return AuthenticationResponse.success(authenticationRequest.getIdentity(), List.of("ROLE_USER"));
        }

        return AuthenticationResponse.failure(AuthenticationFailureReason.CREDENTIALS_DO_NOT_MATCH);

    }
}
