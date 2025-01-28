import CertificadoMoises from "../Pdf/CONSTANCIA DE PRACTICAS - ELSER.pdf";
import CertificadoView from "../assets/ConstanciasView.png";


export const Certificados = () => {
  return (
    <>
    <div className="flex justify-center items-center">
        <div className="w-[95%] max-w-screen-xl h-[calc(100vh-4rem)] md:h-[calc(100vh-2rem)] xl:h-[calc(100vh)]  rounded-lg ">

            {/* Imagen en móviles y tabletas */}
            <div className="w-full h-full xl:hidden">

                <img src={CertificadoView} alt="Vista previa del Certificado" className="object-cover   " />
            </div>

            {/* PDF en laptops y pantallas más grandes */}
            <iframe src={CertificadoMoises} className="w-full h-full hidden xl:block" title="Certificado" />
        </div>
    </div>
    </>
  );
};

export default Certificados;