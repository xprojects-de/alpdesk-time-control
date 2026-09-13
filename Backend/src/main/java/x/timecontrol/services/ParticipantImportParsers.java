package x.timecontrol.services;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import javax.xml.XMLConstants;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Pattern;

/**
 * Format-agnostic parsing for the flexible participant import: turns a CSV (any delimiter) or a
 * DSV-Wettkampfdatei-style XML export into a list of raw rows keyed by their source field/column
 * name, plus a best-effort suggested mapping onto our own participant fields. The caller
 * (ParticipantService) applies the actual user-picked or suggested mapping afterwards - this class
 * only ever produces {sourceFieldName: value} rows, nothing race/participant specific.
 */
public final class ParticipantImportParsers {

    private ParticipantImportParsers() {
    }

    // durationMs/penalty/measuredAt are the participant's *result*, not identity data - present when
    // importing a full race export (see ParticipantController's export-csv/import-mapped pair), absent
    // from a plain start-list import. Their aliases include our own field name verbatim so a file we
    // exported ourselves round-trips with zero manual mapping (see ParticipantController#exportCsv).
    public static final List<String> TARGET_FIELDS = List.of(
            "lastName", "firstName", "birthDate", "gender", "ageGroup", "team", "category", "externalId",
            "raceNumber", "durationMs", "penalty", "measuredAt", "comment");

    // "Klasse" (DSV-Wettkampfdatei, RaceEngine, ...) names an age+gender class like "U14m" - an
    // AgeGroup, not our free-text Category - so it's aliased to ageGroup, not category. "Kategorie"
    // is kept on category since that's the more generic/neutral term for an actual free-text category.
    private static final Map<String, List<String>> TARGET_FIELD_ALIASES = Map.ofEntries(
            Map.entry("lastName", List.of("nachname", "lastname", "name")),
            Map.entry("firstName", List.of("vorname", "firstname")),
            Map.entry("birthDate", List.of("geburtsdatum", "birthdate", "jahrgang", "jg", "geburtsjahr", "birthyear")),
            Map.entry("gender", List.of("geschlecht", "gender", "sex")),
            Map.entry("ageGroup", List.of("klasse", "altersklasse", "altersgruppe", "agegroup")),
            Map.entry("team", List.of("verein", "vereinsname", "team", "club")),
            Map.entry("category", List.of("kategorie", "category")),
            Map.entry("externalId", List.of("dsvcode", "dsvid", "externalid")),
            Map.entry("raceNumber", List.of("stnr", "startnummer", "racenumber", "bib", "bibnumber")),
            Map.entry("durationMs", List.of("durationms", "zeit", "zeitms", "time", "result", "ergebnis")),
            Map.entry("penalty", List.of("penalty", "strafe", "strafzeit")),
            Map.entry("measuredAt", List.of("measuredat", "gemessenam", "zeitstempel", "timestamp")),
            Map.entry("comment", List.of("comment", "kommentar", "info", "bemerkung")));

    private static final char[] CSV_DELIMITER_CANDIDATES = {';', ',', '\t', '|'};

    public record ParsedRows(List<String> fields, List<Map<String, String>> rows) {
    }

    /**
     * Splits a CSV/TSV-like file into rows keyed by header name. No quoting support - matches the
     * simplicity of the original fixed-format CSV import and is enough for the flat, unquoted
     * exports this targets (RaceEngine, DSV club exports). {@code delimiter} is auto-detected from
     * the header line (most frequent of ; , tab |) when null.
     */
    public static ParsedRows parseCsv(String content, Character delimiter) {
        List<String> lines = content.lines().toList();
        if (lines.isEmpty()) {
            return new ParsedRows(List.of(), List.of());
        }

        char delim = delimiter != null ? delimiter : detectDelimiter(lines.get(0));
        String[] headerParts = splitLine(lines.get(0), delim);
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
     * Parses a DSV-Wettkampfdatei-style XML export: every {@code <Teilnehmer>} element anywhere in
     * the document becomes one row, keyed by its direct child element names (e.g. StNr, Nachname,
     * Jahrgang, Vereinsname, ...). Deliberately not tied to one fixed wrapper structure
     * (Startliste vs. Teilnehmerliste, Verein vs. Vereinsname, ...) since that has already varied
     * between real DSV-XML samples - only the repeated {@code <Teilnehmer>} element is assumed
     * stable. DTD/external-entity processing is disabled since this parses untrusted uploads (XXE).
     */
    public static ParsedRows parseDsvXml(InputStream input) throws IOException {
        Document document;
        try {
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            factory.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING, true);
            factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
            factory.setFeature("http://xml.org/sax/features/external-general-entities", false);
            factory.setFeature("http://xml.org/sax/features/external-parameter-entities", false);
            factory.setXIncludeAware(false);
            factory.setExpandEntityReferences(false);
            DocumentBuilder builder = factory.newDocumentBuilder();
            document = builder.parse(input);
        } catch (ParserConfigurationException | SAXException e) {
            throw new IOException("Failed to parse XML: " + e.getMessage(), e);
        }

        NodeList participantNodes = document.getElementsByTagName("Teilnehmer");
        Set<String> fields = new LinkedHashSet<>();
        List<Map<String, String>> rows = new ArrayList<>();

        for (int i = 0; i < participantNodes.getLength(); i++) {
            Node node = participantNodes.item(i);
            if (!(node instanceof Element participantElement)) {
                continue;
            }
            Map<String, String> row = new LinkedHashMap<>();
            NodeList children = participantElement.getChildNodes();
            for (int c = 0; c < children.getLength(); c++) {
                Node child = children.item(c);
                if (child instanceof Element childElement) {
                    String name = childElement.getTagName();
                    String value = childElement.getTextContent() != null ? childElement.getTextContent().trim() : "";
                    row.put(name, value);
                    fields.add(name);
                }
            }
            rows.add(row);
        }

        return new ParsedRows(new ArrayList<>(fields), rows);
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
