import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {

    const { admin, loading } = useAuth();

    if (loading) {

        return <h2>Loading...</h2>;

    }

    return admin ? children : <Navigate to="/login" replace />;

};

export default ProtectedRoute;