import {Box, Image, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import CenterioEmail from "../common/CenterioEmail.tsx";

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
                    <CenterioEmail/>
                </Box>
            </VStack>
        </>
    );
}

export default CenterManagement;