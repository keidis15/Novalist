import pool from '../dataBase/db.js';

const Task = {
    // Crear tarea para el planificador
    create: async (userId, title, task_day, task_time, category, color) => {
        const query = `
            INSERT INTO tasks (user_id, title, task_day, task_time, category, color)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `;
        const values = [userId, title, task_day, task_time, category, color || '#FB8500'];
        const { rows } = await pool.query(query, values);
        return rows[0];
    },

    // Obtener tareas semanales del usuario
    getByUser: async (userId) => {
        const query = `
            SELECT * FROM tasks 
            WHERE user_id = $1 
            ORDER BY 
                CASE 
                    WHEN task_day = 'Lunes' THEN 1
                    WHEN task_day = 'Martes' THEN 2
                    WHEN task_day = 'Miércoles' THEN 3
                    WHEN task_day = 'Jueves' THEN 4
                    WHEN task_day = 'Viernes' THEN 5
                    WHEN task_day = 'Sábado' THEN 6
                    WHEN task_day = 'Domingo' THEN 7
                END, 
                task_time ASC;
        `;
        const { rows } = await pool.query(query, [userId]);
        return rows;
    },

    // Borrar tarea
    delete: async (id, userId) => {
        const query = 'DELETE FROM tasks WHERE id = $1 AND user_id = $2 RETURNING *';
        const { rows } = await pool.query(query, [id, userId]);
        return rows[0];
    }
};

export default Task;