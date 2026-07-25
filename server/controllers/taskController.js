import Task from "../models/taskModel.js";
const getUserTasks = async (req, res) => {
    try {
        const tasks = await Task.getByUser(req.user.id);
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Error al cargar el planificador" });
    }
};

const createTask = async (req, res) => {
    const { title, task_day, task_time, category, color } = req.body;
    try {
        const newTask = await Task.create(req.user.id, title, task_day, task_time, category, color);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: "Error al agendar la tarea" });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Task.delete(id, req.user.id);
        if (!deleted) return res.status(404).json({ error: "Tarea no encontrada" });
        res.json({ message: "Tarea eliminada" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar la tarea" });
    }
};

export default{ getUserTasks, createTask, deleteTask };