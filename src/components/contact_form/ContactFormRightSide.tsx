import {
    Box,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Textarea,
    useMediaQuery,
    useToast,
    VStack
} from "@chakra-ui/react";
import {errorIcon, inputField} from "../../style/ts/ContactForm.style.ts";
import React, {useRef, useState} from "react";
import {capitalizeFirstLetter, validateEmail, validateName} from "../../utils/form.validation.util.ts";
import {showErrorToast, showInfoToast, showSuccessToast} from "../../utils/toast.util.ts";
import {environments} from "../../services/environments.ts";
import {MdErrorOutline} from "react-icons/md";

const ContactFormRightSide = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [is580px] = useMediaQuery("(max-width: 580px)");
    const [is1100px] = useMediaQuery("(max-width: 1100px)");
    const toast = useToast();
    const lastNameToastTimeRef = useRef(0);
    const lastEmailToastTimeRef = useRef(0);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = capitalizeFirstLetter(event.target.value);
        setName(value);
        const isValid = validateName(value);
        setNameValid(isValid);

        const currentTime = Date.now();
        if (!isValid && currentTime - lastNameToastTimeRef.current > environments.toastMessageCooldown) {
            showErrorToast(toast, "Der gegebene Name ist ungültig.");
            lastNameToastTimeRef.current = currentTime;
        }
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setEmail(value);
        const isValid = validateEmail(value);
        setEmailValid(isValid);

        const currentTime = Date.now();
        if (!isValid && currentTime - lastEmailToastTimeRef.current > environments.toastMessageCooldown) {
            showErrorToast(toast, "Die gegebene E-Mail ist ungültig.");
            lastEmailToastTimeRef.current = currentTime;
        }
    };

    const handleSubmit = () => {
        const currentTime = Date.now();
        if (currentTime - lastNameToastTimeRef.current <= environments.toastMessageCooldown ||
            currentTime - lastEmailToastTimeRef.current <= environments.toastMessageCooldown) {
            showInfoToast(toast, "Bitte geben Sie gültige Daten ein.");
            return;
        }

        if (!nameValid || !emailValid) {
            showInfoToast(toast, "Bitte geben Sie gültige Daten ein.");
            return;
        }

        if (name === "" || email === "" || message === "") {
            showInfoToast(toast, "Bitte füllen Sie alle Felder aus.");
            return;
        }

        showSuccessToast(toast, "Ihre Nachricht wurde erfolgreich versendet.");
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <>
            <VStack
                width={is580px ? "100%" : "500px"}
                color="#FFFFFF"
                alignItems="flex-start"
                mt={is1100px ? "0" : "100px"}
                spacing={10}
            >
                <InputGroup>
                    <Input
                        placeholder="Name"
                        variant="flushed"
                        sx={inputField(nameValid)}
                        value={name}
                        onChange={handleNameChange}
                        isInvalid={!nameValid}
                    />
                    {!nameValid && (
                        <InputRightElement>
                            <MdErrorOutline style={errorIcon}/>
                        </InputRightElement>
                    )}
                </InputGroup>
                <InputGroup>
                    <Input
                        placeholder="E-Mail"
                        variant="flushed"
                        sx={inputField(emailValid)}
                        value={email}
                        onChange={handleEmailChange}
                        isInvalid={!emailValid}
                    />
                    {!emailValid && (
                        <InputRightElement>
                            <MdErrorOutline style={errorIcon}/>
                        </InputRightElement>
                    )}
                </InputGroup>
                <InputGroup>
                    <Textarea
                        placeholder="Ihre Nachricht"
                        variant="flushed"
                        sx={inputField(true)}
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
                        onClick={handleSubmit}
                    >
                        Senden
                    </Button>
                </Box>
            </VStack>
        </>
    );
}

export default ContactFormRightSide;