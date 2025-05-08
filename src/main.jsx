import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import Rutas from "./Rutes/Rutas"


createRoot(document.getElementById('root')).render(
	<StrictMode>
		<HashRouter>
			<Rutas/>
		</HashRouter>	
	</StrictMode>,
)
