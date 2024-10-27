import {Box, Button, Flex, Image, Link, Text, VStack} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import imageData from "../../public/assets/images.json";
import {imageBoxStyle} from "../style/ts/Home.style.ts";

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(4);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const nextImageIndex = (currentImageIndex + 1) % imageData.length;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageData.length);
                setIsTransitioning(false);
            }, 1000);
        }, 12000);
        return () => clearInterval(intervalId);
    }, [imageData.length]);

    const handleDotClick = (index: number) => {
        setCurrentImageIndex(index);
    }

    return (
        <Box
            width="100vw"
            height="100vh"
            overflow="hidden"
            position="relative"
        >
            <Box sx={imageBoxStyle(imageData[currentImageIndex].path, !isTransitioning, true)}/>
            <Box sx={imageBoxStyle(imageData[nextImageIndex].path, isTransitioning, false)}/>
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
                            _hover={{
                                transform: "scale(1.2)",
                                transition: "transform 0.3s",
                            }}
                        >
                            <Image
                                src="/home/instagram.svg"
                                width="32px"
                                height="32px"
                                zIndex="3"
                            />
                        </Link>
                        <Link
                            href="https://www.facebook.com/seelandcenterlyss"
                            target="_blank"
                            rel="noopener noreferrer"
                            _hover={{
                                transform: "scale(1.2)",
                                transition: "transform 0.3s",
                            }}
                        >
                            <Image
                                src="/home/facebook.svg"
                                width="32px"
                                height="32px"
                                zIndex="3"
                            />
                        </Link>
                    </VStack>
                    <Box
                        lineHeight={1}
                        fontWeight="semibold"
                        letterSpacing="4%"
                        textTransform="uppercase"
                        bgGradient="linear(0deg, #042A9E 0%, #FFFFFF 30%)"
                        bgClip="text"
                    >
                        <Text fontSize="9.391rem">
                            Seeland
                        </Text>
                        <Text textAlign="right" fontSize="9.391rem">
                            Center
                        </Text>
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
            </Box>
        </Box>
    );
};

export default Home;
