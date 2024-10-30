import Navbar from "./components/navbar/Navbar.tsx";
import "./style/css/global.css";
import {ChakraProvider, useMediaQuery} from "@chakra-ui/react";
import ScreenSizeLimit from "./components/common/ScreenSizeLimit.tsx";
import {IRoutes} from "./interfaces/route.interface.ts";
import {useRouteService} from "./services/route.service.ts";
import theme from "./config/chakraTheme.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/common/Footer.tsx";

function App() {
    const [is333px] = useMediaQuery("(max-width: 333px)");
    const routes: IRoutes[] = useRouteService();

    return (
        <ChakraProvider theme={theme}>
            {is333px ? (
                <ScreenSizeLimit/>
            ) : (
                <BrowserRouter>
                    <Routes>
                        {routes.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <>
                                        <Navbar/>
                                        <route.element/>
                                        <Footer/>
                                    </>
                                }
                            />
                        ))}
                    </Routes>
                </BrowserRouter>
            )}
        </ChakraProvider>
    );
}

export default App
