import {Box, Flex, HStack, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import {ISocialMediaBanner} from "../../interfaces/home.interface.ts";
import buttonData from "../../assets/home/action_buttons.json";
import SocialMediaLinks from "./SocialMediaLinks.tsx";
import {useEffect, useRef} from "react";
import ImageDot from "./ImageDot.tsx";
import ActionButton from "./ActionButton.tsx";
import ArrowButton from "../common/ArrowButton.tsx";

const SocialMediaBanner = ({
                               currentImageIndex,
                               handleDotClick,
                               imageData
                           }: ISocialMediaBanner) => {
    const [is880px] = useMediaQuery("(max-width: 880px)");
    const [is352px] = useMediaQuery("(max-width: 352px)");
    const [is378px] = useMediaQuery("(max-width: 378px)");
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
                position="absolute"
                zIndex="1000"
                top={"20vh"}
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
                    <VStack
                        spacing="15px"
                        align="center"
                        display={is880px ? "none" : "flex"}
                    >
                        <ImageDot
                            currentImageIndex={currentImageIndex}
                            handleDotClick={handleDotClick}
                            imageData={imageData}
                        />
                    </VStack>
                </Flex>
                <HStack
                    zIndex="5"
                    position="absolute"
                    top="110%"
                    left="50%"
                    transform="translateX(-50%)"
                >
                    {is880px && (
                        <ArrowButton
                            onClick={scrollLeft}
                            left="-5vw"
                            iconSize="60px"
                            backgroundColor={"transparent"}
                            motionMt={"30%"}
                        />
                    )}
                    <Box
                        ref={scrollRef}
                        display="flex"
                        overflowX="auto"
                        whiteSpace="nowrap"
                        maxWidth={is880px ? "300px" : "100%"}
                        scrollSnapType={"x mandatory"}
                        scrollBehavior={"smooth"}
                        padding="30px"
                        gap={is880px ? "" : "30px"}
                        overflow="hidden"
                    >
                        {buttonData.map((button) => (
                            <ActionButton
                                key={button.id}
                                id={button.id}
                                name={button.name}
                            />
                        ))}
                    </Box>
                    {is880px && (
                        <ArrowButton
                            onClick={scrollRight}
                            isRight={true}
                            iconSize="60px"
                            backgroundColor={"transparent"}
                            motionMt={"30%"}
                            left={is378px ? "85%" : "90%"}
                        />
                    )}
                </HStack>
                {is880px && (
                    <HStack
                        spacing="15px"
                        align="center"
                        justify="center"
                        position="absolute"
                        bottom="10%"
                        left="50%"
                        top={"550px"}
                        transform="translateX(-50%)"
                    >
                        <ImageDot
                            currentImageIndex={currentImageIndex}
                            handleDotClick={handleDotClick}
                            imageData={imageData}
                        />
                    </HStack>
                )}
            </Box>
        </>
    );
}

export default SocialMediaBanner;