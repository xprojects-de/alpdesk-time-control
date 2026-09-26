package x.timecontrol.services

import spock.lang.Specification
import spock.lang.Unroll
import x.timecontrol.entities.PointsScale
import x.timecontrol.repositories.GaudiModeRepository
import x.timecontrol.repositories.PointsScaleRepository

/**
 * The Punkteschema lookup behind every Punkte-Mischwertung: place in, points out.
 */
class PointsScaleServiceSpec extends Specification {

    def service = new PointsScaleService(Mock(PointsScaleRepository), Mock(GaudiModeRepository))

    def scale = new PointsScale(1L, "Test-Schema", "100, 80,60")

    @Unroll
    def "place #place scores #points"() {
        expect:
        service.pointsForPlace(scale, place) == points

        where: "places past the end of the table score nothing"
        place || points
        1     || 100
        2     || 80
        3     || 60
        4     || 0
        50    || 0
        0     || 0
    }

    def "two riders tied on place 2 both score place 2's points, and the next rider scores place 4's"() {
        given: "places as RankingService#computePlaces assigns them for a tie: 1, 2, 2, 4"
        def points = service.parsePoints(new PointsScale(1L, "FIS", "100,80,60,50,45"))

        expect:
        [1, 2, 2, 4].collect { service.pointsForPlace(points, it) } == [100, 80, 80, 50]
    }

    @Unroll
    def "a stored scale '#csv' fails with a clear message instead of a NumberFormatException"() {
        when:
        service.parsePoints(new PointsScale(1L, "Kaputt", csv))

        then:
        def e = thrown(IllegalStateException)
        e.message.contains(message)

        where:
        csv        || message
        ""         || "has no points configured"
        null       || "has no points configured"
        "100,x,60" || "non-numeric value: \"x\""
    }
}
