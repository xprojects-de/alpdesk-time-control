package x.timecontrol.util;

import ch.qos.logback.classic.PatternLayout;
import ch.qos.logback.classic.spi.ILoggingEvent;
import ch.qos.logback.core.AppenderBase;

import javax.swing.SwingUtilities;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.function.Consumer;

/**
 * Logback appender (wired in logback.xml/logback-production.xml) that keeps the last
 * {@value #MAX_BUFFERED_LINES} formatted log lines in memory and pushes new lines to any
 * registered Swing listener, so DesktopStatusWindow's inline log view can show live backend
 * output without a terminal. Logback owns the actual appender instance (created from XML by
 * class name); callers only ever go through the static buffer/listener registry below.
 */
public class SwingLogAppender extends AppenderBase<ILoggingEvent> {

    private static final int MAX_BUFFERED_LINES = 5000;

    private static final Deque<String> BUFFER = new ArrayDeque<>(MAX_BUFFERED_LINES);
    private static final List<Consumer<String>> LISTENERS = new CopyOnWriteArrayList<>();

    private PatternLayout layout;

    @Override
    public void start() {
        layout = new PatternLayout();
        layout.setContext(getContext());
        layout.setPattern("%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n");
        layout.start();
        super.start();
    }

    @Override
    protected void append(ILoggingEvent event) {
        String line = layout.doLayout(event);

        synchronized (BUFFER) {
            BUFFER.addLast(line);
            while (BUFFER.size() > MAX_BUFFERED_LINES) {
                BUFFER.removeFirst();
            }
        }

        SwingUtilities.invokeLater(() -> LISTENERS.forEach(listener -> listener.accept(line)));
    }

    public static String bufferedContent() {
        synchronized (BUFFER) {
            return String.join("", BUFFER);
        }
    }

    public static void addListener(Consumer<String> listener) {
        LISTENERS.add(listener);
    }

    public static void removeListener(Consumer<String> listener) {
        LISTENERS.remove(listener);
    }
}
