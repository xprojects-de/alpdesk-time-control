package x.timecontrol.services;

import jakarta.inject.Singleton;
import jakarta.transaction.Transactional;
import x.timecontrol.dto.MeasurementImportPreviewResponse;
import x.timecontrol.dto.MeasurementImportRowError;
import x.timecontrol.dto.ParticipantResponse;
import x.timecontrol.dto.PersonResponse;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.RaceMeasurement;
import x.timecontrol.repositories.RaceMeasurementRepository;

import java.time.LocalDateTime;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.StreamSupport;

/**
 * Backup and restore of a race's archived measurements as CSV. The export is the backup; importing a
 * file replaces every archived measurement of the race. Like every other CSV import, the file's
 * columns are mapped onto our fields; our own export's header maps itself. Participants are matched
 * by race number rather than by internal id, so the file stays readable in Excel and can be restored
 * on another laptop.
 */
@Singleton
public class RaceMeasurementCsvService {

    private static final char EXPORT_DELIMITER = ';';
    // lastName/firstName are informational only - they tell a human editing the file whose row it is,
    // and are not import targets.
    private static final List<String> EXPORT_HEADER = List.of(
            "deviceMeasurementId", "raceNumber", "lastName", "firstName", "durationMs", "measuredAt");

    public static final List<String> TARGET_FIELDS = List.of("deviceMeasurementId", "raceNumber", "durationMs", "measuredAt");
    // Normalized as MeasurementImportParsers does it: lower case, only a-z0-9 - "gertenr" is what is
    // left of "Geräte-Nr.", "startnr" of "Start-Nr.".
    private static final Map<String, List<String>> TARGET_FIELD_ALIASES = Map.of(
            "deviceMeasurementId", List.of("devicemeasurementid", "deviceid", "gertenr", "geraetenr", "gertenummer", "geraetenummer"),
            "raceNumber", List.of("racenumber", "startnummer", "startnr", "stnr", "bib"),
            "durationMs", List.of("durationms", "dauer", "zeit", "zeitms", "duration"),
            "measuredAt", List.of("measuredat", "gemessenam", "zeitstempel", "timestamp", "datum"));

    private static final int SAMPLE_ROWS = 5;
    private static final int MAX_REPORTED_ERRORS = 5;

    private final RaceMeasurementRepository repository;
    private final ParticipantService participantService;
    private final MeasurementTableLock measurementTableLock;

    public RaceMeasurementCsvService(RaceMeasurementRepository repository, ParticipantService participantService,
                                     MeasurementTableLock measurementTableLock) {
        this.repository = repository;
        this.participantService = participantService;
        this.measurementTableLock = measurementTableLock;
    }

    public String exportCsv(Long raceId) {
        Map<Long, ParticipantResponse> participantsById = new HashMap<>();
        for (ParticipantResponse participant : participantService.toResponses(participantsOf(raceId))) {
            participantsById.put(participant.id(), participant);
        }
        List<RaceMeasurement> raceMeasurements = repository.findByRaceId(raceId).stream()
                .sorted(Comparator.comparing(RaceMeasurement::id))
                .toList();

        StringBuilder csv = new StringBuilder();
        csv.append(String.join(String.valueOf(EXPORT_DELIMITER), EXPORT_HEADER)).append('\n');
        for (RaceMeasurement raceMeasurement : raceMeasurements) {
            ParticipantResponse participant = participantsById.get(raceMeasurement.participantId());
            PersonResponse person = participant != null ? participant.person() : null;
            List<String> values = List.of(
                    raceMeasurement.deviceMeasurementId().toString(),
                    participant != null && participant.raceNumber() != null ? participant.raceNumber().toString() : "",
                    sanitize(person != null ? person.lastName() : null),
                    sanitize(person != null ? person.firstName() : null),
                    raceMeasurement.durationMs().toString(),
                    raceMeasurement.measuredAt().toString()
            );
            csv.append(String.join(String.valueOf(EXPORT_DELIMITER), values)).append('\n');
        }
        return csv.toString();
    }

