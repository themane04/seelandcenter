import {Text, VStack} from "@chakra-ui/react";

interface ICenterManagement {
    pb?: string;
}

const CenterManagement = ({pb}: ICenterManagement) => {
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
            >
                <Text color={"rgba(50, 188, 241, 0.8)"}>Center Menagement</Text>
                <Text>Centerio AG</Text>
                <Text>Klausstrasse 48</Text>
                <Text>8034 Zürich</Text>
                <Text
                    textTransform={"lowercase"}
                    color={"rgba(50, 188, 241, 0.8)"}
                >
                    info@centerio.ch
                </Text>
            </VStack>
        </>
    );
}

export default CenterManagement;