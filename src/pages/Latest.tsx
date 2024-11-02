import {Heading, HStack, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import {gradientTitle} from "../style/ts/Common.style.ts";
import {MdOutlineRemoveShoppingCart} from "react-icons/md";
import PageLayout from "../components/common/PageLayout.tsx";

const Latest = () => {
    const [is650px] = useMediaQuery("(max-width: 650px)");
    return (
        <>
            <PageLayout>
                <VStack p={is650px ? "6vw" : ""}>
                    <Heading sx={gradientTitle(is650px)}>Aktuelle Aktionen</Heading>
                    <HStack
                        spacing={"5px"}
                        mt={20}
                    >
                        <MdOutlineRemoveShoppingCart fontSize={"4rem"}/>
                        <Text textAlign={"center"}>
                            Zur Zeit gibt es keine aktuellen Aktionen.
                        </Text>
                    </HStack>
                </VStack>
            </PageLayout>
        </>
    );
}

export default Latest;