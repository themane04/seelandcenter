import {VStack, Box, HStack} from "@chakra-ui/react";
import NavbarLinks from "./NavbarLinks.tsx";
import {IBurgerMenu} from "../../interfaces/navbar.interface.ts";
import SocialMediaLinks from "../home/SocialMediaLinks.tsx";

const BurgerMenu = ({isOpen, onClose}: IBurgerMenu) => {
    return (
        <Box
            visibility={isOpen ? "visible" : "hidden"}
            opacity={isOpen ? 1 : 0}
            transform={isOpen ? "translateY(0)" : "translateY(-100px)"}
            transition="opacity 0.4s ease, transform 1s ease, visibility 0.4s"
            position="fixed"
            top="0"
            left="0"
            width="100vw"
            height="100vh"
            boxShadow="0px 6px 10.5px rgba(0, 0, 0, 0.4)"
            backgroundColor="rgba(158, 158, 158, 0.2)"
            backdropFilter="blur(10px)"
            zIndex="10000"
            alignItems="center"
            justifyContent="center"
            display="flex"
        >
            <VStack spacing={6} fontSize={["1.5rem", "2rem", "2.5rem", "3rem"]} fontWeight="semibold">
                <NavbarLinks onClick={onClose}/>
                <HStack
                    spacing={6}
                    fontSize={["1.5rem", "2rem", "2.5rem", "3rem"]}
                    fontWeight="semibold"
                    color="#FFFFFF"
                    mt={6}
                >
                    <SocialMediaLinks/>
                </HStack>
            </VStack>
        </Box>
    );
};


export default BurgerMenu;
