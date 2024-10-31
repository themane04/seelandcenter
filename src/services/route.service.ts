import {IRoutes} from "../interfaces/route.interface.ts";
import Imprint from "../pages/Imprint.tsx";
import PrivacyPolicy from "../pages/PrivacyPolicy.tsx";
import Home from "../pages/Home.tsx";
import BusinessDetail from "../pages/BusinessDetail.tsx";
import Events from "../pages/Events.tsx";
import RentalSpace from "../pages/RentalSpace.tsx";
import TravelAndParking from "../pages/TravelAndParking.tsx";
import CenterInfo from "../pages/CenterInfo.tsx";

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
        },
        {
            path: "/rental-spaces",
            name: "Rental Space",
            element: RentalSpace
        },
        {
            path: "/travel-and-parking",
            name: "Travel and Parking",
            element: TravelAndParking
        },
        {
            path: "/center-info",
            name: "Center Info",
            element: CenterInfo
        },
    ]

    return routes;
}