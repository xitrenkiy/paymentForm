import { auth } from "../../config";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
	// const { accessToken } = auth;
	const { token } = useSelector(state => state.user);
	console.log(token);

	if (!token) {
		return <Navigate to='/registration' replace />
	}

	return children ? children : <Outlet />;
}
export default PrivateRoute;