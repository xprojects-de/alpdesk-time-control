package x.timecontrol.services

import spock.lang.Specification

import java.awt.Color

/**
 * parseHexColor() is a private static helper backing the start list's per-row start-group color
 * marker (see PdfExportService#generateStartList). Invoked via reflection since it needs no PDFBox
 * document/service dependencies - see PdfExportServiceFormatSignedDiffSpec for the same pattern.
 */
class PdfExportServiceParseHexColorSpec extends Specification {

    private static Color parseHexColor(String hex) {
        def method = PdfExportService.class.getDeclaredMethod("parseHexColor", String)
        method.setAccessible(true)
        return method.invoke(null, hex) as Color
    }

    def "a well-formed hex color parses to the matching AWT color"() {
        expect:
        parseHexColor("#92D050") == new Color(0x92, 0xD0, 0x50)
    }

    def "a malformed value falls back to null instead of throwing"() {
        expect:
        parseHexColor("not-a-color") == null
    }
}
