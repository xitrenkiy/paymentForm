import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../../config';
import { collection, addDoc } from "firebase/firestore";

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setUser, startLoading } from '../../store/slices/useSlice';

import Form from '../Form/Form';

const RegistrationForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleRegister = async (email, password, name) => {
		dispatch(startLoading());
		await createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				try {
					addDoc(collection(db, 'users'), {
						id: user.uid,
						name,
						credits: 1000
					})
					dispatch(setUser({
						id: user.uid,
						email: user.email,
						token: user.accessToken,
					}))
				} catch (error) {
					console.log('Error', e);
				}
			})
			.then(navigate('/'))
	}

	return (
		<Form
			title='Register'
			handleClick={handleRegister}
		/>
	)

}

export default RegistrationForm;