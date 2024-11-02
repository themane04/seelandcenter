import {Box, Button, Flex, Image, useMediaQuery} from "@chakra-ui/react";
import {IBusinessDetailImage} from "../../interfaces/business.interface.ts";

const BusinessDetailImage = ({
                                 business,
                                 currentImage,
                                 setCurrentImage
                             }: IBusinessDetailImage) => {
    const [is550px] = useMediaQuery("(max-width: 550px)");
    const [is880px] = useMediaQuery("(max-width: 880px)");
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
                height={"500px"}
                mt={is880px ? "10" : "0"}
            >
                <Box
                    position="relative"
                    width="100%"
                    height="100%"
                >
                    {business.images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`${business.name} - Image ${index + 1}`}
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                opacity: index === currentImage ? 1 : 0,
                                transition: 'opacity 1s ease-in-out'
                            }}
                        />
                    ))}
                </Box>
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
                    ))}
                </Flex>
            </Box>
        </>
    );
}

export default BusinessDetailImage;