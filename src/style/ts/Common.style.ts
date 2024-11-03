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

export const outsideAccordionBox = (is520px: boolean, isBusinessPage?: boolean) => ({
    borderLeft: is520px || isBusinessPage ? "none" : "2px solid rgba(50, 188, 241, 0.5)",
    borderTop: is520px || isBusinessPage ? "2px solid rgba(50, 188, 241, 0.5)" : "none",
    pl: is520px || isBusinessPage ? 0 : 10,
    ml: is520px || isBusinessPage ? 0 : 10,
    mt: is520px && !isBusinessPage ? 10 : 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
});

export const secondaryInfo = {
    color: "white",
    opacity: 0.6,
    fontSize: "sm",
    fontStyle: "italic",
    mt: 4,
}