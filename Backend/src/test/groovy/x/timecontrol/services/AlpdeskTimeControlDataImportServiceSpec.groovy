package x.timecontrol.services

import io.micronaut.http.client.BlockingHttpClient
import io.micronaut.http.client.HttpClient
import spock.lang.Specification
import x.timecontrol.entities.Measurement

import java.time.LocalDateTime

/**
 * Covers what the device poll writes, not what it fetches. The device reports its whole list every
 * 5 seconds, so nearly every line of a tick describes a row that is already stored unchanged -
 * rewriting those is a commit per row per tick on a WAL database, for the whole field, for the
 * length of the race.
 */
class AlpdeskTimeControlDataImportServiceSpec extends Specification {

    MeasurementService measurementService = Mock()
    BlockingHttpClient blockingHttpClient = Mock()
    HttpClient httpClient = Mock()

    DeviceImportGate importGate = new DeviceImportGate()

    AlpdeskTimeControlDataImportService service = new AlpdeskTimeControlDataImportService()

    static final LocalDateTime MEASURED_AT = LocalDateTime.of(2026, 1, 2, 10, 0, 0)

    def setup() {
        // The real sink, with a mocked MeasurementService behind it: what this spec is about is
        // which writes a device response causes, and those are decided in the sink now - wiring a
        // mocked sink here would assert against a stub instead of against that behaviour.
        service.timingEventSink = new TimingEventSink(measurementService, new MeasurementTableLock(), importGate)
        service.importGate = importGate
        service.httpClient = httpClient
        httpClient.toBlocking() >> blockingHttpClient
    }

    private void deviceReports(String body) {
        blockingHttpClient.retrieve(_) >> body
    }

    def "an archive that starts while the poll is in flight discards its answer"() {
        given: "the device answers only after the operator has archived and the table was cleared"
        measurementService.findAll() >> []
        blockingHttpClient.retrieve(_) >> {
            importGate.pauseDuring({ -> null })
            "1,50000\n"
        }

        when:
        def imported = service.importDataFromDevice()

        then: "this list describes the race that was just archived - writing it would bring it back"
        0 * measurementService.upsertByDeviceMeasurementId(_, _, _, _)
        imported.empty
    }

    def "a line matching the stored row is reported back but not written again"() {
        given:
        deviceReports("1,50000\n")
        measurementService.findAll() >> [new Measurement(7L, 1L, 42L, 50000, MEASURED_AT)]

        when:
        def imported = service.importDataFromDevice()

        then:
        0 * measurementService.upsertByDeviceMeasurementId(_, _, _, _)
        imported.size() == 1
        // The manual "import from device" endpoint returns this list to the UI, which has to keep
        // listing everything the device holds - not only what happened to need a write.
        imported[0].id() == 7L
        imported[0].participantId() == 42L
    }

    def "a changed duration is written, keeping the row's participant and timestamp"() {
        given:
        deviceReports("1,51500\n")
        measurementService.findAll() >> [new Measurement(7L, 1L, 42L, 50000, MEASURED_AT)]

        when:
        def imported = service.importDataFromDevice()

        then:
        1 * measurementService.upsertByDeviceMeasurementId(1L, 42L, 51500, MEASURED_AT) >>
                new Measurement(7L, 1L, 42L, 51500, MEASURED_AT)
        imported.size() == 1
        imported[0].durationMs() == 51500
    }

    def "an unknown device id is written as a new, unassigned measurement"() {
        given:
        deviceReports("9,33000\n")
        measurementService.findAll() >> []

        when:
        def imported = service.importDataFromDevice()

        then:
        1 * measurementService.upsertByDeviceMeasurementId(9L, null, 33000, _) >>
                new Measurement(3L, 9L, null, 33000, MEASURED_AT)
        imported.size() == 1
    }

    def "a mixed response writes only the lines that actually differ"() {
        given:
        deviceReports("1,50000\n2,51000\n3,52000\n")
        measurementService.findAll() >> [
                new Measurement(7L, 1L, 42L, 50000, MEASURED_AT),
                new Measurement(8L, 2L, 43L, 49000, MEASURED_AT),
                new Measurement(9L, 3L, 44L, 52000, MEASURED_AT),
        ]

        when:
        def imported = service.importDataFromDevice()

        then:
        1 * measurementService.upsertByDeviceMeasurementId(2L, 43L, 51000, MEASURED_AT) >>
                new Measurement(8L, 2L, 43L, 51000, MEASURED_AT)
        0 * measurementService.upsertByDeviceMeasurementId(1L, _, _, _)
        0 * measurementService.upsertByDeviceMeasurementId(3L, _, _, _)
        imported.size() == 3
    }
}
