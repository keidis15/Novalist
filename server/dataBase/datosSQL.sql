-- 1. Usuarios (ID ahora es UUID)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Planificador
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(100) NOT NULL,
    task_day VARCHAR(20) NOT NULL,
    task_time TIME,
    category VARCHAR(50),
    color VARCHAR(7) DEFAULT '#FB8500'
);

-- 3. Notas
CREATE TABLE notes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(100) NOT NULL,
    content TEXT,
    color VARCHAR(7) DEFAULT '#FFF9C4',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Finanzas
CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    concept VARCHAR(150) NOT NULL,
    amount DECIMAL(15, 2) NOT NULL,
    transaction_type VARCHAR(10) CHECK (transaction_type IN ('ingreso', 'egreso')),
    transaction_date DATE DEFAULT CURRENT_DATE
);

-- 5. Inventario
CREATE TABLE inventory (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    stock INTEGER DEFAULT 0,
    price DECIMAL(15, 2) NOT NULL,
    image_url TEXT
);

-- 1. Insertamos un usuario y obtenemos su ID
-- Nota: Al usar DEFAULT uuid_generate_v4(), no necesitamos pasar el ID
INSERT INTO users (username, email, password) 
VALUES ('marcos_dev', 'marcos@novalist.com', 'hash_seguro_de_prueba')
RETURNING id; 

-- COPIA EL ID QUE TE DEVUELVA LA CONSULTA ANTERIOR
-- Supongamos que el ID es: '550e8400-e29b-41d4-a716-446655440000'

-- 2. Insertamos una Tarea (Planificador)
INSERT INTO tasks (user_id, title, task_day, task_time, category, color)
VALUES ('a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6', 'Despliegue de Backend', 'Lunes', '09:00:00', 'Desarrollo', '#FB8500');

-- 3. Insertamos una Nota
INSERT INTO notes (user_id, title, content, color)
VALUES ('a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6', 'Pendientes Ciberseguridad', 'Revisar las cabeceras de seguridad de Express (Helmet).', '#E1F5FE');

-- 4. Insertamos transacciones (Finanzas) para el gráfico
INSERT INTO transactions (user_id, concept, amount, transaction_type)
VALUES 
('a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6', 'Suscripción AWS', 25.50, 'egreso'),
('a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6', 'Pago Cliente App', 500.00, 'ingreso');

-- 5. Insertamos un producto (Inventario)
INSERT INTO inventory (user_id, name, category, stock, price)
VALUES ('a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6', 'Monitor UltraWide', 'Hardware', 10, 350.99);