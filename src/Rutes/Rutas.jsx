import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Curriculum from "../Pages/Curriculum";
import Certificados from "../Pages/Certificados";
import Proyectos from "../Pages/Proyectos";
import Contacto from "../Pages/Contacto";
import Layout from "../Componentes/Layout/Layout"; 

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>     
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="curriculum" element={<Curriculum />} />
            <Route path="certificados" element={<Certificados />} />
            <Route path="proyectos" element={<Proyectos />} />
            <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;



