export enum Gender {
    FEMALE = "FEMALE",
    MALE = "MALE",
    BOTH = "BOTH",
}

export const GenderLabels: Record<Gender, string> = {
    [Gender.FEMALE]: "Weiblich",
    [Gender.MALE]: "Männlich",
    [Gender.BOTH]: "Beide",
};
