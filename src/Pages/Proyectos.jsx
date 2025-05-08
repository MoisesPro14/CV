import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaReact, FaMicrosoft, FaDatabase, FaExternalLinkAlt, FaSpinner, FaTimes } from 'react-icons/fa';


const VIDEO_PREVIEW_URL = 'https://drive.google.com/file/d/1wE8b0-FtoaM92XUkXLjytFtqdTic1fZf/preview';

const Modal = ({ children, onClose }) => {
	return ReactDOM.createPortal(
		<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70">
			<div className="relative bg-white rounded-2xl overflow-hidden max-w-3xl w-full">
				<button
				onClick={onClose}
				className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 z-10"
				>
				<FaTimes size={24} />
				</button>
				{children}
			</div>
		</div>,
		document.body
	);
};

const Proyectos = () => {

	const [loading, setLoading] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);
	const [showVideo, setShowVideo] = useState(false);

	const handleDemoClick = async (projectName) => {
		setLoading(true);
		setSelectedProject(projectName);
		await new Promise((res) => setTimeout(res, 1500));
		setLoading(false);
		setShowVideo(true);
	};

	const closeModal = () => {
		setShowVideo(false);
		setSelectedProject(null);
	};

	return (
		<div className="min-h-screen mb-12 px-4">
			<div className="max-w-7xl mx-auto space-y-16">
				{/* Sección en Producción */}
				<section>
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
						<span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
						Próximos Lanzamientos
						</span>
					</h2>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{/* Proyecto Restaurante */}
						<div className="relative group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 border-2 border-emerald-100 overflow-hidden">
							<div className="p-8 flex flex-col items-center">
								<div className="mb-6 bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-2xl">
									<span className="text-4xl">🍽️</span>
								</div>
								<h3 className="text-2xl font-bold text-gray-800 mb-3">
								Sistema Restaurante FullStack
								</h3>
								<div className="mb-8 flex gap-3 flex-wrap justify-center">
									<span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full flex items-center">
										<FaReact className="mr-2" /> React.js
									</span>
									<span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full flex items-center">
										<FaMicrosoft className="mr-2" /> ASP.NET Core
									</span>
									<span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full flex items-center">
										<FaDatabase className="mr-2" /> SQL Server
									</span>
								</div>
								<button
								onClick={() => handleDemoClick('Sistema Restaurante')}
								disabled={loading}
								className="flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-1 rounded-lg transition-all duration-300 w-40"
								>
								{loading && selectedProject === 'Sistema Restaurante' ? (
									<FaSpinner className="animate-spin" />
								) : (
									<>
									<FaExternalLinkAlt className="mr-2" />
									Ver Demo
									</>
								)}
								</button>
							</div>
							<div className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600">
								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold text-white">
										Fase de Producción
									</span>
									<div className="flex items-center">
										<span className="text-xs font-medium text-white bg-black bg-opacity-20 px-2 py-1 rounded-full flex items-center">
										<span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse" />
										Preparando deploy
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Detalles Técnicos */}
						<div className="bg-white rounded-2xl p-8 border-2 border-emerald-100 shadow-xl">
							<h3 className="text-2xl font-bold text-gray-800 mb-6">Estado Actual</h3>
							<div className="space-y-4">
								{/* Items */}
								<div className="flex items-start">
									<div className="bg-emerald-100 p-2 rounded-lg mr-4">
										<span className="text-xl text-emerald-600">✅</span>
									</div>
									<div>
										<h4 className="font-semibold text-gray-800">Pruebas Finales</h4>
										<p className="text-sm text-gray-600">Testing de carga completado</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="bg-emerald-100 p-2 rounded-lg mr-4">
										<span className="text-xl text-emerald-600">🔧</span>
									</div>
									<div>
										<h4 className="font-semibold text-gray-800">Optimización</h4>
										<p className="text-sm text-gray-600">Ajustes finales de rendimiento</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="bg-emerald-100 p-2 rounded-lg mr-4">
										<span className="text-xl text-emerald-600">🚀</span>
									</div>
									<div>
										<h4 className="font-semibold text-gray-800">Despliegue</h4>
										<p className="text-sm text-gray-600">Configuración de servidores lista</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Sección en Desarrollo */}
				<section>
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
						<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
						En Desarrollo
						</span>
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{[1, 2, 3].map((_, index) => (
						<div
							key={index}
							className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
						>
							<div className="mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-full w-max mx-auto">
								<span className="text-2xl">🚧</span>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
							Proyecto {index + 1}
							</h3>
							<p className="text-gray-600 text-center text-sm mb-4">
							Descripción breve del proyecto
							</p>
							<div className="h-2 bg-gray-100 rounded-full mb-4">
								<div
									className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transition-all duration-500"
									style={{ width: `${Math.random() * 40 + 30}%` }}
								/>
							</div>
							<div className="text-center text-xs text-gray-500">
								{Math.floor(Math.random() * 40 + 30)}% completado
							</div>
						</div>
						))}
					</div>
				</section>

				{/* Modal */}
				{showVideo && (
					<Modal onClose={closeModal}>
						{/* Usar <iframe> en lugar de <video> para evitar bloqueos de cookies/CORS */}
						<div className="w-full h-[60vh]">
							<iframe
								title="Demo Restaurante"
								src={VIDEO_PREVIEW_URL}
								allow="autoplay; encrypted-media"
								allowFullScreen
								className="w-full h-full"
							/>
						</div>
					</Modal>
				)}
				
			</div>
		</div>
	);
};

export default Proyectos;