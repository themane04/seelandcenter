import {Box} from "@chakra-ui/react";
import React, {ReactNode} from "react";

const PageLayout: React.FC<{ children: ReactNode }> = ({children}) => {
    return (
        <>
            <Box
                flex="1"
                color={"#FFFFFF"}
                textAlign={"left"}
                className={"navbar-section-distsance"}
            >
                {children}
            </Box>
        </>
    );
}

export default PageLayout;