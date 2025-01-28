import Portafolio from "../Pdf/Currículum-Vitae.pdf";
import CreadorMaestro from "../assets/PrifileCreador.png";


export const Curriculum = () => {
  return (
    <>
        <div className="flex justify-center items-center">
            <div className="w-[95%] max-w-screen-xl h-[calc(100vh-4rem)] md:h-[calc(100vh-2rem)] xl:h-[calc(100vh)]  rounded-lg  mb-10 xl:mb-0">

                <div className="w-full h-full xl:hidden">
                    <img src={CreadorMaestro} alt="Vista previa del currículum" className="object-cover" />
                </div>

                <iframe src={Portafolio} className="w-full h-full hidden  xl:block" title="Curriculum" />
            </div>
        </div>

      
    </>
  );
};

export default Curriculum;