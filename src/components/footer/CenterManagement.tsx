import {Box, Image, Link, Text, useMediaQuery, VStack} from "@chakra-ui/react";

interface ICenterManagement {
    pb?: string;
}

const CenterManagement = ({pb}: ICenterManagement) => {
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
                pb={pb}
                gap={"20px"}
            >
                <Image
                    src="/logo/centerio_t.png"
                    alt="Centerio Logo"
                    width={"fit-content"}
                />
                <Box textAlign={is1842px ? "center" : "right"}>
                    <Text color={"rgba(50, 188, 241, 0.8)"}>Center Menagement</Text>
                    <Text>Centerio AG</Text>
                    <Text>Klausstrasse 48</Text>
                    <Text>8034 Zürich</Text>
                    <Link
                        href="mailto:info@centerio.ch"
                        transition="all 0.4s ease-in-out"
                        _hover={{textDecoration: "none", transform: "scale(1.1)"}}
                    >
                        <Text
                            textTransform="lowercase"
                            color="rgba(50, 188, 241, 0.8)"
                        >
                            info@centerio.ch
                        </Text>
                    </Link>
                </Box>
            </VStack>
        </>
    );
}

export default CenterManagement;