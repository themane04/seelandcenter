import {Box, HStack, Image, Link, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import SocialMediaLinks from "../home/SocialMediaLinks.tsx";
import NavbarLinks from "../navbar/NavbarLinks.tsx";

const SeelandSocialsAndNavigation = () => {
    const [is731px] = useMediaQuery("(max-width: 731px)");
    return (
        <>
            <VStack
                width={"100%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={"0"}
            >
                <HStack
                    width={"100%"}
                    height={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"20px"}
                >
                    <Link
                        onClick={() => document.getElementById("home")?.scrollIntoView({behavior: "smooth"})}
                        transition="all 0.4s ease-in-out"
                        _hover={{transform: "scale(1.1)"}}
                    >
                        <Image
                            src={"/logo/logo_t.png"}
                            width={"50px"}
                            height={"50px"}
                        />
                    </Link>
                    <Text
                        color={"rgba(50, 188, 241, 0.8)"}
                        fontSize={"1.5rem"}
                        letterSpacing={"0.1em"}
                        fontWeight={"bold"}
                        lineHeight={"200%"}
                        textAlign={"center"}
                    >
                        Seelandcenter
                    </Text>
                </HStack>
                <Box
                    width={"100%"}
                    height={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"100px"}
                >
                    <SocialMediaLinks/>
                </Box>
                <Box
                    width={"100%"}
                    height={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"50px"}
                    mt={is731px ? "50px" : ""}
                    flexDirection={is731px ? "column" : "row"}
                >
                    <NavbarLinks logo={false}/>
                </Box>
                <HStack height={"100%"}>
                    <Text
                        color={"rgba(50, 188, 241, 0.8)"}
                        fontSize={"1rem"}
                        letterSpacing={"0.1em"}
                        fontWeight={"bold"}
                        lineHeight={"200%"}
                        textAlign={"center"}
                        w={"100%"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={"20px"}
                    >
                        <Link
                            href={"/imprint"}
                            transition="all 0.4s ease-in-out"
                            _hover={{transform: "scale(1.1)"}}
                        >
                            Impressum
                        </Link>
                        <Link
                            href={"/privacy-policy"}
                            transition="all 0.4s ease-in-out"
                            _hover={{transform: "scale(1.1)"}}
                        >
                            Datenschutz
                        </Link>
                    </Text>
                </HStack>
            </VStack>
        </>
    );
}

export default SeelandSocialsAndNavigation;