package x.timecontrol.listener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import x.timecontrol.services.MeasurementTableLock;
import x.timecontrol.util.BrowserLauncher;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.SwingWorker;
import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Cursor;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.Image;
import java.awt.Insets;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.net.URL;
import java.util.concurrent.TimeUnit;

/**
 * Small always-visible control window for the packaged desktop app (jpackage build only, see
 * DesktopWindowStartupListener): the app runs without a console window there, so this is the
 * only way a user can tell it's running, reopen the browser tab, or shut it down cleanly.
 */
final class DesktopStatusWindow {

    private static final Logger LOG = LoggerFactory.getLogger(DesktopStatusWindow.class);

    private DesktopStatusWindow() {
    }

    static void show(String appName, String version, String url, String username, String password,
                      MeasurementTableLock measurementTableLock) {
        JFrame frame = new JFrame(appName);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setResizable(false);
        loadIcon().ifPresent(frame::setIconImage);

        JPanel content = new JPanel(new BorderLayout(16, 16));
        content.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        loadIcon().ifPresent(icon -> {
            Image scaled = icon.getScaledInstance(64, 64, Image.SCALE_SMOOTH);
            JLabel iconLabel = new JLabel(new ImageIcon(scaled));
            content.add(iconLabel, BorderLayout.WEST);
        });

        JPanel textPanel = new JPanel(new GridBagLayout());
        GridBagConstraints gbc = new GridBagConstraints();
        gbc.gridx = 0;
        gbc.anchor = GridBagConstraints.WEST;
        gbc.insets = new Insets(2, 0, 2, 0);

        JLabel nameLabel = new JLabel(appName);
        nameLabel.setFont(nameLabel.getFont().deriveFont(Font.BOLD, 16f));
        gbc.gridy = 0;
        textPanel.add(nameLabel, gbc);

        JLabel versionLabel = new JLabel("Version " + version);
        versionLabel.setFont(versionLabel.getFont().deriveFont(Font.PLAIN, 12f));
        gbc.gridy = 1;
        textPanel.add(versionLabel, gbc);

        JLabel linkLabel = new JLabel("<html><u>" + url + "</u></html>");
        linkLabel.setForeground(new Color(0x1a56db));
        linkLabel.setCursor(new Cursor(Cursor.HAND_CURSOR));
        linkLabel.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                try {
                    BrowserLauncher.open(url);
                } catch (Exception ex) {
                    LOG.warn("Could not open browser from status window: {}", ex.getMessage());
                }
            }
        });
        gbc.gridy = 2;
        gbc.insets = new Insets(10, 0, 2, 0);
        textPanel.add(linkLabel, gbc);

        JLabel loginLabel = new JLabel("Login: " + username + " / " + password);
        loginLabel.setFont(loginLabel.getFont().deriveFont(Font.PLAIN, 12f));
        gbc.gridy = 3;
        gbc.insets = new Insets(6, 0, 2, 0);
        textPanel.add(loginLabel, gbc);

        content.add(textPanel, BorderLayout.CENTER);

        JButton quitButton = new JButton("Beenden");
        quitButton.addActionListener(_ -> {
            LOG.info("Shutdown requested from status window");
            quitButton.setEnabled(false);
            shutdown(frame, quitButton, measurementTableLock);
        });
        JPanel buttonPanel = new JPanel();
        buttonPanel.add(quitButton);

        frame.add(content, BorderLayout.CENTER);
        frame.add(buttonPanel, BorderLayout.SOUTH);

        frame.setMinimumSize(new Dimension(360, 180));
        frame.pack();
        frame.setLocationRelativeTo(null);
        frame.setAlwaysOnTop(false);
        frame.setVisible(true);
    }

    /**
     * A bare System.exit(0) from the quit button could land while an archive/reset is mid-flight
     * (device already told to reset, measurements not yet copied into the DB - see
     * RaceController#archiveMeasurements) - a fast, non-blocking check covers the overwhelming
     * common case (nothing in progress) with no UI disruption; only when something actually is
     * running does this wait briefly in the background (off the EDT) before exiting regardless,
     * rather than making the app permanently unquittable if the device is stuck unreachable.
     */
    private static void shutdown(JFrame frame, JButton quitButton, MeasurementTableLock measurementTableLock) {
        boolean idle;
        try {
            idle = measurementTableLock.awaitIdle(0, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            idle = true;
        }
        if (idle) {
            frame.dispose();
            System.exit(0);
            return;
        }

        quitButton.setText("Warte auf laufenden Vorgang...");
        new SwingWorker<Boolean, Void>() {
            @Override
            protected Boolean doInBackground() throws InterruptedException {
                return measurementTableLock.awaitIdle(10, TimeUnit.SECONDS);
            }

            @Override
            protected void done() {
                boolean finishedInTime;
                try {
                    finishedInTime = get();
                } catch (Exception e) {
                    finishedInTime = false;
                }
                if (!finishedInTime) {
                    LOG.warn("Archive/reset still in progress after 10s wait - quitting anyway");
                    JOptionPane.showMessageDialog(frame,
                            "Ein Vorgang läuft ungewöhnlich lange. Die Anwendung wird trotzdem beendet.",
                            "Beenden", JOptionPane.WARNING_MESSAGE);
                }
                frame.dispose();
                System.exit(0);
            }
        }.execute();
    }

    private static java.util.Optional<Image> loadIcon() {
        URL resource = DesktopStatusWindow.class.getResource("/app-icon.png");
        if (resource == null) {
            return java.util.Optional.empty();
        }
        return java.util.Optional.of(new ImageIcon(resource).getImage());
    }
}
