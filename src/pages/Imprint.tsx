import {Box, HStack, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import imprintData from "../assets/footer/imprint.json";
import ImprintContent from "../components/footer/ImprintContent.tsx";
import {gradientTitle} from "../style/ts/Common.style.ts";

const Imprint = () => {
    const [is650px] = useMediaQuery("(max-width: 650px)");
    return (
        <>
            <VStack
                w={"80%"}
                h={"fit-content"}
                m={"0 auto"}
                position={"relative"}
                spacing={10}
                className={"footer-section-distance navbar-section-distsance"}
            >
                <Text sx={gradientTitle(is650px)}>
                    Impressum
                </Text>
                <Box
                    p={"50px"}
                    bg="rgba(30, 30, 30, 1)"
                    color="gray.600"
                    borderRadius="md"
                >
                    {is650px ? (
                        <VStack
                            spacing={20}
                            justifyContent={"space-between"}
                            w={"100%"}
                            mb={10}
                        >
                            <ImprintContent/>
                        </VStack>
                    ) : (
                        <HStack
                            spacing={20}
                            justifyContent={"space-between"}
                            w={"100%"}
                            mb={10}
                        >
                            <ImprintContent/>
                        </HStack>
                    )}
                    {imprintData.map((data, index) => (
                        <Box
                            key={index}
                            mb={10}
                            textAlign={is650px ? "center" : "left"}
                        >
                            <Text fontWeight={"bold"} fontSize={"1.5rem"} color={"rgba(50, 188, 241, 0.8)"}>
                                {data.title}
                            </Text>
                            <Text mt={2} color={"#FFFFFF"} fontSize={"1.2rem"}>
                                {data.text}
                            </Text>
                        </Box>
                    ))}
                </Box>
            </VStack>
        </>
    );
}

export default Imprint;