import { Navigate, Outlet } from "react-router-dom";

const SecurityRouter = () => {
  const authToken = sessionStorage.getItem('auth-token');
  return authToken ? <Outlet /> : <Navigate to="/" replace />;
}

export default SecurityRouter
