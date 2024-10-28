import {Box, Button, Flex, HStack, Image, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import {ISocialMediaBanner} from "../../interfaces/home.interface.ts";
import buttonData from "../../assets/actionButtonsHome.json";
import {GoMegaphone} from "react-icons/go";
import SocialMediaLinks from "./SocialMediaLinks.tsx";
import {useEffect, useRef} from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import ImageDot from "./ImageDot.tsx";

const SocialMediaBanner = ({
                               currentImageIndex,
                               handleDotClick,
                               imageData
                           }: ISocialMediaBanner) => {
    const [is880px] = useMediaQuery("(max-width: 880px)");
    const [is352px] = useMediaQuery("(max-width: 352px)");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2 - 112;
        }
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 224;
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 224;
        }
    };

    return (
        <>
            <Box
                width="100%"
                height="fit-content"
                position="absolute"
                zIndex="1000"
                top={"50%"}
                transform={"translateY(-70%)"}
            >
                <Flex
                    align="center"
                    justify={is880px ? "center" : "space-between"}
                    padding="40px"
                >
                    <VStack
                        spacing="100px"
                        align="start"
                        display={is880px ? "none" : "flex"}
                    >
                        <SocialMediaLinks/>
                    </VStack>
                    <Box
                        lineHeight={1}
                        fontWeight="semibold"
                        letterSpacing="4%"
                        textTransform="uppercase"
                        bgGradient="linear(0deg, rgba(4, 42, 158, 0.6) 4%, #FFFFFF 30%)"
                        bgClip="text"
                        fontSize={is352px ? "3rem" : is880px ? "5rem" : "9.391rem"}
                    >
                        <Text>Seeland</Text>
                        <Text textAlign={is880px ? "center" : "right"}>
                            Center
                        </Text>
                    </Box>
                    <VStack spacing="15px" align="center" display={is880px ? "none" : "flex"}>
                        <ImageDot
                            currentImageIndex={currentImageIndex}
                            handleDotClick={handleDotClick}
                            imageData={imageData}
                        />
                    </VStack>
                </Flex>
                <HStack zIndex="5" position="absolute" top="110%" left="50%" transform="translateX(-50%)">
                    {is880px && (
                        <Button onClick={scrollLeft} position="absolute" left="-5vw" zIndex="10" variant="ghost"
                                _hover={{bg: "none"}}>
                            <AiOutlineArrowLeft size="30px" color="#32BCF1"/>
                        </Button>
                    )}
                    <Box
                        ref={scrollRef}
                        display="flex"
                        overflowX="auto"
                        whiteSpace="nowrap"
                        maxWidth={is880px ? "300px" : "100%"}
                        css={{scrollSnapType: "x mandatory", scrollBehavior: "smooth"}}
                        padding="30px"
                        gap={is880px ? "" : "30px"}
                        overflow="hidden"
                    >
                        {buttonData.map((button) => (
                            <Box
                                key={button.id}
                                width="224px"
                                minWidth="224px"
                                height="77px"
                                backgroundColor="rgba(50, 188, 241, 0.19)"
                                borderRadius="6px"
                                backdropFilter="blur(3px)"
                                boxShadow="0px 0px 18.6px 4px rgba(0, 0, 0, 0.25)"
                                color="#FFFFFF"
                                padding="10px"
                                className="scale-on-hover"
                                css={{scrollSnapAlign: "center"}}
                                ml={is880px ? "40px" : ""}
                                mr={is880px ? "40px" : ""}
                            >
                                <HStack spacing="10px" align="center" justify="center" letterSpacing="0.24em">
                                    <GoMegaphone size="30px" color="#32BCF1"/>
                                    <Text textTransform="uppercase" fontSize="1.125rem">
                                        {button.name}
                                    </Text>
                                </HStack>
                                <HStack
                                    fontWeight="light"
                                    letterSpacing="0.1em"
                                    fontSize="0.875rem"
                                    align="center"
                                    justify="right"
                                    spacing="25px"
                                    mt="5px"
                                >
                                    <Text>Anschauen</Text>
                                    <Image src="/home/arrow_right.svg" width="44.87px" height="14px"/>
                                </HStack>
                            </Box>
                        ))}
                    </Box>
                    {is880px && (
                        <>
                            <Button
                                onClick={scrollRight}
                                position="absolute"
                                right="-5vw"
                                zIndex="10"
                                variant="ghost"
                                _hover={{bg: "none"}}
                            >
                                <AiOutlineArrowRight size="30px" color="#32BCF1"/>
                            </Button>
                        </>
                    )}
                </HStack>
            </Box>
        </>
    );
}

export default SocialMediaBanner;