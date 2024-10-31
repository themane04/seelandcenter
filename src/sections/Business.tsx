import {Box, Text, VStack} from "@chakra-ui/react";
import BusinessCard from "../components/business/BusinessCard.tsx";

const Business = () => {
    return (
        <>
            <section id="business"/>
            <VStack
                color={"#FFFFFF"}
                fontSize={"2.25rem"}
                letterSpacing={"0.1em"}
                fontWeight={"bold"}
                lineHeight={"200%"}
                position="relative"
                className={"footer-section-distance"}
            >
                <Box
                    backgroundImage={
                        "linear-gradient(90deg, #141414 30%, rgba(20, 20, 20, 0.1) 100%)," +
                        "url(/mall/seeland_outside.jpg)"
                    }
                    backgroundSize="cover"
                    backgroundPosition="center center"
                    backgroundRepeat="no-repeat"
                    filter="blur(5px)"
                    opacity={0.9}
                    width="100vw"
                    height="100vh"
                    maxH={"600px"}
                    position="absolute"
                    zIndex={0}
                    top="15vw"
                    left="0"
                />
                <Box zIndex={2}>
                    <Text
                        textTransform={"uppercase"}
                        mb={"100px"}
                        width={"100%"}
                        textAlign={"center"}
                        ml={"-9vw"}
                        className={"section-section-distance"}
                    >
                        Geschäfte
                    </Text>
                    <BusinessCard/>
                </Box>
            </VStack>
        </>
    );
}

export default Business;