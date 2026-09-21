/**
 * Builds a multipart FormData for a file-upload request: always appends `file`, then appends each
 * of `fields` under its own key, skipping empty/undefined values (e.g. an optional delimiter the
 * user hasn't picked). Deliberately does NOT handle a `mapping` field - measurement/participant
 * import endpoints give an explicitly empty mapping ("map nothing") different meaning from an
 * omitted one ("use the auto-suggested mapping"), so callers that send a mapping append it
 * themselves after calling this.
 */
export function buildImportFormData(file: File, fields: Record<string, string | undefined> = {}): FormData {
    const formData = new FormData();
    formData.append("file", file);
    for (const [key, value] of Object.entries(fields)) {
        if (value) {
            formData.append(key, value);
        }
    }
    return formData;
}
