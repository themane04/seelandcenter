import {Box, Link, Text, useMediaQuery, VStack} from "@chakra-ui/react";

const SeelandLocation = () => {
    const [is1842px] = useMediaQuery("(max-width: 1842px)");

    return (
        <>
            <VStack
                width={"80%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={"0"}
                color={"#FFFFFF"}
            >
                <Box textAlign={is1842px ? "center" : "left"}>
                    <Text color={"rgba(50, 188, 241, 0.8)"}>Seeland Center</Text>
                    <Text>Bielstrasse 9</Text>
                    <Text>3250 Lyss</Text>
                    <Link
                        href="mailto:info@seelandcenter.ch"
                        transition="all 0.4s ease-in-out"
                        _hover={{textDecoration: "none"}}
                    >
                        <Text
                            textTransform="lowercase"
                            color="rgba(50, 188, 241, 0.8)"
                            transition="all 0.4s ease-in-out"
                            _hover={{
                                transform: "scale(1.1)",
                                transition: "all 0.4s ease-in-out"
                            }}
                        >
                            info@seelandcenter.ch
                        </Text>
                    </Link>
                </Box>
            </VStack>
        </>
    );
}

export default SeelandLocation;