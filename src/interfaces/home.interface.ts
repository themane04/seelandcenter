export interface ISocialMediaBanner {
    currentImageIndex: number;
    handleDotClick: (index: number) => void;
    imageData: IImage[];
}

export interface IImageDot {
    currentImageIndex: number;
    handleDotClick: (index: number) => void;
    imageData: IImage[] | string[];
}

export interface IImage {
    id: number;
    path: string;
}

export interface IButton {
    id: number;
    name: string;
    url: string;
}