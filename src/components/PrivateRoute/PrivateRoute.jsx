import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { Loader } from "../Loader/Loader";

const PrivateRoute = () => {
	const { token, loading } = useSelector(state => state.user);

	if (loading) {
		return <Loader />
	}

	if (!token) {
		return <Navigate to='/registration' replace />
	}

	return <Outlet />;
}

export default PrivateRoute;