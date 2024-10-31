import {Box, Flex, Heading, Text, Link, Image, Button, HStack} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import businessData from "../assets/business/businesses.json";

const BusinessDetail = () => {
    const {businessUrl} = useParams<{ businessUrl: string }>();
    const business = businessData.find(biz => biz.url === businessUrl?.toLowerCase());
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % business!.images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [business?.images.length]);

    if (!business) {
        return <Text>Business not found</Text>;
    }

    return (
        <>
            <HStack
                w={"fit-content"}
                h={"fit-content"}
                m={"0 auto"}
                top={"20vh"}
                position={"relative"}
                spacing={"200px"}
                className={"footer-section-distance"}
            >
                <Box flex="1" maxW="600px" color={"#FFFFFF"}>
                    <Heading
                        as="h2"
                        fontSize="3rem"
                        mb={4}
                        color={"rgba(50, 188, 241, 1)"}
                        textTransform={"uppercase"}
                    >
                        {business.name}
                    </Heading>
                    <Text
                        fontSize="2rem"
                        color={"rgba(50, 188, 241, 0.5)"}
                        mb={2}
                        display={business.under_title ? "block" : "none"}
                        textTransform={"uppercase"}
                    >
                        {business.under_title}
                    </Text>
                    <Text
                        fontSize="lg"
                        mb={4}
                        textDecoration={"underline"}
                        fontStyle="italic"
                        display={business.quote ? "block" : "none"}
                    >
                        "{business?.quote}"
                    </Text>
                    <Text
                        mb={4}
                        display={business.content ? "block" : "none"}
                    >
                        {business.content}
                    </Text>
                    <Text
                        fontSize="lg"
                        mb={4}
                        fontStyle="italic"
                        display={business.message ? "block" : "none"}
                    >
                        {business?.message}
                    </Text>
                    <Text
                        fontWeight="bold"
                        display={business.phone ? "block" : "none"}
                    >
                        Tel: {business.phone}
                    </Text>
                    <Link
                        href={`https://${business.website}`}
                        isExternal
                        color="teal.400"
                        fontWeight="bold"
                        display={business.website ? "block" : "none"}
                        width={"fit-content"}
                        transition={"all 0.3s"}
                        _hover={{
                            textDecoration: "none",
                            transform: "scale(1.1)",
                        }}
                        mt={5}
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
                        src={business.images[currentImage]}
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
                        {business.images.map((_, index) => (
                            <>
                                <Button
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    variant={"ghost"}
                                    _hover={{bg: "none", transform: "scale(1.2)"}}
                                    width={"fit-content"}
                                    height={"fit-content"}
                                    padding="10px"
                                    zIndex="4"
                                >
                                    <Image
                                        src={index === currentImage
                                            ? "/home/dot_clicked.svg"
                                            : "/home/dot_unclicked.svg"
                                        }
                                        width="10px"
                                        height="10px"
                                    />
                                </Button>
                            </>
                        ))}
                    </Flex>
                </Box>
            </HStack>
        </>
    );
};

export default BusinessDetail;
