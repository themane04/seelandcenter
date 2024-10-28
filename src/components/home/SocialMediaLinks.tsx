import {Image, Link} from "@chakra-ui/react";
import {socialMediaIconStyle, socialMediaLinkStyle} from "../../style/ts/Home.style.ts";

const SocialMediaLinks = () => {
    return (
        <>
            <Link
                href="https://www.instagram.com/seelandcenterlyss/"
                target="_blank"
                rel="noopener noreferrer"
                sx={socialMediaLinkStyle}
            >
                <Image src="/home/instagram.svg" sx={socialMediaIconStyle}/>
            </Link>
            <Link
                href="https://www.facebook.com/seelandcenterlyss"
                target="_blank"
                rel="noopener noreferrer"
                sx={socialMediaLinkStyle}
            >
                <Image src="/home/facebook.svg" sx={socialMediaIconStyle}/>
            </Link>
        </>
    );
}

export default SocialMediaLinks;