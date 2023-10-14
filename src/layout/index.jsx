import { Link, Outlet } from "react-router-dom"

export default function MainLayout() {
    return (
        <>
        <nav>
        <ul>
            <li><Link to="/">KAT PLANI</Link></li>
            <li><Link to="/Salon">SALON</Link></li>
            <li><Link to="/YatakOdasi">YATAK ODASI</Link></li>
            <li><Link to="/CocukOdasi">ÇOCUK ODASI</Link></li>
            <li><Link to="/Mutfak">MUTFAK</Link></li>
            <li><Link to="/GiyinmeOdasi">GİYİNME ODASI</Link></li>
            <li><Link to="/Banyo">BANYO</Link></li>
        </ul>
        </nav>
        <Outlet />
        </>
       
    )

}