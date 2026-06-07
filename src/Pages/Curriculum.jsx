import { useRef } from "react";
import { motion } from "framer-motion";
import {
  FiMail, FiPhone, FiMapPin, FiGlobe,
  FiCode, FiServer, FiSmartphone, FiBriefcase,
  FiUser, FiBook, FiExternalLink
} from "react-icons/fi";
import ProfileWeb from "../assets/Moises.jpg";

export const Curriculum = () => {
  const curriculumRef = useRef(null);

  const skills = [
    "React", "TailwindCSS", "C# (ASP.NET Core)", "VB.Net",
    "MAUI", "Python", "Laravel", "SQL Server",
    "Oracle SQL", "MySQL", "Git & GitHub", "HTML & CSS", "Java"
  ];

  const education = {
    institution: "SENATI",
    program: "Ingeniería de Software con Inteligencia Artificial",
    status: "Egresado",
    completion: "Jun. 2025"
  };

  const contact = {
    location: "Lima, Perú",
    email: "elsermoises@gmail.com",
    phone: "+51 930 142 902",
    website: "elsermoises.dev"
  };

  const whatIDo = [
    {
      icon: <FiSmartphone size={20} />,
      title: "Desarrollo Móvil Multiplataforma",
      description: "Creo aplicaciones móviles nativas y eficientes para iOS y Android utilizando C# y .NET MAUI."
    },
    {
      icon: <FiServer size={20} />,
      title: "Soluciones con IA & Backend",
      description: "Apps con machine learning, procesamiento de datos y arquitecturas escalables en el lado del servidor."
    },
    {
      icon: <FiCode size={20} />,
      title: "Plataformas Web Inteligentes",
      description: "Sistemas robustos y dinámicos con React, Tailwind e interfaces optimizadas para una mejor UX."
    }
  ];

  const practices = [
    { name: "Estudio Reynoso", url: "https://www.estudioreynoso.com" },
    { name: "BlackTech Consulting SRL", url: "https://blacktech.pe" },
    { name: "ProSystem Solución Informáticas", url: "http://prosystem.pe/view/home/" }
  ];

  const workExperience = [
    {
      name: "CORMEI",
      role: "Desarrollador de Software",
      period: "2025 – Presente",
      description: "Empresa metalmecánica especializada en fabricación y montaje de equipos y plantas industriales para los sectores cementero, minero, energético e industrial. Fundada en 1983.",
      url: "https://www.cormei.com/portal/",
      current: true
    },
    {
      name: "BlackTech Consulting SRL",
      role: "Desarrollador Full Stack · Prácticas",
      period: "2024",
      description: "Desarrollo de soluciones web, optimización de consultas SQL y diseño de endpoints con arquitecturas escalables.",
      url: "https://blacktech.pe",
      current: false
    },
    {
      name: "Estudio Reynoso",
      role: "Asistente de TI & Desarrollo · Prácticas",
      period: "2023 – 2024",
      description: "Automatización de informes con Python y soporte en gestión de infraestructura de bases de datos locales.",
      url: "https://www.estudioreynoso.com",
      current: false
    }
  ];

  // Animaciones Framer Motion (Efectos 3D)
  const containerVariants = {
    hidden: { opacity: 0, rotateY: -10, rotateX: 10, scale: 0.9 },
    visible: { 
      opacity: 1, 
      rotateY: 0, 
      rotateX: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        when: "beforeChildren", 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    hover: { scale: 1.1, rotateZ: 5, z: 10, transition: { duration: 0.2 } }
  };

  const timelineNodeVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.4, delay: 0.2, ease: "backOut" } }
  };

  const currentTimelineNodeVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      boxShadow: [
        "0 0 0 0 rgba(74, 222, 128, 0.7)",
        "0 0 0 10px rgba(74, 222, 128, 0)",
        "0 0 0 0 rgba(74, 222, 128, 0.7)"
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mb-4 flex items-center justify-center sm:px-6 perspective"
    >
      <div
        ref={curriculumRef}
        className="w-[80rem] grid grid-cols-1 md:grid-cols-[220px_1fr] rounded-2xl overflow-hidden border border-white/10 bg-gray-900/90 shadow-2xl transform-style-3d"
      >
        {/* ── SIDEBAR ── */}
        <aside className="bg-gray-800/60 border-b md:border-b-0 md:border-r border-white/10 p-7 flex flex-col gap-7">

          {/* Avatar */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-blue-500/40 flex-shrink-0 shadow-inner-3d">
              <img
                src={ProfileWeb}
                alt="Elser Moises Horna Rimarachin"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Nombre */}
          <motion.div variants={itemVariants} className="text-center space-y-1">
            <h1 className="text-base font-semibold text-white leading-snug">
              Elser Moises Horna Rimarachin
            </h1>
            <p className="text-sm text-gray-400">Desarrollador Full Stack & IA</p>
            <p className="text-xs text-gray-600">Actualizado · Junio 2026</p>
          </motion.div>

          {/* Contacto */}
          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Contacto</p>
            {[
              { icon: <FiMapPin size={13} />, label: contact.location, href: null },
              { icon: <FiMail size={13} />,   label: contact.email,    href: `mailto:${contact.email}` },
              { icon: <FiPhone size={13} />,  label: contact.phone,    href: `tel:${contact.phone}` },
              { icon: <FiGlobe size={13} />,  label: contact.website,  href: `https://${contact.website}` },
            ].map((item, i) => {
              const base = "flex items-center gap-2.5 px-3 py-2 rounded-lg border border-white/8 bg-gray-900/40 text-gray-400 text-xs shadow-md-3d";
              return item.href ? (
                <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={`${base} hover:text-white hover:border-blue-500/40 transition-colors`}>
                  <span className="text-blue-400 flex-shrink-0">{item.icon}</span>
                  <span className="truncate">{item.label}</span>
                </a>
              ) : (
                <div key={i} className={base}>
                  <span className="text-blue-400 flex-shrink-0">{item.icon}</span>
                  <span className="truncate">{item.label}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Habilidades</p>
            <div className="flex flex-wrap gap-1.5 transform-style-3d">
              {skills.map((s, i) => (
                <motion.span
                  key={i}
                  variants={skillVariants}
                  whileHover="hover"
                  className="px-2.5 py-1 text-[11px] rounded-full border border-white/10 bg-gray-900/40 text-gray-400 hover:border-blue-500/40 hover:text-white transition-colors cursor-default shadow-sm-3d translate-z-0 hover:translate-z-10"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </aside>

        {/* ── CONTENIDO PRINCIPAL ── */}
        <main className="p-7 space-y-8">

          {/* Perfil */}
          <motion.section variants={itemVariants}>
            <SectionTitle icon={<FiUser size={14} />} label="Perfil profesional" />
            <p className="text-sm text-gray-400 leading-relaxed">
              Desarrollador Full Stack especializado en <span className="text-blue-400 font-medium">Inteligencia Artificial y Aplicaciones Móviles</span>, egresado de <span className="text-blue-400 font-medium">SENATI</span>.
              Combino tecnologías modernas para construir soluciones robustas multiplataforma de alto impacto, abarcando desde entornos web complejos hasta apps nativas móviles potentes.
            </p>
          </motion.section>

          {/* Lo que hago */}
          <motion.section variants={itemVariants}>
            <SectionTitle icon={<FiSmartphone size={14} />} label="Lo que hago" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 transform-style-3d">
              {whatIDo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  whileHover={{ scale: 1.05, translateZ: 20, boxShadow: "0 10px 30px -10px rgba(96, 165, 250, 0.3)" }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="p-4 rounded-xl border border-white/8 bg-gray-800/40 hover:border-blue-500/30 transition-all cursor-default shadow-lg-3d"
                >
                  <span className="text-blue-400 mb-2.5 block">{item.icon}</span>
                  <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Educación + Prácticas */}
          <motion.section variants={itemVariants}>
            <SectionTitle icon={<FiBook size={14} />} label="Educación & prácticas" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Educación */}
              <motion.div whileHover={{ scale: 1.03 }} className="p-4 rounded-xl border border-white/8 bg-gray-800/40 shadow-lg-3d">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3">Formación académica</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-blue-500/15 text-blue-400">
                    {education.status}
                  </span>
                  <span className="text-xs text-gray-600">· {education.completion}</span>
                </div>
                <p className="text-sm font-semibold text-white mb-0.5">{education.program}</p>
                <p className="text-xs text-gray-500">{education.institution}</p>
              </motion.div>

              {/* Prácticas */}
              <motion.div whileHover={{ scale: 1.03 }} className="p-4 rounded-xl border border-white/8 bg-gray-800/40 shadow-lg-3d">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3">Prácticas pre-profesionales</p>
                <div className="flex flex-wrap gap-2">
                  {practices.map((p, i) => (
                    <a
                      key={i}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs rounded-full border border-white/10 bg-gray-900/40 text-gray-400 hover:border-blue-500/40 hover:text-white transition-colors shadow-sm-3d"
                    >
                      {p.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Experiencia Laboral — Timeline */}
          <motion.section variants={itemVariants}>
            <SectionTitle icon={<FiBriefcase size={14} />} label="Experiencia laboral" />
            <div className="space-y-0 relative pl-4">
              {/* Línea de tiempo 3D */}
              <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-white/8 z-0" />
              
              {workExperience.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex gap-4 group relative"
                >
                  {/* Nodo de línea de tiempo */}
                  <motion.div 
                    variants={job.current ? currentTimelineNodeVariants : timelineNodeVariants}
                    animate={job.current ? "pulse" : "visible"}
                    className={`w-3.5 h-3.5 rounded-full border-2 mt-1 flex-shrink-0 z-10 relative transition-all duration-300 group-hover:scale-110 shadow-node-3d ${
                      job.current
                        ? "border-green-400 bg-green-900/40"
                        : "border-gray-600 bg-gray-900 group-hover:border-blue-400"
                    }`}
                  />

                  {/* Contenido */}
                  <div className={`pb-6 flex-1 ${i === workExperience.length - 1 ? "pb-0" : ""}`}>
                    <div className="flex items-center gap-2.5 flex-wrap mb-1">
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:text-blue-400 transition-colors flex items-center gap-1"
                      >
                        {job.name}
                        <FiExternalLink size={11} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                      </a>
                      {job.current ? (
                        <span className="flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-green-500/10 text-green-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Actual
                        </span>
                      ) : (
                        <span className="text-[10px] text-gray-600 px-2 py-0.5 rounded-full border border-white/8 bg-gray-900/40">
                          {job.period}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-blue-400/80 mb-1.5">{job.role} · {job.period}</p>
                    <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                      {job.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </main>
      </div>
    </motion.div>
  );
};

/* Componente auxiliar para los títulos de sección */
const SectionTitle = ({ icon, label }) => (
  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/8">
    <span className="text-blue-400">{icon}</span>
    <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">{label}</h2>
  </div>
);

export default Curriculum;