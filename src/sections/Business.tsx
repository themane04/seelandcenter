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
                textAlign={"left"}
                padding={"0 500px 200px 0"}
                marginTop={"200px"}
                position="relative"
            >
                <Box
                    backgroundImage={
                        "linear-gradient(90deg, rgba(30, 30, 30, 1) 40%, rgba(20, 20, 20, 0.1) 100%)," +
                        "url(/mall/seeland_outside.jpg)"
                    }
                    backgroundSize="cover"
                    filter="blur(27.8px)"
                    opacity={0.53}
                    width="100vw"
                    height="520px"
                    position="absolute"
                    zIndex={0}
                    top="45%"
                    left="0"
                    transform="translateY(-50%)"
                />
                <Box zIndex={1} position="relative">
                    <Text textTransform={"uppercase"}>Geschäfte</Text>
                    <BusinessCard/>
                </Box>
            </VStack>
        </>
    );
}

export default Business;