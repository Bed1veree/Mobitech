// ProductDetail.jsx - Versión simplificada
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ProductDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  
  // Función para formatear el precio en formato de moneda
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  // Función para manejar la adición al carrito
  const handleAddToCart = () => {
    addToCart(product);
  };

  // Función para manejar la compra directa
  const handleBuyNow = () => {
    handleAddToCart();
    // Aquí se podría redirigir al checkout
    // navigate('/checkout');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagen del producto */}
          <div className="flex justify-center items-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-w-full h-auto object-contain"
              style={{ maxHeight: '450px' }}
            />
          </div>

          {/* Información del producto */}
          <div>
            {/* Stock */}
            {product.stock && (
              <div className="mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <span className="mr-1">•</span>
                  En stock: {product.stock} unidades
                </span>
              </div>
            )}

            {/* Nombre y precio */}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-2xl text-blue-600 font-semibold mb-4">
              {formatPrice(product.price)}
            </p>

            {/* Descripción */}
            <div className="mb-6">
              <h2 className="text-sm font-medium text-gray-500 mb-1">Descripción</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Características principales */}
            {product.specs && (
              <div className="mb-6">
                <h2 className="text-sm font-medium text-gray-500 mb-2">Especificaciones:</h2>
                <div className="space-y-2">
                  {Object.entries(product.specs)
                    .slice(0, 6) // Limitamos a las 6 primeras especificaciones
                    .map(([key, value]) => (
                      <div key={key} className="py-1">
                        <span className="font-medium">{key}:</span> {value}
                      </div>
                    ))
                  }
                </div>
              </div>
            )}

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-100 text-blue-600 py-3 px-6 rounded-md font-medium hover:bg-blue-200 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Añadir al carrito
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Comprar ahora
              </button>
            </div>

            {/* Información adicional */}
            <div className="mt-6 flex items-center space-x-6 text-sm text-gray-500">
              {product.garantia && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Garantía oficial Apple
                </div>
              )}
              {product.envioGratis && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  Envío gratis
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

