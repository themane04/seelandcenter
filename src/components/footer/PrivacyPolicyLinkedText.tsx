import {Box, Link, Text} from "@chakra-ui/react";
import {ILinkText} from "../../interfaces/footer.interface.ts";

const renderContentWithLinks = (
    contentArray: (ILinkText | string | ILinkText[])[]
) => {
    return contentArray.map((segment, index) => {
        if (typeof segment === "string") {
            return (
                <Box as="span" key={`text-${index}`} color="#FFFFFF" fontSize="1.2rem">
                    <Text mt={2}>
                        {segment}
                    </Text>
                </Box>
            );
        }

        if (Array.isArray(segment)) {
            return (
                <Box as="span" key={`array-segment-${index}`}>
                    {segment.map((item, subIndex) =>
                        item.link ? (
                            <Link
                                key={`link-${subIndex}`}
                                href={item.link}
                                isExternal
                                color="rgba(50, 188, 241, 1)"
                                _hover={{textDecoration: "none", color: "rgba(50, 188, 241, 0.8)"}}
                            >
                                {item.text}
                            </Link>
                        ) : (
                            <Box as="span" key={`text-${subIndex}`} color="#FFFFFF" fontSize="1.2rem">
                                {item.text}
                            </Box>
                        )
                    )}
                </Box>
            );
        }

        return segment.link ? (
            <Link
                key={`object-link-${index}`}
                href={segment.link}
                isExternal
                color="rgba(50, 188, 241, 1)"
                _hover={{textDecoration: "none", color: "rgba(50, 188, 241, 0.8)"}}
            >
                {segment.text}
            </Link>
        ) : (
            <Box as="span" key={`object-text-${index}`} color="#FFFFFF" fontSize="1.2rem">
                {segment.text}
            </Box>
        );
    });
};

export default renderContentWithLinks;