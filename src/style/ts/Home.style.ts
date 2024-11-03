export const imageBoxStyle = (imageUrl: string) => ({
    backgroundImage: imageUrl
        ? `linear-gradient(0deg, #141414 4%, rgba(20, 20, 20, 0.15) 50%), url(${imageUrl})`
        : "none",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
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