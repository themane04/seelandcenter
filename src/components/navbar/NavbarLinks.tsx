import {Image, Link, useMediaQuery} from "@chakra-ui/react";
import {activeLinkStyle, navbarLinksStyle} from "../../style/ts/Navbar.style.ts";
import {INavbarLinks} from "../../interfaces/navbar.interface.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const NavbarLinks = ({
                         logo = true,
                         onClose
                     }: INavbarLinks) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [logoClicked, setLogoClicked] = useState(false);
    const [is880px] = useMediaQuery("(max-width: 880px)");

    useEffect(() => {
        setLogoClicked(location.pathname === "/");
    }, [location.pathname]);

    const handleLogoClick = () => {
        if (location.pathname === "/") {
            document.getElementById("home")?.scrollIntoView({behavior: "smooth"});
            setLogoClicked(true);
        } else {
            navigate("/");
            setLogoClicked(true);
        }
        onClose?.();
    };

    const handleLinkClick = (path: string) => {
        navigate(path);
        onClose?.();
    };

    const isCurrentPage = (path: string) => location.pathname === path;

    return (
        <>
            <Link
                sx={logo ? {...navbarLinksStyle, display: "flex"} : {...navbarLinksStyle, display: "none"}}
                onClick={handleLogoClick}
            >
                <Image
                    src={logoClicked ? "/logo/logo_t_blue.png" : "/logo/logo_t.png"}
                    width={is880px ? "110px" : "60px"}
                    height={is880px ? "110px" : "60px"}
                />
            </Link>
            <Link sx={{...navbarLinksStyle, ...(isCurrentPage("/working-times") ? activeLinkStyle : {})}}
                  onClick={() => handleLinkClick("/working-times")}>Öffnungszeiten</Link>
            <Link sx={{...navbarLinksStyle, ...(isCurrentPage("/businesses") ? activeLinkStyle : {})}}
                  onClick={() => handleLinkClick("/businesses")}>Geschäfte</Link>
            <Link sx={{...navbarLinksStyle, ...(isCurrentPage("/latest") ? activeLinkStyle : {})}}
                  onClick={() => handleLinkClick("/latest")}>Aktuelles</Link>
            <Link sx={{...navbarLinksStyle, ...(isCurrentPage("/center-info") ? activeLinkStyle : {})}}
                  onClick={() => handleLinkClick("/center-info")}>Centerinfo</Link>
            <Link sx={{...navbarLinksStyle, ...(isCurrentPage("/travel-and-parking") ? activeLinkStyle : {})}}
                  onClick={() => handleLinkClick("/travel-and-parking")}>Anreise & Parking</Link>
        </>
    );
}

export default NavbarLinks;