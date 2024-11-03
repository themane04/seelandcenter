import {Text, HStack, useMediaQuery, Box} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import businessData from "../assets/business/businesses.json";
import {environments} from "../services/environments.ts";
import BusinessDetailImage from "../components/business/BusinessDetailImage.tsx";
import BusinessDetailContent from "../components/business/BusinessDetailContent.tsx";

const BusinessDetail = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [is980px] = useMediaQuery("(max-width: 980px)");
    const {businessUrl} = useParams<{ businessUrl: string }>();
    const business = businessData.find(biz => biz.url === businessUrl?.toLowerCase());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % business!.images.length);
        }, environments.imageChangeCooldown);

        return () => clearInterval(interval);
    }, [business?.images.length]);

    if (!business) {
        return <Text>Business not found</Text>;
    }

    return (
        <>
            <HStack
                w={"90%"}
                maxW={"2000px"}
                m={"0 auto"}
                spacing={"2vw"}
                className={"navbar-section-distsance"}
            >
                {is980px ? (
                    <>
                        <Box>
                            <BusinessDetailContent
                                name={business.name}
                                under_title={business.under_title}
                                quote={business.quote}
                                content={business.content}
                                message={business.message}
                                phone={business.phone}
                                website={business.website}
                                website_text={business.website_text}
                            />
                            <BusinessDetailImage
                                business={business}
                                currentImage={currentImage}
                                setCurrentImage={setCurrentImage}
                            />
                        </Box>
                    </>
                ) : (
                    <>
                        <BusinessDetailContent
                            name={business.name}
                            under_title={business.under_title}
                            quote={business.quote}
                            content={business.content}
                            message={business.message}
                            phone={business.phone}
                            website={business.website}
                            website_text={business.website_text}
                        />
                        <BusinessDetailImage
                            business={business}
                            currentImage={currentImage}
                            setCurrentImage={setCurrentImage}
                        />
                    </>
                )}
            </HStack>
        </>
    );
};

export default BusinessDetail;
