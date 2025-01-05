import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contacto = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [enviando, setEnviando] = useState(false);

    const Clear = () => {
        setNombre("");
        setCorreo("");
        setMensaje("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombre || !correo || !mensaje) {
            toast.error("Todos los campos son requeridos");
            return;
        }

        setEnviando(true); 

        // Desactivamos temporalmente la integración con emailjs
        /*
        const serviceId = "service_kw18uuc"; // Reemplaza con tu ID de servicio de EmailJS
        const templateId = "template_rafv9hl"; // Reemplaza con tu ID de plantilla de EmailJS
        const publicKey = "BPZlAh-cV1DCiUC9P"; // Reemplaza con tu clave pública de EmailJS

        try {
            const response = await emailjs.sendForm(
                serviceId,
                templateId,
                e.target, 
                publicKey
            );

            if (response.status === 200) {
                Clear();
                toast.success("Formulario enviado correctamente");
            } else {
                toast.error("Error al enviar el formulario. Intente nuevamente más tarde.");
            }
        } catch (error) {
            console.error("Error al enviar el correo:", error);
            toast.error("Error al enviar el formulario. Intente nuevamente más tarde.");
        }
        */
        
        // Simulación de éxito (sin emailjs)
        toast.success("Formulario enviado correctamente");

        // Limpiar los campos
        Clear();

        setEnviando(false); 
    };

    return (
        <>
            <form
                className="flex flex-col items-center justify-center space-y-7 p-6 mt-12 bg-gray-600 rounded-lg shadow-2xl max-w-md mx-auto transform transition-transform"
                onSubmit={handleSubmit}>

                <div className="w-full pb-5">
                    <label htmlFor="nombre" className="block pb-1 text-sm font-medium text-teal-400">
                        Nombre Completo
                    </label>
                    <input
                        type="text" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-slate-200 border border-none rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition-all transform"
                        required
                    />
                </div>

                <div className="w-full pb-5">
                    <label htmlFor="correo" className="block pb-1 text-sm font-medium text-teal-400">
                        Correo Electrónico                 
                    </label>
                    <input type="email" name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-slate-200 border border-none rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition-all transform"
                        required 
                    />
                </div>

                <div className="w-full pb-5">
                    <label htmlFor="mensaje" className="block pb-1 text-sm font-medium text-teal-400">
                        Motivo de Contacto o Mensaje
                    </label>
                    <textarea name="mensaje" value={mensaje}  onChange={(e) => setMensaje(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-slate-200 border border-none rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition-all transform"
                        required 
                    />
                </div>

                <button  type="submit" disabled={enviando} 
                    className={`px-8 py-2 font-medium bg-cyan-600 text-white rounded-lg shadow-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transform transition-all ${enviando ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    {enviando ? "Enviando..." : "Enviar"} 
                </button>
            </form>

            <ToastContainer
                position="top-right"
                autoClose={5000} 
                draggable
                style={{
                    marginTop: "90px",
                    marginRight: "20px",
                    zIndex: 9999,
                }}
            />
        </>
    );
};

export default Contacto;
