import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rutas from './Rutes/Rutas'


createRoot(document.getElementById('root')).render(
	<StrictMode>	
		<Rutas/>
	</StrictMode>,
)
