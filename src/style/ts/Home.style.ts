export const imageBoxStyle = (imageUrl: string, isTransitioning: boolean, active: boolean) => ({
    backgroundImage: active ? `linear-gradient(0deg, #000000 0%, rgba(20, 20, 20, 0.1) 90%), url(${imageUrl})` : "none",
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