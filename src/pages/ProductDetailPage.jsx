// ProductDetailPage.jsx - Versión que nunca muestra "Producto no encontrado"

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductDetailPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, [navigate]);
  return null;
}

export default ProductDetailPage;
