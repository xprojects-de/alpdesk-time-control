
# build.gradle pins the toolchain to vendor GraalVM (needed for nativeCompile), and no
# toolchain-download resolver is configured - so the builder image itself must already be a
# GraalVM JDK, or Gradle can't find a matching compiler and the build fails outright.
FROM ghcr.io/graalvm/jdk-community:25 AS builder

# Set using args
ARG ARTIFACT_NAME=""

WORKDIR /home/app

COPY . .

RUN ./gradlew clean shadowJar -x test

RUN ls -lsa /home/app/build/libs/

# RUNTIME

FROM eclipse-temurin:25-jre-jammy

ARG ARTIFACT_NAME

WORKDIR /home/app

LABEL maintainer="X-Projects"

# Change this for Production - the server always listens on 18000
# (see Backend/src/main/resources/application.properties, micronaut.server.port)
ENV APP_USERNAME="time-control"
ENV APP_PASSWORD="alpdesk"
ENV OPEN_BROWSER="false"

COPY --from=builder /home/app/build/libs/${ARTIFACT_NAME}.jar /app.jar

RUN groupadd -r appuser && useradd --no-log-init -r -g appuser appuser \
    && mkdir -p /home/app/database \
    && chown -R appuser:appuser /home/app /app.jar
USER appuser

EXPOSE 18000
VOLUME ["/home/app/database"]

ENTRYPOINT ["java", "--enable-native-access=ALL-UNNAMED", "-jar", "/app.jar"]
