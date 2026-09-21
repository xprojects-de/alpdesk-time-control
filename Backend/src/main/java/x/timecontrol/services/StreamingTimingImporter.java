package x.timecontrol.services;

/**
 * A {@link TimingDataImporter} that delivers by itself, rather than waiting to be asked. What it
 * holds open for as long as it is the selected provider is up to it, and all three usual shapes fit
 * here unchanged, because this backend only cares that measurements arrive on their own:
 * <ul>
 *   <li>a WebSocket (or any other socket) it keeps connected,</li>
 *   <li>a serial line with a reader thread blocking on the next line,</li>
 *   <li>a vendor library/driver whose callback or event it subscribes to in {@link #start} and
 *       unsubscribes in {@link #stop}.</li>
 * </ul>
 * Each measurement goes to the {@link TimingEventSink} it was started with, from whatever thread
 * its connection or callback uses.
 * <p>
 * A device that can <i>also</i> be asked for everything it has - the usual way to catch up after a
 * connection drop - implements {@link PollingTimingImporter} in addition. It is then reachable
 * through the manual import endpoint and the safety pull before a reset, while the 5s background
 * poll leaves it alone (see {@link TimingProviderRegistry#getActiveScheduledPollImporter()}).
 * <p>
 * Lifecycle is owned by {@link TimingProviderLifecycle}, not by the caller of an endpoint:
 * {@link TimingDataImporter#configure} then {@link #start} when this provider becomes the selected
 * one (or at application startup if it already is), {@link #stop} when another one is selected,
 * when its config changed (followed by a fresh configure()+start()), or at shutdown.
 * <p>
 * Reconnect handling belongs in the implementation, not here: a dropped connection is normal
 * during a race (device power-cycled, WLAN drop at the finish), and only the provider knows what
 * its protocol needs - keepalive pings, a backoff, and re-reading whatever the device buffered
 * while it was gone. {@link #start} is therefore expected to return once the connection attempt is
 * under way, not to block until it succeeded, and {@link TimingDataImporter#isDeviceConnected()}
 * reports the current state to the operator.
 */
public interface StreamingTimingImporter extends TimingDataImporter {

    /**
     * Opens the connection and starts delivering into {@code sink}. Must be idempotent enough to
     * survive being called on an already-started provider (the lifecycle guards against it, but a
     * provider should not corrupt its own state if it happens).
     */
    void start(TimingEventSink sink);

    /**
     * Closes the connection and stops delivering. Must not throw if the provider was never started
     * or is already stopped - it runs in the shutdown path and in the error path of a provider
     * switch, where an exception would leave the next provider unstarted.
     */
    void stop();
}
