import PageLayout from "../components/common/PageLayout.tsx";
import {Heading, useMediaQuery} from "@chakra-ui/react";
import {gradientTitle} from "../style/ts/Common.style.ts";

const Business = () => {
    const [is650px] = useMediaQuery("(max-width: 650px)");
    return (
        <>
            <PageLayout>
                <Heading sx={gradientTitle(is650px)}>Geschäfte</Heading>
            </PageLayout>
        </>
    );
}

export default Business;