import {Box} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import imageData from "../assets/home/images.json";
import {imageBoxStyle} from "../style/ts/Home.style.ts";
import SocialMediaBanner from "../components/home/SocialMediaBanner.tsx";
import Business from "../sections/Business.tsx";
import {environments} from "../services/environments.ts";

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(4);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageData.length);
        }, environments.imageChangeCooldown);

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <>
            <section id="home"/>
            <Box height="100vh">
                {imageData.map((image, index) => (
                    <Box
                        key={image.id}
                        sx={{
                            ...imageBoxStyle(image.path),
                            opacity: index === currentImageIndex ? 1 : 0,
                            transition: 'opacity 1s ease-in-out'
                        }}
                    />
                ))}
                <SocialMediaBanner
                    imageData={imageData}
                    currentImageIndex={currentImageIndex}
                    handleDotClick={handleDotClick}
                />
            </Box>
            <Business/>
        </>
    );
};

export default Home;
