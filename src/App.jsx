import { Routes, Route, Link } from "react-router-dom";
import Anasayfa from "./companents/Anasayfa";
import Hakkimizda from "./companents/hakkimizda";
import İletisim from "./companents/İletisim";

export default function App() {

  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Ana Sayfa</Link></li>
        <li><Link to="/hakkimizda">Hakkimizda</Link></li>
        <li><Link to="/iletisim">İletisim</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Anasayfa />} />
      <Route path="/hakkimizda" element={<Hakkimizda />} />
      <Route path="/iletisim" element={<İletisim />} />
        
      <Route />
    </Routes>
    </>
  )
}




