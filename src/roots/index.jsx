import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout";
import Salon from "../companents/Salon";
import KatPlani from "../companents/KatPlani";
import YatakOdasi from "../companents/YatakOdasi"
import CocukOdasi from "../companents/CocukOdasi";
import Mutfak from "../companents/Mutfak";
import GiyinmeOdasi from "../companents/GiyinmeOdasi";
import Banyo from "../companents/Banyo";


export const routes = createBrowserRouter([{
    path:"/",
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: <KatPlani />
        },
        {
            path: "/Salon",
            element: <Salon/>
        },
        {
            path: "/YatakOdasi",
            element: <YatakOdasi />
        },
        {
            path: "/CocukOdasi",
            element: <CocukOdasi />
        },
        {
            path: "/Mutfak",
            element: <Mutfak />
        },
        {
            path: "/GiyinmeOdasi",
            element: <GiyinmeOdasi />
        },
        {
            path: "/Banyo",
            element: <Banyo />
        },
    ]
  
}]) 