import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Moises from "../assets/Moises-removebg-preview.png"; 
import PdfMoises from "../Pdf/Currículum-Vitae.pdf"
import { toast, ToastContainer } from "react-toastify";

export const Home = () => {

    // Función para manejar el clic y mostrar el Toast
    const handleDownloadClick = () => {
        toast.success("¡CV descargado con éxito!");
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center mt-10 md:mt-32 xl:mt-10">
                <img src={Moises} alt="Moises" className="w-80 h-80 bg-slate-300 rounded-full shadow-2xl  border-4" />
                <h1 className="mt-4 text-white text-2xl font-bold">Elser Moises</h1>
                <h2 className="mt-2 text-slate-400 text-xl text-center">Ingeniero De Software Con Inteligencia Artificial</h2>
                
                <div className="mt-3">
                    <ul className="flex space-x-2">
                        <li className="rounded-3xl bg-white p-1 hover:bg-gradient-to-r hover:from-slate-300 hover:via-slate-400 hover:to-slate-500 hover:shadow-lg hover:shadow-slate-400/50">
                            <a href="https://web.facebook.com/profile.php?id=61555794149713" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="text-2xl mx-1 my-1 text-blue-600 hover:text-blue-800" />
                            </a>
                        </li>

                        <li className="rounded-3xl bg-white p-1 hover:bg-gradient-to-r hover:from-slate-500 hover:via-slate-600 hover:to-slate-500 hover:shadow-lg hover:shadow-slate-400/50">
                            <a href="https://github.com/MoisesPro14" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-2xl mx-1 my-1 text-black" />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Enlace de descarga del CV */}
                <a  href={PdfMoises}  download="Currículum-Vitae" 
                    className="mt-4 rounded-lg bg-slate-400 text-black p-2 text-xl font-medium hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-700 hover:text-white hover:shadow-lg hover:shadow-sky-500/50"
                    onClick={handleDownloadClick}>
                        
                    Descargar CV
                </a>
            </div>

            <ToastContainer position="top-right"
                draggable
                style={{
                    marginTop: '90px',                     
                    marginRight: '20px',
                    zIndex: 9999,
                }}/>
        </>
    );
}

export default Home;
