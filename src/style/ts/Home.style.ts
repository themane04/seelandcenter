export const imageBoxStyle = (imageUrl: string, isTransitioning: boolean, active: boolean) => ({
    backgroundImage: active
        ? `linear-gradient(0deg, #141414 5%, rgba(20, 20, 20, 0.1) 50%), url(${imageUrl})`
        : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    position: "absolute",
    top: "0",
    left: "0",
    transition: "opacity 1s ease-in-out 0.2s",
    zIndex: isTransitioning ? 2 : 1,
});

export const socialMediaIconStyle = {
    width: "32px",
    height: "32px",
    zIndex: 3,
};

export const socialMediaLinkStyle = {
    _hover: {
        transform: "scale(1.2)",
        transition: "transform 0.3s",
    },
};