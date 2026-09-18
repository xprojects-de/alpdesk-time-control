package x.timecontrol.services;

import java.nio.ByteBuffer;
import java.nio.charset.CharacterCodingException;
import java.nio.charset.Charset;
import java.nio.charset.CodingErrorAction;
import java.nio.charset.StandardCharsets;

/**
 * Decodes an uploaded text file (CSV import) without assuming it's UTF-8: German Excel's default
 * "CSV (Trennzeichen-getrennt)" export is Windows-1252, and decoding that as UTF-8 turns every
 * umlaut into U+FFFD ("M�ller"), which then no longer matches the existing Person and creates
 * a duplicate. Excel's "CSV UTF-8" export in turn prepends a BOM that would otherwise end up glued
 * to the first header name.
 */
public final class TextFileDecoder {

    private static final Charset WINDOWS_1252 = Charset.forName("windows-1252");

    private TextFileDecoder() {
    }

    /**
     * UTF-8 (BOM stripped) if the bytes are valid UTF-8, otherwise Windows-1252. Valid UTF-8 is
     * checked strictly: real Windows-1252 text containing umlauts is practically never also a valid
     * UTF-8 byte sequence, so this doesn't misdetect in practice.
     */
    public static String decode(byte[] bytes) {
        int offset = hasUtf8Bom(bytes) ? 3 : 0;
        ByteBuffer buffer = ByteBuffer.wrap(bytes, offset, bytes.length - offset);
        try {
            return StandardCharsets.UTF_8.newDecoder()
                    .onMalformedInput(CodingErrorAction.REPORT)
                    .onUnmappableCharacter(CodingErrorAction.REPORT)
                    .decode(buffer)
                    .toString();
        } catch (CharacterCodingException e) {
            return new String(bytes, offset, bytes.length - offset, WINDOWS_1252);
        }
    }

    private static boolean hasUtf8Bom(byte[] bytes) {
        return bytes.length >= 3 && (bytes[0] & 0xFF) == 0xEF && (bytes[1] & 0xFF) == 0xBB && (bytes[2] & 0xFF) == 0xBF;
    }
}
