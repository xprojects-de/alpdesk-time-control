package x.timecontrol.services

import org.apache.pdfbox.pdmodel.font.PDFont
import org.apache.pdfbox.pdmodel.font.PDType1Font
import org.apache.pdfbox.pdmodel.font.Standard14Fonts
import spock.lang.Specification

/**
 * wrapBlocks() is a private static helper used by PdfExportService's Gaudimodus PDF detail lines
 * (per-race breakdown, per-team-member listing). Invoked via reflection since it needs no PDFBox
 * document/service dependencies - only text metrics.
 */
class PdfExportServiceWrapBlocksSpec extends Specification {

    private static final PDFont FONT = new PDType1Font(Standard14Fonts.FontName.HELVETICA)

    private static List<String> wrapBlocks(List<String> blocks, float fontSize, float maxWidth) {
        def method = PdfExportService.class.getDeclaredMethod(
                "wrapBlocks", List, PDFont, float.class, float.class)
        method.setAccessible(true)
        return method.invoke(null, blocks, FONT, fontSize, maxWidth) as List<String>
    }

    def "blocks that fit together stay on one line, joined by a separator"() {
        expect:
        wrapBlocks(["A: 1", "B: 2"], 7f, 500f) == ["A: 1   |   B: 2"]
    }

    def "blocks that don't fit together wrap onto separate lines without splitting a block"() {
        given: "a narrow width that fits only one short block per line"
        def blocks = ["Rennen1: Wert 45.23, Platz 3, Pkt. 27", "Rennen2: Wert 40.11, Platz 1, Pkt. 30"]

        when:
        def lines = wrapBlocks(blocks, 7f, 120f)

        then: "each block is intact on its own line, none dropped or merged"
        lines.size() == 2
        lines[0] == blocks[0]
        lines[1] == blocks[1]
    }

    def "a single block too wide for even an empty line is wrapped word-by-word instead of overflowing"() {
        given: "one long block whose own width already exceeds maxWidth"
        def longBlock = "SC Musterhausen Nord / SC Anderesdorf Sued: 1:23.456"

        when:
        def lines = wrapBlocks([longBlock], 7f, 80f)

        then: "it's split into multiple lines rather than returned as one overlong line"
        lines.size() > 1
        // every produced line must actually fit within maxWidth - the bug this test guards against
        // is a line silently wider than the page
        lines.every { line ->
            def method = PdfExportService.class.getDeclaredMethod("stringWidth", PDFont, float.class, String.class)
            method.setAccessible(true)
            (method.invoke(null, FONT, 7f, line) as Float) <= 80f
        }
        // no words were lost in the process
        lines.join(" ").replaceAll(/\s+/, " ").trim() == longBlock.replaceAll(/\s+/, " ").trim()
    }

    def "an oversized block followed by a normal block does not crash and both are still rendered"() {
        given:
        def longBlock = "SC Musterhausen Nord / SC Anderesdorf Sued: 1:23.456"
        def shortBlock = "Kurz: 5"

        when:
        def lines = wrapBlocks([longBlock, shortBlock], 7f, 80f)

        then:
        noExceptionThrown()
        lines.join(" ").contains("Kurz: 5")
    }

    def "empty block list produces no lines"() {
        expect:
        wrapBlocks([], 7f, 200f) == []
    }
}
