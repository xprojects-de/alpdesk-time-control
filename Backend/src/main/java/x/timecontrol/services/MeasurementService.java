package x.timecontrol.services;

import x.timecontrol.dto.MeasurementImportPreviewResponse;
import x.timecontrol.dto.MeasurementImportRowError;
import x.timecontrol.entities.Measurement;
import x.timecontrol.repositories.MeasurementRepository;
import jakarta.inject.Singleton;

import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Singleton
public class MeasurementService {

    private final MeasurementRepository repository;
    private final MeasurementTableLock measurementTableLock;

    public MeasurementService(MeasurementRepository repository, MeasurementTableLock measurementTableLock) {
        this.repository = repository;
        this.measurementTableLock = measurementTableLock;
    }

    public Measurement create(Measurement measurement) {
        return measurementTableLock.get(() -> repository.save(measurement));
    }

    public Iterable<Measurement> findAll() {
        return repository.findAll();
    }

    public List<Measurement> findByParticipantId(Long participantId) {
        return repository.findByParticipantId(participantId);
    }

    public Optional<Measurement> findById(Long id) {
        return repository.findById(id);
    }

    public Optional<Measurement> update(Long id, Measurement measurement) {
        return measurementTableLock.get(() -> {
            Optional<Measurement> existing = repository.findById(id);
            if (existing.isPresent()) {
                Measurement updated = new Measurement(
                        id,
                        measurement.participantId(),
                        measurement.durationMs(),
                        measurement.measuredAt()
                );
                return Optional.of(repository.update(updated));
            }
            return Optional.empty();
        });
    }

    public void delete(Long id) {
        measurementTableLock.run(() -> repository.deleteById(id));
    }

    @jakarta.transaction.Transactional
    public void deleteAll() {
        measurementTableLock.run(() -> {
            repository.deleteAll();
            repository.resetSequence();
        });
    }

    public Measurement upsertWithId(Long id, Long participantId, Integer durationMs, java.time.LocalDateTime measuredAt) {
        return measurementTableLock.get(() -> {
            repository.insertOrReplaceWithId(id, participantId, durationMs, measuredAt);
            return repository.findById(id).orElseThrow();
        });
    }

    /**
     * Parses an import file into detected source fields + a suggested mapping + a few sample rows,
     * for building/pre-filling the column-mapping UI. Never touches the database.
     */
    public MeasurementImportPreviewResponse previewImport(byte[] fileBytes, Character delimiter) {
        MeasurementImportParsers.ParsedRows parsed = MeasurementImportParsers.parseCsv(new String(fileBytes, StandardCharsets.UTF_8), delimiter);
        Map<String, String> suggested = MeasurementImportParsers.suggestMapping(parsed.fields());
        List<Map<String, String>> sample = parsed.rows().stream().limit(5).toList();
        return new MeasurementImportPreviewResponse(parsed.fields(), suggested, sample);
    }

    public record MeasurementImportResult(List<Measurement> imported, List<MeasurementImportRowError> errors) {
    }

