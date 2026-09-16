package x.timecontrol.entities;

// Declared female-before-male: several call sites sort/iterate on the enum's natural
// (Comparable/ordinal) order to get the project-wide "weiblich vor männlich" display convention
// (e.g. ParticipantService#groupByAgeGroup's AgeGroup::gender tie-break) without a dedicated
// Comparator - see PdfExportService/RaceLiveService for the explicit List.of(FEMALE, MALE)
// equivalent used where iteration can't rely on natural ordering alone.
public enum Gender {
    FEMALE,
    MALE,
    BOTH
}

