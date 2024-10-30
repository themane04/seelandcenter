import {Box, Text} from "@chakra-ui/react";
import {PrivacyPolicySection, SectionProps} from "../../interfaces/footer.interface.ts";
import {additionalInfoText} from "../../style/ts/Footer.style.ts";
import renderContentWithLinks from "./PrivacyPolicyLinkedText.tsx";

const PrivacyPolicySectionContent = ({
                                         data,
                                         level = 1,
                                         sectionNumber = ""
                                     }: SectionProps) => {
    const titleColor = `rgba(50, 188, 241, ${1 - level * 0.2})`;

    return (
        <Box pl={level * 4} mb={6}>
            <Text fontWeight="bold" fontSize="1.5rem" color={titleColor}>
                {sectionNumber}. {data.title}
            </Text>
            {data.content && Array.isArray(data.content) && (
                <Text mt={1} color="#FFFFFF" fontSize="1.2rem">
                    {renderContentWithLinks(data.content)}
                </Text>
            )}
            {data.additional_information && Array.isArray(data.additional_information) && (
                <Text mt={4} sx={additionalInfoText}>
                    {renderContentWithLinks(data.additional_information)}
                </Text>
            )}
            {data.list && Array.isArray(data.list) && (
                <Box mt={3} ml={4} pl={2} borderLeft="2px solid rgba(50, 188, 241, 0.5)" fontSize="1.1rem">
                    {renderContentWithLinks(data.list)}
                </Box>
            )}
            {data.additional_information_2 && Array.isArray(data.additional_information_2) && (
                <Text sx={additionalInfoText}>
                    {renderContentWithLinks(data.additional_information_2)}
                </Text>
            )}
            {Object.entries(data).map(([key, value]) => {
                if (key.match(/^\d+(\.\d+)*$/) && typeof value === "object" && !Array.isArray(value)) {
                    return (
                        <PrivacyPolicySectionContent
                            key={key}
                            data={value as PrivacyPolicySection}
                            level={level + 1}
                            sectionNumber={`${sectionNumber ? `${sectionNumber}.` : ""}${key}`}
                        />
                    );
                }
                return null;
            })}
        </Box>
    );
};

export default PrivacyPolicySectionContent;
