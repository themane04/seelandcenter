import {Text, HStack, useMediaQuery, VStack} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import businessData from "../assets/business/businesses.json";
import {environments} from "../services/environments.ts";
import BusinessDetailImage from "../components/business/BusinessDetailImage.tsx";
import BusinessDetailContent from "../components/business/BusinessDetailContent.tsx";

const BusinessDetail = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [is880px] = useMediaQuery("(max-width: 880px)");
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
                h={"fit-content"}
                m={"0 auto"}
                top={"20vh"}
                position={"relative"}
                spacing={"2vw"}
                mb={"30vh"}
            >
                {is880px ? (
                    <>
                        <VStack gap={"50px"}>
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
                        </VStack>
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
