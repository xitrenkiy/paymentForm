import { useEffect, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config';

import { MainPage } from '../pages';
const Credits = lazy(() => import('../pages/Credits'))

import { setUser, removeUser } from '../../store/slices/useSlice';

import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				const token = await user.getIdToken();

				dispatch(setUser({
					id: auth.currentUser.uid,
					email: auth.currentUser.email,
					token,
					loading: false
				}))
			} else {
				dispatch(removeUser());
			}
		})

		return () => unsubscribe()
	}, []);

	return (
		<Router>
			<Routes>
				{/*Private Route*/}
				<Route element={<PrivateRoute />}>
					<Route path='/' element={<MainPage />} />
					<Route path='/credits' element={<Credits />} />
				</Route>
				{/*Registration and login*/}
				<Route path='/registration' element={<RegistrationForm />} />
				<Route path='/login' element={<LoginForm />} />
			</Routes>
		</Router>
	)
}

export default App