    /**
     * Detected source fields, a suggested mapping onto {@link #TARGET_FIELDS} and a few sample rows,
     * for the column-mapping dialog. Never touches the database.
     */
    public MeasurementImportPreviewResponse previewImport(byte[] fileBytes, Character delimiter) {
        MeasurementImportParsers.ParsedRows parsed = parse(fileBytes, delimiter);
        return new MeasurementImportPreviewResponse(parsed.fields(), suggestMapping(parsed.fields()),
                parsed.rows().stream().limit(SAMPLE_ROWS).toList());
    }

    public record ImportResult(int importedCount, int withoutParticipantCount, List<MeasurementImportRowError> warnings) {
    }

    /**
     * Replaces all archived measurements of the race with the rows of the file, reading each field
     * from the source column {@code mapping} names for it (our field -> source column; {@code null}
     * means the suggested mapping). Only durationMs must be mapped; an empty or "-" device number
     * gets a generated negative one - as for a measurement entered without device - an empty
     * measuredAt the time of the import, an empty race number no participant.
     * <p>
     * Unlike the other CSV imports, the file is checked completely before anything is deleted and one
     * invalid row rejects the whole import: this import replaces the race's measurements, and a
     * restore that skipped rows would lose finish times. A race number that matches nobody in the
     * race is no reason to reject - the row is imported without participant and reported, to be
     * assigned by hand.
     *
     * @throws IllegalArgumentException if durationMs is not mapped, the file has no rows, or a row is invalid
     */
    @Transactional
    public ImportResult importMapped(Long raceId, byte[] fileBytes, Character delimiter, Map<String, String> mapping) {
        MeasurementImportParsers.ParsedRows parsed = parse(fileBytes, delimiter);
        Map<String, String> effectiveMapping = mapping != null ? mapping : suggestMapping(parsed.fields());
        if (!effectiveMapping.containsKey("durationMs")) {
            throw new IllegalArgumentException("durationMs is not mapped to a column - nothing was imported.");
        }
        if (parsed.rows().isEmpty()) {
            throw new IllegalArgumentException("The file contains no measurements - nothing was imported.");
        }

        Map<Integer, Long> participantIdByRaceNumber = participantIdsByRaceNumber(raceId);
        LocalDateTime importedAt = LocalDateTime.now();
        List<ImportRow> rows = new ArrayList<>();
        List<MeasurementImportRowError> warnings = new ArrayList<>();
        List<String> errors = new ArrayList<>();
        Set<Long> deviceIdsInFile = new HashSet<>();

        int lineNumber = 1;
        for (Map<String, String> row : parsed.rows()) {
            lineNumber++;
            try {
                Long deviceId = parseDeviceId(valueFor(row, effectiveMapping, "deviceMeasurementId"));
                if (deviceId != null && !deviceIdsInFile.add(deviceId)) {
                    throw new IllegalArgumentException("device number " + deviceId + " appears twice");
                }
                Integer raceNumber = parseRaceNumber(valueFor(row, effectiveMapping, "raceNumber"));
                Long participantId = raceNumber != null ? participantIdByRaceNumber.get(raceNumber) : null;
                if (raceNumber != null && participantId == null) {
                    warnings.add(new MeasurementImportRowError(lineNumber, rawLine(row),
                            "No participant with race number " + raceNumber + " in this race - imported without participant"));
                }
                rows.add(new ImportRow(deviceId, participantId, parseDuration(valueFor(row, effectiveMapping, "durationMs")),
                        parseMeasuredAt(valueFor(row, effectiveMapping, "measuredAt"), importedAt)));
            } catch (IllegalArgumentException e) {
                errors.add("line " + lineNumber + ": " + e.getMessage());
            }
        }
        rejectIfInvalid(errors);

        List<RaceMeasurement> toSave = withDeviceIds(raceId, rows, deviceIdsInFile);
        measurementTableLock.run(() -> {
            repository.deleteByRaceId(raceId);
            repository.saveAll(toSave);
        });
        int withoutParticipant = (int) toSave.stream().filter(m -> m.participantId() == null).count();
        return new ImportResult(toSave.size(), withoutParticipant, warnings);
    }

    private record ImportRow(Long deviceId, Long participantId, Integer durationMs, LocalDateTime measuredAt) {
    }

