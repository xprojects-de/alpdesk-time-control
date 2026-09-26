package x.timecontrol.Controller

import io.micronaut.core.io.buffer.ReadBufferFactory
import io.micronaut.http.HttpStatus
import io.micronaut.http.MediaType
import io.micronaut.http.multipart.CompletedFileUpload
import io.micronaut.http.multipart.FormFieldMetadata
import io.micronaut.json.JsonMapper
import spock.lang.Specification
import x.timecontrol.dto.ErrorResponse
import x.timecontrol.dto.MeasurementImportPreviewResponse
import x.timecontrol.dto.RaceMeasurementDeleteResponse
import x.timecontrol.dto.RaceMeasurementImportResponse
import x.timecontrol.services.RaceMeasurementCsvService
import x.timecontrol.services.RaceMeasurementService
import x.timecontrol.services.RaceService

import java.nio.charset.StandardCharsets

/**
 * How the race's bulk endpoints answer - delete all, CSV export and CSV restore - with the services
 * mocked; what they do is RaceMeasurementCsvServiceSpec's and RaceMeasurementServiceSpec's subject.
 */
class RaceMeasurementControllerCsvSpec extends Specification {

    RaceMeasurementService raceMeasurementService = Mock()
    RaceMeasurementCsvService csvService = Mock()
    RaceService raceService = Stub() {
        existsById(7L) >> true
        existsById(99L) >> false
    }

    RaceMeasurementController controller = new RaceMeasurementController(
            service: raceMeasurementService, csvService: csvService, raceService: raceService,
            jsonMapper: JsonMapper.createDefault())

    private static CompletedFileUpload upload(String content) {
        CompletedFileUpload.ofMemory(new FormFieldMetadata("file", "renn-messungen_7.csv", MediaType.TEXT_CSV_TYPE),
                ReadBufferFactory.getJdkFactory().copyOf(content, StandardCharsets.UTF_8))
    }

    def "deleting all archived measurements answers with the number deleted"() {
        when:
        def response = controller.deleteAllOfRace(7L)

        then:
        1 * raceMeasurementService.deleteByRaceId(7L) >> 12
        response.status == HttpStatus.OK
        (response.body() as RaceMeasurementDeleteResponse).deletedCount() == 12
    }

    def "the export is a CSV download named after the race"() {
        given:
        csvService.exportCsv(7L) >> "deviceMeasurementId;raceNumber\n"

        when:
        def response = controller.exportCsv(7L)

        then:
        response.status == HttpStatus.OK
        response.header("Content-Disposition") == 'attachment; filename="renn-messungen_7.csv"'
        new String(response.body() as byte[], StandardCharsets.UTF_8) == "deviceMeasurementId;raceNumber\n"
    }

    def "the preview is passed through with the chosen delimiter"() {
        given:
        def preview = new MeasurementImportPreviewResponse(["Bib", "ms"], [raceNumber: "Bib"], [])

        when:
        def response = controller.importPreview(7L, upload("..."), Optional.of(","))

        then:
        1 * csvService.previewImport(_, (Character) ',') >> preview
        response.body() == preview
    }

    def "a successful import passes the mapping on and answers with counts and warnings"() {
        when:
        def response = controller.importMapped(7L, upload("..."), Optional.empty(), Optional.of('{"raceNumber":"Bib","durationMs":"ms"}'))

        then:
        1 * csvService.importMapped(7L, _, null, [raceNumber: "Bib", durationMs: "ms"]) >> new RaceMeasurementCsvService.ImportResult(3, 1, [])
        response.status == HttpStatus.OK
        with(response.body() as RaceMeasurementImportResponse) {
            importedCount() == 3
            withoutParticipantCount() == 1
        }
    }

    def "an omitted mapping lets the service suggest one"() {
        when:
        controller.importMapped(7L, upload("..."), Optional.empty(), Optional.empty())

        then:
        1 * csvService.importMapped(7L, _, null, null) >> new RaceMeasurementCsvService.ImportResult(1, 0, [])
    }

    def "a rejected file answers 400 with the reason"() {
        given:
        csvService.importMapped(7L, _, _, _) >> { throw new IllegalArgumentException("Nothing was imported, 1 invalid row(s): line 3: durationMs must not be negative") }

        when:
        def response = controller.importMapped(7L, upload("..."), Optional.empty(), Optional.empty())

        then:
        response.status == HttpStatus.BAD_REQUEST
        (response.body() as ErrorResponse).message().contains("line 3")
    }

    def "a mapping that is not a JSON object answers 400 and imports nothing: #mappingJson"() {
        when:
        def response = controller.importMapped(7L, upload("..."), Optional.empty(), Optional.of(mappingJson))

        then:
        response.status == HttpStatus.BAD_REQUEST
        (response.body() as ErrorResponse).message().startsWith("Invalid mapping JSON")
        0 * csvService.importMapped(*_)

        where:
        mappingJson << ["raceNumber=Bib", "null"]
    }

    def "an unknown race answers 404 and touches nothing: #endpoint"() {
        when:
        def response = call(controller, upload("..."))

        then:
        response.status == HttpStatus.NOT_FOUND
        0 * raceMeasurementService.deleteByRaceId(_)
        0 * csvService._

        where:
        endpoint  | call
        "delete"  | { RaceMeasurementController c, CompletedFileUpload file -> c.deleteAllOfRace(99L) }
        "export"  | { RaceMeasurementController c, CompletedFileUpload file -> c.exportCsv(99L) }
        "preview" | { RaceMeasurementController c, CompletedFileUpload file -> c.importPreview(99L, file, Optional.empty()) }
        "import"  | { RaceMeasurementController c, CompletedFileUpload file -> c.importMapped(99L, file, Optional.empty(), Optional.empty()) }
    }
}
