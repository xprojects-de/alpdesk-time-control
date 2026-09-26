package x.timecontrol.services;

/**
 * Thrown when the device does not confirm a reset that runs as the last step of a transaction which
 * clears the measurement table. Unchecked so that {@code @Transactional} rolls the clearing back,
 * leaving device and table in step: both still hold the same measurements.
 */
public class DeviceResetFailedException extends RuntimeException {
    public DeviceResetFailedException(String message) {
        super(message);
    }
}
