import { Outlet } from "react-router-dom";
import Header from "../Encabezado/Header";
import Footer from "../Footer/Footer";

export const Layout = () => {
  return (
    <div className="relative h-screen flex flex-col overflow-hidden bg-[#080d1a] text-gray-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">

      {/* Fondo decorativo de Orbes y Malla */}
      <Background />

      {/* Header unificado */}
      <Header />

      {/* Contenido principal con Scrollbar estilizado */}
      <main className="relative z-10 flex-1 overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20 pb-12 md:pb-0 transition-colors duration-300">
        <div className="mx-auto px-4 sm:px-6 py-4 min-h-full flex flex-col justify-between gap-8">
          
          {/* Vistas (Home, Currículum, etc.) */}
          <div className="flex-1 w-full">
            <Outlet />
          </div>

          {/* Nuevo Footer Minimalista */}
          <Footer />
        </div>
      </main>

    </div>
  );
};

const Background = () => (
  <>
    {/* Cuadrícula sutil */}
    <div
      className="pointer-events-none absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)
        `,
        backgroundSize: "45px 45px",
      }}
    />

    {/* Orb azul — arriba izquierda */}
    <div
      className="pointer-events-none absolute -top-32 -left-24 z-0 h-[500px] w-[500px] rounded-full animate-pulse"
      style={{
        background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
        animationDuration: "8s"
      }}
    />

    {/* Orb púrpura — abajo derecha */}
    <div
      className="pointer-events-none absolute -bottom-32 -right-24 z-0 h-[420px] w-[420px] rounded-full animate-pulse"
      style={{
        background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
        animationDuration: "10s"
      }}
    />
  </>
);

export default Layout;