-- POINTS_COMBINATION only: each independently keeps a person with at least one valid combined-race
-- result in the ranking despite a leg of that specific status (0 points and the status marked in
-- the PDF sub-table for that leg) instead of dropping them into "nicht gewertet" - see
-- PointsCombinationModeCalculator#isEligibleForRanking. Default to 0 (existing behavior unchanged)
-- for every previously created Gaudi-Modus instance.
ALTER TABLE gaudi_mode
    ADD COLUMN keep_dns_in_ranking INTEGER NOT NULL DEFAULT 0;

ALTER TABLE gaudi_mode
    ADD COLUMN keep_dnf_in_ranking INTEGER NOT NULL DEFAULT 0;

ALTER TABLE gaudi_mode
    ADD COLUMN keep_dsq_in_ranking INTEGER NOT NULL DEFAULT 0;
