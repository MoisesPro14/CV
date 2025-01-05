
import Perfil from "../Componentes/About/Perfil";
import PersonalInfo from "../Componentes/About/PersonalInfo";
import Technologies from "../Componentes/About/Technologies"

export const About = () => {
    return (
        <div className="flex justify-center items-center">
                

            <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 w-full max-w-7xl">
                
                <Perfil/>
                
                <PersonalInfo/>
                
                <Technologies/>

            </div>
        </div>
       
    );
};

export default About;
