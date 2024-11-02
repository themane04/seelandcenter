import {HStack, useMediaQuery, VStack} from "@chakra-ui/react";
import ContactFormLeftSide from "../components/contact_form/ContactFormLeftSide.tsx";
import ContactFormRightSide from "../components/contact_form/ContactFormRightSide.tsx";

const ContactForm = () => {
    const [is1100px] = useMediaQuery("(max-width: 1100px)");
    return (
        <>
            {is1100px ? (
                <VStack
                    width={"100%"}
                    p={"0 6vw 0 6vw"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    className={"section-section-distance"}
                    mb={"20px"}
                >
                    <ContactFormLeftSide/>
                    <ContactFormRightSide/>
                </VStack>
            ) : (
                <HStack
                    width={"100%"}
                    p={"0 6vw 0 6vw"}
                    gap={"100px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    className={"section-section-distance"}
                    mb={"20px"}
                >
                    <ContactFormLeftSide/>
                    <ContactFormRightSide/>
                </HStack>
            )}
        </>
    );
}

export default ContactForm;