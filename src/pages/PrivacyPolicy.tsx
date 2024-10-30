import {Box, Text, VStack} from "@chakra-ui/react";
import privacyPolicyData from "../assets/footer/privacy_policy.json";
import PrivacyPolicySectionContent from "../components/footer/PrivacyPolicySectionContent.tsx";

const PrivacyPolicy = () => {
    return (
        <>
            <VStack
                w={"80%"}
                h={"fit-content"}
                m={"0 auto"}
                top={"20vh"}
                pb={"20vh"}
                position={"relative"}
                spacing={10}
            >
                <Text
                    fontWeight={"bold"}
                    fontSize={"4rem"}
                    mb={5}
                    bgGradient="linear(0deg, rgba(4, 42, 158, 0.6) 4%, #FFFFFF 50%)"
                    bgClip="text"
                    textTransform={"uppercase"}
                >
                    Datenschutz
                </Text>
                <Box
                    p={"50px"}
                    bg="rgba(30, 30, 30, 1)"
                    color="gray.600"
                    borderRadius="md"
                >
                    {Object.entries(privacyPolicyData).map(([sectionNumber, sectionData]) => (
                        <PrivacyPolicySectionContent key={sectionNumber} data={sectionData} sectionNumber={sectionNumber}/>
                    ))}
                </Box>
            </VStack>
        </>
    );
}

export default PrivacyPolicy;