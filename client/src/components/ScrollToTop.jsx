import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Mueve el scroll al inicio de forma instantánea
    window.scrollTo(0, 0);
  }, [pathname]); // Se ejecuta cada vez que 'pathname' (la URL) cambia

  return null;
};

export default ScrollToTop;
