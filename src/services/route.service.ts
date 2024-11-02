import {IRoutes} from "../interfaces/route.interface.ts";
import Imprint from "../pages/Imprint.tsx";
import PrivacyPolicy from "../pages/PrivacyPolicy.tsx";
import Home from "../pages/Home.tsx";
import BusinessDetail from "../pages/BusinessDetail.tsx";
import Events from "../pages/Events.tsx";
import RentalSpace from "../pages/RentalSpace.tsx";
import TravelAndParking from "../pages/TravelAndParking.tsx";
import CenterInfo from "../pages/CenterInfo.tsx";
import Latest from "../pages/Latest.tsx";
import WorkingTimes from "../pages/WorkingTimes.tsx";
import Business from "../pages/Business.tsx";

export const useRouteService = () => {
    const routes: IRoutes[] = [
        {
            path: "/",
            name: "Home",
            element: Home
        },
        {
            path: "/working-times",
            name: "Working Times",
            element: WorkingTimes
        },
        {
            path: "/latest",
            name: "Latest",
            element: Latest
        },
        {
            path: "/center-info",
            name: "Center Info",
            element: CenterInfo
        },
        {
            path: "/travel-and-parking",
            name: "Travel and Parking",
            element: TravelAndParking
        },
        {
            path: "/rental-spaces",
            name: "Rental Space",
            element: RentalSpace
        },
        {
            path: "/events",
            name: "Events",
            element: Events
        },
        {
            path: "/businesses",
            name: "Businesses",
            element: Business
        },
        {
            path: "/business/:businessUrl",
            name: "Business Detail",
            element: BusinessDetail
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
        }
    ]

    return routes;
}