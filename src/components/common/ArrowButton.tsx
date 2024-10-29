import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {Button} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {IArrowButton} from "../../interfaces/business.interface.ts";

const ArrowButton = ({
                         onClick,
                         isRight,
                         hideLeft,
                         hideRight,
                         left,
                         iconSize,
                         buttonMt,
                         motionMt,
                         backgroundColor = "rgba(0, 0, 0, 0.5)"
                     }: IArrowButton) => {
    const shouldHide = isRight ? hideRight : hideLeft;

    return (
        <motion.div
            initial={{opacity: 0, x: isRight ? 30 : -30}}
            animate={{
                opacity: shouldHide ? 0 : 1,
                x: shouldHide ? (isRight ? 30 : -30) : 0,
            }}
            transition={{duration: 0.3}}
            style={{
                position: "absolute",
                top: `${motionMt || "50%"}`,
                left: left || (isRight ? "90%" : "10%"),
                transform: "translateY(-50%)",
                zIndex: 10,
            }}
        >
            <Button
                onClick={onClick}
                zIndex="10"
                _active={{bgColor: "none"}}
                backgroundColor={backgroundColor}
                alignItems="center"
                justifyContent="center"
                height={iconSize}
                width={iconSize}
                borderRadius="full"
                mt={buttonMt}
                _hover={{
                    bgColor: "none",
                    transform: "scale(1.1)",
                    transition: "all 0.4s ease-in-out",
                }}
                cursor={"pointer"}
            >
                {isRight ? (
                    <AiOutlineArrowRight size={iconSize} color="#32BCF1"/>
                ) : (
                    <AiOutlineArrowLeft size={iconSize} color="#32BCF1"/>
                )}
            </Button>
        </motion.div>
    );
};

export default ArrowButton;
