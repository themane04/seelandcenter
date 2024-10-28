import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    breakpoints: {
        "880px": "880px",
    },
    fonts: {
        body: "'Lato', sans-serif",
        heading: "'Lato', sans-serif",
    },
});
export default theme;