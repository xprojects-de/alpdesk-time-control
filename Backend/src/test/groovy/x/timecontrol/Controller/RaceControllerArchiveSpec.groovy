package x.timecontrol.Controller

import io.micronaut.data.exceptions.DataAccessException
import io.micronaut.http.HttpStatus
import spock.lang.Specification
import x.timecontrol.dto.ErrorResponse
import x.timecontrol.repositories.MeasurementRepository
import x.timecontrol.repositories.RaceMeasurementRepository
import x.timecontrol.services.DeviceCapability
import x.timecontrol.services.DeviceImportGate
import x.timecontrol.services.MeasurementTableLock
import x.timecontrol.services.PollingTimingImporter
import x.timecontrol.services.RaceMeasurementService
import x.timecontrol.services.RaceService
import x.timecontrol.services.TimingProviderRegistry

/**
 * The order of a clearing archive with device reset, as the endpoint drives it: over a real
 * RaceMeasurementService, with the repositories and the device mocked.
 */
class RaceControllerArchiveSpec extends Specification {

    RaceMeasurementRepository raceMeasurementRepository = Mock()
    MeasurementRepository measurementRepository = Mock()
    PollingTimingImporter device = Mock() {
        capabilities() >> EnumSet.of(DeviceCapability.RESET)
    }
    TimingProviderRegistry timingProviderRegistry = Stub() {
        getActiveImporter() >> Optional.of(device)
    }

    RaceController controller = new RaceController(
            service: Stub(RaceService) { existsById(7L) >> true },
            raceMeasurementService: new RaceMeasurementService(raceMeasurementRepository, measurementRepository, new MeasurementTableLock()),
            timingProviderRegistry: timingProviderRegistry,
            importGate: new DeviceImportGate())

    def "archiving with device reset pulls from the device, copies and clears the table, and resets the device last"() {
        when:
        def response = controller.archiveMeasurements(7L, true, true)

        then:
        1 * device.importDataFromDevice() >> []

        then:
        1 * raceMeasurementRepository.copyFromMeasurements(7L)
        1 * measurementRepository.deleteAll()

        then:
        1 * device.resetDevice() >> true

        and:
        response.status == HttpStatus.OK
        response.body() == "Measurements archived and device reset successfully"
    }

    def "a safety pull that cannot reach the device archives nothing and leaves the device untouched"() {
        given: "the device holds times the last poll has not fetched yet"
        device.importDataFromDevice() >> { throw new IllegalStateException("Could not connect to device at http://192.168.4.1/data: Read Timeout") }

        when:
        def response = controller.archiveMeasurements(7L, true, true)

        then: "archiving now would miss those times, and the reset would wipe them"
        0 * raceMeasurementRepository.copyFromMeasurements(_)
        0 * measurementRepository.deleteAll()
        0 * device.resetDevice()

        and:
        response.status == HttpStatus.INTERNAL_SERVER_ERROR
        (response.body() as ErrorResponse).message() ==
                "Error during archive operation: Could not connect to device at http://192.168.4.1/data: Read Timeout"
    }

    def "an archive that fails in the database leaves the device untouched"() {
        given:
        raceMeasurementRepository.copyFromMeasurements(7L) >> { throw new DataAccessException("database is locked") }

        when:
        controller.archiveMeasurements(7L, true, true)

        then:
        thrown(DataAccessException)
        0 * device.resetDevice()
    }

    def "a device that does not confirm the reset answers 500 and says nothing was archived"() {
        given:
        device.resetDevice() >> false

        when:
        def response = controller.archiveMeasurements(7L, true, true)

        then:
        response.status == HttpStatus.INTERNAL_SERVER_ERROR
        (response.body() as ErrorResponse).message() == "Failed to reset device. Measurements were not archived."
    }

    def "archiving without device reset never talks to the device"() {
        when:
        def response = controller.archiveMeasurements(7L, false, true)

        then:
        1 * raceMeasurementRepository.copyFromMeasurements(7L)
        1 * measurementRepository.deleteAll()
        0 * device.importDataFromDevice()
        0 * device.resetDevice()
        response.body() == "Measurements archived successfully"
    }
}
