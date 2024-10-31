import {Image, Link} from "@chakra-ui/react";
import {navbarLinksStyle} from "../../style/ts/Navbar.style.ts";
import {INavbarLinks} from "../../interfaces/navbar.interface.ts";
import {useLocation, useNavigate} from "react-router-dom";

const NavbarLinks = ({
                         logo = true,
                         onClose
                     }: INavbarLinks) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogoClick = () => {
        if (location.pathname === "/") {
            document.getElementById("home")?.scrollIntoView({behavior: "smooth"});
        } else {
            navigate("/");
        }
        onClose?.();
    };

    const handleLinkClick = (path: string) => {
        navigate(path);
        onClose?.();
    };

    return (
        <>
            <Link
                sx={navbarLinksStyle}
                onClick={handleLogoClick}
                display={logo ? "flex" : "none"}
            >
                <Image
                    src={"/logo/logo_t.png"}
                    width={"50px"}
                    height={"50px"}
                />
            </Link>
            <Link sx={navbarLinksStyle}>Öffnungszeiten</Link>
            <Link sx={navbarLinksStyle}>Aktuelles</Link>
            <Link sx={navbarLinksStyle} onClick={() => handleLinkClick("/center-info")}>Centerinfo</Link>
            <Link sx={navbarLinksStyle} onClick={() => handleLinkClick("/travel-and-parking")}>Anreise & Parking</Link>
        </>
    );
}


export default NavbarLinks;