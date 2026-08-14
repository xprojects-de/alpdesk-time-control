export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    BOTH = 'BOTH'
}

export const GenderLabels: Record<Gender, string> = {
    [Gender.MALE]: 'Männlich',
    [Gender.FEMALE]: 'Weiblich',
    [Gender.BOTH]: 'Beide'
};

