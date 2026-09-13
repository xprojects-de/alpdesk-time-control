package x.timecontrol.services

import spock.lang.Specification

import java.nio.charset.StandardCharsets

class ParticipantImportParsersSpec extends Specification {

    def "parses a semicolon CSV (RaceEngine/DSV style) and suggests the right mapping"() {
        given:
        def csv = "StNr;DSV-Code;Nachname;Vorname;JG;Geschlecht;Verein;Klasse;Punkte\n" +
                "101;28491;Müller;Maximilian;2012;M;SC Oberstdorf;U14m;45,20\n" +
                "102;29104;Schmidt;Anna;2013;W;SC Fischen;U14w;52,10\n"

        when:
        def parsed = ParticipantImportParsers.parseCsv(csv, null)

        then: "delimiter is auto-detected as semicolon and both data rows are read"
        parsed.fields() == ["StNr", "DSV-Code", "Nachname", "Vorname", "JG", "Geschlecht", "Verein", "Klasse", "Punkte"]
        parsed.rows().size() == 2
        parsed.rows()[0]["Nachname"] == "Müller"
        parsed.rows()[0]["JG"] == "2012"
        parsed.rows()[1]["Verein"] == "SC Fischen"

        when:
        def mapping = ParticipantImportParsers.suggestMapping(parsed.fields())

        then: "DSV-Code is recognised as our externalId despite the hyphen, JG as birthDate, Klasse as ageGroup (not category), Punkte stays unmapped"
        mapping["lastName"] == "Nachname"
        mapping["firstName"] == "Vorname"
        mapping["birthDate"] == "JG"
        mapping["gender"] == "Geschlecht"
        mapping["team"] == "Verein"
        mapping["ageGroup"] == "Klasse"
        !mapping.containsKey("category")
        mapping["externalId"] == "DSV-Code"
        mapping["raceNumber"] == "StNr"
        !mapping.containsValue("Punkte")
    }

    def "parses a pipe-delimited custom CSV and leaves ChipID unmapped"() {
        given:
        def csv = "StNr|Nachname|Vorname|Jahrgang|Verein|Klasse|ChipID\n" +
                "101|Müller|Maximilian|2012|SC Oberstdorf|U14m|TP-08492\n"

        when:
        def parsed = ParticipantImportParsers.parseCsv(csv, null)

        then:
        parsed.fields() == ["StNr", "Nachname", "Vorname", "Jahrgang", "Verein", "Klasse", "ChipID"]
        parsed.rows().size() == 1
        parsed.rows()[0]["ChipID"] == "TP-08492"

        when:
        def mapping = ParticipantImportParsers.suggestMapping(parsed.fields())

        then:
        mapping["birthDate"] == "Jahrgang"
        !mapping.values().contains("ChipID")
    }

    def "parses a DSV-Wettkampfdatei XML export regardless of the surrounding wrapper structure"() {
        given:
        def xml = '''<?xml version="1.0" encoding="utf-8"?>
<Wettkampf>
  <Veranstaltung>
    <Name>Regionalcup Riesenslalom</Name>
    <Datum>15.03.2026</Datum>
    <Disziplin>RS</Disziplin>
    <Verband>ASV</Verband>
  </Veranstaltung>
  <Startliste>
    <Teilnehmer>
      <StNr>101</StNr>
      <DSVCode>28491</DSVCode>
      <Nachname>Müller</Nachname>
      <Vorname>Maximilian</Vorname>
      <Jahrgang>2012</Jahrgang>
      <Geschlecht>M</Geschlecht>
      <Vereinsname>SC Oberstdorf</Vereinsname>
      <VereinsID>1001</VereinsID>
      <Klasse>U14m</Klasse>
      <Punkte>45.20</Punkte>
    </Teilnehmer>
    <Teilnehmer>
      <StNr>102</StNr>
      <DSVCode>29104</DSVCode>
      <Nachname>Schmidt</Nachname>
      <Vorname>Anna</Vorname>
      <Jahrgang>2013</Jahrgang>
      <Geschlecht>W</Geschlecht>
      <Vereinsname>SC Fischen</Vereinsname>
      <VereinsID>1002</VereinsID>
      <Klasse>U14w</Klasse>
      <Punkte>52.10</Punkte>
    </Teilnehmer>
  </Startliste>
</Wettkampf>'''

        when:
        def parsed = ParticipantImportParsers.parseDsvXml(new ByteArrayInputStream(xml.getBytes(StandardCharsets.UTF_8)))

        then:
        parsed.fields() == ["StNr", "DSVCode", "Nachname", "Vorname", "Jahrgang", "Geschlecht", "Vereinsname", "VereinsID", "Klasse", "Punkte"]
        parsed.rows().size() == 2
        parsed.rows()[0]["Nachname"] == "Müller"
        parsed.rows()[0]["DSVCode"] == "28491"
        parsed.rows()[1]["Vereinsname"] == "SC Fischen"

        when:
        def mapping = ParticipantImportParsers.suggestMapping(parsed.fields())

        then: "DSVCode -> externalId, Vereinsname -> team, Jahrgang -> birthDate, Klasse -> ageGroup (not category)"
        mapping["externalId"] == "DSVCode"
        mapping["team"] == "Vereinsname"
        mapping["birthDate"] == "Jahrgang"
        mapping["lastName"] == "Nachname"
        mapping["firstName"] == "Vorname"
        mapping["ageGroup"] == "Klasse"
        !mapping.containsKey("category")
        mapping["raceNumber"] == "StNr"
    }

    def "rejects a DOCTYPE declaration (XXE hardening)"() {
        given:
        def xml = '''<?xml version="1.0"?>
<!DOCTYPE Wettkampf [<!ENTITY xxe SYSTEM "file:///etc/passwd">]>
<Wettkampf><Startliste><Teilnehmer><Nachname>&xxe;</Nachname></Teilnehmer></Startliste></Wettkampf>'''

        when:
        ParticipantImportParsers.parseDsvXml(new ByteArrayInputStream(xml.getBytes(StandardCharsets.UTF_8)))

        then:
        thrown(IOException)
    }
}
