import {Box, HStack, useMediaQuery} from "@chakra-ui/react";
import businessData from "../.././assets/business/businesses.json";
import {useEffect, useRef, useState} from "react";
import BusinessCardContent from "./BusinessCardContent.tsx";
import ArrowButton from "../common/ArrowButton.tsx";

const BusinessCard = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isScrolledLeft, setIsScrolledLeft] = useState(true);
    const [isScrolledRight, setIsScrolledRight] = useState(false);
    const [is705px] = useMediaQuery("(max-width: 705px)");

    const checkScrollPosition = () => {
        if (scrollRef.current) {
            const {scrollLeft, scrollWidth, clientWidth} = scrollRef.current;
            setIsScrolledLeft(scrollLeft <= 500);
            setIsScrolledRight(scrollLeft + clientWidth >= scrollWidth - 100);
        }
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({left: -1500, behavior: "smooth"});
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({left: 1500, behavior: "smooth"});
        }
    };

    useEffect(() => {
        checkScrollPosition();
        scrollRef.current?.addEventListener("scroll", checkScrollPosition);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => scrollRef.current?.removeEventListener("scroll", checkScrollPosition);
    }, []);

    return (
        <>
            <HStack
                width="100vw"
                overflowX="hidden"
                justifyContent="center"
                alignItems="center"
                spacing="0"
            >
                <ArrowButton
                    onClick={scrollLeft}
                    hideLeft={isScrolledLeft}
                    iconSize={"70px"}
                    motionMt={"54%"}
                />
                <Box
                    ref={scrollRef}
                    minWidth="100vw"
                    display="flex"
                    overflowX="auto"
                    scrollSnapType="x mandatory"
                    scrollBehavior="smooth"
                    gap="80px"
                    height="500px"
                    alignItems="center"
                    paddingLeft="35vw"
                >
                    {businessData.map((business) => (
                        <BusinessCardContent key={business.id} business={business}/>
                    ))}
                </Box>
                <ArrowButton
                    onClick={scrollRight}
                    isRight={true}
                    hideRight={isScrolledRight}
                    iconSize={"70px"}
                    motionMt={"54%"}
                    left={is705px ? "80%" : "90%"}
                />
            </HStack>
        </>
    )
};

export default BusinessCard;