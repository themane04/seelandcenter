import {Box, Button, Input, InputGroup, Text, Textarea, useMediaQuery, VStack} from "@chakra-ui/react";
import {inputField} from "../../style/ts/ContactForm.style.ts";
import React, {useState} from "react";
import {validateEmail, validateName} from "../../utils/form.validation.util.ts";

const ContactFormRightSide = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [is580px] = useMediaQuery("(max-width: 580px)");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setName(value);
        setNameValid(validateName(value));
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setEmail(value);
        setEmailValid(validateEmail(value));
    }

    return (
        <>
            <VStack
                width={is580px ? "100%" : "500px"}
                color="#FFFFFF"
                alignItems="flex-start"
                mt="50px"
                spacing={4}
            >
                <InputGroup>
                    <Input
                        placeholder="Name"
                        variant="flushed"
                        sx={inputField}
                        value={name}
                        onChange={handleNameChange}
                        isInvalid={!nameValid}
                        errorBorderColor="red.500"
                    />
                </InputGroup>
                <Box height="20px">
                    {!nameValid && (
                        <Text color="red.500" fontSize="sm">
                            Bitte geben Sie einen gültigen Namen ein.
                        </Text>
                    )}
                </Box>

                <InputGroup>
                    <Input
                        placeholder="E-Mail"
                        variant="flushed"
                        sx={inputField}
                        value={email}
                        onChange={handleEmailChange}
                        isInvalid={!emailValid}
                        errorBorderColor="red.500"
                    />
                </InputGroup>
                <Box height="20px">
                    {!emailValid && (
                        <Text color="red.500" fontSize="sm">
                            Bitte geben Sie eine gültige E-Mail-Adresse ein.
                        </Text>
                    )}
                </Box>

                <InputGroup>
                    <Textarea
                        placeholder="Ihre Nachricht"
                        variant="flushed"
                        sx={inputField}
                        resize="none"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </InputGroup>

                <Box
                    width="100%"
                    display="flex"
                    justifyContent="flex-end"
                    mt={4}
                >
                    <Button
                        colorScheme="teal"
                        variant="solid"
                        w="80px"
                        h="25px"
                        borderRadius="3px"
                        p={4}
                        fontSize="0.813rem"
                        fontWeight="medium"
                        textTransform="uppercase"
                        _hover={{
                            transform: "scale(1.1)",
                            transition: "transform 0.5s ease"
                        }}
                    >
                        Senden
                    </Button>
                </Box>
            </VStack>
        </>
    );
}

export default ContactFormRightSide;