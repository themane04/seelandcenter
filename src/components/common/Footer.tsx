import {Box, HStack, useMediaQuery, VStack} from "@chakra-ui/react";
import SeelandLocation from "../footer/SeelandLocation.tsx";
import SeelandSocialsAndNavigation from "../footer/SeelandSocialsAndNavigation.tsx";
import CenterManagement from "../footer/CenterManagement.tsx";

const Footer = () => {
    const [is1842px] = useMediaQuery("(max-width: 1842px)");
    return (
        <>
            <Box
                bg={"#1E1E1E"}
                bgColor={"#000000"}
                width={"100%"}
                height={is1842px ? "fit-content" : "300px"}
                mt={"100px"}
                textTransform={"uppercase"}
            >
                {is1842px ? (
                    <VStack
                        width={"100%"}
                        height={"100%"}
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        spacing={"50px"}
                        px={"50px"}
                    >
                        <SeelandSocialsAndNavigation/>
                        <SeelandLocation/>
                        <CenterManagement pb={"50px"}/>
                    </VStack>
                ) : (
                    <HStack
                        width={"100%"}
                        height={"100%"}
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        spacing={"50px"}
                        px={"50px"}
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