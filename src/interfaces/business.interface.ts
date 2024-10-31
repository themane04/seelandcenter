export interface IShortBusiness {
    id: number;
    name: string;
    url: string;
    banner: string;
    images: string[];
}

export interface IBusinessCardContent {
    business: IShortBusiness;
}

export interface IArrowButton {
    onClick: () => void;
    isRight?: boolean;
    hideLeft?: boolean;
    hideRight?: boolean;
    left?: string;
    iconSize?: string;
    buttonMt?: string;
    motionMt?: string;
    backgroundColor?: string;
}
