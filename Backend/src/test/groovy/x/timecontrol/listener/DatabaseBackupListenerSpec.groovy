package x.timecontrol.listener

import spock.lang.Specification
import spock.lang.Unroll

/**
 * The backup has to find the very file the app is about to migrate. Picking the wrong one, or
 * trying to back up a datasource that has no file at all, would either copy nothing or abort a
 * startup that was fine - both only ever noticed on the one run that mattered.
 */
class DatabaseBackupListenerSpec extends Specification {

    @Unroll
    def "resolves #url to #expected"() {
        expect:
        new DatabaseBackupListener(url, true).databaseFile()?.toString() == expected

        where:
        url                                                                  || expected
        "jdbc:sqlite:database/time-control.db?journal_mode=WAL"              || "database/time-control.db"
        "jdbc:sqlite:database/time-control.db"                               || "database/time-control.db"
        "jdbc:sqlite:/Users/x/alpdesk-time-control/time-control.db?foo=1"    || "/Users/x/alpdesk-time-control/time-control.db"
        "jdbc:sqlite::memory:"                                               || null
        "jdbc:sqlite:"                                                       || null
        "jdbc:postgresql://localhost/timecontrol"                            || null
    }

    def "keeps a query string that is part of no parameter out of the path"() {
        expect: "only the first ? separates path from parameters"
        new DatabaseBackupListener("jdbc:sqlite:db/t.db?a=1?b=2", true).databaseFile().toString() == "db/t.db"
    }
}
