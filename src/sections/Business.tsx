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
                pb={"300px"}
            >
                <Box
                    backgroundImage={
                        "linear-gradient(90deg, rgba(30, 30, 30, 1) 30%, rgba(20, 20, 20, 0.1) 100%)," +
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
                    top="280"
                    left="0"
                />
                <Box zIndex={2}>
                    <Text
                        textTransform={"uppercase"}
                        pt={"150px"}
                        mb={"100px"}
                        width={"100%"}
                        textAlign={"center"}
                        ml={"-9vw"}
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