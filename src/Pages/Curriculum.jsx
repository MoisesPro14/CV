import Portafolio from "../Pdf/Currículum-Vitae.pdf";

export const Curriculum = () => {
  return (
    <div className="flex justify-center items-center p-2">
        <div className="w-[95%] max-w-screen-xl h-[calc(100vh-8rem)] md:h-[calc(100vh-4rem)] rounded-lg overflow-hidden shadow-lg">
          <iframe src={Portafolio} className="w-full h-full" title="Curriculum" />
        </div>
    </div>
  );
};

export default Curriculum;
