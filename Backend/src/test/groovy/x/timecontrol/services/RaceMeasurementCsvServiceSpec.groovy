package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.dto.ParticipantResponse
import x.timecontrol.dto.PersonResponse
import x.timecontrol.entities.Gender
import x.timecontrol.entities.Participant
import x.timecontrol.entities.RaceMeasurement
import x.timecontrol.repositories.RaceMeasurementRepository

import java.nio.charset.StandardCharsets
import java.time.LocalDate
import java.time.LocalDateTime

class RaceMeasurementCsvServiceSpec extends Specification {

    static final Long RACE = 7L
    static final LocalDateTime AT = LocalDateTime.of(2026, 9, 26, 10, 15, 30)
    static final String HEADER = "deviceMeasurementId;raceNumber;lastName;firstName;durationMs;measuredAt"

    RaceMeasurementRepository repository = Mock()
    ParticipantService participantService = Mock()

    RaceMeasurementCsvService service = new RaceMeasurementCsvService(repository, participantService, new MeasurementTableLock())

    // Anna has race number 5 (participant 50), Berta race number 6 (participant 60).
    List<ParticipantResponse> participantResponses = [response(50L, 5, "Anna", "Huber"), response(60L, 6, "Berta", "Maier")]

    def setup() {
        participantService.findByRaceId(RACE) >> [participant(50L, 5), participant(60L, 6)]
        participantService.toResponses(_) >> { participantResponses }
    }

    private static Participant participant(Long id, Integer raceNumber) {
        new Participant(id, RACE, id, raceNumber, null, null, null, null, null, null, null, null, null)
    }

    private static ParticipantResponse response(Long id, Integer raceNumber, String firstName, String lastName) {
        PersonResponse person = new PersonResponse(id, firstName, lastName, LocalDate.of(2012, 1, 1), Gender.FEMALE, null)
        new ParticipantResponse(id, null, person, raceNumber, null, null, null, null, null, null, null, null, null, null)
    }

    private static RaceMeasurement stored(Long id, Long deviceId, Long participantId, Integer durationMs) {
        new RaceMeasurement(id, RACE, deviceId, participantId, durationMs, AT)
    }

    private static byte[] file(String... lines) {
        lines.join("\n").getBytes(StandardCharsets.UTF_8)
    }

    def "the export lists every archived measurement in archive order, with race number and name of its participant"() {
        given:
        repository.findByRaceId(RACE) >> [stored(2L, 8L, 50L, 61230), stored(1L, 7L, 60L, 58100), stored(3L, -1L, null, 70000)]

        expect:
        service.exportCsv(RACE).readLines() == [
                HEADER,
                "7;6;Maier;Berta;58100;2026-09-26T10:15:30",
                "8;5;Huber;Anna;61230;2026-09-26T10:15:30",
                "-1;;;;70000;2026-09-26T10:15:30"
        ]
    }

    def "a semicolon in a name does not shift the columns of the export"() {
        given:
        participantResponses = [response(50L, 5, "Anna;Lena", "Huber")]
        repository.findByRaceId(RACE) >> [stored(1L, 7L, 50L, 58100)]

        expect:
        service.exportCsv(RACE).readLines()[1] == "7;5;Huber;Anna Lena;58100;2026-09-26T10:15:30"
    }

    private RaceMeasurementCsvService.ImportResult importFile(Map<String, String> mapping = null, String... lines) {
        service.importMapped(RACE, file(lines), null, mapping)
    }

    def "the preview suggests a mapping onto our fields for #header"() {
        expect:
        service.previewImport(file(header, "7;5;58100;2026-09-26T10:15:30"), null).suggestedMapping() == expected

        where:
        header                                        || expected
        "deviceMeasurementId;raceNumber;durationMs;measuredAt" || [deviceMeasurementId: "deviceMeasurementId", raceNumber: "raceNumber", durationMs: "durationMs", measuredAt: "measuredAt"]
        "Geräte-Nr.;Startnummer;Zeit;Gemessen am"      || [deviceMeasurementId: "Geräte-Nr.", raceNumber: "Startnummer", durationMs: "Zeit", measuredAt: "Gemessen am"]
        "Spalte A;Spalte B"                            || [:]
    }

    def "the preview shows the detected columns and at most five sample rows and saves nothing"() {
        when:
        def preview = service.previewImport(file([HEADER] + (1..8).collect { "$it;;;;1000;2026-09-26T10:15:30" } as String[]), null)

        then:
        preview.availableFields() == HEADER.split(";") as List
        preview.sampleRows().size() == 5
        0 * repository._
    }

    def "the import replaces all archived measurements of the race and assigns them by race number"() {
        when:
        RaceMeasurementCsvService.ImportResult result = importFile(null,
                HEADER,
                "7;6;Maier;Berta;58100;2026-09-26T10:15:30",
                "8;5;;;61230;2026-09-26T10:15:31")

        then:
        1 * repository.deleteByRaceId(RACE)

        then:
        1 * repository.saveAll({ List<RaceMeasurement> rows ->
            rows == [new RaceMeasurement(null, RACE, 7L, 60L, 58100, AT),
                     new RaceMeasurement(null, RACE, 8L, 50L, 61230, AT.plusSeconds(1))]
        })

        and:
        result.importedCount() == 2
        result.withoutParticipantCount() == 0
        result.warnings().isEmpty()
    }

