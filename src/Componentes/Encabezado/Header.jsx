import { TbHomeInfinity } from "react-icons/tb";
import { BsFillBookmarksFill } from "react-icons/bs";
import { SiCountingworkspro } from "react-icons/si";
import { PiTelegramLogoFill, PiCertificateDuotone } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: "/", label: "Home", icon: <TbHomeInfinity size={18} /> },
    { path: "/curriculum", label: "Currículum", icon: <BsFillBookmarksFill size={16} /> },
    { path: "/certificados", label: "Certificados", icon: <PiCertificateDuotone size={18} /> },
    { path: "/proyectos", label: "Proyectos", icon: <SiCountingworkspro size={16} /> },
    { path: "/contacto", label: "Contacto", icon: <PiTelegramLogoFill size={18} /> },
  ];

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="flex overflow-x-auto sm:overflow-visible mt-6 mb-2 p-2 scrollbar-hide bg-transparent justify-center sm:justify-end">
        
        {/* Contenedor flotante tipo Isla de Cristal */}
        <ul className="flex space-x-2 bg-gray-950/40 backdrop-blur-md p-1.5 rounded-xl border border-white/10 shadow-lg dynamic-shadow">
          {menuItems.map((item) => {
            const active = isActive(item.path);
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`group flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-medium tracking-wide transition-all duration-300 transform-style-3d ${
                    active
                      ? "text-white bg-gradient-to-r from-cyan-500/80 to-blue-600/80 border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                      : "text-gray-400 border border-transparent hover:text-white hover:bg-white/5 hover:border-white/5 hover:scale-102"
                  }`}
                >
                  {/* Icono animado con rotación inteligente al pasar el mouse */}
                  <span className={`transition-transform duration-500 ${active ? "text-white" : "text-gray-400 group-hover:text-cyan-400 group-hover:rotate-[360deg]"}`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

      </div>
      
      {/* Línea divisoria de luz hiperfina */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </header>
  );
};

export default Header;