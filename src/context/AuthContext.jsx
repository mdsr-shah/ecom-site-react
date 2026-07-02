import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const token = localStorage.getItem("token");
        const adminData = localStorage.getItem("admin");

        if (token && adminData) {
            setAdmin(JSON.parse(adminData));
        }

        setLoading(false);

    }, []);

    const loginAdmin = (token, admin) => {

        localStorage.setItem("token", token);
        localStorage.setItem("admin", JSON.stringify(admin));

        setAdmin(admin);

    };

    const logoutAdmin = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("admin");

        setAdmin(null);

    };

    return (
        <AuthContext.Provider
            value={{
                admin,
                loading,
                loginAdmin,
                logoutAdmin
            }}
        >
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);