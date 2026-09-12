
FROM eclipse-temurin:25-jdk-jammy AS builder

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

ENV PORT=18000
ENV SERVER_PORT=${PORT}

# Change this for Production
ENV APP_USERNAME="time-control"
ENV APP_PASSWORD="alpdesk"

COPY --from=builder /home/app/build/libs/${ARTIFACT_NAME}.jar /app.jar

RUN groupadd -r appuser && useradd --no-log-init -r -g appuser appuser && chown appuser:appuser /app.jar
USER appuser

EXPOSE 8080

ENTRYPOINT ["java", "-Dmicronaut.server.port=${SERVER_PORT}", "-jar", "/app.jar"]
