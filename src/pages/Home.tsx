import {Box} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import imageData from "../assets/home/images.json";
import {imageBoxStyle} from "../style/ts/Home.style.ts";
import SocialMediaBanner from "../components/home/SocialMediaBanner.tsx";
import Business from "../sections/Business.tsx";
import Footer from "../components/common/Footer.tsx";

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(4);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const nextImageIndex = (currentImageIndex + 1) % imageData.length;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageData.length);
                setIsTransitioning(false);
            }, 1000);
        }, 12000);
        return () => clearInterval(intervalId);
    }, [imageData.length]);

    const handleDotClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <>
            <section id="home"/>
            <Box height="100vh">
                <Box sx={imageBoxStyle(imageData[currentImageIndex].path, !isTransitioning, true)}/>
                <Box sx={imageBoxStyle(imageData[nextImageIndex].path, isTransitioning, false)}/>
                <SocialMediaBanner
                    imageData={imageData}
                    currentImageIndex={currentImageIndex}
                    handleDotClick={handleDotClick}
                />
            </Box>
            <Business/>
            <Footer/>
        </>
    );
};

export default Home;
