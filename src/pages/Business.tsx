import PageLayout from "../components/common/PageLayout.tsx";
import {Box, Flex, Heading, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import {gradientTitle} from "../style/ts/Common.style.ts";
import businessData from "../assets/business/businesses.json";
import {outsideAccordionBox} from "../style/ts/WorkingTimes.style.ts";
import {useState} from "react";
import BusinessCardContent from "../components/business/BusinessCardContent.tsx";

const Business = () => {
    const [is650px] = useMediaQuery("(max-width: 650px)");
    const [is520px] = useMediaQuery("(max-width: 520px)");
    const [selectedCategory, setSelectedCategory] = useState<string | null>("Alle");
    const categories = ["Alle", ...Array.from(new Set(businessData.map((business) => business.category)))];
    const filteredBusinesses = selectedCategory && selectedCategory !== "Alle"
        ? businessData.filter((business) => business.category === selectedCategory)
        : businessData;

    return (
        <>
            <PageLayout>
                <Heading sx={gradientTitle(is650px)}>Geschäfte</Heading>
                <VStack align="center" gap={"60px"} p={5}>
                    <Flex
                        gap="3"
                        wrap={"wrap"}
                        justifyContent="center"
                        alignItems="center"
                        p={2}
                    >
                        {categories.map((category) => (
                            <Box
                                key={category}
                                p="2"
                                borderRadius="md"
                                bg={selectedCategory === category ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.1)"}
                                _hover={{bg: "rgba(255, 255, 255, 0.2)", cursor: "pointer"}}
                                transition="background-color 0.3s ease"
                                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                            >
                                <Text fontWeight="semibold" color="white" opacity="0.9">
                                    {category}
                                </Text>
                            </Box>
                        ))}
                    </Flex>
                    <Box sx={outsideAccordionBox(is520px, true)}>
                        <Flex
                            gap="30px"
                            alignItems="center"
                            justifyContent="center"
                            wrap="wrap"
                            mt="60px"
                            mb="60px"
                        >
                            {filteredBusinesses.map((business) => (
                                <BusinessCardContent key={business.id} business={business}/>
                            ))}
                        </Flex>
                    </Box>
                </VStack>
            </PageLayout>
        </>
    );
}

export default Business;