package x.timecontrol.Controller

import io.micronaut.data.exceptions.DataAccessException
import io.micronaut.http.HttpStatus
import spock.lang.Specification
import x.timecontrol.dto.ErrorResponse
import x.timecontrol.repositories.MeasurementRepository
import x.timecontrol.services.DeviceCapability
import x.timecontrol.services.DeviceImportGate
import x.timecontrol.services.MeasurementService
import x.timecontrol.services.MeasurementTableLock
import x.timecontrol.services.PollingTimingImporter
import x.timecontrol.services.TimingProviderRegistry

/**
 * The order of "Alle Messungen löschen" with device reset, as the endpoint drives it: over a real
 * MeasurementService, with the repository and the device mocked.
 */
class MeasurementControllerResetSpec extends Specification {

    MeasurementRepository measurementRepository = Mock()
    PollingTimingImporter device = Mock() {
        capabilities() >> EnumSet.of(DeviceCapability.RESET)
    }
    TimingProviderRegistry timingProviderRegistry = Stub() {
        getActiveImporter() >> Optional.of(device)
    }

    MeasurementController controller = new MeasurementController(
            service: new MeasurementService(measurementRepository, new MeasurementTableLock()),
            timingProviderRegistry: timingProviderRegistry,
            importGate: new DeviceImportGate())

    def "deleting with device reset pulls from the device, clears the table, and resets the device last"() {
        when:
        def response = controller.resetAll(true)

        then:
        1 * device.importDataFromDevice() >> []

        then:
        1 * measurementRepository.deleteAll()

        then:
        1 * device.resetDevice() >> true

        and:
        response.status == HttpStatus.OK
        response.body() == "Device reset and all measurements deleted successfully"
    }

    def "a safety pull that cannot reach the device leaves the table and the device untouched"() {
        given: "the device holds times the last poll has not fetched yet"
        device.importDataFromDevice() >> { throw new IllegalStateException("Could not connect to device at http://192.168.4.1/data: Read Timeout") }

        when:
        def response = controller.resetAll(true)

        then: "wiping now would lose those times for good"
        0 * measurementRepository.deleteAll()
        0 * device.resetDevice()

        and:
        response.status == HttpStatus.INTERNAL_SERVER_ERROR
        (response.body() as ErrorResponse).message() ==
                "Error during reset operation: Could not connect to device at http://192.168.4.1/data: Read Timeout"
    }

    def "a delete that fails in the database leaves the device untouched"() {
        given:
        measurementRepository.deleteAll() >> { throw new DataAccessException("database is locked") }

        when:
        controller.resetAll(true)

        then:
        thrown(DataAccessException)
        0 * device.resetDevice()
    }

    def "a device that does not confirm the reset answers 500 and says the database was not modified"() {
        given:
        device.resetDevice() >> false

        when:
        def response = controller.resetAll(true)

        then:
        response.status == HttpStatus.INTERNAL_SERVER_ERROR
        (response.body() as ErrorResponse).message() == "Failed to reset device. Database was not modified."
    }

    def "deleting without device reset never talks to the device"() {
        when:
        def response = controller.resetAll(false)

        then:
        1 * measurementRepository.deleteAll()
        0 * device.importDataFromDevice()
        0 * device.resetDevice()
        response.body() == "All measurements deleted successfully"
    }
}
