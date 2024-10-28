import {Image, Link} from "@chakra-ui/react";
import {navbarLinksStyle} from "../../style/ts/Navbar.style.ts";
import {INavbarLinks} from "../../interfaces/navbar.interface.ts";

const NavbarLinks = ({
                         onClick
                     }: INavbarLinks) => {
    return (
        <>
            <Link sx={navbarLinksStyle} onClick={onClick}>
                <Image
                    src={"/logo/logo_t.png"}
                    width={"50px"}
                    height={"50px"}
                />
            </Link>
            <Link sx={navbarLinksStyle} onClick={onClick}>Öffnungszeiten</Link>
            <Link sx={navbarLinksStyle} onClick={onClick}>Aktuelles</Link>
            <Link sx={navbarLinksStyle} onClick={onClick}>Centerinfo</Link>
            <Link sx={navbarLinksStyle} onClick={onClick}>Anreise & Parking</Link>
        </>
    );
}

export default NavbarLinks;