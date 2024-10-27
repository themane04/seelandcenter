import {HStack, Image, Link} from "@chakra-ui/react";
import {navbarLinksStyle} from "../style/ts/Navbar.style.ts";

const Navbar = () => {
    return (
        <>
            <HStack
                width={"600px"}
                height={"50px"}
                position={"absolute"}
                top={"40px"}
                left={"0"}
                right={"0"}
                margin={"auto"}
                boxShadow={"0px 6px 10.5px rgba(0, 0, 0, 0.4)"}
                borderRadius={"23.65px"}
                backgroundColor={"rgba(158, 158, 158, 0.2)"}
                backdropFilter={"blur(3px)"}
                textTransform={"uppercase"}
                fontSize={"0.8rem"}
                fontWeight={"semibold"}
                color={"#FFFFFF"}
                gap={"20px"}
                alignItems={"center"}
                justifyContent={"center"}
                zIndex={"3"}
            >
                <Link sx={navbarLinksStyle}>
                    <Image
                        src={"/logo/logo_t.png"}
                        width={"50px"}
                        height={"50px"}
                    />
                </Link>
                <Link sx={navbarLinksStyle}>
                    Öffnungszeiten
                </Link>
                <Link sx={navbarLinksStyle}>
                    Aktuelles
                </Link>
                <Link sx={navbarLinksStyle}>
                    Centerinfo
                </Link>
                <Link sx={navbarLinksStyle}>
                    Anreise & Parking
                </Link>
            </HStack>
        </>
    );
}

export default Navbar;