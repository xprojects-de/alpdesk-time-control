import {describe, expect, it} from "vitest";
import {Participant} from "../models/participant.model";
import {Race, ResultUnit, SortDirection} from "../models/race.model";
import {findImplausibleStartGroupOffsets} from "./start-group-offset.util";

const zeitrennen: Race = {
    id: 1,
    name: "Station - Schnelligkeit",
    date: "2026-09-19",
    seasonYear: 2026,
    resultUnit: ResultUnit.TIME,
    sortDirection: SortDirection.ASC,
    hasCoverPage: false,
};

const punkterennen: Race = {...zeitrennen, resultUnit: ResultUnit.POINTS, sortDirection: SortDirection.DESC};

let naechsteId = 1;
const teilnehmer = (
    durationMs: number | undefined,
    gruppe: {id: number; label: string; offsetSeconds: number | null} | null,
    zusatz: Partial<Participant> = {},
    race: Race = zeitrennen,
): Participant => ({
    id: naechsteId++,
    race,
    person: null,
    durationMs,
    startGroup: gruppe
        ? {id: gruppe.id, label: gruppe.label, color: "#000000", position: 0, offsetSeconds: gruppe.offsetSeconds}
        : null,
    ...zusatz,
});

const rot = {id: 2, label: "Rot", offsetSeconds: 120};
const gruen = {id: 1, label: "Grün", offsetSeconds: 0};

describe("findImplausibleStartGroupOffsets", () => {
    it("reports a group whose Zeitversatz is larger than a measured time", () => {
        const treffer = findImplausibleStartGroupOffsets([
            teilnehmer(26430, rot), // 0:26.43 gegen 2:00 Zeitversatz
            teilnehmer(28120, rot),
        ]);

        expect(treffer).toHaveLength(1);
        expect(treffer[0]).toMatchObject({label: "Rot", offsetSeconds: 120, affected: 2});
    });

    it("names the fastest time of the group, which is what makes the offset obviously wrong", () => {
        const treffer = findImplausibleStartGroupOffsets([teilnehmer(26430, rot), teilnehmer(28120, rot)]);

        expect(treffer[0].fastestMs).toBe(26430);
    });

    it("stays quiet while every time is longer than the offset", () => {
        const plausibel = {id: 3, label: "Blau", offsetSeconds: 5};

        expect(findImplausibleStartGroupOffsets([teilnehmer(26430, plausibel), teilnehmer(28120, plausibel)])).toEqual(
            [],
        );
    });

    it("treats an offset equal to the time as implausible - it nets to 0:00.00 just the same", () => {
        const treffer = findImplausibleStartGroupOffsets([teilnehmer(120000, rot)]);

        expect(treffer[0].affected).toBe(1);
    });

    it("ignores a points race, where the backend does not apply the offset at all", () => {
        expect(findImplausibleStartGroupOffsets([teilnehmer(30, rot, {}, punkterennen)])).toEqual([]);
    });

    it("ignores participants who are not ranked anyway", () => {
        expect(
            findImplausibleStartGroupOffsets([
                teilnehmer(undefined, rot),
                teilnehmer(26430, rot, {status: "DSQ"}),
                teilnehmer(26430, rot, {status: "DNS"}),
            ]),
        ).toEqual([]);
    });

    it("does not blame a group that has no offset", () => {
        expect(findImplausibleStartGroupOffsets([teilnehmer(0, gruen)])).toEqual([]);
    });

    it("lists the worst-hit group first", () => {
        const treffer = findImplausibleStartGroupOffsets([
            teilnehmer(26430, {id: 4, label: "Gelb", offsetSeconds: 60}),
            teilnehmer(26430, rot),
            teilnehmer(28120, rot),
        ]);

        expect(treffer.map(t => t.label)).toEqual(["Rot", "Gelb"]);
    });
});
