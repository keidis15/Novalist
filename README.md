# NovaList — Sistema de Gestión Modular Fullstack

**NovaList** es una aplicación web fullstack diseñada para la gestión integral y modular de tareas, notas personales y finanzas. Construida con una arquitectura desacoplada, moderna y segura.

---

## Tecnologías Utilizadas

### **Frontend**
* **React.js** (Vite)
* **React Router DOM v6** (Enrutamiento y vistas protegidas)
* **Axios** (Peticiones HTTP e interceptores JWT)
* **Context API** (Gestión de estado global: Auth, Finanzas, Tareas)
* **Bootstrap / CSS3** (Diseño responsive y moderno)

### **Backend**
* **Node.js** & **Express.js** (Arquitectura REST API en ES Modules)
* **JSON Web Tokens (JWT)** (Autenticación y sesiones seguras)
* **Bcrypt.js** (Hasheo y encriptación de contraseñas)
* **CORS & Dotenv** (Seguridad y manejo de variables de entorno)

### **Base de Datos**
* **PostgreSQL** (Alojado en Serverless **Neon**)
* **pg (node-postgres)** (Pool de conexiones)

---

## Características Principales

* **Autenticación Completa:** Registro de usuarios, inicio de sesión e inyección automática del token JWT mediante interceptores de Axios.
* **Seguridad:** Rutas protegidas en Frontend y Middlewares de autorización en Express. Contraseñas encriptadas con `bcrypt`.
* **Arquitectura Modular:** Separación clara de responsabilidades con `AuthContext`, `NotesContext` y `FinanceContext`.
* **Persistencia en la Nube:** Conexión directa a PostgreSQL hospedado en la nube con Neon.

---

##  Estructura del Proyecto

```text
novaList/
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── api/            # Configuración de Axios e Interceptores
│   │   ├── components/     # Componentes reutilizables (Navbar, Footer, etc.)
│   │   ├── context/        # Estado Global (AuthContext, NotesContext, etc.)
│   │   ├── views/          # Pantallas principales (Home, Login, Register, Perfil)
│   │   ├── App.jsx         # Enrutamiento de la aplicación
│   │   └── main.jsx        # Punto de entrada de React
│   └── package.json
│
└── server/                 # Backend (Node.js + Express)
    ├── dataBase/           # Conexión a PostgreSQL (Neon Pool)
    ├── middleware/         # Middlewares (verificación de token JWT)
    ├── routes/             # Rutas API (/api/users, /api/notes, etc.)
    ├── app.js              # Servidor Express principal
    └── package.json
```

## Instalación y Configuración Local
1. Clonar el repositorio
git clone [](https://github.com/keidis15/Novalist)]
cd novaList

2. Configurar el Backend (server)
cd server
npm install

- Crea un archivo .env dentro de la carpeta server con las siguientes variables:
PORT=3000
DATABASE_URL=postgres://tu_usuario:tu_password
JWT_SECRET=tu_clave_secreta_super_segura

- Inicia el servidor en modo desarrollo:
npm run dev

3. Configurar el Frontend (client)
Abre una nueva terminal:
cd client
npm install

- Crea un archivo .env dentro de la carpeta client:
VITE_API_URL=http://localhost:3000

- Inicia el cliente en modo desarrollo:
npm run dev

## Autora
Keidi — Developer Fullstack
