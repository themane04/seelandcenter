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
                padding="0 20px 300px 0"
                position="relative"
            >
                <Box
                    backgroundImage={
                        "linear-gradient(90deg, rgba(30, 30, 30, 1) 30%, rgba(20, 20, 20, 0.1) 100%)," +
                        "url(/mall/seeland_outside.jpg)"
                    }
                    backgroundSize="cover"
                    filter="blur(5px)"
                    opacity={0.9}
                    width="100vw"
                    height="520px"
                    position="absolute"
                    zIndex={0}
                    top="45%"
                    left="0"
                    transform="translateY(-50%)"
                />
                <Text textTransform={"uppercase"} mt={"100px"}>Geschäfte</Text>
                <BusinessCard/>
            </VStack>
        </>
    );
}

export default Business;