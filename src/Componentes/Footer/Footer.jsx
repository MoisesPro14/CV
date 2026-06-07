export const Footer = () => {
  return (
    <footer className="w-full pt-4 pb-2 border-t border-white/5 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        {/* Texto de Copyright limpio y elegante */}
        <p className="text-[11px] text-gray-500 font-medium tracking-wider">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-semibold">
            ELSER MOISES HORNA RIMARACHIN
          </span>
          . TODOS LOS DERECHOS RESERVADOS.
        </p>

        {/* Micro-badge de disponibilidad minimalista */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-green-500/10 bg-green-500/5 text-[10px] text-green-400/90 font-semibold tracking-wide uppercase cursor-default">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
          </span>
          Disponible para proyectos
        </div>

      </div>
    </footer>
  );
};

export default Footer;