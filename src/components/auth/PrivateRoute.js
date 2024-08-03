import { useSelector } from "react-redux";
import Login from "./Login";

const PrivateRoute = ({ children }) => {
  const user = useSelector((store) => store.user);

  return <>{user ? children : <Login />}</>;
};

export default PrivateRoute;
