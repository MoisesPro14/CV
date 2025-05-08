import Moises from "../../assets/Moises.jpg";
import { SiGmail, SiGooglemaps} from "react-icons/si";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FcOvertime } from "react-icons/fc";


export const Perfil = () => {
    return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Foto o imágenes */}
                    <div className="col-span-1 flex justify-center items-center">
                        <img
                            src={Moises}
                            alt="Foto de Moises"
                            className="rounded-lg h-80 w-80 object-cover bg-slate-200 border font-bold border-gray-600"
                        />
                    </div>
                    {/* Texto */}
                    <div className="col-span-2 flex flex-col justify-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800 mb-1">¿Quién soy?</h1>
                            <p className="text-gray-600 mb-3">
                                Soy un estudiante del último ciclo de la carrera de Ingeniería de Software con Inteligencia Artificial
                                en SENATI. Durante mi formación académica, he adquirido y desarrollado habilidades sólidas en diversos
                                lenguajes de programación y herramientas tecnológicas. Además, he ganado experiencia práctica como
                                practicante pre-profesional en varias empresas reconocidas.
                            </p>
                        </div>
                        
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">Información personal</h1>

                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <div className="m-4 flex items-center gap-4">
                                    <MdOutlinePhoneIphone className="w-10 h-10 p-1 rounded-lg text-center bg-slate-300 text-indigo-600   shadow-custom  hover:bg-opacity-20"
                                      style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)" }}/>
                                    <div>
                                        <h2 className="font-sans text-gray-600">Teléfono</h2>
                                        <p className="text-lg font-semibold text-gray-800">+51 912 254 234</p>
                                    </div>
                                </div>

                                <div className="m-4 flex items-center gap-4">
                                    <SiGooglemaps className="w-10 h-10 p-1 rounded-lg text-center bg-slate-300 text-blue-700 shadow-custom  hover:bg-opacity-20"
                                      style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)" }}/>
                                    <div>

                                        <h2 className="font-sans text-gray-600 ">Dirección</h2>
                                        <p className="text-lg font-semibold text-gray-800">Lima, Perú</p>
                                    </div>
                                </div>

                                <div className="m-4 flex items-center gap-4">
                                    <SiGmail className="w-10 h-10 p-1 rounded-lg text-center bg-slate-300 text-red-500 shadow-custom   hover:bg-opacity-20 "
                                    style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)" }}/>
                                    <div>
                                        <h2 className="font-sans text-gray-600 ">Correo</h2> 
                                        <p className="text-lg font-semibold text-gray-800">elsermoises@gmail.com</p>
                                    </div>
                                </div> 
 



                                <div className="m-4 flex items-center gap-4 ">
                                    <FcOvertime className="w-10 h-10 p-1 rounded-lg text-center bg-slate-300 shadow-custom   hover:bg-opacity-20"
                                    style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)" }}/>
                                    <div>
                                        <h2 className="font-sans text-gray-600">Cumpleaños</h2>
                                        <p className="text-lg font-semibold text-gray-8000">14-03-2005</p>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
            </div>
       
       
    );
};

export default Perfil;
