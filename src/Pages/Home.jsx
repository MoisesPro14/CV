import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Moises from "../assets/Moises.jpg"; 

export const Home = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-10 xl:mt-10 select-none">
                
                {/* Contenedor del Marco (Fijo y adaptable) */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 border-4 border-white/90 rounded-full overflow-hidden shadow-2xl bg-[#111827]">
                    {/* La imagen ahora se adapta inteligentemente al círculo */}
                    <img 
                        src={Moises} 
                        alt="Elser Moises" 
                        className="w-full h-full object-cover object-top aspect-square" 
                    />
                </div>

                <h1 className="mt-6 text-white text-3xl font-extrabold tracking-tight">Elser Moises</h1>
                <h2 className="mt-2 text-slate-400 text-xl text-center max-w-md">Ingeniero De Software Con Inteligencia Artificial</h2>
                
                <div className="mt-4">
                    <ul className="flex space-x-3">
                        <li className="rounded-full bg-white p-2 hover:bg-slate-200 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-0.5">
                            <a href="https://web.facebook.com/profile.php?id=61555794149713" target="_blank" rel="noopener noreferrer" className="block">
                                <FaFacebookF className="text-xl text-blue-600" />
                            </a>
                        </li>

                        <li className="rounded-full bg-white p-2 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-500/20 transition-all duration-300 transform hover:-translate-y-0.5">
                            <a href="https://github.com/MoisesPro14" target="_blank" rel="noopener noreferrer" className="block">
                                <FaGithub className="text-xl text-black" />
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </>
    );
}

export default Home;