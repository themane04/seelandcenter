import {Box, Text, useMediaQuery} from "@chakra-ui/react";

const ContactFormLeftSide = () => {
    const [is1100px] = useMediaQuery("(max-width: 1100px)");
    const [is580px] = useMediaQuery("(max-width: 580px)");
    return (
        <>
            <Box
                textTransform={"uppercase"}
                fontSize={is580px ? "10vw" : "4.688rem"}
                textAlign={is1100px ? "center" : "right"}
                color={"#9E9E9E"}
                mt={"-50px"}
            >
                <Text>Kontaktieren Sie</Text>
                <Text>Uns</Text>
            </Box>
        </>
    );
}

export default ContactFormLeftSide;