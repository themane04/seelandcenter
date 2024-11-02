import {Heading, HStack, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import {gradientTitle} from "../style/ts/Common.style.ts";
import {MdOutlineEventBusy} from "react-icons/md";
import PageLayout from "../components/common/PageLayout.tsx";

const Events = () => {
    const [is650px] = useMediaQuery("(max-width: 650px)");
    return (
        <>
            <PageLayout>
                <VStack>
                    <Heading sx={gradientTitle(is650px)}>Events</Heading>
                    <HStack
                        spacing={"5px"}
                        mt={20}
                    >
                        <MdOutlineEventBusy fontSize={"4rem"}/>
                        <Text textAlign={"center"}>
                            Zur Zeit sind keine Events geplant.
                        </Text>
                    </HStack>
                </VStack>
            </PageLayout>
        </>
    );
}

export default Events;