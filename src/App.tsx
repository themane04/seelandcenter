import Navbar from "./components/navbar/Navbar.tsx";
import "./style/css/global.css";
import {Box, ChakraProvider, Flex, useMediaQuery} from "@chakra-ui/react";
import ScreenSizeLimit from "./components/common/ScreenSizeLimit.tsx";
import {IRoutes} from "./interfaces/route.interface.ts";
import {useRouteService} from "./services/route.service.ts";
import theme from "./config/chakraTheme.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/common/Footer.tsx";
import ScrollToTop from "./components/common/ScrollToTop.tsx";

function App() {
    const [is333px] = useMediaQuery("(max-width: 333px)");
    const routes: IRoutes[] = useRouteService();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js');
    }

    return (
        <ChakraProvider theme={theme}>
            {is333px ? (
                <ScreenSizeLimit/>
            ) : (
                <Flex direction="column" minHeight="100vh">
                    <BrowserRouter>
                        <ScrollToTop/>
                        <Navbar/>
                        <Box flex="1">
                            <Routes>
                                {routes.map((route) => (
                                    <Route
                                        key={route.path}
                                        path={route.path}
                                        element={<route.element/>}
                                    />
                                ))}
                            </Routes>
                        </Box>
                        <Footer/>
                    </BrowserRouter>
                </Flex>
            )}
        </ChakraProvider>
    );
}

export default App;