import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = ({ isAllowed, redirectPath = "/landing", children }) => {
  if (!isAllowed) {
    return <Navigate to="/Login" replace />;
  }

  return children ? children : <Outlet />;
};
export default ProtectedRoute;
