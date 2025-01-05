import CertificadoMoises from "../Pdf/CONSTANCIA DE PRACTICAS - ELSER.pdf";

export const Certificados = () => {
  return (
    <div className="flex justify-center items-center p-2">
        <div className="w-[95%] max-w-screen-xl h-[calc(100vh-8rem)] md:h-[calc(100vh-4rem)] rounded-lg overflow-hidden shadow-lg">
            <iframe src={CertificadoMoises} className="w-full h-full" title="Certificado" />
        </div>
    </div>
  );
};

export default Certificados;
