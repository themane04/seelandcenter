import {Box, Flex, HStack, Image, Text, useMediaQuery} from "@chakra-ui/react";
import {GoMegaphone} from "react-icons/go";
import {IButton} from "../../interfaces/home.interface.ts";
import {useNavigate} from "react-router-dom";

const ActionButton = ({
                          id,
                          name,
                          url
                      }: IButton) => {
    const [is880px] = useMediaQuery("(max-width: 880px)");
    const navigate = useNavigate();
    return (
        <>
            <Box
                key={id}
                width="224px"
                minWidth="224px"
                height="77px"
                backgroundColor="rgba(50, 188, 241, 0.19)"
                borderRadius="6px"
                backdropFilter="blur(3px)"
                boxShadow="0px 0px 18.6px 4px rgba(0, 0, 0, 0.25)"
                color="#FFFFFF"
                padding="10px"
                scrollSnapAlign="center"
                ml={is880px ? "40px" : ""}
                mr={is880px ? "40px" : ""}
                transition="all 0.4s ease-in-out"
                _hover={{transform: "scale(1.1)"}}
                cursor={"pointer"}
                onClick={() => navigate(url)}
            >
                <Flex
                    gap="10px"
                    align="center"
                    justify="center"
                    letterSpacing="0.24em"
                    textTransform="uppercase"
                    fontSize={"1.125rem"}
                >
                    <GoMegaphone size="30px" color="#32BCF1"/>
                    <Text>{name}</Text>
                </Flex>
                <HStack
                    fontWeight="light"
                    letterSpacing="0.1em"
                    fontSize="0.875rem"
                    align="center"
                    justify="right"
                    spacing="25px"
                    mt="5px"
                >
                    <Text>Anschauen</Text>
                    <Image src="/home/arrow_right.svg" width="44.87px" height="14px"/>
                </HStack>
            </Box>
        </>
    );
}

export default ActionButton;