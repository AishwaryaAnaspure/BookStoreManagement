import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ childern }) => {
    const [user, setUser] = useState(null);
    const login = (username, password) => {
        if (username === "admin" && password === "password123") {
            setUser({ username });
            navigate("/books");
        }
        else {
            alert("Invalid credentials");
        }
    };
    const logout = () => {
        setUser(null);
        navigate("/login");
    };
    return (
        <AuthContext.Provider 
        value = {{ user, login, logout }}>
                     {childern}
        </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);