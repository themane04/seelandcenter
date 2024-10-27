import {Box, Button, Flex, HStack, Image, Link, Text, VStack} from "@chakra-ui/react";
import {socialMediaIconStyle, socialMediaLinkStyle} from "../../style/ts/Home.style.ts";
import {ISocialMediaBanner} from "../../interfaces/home.interface.ts";
import buttonData from "../../../public/assets/actionButtonsHome.json";
import {GoMegaphone} from "react-icons/go";

const SocialMediaBanner = ({
                               currentImageIndex,
                               handleDotClick,
                               imageData
                           }: ISocialMediaBanner) => {
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
                <Flex align="center" justify="space-between" padding="40px">
                    <VStack spacing="100px" align="start">
                        <Link
                            href="https://www.instagram.com/seelandcenterlyss/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={socialMediaLinkStyle}
                        >
                            <Image src="/home/instagram.svg" sx={socialMediaIconStyle}/>
                        </Link>
                        <Link
                            href="https://www.facebook.com/seelandcenterlyss"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={socialMediaLinkStyle}
                        >
                            <Image src="/home/facebook.svg" sx={socialMediaIconStyle}/>
                        </Link>
                    </VStack>
                    <Box
                        lineHeight={1}
                        fontWeight="semibold"
                        letterSpacing="4%"
                        textTransform="uppercase"
                        bgGradient="linear(0deg, rgba(4, 42, 158, 0.6) 4%, #FFFFFF 30%)"
                        bgClip="text"
                        fontSize="9.391rem"
                    >
                        <Text>Seeland</Text>
                        <Text textAlign="right">Center</Text>
                    </Box>
                    <VStack spacing="15px" align="center">
                        {imageData.map((_, index) => (
                            <Button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                variant={"ghost"}
                                _hover={{bg: "none", transform: "scale(1.2)"}}
                                width={"fit-content"}
                                height={"fit-content"}
                                padding="10px"
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
                    </VStack>
                </Flex>
                <HStack
                    zIndex="5"
                    position="absolute"
                    top="120%"
                    left="50%"
                    transform="translateX(-50%)"
                    gap="20px"
                >
                    {buttonData.map((button) => (
                        <Box
                            key={button.id}
                            width="224px"
                            height="77px"
                            backgroundColor="rgba(50, 188, 241, 0.19)"
                            borderRadius="6px"
                            backdropFilter="blur(3px)"
                            boxShadow="0px 0px 18.6px 4px rgba(0, 0, 0, 0.25)"
                            color="#FFFFFF"
                            padding="10px"
                            className={"scale-on-hover"}
                        >
                            <HStack
                                spacing="10px"
                                align="center"
                                justify="center"
                                letterSpacing="0.24em"
                            >
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
                </HStack>
            </Box>
        </>
    );
}

export default SocialMediaBanner;