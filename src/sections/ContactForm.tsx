import {Box, Button, HStack, Input, InputGroup, Text, Textarea, VStack} from "@chakra-ui/react";
import {inputField} from "../style/ts/ContactForm.style.ts";

const ContactForm = () => {
    return (
        <>
            <HStack
                width={"100%"}
                p={"0 6vw 0 6vw"}
                gap={"100px"}
                justifyContent={"center"}
                alignItems={"center"}
                className={"section-section-distance"}
                mb={"20px"}
            >
                <Box
                    textTransform={"uppercase"}
                    fontSize={"4.688rem"}
                    textAlign={"right"}
                    color={"#9E9E9E"}
                >
                    <Text>Kontaktieren Sie</Text>
                    <Text>Uns</Text>
                </Box>
                <VStack
                    width="500px"
                    spacing="30px"
                    color="#FFFFFF"
                    alignItems="flex-start"
                    mt={"90px"}
                >
                    <InputGroup>
                        <Input
                            placeholder="Name"
                            variant={"flushed"}
                            sx={inputField}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Input
                            placeholder="E-Mail"
                            variant={"flushed"}
                            sx={inputField}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Textarea
                            placeholder="Ihre Nachricht"
                            variant={"flushed"}
                            sx={inputField}
                            resize={"none"}
                        />
                    </InputGroup>
                    <Box
                        width={"100%"}
                        display={"flex"}
                        justifyContent={"flex-end"}
                    >
                        <Button
                            colorScheme="teal"
                            variant="solid"
                            w={"80px"}
                            h={"25px"}
                            borderRadius={"3px"}
                            p={4}
                            fontSize={"0.813rem"}
                            fontWeight={"medium"}
                            textTransform={"uppercase"}
                            _hover={{
                                transform: "scale(1.1)",
                                transition: "transform 0.5s ease"
                            }}
                        >
                            Senden
                        </Button>
                    </Box>
                </VStack>
            </HStack>
        </>
    );
}

export default ContactForm;