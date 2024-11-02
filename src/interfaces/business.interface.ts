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

export interface IBusinessDetailImage {
    business: {
        name: string;
        images: string[];
    };
    currentImage: number;
    setCurrentImage: (index: number) => void;
}

export interface IBusinessDetailContent {
    name: string;
    under_title?: string;
    quote?: string;
    content?: string;
    message?: string;
    phone?: string;
    website?: string;
    website_text?: string;
}

export interface IBusinessCard {
    isBusinessPage?: boolean;
}