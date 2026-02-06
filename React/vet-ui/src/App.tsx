import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Mascotas from "./pages/Mascotas";
import Consultas from "./pages/Consultas";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/mascotas">Mascotas</Link> | 
        <Link to="/consultas">Consultas</Link>
      </nav>

      <Routes>
        <Route path="/mascotas" element={<Mascotas />} />
        <Route path="/consultas" element={<Consultas />} />
      </Routes>
    </BrowserRouter>
  );
}
