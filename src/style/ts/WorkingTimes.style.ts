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

export const outsideAccordionBox = (is520px:boolean) => ({
    borderLeft: is520px ? "none" : "2px solid rgba(50, 188, 241, 0.5)",
    borderTop: is520px ? "2px solid rgba(50, 188, 241, 0.5)" : "none",
    pl: is520px ? 0 : 10,
    ml: is520px ? 0 : 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
})