import {Button, Image} from "@chakra-ui/react";
import {IImageDot} from "../../interfaces/home.interface.ts";

const ImageDot = ({
                      currentImageIndex,
                      handleDotClick,
                      imageData
                  }: IImageDot) => {
    return (
        <>
            {imageData.map((_, index) => (
                <Button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    variant={"ghost"}
                    _hover={{bg: "none", transform: "scale(1.2)"}}
                    width={"fit-content"}
                    height={"fit-content"}
                    padding="10px"
                    zIndex="4"
                >
                    <Image
                        src={index === currentImageIndex
                            ? "/home/dot_clicked.svg"
                            : "/home/dot_unclicked.svg"
                        }
                        width="10px"
                        height="10px"
                    />
                </Button>
            ))}
        </>
    );
}

export default ImageDot;