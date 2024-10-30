export interface PrivacyPolicySection {
    title?: string;
    content?: string | ILinkText[];
    additional_information?: (string | ILinkText[])[];
    additional_information_2?: (string | ILinkText[])[];
    list?: (string | ILinkText[])[];

    [subSection: string]:
        | string
        | PrivacyPolicySection
        | ILinkText[]
        | string[]
        | (string | ILinkText[])[]
        | undefined;
}

export interface SectionProps {
    data: any;
    level?: number;
    sectionNumber?: string;
}

export interface ILinkText {
    text: string;
    link?: string;
}
