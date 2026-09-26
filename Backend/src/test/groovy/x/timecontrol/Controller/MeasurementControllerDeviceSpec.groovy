package x.timecontrol.Controller

import io.micronaut.http.HttpStatus
import spock.lang.Specification
import x.timecontrol.dto.ErrorResponse
import x.timecontrol.dto.MeasurementResponse
import x.timecontrol.entities.Measurement
import x.timecontrol.services.AutoAssignService
import x.timecontrol.services.DeviceCapability
import x.timecontrol.services.PollingTimingImporter
import x.timecontrol.services.StreamingTimingImporter
import x.timecontrol.services.TimingDataImporter
import x.timecontrol.services.TimingProviderRegistry

import java.time.LocalDateTime

/**
 * The device commands behind the buttons in "Messungen": continuous mode, "Sturz signalisieren",
 * device status, the connection indicator and the manual import - with the device mocked. What an
 * operator must be able to tell apart: no device configured, a device that cannot do this, and a
 * device that failed.
 */
class MeasurementControllerDeviceSpec extends Specification {

    PollingTimingImporter device = Mock() {
        capabilities() >> EnumSet.of(DeviceCapability.RESET, DeviceCapability.CONTINUOUS_MODE,
                DeviceCapability.DISCARD_OLDEST_START)
    }
    Optional<TimingDataImporter> activeImporter = Optional.of(device)
    TimingProviderRegistry timingProviderRegistry = Stub() {
        getActiveImporter() >> { activeImporter }
    }
    AutoAssignService autoAssignService = Mock()

    MeasurementController controller = new MeasurementController(
            timingProviderRegistry: timingProviderRegistry,
            autoAssignService: autoAssignService)

    private static String errorMessage(response) {
        (response.body() as ErrorResponse).message()
    }

    def "#endpoint answers 409 when no timing device is configured"() {
        given: "timing provider NONE"
        activeImporter = Optional.empty()

        when:
        def response = call(controller)

        then:
        response.status == HttpStatus.CONFLICT
        errorMessage(response) == TimingDataImporter.NOT_CONFIGURED_MESSAGE

        where:
        endpoint            | call
        "continuous-mode"   | { MeasurementController c -> c.setContinuousMode(true) }
        "discard"           | { MeasurementController c -> c.discardOldestStart() }
        "device-status"     | { MeasurementController c -> c.getDeviceStatus() }
        "device-connection" | { MeasurementController c -> c.checkDeviceConnection() }
        "import"            | { MeasurementController c -> c.importFromDevice() }
    }

    def "#endpoint answers a different 409 for a device that does not have this command"() {
        given: "a device with nothing but a reset command"
        TimingDataImporter resetOnly = Mock(PollingTimingImporter) {
            capabilities() >> EnumSet.of(DeviceCapability.RESET)
        }
        activeImporter = Optional.of(resetOnly)

        when:
        def response = call(controller)

        then: "not a device failure - the operator must not go looking for a broken cable"
        response.status == HttpStatus.CONFLICT
        errorMessage(response) == TimingDataImporter.NOT_SUPPORTED_MESSAGE
        0 * resetOnly.continuousMode(_)
        0 * resetOnly.discardOldestStart()

        where:
        endpoint          | call
        "continuous-mode" | { MeasurementController c -> c.setContinuousMode(true) }
        "discard"         | { MeasurementController c -> c.discardOldestStart() }
    }

    def "switching continuous mode #enable reaches the device"() {
        when:
        def response = controller.setContinuousMode(enable)

        then:
        1 * device.continuousMode(enable) >> true
        response.status == HttpStatus.OK
        response.body() == message

        where:
        enable | message
        true   | "Continuous mode enabled successfully"
        false  | "Continuous mode disabled successfully"
    }

    def "continuous mode the device does not confirm answers 500"() {
        given:
        device.continuousMode(true) >> false

        when:
        def response = controller.setContinuousMode(true)

        then:
        response.status == HttpStatus.INTERNAL_SERVER_ERROR
        errorMessage(response) == "Failed to set continuous mode on device"
    }

    def "discarding the oldest start also moves auto-assign past the racer who fell"() {
        when:
        def response = controller.discardOldestStart()

        then:
        1 * device.discardOldestStart() >> true

        then: "otherwise the next finish would be credited to the racer who fell"
        1 * autoAssignService.skip()

        and:
        response.status == HttpStatus.OK
    }

    def "discarding the oldest start works while auto-assign is not running"() {
        given:
        device.discardOldestStart() >> true
        autoAssignService.skip() >> { throw new IllegalStateException("Auto-assign is not active") }

        when:
        def response = controller.discardOldestStart()

        then:
        response.status == HttpStatus.OK
    }

    def "a discard the device refuses answers 400 and leaves auto-assign where it is"() {
        given: "an empty start queue, or the device is in continuous mode"
        device.discardOldestStart() >> false

        when:
        def response = controller.discardOldestStart()

        then:
        response.status == HttpStatus.BAD_REQUEST
        errorMessage(response) == "Failed to discard oldest start. Queue may be empty or device is in continuous mode."
        0 * autoAssignService.skip()
    }

    def "the device status is passed on, and a device that does not answer is a 500"() {
        given:
        device.getDeviceStatus() >> status

        when:
        def response = controller.getDeviceStatus()

        then:
        response.status == expectedStatus

        where:
        status       | expectedStatus
        "continuous" | HttpStatus.OK
        "normal"     | HttpStatus.OK
        null         | HttpStatus.INTERNAL_SERVER_ERROR
    }

    def "the connection indicator reads #expectedStatus when the device ping is #ping"() {
        given:
        device.isDeviceConnected() >> ping

        when:
        def response = controller.checkDeviceConnection()

        then:
        response.status == expectedStatus

        where:
        ping  | expectedStatus
        true  | HttpStatus.OK
        false | HttpStatus.SERVICE_UNAVAILABLE
    }

    def "a ping that throws is a 500, not a crash"() {
        given:
        device.isDeviceConnected() >> { throw new IllegalStateException("boom") }

        when:
        def response = controller.checkDeviceConnection()

        then:
        response.status == HttpStatus.INTERNAL_SERVER_ERROR
    }

    def "the manual import answers 201 with every row the device holds"() {
        given:
        def measuredAt = LocalDateTime.of(2026, 1, 2, 10, 0, 0)
        device.importDataFromDevice() >> [
                new Measurement(7L, 1L, 42L, 50000, measuredAt),
                new Measurement(8L, 2L, null, 51000, measuredAt),
        ]

        when:
        def response = controller.importFromDevice()

        then:
        response.status == HttpStatus.CREATED
        (response.body() as List<MeasurementResponse>)*.deviceMeasurementId() == [1L, 2L]
    }

    def "the manual import answers 409 for a device that pushes its data on its own"() {
        given: "a streaming device has already delivered everything - there is nothing to ask for"
        activeImporter = Optional.of(Mock(StreamingTimingImporter))

        when:
        def response = controller.importFromDevice()

        then:
        response.status == HttpStatus.CONFLICT
        errorMessage(response) == TimingDataImporter.NOT_SUPPORTED_MESSAGE
    }

    def "a manual import from an unreachable device is a 500, not a crash"() {
        given:
        device.importDataFromDevice() >> { throw new IllegalStateException("Could not connect to device") }

        when:
        def response = controller.importFromDevice()

        then:
        response.status == HttpStatus.INTERNAL_SERVER_ERROR
    }
}
