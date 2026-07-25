import pool from '../dataBase/db.js';

const Transaction = {
    // Registrar un movimiento
    create: async (userId, concept, amount, type, date) => {
        const query = `
            INSERT INTO transactions (user_id, concept, amount, transaction_type, transaction_date)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
        const values = [userId, concept, amount, type, date || new Date()];
        const { rows } = await pool.query(query, values);
        return rows[0];
    },

    // Obtener historial completo del usuario
    getByUser: async (userId) => {
        const query = 'SELECT * FROM transactions WHERE user_id = $1 ORDER BY transaction_date DESC';
        const { rows } = await pool.query(query, [userId]);
        return rows;
    },

    // Obtener resumen para el gráfico (Total ingresos vs egresos)
    getSummary: async (userId) => {
        const query = `
            SELECT transaction_type as name, SUM(amount) as value 
            FROM transactions 
            WHERE user_id = $1 
            GROUP BY transaction_type;
        `;
        const { rows } = await pool.query(query, [userId]);
        return rows;
    }
};

export default Transaction;