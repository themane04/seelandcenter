import {Box, Button, Flex, Image, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import {underTitle} from "../../style/ts/Common.style.ts";
import CenterioEmail from "../common/CenterioEmail.tsx";
import {ICetnerInfoContent} from "../../interfaces/page.interface.ts";

const CenterInfoContent = ({
                               currentImage,
                               setCurrentImage,
                               images,
                               url
                           }: ICetnerInfoContent) => {
    const [is1073px] = useMediaQuery("(max-width: 1073px)");

    return (
        <>
            <VStack gap={10} align="stretch">
                <Box>
                    <Text sx={{...underTitle, mt: 0}}>Standort</Text>
                    <Text>Seeland Center</Text>
                    <Text>Bielstrasse 9</Text>
                    <Text>3250 Lyss</Text>
                </Box>
                <Box textAlign={is1073px ? "center" : "right"}>
                    <Text sx={underTitle}>Service</Text>
                    <Text>Behindertengerechtes Center</Text>
                    <Text>Kunden-WC im 1. Obergeschoss</Text>
                    <Text>Personenaufzug im Center</Text>
                    <Text>200 Parkplätze, 90 Minuten gratis</Text>
                </Box>
                <Box mb={is1073px ? 10 : 0}>
                    <Text sx={underTitle}>Centermanagement</Text>
                    <Text>Centerio AG</Text>
                    <Text>Klausstrasse 48</Text>
                    <Text>8034 Zürich</Text>
                    <CenterioEmail/>
                </Box>
            </VStack>
            <Box
                flex="1"
                position="relative"
                boxShadow="rgba(255, 255, 255, 0.5) 0px 0px 30px 0.5px"
                borderRadius="20px"
                overflow="hidden"
                maxW="900px"
            >
                <Image
                    src={url}
                    alt={"Seeland Center"}
                    objectFit="cover"
                    width="100%"
                />
                <Flex
                    position="absolute"
                    bottom="0"
                    width="100%"
                    justify="center"
                    gap={2}
                    p={2}
                >
                    {images.map((_, index) => (
                        <Button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            variant="ghost"
                            _hover={{bg: "none", transform: "scale(1.1)"}}
                            width="fit-content"
                            height="fit-content"
                            padding="10px"
                            zIndex="4"
                        >
                            <Image
                                src={index === currentImage
                                    ? "/home/dot_clicked.svg"
                                    : "/home/dot_unclicked.svg"
                                }
                                width="10px"
                                height="10px"
                            />
                        </Button>
                    ))}
                </Flex>
            </Box>
        </>
    );
}

export default CenterInfoContent;