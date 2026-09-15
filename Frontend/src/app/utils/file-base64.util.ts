/**
 * Reads a File as base64 (no "data:...;base64," prefix) - used to embed a small upload (e.g. a
 * cover page PDF) directly into a JSON request body instead of a separate multipart endpoint.
 */
export function readFileAsBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result as string;
            resolve(result.substring(result.indexOf(',') + 1));
        };
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
    });
}
