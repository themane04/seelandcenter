import {Box, Text, VStack, Icon} from "@chakra-ui/react";
import {FiSmartphone} from "react-icons/fi";

const ScreenSizeLimit = () => {
    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
                bg="#1E1E1E"
                padding="20px"
                textAlign="center"
                color="gray.500"
            >
                <VStack spacing={4}>
                    <Icon as={FiSmartphone} boxSize="50px"/>
                    <Text fontSize="2xl" fontWeight="bold">
                        Bildschirmgrösse zu klein
                    </Text>
                    <Text fontSize="lg">
                        Für die beste Erfahrung, bitte ein grösseres Gerät verwenden.
                    </Text>
                </VStack>
            </Box>
        </>
    );
};

export default ScreenSizeLimit;
