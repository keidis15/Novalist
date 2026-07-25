import pool from '../dataBase/db.js';
const Note = {
    // Crear nota vinculada al UUID del token
    create: async (userId, title, content, color) => {
        const query = `
            INSERT INTO notes (user_id, title, content, color)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const values = [userId, title, content, color || '#FFF9C4'];
        const { rows } = await pool.query(query, values);
        return rows[0];
    },

    // Obtener SOLO las notas del usuario autenticado
    getByUser: async (userId) => {
        const query = 'SELECT * FROM notes WHERE user_id = $1 ORDER BY updated_at DESC';
        const { rows } = await pool.query(query, [userId]);
        return rows;
    },

    // Eliminar una nota (verificando propiedad)
    delete: async (id, userId) => {
        const query = 'DELETE FROM notes WHERE id = $1 AND user_id = $2 RETURNING *';
        const { rows } = await pool.query(query, [id, userId]);
        return rows[0];
    }
};

export default Note;