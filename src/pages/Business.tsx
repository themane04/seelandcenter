import PageLayout from "../components/common/PageLayout.tsx";
import {Box, Flex, Heading, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import {gradientTitle} from "../style/ts/Common.style.ts";
import BusinessCard from "../components/business/BusinessCard.tsx";
import businessData from "../assets/business/businesses.json";
import {outsideAccordionBox} from "../style/ts/WorkingTimes.style.ts";

const Business = () => {
    const [is650px] = useMediaQuery("(max-width: 650px)");
    const [is520px] = useMediaQuery("(max-width: 520px)");
    const [is390px] = useMediaQuery("(max-width: 390px)");
    return (
        <>
            <PageLayout>
                <Heading sx={gradientTitle(is650px)}>Geschäfte</Heading>
                <VStack align="center" gap={"60px"} p={is390px ? "0" : "6vw"}>
                    <Flex
                        gap="3"
                        wrap={"wrap"}
                        justifyContent="center"
                        alignItems="center"
                        p={2}
                    >
                        {businessData.map((business) => (
                            <Box
                                key={business.category}
                                p="2"
                                borderRadius="md"
                                bg="rgba(255, 255, 255, 0.1)"
                                _hover={{bg: "rgba(255, 255, 255, 0.2)", cursor: "pointer"}}
                                transition="background-color 0.3s ease"
                            >
                                <Text fontWeight="semibold" color="white" opacity="0.9" fontSize="md">
                                    {business.category}
                                </Text>
                            </Box>
                        ))}
                    </Flex>
                    <Box sx={outsideAccordionBox(is520px, true)}>
                        <BusinessCard isBusinessPage={true}/>
                    </Box>
                </VStack>
            </PageLayout>
        </>
    );
}

export default Business;