import {Box, Heading, HStack, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import {gradientTitle} from "../style/ts/Common.style.ts";
import RentalSpaceImages from "../components/rental_space/RentalSpaceImages.tsx";

const RentalSpace = () => {
    const [is1200px] = useMediaQuery("(max-width: 1200px)");
    const [is650px] = useMediaQuery("(max-width: 650px)");
    return (
        <>
            <Box
                flex="1"
                color={"#FFFFFF"}
                textAlign={"left"}
                className={"navbar-section-distsance"}
            >
                <VStack>
                    <Heading sx={gradientTitle(is650px)}>Freiemietflächen</Heading>
                    <Text
                        fontSize="lg"
                        w={"70vw"}
                        textAlign={"center"}
                        mb={10}
                    >
                        In der oberen Verkaufsebene, neben Ankermietern wie JYSK und Qualipet, haben Sie die
                        Möglichkeit,
                        Ihre Waren auf einer Verkaufsfläche von 135 m&sup2; zu präsentieren. Die Anlieferung erfolgt
                        über den
                        Warenlift.
                    </Text>
                    {is1200px ? (
                        <VStack
                            gap={"20%"}
                            mt={4}
                            m={"30px auto"}
                        >
                            <RentalSpaceImages/>
                        </VStack>
                    ) : (
                        <HStack
                            spacing={"20%"}
                            mt={4}
                            m={"30px auto"}
                        >
                            <RentalSpaceImages/>
                        </HStack>
                    )}
                </VStack>
            </Box>
        </>
    );
}

export default RentalSpace;