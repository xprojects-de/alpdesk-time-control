package x.timecontrol.services

import spock.lang.Specification

import java.nio.charset.Charset
import java.nio.charset.StandardCharsets

class TextFileDecoderSpec extends Specification {

    def "decodes UTF-8 as-is"() {
        expect:
        TextFileDecoder.decode("Müller;Jörg".getBytes(StandardCharsets.UTF_8)) == "Müller;Jörg"
    }

    def "strips a UTF-8 BOM (Excel's 'CSV UTF-8' export)"() {
        given:
        byte[] withBom = ([0xEF, 0xBB, 0xBF] + ("Nachname;Vorname".getBytes(StandardCharsets.UTF_8) as List)) as byte[]

        expect:
        TextFileDecoder.decode(withBom) == "Nachname;Vorname"
    }

    def "falls back to Windows-1252 for German Excel's default CSV export"() {
        expect:
        TextFileDecoder.decode("Müller;Weiß;Öztürk".getBytes(Charset.forName("windows-1252"))) == "Müller;Weiß;Öztürk"
    }
}
