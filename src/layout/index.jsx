import { Link, Outlet } from "react-router-dom"

export default function MainLayout() {
    return (
        <>
        <nav>
        <ul>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/hakkimizda">Hakkimizda</Link></li>
            <li><Link to="/iletisim">İletisim</Link></li>
            <li><Link to="/kategori">Kategori</Link></li>
        </ul>
        </nav>
        <Outlet />
        </>
       
    )

}