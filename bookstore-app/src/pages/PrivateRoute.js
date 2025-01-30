import { Navigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";
import { Children } from "react";

const PrivateRoute = ({ Children}) => {
    const { user } = userAuth();
    return user ? Children : <Navigate to="/login" />;
};
export default PrivateRoute;
