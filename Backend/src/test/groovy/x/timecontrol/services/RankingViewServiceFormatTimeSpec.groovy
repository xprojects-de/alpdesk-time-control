package x.timecontrol.services

import spock.lang.Specification
import spock.lang.Unroll

/**
 * formatTime() renders a time in hundredths of a second (mm:ss.SS), rounding the thousandths digit
 * instead of truncating it.
 */
class RankingViewServiceFormatTimeSpec extends Specification {

    def "null renders as a dash"() {
        expect:
        RankingViewService.formatTime(null) == "-"
    }

    @Unroll
    def "#timeMs ms renders as #expected"() {
        expect:
        RankingViewService.formatTime(timeMs) == expected

        where:
        timeMs | expected
        0      | "0:00.00"
        1000   | "0:01.00"
        47650  | "0:47.65"
        2      | "0:00.00" // thousandths digit 2 rounds hundredths down
        5      | "0:00.01" // thousandths digit 5 rounds hundredths up ("half up")
        14     | "0:00.01" // thousandths digit 4 rounds down
        16     | "0:00.02" // thousandths digit 6 rounds up
        996    | "0:01.00" // rounding hundredths up carries into the next second
        59996  | "1:00.00" // carry across the minute boundary too
        61870  | "1:01.87"
    }
}
