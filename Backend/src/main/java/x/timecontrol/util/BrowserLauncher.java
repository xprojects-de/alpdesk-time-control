package x.timecontrol.util;

/**
 * Opens a URL in the platform's default browser via native OS commands rather than
 * java.awt.Desktop, so this keeps working in the GraalVM native-image build without pulling
 * AWT into the reachability analysis.
 */
public final class BrowserLauncher {

    private BrowserLauncher() {
    }

    public static void open(String url) throws Exception {
        String os = System.getProperty("os.name").toLowerCase();
        ProcessBuilder processBuilder;

        if (os.contains("mac") || os.contains("darwin")) {
            processBuilder = new ProcessBuilder("open", url);
        } else if (os.contains("win")) {
            processBuilder = new ProcessBuilder("cmd", "/c", "start", url);
        } else if (os.contains("nix") || os.contains("nux") || os.contains("aix")) {
            processBuilder = new ProcessBuilder("xdg-open", url);
        } else {
            throw new UnsupportedOperationException("Unsupported operating system: " + os);
        }

        processBuilder.start();
    }
}
