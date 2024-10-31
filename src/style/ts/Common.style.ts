export const gradientTitle = (is650px: boolean) => ({
    bgGradient: "linear(0deg, rgba(4, 42, 158, 0.6) 4%, #FFFFFF 50%)",
    bgClip: "text",
    textTransform: "uppercase",
    mb: 5,
    fontSize: is650px ? "2rem" : "4rem",
    fontWeight: "bold",
    textAlign: "center",
});

export const underTitle = {
    fontSize: "1.3rem",
    color: "rgba(50, 188, 241, 1)",
    mt: 5,
    textTransform: "uppercase",
};