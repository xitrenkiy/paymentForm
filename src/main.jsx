import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import PaymentFormMyVariant from './PaymentForm.jsx'
import PaymentFormMyVariantJJJ from './jbc.jsx'
import { CreditsMenu } from './CreditsMenu.jsx'

createRoot(document.getElementById('root')).render(
	<Router>
		<Routes>
			<Route path='/' element={<PaymentFormMyVariant />} />
			<Route path='/credits' element={<CreditsMenu />} />
		</Routes>
	</Router>,
)
