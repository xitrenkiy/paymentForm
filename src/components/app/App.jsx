import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { MainPage } from '../pages';
const Credits = lazy(() => import('../pages/Credits'))

import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';
// import PrivateRoute from '../PrivateRoute/PrivateRoute';

function App() {

	return (
		<Router>
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route path='/' element={<MainPage />} />
					<Route path='/credits' element={<Credits />} />
				</Route>
				<Route path='/registration' element={<RegistrationForm />} />
				<Route path='/login' element={<LoginForm />} />
			</Routes>
		</Router>
	)
}

export default App