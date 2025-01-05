

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white rounded-b-lg py-4 mt-8">
        <div className="max-w-7xl mx-auto text-center ">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Elser Moises Horna Rimarachin. Todos los derechos reservados.
            </p>
        </div>
    </footer>
  );
}

export default Footer;
