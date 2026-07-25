import pool from '../dataBase/db.js';

const Inventory = {
    // Agregar producto
    create: async (userId, name, category, stock, price, image_url) => {
        const query = `
            INSERT INTO inventory (user_id, name, category, stock, price, image_url)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `;
        const values = [userId, name, category, stock || 0, price, image_url];
        const { rows } = await pool.query(query, values);
        return rows[0];
    },

    // Obtener todo el inventario del usuario
    getByUser: async (userId) => {
        const query = 'SELECT * FROM inventory WHERE user_id = $1 ORDER BY name ASC';
        const { rows } = await pool.query(query, [userId]);
        return rows;
    },

    // Actualizar stock o precio
    update: async (id, userId, updates) => {
        const { name, category, stock, price } = updates;
        const query = `
            UPDATE inventory 
            SET name = $1, category = $2, stock = $3, price = $4
            WHERE id = $5 AND user_id = $6
            RETURNING *;
        `;
        const values = [name, category, stock, price, id, userId];
        const { rows } = await pool.query(query, values);
        return rows[0];
    },

    // Eliminar producto
    delete: async (id, userId) => {
        const query = 'DELETE FROM inventory WHERE id = $1 AND user_id = $2 RETURNING *';
        const { rows } = await pool.query(query, [id, userId]);
        return rows[0];
    }
};

export default Inventory;