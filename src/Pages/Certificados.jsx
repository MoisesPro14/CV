import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiZoomIn, FiX, FiFileText, FiAward } from "react-icons/fi";

// Importaciones de imágenes de portada
import Certificado1 from "../assets/Entrepreneurship.png";
import Certificado2 from "../assets/GetConnect.png";
import Certificado3 from "../assets/Introduction-Cybersecurity.png";
import Certificado4 from "../assets/Introduction-IoT.png";
import Certificado5 from "../assets/ConstanciasView.png";
import Certificado6 from "../assets/titulo.png";
import Certificado7 from "../assets/ingles1.png";
import Certificado8 from "../assets/ingles2.png";
import Certificado9 from "../assets/ingles3.png";
import Certificado10 from "../assets/ingles4.png";

// Importaciones de PDFs
import DocumentoMoises from "../assets/TITULO-MOISES.pdf";
import EnglishCert1 from "../assets/CERT-100004_76313561_243256F.pdf";
import EnglishCert4 from "../assets/CERT-100004_76313561_237146F.pdf";
import EnglishCert3 from "../assets/CERT-100004_76313561_237358F.pdf";
import EnglishCert2 from "../assets/CERT-100004_76313561_228477F.pdf";

const certificadosData = [
  { id: 1,  title: "Título Oficial",                       subtitle: "SENATI",                    imageSrc: Certificado6,  pdfSrc: DocumentoMoises, type: "pdf"      },
  { id: 6,  title: "Constancia de Prácticas",              subtitle: "BlackTech Consultores",     imageSrc: Certificado5,  pdfSrc: null,            type: "document" },
  { id: 7,  title: "Inglés Nivel 1",                       subtitle: "Idioma Extranjero",         imageSrc: Certificado7,  pdfSrc: EnglishCert1,    type: "english"  },
  { id: 8,  title: "Inglés Nivel 2",                       subtitle: "Idioma Extranjero",         imageSrc: Certificado8,  pdfSrc: EnglishCert2,    type: "english"  },
  { id: 9,  title: "Inglés Nivel 3",                       subtitle: "Idioma Extranjero",         imageSrc: Certificado9,  pdfSrc: EnglishCert3,    type: "english"  },
  { id: 10, title: "Inglés Nivel 4",                       subtitle: "Idioma Extranjero",         imageSrc: Certificado10, pdfSrc: EnglishCert4,    type: "english"  },
  { id: 2,  title: "Introduction to Cybersecurity",        subtitle: "Cisco Networking Academy",  imageSrc: Certificado3,  pdfSrc: null,            type: "cisco"    },
  { id: 3,  title: "Entrepreneurship",                     subtitle: "Cisco Networking Academy",  imageSrc: Certificado1,  pdfSrc: null,            type: "cisco"    },
  { id: 4,  title: "Introduction to IoT",                  subtitle: "Cisco Networking Academy",  imageSrc: Certificado4,  pdfSrc: null,            type: "cisco"    },
  { id: 5,  title: "Get Connected",                        subtitle: "Cisco Networking Academy",  imageSrc: Certificado2,  pdfSrc: null,            type: "cisco"    },
];

const TYPE_CONFIG = {
  pdf:      { label: "PDF Oficial",  color: "bg-red-500/15 text-red-400 border-red-500/20"     },
  document: { label: "Constancia",   color: "bg-blue-500/15 text-blue-400 border-blue-500/20"  },
  english:  { label: "Inglés",       color: "bg-purple-500/15 text-purple-400 border-purple-500/20" },
  cisco:    { label: "Cisco",        color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20" },
};

export const Certificados = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selected]);

  return (
    <div className="w-full min-h-screen px-2 sm:px-6 md:px-10 py-6 md:py-12">


      {/* ── MOBILE: lista vertical tipo "feed" ── */}
      <div className="flex flex-col gap-3 sm:hidden">
        {certificadosData.map((cert, i) => {
          const cfg = TYPE_CONFIG[cert.type];
          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              onClick={() => setSelected(cert)}
              className="flex items-center gap-3 p-3 rounded-2xl
                         bg-white/[0.03] border border-white/[0.07]
                         active:scale-[0.98] transition-transform cursor-pointer"
            >
              {/* Miniatura */}
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-900">
                <img
                  src={cert.imageSrc}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-semibold truncate">{cert.title}</p>
                <p className="text-white/40 text-xs mt-0.5 truncate">{cert.subtitle}</p>
                <span className={`inline-block mt-1.5 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${cfg.color}`}>
                  {cfg.label}
                </span>
              </div>

              {/* Chevron */}
              <div className="text-white/20 flex-shrink-0">
                <FiZoomIn className="text-lg" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── TABLET / DESKTOP: grid de cards ── */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7">
        {certificadosData.map((cert, i) => {
          const cfg = TYPE_CONFIG[cert.type];
          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.18 } }}
              onClick={() => setSelected(cert)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer
                         bg-white/[0.03] border border-white/[0.07]
                         hover:border-indigo-500/40 transition-colors duration-300 flex flex-col"
            >
              {/* Imagen */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-950">
                <img
                  src={cert.imageSrc}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Badge tipo */}
                <span className={`absolute top-2.5 left-2.5 z-10 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border backdrop-blur-sm ${cfg.color}`}>
                  {cfg.label}
                </span>

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex flex-col items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                    <FiZoomIn className="text-lg" />
                  </div>
                  <span className="text-white text-xs font-medium">
                    {cert.pdfSrc ? "Ver PDF" : "Ver imagen"}
                  </span>
                </div>
              </div>

              {/* Texto */}
              <div className="p-4 flex flex-col gap-0.5 flex-grow">
                <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2 group-hover:text-indigo-400 transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-white/35 text-xs font-medium tracking-wide mt-1">
                  {cert.subtitle}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-3 mt-16 sm:p-6"
            onClick={() => setSelected(null)}
          >

            <motion.div
              initial={{ scale: 0.95, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 12 }}
              transition={{ type: "spring", stiffness: 340, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl flex flex-col
                         bg-[#0d1427] rounded-2xl border border-white/[0.08]
                         overflow-hidden shadow-2xl"
              style={{ maxHeight: "88vh" }}
            >
              {/* Visor */}
              <div className="flex-1 bg-slate-950 flex items-center justify-center overflow-hidden" style={{ minHeight: 0 }}>
                {selected.pdfSrc ? (
                  <iframe
                    src={`${selected.pdfSrc}#toolbar=0`}
                    title={selected.title}
                    className="w-full border-none bg-white"
                    style={{ height: "65vh" }}
                  />
                ) : (
                  <img
                    src={selected.imageSrc}
                    alt={selected.title}
                    className="w-full h-full object-contain p-3"
                    style={{ maxHeight: "65vh" }}
                  />
                )}
              </div>

              {/* Footer del lightbox */}
              <div className="flex items-center gap-3 px-4 sm:px-5 py-3.5 border-t border-white/[0.07] bg-[#0d1427]">
                <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex-shrink-0">
                  <FiFileText className="text-indigo-400 text-base" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm truncate">{selected.title}</p>
                  <p className="text-white/35 text-xs truncate">{selected.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="flex-shrink-0 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] text-white/70 hover:text-white text-xs font-medium transition-all"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificados;