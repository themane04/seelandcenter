import {Box, Button, Flex, Image, useMediaQuery} from "@chakra-ui/react";
import {IBusinessDetailImage} from "../../interfaces/business.interface.ts";

const BusinessDetailImage = ({
                                 business,
                                 currentImage,
                                 setCurrentImage
                             }: IBusinessDetailImage) => {
    const [is550px] = useMediaQuery("(max-width: 550px)");
    return (
        <>
            <Box
                flex="1"
                position="relative"
                boxShadow="rgba(255, 255, 255, 0.5) 0px 0px 30px 0.5px"
                borderRadius="20px"
                overflow="hidden"
                maxW="900px"
                minW={is550px ? "100%" : "500px"}
            >
                <Image
                    src={business.images[currentImage]}
                    alt={`${business.name} - Image ${currentImage + 1}`}
                    objectFit="cover"
                    width="100%"
                />
                <Flex
                    position="absolute"
                    bottom="0"
                    width="100%"
                    justify="center"
                    gap={2}
                    p={2}
                    display={business.images.length > 1 ? "flex" : "none"}
                >
                    {business.images.map((_, index) => (
                        <>
                            <Button
                                key={index}
                                onClick={() => setCurrentImage(index)}
                                variant={"ghost"}
                                _hover={{bg: "none", transform: "scale(1.1)"}}
                                width={"fit-content"}
                                height={"fit-content"}
                                padding="10px"
                                zIndex="4"
                            >
                                <Image
                                    src={index === currentImage
                                        ? "/home/dot_clicked.svg"
                                        : "/home/dot_unclicked.svg"
                                    }
                                    width="10px"
                                    height="10px"
                                />
                            </Button>
                        </>
                    ))}
                </Flex>
            </Box>
        </>
    );
}

export default BusinessDetailImage;