import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Curriculum from "../Pages/Curriculum";
import Certificados from "../Pages/Certificados";
import Contacto from "../Pages/Contacto";
import Proyectos from "../Pages/Proyectos";
import Layout from "../Componentes/Layout/Layout"; 

export const Rutas = () => {
  return (
      <Routes>     
        <Route path="/" element={<Layout />}>
            <Route index  element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="curriculum" element={<Curriculum />} />
            <Route path="certificados" element={<Certificados />} />          
            <Route path="contacto" element={<Contacto />} />
            <Route path="proyectos" element={<Proyectos/>} />
        </Route>
      </Routes>
  );
};

export default Rutas;
