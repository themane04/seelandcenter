import {Box, Flex, Heading, Text, Link, Image, HStack} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import businessData from "../assets/business/businesses.json";
import ImageDot from "../components/home/ImageDot.tsx";

const BusinessDetail = () => {
    const {businessUrl} = useParams<{ businessUrl: string }>();
    const business = businessData.find(biz => biz.url === businessUrl?.toLowerCase());
    const [currentImage, setCurrentImage] = useState(0);
    const slicedImages = business!.images.slice(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % slicedImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slicedImages.length]);

    if (!business) {
        return <Text>Business not found</Text>;
    }

    return (
        <>
            <HStack
                w={"80%"}
                h={"fit-content"}
                m={"0 auto"}
                top={"20vh"}
                pb={"20vh"}
                position={"relative"}
                spacing={10}
            >
                <Box flex="1" maxW="600px" color={"#FFFFFF"}>
                    <Heading
                        as="h2"
                        size="lg"
                        mb={4}
                    >
                        {business.name}
                    </Heading>
                    <Text
                        fontSize="md"
                        mb={2}
                        display={business.under_title ? "block" : "none"}
                    >
                        {business.under_title}
                    </Text>
                    <Text
                        fontSize="lg"
                        mb={4}
                        fontStyle="italic"
                        display={business.quote ? "block" : "none"}
                    >
                        "{business?.quote}"
                    </Text>
                    <Text mb={4}>{business.content}</Text>
                    <Text fontWeight="bold">Tel: {business.phone}</Text>
                    <Link
                        href={`https://${business.website}`}
                        isExternal
                        color="teal.500"
                        fontWeight="bold"
                    >
                        {business.website_text}
                    </Link>
                </Box>
                <Box
                    flex="1"
                    position="relative"
                    maxW="600px"
                    h="400px"
                    boxShadow="lg"
                    borderRadius="md"
                    overflow="hidden"
                >
                    <Image
                        src={slicedImages[currentImage]}
                        alt={`${business.name} - Image ${currentImage + 1}`}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                    />
                    <Flex
                        position="absolute"
                        bottom="0"
                        width="100%"
                        justify="center"
                        gap={2}
                        p={2}
                        bg="rgba(0, 0, 0, 0.3)"
                    >
                        {business.images.slice(1).map((_, index) => (
                            <ImageDot
                                key={index}
                                currentImageIndex={currentImage}
                                handleDotClick={() => setCurrentImage(index)}
                                imageData={slicedImages}
                            />
                        ))}
                    </Flex>
                </Box>
            </HStack>
        </>
    );
};

export default BusinessDetail;
