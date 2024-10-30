import {Link, Text} from "@chakra-ui/react";

const CenterioEmail = () => {
    return (
        <>
            <Link
                href="mailto:info@centerio.ch"
                transition="all 0.4s ease-in-out"
                _hover={{textDecoration: "none", transform: "scale(1.1)"}}
            >
                <Text
                    textTransform="lowercase"
                    color="rgba(50, 188, 241, 0.8)"
                >
                    info@centerio.ch
                </Text>
            </Link>
        </>
    );
}

export default CenterioEmail;