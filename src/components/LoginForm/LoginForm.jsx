import Form from "../Form/Form";

import { auth } from "../../config";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setUser } from "../../store/slices/useSlice";

const LoginForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => dispatch(setUser({
				id: user.uid,
				email: user.email,
				token: user.accessToken
			})))
			.then(navigate('/'))
	}

	return (
		<Form
			title={'Login'}
			handleClick={handleLogin}
			isRegister={false}
		/>
	)
}

export default LoginForm;