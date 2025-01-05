import {  SiMxlinux, SiWebex} from "react-icons/si";
import { GrCloudlinux } from "react-icons/gr";

export const PersonalInfo = () => {
  return (
    <div className="mt-3">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left md:ml-24 ">
            ¡Lo que hago!
        </h1>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tarjeta 1 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md h-full flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                    <SiMxlinux className="w-7 h-7 text-indigo-600" />
                        <h2 className="text-lg font-semibold text-gray-800">Diseño de Interfaces Inteligentes</h2>
                            </div>
                                <p className="text-gray-600">
                                    Creo diseños de usuario eficientes y atractivos, integrando principios de inteligencia artificial para
                                    mejorar la experiencia del usuario y la accesibilidad.
                                </p>
                            </div>
 
                            {/* Tarjeta 2 */}
                            <div className="bg-gray-100 p-4 rounded-lg shadow-md h-full flex flex-col">
                                <div className="flex items-center gap-2 mb-2">
                                    <GrCloudlinux className="w-7 h-7 text-green-500" />
                                        <h2 className="text-lg font-semibold text-gray-800">Desarrollo de Soluciones con IA</h2>
                                </div>
                                    <p className="text-gray-600">
                                        Desarrollo aplicaciones que incorporan algoritmos de aprendizaje automático y procesamiento de datos
                                        para resolver problemas reales.
                                     </p>
                            </div>
 
                         {/* Tarjeta 3 */}
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md h-full flex flex-col">
                             <div className="flex items-center gap-2 mb-2">
                                 <SiWebex className="w-7 h-7 text-blue-500" />
                                 <h2 className="text-lg font-semibold text-gray-800">Implementación de Plataformas Web</h2>
                            </div>
                             <p className="text-gray-600">
                                 Diseño y construyo plataformas web robustas y escalables, utilizando herramientas modernas como React
                                 y Tailwind CSS para ofrecer rendimiento y estética.
                             </p>
                        </div>
            </div>
     </div>       
  )
}
export default PersonalInfo
