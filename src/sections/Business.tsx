import {Text, VStack} from "@chakra-ui/react";
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
                width={"100%"}
                textAlign={"left"}
                padding={"0 500px 200px 0"}
                marginTop={"10%"}
            >
                <Text textTransform={"uppercase"}>Geschäfte</Text>
                <BusinessCard/>
            </VStack>
        </>
    );
}

export default Business;