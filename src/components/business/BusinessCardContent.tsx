import {Box, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {IBusinessCardContent} from "../../interfaces/business.interface.ts";
import {useNavigate} from "react-router-dom";

const BusinessCardContent = ({business}: IBusinessCardContent) => {
    const navigate = useNavigate();

    const handleNavigateToBusiness = () => {
        navigate(`/business/${business.url}`);
    }

    return (
        <>
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
                flexShrink={0}
                _hover={{
                    transform: "scale(1.1)",
                    transition: "all 0.4s ease-in-out",
                }}
                cursor={"pointer"}
                onClick={handleNavigateToBusiness}
            >
                <Box
                    backgroundImage={`url(${business.images[0]})`}
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
                    backgroundColor="rgba(158, 158, 158, 0.8)"
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
        </>
    );
}

export default BusinessCardContent;