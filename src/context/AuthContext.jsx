import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [permissions, setPermissions] = useState([]);

    const login = (userData) => {
        setUser(userData);
        setPermissions(userData.permissions);
    };

    const logout = () => {
        setUser(null);
        setPermissions([]);
    };

    const isAuthorized = (requiredPermission) => {
        return permissions.includes(requiredPermission);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthorized }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};