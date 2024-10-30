import {Box, HStack, Text, VStack} from "@chakra-ui/react";
import imprintData from "../assets/footer/imprint.json";
import CenterioEmail from "../components/common/CenterioEmail.tsx";
import {titleInfoText} from "../style/ts/Impressum.style.ts";

const Imprint = () => {
    return (
        <>
            <VStack
                w={"80%"}
                h={"fit-content"}
                m={"0 auto"}
                top={"20vh"}
                pb={"20vh"}
                position={"relative"}
                spacing={10}
            >
                <Text
                    fontWeight={"bold"}
                    fontSize={"4rem"}
                    mb={5}
                    bgGradient="linear(0deg, rgba(4, 42, 158, 0.6) 4%, #FFFFFF 50%)"
                    bgClip="text"
                >
                    Impressum
                </Text>
                <Box
                    p={"50px"}
                    bg="rgba(30, 30, 30, 1)"
                    color="gray.600"
                    borderRadius="md"
                >
                    <HStack
                        spacing={20}
                        justifyContent={"space-between"}
                        w={"100%"}
                        mb={10}
                    >
                        <Box textAlign={"left"} color={"#FFFFFF"}>
                            <Text sx={titleInfoText}>
                                Einkaufszentrum
                            </Text>
                            <Text>Seeland Center</Text>
                            <Text>Bielstrasse 9</Text>
                            <Text>3250 Lyss</Text>
                        </Box>
                        <Box textAlign={"right"} color={"#FFFFFF"}>
                            <Text sx={titleInfoText}>
                                Center Management
                            </Text>
                            <Text>Centerio AG</Text>
                            <Text>Klausstrasse 48</Text>
                            <Text>8034 Zürich</Text>
                            <Text>Peter Kamber</Text>
                            <CenterioEmail/>
                            <Text>044 2444 33 00</Text>
                        </Box>
                    </HStack>
                    {imprintData.map((data, index) => (
                        <Box key={index} mb={10}>
                            <Text fontWeight={"bold"} fontSize={"1.5rem"} color={"rgba(50, 188, 241, 0.8)"}>
                                {data.title}
                            </Text>
                            <Text mt={2} color={"#FFFFFF"} fontSize={"1.2rem"}>
                                {data.text}
                            </Text>
                        </Box>
                    ))}
                </Box>
            </VStack>
        </>
    );
}

export default Imprint;