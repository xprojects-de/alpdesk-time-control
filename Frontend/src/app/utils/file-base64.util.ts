/**
 * Reads a File as base64 (no "data:...;base64," prefix) - used to embed a small upload (e.g. a
 * cover page PDF) directly into a JSON request body instead of a separate multipart endpoint.
 *
 * Deliberately uses arrayBuffer() + btoa() rather than FileReader: FileReader's onload/onerror
 * callbacks can fire outside Angular's zone, so a caller's state update after `await` on a
 * FileReader-backed promise silently never triggers change detection (the property changes, but
 * the view doesn't). arrayBuffer() returns a native Promise, which zone.js reliably patches.
 */
export async function readFileAsBase64(file: File): Promise<string> {
    const buffer = await file.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    let binary = "";
    const chunkSize = 0x8000;
    for (let i = 0; i < bytes.length; i += chunkSize) {
        binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
    }
    return btoa(binary);
}
