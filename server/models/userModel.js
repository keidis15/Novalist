import pool from '../dataBase/db.js';

const User = {
    // Crear usuario
    create: async (username, email, hashedPassword) => {
        const query = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING id, username, email, created_at;
        `;
        const values = [username, email, hashedPassword];
        const { rows } = await pool.query(query, values);
        return rows[0];
    },

    // Buscar por email (para el Login)
    findByEmail: async (email) => {
        const query = 'SELECT * FROM users WHERE email = $1';
        const { rows } = await pool.query(query, [email]);
        return rows[0];
    }
    
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findByEmail(email);
        if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: "Contraseña incorrecta" });

        // Aquí generarías tu JWT (ya tienes la base lista)
        const token = jwt.sign({ id: user.id }, 'tu_secreto_aca', { expiresIn: '1h' });
        res.json({ message: "Login exitoso", token, username: user.username });
    } catch (error) {
        res.status(500).json({ error: "Error en el servidor" });
    }
};
export default User;