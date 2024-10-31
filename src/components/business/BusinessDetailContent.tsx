import {Box, Heading, Link, Text, useMediaQuery} from "@chakra-ui/react";
import {IBusinessDetailContent} from "../../interfaces/business.interface.ts";

const BusinessDetailContent = ({
                                   name,
                                   under_title,
                                   quote,
                                   content,
                                   message,
                                   phone,
                                   website,
                                   website_text
                               }: IBusinessDetailContent) => {
    const [is880px] = useMediaQuery("(max-width: 880px)");
    return (
        <>
            <Box flex="1" color={"#FFFFFF"} textAlign={is880px ? "center" : "left"}>
                <Heading
                    as="h2"
                    fontSize="3rem"
                    mb={4}
                    color={"rgba(50, 188, 241, 1)"}
                    textTransform={"uppercase"}
                >
                    {name}
                </Heading>
                <Text
                    fontSize="2rem"
                    color={"rgba(50, 188, 241, 0.5)"}
                    mb={2}
                    display={under_title ? "block" : "none"}
                    textTransform={"uppercase"}
                >
                    {under_title}
                </Text>
                <Text
                    fontSize="lg"
                    mb={4}
                    textDecoration={"underline"}
                    fontStyle="italic"
                    display={quote ? "block" : "none"}
                >
                    "{quote}"
                </Text>
                <Text
                    mb={4}
                    display={content ? "block" : "none"}
                >
                    {content}
                </Text>
                <Text
                    fontSize="lg"
                    mb={4}
                    fontStyle="italic"
                    display={message ? "block" : "none"}
                >
                    {message}
                </Text>
                <Text
                    fontWeight="bold"
                    display={phone ? "block" : "none"}
                >
                    Tel: {phone}
                </Text>
                <Link
                    href={`https://${website}`}
                    isExternal
                    color="teal.400"
                    fontWeight="bold"
                    display={website ? "block" : "none"}
                    width={"fit-content"}
                    margin={is880px ? "0 auto" : ""}
                    transition={"all 0.3s"}
                    _hover={{
                        textDecoration: "none",
                        transform: "scale(1.1)",
                    }}
                    mt={5}
                >
                    {website_text}
                </Link>
            </Box>
        </>
    );
}

export default BusinessDetailContent;