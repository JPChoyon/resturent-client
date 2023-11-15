import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    
  
};

export default PrivateRoute;