import {Box, Text, useMediaQuery} from "@chakra-ui/react";
import {titleInfoText} from "../../style/ts/Footer.style.ts";
import CenterioEmail from "../common/CenterioEmail.tsx";

const ImprintContent = () => {
    const [is650px] = useMediaQuery("(max-width: 650px)");
    return (
        <>
            <Box
                textAlign={is650px ? "center" : "left"}
                color={"#FFFFFF"}
            >
                <Text sx={titleInfoText}>
                    Einkaufszentrum
                </Text>
                <Text>Seeland Center</Text>
                <Text>Bielstrasse 9</Text>
                <Text>3250 Lyss</Text>
            </Box>
            <Box
                textAlign={is650px ? "center" : "right"}
                color={"#FFFFFF"}
            >
                <Text sx={titleInfoText}>
                    Center Management
                </Text>
                <Text>Centerio AG</Text>
                <Text>Klausstrasse 48</Text>
                <Text>8034 Zürich</Text>
                <Text>Peter Kamber</Text>
                <CenterioEmail/>
                <Text>044 2444 33 00</Text>
            </Box>
        </>
    );
}

export default ImprintContent;