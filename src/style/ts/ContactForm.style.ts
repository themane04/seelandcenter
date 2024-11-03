export const inputField = (valid?: boolean) => ({
    borderBottom: "0.5px solid #9E9E9E",
    _placeholder: {
        textTransform: "uppercase",
        color: "#00AC97",
    },
    errorBorderColor: "red",
    _focus: {
        borderBottom: valid ? "0.5px solid #9E9E9E" : "0.5px solid red",
        boxShadow: "none",
    },
});

export const errorIcon = {
    color: "red",
    height: "25px",
    width: "25px",
}