import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PaymentForm from '../PaymentForm/PaymentForm.jsx'
import { CreditsMenu } from '../CreditsMenu/CreditsMenu.jsx'

function App() {

	return (
		<Router>
			<Routes>
				<Route path='/' element={<PaymentForm />} />
				<Route path='/credits' element={<CreditsMenu />} />
			</Routes>
		</Router>
	)
}

export default App