import {Box, HStack, Image, Text, VStack} from "@chakra-ui/react";
import businessData from "../.././assets/business/businesses.json";

const BusinessCard = () => {
    return (
        <>
            <HStack
                spacing={4}
                overflowX="auto"
                padding="20px"
                width="100%"
                alignItems="flex-start"
                scrollSnapType="x mandatory"
            >
                {businessData.map((business) => (
                    <Box
                        key={business.id}
                        bg="gray.800"
                        borderRadius="16px"
                        overflow="hidden"
                        boxShadow="0px 0px 33px 14px rgba(0, 0, 0, 0.25)"
                        width="292px"
                        height="386px"
                        position="relative"
                        mt="50px"
                        transition="all 0.4s ease-in-out"
                        _hover={{
                            transform: "scale(1.1)",
                            cursor: "pointer",
                        }}
                        marginRight="16px"
                        scrollSnapAlign="start"
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
                                <Text fontSize="0.875rem" fontWeight="bold" textTransform="uppercase" color="#FFFFFF">
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
            </HStack>
        </>
    )
};

export default BusinessCard;