package x.timecontrol.services;

/**
 * Optional device commands a {@link TimingDataImporter} may support beyond delivering
 * measurements. Every one of these exists because the Alpdesk Time-Control controller offers it;
 * other timing hardware offers a different subset (an ALGE TdC over a serial line has no reset
 * endpoint at all, an Alpenhunde box has no start queue to discard from), so a provider declares
 * what it has via {@link TimingDataImporter#capabilities()} instead of stubbing the methods with
 * {@code false}.
 * <p>
 * A stubbed {@code false} would be indistinguishable from "the device was asked and it failed":
 * {@code MeasurementController#resetAll} would refuse to clear the database and report a device
 * error for a device that simply has nothing to reset. Controllers therefore check the capability
 * first and treat a missing one as "not applicable", exactly as they already treat
 * {@link x.timecontrol.entities.TimingProviderType#NONE}.
 */
public enum DeviceCapability {
    /** Device holds measurements itself and can be told to clear them ({@code resetDevice()}). */
    RESET,
    /** Device can be switched between continuous and manual triggering ({@code continuousMode()}). */
    CONTINUOUS_MODE,
    /** Device keeps a start queue whose oldest entry can be dropped ({@code discardOldestStart()}). */
    DISCARD_OLDEST_START
}