    def "a foreign file is read through the chosen column mapping"() {
        when:
        importFile([raceNumber: "Bib", durationMs: "ms", measuredAt: "Uhrzeit"],
                "Uhrzeit,Bib,ms,Bemerkung",
                "2026-09-26T10:15:30,6,58100,Sturz")

        then:
        1 * repository.saveAll({ List<RaceMeasurement> rows ->
            rows == [new RaceMeasurement(null, RACE, -1L, 60L, 58100, AT)]
        })
    }

    def "the names in the file are ignored - only the race number assigns"() {
        when:
        importFile(null, HEADER, "7;5;Maier;Berta;58100;2026-09-26T10:15:30")

        then:
        1 * repository.saveAll({ List<RaceMeasurement> rows -> rows*.participantId() == [50L] })
    }

    def "a race number nobody in the race has is imported without participant and reported"() {
        when:
        RaceMeasurementCsvService.ImportResult result = importFile(null,
                HEADER,
                "7;99;;;58100;2026-09-26T10:15:30",
                "8;;;;61230;2026-09-26T10:15:30")

        then:
        1 * repository.saveAll({ List<RaceMeasurement> rows -> rows*.participantId() == [null, null] })
        result.withoutParticipantCount() == 2
        result.warnings().size() == 1
        result.warnings()[0].lineNumber() == 2
        result.warnings()[0].reason().contains("race number 99")
    }

    def "rows without a device number get generated negative ones that skip those the file already uses"() {
        when:
        importFile(null,
                HEADER,
                ";5;;;58100;2026-09-26T10:15:30",
                "-1;6;;;59100;2026-09-26T10:15:30",
                "-;;;;60100;2026-09-26T10:15:30",
                "12;;;;61100;2026-09-26T10:15:30")

        then:
        1 * repository.saveAll({ List<RaceMeasurement> rows -> rows*.deviceMeasurementId() == [-2L, -1L, -3L, 12L] })
    }

    def "without a measuredAt column the rows are stamped with the time of the import"() {
        given:
        LocalDateTime before = LocalDateTime.now()

        when:
        importFile([durationMs: "durationMs"], "durationMs", "58100")

        then:
        1 * repository.saveAll({ List<RaceMeasurement> rows ->
            !rows[0].measuredAt().isBefore(before) && !rows[0].measuredAt().isAfter(LocalDateTime.now())
        })
    }

    def "an exported file imports back to the same measurements"() {
        given:
        repository.findByRaceId(RACE) >> [stored(1L, 7L, 60L, 58100), stored(2L, -1L, null, 70000)]
        byte[] backup = service.exportCsv(RACE).getBytes(StandardCharsets.UTF_8)

        when:
        service.importMapped(RACE, backup, null, null)

        then:
        1 * repository.saveAll({ List<RaceMeasurement> rows ->
            rows == [new RaceMeasurement(null, RACE, 7L, 60L, 58100, AT),
                     new RaceMeasurement(null, RACE, -1L, null, 70000, AT)]
        })
    }

    def "an invalid import is rejected as a whole and leaves the race unchanged: #problem"() {
        when:
        importFile(mapping, lines as String[])

        then:
        IllegalArgumentException e = thrown()
        e.message.contains(message)
        0 * repository.deleteByRaceId(_)
        0 * repository.saveAll(_)

        where:
        problem                       | mapping                      | lines                                                                                  || message
        "duration not mapped"         | [raceNumber: "raceNumber"]   | [HEADER, "7;5;;;58100;2026-09-26T10:15:30"]                                            || "durationMs is not mapped"
        "no rows"                     | null                         | [HEADER]                                                                               || "no measurements"
        "duration empty"              | null                         | [HEADER, "7;5;;;;2026-09-26T10:15:30"]                                                 || "durationMs is missing"
        "device number not a number"  | null                         | [HEADER, "x;5;;;58100;2026-09-26T10:15:30"]                                            || "device number 'x'"
        "device number twice"         | null                         | [HEADER, "7;5;;;58100;2026-09-26T10:15:30", "7;6;;;59100;2026-09-26T10:15:30"]         || "appears twice"
        "race number not a number"    | null                         | [HEADER, "7;fünf;;;58100;2026-09-26T10:15:30"]                                         || "race number 'fünf'"
        "duration as a clock time"    | null                         | [HEADER, "7;5;;;0:58.100;2026-09-26T10:15:30"]                                         || "durationMs '0:58.100'"
        "negative duration"           | null                         | [HEADER, "7;5;;;-5;2026-09-26T10:15:30"]                                               || "must not be negative"
        "German date from Excel"      | null                         | [HEADER, "7;5;;;58100;26.09.2026 10:15"]                                               || "measuredAt '26.09.2026 10:15'"
        "one bad row among good ones" | null                         | [HEADER, "7;5;;;58100;2026-09-26T10:15:30", "8;6;;;-1;2026-09-26T10:15:30"]            || "line 3"
    }
}
