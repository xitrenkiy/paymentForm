import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setUser } from '../../store/slices/useSlice';
//navigate('/')
import Form from '../Form/Form';

const RegistrationForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleRegister = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => dispatch(setUser({
				id: user.uid,
				email: user.email,
				token: user.accessToken,
			})))
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