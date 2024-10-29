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
                    mt={"20px"}
                >
                    <Link
                        onClick={() => document.getElementById("home")?.scrollIntoView({behavior: "smooth"})}
                        className={"scale-on-hover"}
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
                    mt={"20px"}
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
                    mt={is731px ? "50px" : "20px"}
                    pb={"20px"}
                    flexDirection={is731px ? "column" : "row"}
                >
                    <NavbarLinks logo={false}/>
                </Box>
            </VStack>
        </>
    );
}

export default SeelandSocialsAndNavigation;