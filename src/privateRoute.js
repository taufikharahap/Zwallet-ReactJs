import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((s) => s.users);
  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
