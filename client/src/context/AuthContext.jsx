//Login y token

import React, { createContext, useState, useContext, useEffect } from "react";
import client from "../api/axios"; // Importamos nuestra conexión
import { API_URL } from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null); // Estado global del token
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token"),
  );

  //validacion al servidor
  useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem("token");
      if (!token) return setLoading(false);

      try {
        // Al usar 'client', el interceptor que ya creaste inyecta el token
        const res = await client.get("/api/users/verify");

        // IMPORTANTE: Verifica qué trae 'res.data'
        if (res.data) {
          setUser(res.data); // Aquí 'user' dejará de ser null
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error validando sesión:", error);
        logout(); // Si el token no sirve, limpiamos todo
      } finally {
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  // Función de Login
  const login = async (email, password) => {
    try {
      const { data } = await client.post("/api/users/login", {
        email,
        password,
      });

      // Guardamos en persistencia y en estado global
      localStorage.setItem("token", data.token);
      setToken(data.token); // <--- Ahora es global

      setUser(data.user);
      setIsAuthenticated(true);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data?.error };
    }
  };

  const logout = () => {
    localStorage.clear();
    setToken(null); // Limpiamos estado global
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, loading, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
