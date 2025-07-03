import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config";
import { useEffect } from "react";
import { setUser, removeUser } from "../store/slices/useSlice";
import { useDispatch } from "react-redux";

const useAuth = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(setUser({
					id: auth.currentUser.uid,
					email: auth.currentUser.email,
					token: auth.currentUser.accessToken
				}))
			} else {
				dispatch(removeUser())
			}
		})

		return () => unsubscribe()
	}, [])

}

export default useAuth;