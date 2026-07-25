import axios from 'axios';

// 1. Definimos la URL Base
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const client = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// 2. Interceptor: El "Portero" de tus peticiones
// Este código se ejecuta ANTES de que la petición salga al servidor
client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            // Inyectamos el token en las cabeceras (Ciberseguridad)
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default client;