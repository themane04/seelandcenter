export interface ICetnerInfoContent {
    url: string;
    images: { url: string; }[];
    setCurrentImage: (index: number) => void;
    currentImage: number;
}
