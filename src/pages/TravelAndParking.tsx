import BoxLayout from "../components/common/BoxLayout.tsx";
import {Heading, HStack, useMediaQuery, VStack} from "@chakra-ui/react";
import {gradientTitle} from "../style/ts/Common.style.ts";
import TravelInfoAndMap from "../components/travel_and_parking/TravelInfoAndMap.tsx";

const TravelAndParking = () => {
    const [is650px] = useMediaQuery("(max-width: 650px)");
    const [is900px] = useMediaQuery("(max-width: 900px)");

    return (
        <>
            <BoxLayout>
                <VStack>
                    <Heading sx={gradientTitle(is650px)}>Anreise & Parking</Heading>
                    {is900px ? (
                        <VStack
                            justifyContent="center"
                            alignItems="center"
                            gap="5%"
                            w="90%"
                            mt={"60px"}
                            mb={"60px"}
                        >
                            <TravelInfoAndMap/>
                        </VStack>
                    ) : (
                        <HStack
                            justifyContent="center"
                            alignItems="center"
                            gap="10%"
                            w="100%"
                            p={"60px"}
                        >
                            <TravelInfoAndMap/>
                        </HStack>
                    )}
                </VStack>
            </BoxLayout>
        </>
    );
}

export default TravelAndParking;