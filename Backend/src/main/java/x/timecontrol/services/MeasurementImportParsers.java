package x.timecontrol.services;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

/**
 * Parsing for the flexible measurement import: turns a CSV (any delimiter) into a list of raw rows
 * keyed by their source column name, plus a best-effort suggested mapping onto our own measurement
 * fields. The caller (MeasurementService) applies the actual user-picked or suggested mapping
 * afterwards - this class only ever produces {sourceFieldName: value} rows, nothing measurement
 * specific beyond the field/alias tables. Mirrors ParticipantImportParsers's approach, kept as an
 * independent copy so changes here can't regress the participant import.
 */
public final class MeasurementImportParsers {

    private MeasurementImportParsers() {
    }

    // Matches what MeasurementService#exportCsv writes, so a file we exported ourselves round-trips
    // with zero manual mapping - the aliases include our own field name verbatim. deviceMeasurementId
    // is part of it although MeasurementRequest (manual entry over REST) has no such field: it is
    // what ties a row back to the line on the device's own display, and losing it on a
    // backup/restore round-trip would both break that comparison and let the next poll of the same
    // device measurement insert a duplicate instead of updating the restored row.
    public static final List<String> TARGET_FIELDS = List.of("deviceMeasurementId", "participantId", "durationMs", "measuredAt");

    private static final Map<String, List<String>> TARGET_FIELD_ALIASES = Map.of(
            // "gertenr"/"gertenummer" are what normalize() makes of the German UI labels
            // "Geräte-Nr."/"Gerätenummer" (it strips anything outside a-z0-9, umlauts included).
            "deviceMeasurementId", List.of("devicemeasurementid", "deviceid", "gertenr", "geraetenr", "gertenummer", "geraetenummer", "geraetid"),
            "participantId", List.of("participantid", "teilnehmerid", "teilnehmer"),
            "durationMs", List.of("durationms", "dauer", "zeit", "zeitms", "duration"),
            "measuredAt", List.of("measuredat", "gemessenam", "zeitstempel", "timestamp", "datum"));

    private static final char[] CSV_DELIMITER_CANDIDATES = {';', ',', '\t', '|'};

    public record ParsedRows(List<String> fields, List<Map<String, String>> rows) {
    }

    /**
     * Splits a CSV/TSV-like file into rows keyed by header name. No quoting support - matches the
     * simplicity of the flat, unquoted exports this targets. {@code delimiter} is auto-detected
     * from the header line (most frequent of ; , tab |) when null.
     */
    public static ParsedRows parseCsv(String content, Character delimiter) {
        List<String> lines = content.lines().toList();
        if (lines.isEmpty()) {
            return new ParsedRows(List.of(), List.of());
        }

        char delim = delimiter != null ? delimiter : detectDelimiter(lines.getFirst());
        String[] headerParts = splitLine(lines.getFirst(), delim);
        List<String> fields = new ArrayList<>();
        for (String header : headerParts) {
            fields.add(header.trim());
        }

        List<Map<String, String>> rows = new ArrayList<>();
        for (int i = 1; i < lines.size(); i++) {
            String line = lines.get(i).trim();
            if (line.isEmpty()) {
                continue;
            }
            String[] parts = splitLine(line, delim);
            Map<String, String> row = new LinkedHashMap<>();
            for (int col = 0; col < fields.size() && col < parts.length; col++) {
                row.put(fields.get(col), parts[col].trim());
            }
            rows.add(row);
        }
        return new ParsedRows(fields, rows);
    }

    private static char detectDelimiter(String headerLine) {
        char best = ',';
        int bestCount = -1;
        for (char candidate : CSV_DELIMITER_CANDIDATES) {
            int count = (int) headerLine.chars().filter(c -> c == candidate).count();
            if (count > bestCount) {
                bestCount = count;
                best = candidate;
            }
        }
        return best;
    }

    private static String[] splitLine(String line, char delimiter) {
        return line.split(Pattern.quote(String.valueOf(delimiter)), -1);
    }

    /**
     * Best-effort default mapping from our target fields onto whichever detected source field looks
     * like a match (case/punctuation-insensitive alias match). Purely a UX convenience for
     * pre-filling the mapping UI / for REST callers that don't specify one - never persisted, and
     * the caller is always free to override or omit fields.
     */
    public static Map<String, String> suggestMapping(List<String> availableFields) {
        return suggestMapping(availableFields, TARGET_FIELDS, TARGET_FIELD_ALIASES);
    }

    /**
     * The same alias matching for another set of target fields - the archived race measurements'
     * import (RaceMeasurementCsvService) maps onto race numbers instead of participant ids.
     * {@code aliases} holds each target's accepted source names, already normalized.
     */
    public static Map<String, String> suggestMapping(List<String> availableFields, List<String> targetFields,
                                                     Map<String, List<String>> aliases) {
        Map<String, String> normalizedAvailable = new LinkedHashMap<>();
        for (String field : availableFields) {
            normalizedAvailable.putIfAbsent(normalize(field), field);
        }

        Map<String, String> suggestion = new LinkedHashMap<>();
        for (String target : targetFields) {
            for (String alias : aliases.get(target)) {
                String match = normalizedAvailable.get(alias);
                if (match != null) {
                    suggestion.put(target, match);
                    break;
                }
            }
        }
        return suggestion;
    }

    private static String normalize(String value) {
        return value.toLowerCase().replaceAll("[^a-z0-9]", "");
    }
}
