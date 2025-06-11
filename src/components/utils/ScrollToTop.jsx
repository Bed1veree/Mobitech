import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Siempre desplazarse hasta arriba cuando cambie la ruta
    window.scrollTo(0, 0);
  }, [pathname]); // Ejecutar cuando cambie la ruta

  return null; // Este componente no renderiza nada
};

export default ScrollToTop;
