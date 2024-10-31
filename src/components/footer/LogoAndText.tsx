import {Image, Link, Text} from "@chakra-ui/react";

const LogoAndText = () => {
    return (
        <>
            <Link
                onClick={() => document.getElementById("home")?.scrollIntoView({behavior: "smooth"})}
                transition="all 0.4s ease-in-out"
                _hover={{transform: "scale(1.1)"}}
            >
                <Image
                    src={"/logo/logo_t.png"}
                    width={"50px"}
                    height={"50px"}
                />
            </Link>
            <Text
                color={"rgba(50, 188, 241, 0.8)"}
                fontSize={"1.5rem"}
                letterSpacing={"0.1em"}
                fontWeight={"bold"}
                lineHeight={"200%"}
                textAlign={"center"}
            >
                Seeland center
            </Text>
        </>
    );
}

export default LogoAndText;