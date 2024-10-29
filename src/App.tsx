import Home from "./sections/Home.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import "./style/css/global.css";
import "./style/css/Animations.css";
import {useMediaQuery} from "@chakra-ui/react";
import ScreenSizeLimit from "./components/common/ScreenSizeLimit.tsx";
import Business from "./sections/Business.tsx";
import Footer from "./components/common/Footer.tsx";

function App() {
    const [is333px] = useMediaQuery("(max-width: 333px)");
    return (
        <>
            {is333px ? (
                <ScreenSizeLimit/>
            ) : (
                <>
                    <Navbar/>
                    <Home/>
                    <Business/>
                    <Footer/>
                </>
            )}
        </>
    )
}

export default App