    /**
     * Generic counterpart to the plain create(): parses a CSV (any delimiter) into raw
     * {@code {sourceField: value}} rows via {@link MeasurementImportParsers}, then applies
     * {@code mapping} (our field name -> source field name) to pull out the values for each new
     * measurement. A field left out of {@code mapping} is simply not imported for any row - since
     * durationMs is required, an explicitly empty {@code mapping} just reports "durationMs fehlt" for
     * every row rather than silently importing anything. {@code mapping} is used as given - including
     * an explicitly empty map, meaning "map nothing" - and only falls back to the auto-suggested
     * mapping when it's entirely omitted ({@code null}), mirroring
     * {@link ParticipantService#importResultsByRaceNumber}. Rows that fail validation (missing/
     * invalid durationMs, unparseable measuredAt/participantId) are skipped and reported rather than
     * rejecting the whole file.
     */
    public MeasurementImportResult importMapped(byte[] fileBytes, Character delimiter, Map<String, String> mapping) {
        MeasurementImportParsers.ParsedRows parsed = MeasurementImportParsers.parseCsv(new String(fileBytes, StandardCharsets.UTF_8), delimiter);
        Map<String, String> effectiveMapping = (mapping == null)
                ? MeasurementImportParsers.suggestMapping(parsed.fields())
                : mapping;

        List<Measurement> imported = new ArrayList<>();
        List<MeasurementImportRowError> errors = new ArrayList<>();

        int rowNumber = 1;
        for (Map<String, String> row : parsed.rows()) {
            rowNumber++;

            String participantIdRaw = valueFor(row, effectiveMapping, "participantId");
            String durationRaw = valueFor(row, effectiveMapping, "durationMs");
            String measuredAtRaw = valueFor(row, effectiveMapping, "measuredAt");

            if (durationRaw == null || durationRaw.isBlank()) {
                errors.add(new MeasurementImportRowError(rowNumber, row.toString(), "durationMs fehlt"));
                continue;
            }
            Integer durationMs;
            try {
                durationMs = Integer.parseInt(durationRaw.trim());
            } catch (NumberFormatException e) {
                errors.add(new MeasurementImportRowError(rowNumber, row.toString(), "durationMs ist keine gültige Zahl"));
                continue;
            }
            if (durationMs < 0) {
                errors.add(new MeasurementImportRowError(rowNumber, row.toString(), "durationMs darf nicht negativ sein"));
                continue;
            }

            LocalDateTime measuredAt;
            if (measuredAtRaw == null || measuredAtRaw.isBlank()) {
                measuredAt = LocalDateTime.now();
            } else {
                try {
                    measuredAt = LocalDateTime.parse(measuredAtRaw.trim());
                } catch (DateTimeParseException e) {
                    errors.add(new MeasurementImportRowError(rowNumber, row.toString(), "measuredAt hat ein ungültiges Format (erwartet z. B. 2026-08-13T10:30:00)"));
                    continue;
                }
            }

            Long participantId = null;
            if (participantIdRaw != null && !participantIdRaw.isBlank()) {
                try {
                    participantId = Long.parseLong(participantIdRaw.trim());
                } catch (NumberFormatException e) {
                    errors.add(new MeasurementImportRowError(rowNumber, row.toString(), "participantId ist keine gültige Zahl"));
                    continue;
                }
            }

            imported.add(create(new Measurement(null, participantId, durationMs, measuredAt)));
        }

        return new MeasurementImportResult(imported, errors);
    }

    private static String valueFor(Map<String, String> row, Map<String, String> mapping, String targetField) {
        String sourceField = mapping.get(targetField);
        return sourceField == null ? null : row.get(sourceField);
    }

    private static final char EXPORT_DELIMITER = ';';

    /**
     * Exports every measurement as CSV using our own canonical field names as the header row (see
     * {@link MeasurementImportParsers#TARGET_FIELDS}), so re-importing it via {@link #importMapped}
     * needs no manual mapping - the same self-mapping round-trip as
     * {@link ParticipantService#exportCsv}.
     */
    public String exportCsv() {
        List<Measurement> measurements = StreamSupport.stream(findAll().spliterator(), false).toList();

        StringBuilder csv = new StringBuilder();
        csv.append(String.join(String.valueOf(EXPORT_DELIMITER), MeasurementImportParsers.TARGET_FIELDS)).append('\n');
        for (Measurement m : measurements) {
            List<String> values = List.of(
                    m.participantId() != null ? m.participantId().toString() : "",
                    m.durationMs() != null ? m.durationMs().toString() : "",
                    m.measuredAt() != null ? m.measuredAt().toString() : ""
            );
            csv.append(String.join(String.valueOf(EXPORT_DELIMITER), values)).append('\n');
        }
        return csv.toString();
    }
}

