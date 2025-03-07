import {Box, HStack, useMediaQuery} from "@chakra-ui/react";
import {TiThMenu, TiTimes} from "react-icons/ti";
import BurgerMenu from "./BurgerMenu.tsx";
import {useEffect, useState} from "react";
import NavbarLinks from "./NavbarLinks.tsx";

const Navbar = () => {
    const [is880px] = useMediaQuery("(max-width: 880px)");
    const [isOpen, setIsOpen] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsNavbarVisible(false);
            } else {
                setIsNavbarVisible(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {is880px &&
                <BurgerMenu isOpen={isOpen} onClose={() => setIsOpen(false)}/>
            }
            <HStack
                maxWidth={isOpen ? "100vw" : is880px ? "70px" : "700px"}
                transform={isOpen ? "translateX(0)" : isNavbarVisible ? "translateY(0)" : "translateY(-200%)"}
                transition="transform 0.4s ease-in-out, max-width 0.4s ease"
                position="fixed"
                top="40px"
                width="100%"
                height="50px"
                p={"30px"}
                left={is880px ? "" : "0"}
                right={is880px && !isOpen ? "50px" : "0"}
                margin={isOpen ? "0" : is880px ? "" : "0 auto"}
                boxShadow={!isOpen ? "0px 6px 10.5px rgba(0, 0, 0, 0.4)" : "none"}
                borderRadius={!isOpen ? "23.65px" : "0"}
                backgroundColor={!isOpen ? "rgba(158, 158, 158, 0.2)" : "transparent"}
                backdropFilter={!isOpen ? "blur(3px)" : "blur(0)"}
                textTransform="uppercase"
                fontSize="0.8rem"
                fontWeight="semibold"
                color="#FFFFFF"
                gap="20px"
                alignItems="center"
                justifyContent={isOpen ? "center" : "flex-end"}
                zIndex="10001"
            >
                {!is880px ? (
                    <NavbarLinks/>
                ) : (
                    <Box
                        onClick={toggleMenu}
                        cursor="pointer"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        transition="all 1.1s ease"
                        position="fixed"
                        top="50%"
                        right={isOpen ? "50%" : "20px"}
                        transform={isOpen ? "translate(50%, -50%)" : "translate(0, -50%)"}
                        zIndex="10001"
                    >
                        {isOpen ? (
                            <TiTimes size="40px" color="#32BCF1"/>
                        ) : (
                            <TiThMenu size="30px" color="#32BCF1"/>
                        )}
                    </Box>
                )}
            </HStack>
        </>
    );
}

export default Navbar;