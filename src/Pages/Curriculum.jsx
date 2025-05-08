import { useRef } from "react";
import { motion } from "framer-motion";
import {FiDownload,FiMail,FiPhone,FiMapPin,FiGlobe,FiCode,FiServer,  FiSmartphone} from "react-icons/fi";
import ProfileWeb from "../assets/Moises.jpg";



export const Curriculum = () => {

    const curriculumRef = useRef(null);
  const skills = [
    "TailwindCSS",
    "React",
    "C# (ASP.NET Core APIs)",
    "MAUI",
    "Python",
    "Laravel",
    "SQL Server",
    "Oracle SQL",
    "MySQL",
    "Git & GitHub",
    "HTML & CSS",
    "Java"
  ];

  const education = {
    institution: "SENATI",
    program: "Ingeniería de Software con Inteligencia Artificial",
    completion: "14 de junio de 2025"
  };

  const contact = {
    location: "Lima, Perú",
    email: "elsermoises@gmail.com",
    phone: "+51 912 252 234",
    website: "elsermoises.dev"
  };

  const whatIDo = [
    {
      title: "Diseño de Interfaces Inteligentes",
      description:
        "Creo diseños de usuario eficientes y atractivos, integrando principios de inteligencia artificial para mejorar la experiencia del usuario y la accesibilidad."
    },
    {
      title: "Desarrollo de Soluciones con IA",
      description:
        "Desarrollo aplicaciones que incorporan algoritmos de aprendizaje automático y procesamiento de datos para resolver problemas reales."
    },
    {
      title: "Implementación de Plataformas Web",
      description:
        "Diseño y construyo plataformas web robustas y escalables, utilizando herramientas modernas como React y Tailwind CSS para ofrecer rendimiento y estética."
    }
  ];

  const practices = [
    { name: "Estudio Reynoso", url: "https://www.estudioreynoso.com" },
    { name: "BlackTech Consulting SRL", url: "https://blacktech.pe" },
    { name: "ProSystem Solución Informáticas", url: "http://prosystem.pe/view/home/" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-4 flex items-center justify-center  sm:px-6"
    >
      <div  ref={curriculumRef} className="w-full bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 space-y-8 border border-gray-700/30">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Columna Izquierda - Header */}
          <div className="md:col-span-1 space-y-6 md:mt-24">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-full flex justify-center"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-blue-400/50 overflow-hidden shadow-lg">
                <img
                  src={ProfileWeb}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="text-center space-y-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Elser Moises Horna Rimarachin
              </h1>
              <p className="text-md sm:text-lg font-medium text-gray-300">
                Desarrollador Full Stack & IA
              </p>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 p-3 bg-gray-700/30 rounded-lg">
                <FiMapPin className="text-blue-400 shrink-0" />
                <span className="text-sm sm:text-base">{contact.location}</span>
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-gray-300 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <FiMail className="text-blue-400 shrink-0" />
                <span className="text-sm sm:text-base">{contact.email}</span>
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 text-gray-300 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <FiPhone className="text-blue-400 shrink-0" />
                <span className="text-sm sm:text-base">{contact.phone}</span>
              </a>
              <a
                href={`https://${contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <FiGlobe className="text-blue-400 shrink-0" />
                <span className="text-sm sm:text-base">{contact.website}</span>
              </a>
            </div>

            {/* Botón de Descarga */}
            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button type="button"
                // href="/ElserMoisesHorna_CV.pdf"
                // download
                onClick={handleDownloadPdf}
                className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg transition-all group"
              >
                <FiDownload className="group-hover:animate-bounce" />
                <span className="text-sm sm:text-base">Descargar CV</span>
              </button>
            </motion.div> */}
          </div>

          {/* Columna Derecha - Contenido Principal */}
          <div className="md:col-span-3 space-y-8">
            {/* Sección Quién soy */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="p-4 sm:p-6 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl border border-gray-700/30"
            >
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                ¿Quién soy?
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Soy un apasionado desarrollador full stack con especialización en
                Inteligencia Artificial, actualmente cursando el último ciclo de
                mi carrera en <span className="text-blue-400">SENATI</span>.
                Combino habilidades técnicas sólidas con una mentalidad innovadora
                para crear soluciones tecnológicas impactantes. Mi experiencia en
                diversas empresas me ha permitido desarrollar una visión integral
                del ciclo de vida del software.
              </p>
            </motion.div>

            {/* Lo que hago con iconos */}
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ¡Lo que hago!
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {whatIDo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 sm:p-6 bg-gray-700/30 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all group hover:-translate-y-1 cursor-default"
                  >
                    <div className="mb-3 text-blue-400">
                      {index === 0 ? (
                        <FiCode size={24} />
                      ) : index === 1 ? (
                        <FiServer size={24} />
                      ) : (
                        <FiSmartphone size={24} />
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Educación y Prácticas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-700/30 p-4 sm:p-6 rounded-2xl border border-gray-700/50">
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                  Educación
                </h2>
                <div className="space-y-1">
                  <div className="text-blue-400 font-medium text-sm sm:text-base">
                    {education.completion}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {education.program}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {education.institution}
                  </p>
                </div>
              </div>

              <div className="bg-gray-700/30 p-4 sm:p-6 rounded-2xl border border-gray-700/50">
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                  Prácticas Pre-Profesionales
                </h2>
                <div className="flex flex-wrap gap-2">
                  {practices.map((p, i) => (
                    <motion.a
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 text-xs sm:text-sm bg-gray-600/30 rounded-full text-gray-300 border border-gray-500/30 hover:border-blue-400/50 transition-colors"
                    >
                      {p.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Habilidades Técnicas */}
            <div className="bg-gray-700/30 p-4 sm:p-6 rounded-2xl border border-gray-700/50">
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Habilidades Técnicas
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <button
                    key={i}
                    className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Curriculum;