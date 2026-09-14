package x.timecontrol.services;

import jakarta.inject.Singleton;

import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.ReentrantLock;
import java.util.function.Supplier;

/**
 * Serializes access to the measurement/race_measurement tables between the device-import path
 * (scheduled or manual) and archive/reset operations. Without this, a scheduled import landing
 * between an archive's copy-into-race_measurement and its subsequent measurement-table clear
 * could silently lose that measurement instead of ending up in either table.
 */
@Singleton
public class MeasurementTableLock {

    private final ReentrantLock lock = new ReentrantLock();

    public void run(Runnable action) {
        lock.lock();
        try {
            action.run();
        } finally {
            lock.unlock();
        }
    }

    public <T> T get(Supplier<T> action) {
        lock.lock();
        try {
            return action.get();
        } finally {
            lock.unlock();
        }
    }

    /**
     * Waits up to {@code timeout} for the lock to become free (e.g. an in-progress archive/reset
     * to finish), without holding it afterward. Used by the desktop status window's quit button
     * to avoid a hard {@code System.exit()} landing mid-archive - the device may already be reset
     * but its measurements not yet copied into the DB at that point, permanently losing them.
     */
    public boolean awaitIdle(long timeout, TimeUnit unit) throws InterruptedException {
        if (lock.tryLock(timeout, unit)) {
            lock.unlock();
            return true;
        }
        return false;
    }
}
