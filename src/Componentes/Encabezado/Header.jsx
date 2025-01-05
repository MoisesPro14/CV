import { TbHomeInfinity } from "react-icons/tb";
import { BsPersonFill, BsFillBookmarksFill } from "react-icons/bs";
import { SiCountingworkspro } from "react-icons/si";
import { PiTelegramLogoFill, PiCertificateDuotone } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
        <div className="flex m-8">
            <ul className="flex space-x-4 ml-auto">
                <li>
                    <Link to="/"
                    className={`group flex items-center space-x-2 p-2 rounded-lg font-medium shadow-[0_4px_8px_rgba(0,0,0,0.2)] transform transition-all duration-300
                        ${isActive('/') ? 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80' : 'text-gray-500 bg-white hover:bg-gray-300 hover:scale-105'}`} >
                    <TbHomeInfinity className="text-red-600 text-xl m-1 transform hover:scale-125 group-hover:rotate-[360deg] transition-transform duration-300" />
                    Home

                    </Link>
                </li>

                <li>
                    <Link to="/about"
                    className={`group flex items-center space-x-2 p-2 rounded-lg font-medium shadow-[0_4px_8px_rgba(0,0,0,0.2)] transform transition-all duration-300
                        ${isActive('/about') ? 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80' : 'text-gray-500 bg-white hover:bg-gray-300 hover:scale-105'}`}>
                    <BsPersonFill className="text-blue-600 text-xl m-1 transform hover:scale-125 group-hover:rotate-[360deg] transition-transform duration-300" /> 
                        Perfil
                  
                    </Link>
                </li>

                <li>
                    <Link to="/curriculum"
                    className={`group flex items-center space-x-2 p-2 rounded-lg font-medium shadow-[0_4px_8px_rgba(0,0,0,0.2)] transform transition-all duration-300
                        ${isActive('/curriculum') ? 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80' : 'text-gray-500 bg-white hover:bg-gray-300 hover:scale-105'}`}>
                        <BsFillBookmarksFill className="text-gray-800 text-xl m-1 transform hover:scale-125 group-hover:rotate-[360deg] transition-transform duration-300"/>  
                        Currículum 
                       
                    </Link>
                </li>

                <li>
                    <Link to="/certificados"
                    className={`group flex items-center space-x-2 p-2 rounded-lg font-medium shadow-[0_4px_8px_rgba(0,0,0,0.2)] transform transition-all duration-300
                        ${isActive('/certificados') ? 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80' : 'text-gray-500 bg-white hover:bg-gray-300 hover:scale-105'}`} >
                        <PiCertificateDuotone className="text-purple-600 text-xl m-1 transform hover:scale-125 group-hover:rotate-[360deg] transition-transform duration-300" /> 
                        Certificados
                       
                    </Link>
                </li>

                {/* <li>
                    <Link  to="/proyectos"
                    className={`group flex items-center space-x-2 p-2 rounded-lg font-medium shadow-[0_4px_8px_rgba(0,0,0,0.2)] transform transition-all duration-300
                        ${isActive('/proyectos') ? 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80' : 'text-gray-500 bg-white hover:bg-gray-300 hover:scale-105'}`}>
                        <SiCountingworkspro className="text-orange-600 text-xl m-1 transform hover:scale-125 group-hover:rotate-[360deg] transition-transform duration-300" />
                        Proyectos
                        
                    </Link>
                </li> */}

                <li>
                    <Link to="/contacto"
                    className={`group flex items-center space-x-2 p-2 rounded-lg font-medium shadow-[0_4px_8px_rgba(0,0,0,0.2)] transform transition-all duration-300
                        ${isActive('/contacto') ? 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80' : 'text-gray-500 bg-white hover:bg-gray-300 hover:scale-105'}`} >
                    <PiTelegramLogoFill className="text-teal-600 text-xl m-1 transform hover:scale-125 group-hover:rotate-[360deg] transition-transform duration-300" /> 
                    Contacto
                    
                    </Link>
                </li>
            </ul>
        </div>
    </>
  );
};

export default Header;
