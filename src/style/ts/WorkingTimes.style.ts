export const itemDaysAndHours = {
    fontWeight: "semibold",
    color: "white",
    opacity: "0.9"
}

export const indexBox = {
    mb: "2",
    p: "3",
    borderRadius: "md",
    bg: "rgba(255, 255, 255, 0.1)"
}

export const outsideAccordionBox = (is520px: boolean, isBusinessPage?: boolean) => ({
    borderLeft: is520px || isBusinessPage ? "none" : "2px solid rgba(50, 188, 241, 0.5)",
    borderTop: is520px || isBusinessPage ? "2px solid rgba(50, 188, 241, 0.5)" : "none",
    pl: is520px || isBusinessPage ? 0 : 10,
    ml: is520px || isBusinessPage ? 0 : 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "80%"
})