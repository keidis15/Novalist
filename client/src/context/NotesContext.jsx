//Notas
import React, { createContext, useState, useContext } from 'react';
import api from '../api/axios';
import { API_URL } from "../api/axios.js";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);

    // Obtener notas del backend
    const fetchNotes = async () => {
        setLoading(true);
        try {
            const response = await api.get(`${API_URL}/notes`);
            setNotes(response.data);
        } catch (error) {
            console.error("Error al traer notas", error);
        } finally {
            setLoading(false);
        }
    };

    // Agregar una nota
    const addNote = async (noteData) => {
        try {
            const response = await api.post('/notes', noteData);
            setNotes([response.data, ...notes]); // Actualizamos el estado local
        } catch (error) {
            console.error("Error al crear nota", error);
        }
    };

    // Eliminar una nota
    const deleteNote = async (id) => {
        try {
            await api.delete(`/notes/${id}`);
            setNotes(notes.filter(note => note.id !== id));
        } catch (error) {
            console.error("Error al borrar nota", error);
        }
    };

    return (
        <NotesContext.Provider value={{ notes, loading, fetchNotes, addNote, deleteNote }}>
            {children}
        </NotesContext.Provider>
    );
};

// Hook personalizado para usar el contexto más fácil
export const useNotes = () => useContext(NotesContext);