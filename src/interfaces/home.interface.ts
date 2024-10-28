export interface ISocialMediaBanner {
    currentImageIndex: number;
    handleDotClick: (index: number) => void;
    imageData: { id: number, path: string }[];
}

export interface IImageDot {
    currentImageIndex: number;
    handleDotClick: (index: number) => void;
    imageData: { id: number, path: string }[];
}