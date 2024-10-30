import {Image, Link, Text, useMediaQuery} from "@chakra-ui/react";

const LogoAndText = () => {
    const [is731px] = useMediaQuery("(max-width: 731px)");

    return (
        <>
            <Link
                onClick={() => document.getElementById("home")?.scrollIntoView({behavior: "smooth"})}
                transition="all 0.4s ease-in-out"
                _hover={{transform: "scale(1.1)"}}
                mt={"20px"}
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
                mt={is731px ? "" : "20px"}
            >
                Seelandcenter
            </Text>
        </>
    );
}

export default LogoAndText;