    /**
     * Rows without a device number get negative ones, counting down from -1 past every number the
     * file already uses - the unique (race, device number) index would reject a repeated one.
     */
    private static List<RaceMeasurement> withDeviceIds(Long raceId, List<ImportRow> rows, Set<Long> deviceIdsInFile) {
        List<RaceMeasurement> raceMeasurements = new ArrayList<>();
        long nextGeneratedId = -1;
        for (ImportRow row : rows) {
            Long deviceId = row.deviceId();
            if (deviceId == null) {
                while (deviceIdsInFile.contains(nextGeneratedId)) {
                    nextGeneratedId--;
                }
                deviceId = nextGeneratedId--;
            }
            raceMeasurements.add(new RaceMeasurement(null, raceId, deviceId, row.participantId(), row.durationMs(), row.measuredAt()));
        }
        return raceMeasurements;
    }

    private List<Participant> participantsOf(Long raceId) {
        return StreamSupport.stream(participantService.findByRaceId(raceId).spliterator(), false).toList();
    }

    private Map<Integer, Long> participantIdsByRaceNumber(Long raceId) {
        Map<Integer, Long> ids = new HashMap<>();
        for (Participant participant : participantsOf(raceId)) {
            if (participant.raceNumber() != null) {
                ids.put(participant.raceNumber(), participant.id());
            }
        }
        return ids;
    }

    private static MeasurementImportParsers.ParsedRows parse(byte[] fileBytes, Character delimiter) {
        return MeasurementImportParsers.parseCsv(TextFileDecoder.decode(fileBytes), delimiter);
    }

    private static Map<String, String> suggestMapping(List<String> fields) {
        return MeasurementImportParsers.suggestMapping(fields, TARGET_FIELDS, TARGET_FIELD_ALIASES);
    }

    private static void rejectIfInvalid(List<String> errors) {
        if (errors.isEmpty()) {
            return;
        }
        String shown = String.join("; ", errors.subList(0, Math.min(errors.size(), MAX_REPORTED_ERRORS)));
        String more = errors.size() > MAX_REPORTED_ERRORS ? " (and " + (errors.size() - MAX_REPORTED_ERRORS) + " more)" : "";
        throw new IllegalArgumentException("Nothing was imported, " + errors.size() + " invalid row(s): " + shown + more);
    }

    private static String valueFor(Map<String, String> row, Map<String, String> mapping, String targetField) {
        String sourceField = mapping.get(targetField);
        String value = sourceField == null ? null : row.get(sourceField);
        return value == null ? "" : value.trim();
    }

    // Negative numbers are kept: they are the generated ones of our own export, unique within the race.
    private static Long parseDeviceId(String value) {
        if (value.isEmpty() || "-".equals(value)) {
            return null;
        }
        try {
            return Long.parseLong(value);
        } catch (NumberFormatException e) {
            throw new IllegalArgumentException("device number '" + value + "' is not a whole number");
        }
    }

    private static Integer parseRaceNumber(String value) {
        if (value.isEmpty()) {
            return null;
        }
        try {
            return Integer.parseInt(value);
        } catch (NumberFormatException e) {
            throw new IllegalArgumentException("race number '" + value + "' is not a whole number");
        }
    }

    private static Integer parseDuration(String value) {
        if (value.isEmpty()) {
            throw new IllegalArgumentException("durationMs is missing");
        }
        int durationMs;
        try {
            durationMs = Integer.parseInt(value);
        } catch (NumberFormatException e) {
            throw new IllegalArgumentException("durationMs '" + value + "' is not a whole number of milliseconds");
        }
        if (durationMs < 0) {
            throw new IllegalArgumentException("durationMs must not be negative");
        }
        return durationMs;
    }

    private static LocalDateTime parseMeasuredAt(String value, LocalDateTime importedAt) {
        if (value.isEmpty()) {
            return importedAt;
        }
        try {
            return LocalDateTime.parse(value);
        } catch (DateTimeParseException e) {
            throw new IllegalArgumentException("measuredAt '" + value + "' is not a date-time like 2026-09-26T10:15:30");
        }
    }

    private static String rawLine(Map<String, String> row) {
        return String.join(String.valueOf(EXPORT_DELIMITER), row.values());
    }

    private static String sanitize(String value) {
        if (value == null) {
            return "";
        }
        return value.replace(String.valueOf(EXPORT_DELIMITER), " ").replace("\n", " ").replace("\r", " ");
    }
}
