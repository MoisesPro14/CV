import { useState } from "react";
import { motion } from "framer-motion";
import Certificado1 from "../assets/ConstanciasView.png";


const certificadosData = [
  { id: 1, title: "Certificado en Desarrollo Web", imageSrc: Certificado1 },
];

export const Certificados = () => {
  const [selectedCertificado, setSelectedCertificado] = useState(null);

  const handleImageClick = (certificado) => {
    setSelectedCertificado(certificado);
  };

  const closeLightbox = () => {
    setSelectedCertificado(null);
  };

  return (
    <div className="w-full flex items-center justify-center">
        <div className="w-full mx-16">                
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {certificadosData.map((certificado) => (
                    <motion.div
                    key={certificado.id}
                    className="group relative cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => handleImageClick(certificado)}
                    >
                    <div className="aspect-w-1 aspect-h-1 bg-gray-800 rounded-xl overflow-hidden shadow-xl">
                        <img
                        src={certificado.imageSrc}
                        alt={certificado.title}
                        className="object-cover w-full h-full group-hover:opacity-75 transition-opacity"
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition-opacity rounded-xl">
                        <span className="text-white text-lg font-medium text-center">
                        {certificado.title}
                        </span>
                    </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox para vista detallada */}
            {selectedCertificado && (
            <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center ">
                <div className="relative w-full">
                    <button
                        onClick={closeLightbox}
                        className="absolute  right-0 text-white text-2xl hover:text-blue-400 transition-colors"
                    >
                        &times;
                    </button>
                    <img
                        src={selectedCertificado.imageSrc}
                        alt={selectedCertificado.title}
                        className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                    />
                    <p className="text-white text-center mt-4 text-xl">
                        {selectedCertificado.title}
                    </p>
                </div>
            </div>
            )}
        </div>
    </div>
  );
};

export default Certificados;