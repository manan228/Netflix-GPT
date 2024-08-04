import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (location.pathname === "/login" && user) navigate("/browse");
  });

  return <>{user ? children : <Login />}</>;
};

export default PrivateRoute;
