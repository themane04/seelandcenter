import {Text, VStack} from "@chakra-ui/react";

const SeelandLocation = () => {
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
                <Text color={"rgba(50, 188, 241, 0.8)"}>Seelandcenter</Text>
                <Text>Bielstrasse 9</Text>
                <Text>3250 Lyss</Text>
                <Text>info@seelandcenter.ch</Text>
            </VStack>
        </>
    );
}

export default SeelandLocation;