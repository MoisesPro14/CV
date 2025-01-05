
export const Proyectos = () => {
	return (
		<div className="flex justify-center items-center">
			<div className="flex flex-col bg-white shadow-lg rounded-lg p-6 w-full max-w-7xl">

				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
					
					<div className="bg-gray-100 p-4 h-48 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold">Proyecto 1</h3>
						<p className="text-gray-600">Descripción del proyecto 1.</p>
					</div>

					{/* Card 2 */}
					<div className="bg-gray-100 p-4 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold">Proyecto 2</h3>
						<p className="text-gray-600">Descripción del proyecto 2.</p>
					</div>

					{/* Card 3 */}
					<div className="bg-gray-100 p-4 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold">Proyecto 3</h3>
						<p className="text-gray-600">Descripción del proyecto 3.</p>
					</div>

					{/* Card 4 */}
					<div className="bg-gray-100 p-4 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold">Proyecto 4</h3>
						<p className="text-gray-600">Descripción del proyecto 4.</p>
					</div>

					
				</div>

			</div>
		</div>
	);
  };
  
  export default Proyectos;
  