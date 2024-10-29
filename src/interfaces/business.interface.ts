export interface IBusiness {
    id: number;
    name: string;
    image_path: string;
}

export interface IBusinessCardContent {
    business: IBusiness;
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
