package x.timecontrol.Utils;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.concurrent.TimeUnit;
import java.util.function.Consumer;

import io.micronaut.context.annotation.Value;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import jakarta.inject.Singleton;

@Singleton
public class ProcessExecutor {

    @Value("${app.logCliCommands:false}")
    boolean printOutput = false;

    private static final Logger logger = LoggerFactory.getLogger(ProcessExecutor.class);
    private static final int DEFAULT_TIMEOUT = 60;

    public record ProcessResult(String output, int exitCode, boolean timedOut) {
    }

    public ProcessResult executeProcess(Process process, int timeout) throws Exception {

        try {

            String stdout = new String(process.getInputStream().readAllBytes());
            String stderr = new String(process.getErrorStream().readAllBytes());

            String combinedOutput = stdout;
            if (!stderr.isEmpty()) {
                combinedOutput = stdout + "\nSTDERR:\n" + stderr;
            }

            if (printOutput) {
                logger.info(stdout);
                if (!stderr.isEmpty()) {
                    logger.warn("STDERR: {}", stderr);
                }
            }

            boolean finished = process.waitFor(timeout, TimeUnit.SECONDS);

            if (!finished) {

                logger.warn("Process timed out after {} seconds.", timeout);

                if (process.isAlive()) {
                    process.destroyForcibly();
                }

                return new ProcessResult(combinedOutput, -1, true);
            }

            return new ProcessResult(combinedOutput, process.exitValue(), false);

        } catch (Exception ex) {
            throw new Exception("Error executing process: " + ex.getMessage(), ex);
        } finally {

            if (process != null && process.isAlive()) {
                process.destroyForcibly();
            }

        }

    }

    public ProcessResult executeProcessWithStreaming(Process process, int timeout, Consumer<String> outputCallback) throws Exception {

        StringBuilder fullOutput = new StringBuilder();

        try {

            Thread stdoutReader = new Thread(() -> {

                try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {

                    String line;
                    while ((line = reader.readLine()) != null) {

                        String outputLine = line + "\n";
                        fullOutput.append(outputLine);

                        if (outputCallback != null) {
                            outputCallback.accept(outputLine);
                        }

                        if (printOutput) {
                            logger.info(line);
                        }

                    }

                } catch (Exception e) {
                    logger.error("Error reading stdout: {}", e.getMessage());
                }

            });


            Thread stderrReader = new Thread(() -> {

                try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getErrorStream()))) {

                    String line;
                    while ((line = reader.readLine()) != null) {

                        String errorLine = "STDERR: " + line + "\n";
                        fullOutput.append(errorLine);

                        if (outputCallback != null) {
                            outputCallback.accept(errorLine);
                        }

                        if (printOutput) {
                            logger.warn(line);
                        }

                    }
                } catch (Exception e) {
                    logger.error("Error reading stderr: {}", e.getMessage());
                }
            });

            stdoutReader.start();
            stderrReader.start();

            boolean finished = process.waitFor(timeout, TimeUnit.SECONDS);

            stdoutReader.join(1000);
            stderrReader.join(1000);

            if (!finished) {

                logger.warn("Process stream timed out after {} seconds.", timeout);

                if (process.isAlive()) {
                    process.destroyForcibly();
                }

                return new ProcessResult(fullOutput.toString(), -1, true);
            }

            return new ProcessResult(fullOutput.toString(), process.exitValue(), false);

        } catch (Exception ex) {
            throw new Exception("Error executing process: " + ex.getMessage(), ex);
        } finally {

            if (process != null && process.isAlive()) {
                process.destroyForcibly();
            }

        }

    }

    @SuppressWarnings("unused")
    public ProcessResult executeProcess(Process process) throws Exception {
        return executeProcess(process, DEFAULT_TIMEOUT);
    }

    public ProcessResult executeBash(String bashCmd, int timeout) throws Exception {

        Process process = new ProcessBuilder("/bin/bash", "-c", bashCmd).start();
        return executeProcess(process, timeout);

    }

    @SuppressWarnings("unused")
    public ProcessResult executeBashWithStreaming(String bashCmd, int timeout, Consumer<String> outputCallback) throws Exception {

        Process process = new ProcessBuilder("/bin/bash", "-c", bashCmd).start();
        return executeProcessWithStreaming(process, timeout, outputCallback);

    }

    @SuppressWarnings("unused")
    public ProcessResult executeBash(String bashCmd) throws Exception {
        return executeBash(bashCmd, DEFAULT_TIMEOUT);
    }

    public ProcessResult executeCommand(int timeout, String... command) throws Exception {

        Process process = new ProcessBuilder(command).start();
        return executeProcess(process, timeout);

    }

    @SuppressWarnings("unused")
    public ProcessResult executeCommandWithStreaming(int timeout, Consumer<String> outputCallback, String... command) throws Exception {

        Process process = new ProcessBuilder(command).start();
        return executeProcessWithStreaming(process, timeout, outputCallback);

    }

    public ProcessResult executeCommandWithStreaming(int timeout, Consumer<String> outputCallback, Consumer<Process> processCallback, String... command) throws Exception {

        Process process = new ProcessBuilder(command).start();

        if (processCallback != null) {
            processCallback.accept(process);
        }

        return executeProcessWithStreaming(process, timeout, outputCallback);

    }

    @SuppressWarnings("unused")
    public ProcessResult executeCommand(String... command) throws Exception {
        return executeCommand(DEFAULT_TIMEOUT, command);
    }

}
