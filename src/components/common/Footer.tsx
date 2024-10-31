import {Box, HStack, useMediaQuery, VStack} from "@chakra-ui/react";
import SeelandLocation from "../footer/SeelandLocation.tsx";
import SeelandSocialsAndNavigation from "../footer/SeelandSocialsAndNavigation.tsx";
import CenterManagement from "../footer/CenterManagement.tsx";

const Footer = () => {
    const [is731px] = useMediaQuery("(max-width: 731px)");
    return (
        <>
            <Box
                bg={"#1E1E1E"}
                bgColor={"#000000"}
                width={"100%"}
                height={"fit-content"}
                pt={"40px"}
                pb={"40px"}
                mt={"100px"}
                textTransform={"uppercase"}
                position={"relative"}
            >
                {is731px ? (
                    <VStack
                        width={"100%"}
                        height={"100%"}
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        spacing={"40px"}
                        px={"50px"}
                    >
                        <SeelandSocialsAndNavigation/>
                        <SeelandLocation/>
                        <CenterManagement/>
                    </VStack>
                ) : (
                    <HStack
                        width={"100%"}
                        height={"100%"}
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <SeelandLocation/>
                        <SeelandSocialsAndNavigation/>
                        <CenterManagement/>
                    </HStack>
                )}
            </Box>
        </>
    );
}

export default Footer;