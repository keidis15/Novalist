import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Footer from "./components/Footer";
import About from "./views/About";
import Contact from "./views/Contact";
import Planificador from "./components/Planificador";
import Notas from "./components/Notas";
import Finanzas from "./components/Finanzas";
import Inventario from "./components/Inventario";
import Login from "./views/Login";
import Register from "./views/Register";
import Perfil from "./views/Perfil";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/planificador" element={<Planificador />} />
          <Route path="/note" element={<Notas />} />
          <Route path="/finance" element={<Finanzas />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/profile" element={<Perfil />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
