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

    // Matches MeasurementRequest's fields exactly, so a file we exported ourselves round-trips with
    // zero manual mapping (see MeasurementService#exportCsv) - the aliases include our own field
    // name verbatim.
    public static final List<String> TARGET_FIELDS = List.of("participantId", "durationMs", "measuredAt");

    private static final Map<String, List<String>> TARGET_FIELD_ALIASES = Map.of(
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
        Map<String, String> normalizedAvailable = new LinkedHashMap<>();
        for (String field : availableFields) {
            normalizedAvailable.putIfAbsent(normalize(field), field);
        }

        Map<String, String> suggestion = new LinkedHashMap<>();
        for (String target : TARGET_FIELDS) {
            for (String alias : TARGET_FIELD_ALIASES.get(target)) {
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
