import { createBrowserRouter } from "react-router-dom";
import Anasayfa from "../companents/Anasayfa";
import MainLayout from "../layout";
import Kategori from "../companents/Kategori";
import Hakkimizda from "../companents/hakkimizda";
import Iletisim from "../companents/Iletisim";
import KategoriDetail from "../companents/KategoriDetail";


export const routes = createBrowserRouter([{
    path:"/",
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: <Anasayfa />
        },
        {
            path: "/hakkimizda",
            element: <Hakkimizda />
        },
        {
            path: "/iletisim",
            element: <Iletisim />
        },
        {
            path: "/kategori",
            element: <Kategori />
        },
        {
            path: "/kategoridetail",
            element: <KategoriDetail />
        },
    ]
  
}]) 