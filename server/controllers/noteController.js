import Note from "../models/noteModel.js";

const getUserNotes = async (req, res) => {
    try {
        // req.user viene del middleware de autenticación
        const notes = await Note.getByUser(req.user.id);
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las notas" });
    }
};

const createNote = async (req, res) => {
    const { title, content, color } = req.body;
    try {
        const newNote = await Note.create(req.user.id, title, content, color);
        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({ error: "Error al crear la nota" });
    }
};

const deleteNote = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Note.delete(id, req.user.id);
        if (!deleted) return res.status(404).json({ error: "Nota no encontrada o no autorizada" });
        res.json({ message: "Nota eliminada con éxito" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar la nota" });
    }
};

export default { getUserNotes, createNote, deleteNote };