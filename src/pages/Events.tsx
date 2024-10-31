import {Box, Heading, HStack, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import {gradientTitle} from "../style/ts/Common.style.ts";
import {MdOutlineEventBusy} from "react-icons/md";

const Events = () => {
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
                    <Heading sx={gradientTitle(is650px)}>Events</Heading>
                    <HStack
                        spacing={"5px"}
                        mt={20}
                    >
                        <MdOutlineEventBusy fontSize={"4rem"}/>
                        <Text>
                            Zur Zeit sind keine Events geplant.
                        </Text>
                    </HStack>
                </VStack>
            </Box>
        </>
    );
}

export default Events;