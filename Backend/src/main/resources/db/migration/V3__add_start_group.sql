-- Global, reusable start-group templates (label/color/position/offset), independent of any
-- specific race. Assignment of participants to a template is per-race (participant.start_group_id
-- below), not stored here - a template can be applied to any number of races.
CREATE TABLE start_group_template
(
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    label          TEXT    NOT NULL,
    color          TEXT    NOT NULL,
    position       INTEGER NOT NULL DEFAULT 0,
    offset_seconds INTEGER
);

-- Which start group a participant is assigned to in this race, if any - see StartGroupTemplate
-- and ParticipantService#applyStartGroupAssignment. Purely a display/organisation aid: the
-- assignment's actual effect on start order is written into participant.start_sequence (already
-- consumed by AutoAssignService and the start-list PDF export), not this column.
ALTER TABLE participant
    ADD COLUMN start_group_id INTEGER REFERENCES start_group_template (id) ON DELETE SET NULL;

CREATE INDEX idx_participant_start_group_id ON participant (start_group_id);
