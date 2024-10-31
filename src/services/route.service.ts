import {IRoutes} from "../interfaces/route.interface.ts";
import Imprint from "../pages/Imprint.tsx";
import PrivacyPolicy from "../pages/PrivacyPolicy.tsx";
import Home from "../pages/Home.tsx";
import BusinessDetail from "../pages/BusinessDetail.tsx";
import Events from "../pages/Events.tsx";

export const useRouteService = () => {
    const routes: IRoutes[] = [
        {
            path: "/",
            name: "Home",
            element: Home
        },
        {
            path: "/imprint",
            name: "Imprint",
            element: Imprint
        },
        {
            path: "/privacy-policy",
            name: "Privacy Policy",
            element: PrivacyPolicy
        },
        {
            path: "/business/:businessUrl",
            name: "Business",
            element: BusinessDetail
        },
        {
            path: "/events",
            name: "Events",
            element: Events
        }
    ]

    return routes;
}