import {Box, HStack, Image, Text, VStack} from "@chakra-ui/react";
import businessData from "../.././assets/business/businesses.json";
import {useEffect, useRef} from "react";

const BusinessCard = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = 0;
        }
    }, []);

    return (
        <>
            <HStack
                maxWidth="1200px"
                mx="auto"
                padding="100px"
                zIndex={5}
            >
                <Box
                    ref={scrollRef}
                    display="flex"
                    overflowX="auto"
                    whiteSpace="nowrap"
                    maxWidth="100%"
                    scrollSnapType={"x mandatory"}
                    scrollBehavior={"smooth"}
                    gap="80px"
                    height={"450px"}
                    alignItems={"center"}
                >
                    {businessData.map((business) => (
                        <Box
                            key={business.id}
                            width="270px"
                            minWidth="270px"
                            height="386px"
                            bg="gray.800"
                            borderRadius="16px"
                            overflow="hidden"
                            boxShadow="0px 0px 33px 14px rgba(0, 0, 0, 0.25)"
                            position="relative"
                            transition="all 0.4s ease-in-out"
                            className="scale-on-hover"
                            scrollSnapAlign="start"
                            flexShrink={0}
                        >
                            <Box
                                backgroundImage={`url(${business.image_path})`}
                                width="100%"
                                height="100%"
                                backgroundSize="cover"
                                backgroundPosition="center"
                            />
                            <HStack
                                position="absolute"
                                bottom="0"
                                width="100%"
                                height="70px"
                                boxShadow="0px 6px 10.5px rgba(0, 0, 0, 0.4)"
                                backgroundColor="rgba(158, 158, 158, 0.2)"
                                backdropFilter="blur(3px)"
                                color="red"
                                padding="4"
                                lineHeight={1}
                                justifyContent="space-between"
                            >
                                <VStack alignItems="flex-start">
                                    <Text fontSize="0.875rem" fontWeight="bold" textTransform="uppercase"
                                          color="#FFFFFF">
                                        {business.name}
                                    </Text>
                                    <Text fontSize="0.688rem" color="#32BCF1">
                                        Anschauen
                                    </Text>
                                </VStack>
                                <Box position="absolute" right="5" bottom="4" p="2">
                                    <Image src="/business/icons/arrow.svg" alt="arrow" width="26px" height="26px"/>
                                </Box>
                            </HStack>
                        </Box>
                    ))}
                </Box>
            </HStack>
        </>
    )
};

export default BusinessCard;