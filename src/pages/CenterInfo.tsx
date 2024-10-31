import BoxLayout from "../components/common/BoxLayout.tsx";
import {Heading, HStack, useMediaQuery, VStack} from "@chakra-ui/react";
import {gradientTitle} from "../style/ts/Common.style.ts";
import {useEffect, useState} from "react";
import {environments} from "../services/environments.ts";
import CenterInfoContent from "../components/center_info/CenterInfoContent.tsx";

const CenterInfo = () => {
    const [is650px] = useMediaQuery("(max-width: 650px)");
    const [is1073px] = useMediaQuery("(max-width: 1073px)");
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        {url: "/mall/inside_lift.jpg"},
        {url: "/mall/outside_bottom_right.jpg"},
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, environments.imageChangeCooldown);

        return () => clearInterval(interval);
    }, [images.length]);


    return (
        <>
            <BoxLayout>
                <VStack>
                    <Heading sx={gradientTitle(is650px)}>Infos zum Seeland Center</Heading>
                    {is1073px ? (
                        <VStack
                            justifyContent="center"
                            alignItems="center"
                            textAlign={"center"}
                            gap="5%"
                            w="90%"
                            mt={"60px"}
                            mb={"60px"}
                        >
                            <CenterInfoContent
                                currentImage={currentImage}
                                setCurrentImage={setCurrentImage}
                                images={images}
                                url={images[currentImage].url}
                            />
                        </VStack>
                    ) : (
                        <HStack
                            justifyContent="center"
                            alignItems="center"
                            gap="10%"
                            w="100%"
                            p={"60px"}
                        >
                            <CenterInfoContent
                                currentImage={currentImage}
                                setCurrentImage={setCurrentImage}
                                images={images}
                                url={images[currentImage].url}
                            />
                        </HStack>
                    )}
                </VStack>
            </BoxLayout>
        </>
    );
}

export default CenterInfo;